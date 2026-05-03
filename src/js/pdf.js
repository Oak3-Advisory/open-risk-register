/**
 * pdf.js — pdfmake-based PDF export for the risk assessment report.
 * Built as a separate bundle (dist/pdf-bundle.js) and lazy-loaded
 * from step9.js to keep the main bundle lean.
 */
import pdfMake from 'pdfmake/build/pdfmake';
import helvetica from 'pdfmake/build/standard-fonts/Helvetica';

// Configure standard font (no VFS embedding needed)
pdfMake.vfs   = helvetica.vfs;
pdfMake.fonts = helvetica.fonts;

// ── Helpers ───────────────────────────────────────────────────

const SCALE = ['Very High', 'High', 'Moderate', 'Low', 'Very Low'];
const ORDER = ['Very High', 'High', 'Moderate', 'Low', 'Very Low', ''];

const RISK_COLORS = {
  'Very High': { fill: '#fde8e8', text: '#9b1c1c' },
  'High':      { fill: '#fef3c7', text: '#92400e' },
  'Moderate':  { fill: '#fef9c3', text: '#854d0e' },
  'Low':       { fill: '#dcfce7', text: '#14532d' },
  'Very Low':  { fill: '#f0fdf4', text: '#166534' },
};

function levelBadge(level) {
  const c = RISK_COLORS[level];
  if (!c) return { text: level || '—', fontSize: 8, alignment: 'center' };
  return { text: level, fillColor: c.fill, color: c.text, bold: true, fontSize: 8, alignment: 'center' };
}

function riskMatrix(ev) {
  // Replicate the 5×5 NIST matrix locally to avoid importing app state
  const SCALE5 = ['Very High', 'High', 'Moderate', 'Low', 'Very Low'];
  const MATRIX = [
    ['Very High', 'Very High', 'High',     'Moderate', 'Low'],
    ['Very High', 'High',      'High',     'Moderate', 'Low'],
    ['High',      'High',      'Moderate', 'Low',      'Very Low'],
    ['Moderate',  'Moderate',  'Low',      'Low',      'Very Low'],
    ['Low',       'Low',       'Very Low', 'Very Low', 'Very Low'],
  ];
  const r = SCALE5.indexOf(ev.overallLikelihood);
  const c = SCALE5.indexOf(ev.impactLevel);
  return (r >= 0 && c >= 0) ? MATRIX[r][c] : '';
}

function effectiveRisk(ev) {
  return ev.riskOverride || ev.riskLevel || riskMatrix(ev) || '';
}

// A4 portrait dimensions in points (ISO 216) — used in header/footer
// to avoid relying on the pageSize callback argument (unavailable in some
// pdfmake browser builds).
const A4_W = 595.28;
const A4_H = 841.89;


const SHIELD_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-2-8 2v7c0 6 8 10 8 10z" fill="#f97316" stroke="#f97316" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/></svg>';

const BAR_TOP = 44;   // height of the top bar in points
const BAR_BOT = 32;   // height of the bottom bar in points
const BAR_COLOR = '#0B1736'; // --c-primary (navy, matches site theme)


export function generateRiskPdf(assessment) {
  const events = assessment.threatEvents ?? [];
  const sources = assessment.threatSources ?? [];
  const vulns = assessment.vulnerabilities ?? [];
  const preds = assessment.predisposingConditions ?? [];
  const sorted = [...events].sort(
    (a, b) => ORDER.indexOf(effectiveRisk(a)) - ORDER.indexOf(effectiveRisk(b))
  );

  const counts = { 'Very High': 0, 'High': 0, 'Moderate': 0, 'Low': 0, 'Very Low': 0 };
  events.forEach(e => {
    const r = effectiveRisk(e);
    if (counts[r] !== undefined) counts[r]++;
  });

  const generatedDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  // ── Helpers ───────────────────────────────────────────────────
  const or = v => v || '—';
  const approachLabels = {
    'qualitative':       'Qualitative',
    'semi-quantitative': 'Semi-Quantitative',
    'quantitative':      'Quantitative',
  };
  const analysisLabels = {
    'threat-oriented':       'Threat-Oriented',
    'asset-oriented':        'Asset / Impact-Oriented',
    'vulnerability-oriented':'Vulnerability-Oriented',
  };
  const tierLabel = assessment.tier === 'org'
    ? 'Organisational / Business Process (Tier 1–2)'
    : 'Information System (Tier 3)';
  const scopeLabel = assessment.tier === 'org' ? 'Business Process / Scope' : 'System / Asset';
  const nis2Map = {
    essential: 'Essential Entity',
    important: 'Important Entity',
    'not-applicable': 'Not applicable',
  };

  // ── Introduction text ─────────────────────────────────────────
  const approachStr = approachLabels[assessment.assessmentApproach] || or(assessment.assessmentApproach);
  const analysisStr = analysisLabels[assessment.analysisApproach] || '';
  const introLines = [
    `This risk assessment was conducted in accordance with NIST Special Publication 800-30 Revision 1 ` +
    `"Guide for Conducting Risk Assessments" (National Institute of Standards and Technology, 2012). ` +
    `The assessment follows the Conduct step of the NIST Risk Assessment process, which comprises seven ` +
    `tasks: identification of threat sources (Task 2-1), identification of threat events (Task 2-2), ` +
    `identification of vulnerabilities and predisposing conditions (Task 2-3), likelihood determination ` +
    `(Task 2-4), impact determination (Task 2-5), risk determination (Task 2-6), and documentation of ` +
    `results in a risk register (Task 2-7).`,

    `The assessment uses a ${approachStr} measurement approach${analysisStr ? ` and a ${analysisStr} analysis approach` : ''}. ` +
    `Risk levels are derived by combining the Overall Likelihood of a threat event with the Level of Impact ` +
    `using the NIST SP 800-30 R1 risk matrix (Table I-2), producing five ordinal levels: ` +
    `Very Low, Low, Moderate, High, and Very High. ` +
    `Likelihood suggestions in this assessment are drawn from publicly available, non-commercial sources ` +
    `including the ENISA Threat Landscape 2024, CISA Known Exploited Vulnerabilities (KEV) Catalog, ` +
    `NCSC Annual Review 2024, NIST National Vulnerability Database (NVD), and EU agency climate data ` +
    `(Copernicus Climate Change Service, European Seismic Hazard Map).`,
  ];

  // ── Metadata table rows ───────────────────────────────────────
  const metaRows = [
    ['Assessment name',  or(assessment.name)],
    ['Organisation',     or(assessment.organization)],
    ['Assessor(s)',      or(assessment.assessor)],
    ['Assessment date',  or(assessment.date)],
    ['Report generated', generatedDate],
    [scopeLabel,         or(assessment.systemName)],
    ['Assessment tier',  tierLabel],
    ['Measurement approach', approachStr],
  ];
  if (analysisStr) metaRows.push(['Analysis approach', analysisStr]);
  if (assessment.nis2EntityType) metaRows.push(['NIS2 entity type', nis2Map[assessment.nis2EntityType] || assessment.nis2EntityType]);
  if (assessment.riskTolerance)  metaRows.push(['Risk tolerance',   assessment.riskTolerance]);

  // ── Risk register body ────────────────────────────────────────
  const registerBody = [
    [
      { text: 'ID',                   style: 'tableHeader' },
      { text: 'Threat Event',         style: 'tableHeader' },
      { text: 'Type',                 style: 'tableHeader' },
      { text: 'Likelihood',           style: 'tableHeader' },
      { text: 'Impact',               style: 'tableHeader' },
      { text: 'Risk Level',           style: 'tableHeader' },
    ],
    ...sorted.map((ev, idx) => {
      const risk = effectiveRisk(ev);
      const override = ev.riskOverride && ev.riskOverride !== riskMatrix(ev);
      return [
        { text: String(idx + 1), fontSize: 8, alignment: 'center' },
        { text: or(ev.name), fontSize: 8 },
        { text: ev.type === 'adversarial' ? 'Adversarial' : 'Non-Adv.', fontSize: 8, alignment: 'center' },
        ev.overallLikelihood ? levelBadge(ev.overallLikelihood) : { text: '—', fontSize: 8, alignment: 'center' },
        ev.impactLevel       ? levelBadge(ev.impactLevel)       : { text: '—', fontSize: 8, alignment: 'center' },
        risk ? { ...levelBadge(risk), text: risk + (override ? ' *' : '') } : { text: '—', fontSize: 8, alignment: 'center' },
      ];
    }),
  ];

  // ── Risk summary ──────────────────────────────────────────────
  const summaryBody = [
    [
      { text: 'Risk Level', style: 'tableHeader' },
      { text: 'Events', style: 'tableHeader' },
      { text: 'Interpretation', style: 'tableHeader' },
    ],
    ...SCALE.map(l => {
      const c = RISK_COLORS[l] || {};
      const interp = {
        'Very High': 'Unacceptable — immediate corrective action required.',
        'High':      'Unacceptable — corrective action required urgently.',
        'Moderate':  'May be acceptable — plan corrective actions.',
        'Low':       'Acceptable with monitoring.',
        'Very Low':  'Acceptable.',
      }[l] || '';
      return [
        { text: l, fillColor: c.fill, color: c.text, bold: true, fontSize: 8 },
        { text: String(counts[l]), fillColor: c.fill, color: c.text, fontSize: 8, alignment: 'center' },
        { text: interp, fontSize: 8 },
      ];
    }),
  ];

  // ── MAIN CONTENT ──────────────────────────────────────────────
  const content = [
    // ── Title block ──
    { text: 'RISK ASSESSMENT REPORT', style: 'overline' },
    { text: or(assessment.name), style: 'title' },
    { text: `${or(assessment.organization)}  ·  ${or(assessment.date)}`, style: 'subtitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1.5, lineColor: BAR_COLOR }],
      margin: [0, 10, 0, 20],
    },

    // ── Assessment details ──
    { text: '1.  Assessment Details', style: 'h1' },
    {
      table: {
        widths: [140, '*'],
        body: metaRows.map(([label, value]) => [
          { text: label, style: 'metaLabel' },
          { text: value, fontSize: 9 },
        ]),
      },
      layout: 'lightHorizontalLines',
      margin: [0, 6, 0, 20],
    },

    // ── Scope & context ──
    ...(assessment.systemDescription || assessment.authorizationBoundary || assessment.purpose || assessment.scope ? [
      { text: '2.  Scope & Context', style: 'h1' },
      ...(assessment.systemDescription ? [
        { text: assessment.tier === 'org' ? 'Process Description' : 'System Description', style: 'h2' },
        { text: assessment.systemDescription, style: 'bodyText' },
      ] : []),
      ...(assessment.authorizationBoundary ? [
        { text: assessment.tier === 'org' ? 'Scope & Boundaries' : 'Authorization Boundary', style: 'h2' },
        { text: assessment.authorizationBoundary, style: 'bodyText' },
      ] : []),
      ...(assessment.purpose ? [
        { text: 'Purpose', style: 'h2' },
        { text: assessment.purpose, style: 'bodyText' },
      ] : []),
      ...(assessment.scope ? [
        { text: 'Scope', style: 'h2' },
        { text: assessment.scope, style: 'bodyText' },
      ] : []),
    ] : []),

    // ── Introduction ──
    { text: `${assessment.systemDescription || assessment.authorizationBoundary || assessment.purpose || assessment.scope ? '3' : '2'}.  Methodology`, style: 'h1' },
    { text: introLines[0], style: 'bodyText' },
    { text: introLines[1], style: 'bodyText' },

    // ── Risk summary ──
    { text: `${assessment.systemDescription || assessment.authorizationBoundary || assessment.purpose || assessment.scope ? '4' : '3'}.  Risk Summary`, style: 'h1' },
    {
      table: {
        headerRows: 1,
        widths: [80, 40, '*'],
        body: summaryBody,
      },
      layout: 'lightHorizontalLines',
      margin: [0, 6, 0, 6],
    },
    ...(sorted.some(e => e.riskOverride) ? [
      { text: '* Risk level was manually overridden by the assessor.', fontSize: 7, color: '#6b7280', margin: [0, 4, 0, 14] },
    ] : [{ text: '', margin: [0, 0, 0, 14] }]),

    // ── Risk register ──
    { text: `${assessment.systemDescription || assessment.authorizationBoundary || assessment.purpose || assessment.scope ? '5' : '4'}.  Risk Register`, style: 'h1' },
    events.length === 0
      ? { text: 'No threat events were assessed.', style: 'bodyText', italics: true }
      : {
          table: {
            headerRows: 1,
            widths: [18, '*', 52, 56, 46, 56],
            body: registerBody,
            dontBreakRows: true,
          },
          layout: 'lightHorizontalLines',
          margin: [0, 6, 0, 6],
        },
    ...(assessment.riskNotes ? [
      { text: 'Notes on risk register', style: 'h2' },
      { text: assessment.riskNotes, style: 'bodyText' },
    ] : []),
  ];

  // ── APPENDIX ──────────────────────────────────────────────────
  // Hard page break before appendix
  content.push({ text: 'Appendix — Input Data', style: 'appendixTitle', pageBreak: 'before' });
  content.push({
    text: 'This appendix contains all data entered during the assessment and serves as an auditable record of the inputs used to derive the risk register above.',
    style: 'bodyText',
    margin: [0, 4, 0, 20],
  });

  // A.1 Threat Sources
  content.push({ text: 'A.1  Threat Sources', style: 'h1' });
  if (sources.length === 0) {
    content.push({ text: 'No threat sources recorded.', style: 'bodyText', italics: true });
  } else {
    const adversarial = sources.filter(s => s.type === 'Adversarial');
    const nonAdversarial = sources.filter(s => s.type !== 'Adversarial');

    if (adversarial.length > 0) {
      content.push({ text: 'Adversarial', style: 'h2' });
      content.push({
        table: {
          headerRows: 1,
          widths: ['*', 50, 46, 56, 55],
          dontBreakRows: true,
          body: [
            [
              { text: 'Threat Source',   style: 'tableHeader' },
              { text: 'Capability',      style: 'tableHeader' },
              { text: 'Intent',          style: 'tableHeader' },
              { text: 'Targeting',       style: 'tableHeader' },
              { text: 'In Scope',        style: 'tableHeader' },
            ],
            ...adversarial.map(s => [
              {
                stack: [
                  { text: or(s.name), fontSize: 8, bold: true },
                  ...(s.notes ? [{ text: s.notes, fontSize: 7, color: '#6b7280', margin: [0, 2, 0, 0] }] : []),
                ],
              },
              s.capability ? levelBadge(s.capability) : { text: '—', fontSize: 8, alignment: 'center' },
              s.intent     ? levelBadge(s.intent)     : { text: '—', fontSize: 8, alignment: 'center' },
              s.targeting  ? levelBadge(s.targeting)  : { text: '—', fontSize: 8, alignment: 'center' },
              { text: s.inScope ? 'Yes' : 'No', fontSize: 8, alignment: 'center' },
            ]),
          ],
        },
        layout: 'lightHorizontalLines',
        margin: [0, 4, 0, 12],
      });
    }

    if (nonAdversarial.length > 0) {
      content.push({ text: 'Non-Adversarial', style: 'h2' });
      content.push({
        table: {
          headerRows: 1,
          widths: ['*', 80, 60],
          dontBreakRows: true,
          body: [
            [
              { text: 'Threat Source',    style: 'tableHeader' },
              { text: 'Type',             style: 'tableHeader' },
              { text: 'In Scope',         style: 'tableHeader' },
            ],
            ...nonAdversarial.map(s => [
              {
                stack: [
                  { text: or(s.name), fontSize: 8, bold: true },
                  ...(s.notes ? [{ text: s.notes, fontSize: 7, color: '#6b7280', margin: [0, 2, 0, 0] }] : []),
                ],
              },
              { text: or(s.type), fontSize: 8 },
              { text: s.inScope ? 'Yes' : 'No', fontSize: 8, alignment: 'center' },
            ]),
          ],
        },
        layout: 'lightHorizontalLines',
        margin: [0, 4, 0, 12],
      });
    }
  }

  // A.2 Threat Events
  content.push({ text: 'A.2  Threat Events', style: 'h1' });
  if (events.length === 0) {
    content.push({ text: 'No threat events recorded.', style: 'bodyText', italics: true });
  } else {
    content.push({
      table: {
        headerRows: 1,
        widths: [18, '*', 48, 58, 50, 46, 52],
        dontBreakRows: true,
        body: [
          [
            { text: 'ID',        style: 'tableHeader' },
            { text: 'Event',     style: 'tableHeader' },
            { text: 'Relevance', style: 'tableHeader' },
            { text: 'Init. Likelihood', style: 'tableHeader' },
            { text: 'Adv. Likelihood',  style: 'tableHeader' },
            { text: 'Impact',    style: 'tableHeader' },
            { text: 'Risk',      style: 'tableHeader' },
          ],
          ...sorted.map((ev, idx) => {
            const risk = effectiveRisk(ev);
            const initiationLabel = ev.type === 'adversarial'
              ? 'Initiation: ' : 'Occurrence: ';
            return [
              { text: String(idx + 1), fontSize: 7, alignment: 'center' },
              {
                stack: [
                  { text: or(ev.name), fontSize: 7, bold: true },
                  ...(ev.description ? [{ text: ev.description, fontSize: 6, color: '#6b7280', margin: [0, 1, 0, 0] }] : []),
                  ...(ev.notes ? [{ text: 'Notes: ' + ev.notes, fontSize: 6, color: '#374151', margin: [0, 2, 0, 0] }] : []),
                ],
              },
              { text: or(ev.relevance), fontSize: 7, alignment: 'center' },
              ev.likelihoodInitiation ? { ...levelBadge(ev.likelihoodInitiation), fontSize: 7 } : { text: '—', fontSize: 7, alignment: 'center' },
              ev.likelihoodAdverse    ? { ...levelBadge(ev.likelihoodAdverse), fontSize: 7 }    : { text: '—', fontSize: 7, alignment: 'center' },
              ev.impactLevel          ? { ...levelBadge(ev.impactLevel), fontSize: 7 }          : { text: '—', fontSize: 7, alignment: 'center' },
              risk                    ? { ...levelBadge(risk), fontSize: 7 }                    : { text: '—', fontSize: 7, alignment: 'center' },
            ];
          }),
        ],
      },
      layout: 'lightHorizontalLines',
      margin: [0, 4, 0, 12],
    });
  }

  // A.3 Vulnerabilities
  content.push({ text: 'A.3  Vulnerabilities', style: 'h1' });
  if (vulns.length === 0) {
    content.push({ text: 'No vulnerabilities recorded.', style: 'bodyText', italics: true });
  } else {
    content.push({
      table: {
        headerRows: 1,
        widths: ['*', 60, '*'],
        dontBreakRows: true,
        body: [
          [
            { text: 'Vulnerability',  style: 'tableHeader' },
            { text: 'Severity',       style: 'tableHeader' },
            { text: 'Notes',          style: 'tableHeader' },
          ],
          ...vulns.map(v => [
            {
              stack: [
                { text: or(v.name), fontSize: 8, bold: true },
                ...(v.description ? [{ text: v.description, fontSize: 7, color: '#6b7280', margin: [0, 2, 0, 0] }] : []),
              ],
            },
            v.severity ? levelBadge(v.severity) : { text: '—', fontSize: 8, alignment: 'center' },
            { text: or(v.notes), fontSize: 7, color: '#374151' },
          ]),
        ],
      },
      layout: 'lightHorizontalLines',
      margin: [0, 4, 0, 12],
    });
  }

  // A.4 Predisposing Conditions
  content.push({ text: 'A.4  Predisposing Conditions', style: 'h1' });
  if (preds.length === 0) {
    content.push({ text: 'No predisposing conditions recorded.', style: 'bodyText', italics: true });
  } else {
    content.push({
      table: {
        headerRows: 1,
        widths: ['*', 70, 50, '*'],
        dontBreakRows: true,
        body: [
          [
            { text: 'Condition',      style: 'tableHeader' },
            { text: 'Pervasiveness',  style: 'tableHeader' },
            { text: 'Effect',         style: 'tableHeader' },
            { text: 'Notes',          style: 'tableHeader' },
          ],
          ...preds.map(p => [
            {
              stack: [
                { text: or(p.name), fontSize: 8, bold: true },
                ...(p.description ? [{ text: p.description, fontSize: 7, color: '#6b7280', margin: [0, 2, 0, 0] }] : []),
              ],
            },
            p.pervasiveness ? levelBadge(p.pervasiveness) : { text: '—', fontSize: 8, alignment: 'center' },
            { text: p.group === 'increase' ? 'Increases risk' : p.group === 'decrease' ? 'Decreases risk' : '—', fontSize: 8 },
            { text: or(p.notes), fontSize: 7, color: '#374151' },
          ]),
        ],
      },
      layout: 'lightHorizontalLines',
      margin: [0, 4, 0, 12],
    });
  }

  // A.5 Assessment Context (assumptions, constraints, risk tolerance)
  const hasContext = assessment.assumptions || assessment.constraints || assessment.riskTolerance;
  if (hasContext) {
    content.push({ text: 'A.5  Assessment Context', style: 'h1' });
    if (assessment.assumptions) {
      content.push({ text: 'Assumptions', style: 'h2' });
      content.push({ text: assessment.assumptions, style: 'bodyText' });
    }
    if (assessment.constraints) {
      content.push({ text: 'Constraints', style: 'h2' });
      content.push({ text: assessment.constraints, style: 'bodyText' });
    }
    if (assessment.riskTolerance) {
      content.push({ text: 'Risk Tolerance', style: 'h2' });
      content.push({ text: assessment.riskTolerance, style: 'bodyText' });
    }
  }

  // ── Document definition ───────────────────────────────────────
  const docDef = {
    pageSize: 'A4',
    pageOrientation: 'portrait',
    pageMargins: [50, BAR_TOP + 18, 50, BAR_BOT + 18],

    background: () => [
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: A4_W, h: BAR_TOP, color: BAR_COLOR }],
        absolutePosition: { x: 0, y: 0 },
      },
      {
        canvas: [{ type: 'rect', x: 0, y: 0, w: A4_W, h: BAR_BOT, color: BAR_COLOR }],
        absolutePosition: { x: 0, y: A4_H - BAR_BOT },
      },
    ],

    header: () => ({
      columns: [
        { svg: SHIELD_SVG, width: 18, margin: [0, 0, 0, 0] },
        { text: 'Open Risk Register', color: 'white', bold: true, fontSize: 12, margin: [7, 8, 0, 0] },
      ],
      columnGap: 0,
      margin: [24, 13, 0, 0],
    }),

    footer: (currentPage, pageCount) => ({
      columns: [
        { text: 'openriskregister.org', color: 'white', fontSize: 8 },
        { text: `Page ${currentPage} of ${pageCount}`, color: 'white', fontSize: 8, alignment: 'right' },
      ],
      margin: [24, 22, 24, 0],
    }),

    content,

    styles: {
      overline:       { fontSize: 7.5, color: '#6b7280', characterSpacing: 1, bold: true, margin: [0, 0, 0, 6] },
      title:          { fontSize: 22, bold: true, color: BAR_COLOR, margin: [0, 0, 0, 4] },
      subtitle:       { fontSize: 9, color: '#6b7280', margin: [0, 0, 0, 0] },
      h1:             { fontSize: 12, bold: true, color: BAR_COLOR, margin: [0, 16, 0, 6] },
      h2:             { fontSize: 10, bold: true, color: '#374151', margin: [0, 10, 0, 4] },
      appendixTitle:  { fontSize: 16, bold: true, color: BAR_COLOR, margin: [0, 0, 0, 8] },
      bodyText:       { fontSize: 9, lineHeight: 1.5, color: '#374151', margin: [0, 0, 0, 8] },
      tableHeader:    { bold: true, fontSize: 7.5, color: '#374151', fillColor: '#f3f4f6' },
      metaLabel:      { bold: true, fontSize: 9, color: '#6b7280' },
    },

    defaultStyle: {
      font: 'Helvetica',
      fontSize: 9,
      lineHeight: 1.3,
      color: '#1f2937',
    },
  };

  const filename = `risk-assessment-${(assessment.name || 'report')
    .replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`;

  pdfMake.createPdf(docDef).download(filename);
}


// Expose globally so step9.js can call it after lazy-loading this bundle
window.generateRiskPdf = generateRiskPdf;
