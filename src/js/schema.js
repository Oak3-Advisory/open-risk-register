import {
  SCALE,
  THREAT_SOURCE_TAXONOMY,
  ADVERSARIAL_EVENTS,
  NON_ADVERSARIAL_EVENTS,
  RELEVANCE_VALUES,
  PREDISPOSING_TYPES,
  ASSESSMENT_APPROACHES,
  ANALYSIS_APPROACHES,
} from './data.js';
import { SCENARIOS } from './scenarios.js';

export const ASSESSMENT_EXPORT_FORMAT = 'open-risk-register-assessment';
export const ASSESSMENT_EXPORT_VERSION = 2;
export const ENCRYPTED_EXPORT_FORMAT = 'open-risk-register-encrypted-export';
export const ENCRYPTED_EXPORT_VERSION = 1;
export const MAX_IMPORT_BYTES = 1024 * 1024;

const DANGEROUS_KEYS = new Set(['__proto__', 'prototype', 'constructor']);
const SCALE_SET = new Set(SCALE);
const THREAT_SOURCE_TYPES = new Set(['Adversarial', 'Accidental', 'Structural', 'Environmental']);
const THREAT_EVENT_TYPES = new Set(['adversarial', 'non-adversarial']);
const NIS2_TYPES = new Set(['essential', 'important', 'not-applicable']);
const ASSESSMENT_APPROACH_SET = new Set(ASSESSMENT_APPROACHES.map(item => item.value));
const ANALYSIS_APPROACH_SET = new Set(ANALYSIS_APPROACHES.map(item => item.value));
const RELEVANCE_SET = new Set(RELEVANCE_VALUES.map(item => item.value));
const SCENARIO_SET = new Set(SCENARIOS.map(item => item.id));
const THREAT_SOURCE_REF_SET = new Set(THREAT_SOURCE_TAXONOMY.map(item => item.id));
const THREAT_EVENT_REF_SET = new Set([...ADVERSARIAL_EVENTS, ...NON_ADVERSARIAL_EVENTS].map(item => item.id));
const PREDISPOSING_REF_SET = new Set(PREDISPOSING_TYPES.map(item => item.id));

const STORE_KEYS = new Set(['version', 'assessments', 'assessmentIds']);
const EXPORT_DOCUMENT_KEYS = new Set(['format', 'version', 'exportedAt', 'assessment']);
const ASSESSMENT_KEYS = new Set([
  'id', 'createdAt', 'updatedAt', 'currentStep', 'completedSteps', 'tier', 'nis2EntityType',
  'name', 'organization', 'assessor', 'date', 'systemName', 'systemDescription',
  'authorizationBoundary', 'purpose', 'scope', 'assessmentApproach', 'analysisApproach',
  'assumptions', 'constraints', 'riskTolerance', 'threatSources', 'threatEvents',
  'vulnerabilities', 'predisposingConditions', 'scenarioId', 'riskNotes',
]);
const THREAT_SOURCE_KEYS = new Set([
  'id', 'refId', 'name', 'type', 'isCustom', 'inScope', 'capability', 'intent',
  'targeting', 'rangeOfEffects', 'notes',
]);
const THREAT_EVENT_KEYS = new Set([
  'id', 'refId', 'name', 'description', 'type', 'isCustom', 'threatSourceIds',
  'relevance', 'notes', 'likelihoodInitiation', 'likelihoodImpact', 'overallLikelihood',
  'impactLevel', 'impactNotes', 'riskLevel', 'riskOverride', 'riskOverrideReason', 'riskNotes',
]);
const VULNERABILITY_KEYS = new Set(['id', 'name', 'description', 'severity', 'notes']);
const PREDISPOSING_KEYS = new Set(['id', 'refId', 'name', 'description', 'pervasiveness', 'notes', 'isCustom']);

const LIMITS = {
  id: 128,
  name: 160,
  organization: 160,
  assessor: 200,
  shortText: 240,
  mediumText: 1000,
  longText: 5000,
  notes: 8000,
  itemCount: 250,
};

function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function encodedLength(value) {
  return new TextEncoder().encode(String(value)).length;
}

function assertSafeObject(value, label) {
  if (!isPlainObject(value)) throw new Error(`${label} must be an object.`);
  for (const key of Object.keys(value)) {
    if (DANGEROUS_KEYS.has(key)) throw new Error(`${label} contains a forbidden field.`);
  }
}

function assertKnownKeys(value, allowedKeys, label) {
  const unknown = Object.keys(value).filter(key => !allowedKeys.has(key));
  if (unknown.length > 0) throw new Error(`${label} contains unsupported fields.`);
}

function readString(value, label, { maxBytes = LIMITS.longText, allowEmpty = true, enumSet = null } = {}) {
  if (value === undefined || value === null) {
    if (!allowEmpty) throw new Error(`${label} is required.`);
    return '';
  }
  if (typeof value !== 'string') throw new Error(`${label} must be a string.`);
  if (!allowEmpty && value.trim() === '') throw new Error(`${label} is required.`);
  if (encodedLength(value) > maxBytes) throw new Error(`${label} is too long.`);
  if (enumSet && value !== '' && !enumSet.has(value)) throw new Error(`${label} has an invalid value.`);
  return value;
}

function readBoolean(value, label, defaultValue = false) {
  if (value === undefined) return defaultValue;
  if (typeof value !== 'boolean') throw new Error(`${label} must be true or false.`);
  return value;
}

function readInteger(value, label, { min, max, defaultValue } = {}) {
  if (value === undefined || value === null || value === '') {
    if (defaultValue !== undefined) return defaultValue;
    throw new Error(`${label} is required.`);
  }
  if (!Number.isInteger(value)) throw new Error(`${label} must be a whole number.`);
  if (min !== undefined && value < min) throw new Error(`${label} is invalid.`);
  if (max !== undefined && value > max) throw new Error(`${label} is invalid.`);
  return value;
}

function readIsoDate(value, label, fallback) {
  if (value === undefined || value === null || value === '') return fallback;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error(`${label} must be a valid date.`);
  return value;
}

function readIsoTimestamp(value, label, fallback) {
  if (value === undefined || value === null || value === '') return fallback;
  if (typeof value !== 'string' || Number.isNaN(Date.parse(value))) throw new Error(`${label} must be a valid timestamp.`);
  return value;
}

function readStringArray(value, label, { maxItems = LIMITS.itemCount, maxBytes = LIMITS.id } = {}) {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) throw new Error(`${label} must be a list.`);
  if (value.length > maxItems) throw new Error(`${label} is too large.`);
  return value.map((item, index) => readString(item, `${label} item ${index + 1}`, { maxBytes, allowEmpty: false }));
}

function uniq(values) {
  return [...new Set(values)];
}

function normalizeThreatSource(item, idFactory, { preserveIds, allowIncompleteDrafts = false }) {
  assertSafeObject(item, 'Threat source');
  assertKnownKeys(item, THREAT_SOURCE_KEYS, 'Threat source');

  const rawId = readString(item.id ?? '', 'Threat source id', { maxBytes: LIMITS.id, allowEmpty: true });
  const nextId = preserveIds ? (rawId || idFactory()) : idFactory();
  const refId = readString(item.refId ?? '', 'Threat source reference', { maxBytes: LIMITS.id, allowEmpty: true });
  const isCustom = readBoolean(item.isCustom, 'Threat source custom flag', false);
  const type = readString(item.type ?? '', 'Threat source type', { maxBytes: LIMITS.shortText, allowEmpty: false, enumSet: THREAT_SOURCE_TYPES });

  if (!isCustom && refId && !THREAT_SOURCE_REF_SET.has(refId)) {
    throw new Error('Threat source reference is invalid.');
  }

  return {
    oldId: rawId,
    value: {
      id: nextId,
      refId: refId || null,
      name: readString(item.name, 'Threat source name', { maxBytes: LIMITS.shortText, allowEmpty: allowIncompleteDrafts && isCustom }),
      type,
      isCustom,
      inScope: readBoolean(item.inScope, 'Threat source scope flag', true),
      capability: readString(item.capability ?? '', 'Threat source capability', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
      intent: readString(item.intent ?? '', 'Threat source intent', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
      targeting: readString(item.targeting ?? '', 'Threat source targeting', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
      rangeOfEffects: readString(item.rangeOfEffects ?? '', 'Threat source range of effects', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
      notes: readString(item.notes ?? '', 'Threat source notes', { maxBytes: LIMITS.notes }),
    },
  };
}

function normalizeThreatEvent(item, idFactory, sourceIdMap, { preserveIds, allowUnknownSourceRefs = false, allowIncompleteDrafts = false }) {
  assertSafeObject(item, 'Threat event');
  assertKnownKeys(item, THREAT_EVENT_KEYS, 'Threat event');

  const rawId = readString(item.id ?? '', 'Threat event id', { maxBytes: LIMITS.id, allowEmpty: true });
  const nextId = preserveIds ? (rawId || idFactory()) : idFactory();
  const refId = readString(item.refId ?? '', 'Threat event reference', { maxBytes: LIMITS.id, allowEmpty: true });
  const isCustom = readBoolean(item.isCustom, 'Threat event custom flag', false);
  const type = readString(item.type ?? '', 'Threat event type', { maxBytes: LIMITS.shortText, allowEmpty: false, enumSet: THREAT_EVENT_TYPES });

  if (!isCustom && refId && !THREAT_EVENT_REF_SET.has(refId)) {
    throw new Error('Threat event reference is invalid.');
  }

  const sourceIds = readStringArray(item.threatSourceIds, 'Threat source references');
  const remappedSourceIds = uniq(sourceIds.map(oldId => {
    const next = sourceIdMap.get(oldId);
    if (!next) {
      if (allowUnknownSourceRefs) return null;
      throw new Error('Threat event references an unknown threat source.');
    }
    return next;
  }).filter(Boolean));

  return {
    id: nextId,
    refId: refId || null,
    name: readString(item.name, 'Threat event name', { maxBytes: LIMITS.mediumText, allowEmpty: allowIncompleteDrafts && isCustom }),
    description: readString(item.description ?? '', 'Threat event description', { maxBytes: LIMITS.longText }),
    type,
    isCustom,
    threatSourceIds: remappedSourceIds,
    relevance: readString(item.relevance ?? '', 'Threat event relevance', { maxBytes: LIMITS.shortText, enumSet: RELEVANCE_SET }),
    notes: readString(item.notes ?? '', 'Threat event notes', { maxBytes: LIMITS.notes }),
    likelihoodInitiation: readString(item.likelihoodInitiation ?? '', 'Likelihood of initiation', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    likelihoodImpact: readString(item.likelihoodImpact ?? '', 'Likelihood of adverse impact', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    overallLikelihood: readString(item.overallLikelihood ?? '', 'Overall likelihood', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    impactLevel: readString(item.impactLevel ?? '', 'Impact level', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    impactNotes: readString(item.impactNotes ?? '', 'Impact notes', { maxBytes: LIMITS.notes }),
    riskLevel: readString(item.riskLevel ?? '', 'Risk level', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    riskOverride: readString(item.riskOverride ?? '', 'Risk override', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    riskOverrideReason: readString(item.riskOverrideReason ?? '', 'Risk override reason', { maxBytes: LIMITS.mediumText }),
    riskNotes: readString(item.riskNotes ?? '', 'Risk notes', { maxBytes: LIMITS.notes }),
  };
}

function normalizeVulnerability(item, idFactory, { preserveIds, allowIncompleteDrafts = false }) {
  assertSafeObject(item, 'Vulnerability');
  assertKnownKeys(item, VULNERABILITY_KEYS, 'Vulnerability');

  const rawId = readString(item.id ?? '', 'Vulnerability id', { maxBytes: LIMITS.id, allowEmpty: true });
  return {
    id: preserveIds ? (rawId || idFactory()) : idFactory(),
    name: readString(item.name, 'Vulnerability name', { maxBytes: LIMITS.mediumText, allowEmpty: allowIncompleteDrafts }),
    description: readString(item.description ?? '', 'Vulnerability description', { maxBytes: LIMITS.longText }),
    severity: readString(item.severity ?? '', 'Vulnerability severity', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    notes: readString(item.notes ?? '', 'Vulnerability notes', { maxBytes: LIMITS.notes }),
  };
}

function normalizePredisposingCondition(item, idFactory, { preserveIds, allowIncompleteDrafts = false }) {
  assertSafeObject(item, 'Predisposing condition');
  assertKnownKeys(item, PREDISPOSING_KEYS, 'Predisposing condition');

  const rawId = readString(item.id ?? '', 'Predisposing condition id', { maxBytes: LIMITS.id, allowEmpty: true });
  const refId = readString(item.refId ?? '', 'Predisposing condition reference', { maxBytes: LIMITS.id, allowEmpty: true });
  const isCustom = readBoolean(item.isCustom, 'Predisposing condition custom flag', false);

  if (!isCustom && refId && !PREDISPOSING_REF_SET.has(refId)) {
    throw new Error('Predisposing condition reference is invalid.');
  }

  return {
    id: preserveIds ? (rawId || idFactory()) : idFactory(),
    refId: refId || null,
    name: readString(item.name, 'Predisposing condition name', { maxBytes: LIMITS.mediumText, allowEmpty: allowIncompleteDrafts && isCustom }),
    description: readString(item.description ?? '', 'Predisposing condition description', { maxBytes: LIMITS.longText }),
    pervasiveness: readString(item.pervasiveness ?? '', 'Predisposing condition pervasiveness', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    notes: readString(item.notes ?? '', 'Predisposing condition notes', { maxBytes: LIMITS.notes }),
    isCustom,
  };
}

function normalizeAssessment(rawAssessment, { preserveIds = false, idFactory, allowUnknownSourceRefs = false, allowIncompleteDrafts = false }) {
  assertSafeObject(rawAssessment, 'Assessment');
  assertKnownKeys(rawAssessment, ASSESSMENT_KEYS, 'Assessment');

  const now = new Date().toISOString();
  const createdAt = readIsoTimestamp(rawAssessment.createdAt, 'Created at', now);
  const updatedAt = readIsoTimestamp(rawAssessment.updatedAt, 'Updated at', now);
  const threatSourcesRaw = Array.isArray(rawAssessment.threatSources) ? rawAssessment.threatSources : [];
  const threatEventsRaw = Array.isArray(rawAssessment.threatEvents) ? rawAssessment.threatEvents : [];
  const vulnerabilitiesRaw = Array.isArray(rawAssessment.vulnerabilities) ? rawAssessment.vulnerabilities : [];
  const predisposingRaw = Array.isArray(rawAssessment.predisposingConditions) ? rawAssessment.predisposingConditions : [];

  if (threatSourcesRaw.length > LIMITS.itemCount || threatEventsRaw.length > LIMITS.itemCount || vulnerabilitiesRaw.length > LIMITS.itemCount || predisposingRaw.length > LIMITS.itemCount) {
    throw new Error('The imported assessment contains too many records.');
  }

  const assessmentId = preserveIds
    ? (readString(rawAssessment.id ?? '', 'Assessment id', { maxBytes: LIMITS.id, allowEmpty: true }) || idFactory())
    : idFactory();

  const sourceIdMap = new Map();
  const threatSources = threatSourcesRaw.map(item => {
    const normalized = normalizeThreatSource(item, idFactory, { preserveIds, allowIncompleteDrafts });
    if (normalized.oldId) sourceIdMap.set(normalized.oldId, normalized.value.id);
    return normalized.value;
  });

  const threatEvents = threatEventsRaw.map(item => normalizeThreatEvent(item, idFactory, sourceIdMap, { preserveIds, allowUnknownSourceRefs, allowIncompleteDrafts }));
  const vulnerabilities = vulnerabilitiesRaw.map(item => normalizeVulnerability(item, idFactory, { preserveIds, allowIncompleteDrafts }));
  const predisposingConditions = predisposingRaw.map(item => normalizePredisposingCondition(item, idFactory, { preserveIds, allowIncompleteDrafts }));
  const completedSteps = uniq(
    (Array.isArray(rawAssessment.completedSteps) ? rawAssessment.completedSteps : [])
      .map(step => readInteger(step, 'Completed step', { min: 1, max: 9 }))
  );

  const currentStep = readInteger(rawAssessment.currentStep ?? 1, 'Current step', { min: 1, max: 9, defaultValue: 1 });
  const tier = readString(rawAssessment.tier ?? 'system', 'Assessment tier', {
    maxBytes: LIMITS.shortText,
    allowEmpty: false,
    enumSet: new Set(['org', 'system']),
  });
  const nis2EntityType = readString(rawAssessment.nis2EntityType ?? '', 'NIS2 entity type', { maxBytes: LIMITS.shortText, enumSet: NIS2_TYPES });
  const scenarioId = readString(rawAssessment.scenarioId ?? '', 'Scenario id', { maxBytes: LIMITS.shortText });
  if (scenarioId && !SCENARIO_SET.has(scenarioId)) throw new Error('Scenario id is invalid.');

  return {
    id: assessmentId,
    createdAt,
    updatedAt,
    currentStep,
    completedSteps,
    tier,
    nis2EntityType,
    name: readString(rawAssessment.name ?? '', 'Assessment name', { maxBytes: LIMITS.shortText }),
    organization: readString(rawAssessment.organization ?? '', 'Organisation', { maxBytes: LIMITS.shortText }),
    assessor: readString(rawAssessment.assessor ?? '', 'Assessor', { maxBytes: LIMITS.shortText }),
    date: readIsoDate(rawAssessment.date, 'Assessment date', new Date().toISOString().slice(0, 10)),
    systemName: readString(rawAssessment.systemName ?? '', 'System or scope name', { maxBytes: LIMITS.mediumText }),
    systemDescription: readString(rawAssessment.systemDescription ?? '', 'System description', { maxBytes: LIMITS.longText }),
    authorizationBoundary: readString(rawAssessment.authorizationBoundary ?? '', 'Authorization boundary', { maxBytes: LIMITS.longText }),
    purpose: readString(rawAssessment.purpose ?? '', 'Purpose', { maxBytes: LIMITS.longText }),
    scope: readString(rawAssessment.scope ?? '', 'Scope', { maxBytes: LIMITS.longText }),
    assessmentApproach: readString(rawAssessment.assessmentApproach ?? 'qualitative', 'Assessment approach', {
      maxBytes: LIMITS.shortText,
      allowEmpty: false,
      enumSet: ASSESSMENT_APPROACH_SET,
    }),
    analysisApproach: readString(rawAssessment.analysisApproach ?? '', 'Analysis approach', {
      maxBytes: LIMITS.shortText,
      enumSet: ANALYSIS_APPROACH_SET,
    }),
    assumptions: readString(rawAssessment.assumptions ?? '', 'Assumptions', { maxBytes: LIMITS.longText }),
    constraints: readString(rawAssessment.constraints ?? '', 'Constraints', { maxBytes: LIMITS.longText }),
    riskTolerance: readString(rawAssessment.riskTolerance ?? '', 'Risk tolerance', { maxBytes: LIMITS.shortText, enumSet: SCALE_SET }),
    threatSources,
    threatEvents,
    vulnerabilities,
    predisposingConditions,
    scenarioId,
    riskNotes: readString(rawAssessment.riskNotes ?? '', 'Assessment notes', { maxBytes: LIMITS.notes }),
  };
}

export function parseImportedAssessment(jsonString, idFactory) {
  if (encodedLength(jsonString) > MAX_IMPORT_BYTES) {
    throw new Error('Import files larger than 1 MB are not supported.');
  }

  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch {
    throw new Error('Invalid JSON format.');
  }

  assertSafeObject(parsed, 'Import document');

  if (parsed.format) {
    assertKnownKeys(parsed, EXPORT_DOCUMENT_KEYS, 'Import document');
    if (parsed.format !== ASSESSMENT_EXPORT_FORMAT || parsed.version !== ASSESSMENT_EXPORT_VERSION) {
      throw new Error('Unsupported assessment export format.');
    }
    assertSafeObject(parsed.assessment, 'Assessment');
    return normalizeAssessment(parsed.assessment, { preserveIds: false, idFactory, allowUnknownSourceRefs: false });
  }

  return normalizeAssessment(parsed, { preserveIds: false, idFactory, allowUnknownSourceRefs: false });
}

export function createAssessmentExportDocument(assessment, idFactory = () => assessment.id) {
  return {
    format: ASSESSMENT_EXPORT_FORMAT,
    version: ASSESSMENT_EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    assessment: normalizeAssessment(assessment, { preserveIds: true, idFactory, allowUnknownSourceRefs: true }),
  };
}

export function sanitizeDraftAssessment(assessment, idFactory = () => assessment.id) {
  return normalizeAssessment(assessment, {
    preserveIds: true,
    idFactory,
    allowUnknownSourceRefs: true,
    allowIncompleteDrafts: true,
  });
}

export function sanitizeStore(store, idFactory) {
  if (!isPlainObject(store)) return { version: 2, assessments: {}, assessmentIds: [] };

  try {
    assertSafeObject(store, 'Saved data');
    assertKnownKeys(store, STORE_KEYS, 'Saved data');
    if (store.version !== 2) throw new Error('Unsupported store version.');
    assertSafeObject(store.assessments ?? {}, 'Saved assessments');
    if (!Array.isArray(store.assessmentIds)) throw new Error('Saved assessment ids must be a list.');

    const assessments = {};
    const assessmentIds = [];

    for (const rawId of store.assessmentIds) {
      if (typeof rawId !== 'string') continue;
      const rawAssessment = store.assessments?.[rawId];
      if (!rawAssessment) continue;
      try {
        const sanitized = normalizeAssessment(rawAssessment, {
          preserveIds: true,
          idFactory,
          allowUnknownSourceRefs: true,
          allowIncompleteDrafts: true,
        });
        if (!sanitized.id || assessments[sanitized.id]) continue;
        assessments[sanitized.id] = sanitized;
        assessmentIds.push(sanitized.id);
      } catch {
        // Drop malformed local data silently to avoid bricking the app.
      }
    }

    return { version: 2, assessments, assessmentIds };
  } catch {
    return { version: 2, assessments: {}, assessmentIds: [] };
  }
}

export function isEncryptedImportDocument(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return isPlainObject(parsed)
      && parsed.format === ENCRYPTED_EXPORT_FORMAT
      && parsed.version === ENCRYPTED_EXPORT_VERSION;
  } catch {
    return false;
  }
}
