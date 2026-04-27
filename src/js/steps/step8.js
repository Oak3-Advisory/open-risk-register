/** Step 8 — Risk Determination (Task 2-6, Table I-2) */
import { esc, computeRisk, badgeHtml, levelClass, wireNistButtons } from '../utils.js';
import { SCALE, RISK_MATRIX } from '../data.js';

const RISK_LABELS = {
  'Very High': 'Unacceptable risk. Corrective actions required immediately.',
  'High':      'Unacceptable risk. Corrective actions planned with urgency.',
  'Moderate':  'Risk may be acceptable. Corrective actions should be planned.',
  'Low':       'Risk is acceptable with monitoring.',
  'Very Low':  'Risk is acceptable.',
};

export function render(assessment, updateFn) {
  const events = assessment.threatEvents ?? [];
  // Compute risk levels for all events
  const enriched = events.map(ev => {
    const computed = computeRisk(ev.overallLikelihood, ev.impactLevel, SCALE, RISK_MATRIX);
    return { ...ev, _computedRisk: computed, _effectiveRisk: ev.riskOverride || computed };
  });

  function updateEvent(id, partial) {
    updateFn({ threatEvents: (assessment.threatEvents ?? []).map(e => e.id === id ? { ...e, ...partial } : e) });
  }

  const ratedCount = enriched.filter(e => e._computedRisk).length;
  const counts = { 'Very High': 0, 'High': 0, 'Moderate': 0, 'Low': 0, 'Very Low': 0 };
  enriched.forEach(e => { if (e._effectiveRisk && counts[e._effectiveRisk] !== undefined) counts[e._effectiveRisk]++; });

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Step 8 &mdash; What Is the Overall Risk?</h2>
        <p class="card-subtitle">
          <span class="nist-term">Risk Determination (Task 2-6 &mdash; Table I-2)</span>
          <button type="button" class="nist-ref-btn" data-nist-ref="risk" aria-label="NIST definition of Risk">&#9432;</button>
        </p>
      </div>
      <div class="card-body">
        <div class="info-box mb-5">
          Risk is determined by combining the <strong>Overall Likelihood</strong> (from Step 6) and the
          <strong>Level of Impact</strong> (from Step 7) using the risk matrix in NIST SP 800-30 R1, Table I-2.
          You may optionally override the calculated risk level if there is additional context not captured in
          the quantitative assessment.
        </div>

        <!-- Summary counters -->
        <div class="risk-summary-row">
          ${SCALE.slice().reverse().map(l => `
            <div class="risk-count-card risk-count-${levelClass(l)}">
              <span class="risk-count-num">${counts[l]}</span>
              <span class="risk-count-label">${esc(l)}</span>
            </div>`).join('')}
        </div>

        <!-- Risk matrix -->
        <details class="section-card collapsible-section">
          <summary class="section-title collapsible-summary">Risk Matrix (Table I-2)</summary>
          <div class="table-wrap mt-4">
            <table class="risk-matrix-table">
              <caption class="sr-only">Risk level matrix: rows are likelihood (Very Low to Very High), columns are impact (Very Low to Very High)</caption>
              <thead>
                <tr>
                  <th scope="col">Likelihood ↓ / Impact →</th>
                  ${SCALE.map(s => `<th scope="col">${esc(s)}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${SCALE.map((l, li) => `
                  <tr>
                    <th scope="row">${esc(l)}</th>
                    ${SCALE.map((imp, ii) => {
                      const risk = SCALE[RISK_MATRIX[li][ii]];
                      return `<td class="risk-cell risk-cell-${levelClass(risk)}">${esc(risk)}</td>`;
                    }).join('')}
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </details>

        <!-- Per-event risk review -->
        ${enriched.length === 0 ? `
          <div class="alert alert-warning">No threat events with likelihood and impact ratings. Please complete Steps 6 and 7.</div>
        ` : enriched.map(ev => `
          <div class="section-card event-risk-card" data-ev-id="${esc(ev.id)}">
            <div class="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 class="text-base font-semibold">${esc(ev.name)}</h3>
                <div class="flex gap-2 flex-wrap mt-2">
                  <span class="badge badge-neutral">
                    Likelihood: ${esc(ev.overallLikelihood || '—')}
                  </span>
                  <span class="badge badge-neutral">
                    Impact: ${esc(ev.impactLevel || '—')}
                  </span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs text-dim mb-1">
                  ${ev.riskOverride ? 'Overridden risk' : 'Calculated risk'}
                </div>
                ${ev._effectiveRisk
                  ? badgeHtml(ev._effectiveRisk)
                  : '<span class="text-muted">Not calculated</span>'}
              </div>
            </div>

            ${ev._computedRisk ? `
              <div class="surface-box">
                <p class="text-sm">${esc(RISK_LABELS[ev._effectiveRisk] ?? '')}</p>
              </div>` : `
              <div class="alert alert-warning mb-4">
                Risk cannot be calculated — likelihood or impact is not rated in steps 6 and 7.
              </div>`}

            <div class="form-group">
              <label class="label label-flex">
                <input type="checkbox" data-override-toggle="${esc(ev.id)}"
                  ${ev.riskOverride ? 'checked' : ''} />
                Override calculated risk level
              </label>
            </div>
            <div class="risk-override-row ${ev.riskOverride ? '' : 'hidden'}" id="override-${esc(ev.id)}">
              <div class="form-row form-row-2 mt-3">
                <div class="form-group">
                  <label class="label">Override Risk Level</label>
                  <select class="form-control form-control-sm" data-override-level="${esc(ev.id)}">
                    <option value="">— Select —</option>
                    ${SCALE.map(s => `<option value="${esc(s)}" ${ev.riskOverride === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label class="label">Reason for Override *</label>
                  <input type="text" class="form-control form-control-sm" value="${esc(ev.riskOverrideReason)}"
                    placeholder="Explain why the calculated risk was overridden…"
                    data-override-reason="${esc(ev.id)}" />
                </div>
              </div>
            </div>

            <div class="form-group mt-3">
              <label class="label">Risk Notes</label>
              <textarea class="form-control form-control-sm" rows="2"
                data-risk-notes="${esc(ev.id)}"
                placeholder="Notes about risk treatment, existing controls, or residual risk…">${esc(ev.riskNotes)}</textarea>
            </div>
          </div>`).join('')}

        <div class="section-card mt-5">
          <label class="label" for="f-risk-notes">Overall Assessment Notes</label>
          <textarea class="form-control" id="f-risk-notes" rows="4"
            placeholder="Summarize the risk determination results, key findings, or overall risk posture…">${esc(assessment.riskNotes)}</textarea>
        </div>

      </div>
    </div>`;

  wireNistButtons(el);

  // Override toggle
  el.querySelectorAll('[data-override-toggle]').forEach(cb => {
    cb.addEventListener('change', () => {
      const evId = cb.dataset.overrideToggle;
      const row = el.querySelector(`#override-${CSS.escape(evId)}`);
      if (row) row.classList.toggle('hidden', !cb.checked);
      if (!cb.checked) updateEvent(evId, { riskOverride: '', riskOverrideReason: '' });
    });
  });

  el.querySelectorAll('[data-override-level]').forEach(sel => {
    sel.addEventListener('change', () => updateEvent(sel.dataset.overrideLevel, { riskOverride: sel.value }));
  });

  el.querySelectorAll('[data-override-reason]').forEach(fld => {
    fld.addEventListener('input', () => updateEvent(fld.dataset.overrideReason, { riskOverrideReason: fld.value }));
  });

  el.querySelectorAll('[data-risk-notes]').forEach(ta => {
    ta.addEventListener('input', () => updateEvent(ta.dataset.riskNotes, { riskNotes: ta.value }));
  });

  el.querySelector('#f-risk-notes')?.addEventListener('input', e => updateFn({ riskNotes: e.target.value }));

  return el;
}

export function validate(_a) { return { valid: true, errors: [] }; }
