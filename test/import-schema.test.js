import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createAssessment,
  deleteAllAssessments,
  exportAssessmentToEncryptedJson,
  exportAssessmentToJson,
  getAssessment,
  importAssessmentFromEncryptedJson,
  importAssessmentFromJson,
  saveAssessment,
} from '../src/js/state.js';
import { MAX_IMPORT_BYTES } from '../src/js/schema.js';

function installLocalStorage() {
  const store = new Map();
  globalThis.localStorage = {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
  };
}

function makeImportableAssessment() {
  return {
    id: 'assessment-1',
    createdAt: '2026-05-03T09:00:00.000Z',
    updatedAt: '2026-05-03T09:00:00.000Z',
    currentStep: 4,
    completedSteps: [1, 2, 3],
    tier: 'system',
    nis2EntityType: 'important',
    name: 'Example assessment',
    organization: 'Oak3 Advisory',
    assessor: 'Security Team',
    date: '2026-05-03',
    systemName: 'Core ERP',
    systemDescription: 'ERP platform for finance and procurement.',
    authorizationBoundary: 'ERP application, database, and admin interfaces.',
    purpose: 'Assess ransomware exposure.',
    scope: 'Production ERP environment.',
    assessmentApproach: 'qualitative',
    analysisApproach: 'threat-oriented',
    assumptions: 'Backups run daily.',
    constraints: 'No OT systems in scope.',
    riskTolerance: 'Moderate',
    threatSources: [
      {
        id: 'src-1',
        refId: 'ts-a6',
        name: 'Established criminal group',
        type: 'Adversarial',
        isCustom: false,
        inScope: true,
        capability: 'High',
        intent: 'High',
        targeting: 'Moderate',
        rangeOfEffects: '',
        notes: 'Known ransomware operators.',
      },
    ],
    threatEvents: [
      {
        id: 'evt-1',
        refId: 'ae-19',
        name: 'Corrupt or destroy critical organizational data',
        description: 'Ransomware encrypts critical ERP data.',
        type: 'adversarial',
        isCustom: false,
        threatSourceIds: ['src-1'],
        relevance: 'Expected',
        notes: 'Observed in peers.',
        likelihoodInitiation: 'High',
        likelihoodImpact: 'High',
        overallLikelihood: 'High',
        impactLevel: 'High',
        impactNotes: 'Would halt finance operations.',
        riskLevel: 'High',
        riskOverride: '',
        riskOverrideReason: '',
        riskNotes: 'Needs immutable backups.',
      },
    ],
    vulnerabilities: [
      {
        id: 'vuln-1',
        name: 'Unpatched VPN appliance',
        description: 'Internet-facing VPN is behind on patches.',
        severity: 'High',
        notes: 'Patch window overdue.',
      },
    ],
    predisposingConditions: [
      {
        id: 'pred-1',
        refId: 'pc-03',
        name: 'Networked multi-user environment',
        description: 'ERP is broadly connected internally.',
        pervasiveness: 'High',
        notes: 'Large internal user population.',
        isCustom: false,
      },
    ],
    scenarioId: 'ransomware',
    riskNotes: 'High-priority treatment required.',
  };
}

function wrapAssessment(assessment) {
  return JSON.stringify({
    format: 'open-risk-register-assessment',
    version: 2,
    exportedAt: '2026-05-03T09:00:00.000Z',
    assessment,
  });
}

test.beforeEach(() => {
  installLocalStorage();
  deleteAllAssessments();
});

test('valid exports can be re-imported with regenerated ids and remapped references', () => {
  const assessment = createAssessment('system');
  Object.assign(assessment, makeImportableAssessment());
  saveAssessment(assessment);

  const exported = exportAssessmentToJson(assessment.id);
  deleteAllAssessments();

  const importedId = importAssessmentFromJson(exported);
  const imported = getAssessment(importedId);

  assert.ok(imported);
  assert.notEqual(imported.id, 'assessment-1');
  assert.equal(imported.name, 'Example assessment');
  assert.notEqual(imported.threatSources[0].id, 'src-1');
  assert.notEqual(imported.threatEvents[0].id, 'evt-1');
  assert.equal(imported.threatEvents[0].threatSourceIds[0], imported.threatSources[0].id);
});

test('encrypted exports can be decrypted and imported again', async () => {
  const assessment = createAssessment('system');
  Object.assign(assessment, makeImportableAssessment());
  saveAssessment(assessment);

  const encrypted = await exportAssessmentToEncryptedJson(assessment.id, 'correct horse battery staple');
  deleteAllAssessments();

  const importedId = await importAssessmentFromEncryptedJson(encrypted, 'correct horse battery staple');
  const imported = getAssessment(importedId);
  assert.equal(imported.name, 'Example assessment');
  assert.equal(imported.threatEvents.length, 1);
});

test('malformed json is rejected', () => {
  assert.throws(() => importAssessmentFromJson('{bad json'), /Invalid JSON format/);
});

test('oversized json is rejected', () => {
  const huge = 'a'.repeat(MAX_IMPORT_BYTES + 10);
  assert.throws(() => importAssessmentFromJson(`{"name":"${huge}"}`), /larger than 1 MB/);
});

test('unexpected nested types and invalid enum values are rejected', () => {
  const assessment = makeImportableAssessment();
  assessment.threatEvents[0].overallLikelihood = 'Definitely';
  assessment.vulnerabilities = { bad: true };

  assert.throws(
    () => importAssessmentFromJson(wrapAssessment(assessment)),
    /too large|must be a list|invalid value/
  );
});

test('broken references are rejected', () => {
  const assessment = makeImportableAssessment();
  assessment.threatEvents[0].threatSourceIds = ['missing-source'];

  assert.throws(
    () => importAssessmentFromJson(wrapAssessment(assessment)),
    /unknown threat source/
  );
});

test('prototype pollution style payloads are rejected', () => {
  const payload = '{"format":"open-risk-register-assessment","version":2,"assessment":{"name":"x","__proto__":{"polluted":true}}}';
  assert.throws(() => importAssessmentFromJson(payload), /forbidden field|unsupported fields/);
  assert.equal({}.polluted, undefined);
});

test('overlong strings are rejected', () => {
  const assessment = makeImportableAssessment();
  assessment.systemDescription = 'x'.repeat(6000);

  assert.throws(() => importAssessmentFromJson(wrapAssessment(assessment)), /too long/);
});

test('saving incomplete draft rows does not throw away in-progress work', () => {
  const assessment = createAssessment('system');
  assessment.name = 'Draft assessment';
  assessment.vulnerabilities = [
    { id: 'vuln-draft', name: '', description: '', severity: '', notes: '' },
  ];
  assessment.predisposingConditions = [
    { id: 'pred-draft', refId: null, name: '', description: '', pervasiveness: '', notes: '', isCustom: true },
  ];

  assert.doesNotThrow(() => saveAssessment(assessment));

  const saved = getAssessment(assessment.id);
  assert.ok(saved);
  assert.equal(saved.vulnerabilities.length, 1);
  assert.equal(saved.vulnerabilities[0].name, '');
  assert.equal(saved.predisposingConditions.length, 1);
  assert.equal(saved.predisposingConditions[0].name, '');
});
