/** Utility helpers */
import { NIST_REFERENCES } from './data.js';

export function uid() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map(byte => byte.toString(16).padStart(2, '0')).join('');
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  }

  throw new Error('Secure random ID generation is not available in this browser.');
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function fmtDate(iso) {
  if (!iso) return '—';
  try {
    return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(new Date(iso));
  } catch { return iso; }
}

/** HTML-escape user content before inserting into innerHTML */
export function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Return CSS class suffix for a risk/likelihood/impact level */
export function levelClass(level) {
  const map = { 'Very High': 'very-high', 'High': 'high', 'Moderate': 'moderate',
                'Low': 'low', 'Very Low': 'very-low' };
  return map[level] ?? 'neutral';
}

/** Return a badge HTML string for a level */
export function badgeHtml(level) {
  return `<span class="badge badge-${levelClass(level)}">${esc(level)}</span>`;
}

/** Show validation errors in a container element */
export function showErrors(container, errors) {
  container.innerHTML = '';
  if (!errors || errors.length === 0) return;
  const list = document.createElement('ul');
  list.className = 'error-list';
  errors.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    list.appendChild(li);
  });
  container.appendChild(list);
}

/** Wire info toggle buttons — button has data-info-toggle="#selector" */
export function wireInfoToggles(root) {
  root.querySelectorAll('[data-info-toggle]').forEach(btn => {
    const target = root.querySelector(btn.dataset.infoToggle);
    if (!target) return;
    btn.addEventListener('click', () => {
      const hidden = target.hidden;
      target.hidden = !hidden;
      btn.textContent = hidden ? '▲ Hide info' : '▼ Show info';
    });
  });
}

export function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Compute overall likelihood from Table G-5.
 * @param {string} initiation  — e.g. 'High'
 * @param {string} adverseImpact — e.g. 'Moderate'
 */
export function computeOverallLikelihood(initiation, adverseImpact, SCALE, MATRIX) {
  const r = SCALE.indexOf(initiation);
  const c = SCALE.indexOf(adverseImpact);
  if (r < 0 || c < 0) return '';
  return SCALE[MATRIX[r][c]];
}

/**
 * Compute risk level from Table I-2.
 * @param {string} likelihood — e.g. 'High'
 * @param {string} impact     — e.g. 'Moderate'
 */
export function computeRisk(likelihood, impact, SCALE, MATRIX) {
  const r = SCALE.indexOf(likelihood);
  const c = SCALE.indexOf(impact);
  if (r < 0 || c < 0) return '';
  return SCALE[MATRIX[r][c]];
}

export function downloadFile(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function clearElement(element) {
  element.replaceChildren();
}

export function setAttributes(element, attrs = {}) {
  Object.entries(attrs).forEach(([key, value]) => {
    if (value === undefined || value === null || value === false) return;
    if (key === 'className') {
      element.className = value;
      return;
    }
    if (key === 'text') {
      element.textContent = value;
      return;
    }
    if (value === true) {
      element.setAttribute(key, '');
      return;
    }
    element.setAttribute(key, String(value));
  });
}

export function el(tagName, attrs = {}, children = []) {
  const node = document.createElement(tagName);
  setAttributes(node, attrs);
  const childList = Array.isArray(children) ? children : [children];
  childList.filter(Boolean).forEach(child => {
    if (typeof child === 'string') node.appendChild(document.createTextNode(child));
    else node.appendChild(child);
  });
  return node;
}

export function buttonEl({ text, children = [], ...attrs } = {}) {
  return el('button', attrs, text ? [text, ...children] : children);
}

export function inputEl(attrs = {}) {
  return el('input', attrs);
}

export function textareaEl(attrs = {}) {
  const { value, ...rest } = attrs;
  const node = el('textarea', rest);
  node.value = value ?? '';
  return node;
}

function encodeDataJson(value) {
  return encodeURIComponent(JSON.stringify(value));
}

function decodeDataJson(value) {
  return JSON.parse(decodeURIComponent(value));
}

/**
 * Render a form field (input or textarea) with an optional right-side suggestion panel.
 *
 * @param {object} opts
 *   id         — element id
 *   label      — label text (may contain HTML entities)
 *   value      — current field value
 *   placeholder — placeholder text
 *   required   — boolean
 *   type       — 'input' | 'textarea' (default 'input')
 *   rows       — textarea rows (default 3)
 *   suggestions — array of { value, hint } objects; omit for plain field
 *
 * Usage in HTML template strings:
 *   renderSuggestedField({ id: 'f-foo', label: 'Foo *', value: esc(val), suggestions: [...] })
 */
export function renderSuggestedField({ id, label, value, placeholder, required = false, type = 'input', rows = 3, suggestions = [] }) {
  const hasSuggestions = suggestions.length > 0;
  const inputEl = type === 'textarea'
    ? `<textarea class="form-control" id="${id}" rows="${rows}" placeholder="${placeholder ?? ''}"${required ? ' aria-required="true"' : ''}>${value ?? ''}</textarea>`
    : `<input class="form-control" id="${id}" type="text" value="${value ?? ''}" placeholder="${placeholder ?? ''}" autocomplete="off"${required ? ' aria-required="true"' : ''}${hasSuggestions ? ` aria-autocomplete="list" aria-controls="${id}-suggestions" aria-expanded="false"` : ''} />`;

  const panelEl = hasSuggestions ? `
    <div class="suggest-panel" id="${id}-suggestions" role="listbox" aria-label="Suggestions" hidden>
      <p class="suggest-panel-heading">Suggestions</p>
      ${suggestions.map((s, i) => `
        <button type="button" class="suggest-item" role="option" data-suggest-for="${id}" data-value="${esc(s.value)}"${s.description ? ` data-description="${esc(s.description)}"` : ''}${s.extras ? ` data-extras="${encodeDataJson(s.extras)}"` : ''} tabindex="-1" aria-selected="false">
          <span class="suggest-item-value">${esc(s.value)}</span>
          ${s.hint ? `<span class="suggest-item-hint">${esc(s.hint)}</span>` : ''}
        </button>`).join('')}
    </div>` : '';

  return `
    <div class="form-group suggest-layout${hasSuggestions ? ' suggest-layout--has-panel' : ''}">
      <label class="label" for="${id}">${label}</label>
      <div class="suggest-field-row">
        <div class="suggest-field-wrap">${inputEl}</div>
      </div>
      ${panelEl}
    </div>`;
}

/**
 * Wire all suggestion panels rendered by renderSuggestedField inside `root`.
 * onChange(inputId, value) is called when a suggestion is picked.
 */
export function wireSuggestedFields(root, onChange) {
  root.querySelectorAll('[aria-controls$="-suggestions"]').forEach(input => {
    const panelId = input.getAttribute('aria-controls');
    const panel = root.querySelector(`#${panelId}`);
    if (!panel) return;

    const show = () => {
      if (input.value.trim()) return;
      panel.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    };
    const hide = () => {
      panel.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    };

    input.addEventListener('focus', show);
    input.addEventListener('input', () => { if (input.value.trim()) hide(); else show(); });
    input.addEventListener('blur', () => setTimeout(hide, 160));
    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') { hide(); }
      if ((e.key === 'ArrowDown') && !panel.hidden) {
        e.preventDefault();
        panel.querySelector('.suggest-item')?.focus();
      }
    });

    panel.querySelectorAll('.suggest-item').forEach((btn, idx, all) => {
      const pick = () => {
        input.value = btn.dataset.value;
        const extras = btn.dataset.extras ? decodeDataJson(btn.dataset.extras) : {};
        onChange?.(input.id, btn.dataset.value, btn.dataset.description ?? '', extras);
        hide();
        input.focus();
      };
      btn.addEventListener('click', pick);
      btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
        if (e.key === 'Escape') { hide(); input.focus(); }
        if (e.key === 'ArrowDown') { e.preventDefault(); all[idx + 1]?.focus(); }
        if (e.key === 'ArrowUp')   { e.preventDefault(); idx === 0 ? input.focus() : all[idx - 1]?.focus(); }
      });
    });
  });
}


/**
 * Converts plain-text modal content (paragraphs separated by \n\n, bullet
 * lines starting with • or \u2022) to semantic HTML. Passes through content
 * that already contains HTML tags.
 */
function formatPlainText(text) {
  if (/<[a-z][\s\S]*>/i.test(text)) return text;
  return text.split(/\n\n/).map(block => {
    const lines = block.split('\n');
    const bulletLines = lines.filter(l => /^[•\u2022]\s*/.test(l.trim()));
    if (bulletLines.length > 0) {
      const introLines = lines.filter(l => !/^[•\u2022]\s*/.test(l.trim()) && l.trim());
      const intro = introLines.length ? `<p>${introLines.join(' ')}</p>` : '';
      const items = bulletLines.map(l => {
        const txt = l.replace(/^[•\u2022]\s*/, '').trim();
        return '<li>' + txt.replace(/^(.+?)\s*\u2014\s*/, '<strong>$1<\/strong> \u2014 ') + '<\/li>';
      });
      return `${intro}<ul>${items.join('')}<\/ul>`;
    }
    if (lines.some(l => /^ {2}/.test(l))) {
      return lines.map(l => /^ {2}/.test(l)
        ? `<p><code>${l.trim()}<\/code><\/p>`
        : (l.trim() ? `<p>${l.trim()}<\/p>` : '')
      ).join('');
    }
    return `<p>${block.trim()}<\/p>`;
  }).join('');
}

export function showNistModal(key) {
  const ref = NIST_REFERENCES[key];
  if (!ref) return;
  const dlg = document.getElementById('nist-modal');
  if (!dlg) return;
  dlg.querySelector('.nist-modal-term').textContent = ref.term;
  dlg.querySelector('.nist-modal-plain').innerHTML = formatPlainText(ref.plain);
  dlg.querySelector('.nist-modal-quote').textContent = ref.quote;
  dlg.querySelector('.nist-modal-cite').textContent = ref.cite;
  const linkEl = dlg.querySelector('.nist-modal-link');
  if (linkEl) {
    if (ref.link) {
      linkEl.href = ref.link.href;
      linkEl.textContent = ref.link.label;
      linkEl.hidden = false;
    } else {
      linkEl.hidden = true;
    }
  }
  dlg.showModal();
}

/**
 * Wire all [data-nist-ref] buttons inside root to open the NIST modal.
 * Safe to call multiple times — uses a flag to avoid double-binding.
 */
export function wireNistButtons(root) {
  root.querySelectorAll('[data-nist-ref]').forEach(btn => {
    if (btn._nistWired) return;
    btn._nistWired = true;
    btn.addEventListener('click', e => {
      e.stopPropagation();
      showNistModal(btn.dataset.nistRef);
    });
  });
}
