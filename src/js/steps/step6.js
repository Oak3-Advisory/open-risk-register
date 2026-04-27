/** Step 6 — Likelihood Assessment (Task 2-4) */
import { esc, computeOverallLikelihood, badgeHtml, wireNistButtons } from '../utils.js';
import { SCALE, OVERALL_LIKELIHOOD_MATRIX } from '../data.js';

/**
 * Default likelihood suggestions derived from public, non-commercial sources:
 * ENISA Threat Landscape 2024, CISA Known Exploited Vulnerabilities Catalog,
 * NCSC Annual Review 2024, ENISA NIS Investments Report, NIST NVD, and
 * EU Agency for Cybersecurity (ENISA) topic reports.
 * Keyed by threat event ID (ae-XX / ne-XX).
 */
const LIKELIHOOD_SUGGESTIONS = {
  /* ── Adversarial events ─────────────────────────────────────────────── */
  'ae-01': { initiation: 'Very High', impact: 'Very Low',  source: 'ENISA Threat Landscape 2024', rationale: 'Automated internet scanning is continuous and near-universal; virtually all internet-facing systems are probed daily.' },
  'ae-02': { initiation: 'Very High', impact: 'Very Low',  source: 'ENISA Threat Landscape 2024', rationale: 'OSINT collection is trivially easy and widely practised; direct harm from passive reconnaissance alone is negligible.' },
  'ae-03': { initiation: 'Low',       impact: 'Moderate',  source: 'ENISA Threat Landscape 2024', rationale: 'Sniffing requires prior network access or a MITM position; widespread TLS adoption substantially limits what can be captured.' },
  'ae-04': { initiation: 'High',      impact: 'Low',       source: 'ENISA Threat Landscape 2024', rationale: 'Targeted surveillance is common against internet-facing organisations; intelligence gathered rarely causes direct harm in isolation.' },
  'ae-05': { initiation: 'Very High', impact: 'High',      source: 'ENISA Threat Landscape 2024', rationale: 'Phishing is the leading initial-access vector in ENISA reports; successful campaigns routinely lead to credential theft or malware deployment.' },
  'ae-06': { initiation: 'High',      impact: 'Moderate',  source: 'ENISA Threat Landscape 2024', rationale: 'Known-malware delivery via email remains one of the highest-volume attack techniques; email filtering and endpoint controls reduce adverse impact for most organisations.' },
  'ae-07': { initiation: 'Moderate',  impact: 'Very High', source: 'ENISA Threat Landscape 2024', rationale: 'Targeted malware campaigns are less frequent than commodity attacks but highly effective; detection is typically delayed.' },
  'ae-08': { initiation: 'Low',       impact: 'High',      source: 'ENISA Threat Landscape 2024', rationale: 'Removable-media attacks are uncommon in modern office environments; when successful they typically allow deep, persistent access.' },
  'ae-09': { initiation: 'High',      impact: 'Moderate',  source: 'CISA KEV Catalog 2024',      rationale: 'Exploitation of catalogued known vulnerabilities is widespread and automated; impact depends heavily on patch currency.' },
  'ae-10': { initiation: 'Low',       impact: 'Very High', source: 'ENISA Threat Landscape 2024', rationale: 'Zero-day exploits are scarce and expensive; when deployed, no defensive countermeasure exists at the time of attack.' },
  'ae-11': { initiation: 'Moderate',  impact: 'Moderate',  source: 'NCSC Annual Review 2024',    rationale: 'The remote and mobile attack surface has grown substantially with hybrid working; endpoint controls reduce but do not eliminate risk.' },
  'ae-12': { initiation: 'Moderate',  impact: 'Moderate',  source: 'ENISA Threat Landscape 2024', rationale: 'DDoS is one of the most frequently observed attack categories in ENISA data; impact varies with redundancy and mitigation capability.' },
  'ae-13': { initiation: 'Very High', impact: 'Moderate',  source: 'ENISA Threat Landscape 2024', rationale: 'Credential-guessing and stuffing attacks are near-universal; MFA and account lockout policies substantially reduce adverse impact.' },
  'ae-14': { initiation: 'Low',       impact: 'High',      source: 'ENISA Threat Landscape 2024', rationale: 'MITM is harder to execute against TLS-protected traffic; when successful, the attacker obtains high-value credentials or session tokens.' },
  'ae-15': { initiation: 'High',      impact: 'High',      source: 'ENISA Threat Landscape 2024', rationale: 'Social engineering is a consistent top-tier attack vector in ENISA and NCSC reports; it remains highly effective even against trained users.' },
  'ae-16': { initiation: 'Low',       impact: 'High',      source: 'CISA Remote Access Guidance', rationale: 'Split-tunnel exploitation requires a specific VPN configuration to be present; when conditions exist it bypasses perimeter controls entirely.' },
  'ae-17': { initiation: 'Low',       impact: 'High',      source: 'ENISA Physical Threats 2024', rationale: 'Physical attacks on IT infrastructure are infrequent for most organisations; when successful they afford direct hardware-level access.' },
  'ae-18': { initiation: 'Moderate',  impact: 'Very High', source: 'ENISA Threat Landscape 2024', rationale: 'Data exfiltration follows the majority of successful network compromises; exfiltrated data causes lasting regulatory and reputational harm.' },
  'ae-19': { initiation: 'Moderate',  impact: 'Very High', source: 'ENISA Threat Landscape 2024', rationale: 'Ransomware is the most reported high-impact threat in ENISA data; destruction of data without tested backups is catastrophic.' },
  'ae-20': { initiation: 'Low',       impact: 'Very High', source: 'ENISA Threat Landscape 2024', rationale: 'Supply-chain attacks are increasing in frequency but remain relatively uncommon; a successful compromise propagates silently and at scale.' },
  'ae-21': { initiation: 'High',      impact: 'High',      source: 'ENISA Cloud Security 2024',  rationale: 'Cloud misconfiguration is a leading cause of cloud-related incidents in ENISA and NCSC guidance; exposed APIs and storage are actively scanned.' },
  'ae-22': { initiation: 'Very Low',  impact: 'Very High', source: 'ENISA Physical Threats 2024', rationale: 'Physical facility attacks are rare for most organisations; when they occur, operational disruption is typically severe and prolonged.' },
  'ae-23': { initiation: 'Moderate',  impact: 'Low',       source: 'ENISA Threat Landscape 2024', rationale: 'Web defacement is opportunistic and common; direct operational harm is limited but reputational and trust damage can be significant.' },
  'ae-24': { initiation: 'Very Low',  impact: 'Very High', source: 'ENISA Insider Threat 2024',  rationale: 'Deliberately planted insiders are rare; their trusted position and prolonged access cause disproportionate harm when it occurs.' },
  /* ── Non-adversarial events ──────────────────────────────────────────── */
  'ne-01': { initiation: 'High',      impact: 'Moderate',  source: 'ENISA NIS Investments 2024', rationale: 'Accidental data disclosure by authorised users is consistently one of the most reported incident categories across EU operators.' },
  'ne-02': { initiation: 'Moderate',  impact: 'Moderate',  source: 'ENISA NIS Investments 2024', rationale: 'Misconfigured access privileges are a frequent finding in security audits; impact is bounded by what the over-privileged account can reach.' },
  'ne-03': { initiation: 'High',      impact: 'Moderate',  source: 'NIST NVD / ENISA CVE Trends', rationale: 'New vulnerabilities are disclosed at high and rising rates; most require a separate trigger to cause harm and are medium severity.' },
  'ne-04': { initiation: 'Moderate',  impact: 'Low',       source: 'ENISA NIS Investments 2024', rationale: 'Storage hardware failures follow predictable failure-rate curves; impact is low where regular, tested backups are maintained.' },
  'ne-05': { initiation: 'Low',       impact: 'Low',       source: 'ENISA NIS Investments 2024', rationale: 'Resource depletion is normally detected by monitoring before causing significant degradation; capacity planning limits likelihood.' },
  'ne-06': { initiation: 'Moderate',  impact: 'Low',       source: 'ENISA NIS Investments 2024', rationale: 'Hardware failure rates increase predictably with age; redundancy and maintenance schedules constrain adverse impact.' },
  'ne-07': { initiation: 'Low',       impact: 'Very High', source: 'ENISA Physical Threats 2024', rationale: 'Accidental facility fires are rare; where they occur without off-site backups and tested DR plans the consequences are catastrophic.' },
  'ne-08': { initiation: 'Low',       impact: 'High',      source: 'EU Copernicus Climate Service', rationale: 'Flood risk is highly location-dependent; where applicable, a flood event typically renders the affected facility inoperable.' },
  'ne-09': { initiation: 'Low',       impact: 'High',      source: 'EU Copernicus Climate Service', rationale: 'Severe windstorm risk is region-dependent; significant windstorm events routinely cause extended facility outages.' },
  'ne-10': { initiation: 'Very Low',  impact: 'Very High', source: 'EMSC European Seismic Hazard', rationale: 'Seismic risk is highly location-dependent; a significant earthquake at a primary facility would be catastrophic for operations.' },
  'ne-11': { initiation: 'High',      impact: 'Low',       source: 'ENISA NIS Investments 2024', rationale: 'Power outages are among the most frequently reported non-adversarial incidents; UPS and generator provision typically limits impact.' },
  'ne-12': { initiation: 'Moderate',  impact: 'Low',       source: 'ENISA NIS Investments 2024', rationale: 'Telecommunications outages occur periodically; redundant ISP or carrier connections reduce impact to a minor inconvenience.' },
};

function suggestionPanel(ev, isAdv) {
  const s = LIKELIHOOD_SUGGESTIONS[ev.refId];
  if (!s) return '';
  const label = isAdv ? 'Initiation' : 'Occurrence';
  const applied = ev.likelihoodInitiation === s.initiation;
  return `
    <div class="suggest-panel" aria-label="Suggested likelihood">
      <p class="suggest-panel-heading">Suggested from public intel</p>
      <button type="button" class="suggest-item${applied ? ' suggest-item--added' : ''}"
        data-ev-id="${esc(ev.id)}" data-init="${esc(s.initiation)}"
        ${applied ? 'disabled aria-disabled="true"' : ''}
        aria-label="Apply suggested ${label.toLowerCase()} likelihood for ${esc(ev.name)}">
        <span class="suggest-item-value">${esc(label)}: ${esc(s.initiation)}</span>
        <span class="suggest-item-hint">${esc(s.rationale)}</span>
        <span class="suggest-item-hint">Source: ${esc(s.source)}</span>
      </button>
    </div>`;
}

function scaleButtons(fieldName, current, evId) {
  return `<div class="scale-group" role="group" aria-label="${esc(fieldName)}">
    ${SCALE.map(s => `
      <button type="button" class="scale-btn ${current === s ? 'active' : ''}"
        data-ev-id="${esc(evId)}" data-field="${esc(fieldName)}" data-value="${esc(s)}"
        aria-pressed="${current === s ? 'true' : 'false'}">${esc(s)}</button>`).join('')}
  </div>`;
}

export function render(assessment, updateFn) {
  const events = (assessment.threatEvents ?? []);

  function updateEvent(id, partial) {
    const arr = (assessment.threatEvents ?? []).map(e => {
      if (e.id !== id) return e;
      const updated = { ...e, ...partial };
      // Auto-calculate overall likelihood when both inputs are set
      if (updated.likelihoodInitiation && updated.likelihoodImpact) {
        updated.overallLikelihood = computeOverallLikelihood(
          updated.likelihoodInitiation, updated.likelihoodImpact, SCALE, OVERALL_LIKELIHOOD_MATRIX);
      } else {
        updated.overallLikelihood = '';
      }
      return updated;
    });
    const wasValid = (assessment.threatEvents ?? []).every(e => !!e.overallLikelihood);
    const isValid  = arr.every(e => !!e.overallLikelihood);
    updateFn({ threatEvents: arr }, false, wasValid !== isValid);
  }

  const el = document.createElement('div');

  function draw() {
    if (events.length === 0) {
      el.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Step 6 &mdash; Likelihood Assessment</h2>
          </div>
          <div class="card-body">
            <div class="alert alert-warning">
              No threat events were selected in Step 4. Please go back and select at least one threat event.
            </div>
          </div>
        </div>`;
      return;
    }

    el.innerHTML = `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Step 6 &mdash; How Likely Is Each Event?</h2>
          <p class="card-subtitle">
            <span class="nist-term">Likelihood Assessment (Task 2-4)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="likelihood" aria-label="NIST definition of Likelihood">&#9432;</button>
          </p>
        </div>
        <div class="card-body">
          <div class="info-box mb-5">
            <p>For each threat event, assess two likelihood components:</p>
            <ul>
              <li><strong>Adversarial events</strong> — Likelihood of <em>initiation</em>: the probability the threat source will attempt the attack.</li>
              <li><strong>Non-adversarial events</strong> — Likelihood of <em>occurrence</em>: the probability the event will happen.</li>
              <li><strong>All events</strong> — Likelihood of <em>adverse impact</em>: given the event occurs, the probability it results in harm.</li>
            </ul>
            <p>The <strong>Overall Likelihood</strong> is automatically calculated (the combination of initiation/occurrence × adverse impact).</p>
          </div>

          ${events.map(ev => {
            const isAdv = ev.type === 'adversarial';
            const overall = ev.overallLikelihood;
            return `
              <details class="section-card collapsible-section event-likelihood-card" open>
                <summary class="section-title collapsible-summary">
                  <span class="text-sm font-medium">${esc(ev.name)}</span>
                  <div class="flex gap-2 items-center">
                    <span class="badge badge-${isAdv ? 'high' : 'neutral'}">${isAdv ? 'Adversarial' : 'Non-Adversarial'}</span>
                    ${overall ? `<span>Overall: ${badgeHtml(overall)}</span>` : '<span class="badge badge-neutral">Not rated</span>'}
                  </div>
                </summary>

                <div class="suggest-layout${LIKELIHOOD_SUGGESTIONS[ev.refId] ? ' suggest-layout--has-panel' : ''}">
                  <div>
                    <label class="label label-flex">
                      ${isAdv ? 'How likely is this attack to be attempted?' : 'How likely is this event to occur?'}
                      <button type="button" class="nist-ref-btn" data-nist-ref="${isAdv ? 'likelihood-initiation' : 'likelihood'}" aria-label="NIST definition">&#9432;</button>
                    </label>
                    <p class="text-muted text-sm">
                      ${isAdv
                        ? 'The probability that a threat source will attempt to initiate a threat event against the organization, given the source\'s capability, intent, and targeting.'
                        : 'The probability that this non-adversarial event occurs, given the existence of predisposing conditions.'}
                    </p>
                    ${scaleButtons('likelihoodInitiation', ev.likelihoodInitiation, ev.id)}
                  </div>
                  ${suggestionPanel(ev, isAdv)}
                </div>

                <div class="form-group mt-4">
                  <label class="label label-flex">
                    If this event occurs, how likely is it to cause real harm?
                    <button type="button" class="nist-ref-btn" data-nist-ref="likelihood-adverse-impact" aria-label="NIST definition of Likelihood of Adverse Impact">&#9432;</button>
                  </label>
                  <p class="text-muted text-sm">
                    The probability that the threat event, once initiated or occurring, results in adverse impact,
                    given existing security controls and vulnerabilities.
                  </p>
                  ${scaleButtons('likelihoodImpact', ev.likelihoodImpact, ev.id)}
                </div>

                <div class="likelihood-result">
                  <div class="flex items-center gap-3 flex-wrap">
                    <span class="label m-0">
                      Combined likelihood (auto-calculated)
                      <button type="button" class="nist-ref-btn" data-nist-ref="overall-likelihood" aria-label="NIST definition of Overall Likelihood">&#9432;</button>
                    </span>
                    ${overall
                      ? badgeHtml(overall)
                      : '<span class="text-muted">Rate both values above to calculate</span>'}
                  </div>
                </div>

                <div class="form-group mt-3">
                  <label class="label">Rationale / Notes</label>
                  <textarea class="form-control form-control-sm" rows="2"
                    data-lh-notes="${esc(ev.id)}"
                    placeholder="Explain the basis for these likelihood ratings…">${esc(ev.notes)}</textarea>
                </div>
              </details>`;
          }).join('')}
        </div>
      </div>`;

    wireNistButtons(el);

    // Scale button clicks
    el.querySelectorAll('.scale-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        updateEvent(btn.dataset.evId, { [btn.dataset.field]: btn.dataset.value });
        // Update button states immediately for responsiveness
        const group = btn.closest('.scale-group');
        group?.querySelectorAll('.scale-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.value === btn.dataset.value);
          b.setAttribute('aria-pressed', b.dataset.value === btn.dataset.value ? 'true' : 'false');
        });
        // Recalculate displayed overall likelihood
        const evId = btn.dataset.evId;
        const updated = (assessment.threatEvents ?? []).find(e => e.id === evId);
        if (updated) {
          const card = btn.closest('.event-likelihood-card');
          const resultEl = card?.querySelector('.likelihood-result');
          if (resultEl) {
            const init = updated.likelihoodInitiation;
            const imp = updated.likelihoodImpact;
            if (init && imp) {
              const overall = computeOverallLikelihood(init, imp, SCALE, OVERALL_LIKELIHOOD_MATRIX);
              resultEl.innerHTML = `<div class="flex items-center gap-3 flex-wrap">
                <span class="label m-0">Combined likelihood (auto-calculated)</span>
                ${badgeHtml(overall)}
              </div>`;
            }
          }
        }
      });
    });

    // Suggestion apply buttons (suggest-panel items) — initiation only
    el.querySelectorAll('.suggest-item[data-ev-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const evId = btn.dataset.evId;
        const init = btn.dataset.init;

        updateEvent(evId, { likelihoodInitiation: init });

        // Update initiation scale button states immediately
        const card = btn.closest('.event-likelihood-card');
        if (card) {
          card.querySelectorAll('.scale-btn[data-field="likelihoodInitiation"]').forEach(b => {
            b.classList.toggle('active', b.dataset.value === init);
            b.setAttribute('aria-pressed', b.dataset.value === init ? 'true' : 'false');
          });
        }

        // Mark as applied
        btn.disabled = true;
        btn.setAttribute('aria-disabled', 'true');
        btn.classList.add('suggest-item--added');
      });
    });

    // Notes — read evId from data attribute, not closure
    el.querySelectorAll('[data-lh-notes]').forEach(ta => {
      ta.addEventListener('input', () => updateEvent(ta.dataset.lhNotes, { notes: ta.value }));
    });
  }

  el._draw = draw;
  draw();
  return el;
}

export function validate(assessment) {
  const events = assessment.threatEvents ?? [];
  const unrated = events.filter(e => !e.overallLikelihood);
  if (unrated.length > 0 && events.length > 0) {
    return {
      valid: false,
      errors: [`${unrated.length} threat event(s) do not have a likelihood rating. Please rate all events before continuing.`]
    };
  }
  return { valid: true, errors: [] };
}
