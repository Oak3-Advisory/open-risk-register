/** Step 4 — Threat Events (Task 2-2, Figure 3: Threat Event → exploits) */
import { esc, uid, wireNistButtons } from '../utils.js';
import { ADVERSARIAL_EVENTS, NON_ADVERSARIAL_EVENTS, RELEVANCE_VALUES } from '../data.js';
import { SCENARIOS } from '../scenarios.js';

export function render(assessment, updateFn) {
  const sources = assessment.threatSources ?? [];

  function saveNoRerender(arr) {
    const wasValid = (assessment.threatEvents ?? []).length > 0;
    Object.assign(assessment, { threatEvents: arr });
    const isValid = arr.length > 0;
    // If validity changed, refresh the nav button; otherwise just save
    updateFn({ threatEvents: arr }, false, wasValid !== isValid);
  }

  function updateEvent(id, partial) {
    const arr = (assessment.threatEvents ?? []).map(e => e.id === id ? { ...e, ...partial } : e);
    updateFn({ threatEvents: arr });
  }

  function toggleEventSource(eventId, sourceId, checked) {
    const ev = (assessment.threatEvents ?? []).find(e => e.id === eventId);
    if (!ev) return;
    const ids = checked
      ? [...new Set([...ev.threatSourceIds, sourceId])]
      : ev.threatSourceIds.filter(i => i !== sourceId);
    updateEvent(eventId, { threatSourceIds: ids });
  }

  function autoSourceIds(ev) {
    return sources.length === 1 ? [sources[0].id] : (ev.threatSourceIds ?? []);
  }

  function renderEventCardHTML(ev) {
    const effectiveSourceIds = autoSourceIds(ev);
    return `
      <div class="event-detail-card" data-ev-id="${esc(ev.id)}">
        <div class="source-detail-header">
          ${ev.isCustom ? `
            <input type="text" class="form-control form-control-sm" value="${esc(ev.name)}"
              placeholder="Custom event name…" data-ev-field="name" data-ev-id="${esc(ev.id)}" />
          ` : `<strong class="text-sm">${esc(ev.name)}</strong>`}
          <button type="button" class="btn btn-sm btn-remove-ev" data-ev-id="${esc(ev.id)}"
            aria-label="Remove event ${esc(ev.name)}">✕ Remove</button>
        </div>
        ${ev.isCustom ? `
          <div class="form-group mt-3">
            <label class="label">Description</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-ev-field="description" data-ev-id="${esc(ev.id)}"
              placeholder="Describe this threat event…">${esc(ev.description)}</textarea>
          </div>` : ev.description ? `
          <p class="text-muted text-sm mt-2 mb-3">${esc(ev.description)}</p>` : ''}
        <div class="form-row form-row-2 mt-3">
          <div class="form-group">
            <label class="label">
              Relevance
              <button type="button" class="nist-ref-btn" data-nist-ref="relevance" aria-label="What do the relevance levels mean?">&#9432;</button>
            </label>
            <select class="form-control form-control-sm" data-ev-field="relevance" data-ev-id="${esc(ev.id)}">
              <option value="">— Select —</option>
              ${RELEVANCE_VALUES.map(r =>
                `<option value="${esc(r.value)}" ${ev.relevance === r.value ? 'selected' : ''}
                  title="${esc(r.desc)}">${esc(r.value)}</option>`).join('')}
            </select>
          </div>
          ${sources.length > 0 ? `
          <div class="form-group">
            <label class="label">Linked Threat Sources</label>
            <div class="source-multiselect">
              ${sources.map(src => `
                <label class="checkbox-option checkbox-option-sm ${effectiveSourceIds.includes(src.id) ? 'checked' : ''}">
                  <input type="checkbox" data-src-link="${esc(src.id)}" data-ev-id="${esc(ev.id)}"
                    ${effectiveSourceIds.includes(src.id) ? 'checked' : ''} />
                  <span>${esc(src.name || 'Unnamed source')}</span>
                </label>`).join('')}
            </div>
          </div>` : ''}
        </div>
        <div class="form-group mt-2">
          <label class="label">Notes</label>
          <textarea class="form-control form-control-sm" rows="2"
            data-ev-field="notes" data-ev-id="${esc(ev.id)}"
            placeholder="Optional notes…">${esc(ev.notes)}</textarea>
        </div>
      </div>`;
  }

  function renderSection(plainTitle, nistTitle, items, type, openByDefault = true) {
    const currentEvents = assessment.threatEvents ?? [];
    const SELECTED_REF_IDS = currentEvents.filter(e => e.type === type && !e.isCustom).map(e => e.refId);
    const selected = currentEvents.filter(e => e.type === type);

    // Scenario suggestions — adversarial section only
    const scenario = SCENARIOS.find(s => s.id === assessment.scenarioId) ?? null;
    const showPanel = type === 'adversarial' && scenario?.threatEventRefIds?.length > 0;
    const suggestionPanel = showPanel ? (() => {
      const allAdv = ADVERSARIAL_EVENTS;
      const suggestions = (scenario.threatEventRefIds ?? [])
        .map(refId => allAdv.find(e => e.id === refId))
        .filter(Boolean);
      return `
        <div class="suggest-panel" aria-label="Suggested threat events">
          <p class="suggest-panel-heading">Suggested for ransomware</p>
          ${suggestions.map(item => {
            const added = SELECTED_REF_IDS.includes(item.id);
            return `
              <button type="button" class="suggest-item${added ? ' suggest-item--added' : ''}"
                data-suggest-event="${esc(item.id)}"
                ${added ? 'disabled aria-disabled="true"' : ''}>
                <span class="suggest-item-value">${esc(item.name)}</span>
                <span class="suggest-item-hint">Relevance: ${esc(scenario.threatEventRelevance?.[item.id] ?? '—')}</span>
              </button>`;
          }).join('')}
        </div>`;
    })() : '';

    return `
      <details class="section-card collapsible-section" ${openByDefault ? 'open' : ''}>
        <summary class="section-title collapsible-summary">
          <span>${esc(plainTitle)} <small class="nist-term">&mdash; ${esc(nistTitle)}</small></span>
          <span class="badge badge-neutral">${selected.length} selected</span>
        </summary>

        ${sources.length === 0 ? `
          <div class="alert alert-warning mb-4">
            <strong>Tip:</strong> No threat sources were defined in Step 3.
            Events can still be selected, but linking them to sources won’t be possible.
          </div>` : ''}

        <div class="${showPanel ? 'suggest-layout suggest-layout--has-panel' : ''}">
          <div class="checkbox-grid mb-4">
            ${items.map(item => `
              <label class="checkbox-option ${SELECTED_REF_IDS.includes(item.id) ? 'checked' : ''}">
                <input type="checkbox" data-add-event="${esc(item.id)}" data-event-type="${esc(type)}"
                  ${SELECTED_REF_IDS.includes(item.id) ? 'checked' : ''} title="${esc(item.description)}" />
                <span>${esc(item.name)}</span>
              </label>`).join('')}
          </div>
          ${suggestionPanel}
        </div>

        ${selected.map(ev => renderEventCardHTML(ev)).join('')}

        <button type="button" class="btn btn-secondary btn-sm btn-add-custom-ev mt-2"
          data-event-type="${esc(type)}">
          + Add Custom ${esc(type === 'adversarial' ? 'Adversarial' : 'Non-Adversarial')} Event
        </button>
      </details>`;
  }

  const el = document.createElement('div');

  function wireCard(cardEl) {
    const evId = cardEl.dataset.evId;
    cardEl.querySelectorAll('[data-ev-field]').forEach(fld => {
      fld.addEventListener('input',  () => updateEvent(evId, { [fld.dataset.evField]: fld.value }));
      fld.addEventListener('change', () => updateEvent(evId, { [fld.dataset.evField]: fld.value }));
    });
    cardEl.querySelector('.btn-remove-ev')?.addEventListener('click', () => removeEventInPlace(evId, cardEl));
    cardEl.querySelectorAll('[data-src-link]').forEach(cb => {
      cb.addEventListener('change', () => toggleEventSource(evId, cb.dataset.srcLink, cb.checked));
    });
    wireNistButtons(cardEl);
  }

  function removeEventInPlace(evId, cardEl) {
    const ev = (assessment.threatEvents ?? []).find(e => e.id === evId);
    const refId = ev?.refId;
    saveNoRerender((assessment.threatEvents ?? []).filter(e => e.id !== evId));
    cardEl.remove();
    if (refId) {
      const cb = el.querySelector(`[data-add-event="${CSS.escape(refId)}"]`);
      if (cb) { cb.checked = false; cb.closest('.checkbox-option')?.classList.remove('checked'); }
      const sugBtn = el.querySelector(`[data-suggest-event="${CSS.escape(refId)}"]`);
      if (sugBtn) {
        sugBtn.disabled = false;
        sugBtn.removeAttribute('aria-disabled');
        sugBtn.classList.remove('suggest-item--added');
        const hint = sugBtn.querySelector('.suggest-item-hint');

      }
    }
  }

  function addEventInPlace(newEv, detailsEl) {
    const addCustomBtn = detailsEl.querySelector('.btn-add-custom-ev');
    addCustomBtn.insertAdjacentHTML('beforebegin', renderEventCardHTML(newEv));
    wireCard(addCustomBtn.previousElementSibling);
  }

  function draw() {
    el.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Step 4 &mdash; What Harmful Events Could Happen?</h2>
          <p class="card-subtitle">
            <span class="nist-term">Threat Events (Task 2-2 &mdash; Tables E-2, E-3)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="threat-event" aria-label="NIST definition of Threat Event">&#9432;</button>
          </p>
        </div>
        <div class="card-body">
          <div class="info-box mb-5">
            Select every event that could realistically occur in your environment. For each event selected you will
            rate likelihood and impact in the next two steps. You can add custom events if your situation is
            not covered by the NIST taxonomy.
          </div>
          ${renderSection('Events caused by intentional attackers', 'Adversarial Threat Events (Table E-2)', ADVERSARIAL_EVENTS, 'adversarial', true)}
          ${renderSection('Accidental and environmental events', 'Non-Adversarial Threat Events (Table E-3)', NON_ADVERSARIAL_EVENTS, 'non-adversarial', false)}
        </div>
      </div>`;

    wireNistButtons(el);

    // Wire all existing event detail cards
    el.querySelectorAll('.event-detail-card').forEach(wireCard);

    // Suggestion panel buttons — in-place, no rerender
    el.querySelectorAll('[data-suggest-event]').forEach(btn => {
      btn.addEventListener('click', () => {
        const refId = btn.dataset.suggestEvent;
        const item = ADVERSARIAL_EVENTS.find(e => e.id === refId);
        if (!item || (assessment.threatEvents ?? []).some(e => e.refId === refId)) return;
        const scenario = SCENARIOS.find(s => s.id === assessment.scenarioId);
        const newEvent = {
          id: uid(), refId: item.id, name: item.name, description: item.description,
          type: 'adversarial', isCustom: false,
          threatSourceIds: autoSourceIds({}), relevance: scenario?.threatEventRelevance?.[refId] ?? '',
          notes: scenario?.threatEventNotes?.[refId] ?? '',
          likelihoodInitiation: '', likelihoodImpact: '', overallLikelihood: '',
          impactLevel: '', impactNotes: '',
          riskLevel: '', riskOverride: '', riskOverrideReason: '', riskNotes: '',
        };
        saveNoRerender([...(assessment.threatEvents ?? []), newEvent]);

        btn.disabled = true;
        btn.setAttribute('aria-disabled', 'true');
        btn.classList.add('suggest-item--added');
        const hint = btn.querySelector('.suggest-item-hint');


        const cb = el.querySelector(`[data-add-event="${CSS.escape(refId)}"]`);
        if (cb) { cb.checked = true; cb.closest('.checkbox-option')?.classList.add('checked'); }

        const detailsEl = cb?.closest('details');
        if (detailsEl) addEventInPlace(newEvent, detailsEl);
      });
    });

    // Taxonomy checkboxes — in-place, no rerender
    const allTaxonomyItems = [...ADVERSARIAL_EVENTS, ...NON_ADVERSARIAL_EVENTS];
    el.querySelectorAll('[data-add-event]').forEach(cb => {
      cb.addEventListener('change', () => {
        const item = allTaxonomyItems.find(i => i.id === cb.dataset.addEvent);
        if (!item) return;
        const label = cb.closest('.checkbox-option');
        const detailsEl = cb.closest('details');
        if (cb.checked) {
          if ((assessment.threatEvents ?? []).some(e => e.refId === item.id)) return;
          const newEv = {
            id: uid(), refId: item.id, name: item.name, description: item.description,
            type: cb.dataset.eventType, isCustom: false,
            threatSourceIds: autoSourceIds({}), relevance: '', notes: '',
            likelihoodInitiation: '', likelihoodImpact: '', overallLikelihood: '',
            impactLevel: '', impactNotes: '',
            riskLevel: '', riskOverride: '', riskOverrideReason: '', riskNotes: ''
          };
          saveNoRerender([...(assessment.threatEvents ?? []), newEv]);
          label?.classList.add('checked');
          if (detailsEl) addEventInPlace(newEv, detailsEl);
          const sugBtn = el.querySelector(`[data-suggest-event="${CSS.escape(item.id)}"]`);
          if (sugBtn) {
            sugBtn.disabled = true;
            sugBtn.setAttribute('aria-disabled', 'true');
            sugBtn.classList.add('suggest-item--added');
            const hint = sugBtn.querySelector('.suggest-item-hint');

          }
        } else {
          const ev = (assessment.threatEvents ?? []).find(e => e.refId === item.id);
          if (!ev) return;
          const cardEl = detailsEl?.querySelector(`.event-detail-card[data-ev-id="${CSS.escape(ev.id)}"]`);
          label?.classList.remove('checked');
          if (cardEl) removeEventInPlace(ev.id, cardEl);
          else saveNoRerender((assessment.threatEvents ?? []).filter(e => e.refId !== item.id));
        }
      });
    });

    // Add custom event — in-place, no rerender
    el.querySelectorAll('.btn-add-custom-ev').forEach(btn => {
      btn.addEventListener('click', () => {
        const newEv = {
          id: uid(), refId: null, name: '', description: '',
          type: btn.dataset.eventType, isCustom: true,
          threatSourceIds: autoSourceIds({}), relevance: '', notes: '',
          likelihoodInitiation: '', likelihoodImpact: '', overallLikelihood: '',
          impactLevel: '', impactNotes: '',
          riskLevel: '', riskOverride: '', riskOverrideReason: '', riskNotes: ''
        };
        saveNoRerender([...(assessment.threatEvents ?? []), newEv]);
        addEventInPlace(newEv, btn.closest('details'));
      });
    });
  }

  el._draw = draw;
  draw();
  return el;
}

export function validate(assessment) {
  const events = assessment.threatEvents ?? [];
  if (events.length === 0) {
    return { valid: false, errors: ['Select at least one threat event before continuing.'] };
  }
  return { valid: true, errors: [] };
}
