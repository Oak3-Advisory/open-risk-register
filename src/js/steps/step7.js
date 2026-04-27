/** Step 7 — Impact Assessment (Task 2-5) */
import { esc, badgeHtml, wireNistButtons } from '../utils.js';
import { SCALE } from '../data.js';

const IMPACT_DESC = {
  'Very High': 'The threat event could be expected to have multiple severe or catastrophic adverse effects on the organization\'s mission, operations, assets, individuals, other organizations, or the Nation.',
  'High':      'The threat event could be expected to have a severe or catastrophic adverse effect on the organization\'s mission, operations, assets, or individuals.',
  'Moderate':  'The threat event could be expected to have a serious adverse effect on the organization\'s mission, operations, assets, or individuals.',
  'Low':       'The threat event could be expected to have a limited adverse effect on the organization\'s mission, operations, assets, or individuals.',
  'Very Low':  'The threat event could be expected to have a negligible adverse effect on the organization\'s mission, operations, assets, or individuals.',
};

export function render(assessment, updateFn) {
  const events = assessment.threatEvents ?? [];

  function updateEvent(id, partial) {
    const wasValid = (assessment.threatEvents ?? []).every(e => !!e.impactLevel);
    const arr = (assessment.threatEvents ?? []).map(e => e.id === id ? { ...e, ...partial } : e);
    const isValid  = arr.every(e => !!e.impactLevel);
    updateFn({ threatEvents: arr }, false, wasValid !== isValid);
  }

  const el = document.createElement('div');

  if (events.length === 0) {
    el.innerHTML = `
      <div class="card"><div class="card-header"><h2 class="card-title">Step 7 &mdash; Impact Assessment</h2></div>
      <div class="card-body"><div class="alert alert-warning">No threat events selected. Please go back to Step 4.</div></div></div>`;
    return el;
  }

  el.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Step 7 &mdash; How Much Harm Could Each Event Cause?</h2>
        <p class="card-subtitle">
          <span class="nist-term">Impact Assessment (Task 2-5)</span>
          <button type="button" class="nist-ref-btn" data-nist-ref="impact" aria-label="NIST definition of Impact">&#9432;</button>
        </p>
      </div>
      <div class="card-body">
        <div class="info-box mb-5">
          The <strong>level of impact</strong> reflects the severity of harm that would result if a threat event
          were to occur. Consider consequences for the system's confidentiality, integrity, and availability —
          and the downstream effects on the organization's mission, assets, individuals, or other organizations.
          <button type="button" class="nist-ref-btn" data-nist-ref="impact" aria-label="More about impact levels">&#9432;</button>
        </div>
        ${events.map(ev => `
          <div class="section-card event-impact-card" data-ev-id="${esc(ev.id)}">
            <div class="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 class="text-base font-semibold">${esc(ev.name)}</h3>
                <span class="badge badge-${ev.type === 'adversarial' ? 'high' : 'neutral'} mt-1">
                  ${ev.type === 'adversarial' ? 'Adversarial' : 'Non-Adversarial'}
                </span>
              </div>
              ${ev.impactLevel ? badgeHtml(ev.impactLevel) : '<span class="badge badge-neutral">Not rated</span>'}
            </div>

            <div class="scale-cards" role="group" aria-label="Impact level for ${esc(ev.name)}">
              ${SCALE.map(s => `
                <button type="button" class="scale-card-btn ${ev.impactLevel === s ? 'active' : ''}"
                  data-impact-ev="${esc(ev.id)}" data-value="${esc(s)}"
                  aria-pressed="${ev.impactLevel === s ? 'true' : 'false'}">
                  <strong>${esc(s)}</strong>
                  <p>${esc(IMPACT_DESC[s])}</p>
                </button>`).join('')}
            </div>

            <div class="form-group mt-4">
              <label class="label">Impact Rationale / Notes</label>
              <textarea class="form-control form-control-sm" rows="3"
                data-impact-notes="${esc(ev.id)}"
                placeholder="Describe the specific harm that could result (e.g., data breach exposing PII of 10,000 individuals, system downtime of 48 hours)…">${esc(ev.impactNotes)}</textarea>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  wireNistButtons(el);

  el.querySelectorAll('[data-impact-ev]').forEach(btn => {
    btn.addEventListener('click', () => {
      updateEvent(btn.dataset.impactEv, { impactLevel: btn.dataset.value });
      const card = btn.closest('.event-impact-card');
      card?.querySelectorAll('[data-impact-ev]').forEach(b => {
        b.classList.toggle('active', b.dataset.value === btn.dataset.value);
        b.setAttribute('aria-pressed', b.dataset.value === btn.dataset.value ? 'true' : 'false');
      });
      // Update badge
      const header = card?.querySelector('.badge.badge-neutral, .badge.badge-very-high, .badge.badge-high, .badge.badge-moderate, .badge.badge-low, .badge.badge-very-low');
      if (header) header.outerHTML = badgeHtml(btn.dataset.value);
    });
  });

  el.querySelectorAll('[data-impact-notes]').forEach(ta => {
    ta.addEventListener('input', () => updateEvent(ta.dataset.impactNotes, { impactNotes: ta.value }));
  });

  return el;
}

export function validate(assessment) {
  const events = assessment.threatEvents ?? [];
  const unrated = events.filter(e => !e.impactLevel);
  if (unrated.length > 0 && events.length > 0) {
    return {
      valid: false,
      errors: [`${unrated.length} threat event(s) have no impact rating. Please rate all events.`]
    };
  }
  return { valid: true, errors: [] };
}
