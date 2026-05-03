import { build } from 'esbuild';
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const rootDir = process.cwd();
const buildDir = path.join(rootDir, 'build');
const buildDistDir = path.join(buildDir, 'dist');

const ENTRY_POINTS = {
  bundle: 'src/js/app.js',
  site: 'src/js/site.js',
  'pdf-bundle': 'src/js/pdf.js',
  style: 'src/css/main.css',
  'site-style': 'src/css/site.css',
};

const COPY_EXCLUDES = new Set(['build', 'dist', 'node_modules', '.git', '.github', 'src', 'test', 'venv', '.vscode']);
const HTML_CSP = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests";
const REFERRER_META = '<meta name="referrer" content="no-referrer" />';

const ASSET_REWRITES = [
  { from: /\/dist\/bundle\.js(\?v=\d+)?/g, key: 'bundle' },
  { from: /\/dist\/pdf-bundle\.js(\?v=\d+)?/g, key: 'pdf-bundle' },
  { from: /\/dist\/site\.js(\?v=\d+)?/g, key: 'site' },
  { from: /\/dist\/style\.css(\?v=\d+)?/g, key: 'style' },
  { from: /\/dist\/site\.css(\?v=\d+)?/g, key: 'site-style' },
];

async function listHtmlFiles(dir, results = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (COPY_EXCLUDES.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await listHtmlFiles(fullPath, results);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) results.push(fullPath);
  }
  return results;
}

async function copyStaticFiles() {
  const entries = await readdir(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    if (COPY_EXCLUDES.has(entry.name)) continue;
    await cp(path.join(rootDir, entry.name), path.join(buildDir, entry.name), { recursive: true });
  }
}

function contentHash(value) {
  return createHash('sha256').update(value).digest('hex').slice(0, 10);
}

async function buildAssets() {
  await mkdir(buildDistDir, { recursive: true });
  const result = await build({
    absWorkingDir: rootDir,
    bundle: true,
    minify: true,
    metafile: true,
    entryPoints: ENTRY_POINTS,
    outdir: buildDistDir,
    entryNames: '[name]-[hash]',
    assetNames: 'assets/[name]-[hash]',
    loader: { '.woff2': 'file' },
    write: true,
  });

  const outputs = Object.keys(result.metafile.outputs);
  const manifest = {};
  for (const [name] of Object.entries(ENTRY_POINTS)) {
    const match = outputs.find(filePath => {
      const relative = path.relative(buildDir, filePath).replace(/\\/g, '/');
      return relative.startsWith('dist/') && relative.includes(`/${name}-`);
    });
    if (!match) throw new Error(`Missing built asset for ${name}`);
    manifest[name] = `/${path.relative(buildDir, match).replace(/\\/g, '/')}`;
  }
  return manifest;
}

function hardenHtml(html, manifest) {
  let next = html;

  next = next.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>/i, `<meta http-equiv="Content-Security-Policy" content="${HTML_CSP}">`);
  if (!/<meta http-equiv="Content-Security-Policy"/i.test(next)) {
    next = next.replace(/<head>/i, `<head>\n  <meta http-equiv="Content-Security-Policy" content="${HTML_CSP}">`);
  }

  next = next.replace(/<meta name="referrer"[^>]*>/i, REFERRER_META);
  if (!/<meta name="referrer"/i.test(next)) {
    next = next.replace(/<\/head>/i, `  ${REFERRER_META}\n</head>`);
  }

  next = next.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  for (const rule of ASSET_REWRITES) {
    next = next.replace(rule.from, manifest[rule.key]);
  }

  return next;
}

async function rewriteHtmlFiles(manifest) {
  const htmlFiles = await listHtmlFiles(buildDir);
  for (const filePath of htmlFiles) {
    const current = await readFile(filePath, 'utf8');
    const updated = hardenHtml(current, manifest);
    await writeFile(filePath, updated);
  }
}

async function writeBuildMetadata(manifest) {
  const fingerprint = contentHash(JSON.stringify(manifest));
  await writeFile(path.join(buildDir, 'dist', 'manifest.json'), JSON.stringify({ fingerprint, assets: manifest }, null, 2));
}

async function ensure404Page(manifest) {
  const notFoundPath = path.join(buildDir, '404.html');
  try {
    await stat(notFoundPath);
  } catch {
    await writeFile(notFoundPath, `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Security-Policy" content="${HTML_CSP}">
  <meta name="referrer" content="no-referrer" />
  <title>Page not found | Open Risk Register</title>
  <link rel="stylesheet" href="${manifest.style}" />
  <link rel="stylesheet" href="${manifest['site-style']}" />
</head>
<body>
  <main class="main-content">
    <h1>Page not found</h1>
    <p>The requested page could not be found.</p>
    <p><a href="/" class="btn btn-primary">Return to homepage</a></p>
  </main>
</body>
</html>`);
  }
}

await rm(buildDir, { recursive: true, force: true });
await mkdir(buildDir, { recursive: true });
await copyStaticFiles();
const manifest = await buildAssets();
await rewriteHtmlFiles(manifest);
await ensure404Page(manifest);
await writeBuildMetadata(manifest);
