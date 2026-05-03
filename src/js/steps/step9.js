/** Step 9 — Results & Report (Task 2-7) */
import { esc, badgeHtml, levelClass, computeRisk, downloadFile, wireNistButtons, el, buttonEl, inputEl } from '../utils.js';
import { SCALE, RISK_MATRIX, OVERALL_LIKELIHOOD_MATRIX } from '../data.js';
import { exportAssessmentToJson, exportAssessmentToEncryptedJson } from '../state.js';
import { trackEvent } from '../tracking.js';

const ORDER = ['Very High', 'High', 'Moderate', 'Low', 'Very Low', ''];

function effectiveRisk(ev) { return ev.riskOverride || ev.riskLevel || computeRisk(ev.overallLikelihood, ev.impactLevel, SCALE, RISK_MATRIX) || ''; }

export function render(assessment, updateFn) {
  const events = assessment.threatEvents ?? [];
  const sorted = [...events].sort((a, b) => ORDER.indexOf(effectiveRisk(a)) - ORDER.indexOf(effectiveRisk(b)));

  const counts = { 'Very High': 0, 'High': 0, 'Moderate': 0, 'Low': 0, 'Very Low': 0 };
  events.forEach(e => { const r = effectiveRisk(e); if (counts[r] !== undefined) counts[r]++; });

  const root = document.createElement('div');
  root.innerHTML = `
    <!-- Report header (visible in print only — injected into #print-region by app) -->

    <div class="card">
        <div class="card-header">
          <div class="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 class="card-title">Step 9 &mdash; Results &amp; Report</h2>
              <p class="card-subtitle">
                <span class="nist-term">Risk Register (Task 2-7)</span>
                <button type="button" class="nist-ref-btn" data-nist-ref="risk" aria-label="NIST definition of Risk">&#9432;</button>
              </p>
            </div>
            <div class="flex gap-3 flex-wrap">
              <button id="btn-pdf" class="btn btn-secondary" type="button">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><polyline points="14,2 14,8 20,8"/></svg>
                Export PDF
              </button>
              <button id="btn-export-encrypted" class="btn btn-primary" type="button">Export Encrypted</button>
              <button id="btn-export" class="btn btn-secondary" type="button">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export JSON
              </button>
            </div>
          </div>
        </div>

        <div class="card-body">

          <!-- Completion banner -->
          <div class="completion-banner ${(assessment.completedSteps ?? []).length >= 8 ? 'completion-banner--complete' : 'completion-banner--progress'}">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${(assessment.completedSteps ?? []).length >= 8
                ? `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>`
                : `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`}
            </svg>
            <div class="completion-banner-body">
              ${(assessment.completedSteps ?? []).length >= 8 ? `
              <strong>Assessment complete &mdash; well done!</strong>
              <p>You have worked through all the steps and your risk register is ready. We recommend <strong>downloading an encrypted backup</strong> right now &mdash; it protects the full assessment while still letting you reload or share it later.</p>
              ` : `
              <strong>Your results so far</strong>
              <p>You can review your risk register at any stage. Once you have finished all steps, we recommend <strong>saving an encrypted backup</strong> so you do not lose your work and keep the data better protected.</p>
              `}
              <button class="btn btn-primary btn-sm btn-download-encrypted" type="button">Download encrypted backup</button>
              <button class="btn btn-secondary btn-sm btn-download-json" type="button">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download JSON backup
              </button>
            </div>
          </div>

          <!-- Assessment metadata -->
          <div class="section-card mb-5">
            <h3 class="section-title">Assessment Details</h3>
            <div class="summary-grid">
              <div><span class="summary-label">Assessment</span><span class="summary-value">${esc(assessment.name)}</span></div>
              <div><span class="summary-label">Organisation</span><span class="summary-value">${esc(assessment.organization || '—')}</span></div>
              <div><span class="summary-label">Assessor</span><span class="summary-value">${esc(assessment.assessor || '—')}</span></div>
              <div><span class="summary-label">Date</span><span class="summary-value">${esc(assessment.date || '—')}</span></div>
              <div><span class="summary-label">${assessment.tier === 'org' ? 'Scope' : 'System'}</span><span class="summary-value">${esc(assessment.systemName || '—')}</span></div>
              <div><span class="summary-label">Assessment tier</span><span class="summary-value">${assessment.tier === 'org' ? 'Org / Process (Tier 1–2)' : 'System (Tier 3)'}</span></div>
              <div><span class="summary-label">Approach</span><span class="summary-value">${esc(assessment.assessmentApproach || '—')}</span></div>
              ${assessment.nis2EntityType ? `<div><span class="summary-label">NIS2 entity type</span><span class="summary-value">${esc({ essential: 'Essential Entity', important: 'Important Entity', 'not-applicable': 'Not applicable' }[assessment.nis2EntityType] ?? assessment.nis2EntityType)}</span></div>` : ''}
              ${assessment.riskTolerance ? `<div><span class="summary-label">Risk Tolerance</span><span class="summary-value">${badgeHtml(assessment.riskTolerance)}</span></div>` : ''}
            </div>
          </div>

          <!-- Risk summary -->
          <div class="section-card mb-5">
            <h3 class="section-title">Risk Summary</h3>
            <div class="flex gap-4 flex-wrap mb-4">
              ${SCALE.slice().reverse().map(l => `
                <div class="risk-count-card risk-count-${levelClass(l)}">
                  <span class="risk-count-num">${counts[l]}</span>
                  <span class="risk-count-label">${esc(l)}</span>
                </div>`).join('')}
            </div>
          </div>

          <!-- Risk register table -->
          <div class="section-card mb-5">
            <h3 class="section-title">Risk Register (sorted by risk level)</h3>
            ${sorted.length === 0 ? `
              <p class="text-muted text-italic">No threat events assessed.</p>
            ` : `
              <div class="table-wrap">
                <table class="data-table">
                  <caption class="sr-only">Risk register: threat events sorted by risk level, highest first</caption>
                  <thead>
                    <tr>
                      <th scope="col">Threat Event</th>
                      <th scope="col">Type</th>
                      <th scope="col">Relevance</th>
                      <th scope="col">Linked Sources</th>
                      <th scope="col">Overall Likelihood</th>
                      <th scope="col">Impact</th>
                      <th scope="col">Risk Level</th>
                      <th scope="col">Override</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${sorted.map(ev => {
                      const risk = effectiveRisk(ev);
                      const sources = assessment.threatSources ?? [];
                      const srcNames = (ev.threatSourceIds ?? [])
                        .map(id => sources.find(s => s.id === id)?.name ?? id)
                        .join(', ') || '—';
                      return `
                        <tr>
                          <td>${esc(ev.name)}</td>
                          <td><span class="badge badge-${ev.type === 'adversarial' ? 'high' : 'neutral'}">${esc(ev.type === 'adversarial' ? 'Adversarial' : 'Non-Adv.')}</span></td>
                          <td>${esc(ev.relevance || '—')}</td>
                          <td class="text-sm">${esc(srcNames)}</td>
                          <td>${ev.overallLikelihood ? badgeHtml(ev.overallLikelihood) : '<span class="text-muted">—</span>'}</td>
                          <td>${ev.impactLevel ? badgeHtml(ev.impactLevel) : '<span class="text-muted">—</span>'}</td>
                          <td>${risk ? badgeHtml(risk) : '<span class="text-muted">—</span>'}</td>
                          <td class="text-sm">${ev.riskOverride ? `<span title="${esc(ev.riskOverrideReason)}">Yes</span>` : '—'}</td>
                        </tr>`;
                    }).join('')}
                  </tbody>
                </table>
              </div>`}
          </div>

          <!-- Overall notes -->
          ${assessment.riskNotes ? `
            <div class="section-card mt-4">
              <h3 class="section-title">Assessment Notes</h3>
              <p>${esc(assessment.riskNotes)}</p>
            </div>` : ''}

        </div>
      </div>
    `;

  wireNistButtons(root);

  function doExport() {
    try {
      const json = exportAssessmentToJson(assessment.id);
      const filename = `risk-assessment-${(assessment.name || assessment.id).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.json`;
      downloadFile(json, filename, 'application/json');
      trackEvent('export_json', { source: 'results' });
    } catch (err) {
      alert(`Export failed: ${err.message}`);
    }
  }

  function promptForPassphrase() {
    return new Promise(resolve => {
      const overlay = el('div', {
        className: 'dialog-overlay',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': 'results-passphrase-title',
      });
      const dialog = el('form', { className: 'dialog', novalidate: true });
      const passphraseInput = inputEl({ id: 'results-passphrase', className: 'form-control', type: 'password', autocomplete: 'new-password' });
      const confirmInput = inputEl({ id: 'results-passphrase-confirm', className: 'form-control', type: 'password', autocomplete: 'new-password' });
      const errorEl = el('p', { className: 'text-danger text-sm', role: 'alert', hidden: true });

      dialog.append(
        el('h3', { id: 'results-passphrase-title', text: 'Create encrypted backup' }),
        el('p', { text: 'Use a strong passphrase. It is never stored and cannot be recovered later.' }),
        el('label', { className: 'label', for: 'results-passphrase', text: 'Passphrase' }),
        passphraseInput,
        el('label', { className: 'label mt-3', for: 'results-passphrase-confirm', text: 'Confirm passphrase' }),
        confirmInput,
        errorEl,
        el('div', { className: 'dialog-actions mt-4' }, [
          buttonEl({ className: 'btn btn-secondary', type: 'button', text: 'Cancel' }),
          buttonEl({ className: 'btn btn-primary', type: 'submit', text: 'Create backup' }),
        ])
      );
      overlay.appendChild(dialog);
      document.body.appendChild(overlay);

      const [cancelBtn] = dialog.querySelectorAll('button');
      const close = value => {
        overlay.remove();
        resolve(value);
      };

      cancelBtn.addEventListener('click', () => close(null));
      overlay.addEventListener('click', event => { if (event.target === overlay) close(null); });
      dialog.addEventListener('submit', event => {
        event.preventDefault();
        if (passphraseInput.value.length < 12) {
          errorEl.hidden = false;
          errorEl.textContent = 'Use a passphrase with at least 12 characters.';
          return;
        }
        if (passphraseInput.value !== confirmInput.value) {
          errorEl.hidden = false;
          errorEl.textContent = 'The passphrases do not match.';
          return;
        }
        close(passphraseInput.value);
      });

      passphraseInput.focus();
    });
  }

  async function doEncryptedExport() {
    const passphrase = await promptForPassphrase();
    if (!passphrase) return;
    try {
      const encrypted = await exportAssessmentToEncryptedJson(assessment.id, passphrase);
      const filename = `risk-assessment-${(assessment.name || assessment.id).replace(/[^a-z0-9]/gi, '-').toLowerCase()}.encrypted.json`;
      downloadFile(encrypted, filename, 'application/json');
      trackEvent('export_encrypted', { source: 'results' });
    } catch (err) {
      alert(`Encrypted export failed: ${err.message}`);
    }
  }

  function loadPdfBundle() {
    return new Promise((resolve, reject) => {
      if (typeof window.generateRiskPdf === 'function') { resolve(); return; }
      const script = document.createElement('script');
      script.src = '/dist/pdf-bundle.js?v=1';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Could not load PDF library'));
      document.head.appendChild(script);
    });
  }

  root.querySelector('#btn-pdf')?.addEventListener('click', async () => {
    const btn = root.querySelector('#btn-pdf');
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = 'Generating…';
    try {
      await loadPdfBundle();
      window.generateRiskPdf(assessment);
      trackEvent('export_pdf', { source: 'results' });
    } catch (e) {
      alert(`PDF generation failed: ${e.message}`);
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalHTML;
    }
  });
  root.querySelector('#btn-export')?.addEventListener('click', doExport);
  root.querySelector('#btn-export-encrypted')?.addEventListener('click', doEncryptedExport);
  root.querySelector('.btn-download-json')?.addEventListener('click', doExport);
  root.querySelector('.btn-download-encrypted')?.addEventListener('click', doEncryptedExport);

  return root;
}

export function validate(_a) { return { valid: true, errors: [] }; }
