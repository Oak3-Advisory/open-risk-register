# Open Risk Register — Project Plan

Domain: `openriskregister.org`  
Stack: Vanilla HTML/CSS/JS, esbuild, static hosting  
Shared assets: `/dist/style.css` (design system) + `/dist/site.css` (marketing) + `/dist/site.js` (nav/FAQ) + `/dist/bundle.js` (SPA only)

---

## Completed (Phase 1 — Architecture Foundation)

- [x] `app/index.html` — SPA moved here; root-relative asset paths; "Open Risk Register" branding; `noindex`
- [x] `index.html` — New marketing homepage replacing old SPA
- [x] `src/js/site.js` — Lightweight site script (mobile nav toggle + FAQ accordion)
- [x] `src/css/site.css` — Marketing/SEO page styles (hero, nav, step grid, FAQ, comparison table, personas, CTA, footer)
- [x] `package.json` — Updated build with 4 outputs: bundle.js, site.js, style.css, site.css
- [x] `robots.txt` — Disallows `/app/`, references sitemap
- [x] `sitemap.xml` — All 18 planned URLs with priorities
- [x] `og/README.md` — Placeholder note for OG image (TODO: create actual PNG)
- [x] `source-code/index.html` — Open source explanation (GitHub URL = TODO placeholder)
- [x] `src/css/main.css` — Added `a.header-brand`, `.footer-brand-link`, `.mt-8` utility

---

## Phase 2 — Content Pages (Parallel Workstreams)

Each agent tracks below is independent. All agents MUST use the shared HTML
header/footer pattern (see **Shared Template** section below).

---

### Agent A — Core SEO Pages

Priority: HIGH. These target the highest-volume keywords.

**Files to create:**

1. **`/nis2-risk-assessment-tool/index.html`**
   - Title: `NIS2 Risk Assessment Tool — Free Browser-Based | Open Risk Register`
   - H1: `NIS2 Risk Assessment Tool`
   - Description: "Free, browser-based NIS2 risk assessment tool based on NIST SP 800-30. No account. No server. Covers all NIS2 Article 21 security measures."
   - Content: What NIS2 risk assessment requires, how the tool meets it, step-by-step walkthrough, comparison with spreadsheet approach, FAQ (4 questions)
   - Schema: SoftwareApplication + BreadcrumbList + FAQPage

2. **`/nis2-risk-register-template/index.html`**
   - Title: `Free NIS2 Risk Register Template | Open Risk Register`
   - H1: `NIS2 Risk Register Template`
   - Description: "Free NIS2 risk register template based on NIST SP 800-30. Browser-based, no download required. Covers threat sources, threat events, likelihood, impact, and risk level."
   - Content: What a risk register is, what fields it contains (threat source, event, likelihood, impact, risk level, treatment), how the tool generates it automatically, export options
   - Schema: SoftwareApplication + BreadcrumbList

3. **`/nist-sp-800-30-risk-assessment-template/index.html`**
   - Title: `Free NIST SP 800-30 Risk Assessment Template | Open Risk Register`
   - H1: `NIST SP 800-30 Risk Assessment Template`
   - Description: "Free guided risk assessment template based on NIST Special Publication 800-30 Revision 1. Covers all 9 steps from threat source identification through risk determination."
   - Content: What NIST SP 800-30 is, the 9 assessment steps, how this maps to NIS2, comparison vs ISO 27005, FAQ
   - Schema: SoftwareApplication + BreadcrumbList + FAQPage

4. **`/nis2-article-21-checklist/index.html`**
   - Title: `NIS2 Article 21 Compliance Checklist | Open Risk Register`
   - H1: `NIS2 Article 21 Security Measures Checklist`
   - Description: "Interactive NIS2 Article 21 compliance checklist covering all 10 mandatory cybersecurity measures. Free, browser-based, and linked to risk assessment."
   - Content: All 10 Article 21(2) measures with explanation, how risk assessment supports each, disclaimer about legal compliance
   - Schema: BreadcrumbList + HowTo

---

### Agent B — Educational Pages

Priority: MEDIUM. Build topic authority.

**Files to create:**

1. **`/nis2-for-smes/index.html`**
   - Title: `NIS2 for SMEs — What You Need to Know | Open Risk Register`
   - H1: `NIS2 for SMEs: A Practical Guide`
   - Content: What NIS2 is, who it applies to (essential vs important entities), SME thresholds (50+ employees or €10M+ turnover in covered sectors), what SMEs need to do, timeline, common misconceptions, FAQ

2. **`/supply-chain-risk-assessment-nis2/index.html`**
   - Title: `Supply Chain Risk Assessment for NIS2 | Open Risk Register`
   - H1: `Supply Chain Risk Assessment under NIS2`
   - Content: NIS2 Art. 21(2)(d) supply chain requirements, how to identify third-party dependencies in a risk assessment, what to document, how Open Risk Register supports this

3. **`/local-first-security/index.html`**
   - Title: `Local-First Security: Why Your Risk Data Should Stay in Your Browser`
   - H1: `Local-First Security for Sensitive Risk Data`
   - Content: What local-first means, why risk assessment data is sensitive, the risks of cloud-based risk tools (data breaches, subpoenas, vendor lock-in), how localStorage works, export as backup strategy

4. **`/examples/index.html`**
   - Title: `Risk Assessment Examples | Open Risk Register`
   - H1: `Risk Assessment Examples`
   - Content: 3 example scenarios (small healthcare provider, mid-size logistics company, IT service provider), what their risk landscape looks like, how to approach the assessment for each

---

### Agent C — Trust & Open Source Pages

Priority: MEDIUM. Build brand trust.

**Files to create:**

1. **`/open-source-nis2-tool/index.html`**
   - Title: `Open Source NIS2 Tool — Why Open Source Matters for Security | Open Risk Register`
   - H1: `Open Source NIS2 Risk Assessment Tool`
   - Content: Why open source matters for security tools (transparency, auditability, no vendor lock-in), how to verify the tool, how to contribute, link to GitHub (TODO placeholder)

---

### Agent D — Alternatives Hub + Comparison Pages

Priority: HIGH (captures bottom-funnel intent).

**Files to create:**

1. **`/alternatives/index.html`** — Hub page listing all alternatives
   - Title: `NIS2 Risk Assessment Tool Alternatives | Open Risk Register`
   - H1: `Alternatives to Open Risk Register`
   - Content: Overview table of all alternatives (Eramba, SimpleRisk, CISO Assistant, spreadsheet templates, NIS2 gap analysis tools, self-assessment tools, GRC platforms), link to each comparison page

2. **`/alternatives/eramba-vs-open-risk-register/index.html`**
   - Title: `Eramba vs Open Risk Register — NIS2 Risk Assessment Comparison`
   - Fair comparison: Eramba (enterprise GRC, self-hosted, complex, paid) vs Open Risk Register (simple, browser-only, free, NIS2-focused)

3. **`/alternatives/simplerisk-vs-open-risk-register/index.html`**
   - Title: `SimpleRisk vs Open Risk Register — NIS2 Risk Tool Comparison`

4. **`/alternatives/ciso-assistant-vs-open-risk-register/index.html`**
   - Title: `CISO Assistant vs Open Risk Register — Comparison`

5. **`/alternatives/open-source-grc-tool/index.html`**
   - Title: `Open Source GRC Tools for NIS2 — Comparison | Open Risk Register`
   - Content: Overview of open source GRC tools (Eramba, SimpleRisk, CISO Assistant, OpenRMF) vs Open Risk Register

6. **`/alternatives/nis2-gap-analysis-tool/index.html`**
   - Title: `Free NIS2 Gap Analysis Tool | Open Risk Register`
   - Content: What NIS2 gap analysis is, how it differs from risk assessment, how to do both with this tool

7. **`/alternatives/nis2-self-assessment-tool/index.html`**
   - Title: `Free NIS2 Self-Assessment Tool | Open Risk Register`

8. **`/alternatives/nis2-risk-register-vs-nis2-checklist/index.html`**
   - Title: `NIS2 Risk Register vs NIS2 Checklist — What's the Difference?`

---

## Shared HTML Template

Every marketing/SEO page MUST use this exact header and footer pattern.
Copy-paste and adjust the `active` class on the current nav link.

### Header
```html
<header class="site-header" role="banner">
  <div class="header-inner">
    <a href="/" class="header-brand" aria-label="Open Risk Register — Home">
      <svg class="header-icon" aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z" fill="currentColor"/>
      </svg>
      <div>
        <span class="header-title">Open Risk Register</span>
        <span class="header-subtitle">Free NIS2 Risk Assessment Tool</span>
      </div>
    </a>
    <button class="nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="site-nav">
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      Menu
    </button>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
      <a href="/nis2-risk-assessment-tool/" class="nav-link">NIS2 Risk Tool</a>
      <a href="/nis2-risk-register-template/" class="nav-link">Templates</a>
      <a href="/nist-sp-800-30-risk-assessment-template/" class="nav-link">NIST 800-30</a>
      <a href="/alternatives/" class="nav-link">Alternatives</a>
      <a href="/source-code/" class="nav-link">Open Source</a>
      <a href="/app/" class="btn btn-primary btn-sm">Start Assessment &#x2192;</a>
    </nav>
  </div>
</header>
```

### Footer
```html
<footer class="site-footer site-footer--rich" role="contentinfo">
  <div class="footer-grid">
    <div class="footer-brand-col">
      <p class="footer-brand-name">Open Risk Register</p>
      <p>Free, open-source NIS2 risk assessment tool based on NIST SP 800-30 R1. All data stays in your browser — no account, no server, no cost.</p>
    </div>
    <div class="footer-col">
      <h4>Tool</h4>
      <ul>
        <li><a href="/app/">Start Assessment</a></li>
        <li><a href="/nis2-risk-assessment-tool/">NIS2 Risk Assessment</a></li>
        <li><a href="/nis2-risk-register-template/">Risk Register Template</a></li>
        <li><a href="/examples/">Examples</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Learn</h4>
      <ul>
        <li><a href="/nis2-for-smes/">NIS2 for SMEs</a></li>
        <li><a href="/nis2-article-21-checklist/">Article 21 Checklist</a></li>
        <li><a href="/nist-sp-800-30-risk-assessment-template/">NIST SP 800-30</a></li>
        <li><a href="/local-first-security/">Local-First Security</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>About</h4>
      <ul>
        <li><a href="/source-code/">Source Code</a></li>
        <li><a href="/open-source-nis2-tool/">Open Source</a></li>
        <li><a href="/alternatives/">Alternatives</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2025 Open Risk Register. Based on <a href="https://csrc.nist.gov/publications/detail/sp/800-30/rev-1/final" rel="noopener noreferrer" target="_blank">NIST SP 800-30 Rev.&nbsp;1</a>. Not legal advice.</p>
    <p>No data is transmitted to any server. All processing happens in your browser.</p>
  </div>
</footer>

<script src="/dist/site.js" defer></script>
```

### Required `<head>` elements for every page
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'">
<title>PAGE TITLE | Open Risk Register</title>
<meta name="description" content="..." />
<link rel="canonical" href="https://openriskregister.org/PAGE-PATH/" />
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://openriskregister.org/PAGE-PATH/" />
<meta property="og:image" content="https://openriskregister.org/og/open-risk-register.png" />
<meta property="og:locale" content="en_US" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="https://openriskregister.org/og/open-risk-register.png" />
<link rel="stylesheet" href="/dist/style.css" />
<link rel="stylesheet" href="/dist/site.css" />
<!-- Add JSON-LD schema here -->
```

### No inline styles or inline scripts
The CSP enforces `style-src 'self'` — no `style="..."` attributes are allowed.
Use utility classes from `main.css` (`.mt-4`, `.mb-6`, `.flex`, `.hidden`, etc.)
and component classes from `site.css` (`.hero`, `.steps-grid`, `.faq-list`, etc.).

---

## CSS Classes Quick Reference (for agent content pages)

### Layout
- `.site-container` — max-width 1100px centered
- `.section-inner` — same as site-container
- `.section-inner--narrow` — max-width 780px centered
- `.content-section` — section with top/bottom padding
- `.content-section--alt` — light grey background
- `.content-section--navy` — navy background (white text)

### Typography
- `.section-label` — small orange uppercase eyebrow text
- `.section-title` — large H2 heading
- `.section-body` — body paragraph with max-width

### Components
- `.steps-grid` — 3-column grid of `.step-item` cards (numbered)
- `.feature-row` — 3-column grid of `.feature-item` cards
- `.persona-grid` — 3-column grid of `.persona-card` cards
- `.faq-list` — FAQ accordion container (`.faq-item` + `.faq-question` + `.faq-answer`)
- `.cta-section` — orange CTA band
- `.page-hero` — inner page navy hero
- `.comparison-table-wrap` + `.comparison-table` — comparison table
- `.disclaimer-box` — yellow warning box
- `.breadcrumb-wrap` + `.breadcrumb` — breadcrumb navigation
- `.nis2-list` — checklist grid (navy background, orange checkmarks)

---

## Deployment Notes

- All HTML pages are in subdirectories with `index.html` for clean URLs (no `.html` extension)
- Exception: `app/index.html` is at `/app/`
- All asset paths are root-relative: `/dist/style.css`, `/dist/site.js`, etc.
- The `/app/` path is excluded from indexing via `robots.txt` and `<meta name="robots" content="noindex">`
- OG image placeholder: `/og/open-risk-register.png` — TODO: create actual image
- GitHub URL: TODO — update `/source-code/` and `/open-source-nis2-tool/` when repository is published
- `sitemap.xml` must be updated when new pages are added
