/** Step 0 — Dashboard */
import {
  listAssessments,
  deleteAssessment,
  deleteAllAssessments,
  createAssessment,
  saveAssessment,
  importAssessmentFromJson,
  importAssessmentFromEncryptedJson,
  exportAssessmentToJson,
  exportAssessmentToEncryptedJson,
  isEncryptedImportDocument,
} from '../state.js';
import { MAX_IMPORT_BYTES } from '../schema.js';
import { esc, fmtDate, levelClass, downloadFile, wireNistButtons, el, buttonEl, inputEl } from '../utils.js';
import { SCALE } from '../data.js';
import { SCENARIOS } from '../scenarios.js';
import { trackEvent } from '../tracking.js';

const TIER_LABELS = {
  org:    { badge: 'tier-badge-org',    text: 'Org / Process' },
  system: { badge: 'tier-badge-system', text: 'System' },
};

function trackStartAssessment({ tier, scenarioId }) {
  const payload = {
    tier,
    mode: scenarioId ? 'guided' : 'blank',
  };
  if (scenarioId) payload.scenarioId = scenarioId;
  trackEvent('start_assessment', payload);
}

export function render(_state, { openAssessment }) {
  const root = document.createElement('div');
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
    root.innerHTML = `
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
            Import Backup
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
        <strong>Sensitive data warning:</strong> Assessments are stored <strong>unencrypted</strong> in this browser's localStorage.
        Do not use this tool on shared devices or browsers you do not trust. Malicious scripts, browser extensions,
        and compromised endpoints can still read data stored on this origin. Export an <strong>encrypted backup</strong>
        for sensitive assessments, and use <strong>Delete all local data</strong> when you are finished.
      </div>
      <div class="flex gap-3 flex-wrap mb-5">
        <button id="btn-delete-all" class="btn btn-outline-danger" type="button" ${assessments.length === 0 ? 'disabled aria-disabled="true"' : ''}>Delete all local data</button>
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
                <button class="btn btn-primary btn-sm btn-export-encrypted" data-id="${esc(a.id)}" type="button">Export Encrypted</button>
                <button class="btn btn-secondary btn-sm btn-export" data-id="${esc(a.id)}" type="button">Export JSON</button>
                <button class="btn btn-sm btn-outline-danger btn-delete" data-id="${esc(a.id)}" type="button"
                  aria-label="Delete assessment ${esc(a.name)}">Delete</button>
              </div>
            </div>`).join('')}
        </div>`}`;

    // Wire NIST buttons (tier-1, tier-3 info)
    wireNistButtons(root);

    // ── New assessment panel flow ──────────────────────────────
    function showPanel(id) {
      ['mode-panel', 'scenario-panel', 'tier-panel'].forEach(p => {
        const panelEl = root.querySelector(`#${p}`);
        if (panelEl) panelEl.hidden = (p !== id);
      });
      root.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    root.querySelector('#btn-new')?.addEventListener('click', () => showPanel('mode-panel'));

    // Mode selection
    root.querySelector('#btn-mode-blank')?.addEventListener('click', () => {
      trackEvent('assessment_mode_blank');
      selectedScenario = null;
      showPanel('tier-panel');
    });
    root.querySelector('#btn-mode-guided')?.addEventListener('click', () => {
      trackEvent('assessment_mode_guided');
      showPanel('scenario-panel');
    });

    // Scenario selection
    root.querySelectorAll('[data-scenario]').forEach(card => {
      const activate = () => {
        const sc = SCENARIOS.find(s => s.id === card.dataset.scenario);
        if (!sc || !sc.available) return;
        trackEvent('guided_option_selected', { scenarioId: sc.id, scenarioName: sc.name });
        selectedScenario = sc;
        // Guided scenarios always use org tier — skip tier panel
        startNew('org');
      };
      card.addEventListener('click', activate);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') activate(); });
    });

    // Back buttons
    root.querySelector('#btn-back-to-mode')?.addEventListener('click', () => showPanel('mode-panel'));
    root.querySelector('#btn-back-to-prev')?.addEventListener('click', () => {
      showPanel(selectedScenario ? 'scenario-panel' : 'mode-panel');
    });

    // Wire events
    root.querySelector('#file-import')?.addEventListener('change', handleImport);
    root.querySelector('#btn-delete-all')?.addEventListener('click', handleDeleteAll);
    root.querySelector('#btn-tier-org')?.addEventListener('click', () => startNew('org'));
    root.querySelector('#btn-tier-system')?.addEventListener('click', () => startNew('system'));
    root.querySelectorAll('[data-open]').forEach(btn => {
      btn.addEventListener('click', () => openAssessment(btn.dataset.open));
      btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openAssessment(btn.dataset.open); });
    });
    root.querySelectorAll('.btn-open').forEach(btn => btn.addEventListener('click', () => openAssessment(btn.dataset.id)));
    root.querySelectorAll('.btn-export').forEach(btn => btn.addEventListener('click', () => handleExport(btn.dataset.id)));
    root.querySelectorAll('.btn-export-encrypted').forEach(btn => btn.addEventListener('click', () => handleEncryptedExport(btn.dataset.id)));
    root.querySelectorAll('.btn-delete').forEach(btn => btn.addEventListener('click', () => handleDelete(btn.dataset.id)));
  }

  function startNew(tier) {
    const a = createAssessment(tier);
    if (selectedScenario) applyScenario(a, selectedScenario);
    saveAssessment(a);
    trackStartAssessment({ tier, scenarioId: selectedScenario?.id });
    openAssessment(a.id);
  }

  function showStatus(kind, text) {
    const msg = document.createElement('div');
    msg.className = `alert ${kind === 'error' ? 'alert-error' : 'alert-info'}`;
    msg.setAttribute('role', kind === 'error' ? 'alert' : 'status');
    msg.textContent = text;
    root.prepend(msg);
    if (kind !== 'error') setTimeout(() => msg.remove(), 4000);
  }

  async function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMPORT_BYTES) {
      trackEvent('import_assessment', { status: 'failed', reason: 'file_too_large' });
      showStatus('error', 'Import failed: files larger than 1 MB are not supported.');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = async ev => {
      const payload = String(ev.target?.result ?? '');
      try {
        const format = isEncryptedImportDocument(payload) ? 'encrypted' : 'json';
        let id;
        if (format === 'encrypted') {
          const passphrase = await showPassphraseDialog({
            title: 'Decrypt encrypted backup',
            description: 'Enter the passphrase used when the encrypted backup was created.',
            confirmLabel: 'Decrypt & import',
            requireConfirmation: false,
          });
          if (!passphrase) return;
          id = await importAssessmentFromEncryptedJson(payload, passphrase);
        } else {
          id = importAssessmentFromJson(payload);
        }
        trackEvent('import_assessment', { status: 'success', format });
        draw();
        showStatus('info', 'Assessment imported successfully.');
      } catch (err) {
        trackEvent('import_assessment', { status: 'failed' });
        showStatus('error', `Import failed: ${err.message}`);
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
      trackEvent('export_json', { source: 'dashboard' });
    } catch (err) {
      showStatus('error', `Export failed: ${err.message}`);
    }
  }

  async function handleEncryptedExport(id) {
    const assessment = listAssessments().find(item => item.id === id);
    const passphrase = await showPassphraseDialog({
      title: 'Create encrypted backup',
      description: 'Use a strong passphrase. It is never stored and cannot be recovered later.',
      confirmLabel: 'Create backup',
      requireConfirmation: true,
    });
    if (!passphrase) return;

    try {
      const encrypted = await exportAssessmentToEncryptedJson(id, passphrase);
      const filename = `risk-assessment-${(assessment?.name ?? id).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.encrypted.json`;
      downloadFile(encrypted, filename, 'application/json');
      trackEvent('export_encrypted', { source: 'dashboard' });
      showStatus('info', 'Encrypted backup created successfully.');
    } catch (err) {
      showStatus('error', `Encrypted export failed: ${err.message}`);
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

  function handleDeleteAll() {
    showConfirmDialog(
      'Delete all local data?',
      'This permanently deletes every assessment stored in this browser, including imported data. Make sure you have exported backups first.',
      () => {
        deleteAllAssessments();
        draw();
        showStatus('info', 'All local assessment data has been deleted.');
      },
      'Delete all data'
    );
  }

  function showConfirmDialog(title, body, onConfirm, confirmLabel = 'Delete') {
    const overlay = el('div', {
      className: 'dialog-overlay',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': 'dlg-title',
    });
    const dialog = el('div', { className: 'dialog' });
    dialog.append(
      el('h3', { id: 'dlg-title', text: title }),
      el('p', { text: body })
    );

    const actions = el('div', { className: 'dialog-actions' }, [
      buttonEl({ id: 'dlg-cancel', className: 'btn btn-secondary', type: 'button', text: 'Cancel' }),
      buttonEl({ id: 'dlg-confirm', className: 'btn btn-danger', type: 'button', text: confirmLabel }),
    ]);
    dialog.appendChild(actions);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    overlay.querySelector('#dlg-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('#dlg-confirm').addEventListener('click', () => {
      overlay.remove();
      onConfirm();
    });
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  }

  function showPassphraseDialog({ title, description, confirmLabel, requireConfirmation }) {
    return new Promise(resolve => {
      const overlay = el('div', {
        className: 'dialog-overlay',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': 'passphrase-title',
      });
      const dialog = el('form', { className: 'dialog', novalidate: true });
      const passphraseInput = inputEl({ id: 'passphrase-input', className: 'form-control', type: 'password', autocomplete: 'new-password' });
      const confirmationInput = inputEl({ id: 'passphrase-confirm', className: 'form-control', type: 'password', autocomplete: 'new-password' });
      const errorEl = el('p', { className: 'text-danger text-sm', role: 'alert', hidden: true });

      dialog.append(
        el('h3', { id: 'passphrase-title', text: title }),
        el('p', { text: description }),
        el('label', { className: 'label', for: 'passphrase-input', text: 'Passphrase' }),
        passphraseInput
      );

      if (requireConfirmation) {
        dialog.append(
          el('label', { className: 'label mt-3', for: 'passphrase-confirm', text: 'Confirm passphrase' }),
          confirmationInput
        );
      }

      dialog.append(errorEl);
      dialog.appendChild(el('div', { className: 'dialog-actions mt-4' }, [
        buttonEl({ className: 'btn btn-secondary', type: 'button', text: 'Cancel' }),
        buttonEl({ className: 'btn btn-primary', type: 'submit', text: confirmLabel }),
      ]));
      overlay.appendChild(dialog);
      document.body.appendChild(overlay);

      const [cancelBtn] = dialog.querySelectorAll('button');
      const close = value => {
        overlay.remove();
        resolve(value);
      };
      const showError = message => {
        errorEl.hidden = false;
        errorEl.textContent = message;
      };

      cancelBtn.addEventListener('click', () => close(null));
      overlay.addEventListener('click', e => { if (e.target === overlay) close(null); });
      dialog.addEventListener('submit', e => {
        e.preventDefault();
        const passphrase = passphraseInput.value;
        if (passphrase.length < 12) {
          showError('Use a passphrase with at least 12 characters.');
          return;
        }
        if (requireConfirmation && passphrase !== confirmationInput.value) {
          showError('The passphrases do not match.');
          return;
        }
        close(passphrase);
      });

      passphraseInput.focus();
    });
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
  return root;
}

export function validate() { return { valid: true, errors: [] }; }

