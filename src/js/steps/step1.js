/** Step 1 — Assessment Setup (tier-adaptive: org vs system) */
import { esc, showErrors, wireNistButtons, todayIso, renderSuggestedField, wireSuggestedFields } from '../utils.js';

export function render(assessment, updateFn) {
  const isOrg    = assessment.tier === 'org';
  const tierRef  = isOrg ? 'tier-1' : 'tier-3';
  const tierLabel = isOrg
    ? 'Organisation / Business Process (Tier 1 &amp; 2)'
    : 'Information System (Tier 3)';
  const scopeNameLabel = isOrg ? 'Business Process or Scope Name *' : 'System Name *';
  const scopeNameHint  = isOrg
    ? 'e.g. Order Fulfilment Process, HR Management, Finance &amp; Payroll'
    : 'e.g. Human Resources Management System (HRMS)';
  const scopeDescLabel = isOrg ? 'Process Description'    : 'System Description';
  const scopeDescHint  = isOrg
    ? 'Brief description of the business process, its purpose and key activities\u2026'
    : "Brief description of the system's purpose, users, and key functions\u2026";
  const boundaryLabel = isOrg ? 'Scope &amp; Boundaries' : 'Authorization Boundary';
  const boundaryHint  = isOrg
    ? 'What is included and excluded from this assessment? Who and what are in scope?'
    : 'Describe the components, interfaces, and services within the authorization boundary\u2026';

  const el = document.createElement('div');
  el.innerHTML = `
    <div class="card">
      <div class="card-header">
        <div class="card-header-row">
          <div>
            <h2 class="card-title">Step 1 &mdash; Set Up Your Assessment</h2>
            <p class="card-subtitle">
              <span class="nist-term">Identification &amp; Context (Tasks 1-1, 1-2)</span>
              <button type="button" class="nist-ref-btn" data-nist-ref="risk-assessment" aria-label="NIST definition of Risk Assessment">&#9432;</button>
            </p>
          </div>
          <span class="tier-badge ${isOrg ? 'tier-badge-org' : 'tier-badge-system'}">${isOrg ? 'Org / Process \u2014 Tier 1 &amp; 2' : 'System \u2014 Tier 3'}</span>
        </div>
      </div>
      <div class="card-body">
        <div id="step1-errors" role="alert" aria-live="polite"></div>

        <div class="alert alert-warning mb-5">
          <strong>Before you enter sensitive risk data:</strong> this assessment is stored unencrypted in your browser until you delete it.
          Use encrypted backups for sensitive records, avoid shared or untrusted devices, and remember that local-first storage does not protect against XSS, malicious browser extensions, or compromised endpoints.
        </div>

        <fieldset class="section-card">
          <legend class="section-title">Assessment Identification</legend>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="label" for="f-name">Assessment Name *</label>
              <input class="form-control" id="f-name" type="text" value="${esc(assessment.name)}"
                placeholder="e.g. Q3 2025 Risk Assessment" autocomplete="off" aria-required="true" />
            </div>
            <div class="form-group">
              <label class="label" for="f-org">Organisation</label>
              <input class="form-control" id="f-org" type="text" value="${esc(assessment.organization)}"
                placeholder="e.g. Acme Corp" autocomplete="organization" />
            </div>
          </div>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="label" for="f-assessor">Assessor(s)</label>
              <input class="form-control" id="f-assessor" type="text" value="${esc(assessment.assessor)}"
                placeholder="e.g. J. Smith, A. Jones" autocomplete="name" />
            </div>
            <div class="form-group">
              <label class="label" for="f-date">Assessment Date</label>
              <input class="form-control" id="f-date" type="date" value="${esc(assessment.date || todayIso())}" />
            </div>
          </div>
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            ${tierLabel}
            <button type="button" class="nist-ref-btn" data-nist-ref="${tierRef}" aria-label="NIST definition">&#9432;</button>
          </legend>
          <div class="info-box mb-4">
            ${isOrg
              ? 'This is a <strong>Tier 1/2 assessment</strong> \u2014 it examines risks at the <strong>organisation or business-process level</strong>. This is the right starting point when you want a broad risk overview before drilling into specific systems.'
              : 'This is a <strong>Tier 3 assessment</strong> \u2014 it examines risks for a specific <strong>information system</strong>. Tier 3 assessments support security control selection, system authorisation, and continuous monitoring activities.'}
          </div>
          ${renderSuggestedField({
            id: 'f-sysname',
            label: scopeNameLabel,
            value: esc(assessment.systemName),
            placeholder: scopeNameHint,
            required: true,
            suggestions: isOrg ? [
              {
                value: 'Whole Organisation',
                hint: 'Assess cybersecurity risk across the entire organisation — all departments, processes, and supporting IT.',
                description: 'This risk assessment covers all organisational units, business processes, and supporting information technology within the organisation.',
                extras: {
                  boundary: 'In scope: all business units, departments, key business processes, and supporting IT systems. Out of scope: third-party managed services and cloud platforms not under direct organisational control.',
                  scope: 'The assessment examines cybersecurity risks across the full organisational structure, including people, processes, technology, and governance arrangements.',
                },
              },
              {
                value: 'On-Premises Datacenter',
                hint: 'Scope the assessment to your organisation\'s on-site datacenter — servers, storage, networking, and physical infrastructure.',
                description: 'This risk assessment covers the on-premises datacenter environment, including physical servers, storage systems, network infrastructure, and associated management processes.',
                extras: {
                  boundary: 'In scope: all physical and virtual infrastructure within the datacenter perimeter, including servers, storage, networking equipment, and environmental controls. Out of scope: end-user devices and remote office locations.',
                  scope: 'The assessment focuses on cybersecurity risks associated with the on-premises datacenter infrastructure, including availability, integrity, and confidentiality of hosted systems and data.',
                },
              },
              {
                value: 'ERP System',
                hint: 'Focus on your Enterprise Resource Planning platform and the business processes and data it supports.',
                description: 'This risk assessment covers the Enterprise Resource Planning system, including all integrated modules, underlying databases, interfaces, and dependent business processes.',
                extras: {
                  boundary: 'In scope: all ERP modules, underlying database servers, application interfaces, and administrative access paths. Out of scope: end-user workstations and peripheral applications not directly integrated with the ERP.',
                  scope: 'The assessment examines cybersecurity risks to the ERP system, including risks to business-critical data, operational continuity, and integration points with other organisational systems.',
                },
              },
            ] : [],
          })}
          <div class="form-group">
            <label class="label" for="f-sysdesc">${scopeDescLabel}</label>
            <textarea class="form-control" id="f-sysdesc" rows="3"
              placeholder="${scopeDescHint}">${esc(assessment.systemDescription)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-boundary">${boundaryLabel}</label>
            <textarea class="form-control" id="f-boundary" rows="2"
              placeholder="${boundaryHint}">${esc(assessment.authorizationBoundary)}</textarea>
          </div>
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title">Assessment Scope &amp; Purpose</legend>
          <div class="form-group">
            <label class="label" for="f-purpose">Purpose *</label>
            <textarea class="form-control" id="f-purpose" rows="3"
              placeholder="Why are you conducting this assessment? (e.g., NIS2 compliance, internal review, following a security incident, preparing for system go-live)\u2026">${esc(assessment.purpose)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-scope">Scope</label>
            <textarea class="form-control" id="f-scope" rows="3"
              placeholder="What is and is not included in this assessment?\u2026">${esc(assessment.scope)}</textarea>
          </div>
        </fieldset>


      </div>
    </div>`;

  wireNistButtons(el);

  const fields = ['name', 'org', 'assessor', 'date', 'sysname', 'sysdesc', 'boundary', 'purpose', 'scope'];
  const stateKeyMap = {
    name: 'name', org: 'organization', assessor: 'assessor', date: 'date',
    sysname: 'systemName', sysdesc: 'systemDescription', boundary: 'authorizationBoundary',
    purpose: 'purpose', scope: 'scope',
  };
  fields.forEach(key => {
    const fld = el.querySelector(`#f-${key}`);
    if (!fld) return;
    fld.addEventListener('input',  () => updateFn({ [stateKeyMap[key]]: fld.value }));
    fld.addEventListener('change', () => updateFn({ [stateKeyMap[key]]: fld.value }));
  });

  wireSuggestedFields(el, (inputId, value, description, extras) => {
    const key = inputId.replace('f-', '');
    const stateKey = stateKeyMap[key];
    const patch = {};
    if (stateKey) patch[stateKey] = value;
    if (inputId === 'f-sysname') {
      if (description) {
        const descEl = el.querySelector('#f-sysdesc');
        if (descEl && !descEl.value.trim()) {
          descEl.value = description;
          patch.systemDescription = description;
        }
      }
      if (extras?.boundary) {
        const boundaryEl = el.querySelector('#f-boundary');
        if (boundaryEl && !boundaryEl.value.trim()) {
          boundaryEl.value = extras.boundary;
          patch.authorizationBoundary = extras.boundary;
        }
      }
      if (extras?.scope) {
        const scopeEl = el.querySelector('#f-scope');
        if (scopeEl && !scopeEl.value.trim()) {
          scopeEl.value = extras.scope;
          patch.scope = extras.scope;
        }
      }
    }
    // Single batched update with rerender so renderNav() re-evaluates button validity
    updateFn(patch, true);
  });

  return el;
}

export function validate(assessment) {
  const errors = [];
  if (!assessment.name?.trim())       errors.push('Assessment Name is required.');
  if (!assessment.systemName?.trim()) errors.push(assessment.tier === 'org' ? 'Business Process / Scope Name is required.' : 'System Name is required.');
  if (!assessment.purpose?.trim())    errors.push('Purpose is required.');
  return { valid: errors.length === 0, errors };
}
