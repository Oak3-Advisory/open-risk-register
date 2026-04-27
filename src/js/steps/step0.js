/** Step 0 — Dashboard */
import { listAssessments, deleteAssessment, createAssessment, saveAssessment,
         importAssessmentFromJson, exportAssessmentToJson } from '../state.js';
import { esc, uid, fmtDate, levelClass, downloadFile, wireNistButtons } from '../utils.js';
import { SCALE } from '../data.js';
import { SCENARIOS } from '../scenarios.js';

const TIER_LABELS = {
  org:    { badge: 'tier-badge-org',    text: 'Org / Process' },
  system: { badge: 'tier-badge-system', text: 'System' },
};

export function render(_state, { openAssessment }) {
  const el = document.createElement('div');
  let selectedScenario = null; // set when user picks a guided scenario

  function buildRiskSummary(a) {
    const counts = { 'Very High': 0, 'High': 0, 'Moderate': 0, 'Low': 0, 'Very Low': 0 };
    (a.threatEvents ?? []).forEach(te => {
      const r = te.riskOverride || te.riskLevel;
      if (counts[r] !== undefined) counts[r]++;
    });
    const total = Object.values(counts).reduce((s, v) => s + v, 0);
    if (!total) return '<span class="text-muted">No risk items yet</span>';
    return SCALE.slice().reverse().filter(l => counts[l] > 0).map(l =>
      `<span class="badge badge-${levelClass(l)}">${counts[l]} ${esc(l)}</span>`
    ).join(' ');
  }

  function tierBadge(a) {
    const t = a.tier === 'org' ? TIER_LABELS.org : TIER_LABELS.system;
    return `<span class="tier-badge ${t.badge}">${t.text}</span>`;
  }

  function draw() {
    const assessments = listAssessments();
    el.innerHTML = `
      <div class="flex items-start justify-between flex-wrap gap-4 mb-6">
        <div>
          <h1 class="dashboard-title">Risk Assessment Dashboard</h1>
          <p class="dashboard-desc">
            Conduct a structured cybersecurity risk assessment using a proven methodology published by the
            U.S. National Institute of Standards and Technology —
            <button type="button" class="nist-ref-btn nist-ref-inline" data-nist-ref="nist-sp-800-30" aria-label="What is NIST SP 800-30?">NIST SP 800-30</button>.
            <strong>All data is stored locally in this browser</strong> — nothing is sent to any server.
          </p>
        </div>
        <div class="flex gap-3 flex-wrap">
          <button id="btn-new" class="btn btn-primary" type="button">+ New Assessment</button>
          <label class="btn btn-secondary" tabindex="0">
            Import JSON
            <input type="file" id="file-import" accept=".json,application/json" class="input-file-hidden" aria-label="Import JSON assessment file" />
          </label>
        </div>
      </div>

      <!-- Panel 1: choose blank vs guided (hidden until New Assessment is clicked) -->
      <div id="mode-panel" class="new-assessment-panel" hidden>
        <h3>How do you want to start?</h3>
        <p>Choose a blank assessment to fill in everything yourself, or start with a guided scenario that pre-fills threat sources, events, and vulnerabilities based on publicly available evidence.</p>
        <div class="mode-select-grid">
          <button type="button" id="btn-mode-guided" class="mode-card mode-card--featured">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div class="mode-card-label-row">
              <strong>Guided Scenario</strong>
              <span class="badge badge-accent">Recommended</span>
            </div>
            <p>Pre-filled with evidence-based threat data for a specific attack type. Review and adapt each item to your environment.</p>
          </button>
          <button type="button" id="btn-mode-blank" class="mode-card">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
            <strong>Blank Assessment</strong>
            <p>Start from scratch. All fields are empty — you define the scope, threats, and risks yourself.</p>
          </button>
        </div>
      </div>

      <!-- Panel 2: scenario picker (shown after choosing Guided) -->
      <div id="scenario-panel" class="new-assessment-panel" hidden>
        <div class="panel-nav">
          <button type="button" id="btn-back-to-mode" class="btn btn-ghost btn-sm">← Back</button>
          <h3>Choose a threat scenario</h3>
        </div>
        <p>Select the attack type that best fits what you want to assess. Each available scenario comes pre-filled with sources, events, and vulnerabilities you can review and adjust.</p>
        <div class="scenario-select-grid">
          ${SCENARIOS.map(sc => `
            <div class="scenario-card ${sc.available ? '' : 'scenario-card--disabled'}" ${sc.available ? `role="button" tabindex="0" data-scenario="${esc(sc.id)}"` : ''} aria-label="${esc(sc.name)}${sc.available ? '' : ' — coming soon'}">
              <div class="scenario-card-icon">${sc.icon ?? ''}</div>
              <div class="scenario-card-body">
                <div class="scenario-card-title-row">
                  <strong>${esc(sc.name)}</strong>
                  ${!sc.available ? '<span class="badge badge-neutral badge-xs">Coming soon</span>' : ''}
                </div>
                <p>${esc(sc.description)}</p>
                <div class="scenario-tags">
                  ${(sc.tags ?? []).map(t => `<span class="scenario-tag">${esc(t)}</span>`).join('')}
                </div>
              </div>
            </div>`).join('')}
        </div>
      </div>

      <!-- Panel 3: tier selection (shown after blank or after choosing a scenario) -->
      <div id="tier-panel" class="new-assessment-panel" hidden>
        <div class="panel-nav">
          <button type="button" id="btn-back-to-prev" class="btn btn-ghost btn-sm">← Back</button>
          <h3>Assessment scope</h3>
        </div>
        <p>Choose the right level for your organisation. You can always start with an Organisation Assessment and add system-level assessments later.</p>
        <div class="tier-select-grid">
          <div class="tier-select-card">
            <div class="flex items-center justify-between">
              <span class="tier-badge tier-badge-org">Tier 1 &amp; 2</span>
              <button type="button" class="nist-ref-btn" data-nist-ref="tier-1" aria-label="NIST definition of Tier 1 and 2">&#9432;</button>
            </div>
            <h4>Organisation Assessment</h4>
            <p>Assess risks across your whole organisation or a key business process. Recommended starting point if this is your first risk assessment.</p>
            <button type="button" class="btn btn-primary btn-sm" id="btn-tier-org">Start Organisation Assessment</button>
          </div>
          <div class="tier-select-card">
            <div class="flex items-center justify-between">
              <span class="tier-badge tier-badge-system">Tier 3</span>
              <button type="button" class="nist-ref-btn" data-nist-ref="tier-3" aria-label="NIST definition of Tier 3">&#9432;</button>
            </div>
            <h4>System Assessment</h4>
            <p>Assess a specific IT system in depth. Best when IT and the business are jointly reviewing a defined system.</p>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-tier-system">Start System Assessment</button>
          </div>
        </div>
      </div>

      <div class="alert alert-info mb-5">
        <strong>Browser storage notice:</strong> Assessments are saved in your browser's localStorage.
        Clearing browser data will permanently delete all assessments. Use <strong>Export JSON</strong>
        on each assessment to back up your work.
      </div>
      ${assessments.length === 0 ? `
        <div class="card empty-state-card">
          <svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" class="empty-state-icon">
            <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M12 11v4m0-8v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <h2 class="empty-state-title">No assessments yet</h2>
          <p class="empty-state-desc">
            Create your first risk assessment or import an existing one from a JSON file.
          </p>
        </div>` : `
        <div class="assessment-list">
          ${assessments.map(a => `
            <div class="assessment-card" data-id="${esc(a.id)}">
              <div class="assessment-card-body" role="button" tabindex="0" data-open="${esc(a.id)}"
                aria-label="Open assessment: ${esc(a.name)}">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 flex-wrap mb-2">
                      <h3 class="assessment-name">${esc(a.name)}</h3>
                      ${tierBadge(a)}
                      ${a.scenarioId ? `<span class="scenario-badge">${esc(SCENARIOS.find(s => s.id === a.scenarioId)?.name ?? a.scenarioId)}</span>` : ''}
                      <span class="badge badge-neutral badge-xs">Step ${a.currentStep ?? 1} of 9</span>
                    </div>
                    ${a.systemName ? `<p class="assessment-meta">${a.tier === 'org' ? 'Scope' : 'System'}: <strong>${esc(a.systemName)}</strong></p>` : ''}
                    ${a.organization ? `<p class="assessment-meta-sm">${esc(a.organization)}</p>` : ''}
                    <div class="flex gap-2 flex-wrap mb-3">
                      ${buildRiskSummary(a)}
                    </div>
                    <p class="assessment-timestamp">
                      Created ${fmtDate(a.createdAt)} &nbsp;·&nbsp; Updated ${fmtDate(a.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
              <div class="assessment-card-actions">
                <button class="btn btn-secondary btn-sm btn-open" data-id="${esc(a.id)}" type="button">Open</button>
                <button class="btn btn-secondary btn-sm btn-export" data-id="${esc(a.id)}" type="button">Export JSON</button>
                <button class="btn btn-sm btn-outline-danger btn-delete" data-id="${esc(a.id)}" type="button"
                  aria-label="Delete assessment ${esc(a.name)}">Delete</button>
              </div>
            </div>`).join('')}
        </div>`}`;

    // Wire NIST buttons (tier-1, tier-3 info)
    wireNistButtons(el);

    // ── New assessment panel flow ──────────────────────────────
    function showPanel(id) {
      ['mode-panel', 'scenario-panel', 'tier-panel'].forEach(p => {
        const panelEl = el.querySelector(`#${p}`);
        if (panelEl) panelEl.hidden = (p !== id);
      });
      el.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    el.querySelector('#btn-new')?.addEventListener('click', () => showPanel('mode-panel'));

    // Mode selection
    el.querySelector('#btn-mode-blank')?.addEventListener('click', () => {
      selectedScenario = null;
      showPanel('tier-panel');
    });
    el.querySelector('#btn-mode-guided')?.addEventListener('click', () => showPanel('scenario-panel'));

    // Scenario selection
    el.querySelectorAll('[data-scenario]').forEach(card => {
      const activate = () => {
        const sc = SCENARIOS.find(s => s.id === card.dataset.scenario);
        if (!sc || !sc.available) return;
        selectedScenario = sc;
        // Guided scenarios always use org tier — skip tier panel
        startNew('org');
      };
      card.addEventListener('click', activate);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
    });

    // Back buttons
    el.querySelector('#btn-back-to-mode')?.addEventListener('click', () => showPanel('mode-panel'));
    el.querySelector('#btn-back-to-prev')?.addEventListener('click', () => {
      showPanel(selectedScenario ? 'scenario-panel' : 'mode-panel');
    });

    // Wire events
    el.querySelector('#file-import')?.addEventListener('change', handleImport);
    el.querySelector('#btn-tier-org')?.addEventListener('click', () => startNew('org'));
    el.querySelector('#btn-tier-system')?.addEventListener('click', () => startNew('system'));
    el.querySelectorAll('[data-open]').forEach(btn => {
      btn.addEventListener('click', () => openAssessment(btn.dataset.open));
      btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openAssessment(btn.dataset.open); });
    });
    el.querySelectorAll('.btn-open').forEach(btn => btn.addEventListener('click', () => openAssessment(btn.dataset.id)));
    el.querySelectorAll('.btn-export').forEach(btn => btn.addEventListener('click', () => handleExport(btn.dataset.id)));
    el.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', () => handleDelete(btn.dataset.id)));
  }

  function startNew(tier) {
    const a = createAssessment(tier);
    if (selectedScenario) applyScenario(a, selectedScenario);
    saveAssessment(a);
    openAssessment(a.id);
  }

  function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const id = importAssessmentFromJson(ev.target.result);
        draw();
        const msg = document.createElement('div');
        msg.className = 'alert alert-info';
        msg.setAttribute('role', 'status');
        msg.textContent = 'Assessment imported successfully.';
        el.prepend(msg);
        setTimeout(() => msg.remove(), 3000);
      } catch (err) {
        const msg = document.createElement('div');
        msg.className = 'alert alert-error';
        msg.setAttribute('role', 'alert');
        msg.textContent = `Import failed: ${err.message}`;
        el.prepend(msg);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function handleExport(id) {
    try {
      const json = exportAssessmentToJson(id);
      const a = listAssessments().find(x => x.id === id);
      const filename = `risk-assessment-${(a?.name ?? id).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.json`;
      downloadFile(json, filename, 'application/json');
    } catch (err) {
      alert(`Export failed: ${err.message}`);
    }
  }

  function handleDelete(id) {
    const a = listAssessments().find(x => x.id === id);
    showConfirmDialog(
      `Delete "${a?.name ?? 'this assessment'}"?`,
      'This will permanently remove all assessment data from your browser. This action cannot be undone.',
      () => { deleteAssessment(id); draw(); }
    );
  }

  function showConfirmDialog(title, body, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'dialog-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'dlg-title');
    overlay.innerHTML = `
      <div class="dialog">
        <h3 id="dlg-title">${esc(title)}</h3>
        <p>${esc(body)}</p>
        <div class="dialog-actions">
          <button id="dlg-cancel" class="btn btn-secondary" type="button">Cancel</button>
          <button id="dlg-confirm" class="btn btn-danger" type="button">Delete</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('#dlg-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#dlg-confirm').addEventListener('click', () => { overlay.remove(); onConfirm(); });
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  }

  function applyScenario(assessment, scenario) {
    const d = scenario.defaults ?? {};
    if (d.name)        assessment.name        = d.name;
    if (d.purpose)     assessment.purpose     = d.purpose;
    if (d.scope)       assessment.scope       = d.scope;
    if (d.assumptions) assessment.assumptions = d.assumptions;
    assessment.scenarioId      = scenario.id;
    assessment.analysisApproach = 'threat-oriented';
    assessment.threatSources    = [];
    assessment.threatEvents     = [];

    assessment.vulnerabilities = [];
    assessment.predisposingConditions = [];
  }

  draw();
  return el;
}

export function validate() { return { valid: true, errors: [] }; }

