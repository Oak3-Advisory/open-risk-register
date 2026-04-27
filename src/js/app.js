/** app.js — Main orchestrator with hash-based routing */
import { getAssessment, saveAssessment } from './state.js';
import { esc, scrollTop, showErrors } from './utils.js';
import * as step0 from './steps/step0.js';
import * as step1 from './steps/step1.js';
import * as step2 from './steps/step2.js';
import * as step3 from './steps/step3.js';
import * as step4 from './steps/step4.js';
import * as step5 from './steps/step5.js';
import * as step6 from './steps/step6.js';
import * as step7 from './steps/step7.js';
import * as step8 from './steps/step8.js';
import * as step9 from './steps/step9.js';

const STEPS = [step0, step1, step2, step3, step4, step5, step6, step7, step8, step9];
const STEP_LABELS = ['Dashboard', 'Setup', 'Risk Model', 'Threat Sources', 'Threat Events',
                     'Vulnerabilities', 'Likelihood', 'Impact', 'Risk', 'Results'];

let assessment = null;
let currentStep = 0;

const contentEl = document.getElementById('step-content');
const progressEl = document.getElementById('progress-bar-container');
const navEl = document.getElementById('wizard-nav');

// ── Hash routing ──────────────────────────────────────────────

function parseHash() {
  const hash = location.hash.slice(1); // strip leading #
  if (!hash || hash === 'dashboard') return { step: 0, id: null };
  const m = hash.match(/^assessment\/([^/]+)\/step\/(\d+)$/);
  if (m) return { step: parseInt(m[2], 10), id: m[1] };
  return { step: 0, id: null };
}

function setHash(step, id) {
  const next = step === 0 ? '#dashboard' : `#assessment/${id}/step/${step}`;
  if (location.hash !== next) {
    history.pushState(null, '', next);
  }
}

function navigate(step, id) {
  setHash(step, id ?? assessment?.id ?? null);
  applyRoute(step, id);
}

// Apply a route without touching the hash (used by hashchange handler)
function applyRoute(step, id) {
  if (step === 0) {
    assessment = null;
    currentStep = 0;
  } else {
    const a = id ? getAssessment(id) : assessment;
    if (!a) {
      // Unknown assessment — fall back to dashboard
      history.replaceState(null, '', '#dashboard');
      applyRoute(0, null);
      return;
    }
    assessment = a;
    currentStep = (step >= 1 && step <= 9) ? step : (a.currentStep ?? 1);
  }
  renderStep(currentStep);
}

// ── State helpers ─────────────────────────────────────────────

function updateFn(partial, rerender = false) {
  if (!assessment) return;
  Object.assign(assessment, partial);
  saveAssessment(assessment);
  if (rerender) renderStep(currentStep);
}

function openAssessment(id) {
  const a = getAssessment(id);
  if (!a) return;
  const step = (a.currentStep >= 1 && a.currentStep <= 9) ? a.currentStep : 1;
  navigate(step, id);
}

function goToDashboard() {
  navigate(0, null);
}

// ── Progress bar ──────────────────────────────────────────────

function renderProgressBar() {
  if (!assessment || currentStep === 0) {
    progressEl.innerHTML = '';
    return;
  }
  const completed = new Set(assessment.completedSteps ?? []);
  const total = STEP_LABELS.length - 1;
  const items = STEP_LABELS.slice(1).map((label, i) => {
    const n = i + 1;
    const isCompleted = completed.has(n);
    const isActive = n === currentStep;
    const state = isCompleted ? 'completed' : isActive ? 'active' : '';
    const isClickable = isCompleted || (n !== currentStep && completed.has(n - 1));
    const ariaLabel = `Step ${n}: ${label}${isCompleted ? ', completed' : isActive ? ', current step' : ''}`;
    const stepEl = `<div class="pstep${state ? ` pstep--${state}` : ''}" role="listitem">
        <button type="button" class="pstep-btn"
          ${isClickable ? `data-goto="${n}"` : 'disabled aria-disabled="true"'}
          aria-current="${isActive ? 'step' : 'false'}"
          aria-label="${ariaLabel}">
          <span aria-hidden="true">${isCompleted ? '\u2713' : n}</span>
        </button>
        <span class="pstep-label" aria-hidden="true">${esc(label)}</span>
      </div>`;
    if (i === 0) return stepEl;
    const filled = (completed.has(n - 1) || n <= currentStep) ? ' pstep-line--filled' : '';
    return `<div class="pstep-line${filled}" aria-hidden="true"></div>${stepEl}`;
  }).join('');
  progressEl.innerHTML = `
    <nav class="progress-steps" role="list"
      aria-label="Assessment progress: step ${currentStep} of ${total}">
      ${items}
    </nav>`;
  progressEl.querySelectorAll('[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => navigate(parseInt(btn.dataset.goto, 10), assessment.id));
  });
}

// ── Wizard nav ────────────────────────────────────────────────

function renderNav() {
  if (!assessment || currentStep === 0) {
    navEl.innerHTML = '';
    return;
  }

  navEl.innerHTML = `
    <div id="nav-errors" role="alert" aria-live="polite" class="error-list-container"></div>
    <div class="wizard-nav-buttons">
      ${currentStep > 1
        ? `<button type="button" id="btn-back" class="btn btn-secondary">← Back</button>`
        : `<button type="button" id="btn-dashboard" class="btn btn-ghost">← Dashboard</button>`}
      <span class="step-indicator" aria-label="Step ${currentStep} of 9">Step ${currentStep} / 9</span>
      ${currentStep < 9
        ? `<button type="button" id="btn-next" class="btn btn-primary">Next →</button>`
        : `<button type="button" id="btn-finish" class="btn btn-success">Finish ✓</button>`}
    </div>`;

  navEl.querySelector('#btn-back')?.addEventListener('click', () => {
    assessment.currentStep = currentStep - 1;
    saveAssessment(assessment);
    navigate(currentStep - 1, assessment.id);
  });

  navEl.querySelector('#btn-dashboard')?.addEventListener('click', goToDashboard);

  const handleAdvance = () => {
    const { valid, errors } = STEPS[currentStep].validate(assessment);
    const errEl = navEl.querySelector('#nav-errors');
    if (!valid) {
      showErrors(errEl, errors);
      errEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    showErrors(errEl, []);
    // Mark this step completed
    const completedSteps = assessment.completedSteps ?? [];
    if (!completedSteps.includes(currentStep)) completedSteps.push(currentStep);
    assessment.completedSteps = completedSteps;
    const next = Math.min(currentStep + 1, 9);
    assessment.currentStep = next;
    saveAssessment(assessment);
    navigate(next, assessment.id);
  };

  navEl.querySelector('#btn-next')?.addEventListener('click', handleAdvance);
  navEl.querySelector('#btn-finish')?.addEventListener('click', () => {
    assessment.currentStep = 9;
    saveAssessment(assessment);
    goToDashboard();
  });

  // Reflect current validity in the advance button state without blocking interaction
  const advanceBtn = navEl.querySelector('#btn-next') ?? navEl.querySelector('#btn-finish');
  if (advanceBtn) {
    const { valid } = STEPS[currentStep].validate(assessment);
    advanceBtn.disabled = !valid;
    advanceBtn.setAttribute('aria-disabled', String(!valid));
  }
}

// ── Render ────────────────────────────────────────────────────

function renderStep(step) {
  currentStep = step;
  scrollTop();
  renderProgressBar();

  contentEl.innerHTML = '';
  const stepModule = STEPS[step];
  if (!stepModule) return;

  let stepEl;
  if (step === 0) {
    stepEl = stepModule.render(null, { openAssessment });
  } else {
    function softRerender() {
      const newEl = STEPS[currentStep].render(assessment, (p2, r2, n2) => {
        Object.assign(assessment, p2);
        saveAssessment(assessment);
        if (r2) softRerender();
        else if (n2) renderNav();
      });
      contentEl.innerHTML = '';
      contentEl.appendChild(newEl);
      renderNav();
    }
    stepEl = stepModule.render(assessment, (partial, rerender, navOnly) => {
      Object.assign(assessment, partial);
      saveAssessment(assessment);
      if (rerender) softRerender();
      else if (navOnly) renderNav();
    });
  }

  contentEl.appendChild(stepEl);
  renderNav();
}

// ── Bootstrap ─────────────────────────────────────────────────

window.addEventListener('hashchange', () => {
  const { step, id } = parseHash();
  applyRoute(step, id);
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-new-assessment')?.addEventListener('click', () => {
    goToDashboard();
  });

  // Boot from URL hash
  const { step, id } = parseHash();
  applyRoute(step, id);

  // Wire NIST modal close button + backdrop click
  const nistModal = document.getElementById('nist-modal');
  if (nistModal) {
    nistModal.querySelector('#nist-modal-close')?.addEventListener('click', () => nistModal.close());
    nistModal.addEventListener('click', e => { if (e.target === nistModal) nistModal.close(); });
  }
});
