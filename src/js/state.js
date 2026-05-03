/** Multi-assessment state management — localStorage key 'nist-800-30-v2' */
import { uid, todayIso } from './utils.js';
import { decryptJsonPayload, encryptJsonPayload } from './crypto.js';
import {
  createAssessmentExportDocument,
  isEncryptedImportDocument,
  parseImportedAssessment,
  sanitizeStore,
} from './schema.js';

const KEY = 'nist-800-30-v2';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      return sanitizeStore(JSON.parse(raw), uid);
    }
  } catch {}
  return { version: 2, assessments: {}, assessmentIds: [] };
}

function persist(store) {
  try { localStorage.setItem(KEY, JSON.stringify(sanitizeStore(store, uid))); } catch {}
}

export function listAssessments() {
  const s = load();
  return s.assessmentIds
    .filter(id => s.assessments[id])
    .map(id => s.assessments[id])
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function getAssessment(id) {
  return load().assessments[id] ?? null;
}

export function saveAssessment(a) {
  const s = load();
  const now = new Date().toISOString();
  const normalized = createAssessmentExportDocument({
    ...a,
    id: a.id || uid(),
    createdAt: a.createdAt || now,
    updatedAt: now,
  }).assessment;

  if (!s.assessments[normalized.id]) s.assessmentIds.unshift(normalized.id);
  s.assessments[normalized.id] = normalized;
  persist(s);
}

export function deleteAssessment(id) {
  const s = load();
  delete s.assessments[id];
  s.assessmentIds = s.assessmentIds.filter(i => i !== id);
  persist(s);
}

export function deleteAllAssessments() {
  persist({ version: 2, assessments: {}, assessmentIds: [] });
}

export function createAssessment(tier = 'system') {
  return {
    id: uid(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    currentStep: 1,
    completedSteps: [],
    tier,           // 'system' (Tier 3) | 'org' (Tier 1/2)
    nis2EntityType: '', // 'essential' | 'important' | 'not-applicable'
    name: '', organization: '', assessor: '', date: todayIso(),
    systemName: '', systemDescription: '', authorizationBoundary: '',
    purpose: '', scope: '',
    assessmentApproach: 'qualitative', analysisApproach: '',
    assumptions: '', constraints: '', riskTolerance: '',
    threatSources: [], threatEvents: [],
    vulnerabilities: [], predisposingConditions: [],
    scenarioId: '',
    riskNotes: '',
  };
}

export function importAssessmentFromJson(jsonString) {
  if (isEncryptedImportDocument(jsonString)) {
    throw new Error('This backup is encrypted. Use the encrypted import flow and enter the passphrase.');
  }
  const assessment = parseImportedAssessment(jsonString, uid);
  saveAssessment(assessment);
  return assessment.id;
}

export async function importAssessmentFromEncryptedJson(jsonString, passphrase) {
  const decrypted = await decryptJsonPayload(jsonString, passphrase);
  return importAssessmentFromJson(decrypted);
}

export function exportAssessmentToJson(id) {
  const a = getAssessment(id);
  if (!a) throw new Error('Assessment not found');
  return JSON.stringify(createAssessmentExportDocument(a), null, 2);
}

export async function exportAssessmentToEncryptedJson(id, passphrase) {
  const plaintext = exportAssessmentToJson(id);
  return encryptJsonPayload(plaintext, passphrase);
}

export { isEncryptedImportDocument };
