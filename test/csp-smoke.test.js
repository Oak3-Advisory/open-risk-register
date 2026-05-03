import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const strictCsp = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests";

test('main entrypoints declare the strict CSP and no inline structured data script', async () => {
  const rootHtml = await readFile(path.join(repoRoot, 'index.html'), 'utf8');
  const appHtml = await readFile(path.join(repoRoot, 'app', 'index.html'), 'utf8');

  for (const html of [rootHtml, appHtml]) {
    assert.match(html, new RegExp(strictCsp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(html, /<meta name="referrer" content="no-referrer"/i);
  }

  assert.doesNotMatch(rootHtml, /<script type="application\/ld\+json">/i);
});
