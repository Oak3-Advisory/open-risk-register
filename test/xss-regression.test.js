import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

import { createAssessment, deleteAllAssessments, saveAssessment } from '../src/js/state.js';

function installDom() {
  const dom = new JSDOM('<!doctype html><html><head></head><body><dialog id="nist-modal"><div class="nist-modal-inner"><h3 class="nist-modal-term"></h3><div class="nist-modal-plain"></div><blockquote class="nist-modal-quote"></blockquote><p class="nist-modal-cite"></p><a class="nist-modal-link" hidden></a><button id="nist-modal-close" type="button"></button></div></dialog></body></html>', {
    url: 'https://openriskregister.org/app/',
  });

  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.Node = dom.window.Node;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.HTMLDialogElement = dom.window.HTMLDialogElement;
  Object.defineProperty(globalThis, 'history', { configurable: true, value: dom.window.history });
  Object.defineProperty(globalThis, 'location', { configurable: true, value: dom.window.location });
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator });
  globalThis.CSS = dom.window.CSS ?? { escape: value => String(value) };
  globalThis.alert = () => {};
  globalThis.localStorage = {
    _store: new Map(),
    getItem(key) { return this._store.has(key) ? this._store.get(key) : null; },
    setItem(key, value) { this._store.set(key, String(value)); },
    removeItem(key) { this._store.delete(key); },
  };

  if (!globalThis.HTMLDialogElement.prototype.showModal) {
    globalThis.HTMLDialogElement.prototype.showModal = function showModal() {
      this.open = true;
    };
  }

  return dom;
}

function makeMaliciousAssessment() {
  const payload = '<img data-payload="true" src=x onerror="window.__xss=1">XSS-MARKER';
  const assessment = createAssessment('system');
  Object.assign(assessment, {
    name: payload,
    organization: payload,
    assessor: payload,
    date: '2026-05-03',
    systemName: payload,
    systemDescription: payload,
    authorizationBoundary: payload,
    purpose: payload,
    scope: payload,
    assumptions: payload,
    constraints: payload,
    riskNotes: payload,
    assessmentApproach: 'qualitative',
    analysisApproach: 'threat-oriented',
    riskTolerance: 'Moderate',
    threatSources: [{
      id: 'src-1',
      refId: null,
      name: payload,
      type: 'Adversarial',
      isCustom: true,
      inScope: true,
      capability: 'High',
      intent: 'High',
      targeting: 'Moderate',
      rangeOfEffects: '',
      notes: payload,
    }],
    threatEvents: [{
      id: 'evt-1',
      refId: null,
      name: payload,
      description: payload,
      type: 'adversarial',
      isCustom: true,
      threatSourceIds: ['src-1'],
      relevance: 'Expected',
      notes: payload,
      likelihoodInitiation: 'High',
      likelihoodImpact: 'High',
      overallLikelihood: 'High',
      impactLevel: 'High',
      impactNotes: payload,
      riskLevel: 'High',
      riskOverride: 'Moderate',
      riskOverrideReason: payload,
      riskNotes: payload,
    }],
    vulnerabilities: [{
      id: 'vuln-1',
      name: payload,
      description: payload,
      severity: 'High',
      notes: payload,
    }],
    predisposingConditions: [{
      id: 'pred-1',
      refId: null,
      name: payload,
      description: payload,
      pervasiveness: 'High',
      notes: payload,
      isCustom: true,
    }],
  });
  return assessment;
}

async function importStep(modulePath) {
  return import(modulePath);
}

function assertNoInjectedNodes(rendered) {
  assert.equal(rendered.querySelector('img[data-payload="true"]'), null);
  assert.equal(rendered.querySelector('[onerror]'), null);
  assert.equal(rendered.querySelector('script[data-payload="true"]'), null);
  assert.equal(globalThis.window.__xss, undefined);
}

test('editable and imported fields render as text across steps 0-9', async () => {
  installDom();
  deleteAllAssessments();
  const assessment = makeMaliciousAssessment();
  saveAssessment(assessment);

  const stepModules = await Promise.all([
    importStep('../src/js/steps/step0.js'),
    importStep('../src/js/steps/step1.js'),
    importStep('../src/js/steps/step2.js'),
    importStep('../src/js/steps/step3.js'),
    importStep('../src/js/steps/step4.js'),
    importStep('../src/js/steps/step5.js'),
    importStep('../src/js/steps/step6.js'),
    importStep('../src/js/steps/step7.js'),
    importStep('../src/js/steps/step8.js'),
    importStep('../src/js/steps/step9.js'),
  ]);

  const renders = [
    stepModules[0].render(null, { openAssessment() {} }),
    ...stepModules.slice(1).map(module => module.render(assessment, () => {})),
  ];

  renders.forEach(assertNoInjectedNodes);
});
