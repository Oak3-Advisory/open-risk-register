# Open Risk Register

Free, open-source NIS2 risk assessment tool built on NIST SP 800-30 Rev. 1. Browser-based — no account, no server, no data leaves your device.

Sensitive assessment drafts are stored locally in the browser. Encrypted backup export is supported for users who need protected offline copies.

**Live:** [openriskregister.org](https://openriskregister.org)  
**Repo:** [github.com/Oak3-Advisory/open-risk-register](https://github.com/Oak3-Advisory/open-risk-register)

## What it does

Open Risk Register guides security and compliance teams through a structured risk assessment workflow aligned with NIS2 Article 21. It produces a prioritised risk register with likelihood/impact ratings and an exportable PDF report — entirely in the browser.

## Tech stack

| Layer | Choice |
|---|---|
| Markup | HTML5 (semantic, accessible) |
| Styles | CSS3 with custom properties |
| Scripts | Vanilla JavaScript (ES2020+) |
| Bundler | [esbuild](https://esbuild.github.io/) |
| PDF export | [pdfmake](https://pdfmake.github.io/) (lazy-loaded) |

No frameworks, no backend, no cookies.

## Running locally

**Requires:** Node.js 18+

```bash
git clone https://github.com/Oak3-Advisory/open-risk-register.git
cd open-risk-register
npm install
npm run build
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.  
The risk assessment wizard is at [http://localhost:3000/app/](http://localhost:3000/app/).

> The site uses root-relative paths (`/dist/style.css`), so a local HTTP server is required —
> opening `index.html` directly with `file://` will not load assets correctly.

### Development watch mode

```bash
npm run dev
```

Rebuilds JS and CSS on every file change with source maps enabled. Does not minify output.

## Project structure

```
src/
  css/
    main.css          # App wizard styles & design tokens
    site.css          # Marketing/content page styles
  js/
    app.js            # Wizard app entry point
    site.js           # Site-wide nav & FAQ interactions
    pdf.js            # PDF export (lazy-loaded bundle)
    data.js           # NIST 800-30 threat/vulnerability data
    state.js          # localStorage state management
    utils.js          # Shared utilities
    steps/            # Wizard step components (step0–step9)
build/                # Generated production-ready static site output
app/                  # Risk assessment wizard (SPA shell)
input/                # Source documents (NIST SP 800-30 R1)
.do/app.yaml          # DigitalOcean App Platform deployment spec
```

### Security notes

- Plain browser storage uses `localStorage` and is not encrypted at rest.
- Encrypted backup import/export uses Web Crypto with a user-supplied passphrase.
- DigitalOcean App Platform static sites do not currently document arbitrary response-header injection, so an edge proxy/CDN may be required for full header enforcement.

## Credits

Developed by [Oak3 Advisory B.V.](https://oak3.org)
