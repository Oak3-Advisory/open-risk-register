/** Step 5 — Vulnerabilities & Predisposing Conditions (Task 2-3) */
import { esc, uid, wireNistButtons } from '../utils.js';
import { PREDISPOSING_TYPES, SCALE } from '../data.js';
import { SCENARIOS } from '../scenarios.js';

function scaleSelect(name, value, label) {
  return `<select class="form-control form-control-sm" name="${esc(name)}" aria-label="${esc(label)}">
    <option value="">— Select —</option>
    ${SCALE.map(s => `<option value="${esc(s)}" ${value === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
  </select>`;
}

export function render(assessment, updateFn) {
  const vulns = assessment.vulnerabilities ?? [];
  const preds = assessment.predisposingConditions ?? [];

  function saveVulns(arr) { updateFn({ vulnerabilities: arr }, true); }
  function savePreds(arr) { updateFn({ predisposingConditions: arr }, true); }

  const scenario = assessment.scenarioId ? (SCENARIOS.find(s => s.id === assessment.scenarioId) ?? null) : null;
  const vulnSuggestions = scenario?.vulnerabilities ?? [];

  const PRED_SUGGESTIONS = [
    { group: 'increase', name: 'Highly networked architecture with many external connections',   description: 'The system has numerous external connections, increasing the attack surface and exposure to remote threats.' },
    { group: 'increase', name: 'Legacy systems that cannot receive security patches',             description: 'One or more system components are past end-of-life or cannot be patched, leaving known vulnerabilities permanently unmitigated.' },
    { group: 'increase', name: 'High staff turnover leading to inconsistent security awareness',  description: 'Frequent changes in personnel result in gaps in security training and inconsistent adherence to security procedures.' },
    { group: 'increase', name: 'Reliance on a small number of critical suppliers',               description: 'Key operational dependencies are concentrated in a small number of external suppliers, increasing supply-chain risk.' },
    { group: 'increase', name: 'Sensitive data stored and processed in bulk',                    description: 'Large volumes of sensitive or regulated data are held in the system, making it a high-value target.' },
    { group: 'decrease', name: 'Strong network segmentation limiting lateral movement',          description: 'Network zones are isolated so that a compromise in one segment cannot easily spread to others.' },
    { group: 'decrease', name: 'Mature patch management with short remediation timelines',       description: 'Security patches are applied promptly and consistently across all system components, reducing the window of exploitation.' },
    { group: 'decrease', name: 'Regular, tested backups stored offline or off-site',             description: 'Up-to-date backups are maintained and tested, enabling recovery from destructive or ransomware attacks.' },
    { group: 'decrease', name: 'Comprehensive security awareness training programme',            description: 'All users receive regular, relevant security training, reducing the likelihood of social engineering and human error.' },
    { group: 'decrease', name: 'Dedicated security operations capability with 24/7 monitoring', description: 'Continuous monitoring and a dedicated security operations function enable rapid detection and response to incidents.' },
  ];

  function saveVulnNoRerender(arr) {
    Object.assign(assessment, { vulnerabilities: arr });
    updateFn({ vulnerabilities: arr });
  }

  function savePredNoRerender(arr) {
    Object.assign(assessment, { predisposingConditions: arr });
    updateFn({ predisposingConditions: arr });
  }

  function addVuln() {
    saveVulns([...vulns, { id: uid(), name: '', description: '', severity: '', notes: '' }]);
  }
  function removeVuln(id) { saveVulns((assessment.vulnerabilities ?? []).filter(v => v.id !== id)); }
  function updateVuln(id, partial) {
    updateFn({ vulnerabilities: (assessment.vulnerabilities ?? []).map(v => v.id === id ? { ...v, ...partial } : v) });
  }

  function renderVulnCardHTML(v) {
    return `
      <div class="event-detail-card" data-vuln-id="${esc(v.id)}">
        <div class="source-detail-header">
          <input type="text" class="form-control form-control-sm" value="${esc(v.name)}"
            placeholder="Vulnerability name…" data-vuln-field="name" data-vuln-id="${esc(v.id)}" />
          <button type="button" class="btn btn-sm btn-remove-vuln btn-remove" data-vuln-id="${esc(v.id)}"
            aria-label="Remove vulnerability">✕ Remove</button>
        </div>
        <div class="form-row form-row-2 mt-3">
          <div class="form-group col-full">
            <label class="label">Description</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-vuln-field="description" data-vuln-id="${esc(v.id)}"
              placeholder="Describe the vulnerability and affected component…">${esc(v.description)}</textarea>
          </div>
          <div class="form-group">
            <label class="label">
              Severity
              <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability-severity" aria-label="What do the severity levels mean?">&#9432;</button>
            </label>
            ${scaleSelect('severity', v.severity, 'Vulnerability severity')}
          </div>
          <div class="form-group">
            <label class="label">Notes</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-vuln-field="notes" data-vuln-id="${esc(v.id)}"
              placeholder="CVE IDs, references, remediation status…">${esc(v.notes)}</textarea>
          </div>
        </div>
      </div>`;
  }

  function wireVulnCard(cardEl) {
    wireNistButtons(cardEl);
    cardEl.querySelectorAll('[data-vuln-field]').forEach(fld => {
      fld.addEventListener('input',  () => updateVuln(fld.dataset.vulnId, { [fld.dataset.vulnField]: fld.value }));
      fld.addEventListener('change', () => updateVuln(fld.dataset.vulnId, { [fld.dataset.vulnField]: fld.value }));
    });
    cardEl.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', () => updateVuln(cardEl.dataset.vulnId, { [sel.name]: sel.value }));
    });
    cardEl.querySelector('.btn-remove-vuln')?.addEventListener('click', () => removeVuln(cardEl.dataset.vulnId));
  }

  function renderPredCardHTML(p) {
    return `
      <div class="event-detail-card" data-pred-id="${esc(p.id)}">
        <div class="source-detail-header">
          ${p.isCustom ? `
            <input type="text" class="form-control form-control-sm" value="${esc(p.name)}"
              placeholder="Condition name\u2026" data-pred-field="name" data-pred-id="${esc(p.id)}" />
          ` : `<strong class="text-sm">${esc(p.name)}</strong>`}
          <button type="button" class="btn btn-sm btn-remove-pred btn-remove" data-pred-id="${esc(p.id)}"
            aria-label="Remove predisposing condition">✕ Remove</button>
        </div>
        <div class="form-row form-row-2 mt-3">
          ${p.isCustom ? `
            <div class="form-group col-full">
              <label class="label">Description</label>
              <textarea class="form-control form-control-sm" rows="2"
                data-pred-field="description" data-pred-id="${esc(p.id)}"
                placeholder="Describe this predisposing condition\u2026">${esc(p.description)}</textarea>
            </div>` : p.description ? `
            <p class="text-muted text-sm col-full">${esc(p.description)}</p>` : ''}
          <div class="form-group">
            <label class="label label-flex">Pervasiveness
              <button type="button" class="nist-ref-btn" data-nist-ref="pervasiveness" aria-label="What do the pervasiveness levels mean?">&#9432;</button>
            </label>
            ${scaleSelect('pervasiveness', p.pervasiveness, 'Pervasiveness')}
          </div>
          <div class="form-group">
            <label class="label">Notes</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-pred-field="notes" data-pred-id="${esc(p.id)}"
              placeholder="Optional notes\u2026">${esc(p.notes)}</textarea>
          </div>
        </div>
      </div>`;
  }

  function wirePredCard(cardEl) {
    wireNistButtons(cardEl);
    cardEl.querySelectorAll('[data-pred-field]').forEach(fld => {
      fld.addEventListener('input', () => updatePred(fld.dataset.predId, { [fld.dataset.predField]: fld.value }));
      fld.addEventListener('change', () => updatePred(fld.dataset.predId, { [fld.dataset.predField]: fld.value }));
    });
    cardEl.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', () => {
        const id = sel.closest('[data-pred-id]')?.dataset.predId;
        if (id) updatePred(id, { [sel.name]: sel.value });
      });
    });
    cardEl.querySelector('.btn-remove-pred')?.addEventListener('click', () => removePred(cardEl.dataset.predId));
  }

  function addPredFromTaxonomy(item) {
    if (preds.some(p => p.refId === item.id)) return;
    savePreds([...preds, { id: uid(), refId: item.id, name: item.name, description: item.desc, pervasiveness: '', notes: '', isCustom: false }]);
  }
  function addCustomPred() {
    savePreds([...preds, { id: uid(), refId: null, name: '', description: '', pervasiveness: '', notes: '', isCustom: true }]);
  }
  function removePred(id) { savePreds(preds.filter(p => p.id !== id)); }
  function updatePred(id, partial) {
    updateFn({ predisposingConditions: (assessment.predisposingConditions ?? []).map(p => p.id === id ? { ...p, ...partial } : p) });
  }

  const el = document.createElement('div');

  function draw() {
    const selectedPredRefIds = preds.filter(p => !p.isCustom).map(p => p.refId);
    const currentVulnNames = (assessment.vulnerabilities ?? []).map(v => v.name);
    const showVulnPanel = vulnSuggestions.length > 0;
    const vulnSuggestionPanel = showVulnPanel ? `
      <div class="suggest-panel" aria-label="Suggested vulnerabilities">
        <p class="suggest-panel-heading">Suggested for ${esc(scenario.name)}</p>
        ${vulnSuggestions.map((s, i) => {
          const added = currentVulnNames.includes(s.name);
          return `
            <button type="button" class="suggest-item${added ? ' suggest-item--added' : ''}"
              data-suggest-vuln="${i}"
              ${added ? 'disabled aria-disabled="true"' : ''}>
              <span class="suggest-item-value">${esc(s.name)}</span>
              <span class="suggest-item-hint">Severity: ${esc(s.severity)}</span>
            </button>`;
        }).join('')}
      </div>` : '';
    el.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Step 5 &mdash; What Weaknesses Exist?</h2>
          <p class="card-subtitle">
            <span class="nist-term">Vulnerabilities &amp; Predisposing Conditions (Task 2-3)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability" aria-label="NIST definition of Vulnerability">&#9432;</button>
          </p>
        </div>
        <div class="card-body">
          <div class="info-box mb-5">
            <strong>Vulnerabilities</strong> are weaknesses in the information system (technical, operational, or management)
            that could be exploited by a threat event. <strong>Predisposing conditions</strong> are characteristics of the system
            or its environment that affect the likelihood or impact of a threat event — they create a path for threats to cause harm.
          </div>

          <!-- Vulnerabilities -->
          <details class="section-card collapsible-section" open>
            <summary class="section-title collapsible-summary">
              <span>
                Known weaknesses
                <small class="nist-term">&mdash; Vulnerabilities</small>
                <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability" aria-label="NIST definition of Vulnerability">&#9432;</button>
              </span>
              <span class="badge badge-neutral">${vulns.length} defined</span>
            </summary>
            <p class="text-muted mb-4">
              Document known weaknesses in the system. For each vulnerability, rate its severity
              (the potential impact if exploited, in the absence of any mitigating security controls).
            </p>
            <div class="${showVulnPanel ? 'suggest-layout suggest-layout--has-panel' : ''}">
              <div>
                ${vulns.length === 0 ? `
                  <p class="text-muted text-italic mb-4">
                    No vulnerabilities added yet. Use the suggestions or click the button below.
                  </p>` : ''}
                ${vulns.map(v => renderVulnCardHTML(v)).join('')}
                <button type="button" id="btn-add-vuln" class="btn btn-secondary btn-sm mt-2">
                  + Add Vulnerability
                </button>
              </div>
              ${vulnSuggestionPanel}
            </div>
          </details>

          <!-- Predisposing Conditions -->
          <details class="section-card collapsible-section" open>
            <summary class="section-title collapsible-summary">
                <span>
                  Conditions that increase or decrease risk
                  <small class="nist-term">&mdash; Predisposing Conditions</small>
                  <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-condition" aria-label="NIST definition of Predisposing Condition">&#9432;</button>
                </span>
              <span class="badge badge-neutral">${preds.length} selected</span>
            </summary>
            <p class="text-muted mb-4">
              Select applicable predisposing conditions from the NIST taxonomy. Rate the
              <strong>pervasiveness</strong> — how broadly the condition applies across the system.
              <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-conditions" aria-label="NIST definition of Predisposing Conditions">&#9432;</button>
            </p>

            <div>
                <details class="collapsible-section mb-4"${selectedPredRefIds.length > 0 ? ' open' : ''}>
                  <summary class="collapsible-summary text-sm">
                    <span>NIST taxonomy classifications
                      ${selectedPredRefIds.length > 0 ? `<span class="badge badge-neutral ml-2">${selectedPredRefIds.length} selected</span>` : ''}
                      <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-taxonomy" aria-label="What are these taxonomy classifications?">&#9432;</button>
                    </span>
                  </summary>
                  <div class="checkbox-grid mt-3">
                    ${PREDISPOSING_TYPES.map(pt => `
                      <label class="checkbox-option ${selectedPredRefIds.includes(pt.id) ? 'checked' : ''}"
                        title="${esc(pt.desc)}">
                        <input type="checkbox" data-add-pred="${esc(pt.id)}"
                          ${selectedPredRefIds.includes(pt.id) ? 'checked' : ''} />
                        <span>${esc(pt.name)}</span>
                      </label>`).join('')}
                  </div>
                </details>

                ${preds.map(p => renderPredCardHTML(p)).join('')}

                <button type="button" id="btn-add-pred" class="btn btn-secondary btn-sm mt-2">
                  + Add Custom Predisposing Condition
                </button>
            </div>
          </details>

        </div>
      </div>`;

    // Vulnerability section
    wireNistButtons(el);
    el.querySelectorAll('[data-vuln-id]').forEach(wireVulnCard);
    el.querySelector('#btn-add-vuln')?.addEventListener('click', addVuln);

    // Suggestion buttons — in-place, no rerender
    el.querySelectorAll('[data-suggest-vuln]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.suggestVuln, 10);
        const s = vulnSuggestions[idx];
        if (!s) return;
        if ((assessment.vulnerabilities ?? []).some(v => v.name === s.name)) return;
        const newV = { id: uid(), name: s.name, description: s.description, severity: s.severity, notes: s.notes };
        saveVulnNoRerender([...(assessment.vulnerabilities ?? []), newV]);
        btn.disabled = true;
        btn.setAttribute('aria-disabled', 'true');
        btn.classList.add('suggest-item--added');
        const addBtn = el.querySelector('#btn-add-vuln');
        if (addBtn) {
          addBtn.insertAdjacentHTML('beforebegin', renderVulnCardHTML(newV));
          wireVulnCard(addBtn.previousElementSibling);
        }
      });
    });

    // Predisposing events — taxonomy checkboxes

    el.querySelector('#btn-add-pred')?.addEventListener('click', addCustomPred);
    el.querySelectorAll('.btn-remove-pred').forEach(btn => btn.addEventListener('click', () => removePred(btn.dataset.predId)));
    el.querySelectorAll('[data-pred-field]').forEach(fld => {
      fld.addEventListener('input', () => updatePred(fld.dataset.predId, { [fld.dataset.predField]: fld.value }));
      fld.addEventListener('change', () => updatePred(fld.dataset.predId, { [fld.dataset.predField]: fld.value }));
    });
    el.querySelectorAll('[data-pred-id] select').forEach(sel => {
      sel.addEventListener('change', () => {
        const id = sel.closest('[data-pred-id]')?.dataset.predId;
        if (id) updatePred(id, { [sel.name]: sel.value });
      });
    });
  }

  el._draw = draw;
  draw();
  return el;
}

export function validate(_a) { return { valid: true, errors: [] }; }
