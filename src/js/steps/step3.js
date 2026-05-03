/** Step 3 — Threat Sources (Task 2-1, Figure 3: Threat Source box) */
import { esc, uid, wireNistButtons } from '../utils.js';
import { THREAT_SOURCE_TAXONOMY, CHAR_DESCRIPTIONS, SCALE } from '../data.js';

// Ransomware scenario: single pre-researched suggestion linked to NIST taxonomy ts-a6
const RANSOMWARE_SUGGESTION = {
  refId: 'ts-a6', // Group – Established
  capability: 'High',
  intent: 'High',
  targeting: 'Moderate',
  notes: `Ransomware-as-a-Service (RaaS) affiliates and organised cybercriminal groups targeting organisations for financial gain through encryption and data-theft extortion.

Capability — HIGH: RaaS platforms lower the technical barrier by providing ready-made tooling, infrastructure, and support to affiliates. CISA #StopRansomware advisories document groups such as LockBit, BlackCat/ALPHV, and Cl0p operating with sophisticated, multi-stage attack chains including initial access brokering, credential harvesting, lateral movement, and double-extortion. ENISA Threat Landscape 2024 ranks organised cybercriminal groups among the highest-capability non-state actors.

Intent — HIGH: Financial motivation is strong and consistent. ENISA TL 2024 identifies ransomware as the top cybersecurity threat for the fifth consecutive year, driven by predictable monetisation through ransom payments and data-sale markets. CISA notes that RaaS groups actively reinvest profits to improve tooling and recruit affiliates.

Targeting — MODERATE: Most RaaS affiliates use opportunistic targeting — scanning for exposed services (RDP, VPN) and unpatched systems — rather than singling out specific organisations. ENISA TL 2024 notes that while small and medium-sized organisations are frequently hit due to weaker defences, highly specific targeting is more typical of nation-state actors. Adjust to HIGH if your sector (healthcare, critical infrastructure, finance) is explicitly named in CISA advisories.

Sources: CISA #StopRansomware (cisa.gov/stopransomware); ENISA Threat Landscape 2024 (enisa.europa.eu); CISA/NSA Advisory AA21-321A.`,
};

const TYPES = ['Adversarial', 'Accidental', 'Structural', 'Environmental'];
const TYPE_PLAIN = {
  Adversarial:   'Intentional attackers',
  Accidental:    'Accidents and errors',
  Structural:    'Hardware and software failures',
  Environmental: 'Natural disasters and infrastructure failures',
};
const TYPE_DESC = {
  Adversarial:   'Individuals, groups, or organisations that intentionally target and exploit information systems.',
  Accidental:    'Errors and omissions by authorised users — no malicious intent.',
  Structural:    'Failures of IT equipment, environmental controls, or software components.',
  Environmental: 'Natural disasters and infrastructure failures outside organisational control.',
};

function isAdversarial(type) { return type === 'Adversarial'; }

function makeScaleSelect(name, value, disabled) {
  return `<select class="form-control form-control-sm" name="${esc(name)}" ${disabled ? 'disabled' : ''} aria-label="${esc(name)}">
    <option value="">— Select —</option>
    ${SCALE.map(s => `<option value="${esc(s)}" ${value === s ? 'selected' : ''}>${esc(s)}</option>`).join('')}
  </select>`;
}

export function render(assessment, updateFn) {
  const sources = assessment.threatSources ?? [];

  function getSource(id) { return sources.find(s => s.id === id); }
  function saveSources(arr) { updateFn({ threatSources: arr }, true); }

  function addTaxonomySource(item) {
    if (sources.some(s => s.refId === item.id)) return; // already added
    saveSources([...sources, {
      id: uid(), refId: item.id, name: item.name, type: item.type,
      isCustom: false, inScope: true,
      capability: '', intent: '', targeting: '', rangeOfEffects: '', notes: ''
    }]);
  }

  function addCustomSource(type) {
    saveSources([...sources, {
      id: uid(), refId: null, name: '', type,
      isCustom: true, inScope: true,
      capability: '', intent: '', targeting: '', rangeOfEffects: '', notes: ''
    }]);
  }

  function removeSource(id) { saveSources(sources.filter(s => s.id !== id)); }

  function updateSource(id, partial) {
    const arr = (assessment.threatSources ?? []).map(s => s.id === id ? { ...s, ...partial } : s);
    updateFn({ threatSources: arr }); // no rerender for field edits
  }

  const el = document.createElement('div');

  function draw() {
    const isRansomware = assessment.scenarioId === 'ransomware';
    const rsItem = THREAT_SOURCE_TAXONOMY.find(t => t.id === RANSOMWARE_SUGGESTION.refId);
    const rsAlreadyAdded = isRansomware && rsItem
      ? (assessment.threatSources ?? []).some(s => s.refId === rsItem.id)
      : false;

    el.innerHTML = `
      <div class="card">
        <div class="card-header">
          <div class="card-header-row-center">
            <div>
              <h2 class="card-title">Step 3 &mdash; Who or What Could Cause Harm?</h2>
              <p class="card-subtitle">
                <span class="nist-term">Threat Sources (Task 2-1 &mdash; Table D-2)</span>
                <button type="button" class="nist-ref-btn" data-nist-ref="threat-source" aria-label="NIST definition of Threat Source">&#9432;</button>
              </p>
            </div>
          </div>
          <div class="info-box mt-3">
            Select every type of threat source that is relevant to your organisation. For intentional attackers,
            rate their capability, intent, and targeting. You can add custom sources if your situation is not covered by the list.
          </div>
        </div>
        <div class="card-body">
          ${TYPES.map(type => {
            const taxItems = THREAT_SOURCE_TAXONOMY.filter(t => t.type === type);
            const selected = sources.filter(s => s.type === type);
            const selectedRefIds = selected.filter(s => !s.isCustom).map(s => s.refId);

            const showPanel = type === 'Adversarial' && isRansomware && rsItem;
            const suggestionPanel = showPanel ? `
              <div class="suggest-panel" aria-label="Suggested threat source">
                <p class="suggest-panel-heading">Suggested for ransomware</p>
                <button type="button" class="suggest-item${rsAlreadyAdded ? ' suggest-item--added' : ''}"
                  id="btn-add-ransomware-src"
                  ${rsAlreadyAdded ? 'disabled aria-disabled="true"' : ''}>
                  <span class="suggest-item-value">${esc(rsItem.name)}</span>
                  <span class="suggest-item-hint">Capability: High &middot; Intent: High &middot; Targeting: Moderate${rsAlreadyAdded ? ' &middot; &#10003; Added' : ''}</span>
                </button>
              </div>` : '';

            return `
              <details class="section-card collapsible-section" ${type === 'Adversarial' ? 'open' : ''}>
                <summary class="section-title collapsible-summary">
                  <span>
                    ${esc(TYPE_PLAIN[type])}
                    <small class="nist-term ml-2">${esc(type)} Threat Sources</small>
                    <button type="button" class="nist-ref-btn" data-nist-ref="threat-source" aria-label="NIST definition of Threat Source">&#9432;</button>
                  </span>
                  <span class="badge badge-neutral">${selected.length} selected</span>
                </summary>
                <p class="text-muted mb-4">${esc(TYPE_DESC[type])}</p>

                <div class="${showPanel ? 'suggest-layout suggest-layout--has-panel' : ''}">
                  <div class="checkbox-grid mb-4">
                    ${taxItems.map(item => `
                      <label class="checkbox-option ${selectedRefIds.includes(item.id) ? 'checked' : ''}">
                        <input type="checkbox" data-add-ref="${esc(item.id)}" ${selectedRefIds.includes(item.id) ? 'checked' : ''} />
                        <span>${esc(item.name)}</span>
                      </label>`).join('')}
                  </div>
                  ${suggestionPanel}
                </div>

                ${selected.map(src => `
                  <div class="source-detail-card" data-src-id="${esc(src.id)}">
                    <div class="source-detail-header">
                      ${src.isCustom ? `
                        <input type="text" class="form-control form-control-sm source-name-input"
                          value="${esc(src.name)}" placeholder="Custom source name…" data-src-field="name" data-src-id="${esc(src.id)}" />
                      ` : `<strong>${esc(src.name)}</strong>`}
                      <button type="button" class="btn btn-sm btn-remove-src" data-src-id="${esc(src.id)}"
                        class="btn-remove"
                        aria-label="Remove ${esc(src.name)}">✕ Remove</button>
                    </div>
                    <div class="source-detail-fields">
                      ${isAdversarial(type) ? `
                        <div class="form-row form-row-3">
                          <div class="form-group">
                            <label class="label">Capability</label>
                            ${makeScaleSelect('capability', src.capability, false)}
                          </div>
                          <div class="form-group">
                            <label class="label">Intent</label>
                            ${makeScaleSelect('intent', src.intent, false)}
                          </div>
                          <div class="form-group">
                            <label class="label">Targeting</label>
                            ${makeScaleSelect('targeting', src.targeting, false)}
                          </div>
                        </div>` : `
                        <div class="form-row form-row-2">
                          <div class="form-group">
                            <label class="label">Range of Effects</label>
                            ${makeScaleSelect('rangeOfEffects', src.rangeOfEffects, false)}
                          </div>
                        </div>`}
                      <div class="form-group">
                        <label class="label">Notes</label>
                        <textarea class="form-control form-control-sm" rows="2"
                          data-src-field="notes" data-src-id="${esc(src.id)}"
                          placeholder="Optional notes about this threat source…">${esc(src.notes)}</textarea>
                      </div>
                    </div>
                  </div>`).join('')}

                <button type="button" class="btn btn-secondary btn-sm btn-add-custom mt-2" data-type="${esc(type)}">+ Add Custom ${esc(type)} Source</button>
              </details>`;
          }).join('')}
        </div>
      </div>`;

    wireNistButtons(el);

    // Ransomware suggestion button — adds ts-a6 with pre-filled values
    el.querySelector('#btn-add-ransomware-src')?.addEventListener('click', () => {
      if (!rsItem || rsAlreadyAdded) return;
      saveSources([...(assessment.threatSources ?? []), {
        id: uid(), refId: rsItem.id, name: rsItem.name, type: rsItem.type,
        isCustom: false, inScope: true,
        capability: RANSOMWARE_SUGGESTION.capability,
        intent:     RANSOMWARE_SUGGESTION.intent,
        targeting:  RANSOMWARE_SUGGESTION.targeting,
        rangeOfEffects: '',
        notes:      RANSOMWARE_SUGGESTION.notes,
      }]);
    });

    // Checkbox toggles for taxonomy items
    el.querySelectorAll('[data-add-ref]').forEach(cb => {
      cb.addEventListener('change', () => {
        const item = THREAT_SOURCE_TAXONOMY.find(t => t.id === cb.dataset.addRef);
        if (!item) return;
        if (cb.checked) addTaxonomySource(item);
        else removeSource(sources.find(s => s.refId === item.id)?.id);
      });
    });

    // Remove buttons
    el.querySelectorAll('.btn-remove-src').forEach(btn => {
      btn.addEventListener('click', () => removeSource(btn.dataset.srcId));
    });

    // Add custom
    el.querySelectorAll('.btn-add-custom').forEach(btn => {
      btn.addEventListener('click', () => addCustomSource(btn.dataset.type));
    });

    // Field updates (selects and textareas inside source cards)
    el.querySelectorAll('[data-src-field]').forEach(fld => {
      fld.addEventListener('input', () => updateSource(fld.dataset.srcId, { [fld.dataset.srcField]: fld.value }));
      fld.addEventListener('change', () => updateSource(fld.dataset.srcId, { [fld.dataset.srcField]: fld.value }));
    });
    el.querySelectorAll('.source-detail-card select').forEach(sel => {
      sel.addEventListener('change', () => {
        const card = sel.closest('[data-src-id]');
        if (!card) return;
        updateSource(card.dataset.srcId, { [sel.name]: sel.value });
      });
    });
  }

  // Expose draw for re-render
  el._draw = draw;
  draw();
  return el;
}

export function validate(assessment) {
  const sources = assessment.threatSources ?? [];
  const inScope = sources.filter(s => s.inScope);
  if (inScope.length === 0) {
    return { valid: false, errors: ['Select at least one threat source before continuing.'] };
  }
  return { valid: true, errors: [] };
}
