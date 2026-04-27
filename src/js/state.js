/** Multi-assessment state management — localStorage key 'nist-800-30-v2' */
import { uid, todayIso } from './utils.js';

const KEY = 'nist-800-30-v2';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p.version === 2) return p;
    }
  } catch {}
  return { version: 2, assessments: {}, assessmentIds: [] };
}

function persist(store) {
  try { localStorage.setItem(KEY, JSON.stringify(store)); } catch {}
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
  a.updatedAt = new Date().toISOString();
  if (!s.assessments[a.id]) s.assessmentIds.unshift(a.id);
  s.assessments[a.id] = a;
  persist(s);
}

export function deleteAssessment(id) {
  const s = load();
  delete s.assessments[id];
  s.assessmentIds = s.assessmentIds.filter(i => i !== id);
  persist(s);
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
  let obj;
  try { obj = JSON.parse(jsonString); } catch { throw new Error('Invalid JSON format'); }
  if (typeof obj !== 'object' || !obj.name) throw new Error('Missing required field: name');
  obj.id = uid();
  obj.updatedAt = new Date().toISOString();
  if (!obj.createdAt) obj.createdAt = obj.updatedAt;
  saveAssessment(obj);
  return obj.id;
}

export function exportAssessmentToJson(id) {
  const a = getAssessment(id);
  if (!a) throw new Error('Assessment not found');
  return JSON.stringify(a, null, 2);
}
