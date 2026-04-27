/** Step 2 — Risk Model & Assessment Approach (Tasks 1-3, 1-4, 1-5) */
import { esc, wireNistButtons } from '../utils.js';
import { ASSESSMENT_APPROACHES, ANALYSIS_APPROACHES } from '../data.js';

export function render(assessment, updateFn) {
  const isGuided = !!assessment.scenarioId;

  const qualitative    = ASSESSMENT_APPROACHES.find(a => a.value === 'qualitative');
  const advanced       = ASSESSMENT_APPROACHES.filter(a => a.value !== 'qualitative');

  const radioHtml = (approaches) => approaches.map(a => `
    <label class="radio-option ${assessment.assessmentApproach === a.value ? 'selected' : ''}">
      <input type="radio" name="assessmentApproach" value="${esc(a.value)}"
        ${assessment.assessmentApproach === a.value ? 'checked' : ''} />
      <div>
        <strong>${esc(a.label)}</strong>
        <p>${esc(a.desc)}</p>
      </div>
    </label>`).join('');

  const approachFieldset = isGuided ? `
    <div class="radio-group" id="approach-radios">
      ${radioHtml([qualitative])}
    </div>
    <details class="advanced-options">
      <summary class="advanced-options-toggle">Show advanced approaches (semi-quantitative &amp; quantitative)</summary>
      <div class="radio-group mt-3" id="approach-radios-advanced">
        ${radioHtml(advanced)}
      </div>
    </details>` : `
    <div class="radio-group" id="approach-radios">
      ${radioHtml(ASSESSMENT_APPROACHES)}
    </div>`;

  const threatOriented   = ANALYSIS_APPROACHES.find(a => a.value === 'threat-oriented');
  const advancedAnalysis = ANALYSIS_APPROACHES.filter(a => a.value !== 'threat-oriented');

  const analysisRadioHtml = (approaches) => approaches.map(a => `
    <label class="radio-option ${assessment.analysisApproach === a.value ? 'selected' : ''}">
      <input type="radio" name="analysisApproach" value="${esc(a.value)}"
        ${assessment.analysisApproach === a.value ? 'checked' : ''} />
      <div>
        <strong>${esc(a.label)}</strong>
        <p>${esc(a.desc)}</p>
      </div>
    </label>`).join('');

  const analysisFieldset = isGuided ? `
    <div class="radio-group" id="analysis-radios">
      ${analysisRadioHtml([threatOriented])}
    </div>
    <details class="advanced-options">
      <summary class="advanced-options-toggle">Show other starting points (asset / impact-oriented &amp; vulnerability-oriented)</summary>
      <div class="radio-group mt-3" id="analysis-radios-advanced">
        ${analysisRadioHtml(advancedAnalysis)}
      </div>
    </details>` : `
    <div class="radio-group" id="analysis-radios">
      ${analysisRadioHtml(ANALYSIS_APPROACHES)}
    </div>`;

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-header-row-center">
          <div>
            <h2 class="card-title">Step 2 — Risk Model &amp; Approach</h2>
            <p class="card-subtitle">Define how risk will be measured and analyzed (Tasks 1-3, 1-4, 1-5)</p>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" data-info-toggle="#step2-info" aria-expanded="false">▼ Show info</button>
        </div>
        <div id="step2-info" hidden>
          <div class="info-box mt-3">
            <p>The <strong>risk model</strong> defines the key factors used to assess risk and the relationships among those factors.
            NIST SP 800-30 R1 uses threat sources, threat events, vulnerabilities, likelihood, and impact as its model components
            (see Figure 3: Generic Risk Model).</p>
            <p>The <strong>assessment approach</strong> determines whether risk is expressed using descriptive terms (qualitative),
            numeric scales (semi-quantitative), or numerical probabilities and monetary values (quantitative). Qualitative is the
            recommended default for most Tier 3 assessments.</p>
          </div>
        </div>
      </div>
      <div class="card-body">

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            How should risk values be expressed?
            <span class="nist-term">Assessment Approach (Task 1-3)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="assessment-approach" aria-label="NIST definition">&#9432;</button>
          </legend>
          <p class="text-muted mb-4">Select how risk levels will be expressed in this assessment. <strong>Qualitative is recommended</strong> for most organisations.</p>
          ${approachFieldset}
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            What is the starting point for identifying risks?
            <span class="nist-term">Analysis Approach (Task 1-4)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="analysis-approach" aria-label="NIST definition of Analysis Approach">&#9432;</button>
          </legend>
          <p class="text-muted mb-4">Select the starting point for the analysis.</p>
          ${analysisFieldset}
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title">Key Assumptions, Constraints &amp; Risk Tolerance (Task 1-5)</legend>
          <div class="form-group">
            <label class="label" for="f-assumptions">Key Assumptions</label>
            <textarea class="form-control" id="f-assumptions" rows="4"
              placeholder="List any key assumptions made during this assessment (e.g., all employees have completed security awareness training, no third-party access to the system)...">${esc(assessment.assumptions)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-constraints">Constraints</label>
            <textarea class="form-control" id="f-constraints" rows="4"
              placeholder="List any constraints that limit the assessment scope or methodology (e.g., limited access to system documentation, time constraints, assessor expertise limitations)...">${esc(assessment.constraints)}</textarea>
          </div>
          <div class="form-group">
              <label class="label" for="f-risktol">
                Organisational Risk Tolerance *
                <button type="button" class="nist-ref-btn" data-nist-ref="risk-tolerance" aria-label="NIST definition of Risk Tolerance">&#9432;</button>
              </label>
            <select class="form-control" id="f-risktol" aria-required="true">
              <option value="">— Select —</option>
              ${['Very Low','Low','Moderate','High','Very High'].map(v =>
                `<option value="${esc(v)}" ${assessment.riskTolerance === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}
            </select>

            <div class="warn-box mt-3">
              <strong>Choose carefully — this has real consequences.</strong>
              Risk tolerance determines the threshold at which identified risks require action. A higher tolerance means
              more risks are accepted without a response. If a security incident later occurs, regulators (including under
              NIS2) may review this assessment. A stated tolerance of <em>High</em> or <em>Very High</em> — combined
              with a lack of corresponding controls — can be used as evidence that the organisation knowingly accepted
              significant risk without acting. Set this to reflect genuine board or senior-management policy, not
              aspiration.
            </div>

            <details class="advanced-options mt-3">
              <summary class="advanced-options-toggle">What do the levels mean?</summary>
              <div class="risk-tol-guide mt-3">
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-vl">Very Low</span>
                  <div>
                    <strong>Near-zero tolerance.</strong> Even low-likelihood or low-impact risks require a documented
                    response. Typical for critical-infrastructure operators, financial institutions, or organisations
                    processing highly sensitive personal data. Aligns with the strictest interpretation of NIS2 Article 21
                    obligations.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-l">Low</span>
                  <div>
                    <strong>Conservative.</strong> The organisation accepts only residual risks after proportionate
                    controls are in place. Most risks rated <em>Low</em> or above trigger a treatment plan. A reasonable
                    default for organisations with NIS2 obligations.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-m">Moderate</span>
                  <div>
                    <strong>Balanced.</strong> Low risks may be accepted; Medium risks are reviewed and treated where
                    cost-effective; High and Very High risks always require action. Appropriate for organisations where
                    cybersecurity risk is significant but not existential. Per NIST SP 800-30, this is a common starting
                    point for Tier 1/2 assessments.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-h">High</span>
                  <div>
                    <strong>Risk-accepting.</strong> Only High and Very High risks are systematically treated. Use this
                    level only if senior management has explicitly accepted it and documented the rationale — especially
                    if your organisation is subject to NIS2, GDPR, or sector-specific regulation. Regulators will
                    scrutinise this choice in the event of an incident.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-vh">Very High</span>
                  <div>
                    <strong>Near-unlimited tolerance.</strong> Only the most severe, near-certain risks prompt a
                    response. This level is rarely appropriate for any regulated or public-facing organisation. Selecting
                    this without a compelling, documented justification creates significant legal and reputational
                    exposure.
                  </div>
                </div>
              </div>
            </details>
          </div>
        </fieldset>

      </div>
    </div>`;

  wireNistButtons(el);

  el.querySelectorAll('[name="assessmentApproach"]').forEach(r => {
    r.addEventListener('change', () => {
      updateFn({ assessmentApproach: r.value });
      el.querySelectorAll('[name="assessmentApproach"]').forEach(radio => {
        radio.closest('.radio-option')?.classList.toggle('selected', radio.value === r.value);
      });
    });
  });

  el.querySelectorAll('[name="analysisApproach"]').forEach(r => {
    r.addEventListener('change', () => {
      updateFn({ analysisApproach: r.value });
      el.querySelectorAll('[name="analysisApproach"]').forEach(radio => {
        radio.closest('.radio-option')?.classList.toggle('selected', radio.value === r.value);
      });
    });
  });

  el.querySelector('#f-assumptions')?.addEventListener('input', e => updateFn({ assumptions: e.target.value }));
  el.querySelector('#f-constraints')?.addEventListener('input', e => updateFn({ constraints: e.target.value }));
  el.querySelector('#f-risktol')?.addEventListener('change', e => updateFn({ riskTolerance: e.target.value }, true));

  return el;
}

export function validate(a) {
  if (!a.riskTolerance) {
    return { valid: false, errors: ['Organisational Risk Tolerance is required. Select a level before continuing.'] };
  }
  return { valid: true, errors: [] };
}
