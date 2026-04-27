/**
 * NIST SP 800-30 R1 — Reference Data (corrected matrices from the publication)
 */

export const SCALE = ['Very Low', 'Low', 'Moderate', 'High', 'Very High'];
export const SCALE_IDX = { 'Very Low': 0, 'Low': 1, 'Moderate': 2, 'High': 3, 'Very High': 4 };

/** Table D-2: Threat source taxonomy */
export const THREAT_SOURCE_TAXONOMY = [
  { id: 'ts-a1',  type: 'Adversarial', name: 'Individual – Outsider' },
  { id: 'ts-a2',  type: 'Adversarial', name: 'Individual – Insider' },
  { id: 'ts-a3',  type: 'Adversarial', name: 'Individual – Trusted Insider' },
  { id: 'ts-a4',  type: 'Adversarial', name: 'Individual – Privileged Insider' },
  { id: 'ts-a5',  type: 'Adversarial', name: 'Group – Ad hoc' },
  { id: 'ts-a6',  type: 'Adversarial', name: 'Group – Established' },
  { id: 'ts-a7',  type: 'Adversarial', name: 'Organization – Competitor' },
  { id: 'ts-a8',  type: 'Adversarial', name: 'Organization – Supplier / Partner' },
  { id: 'ts-a9',  type: 'Adversarial', name: 'Organization – Nation-State' },
  { id: 'ts-b1',  type: 'Accidental',  name: 'User – Accidental Error' },
  { id: 'ts-b2',  type: 'Accidental',  name: 'Privileged User / Administrator – Accidental Error' },
  { id: 'ts-c1',  type: 'Structural',  name: 'IT Equipment – Storage' },
  { id: 'ts-c2',  type: 'Structural',  name: 'IT Equipment – Processing / Compute' },
  { id: 'ts-c3',  type: 'Structural',  name: 'IT Equipment – Communications / Networking' },
  { id: 'ts-c4',  type: 'Structural',  name: 'Environmental Controls – Power Supply' },
  { id: 'ts-c5',  type: 'Structural',  name: 'Software – Operating System' },
  { id: 'ts-c6',  type: 'Structural',  name: 'Software – Application or Service' },
  { id: 'ts-d1',  type: 'Environmental', name: 'Natural Disaster – Fire' },
  { id: 'ts-d2',  type: 'Environmental', name: 'Natural Disaster – Flood / Tsunami' },
  { id: 'ts-d3',  type: 'Environmental', name: 'Natural Disaster – Windstorm / Tornado / Hurricane' },
  { id: 'ts-d4',  type: 'Environmental', name: 'Natural Disaster – Earthquake' },
  { id: 'ts-d5',  type: 'Environmental', name: 'Infrastructure Failure – Telecommunications' },
  { id: 'ts-d6',  type: 'Environmental', name: 'Infrastructure Failure – Electrical Power' },
];

/** Descriptions for Table D-3 (capability), D-4 (intent), D-5 (targeting), D-6 (range of effects) */
export const CHAR_DESCRIPTIONS = {
  capability: {
    'Very High': 'Sophisticated level of expertise; well-resourced; can generate opportunities to support multiple successful, continuous, and coordinated attacks.',
    'High':      'Sophisticated level of expertise; significant resources and opportunities to support multiple successful coordinated attacks.',
    'Moderate':  'Moderate resources, expertise, and opportunities to support multiple successful attacks.',
    'Low':       'Limited resources, expertise, and opportunities to support a successful attack.',
    'Very Low':  'Very limited resources, expertise, and opportunities to support a successful attack.',
  },
  intent: {
    'Very High': 'Seeks to severely impede or destroy a core mission/business function — persistent, long-term presence.',
    'High':      'Seeks to undermine critical aspects of a core mission and maintain a presence to do so in the future.',
    'Moderate':  'Seeks to obtain or modify critical information or disrupt cyber resources; willing to impede organizational functions.',
    'Low':       'Actively seeks to obtain critical information or disrupt resources without concern for detection.',
    'Very Low':  'Seeks to disrupt or deface resources opportunistically, without concern for detection.',
  },
  targeting: {
    'Very High': 'Persistently targets a specific organization, focusing on specific high-value assets based on extensive reconnaissance.',
    'High':      'Persistently targets a specific organization or program, focusing on high-value assets.',
    'Moderate':  'Persistently targets high-value organizations using publicly available information.',
    'Low':       'Targets a class of high-value organizations and seeks targets of opportunity within that class.',
    'Very Low':  'May or may not target any specific organizations or classes of organizations.',
  },
  rangeOfEffects: {
    'Very High': 'Effects are sweeping, involving almost all cyber resources of the system / environment.',
    'High':      'Effects are extensive, involving most cyber resources including many critical resources.',
    'Moderate':  'Effects are wide-ranging, involving a significant portion of cyber resources including some critical resources.',
    'Low':       'Effects are limited, involving some cyber resources but no critical resources.',
    'Very Low':  'Effects are minimal, involving few if any cyber resources and no critical resources.',
  },
};

/** Table E-2: Representative adversarial threat events */
export const ADVERSARIAL_EVENTS = [
  { id: 'ae-01', name: 'Perform network perimeter scanning / reconnaissance', description: 'Adversary uses software to scan organizational perimeters to understand the IT infrastructure and improve ability to launch successful attacks.' },
  { id: 'ae-02', name: 'Open-source (OSINT) discovery of organizational information', description: 'Adversary mines publicly accessible information to gather data about organizational systems, business processes, users, or external relationships.' },
  { id: 'ae-03', name: 'Network sniffing of exposed wired or wireless networks', description: 'Adversary with access to exposed data channels uses network sniffing to identify components, resources, and protections.' },
  { id: 'ae-04', name: 'Reconnaissance and surveillance of targeted organization', description: 'Adversary uses various means (scanning, physical observation) over time to examine and assess organizations and ascertain points of vulnerability.' },
  { id: 'ae-05', name: 'Phishing / spear-phishing attack', description: 'Adversary counterfeits communications from a legitimate source to acquire sensitive information (usernames, passwords, SSNs). Often via email or instant messaging.' },
  { id: 'ae-06', name: 'Deliver known malware (e.g., virus via email)', description: 'Adversary uses common delivery mechanisms to install known malware into organizational information systems.' },
  { id: 'ae-07', name: 'Deliver targeted malware for system control and data exfiltration', description: 'Adversary installs malware specifically designed to take control of internal systems, identify sensitive information, exfiltrate it, and conceal these actions.' },
  { id: 'ae-08', name: 'Deliver malware via removable media (e.g., USB drive)', description: 'Adversary places removable media containing malware in locations where employees are likely to find and use them (parking lots, conference exhibits).' },
  { id: 'ae-09', name: 'Exploit known vulnerabilities in information systems', description: 'Adversary searches for known vulnerabilities in organizational information systems and exploits those vulnerabilities.' },
  { id: 'ae-10', name: 'Exploit recently discovered / zero-day vulnerabilities', description: 'Adversary employs attacks that exploit as yet unpublicized vulnerabilities, based on adversary knowledge of the IT environment.' },
  { id: 'ae-11', name: 'Exploit vulnerabilities in mobile / remote systems', description: 'Adversary takes advantage of mobile or remote systems outside organizational physical and logical protections to compromise them and gather information.' },
  { id: 'ae-12', name: 'Conduct Denial of Service (DoS) or DDoS attack', description: 'Adversary attempts to make Internet-accessible resources unavailable to intended users, or uses multiple compromised systems for a distributed attack.' },
  { id: 'ae-13', name: 'Conduct brute-force / password-guessing attack', description: 'Adversary attempts to gain access by random or systematic guessing of passwords, possibly supported by password-cracking utilities.' },
  { id: 'ae-14', name: 'Conduct man-in-the-middle (MITM) attack', description: 'Adversary intercepts sessions between organizational and external systems, relaying messages while controlling the entire communication.' },
  { id: 'ae-15', name: 'Conduct social engineering (insider or outsider)', description: 'Adversary persuades or tricks individuals within organizations into revealing critical or sensitive information.' },
  { id: 'ae-16', name: 'Exploit split tunneling on remote connections', description: 'Adversary takes advantage of remote systems simultaneously connected to organizational networks and insecure external networks.' },
  { id: 'ae-17', name: 'Compromise organizational information systems via physical access', description: 'Adversary obtains physical access to organizational information systems and makes unauthorized modifications.' },
  { id: 'ae-18', name: 'Exfiltrate sensitive information via malware', description: 'Adversary directs malware on organizational systems to locate and surreptitiously transmit sensitive information to an external destination.' },
  { id: 'ae-19', name: 'Corrupt or destroy critical organizational data', description: 'Adversary implants corrupted data or destroys information system components, preventing organization from carrying out missions.' },
  { id: 'ae-20', name: 'Supply chain attack (hardware, software, or firmware)', description: 'Adversary compromises the design, manufacture, or distribution of software, firmware, or hardware to introduce malicious functionality.' },
  { id: 'ae-21', name: 'Exploit cloud multi-tenancy or insecure cloud configuration', description: 'Adversary exploits multi-tenant cloud environments to observe organizational processes, acquire data, or interfere with operations.' },
  { id: 'ae-22', name: 'Conduct physical attack on facilities or supporting infrastructure', description: 'Adversary conducts physical attack on organizational facilities (e.g., sets fire, sabotages power) or supporting infrastructure.' },
  { id: 'ae-23', name: 'Web defacement or integrity attack on publicly accessible systems', description: 'Adversary makes unauthorized changes to organizational websites or publicly accessible data, causing integrity loss and reputational damage.' },
  { id: 'ae-24', name: 'Insert subverted individual into organization or privileged position', description: 'Adversary places individuals within the organization who carry out actions to cause harm to organizational missions or gain access to privileged functions.' },
];

/** Table E-3: Representative non-adversarial threat events */
export const NON_ADVERSARIAL_EVENTS = [
  { id: 'ne-01', name: 'Accidental disclosure of sensitive information by authorized user', description: 'Authorized user inadvertently exposes, discloses, or mishandles critical or sensitive information.' },
  { id: 'ne-02', name: 'Incorrect privilege settings by administrator', description: 'Authorized privileged user or administrator erroneously assigns excessive privileges or sets access requirements too low.' },
  { id: 'ne-03', name: 'Introduction of vulnerabilities during software development', description: 'Due to weaknesses in programming languages or development environments, errors and vulnerabilities are inadvertently introduced into software products.' },
  { id: 'ne-04', name: 'Disk / storage error causing data corruption or loss', description: 'Corrupted storage due to a disk error or pervasive failure due to aging of a set of devices acquired at the same time.' },
  { id: 'ne-05', name: 'Resource depletion causing degraded performance', description: 'Degraded communications or processing performance due to resource depletion or contention, exceeding expected operating parameters.' },
  { id: 'ne-06', name: 'Hardware failure due to aging or component end-of-life', description: 'Failures of IT equipment or environmental controls due to aging, resource depletion, or circumstances exceeding expected operating parameters.' },
  { id: 'ne-07', name: 'Fire at primary or backup facility', description: 'Fire (not due to adversarial activity) makes primary or backup facility inoperable or destroys system backups.' },
  { id: 'ne-08', name: 'Flood at primary or backup facility', description: 'Flood (not due to adversarial activity) at primary or backup facility makes facility inoperable or destroys backups.' },
  { id: 'ne-09', name: 'Hurricane, tornado, or severe windstorm at primary facility', description: 'Severe windstorm at primary facility makes facility inoperable.' },
  { id: 'ne-10', name: 'Earthquake at primary facility', description: 'Earthquake of significant magnitude at primary facility makes facility inoperable.' },
  { id: 'ne-11', name: 'Power outage or electrical infrastructure failure', description: 'Electrical power failure (not due to adversarial activity) affecting organizational information systems and operations.' },
  { id: 'ne-12', name: 'Telecommunications infrastructure failure', description: 'Telecommunications outage (not due to adversarial activity) affecting organizational connectivity and operations.' },
];

/** Table E-4: Threat event relevance values */
export const RELEVANCE_VALUES = [
  { value: 'Confirmed',   desc: 'The threat event or TTP has been observed by the organization.' },
  { value: 'Expected',    desc: 'The threat event or TTP has been seen by the organization\'s peers or partners.' },
  { value: 'Anticipated', desc: 'The threat event or TTP has been reported by a trusted source.' },
  { value: 'Predicted',   desc: 'The threat event or TTP has been predicted by a trusted source.' },
  { value: 'Possible',    desc: 'The threat event or TTP has been described by a somewhat credible source.' },
  { value: 'N/A',         desc: 'Not currently applicable — technology, architecture, or predisposing conditions are not present.' },
];

/** Table F-4: Predisposing condition types */
export const PREDISPOSING_TYPES = [
  { id: 'pc-01', name: 'Information-Related',   desc: 'System handles classified, PII, controlled unclassified, or specially protected information.' },
  { id: 'pc-02', name: 'Technical – Architectural', desc: 'System must comply with specific technical standards, use particular product lines, or allocate specific security functions to common controls.' },
  { id: 'pc-03', name: 'Technical – Functional (networked / multi-user)', desc: 'System is networked and supports multiple concurrent users, increasing exposure to remote threats.' },
  { id: 'pc-04', name: 'Technical – Functional (stand-alone / restricted)', desc: 'System is stand-alone or has restricted network connectivity, limiting but not eliminating some threats.' },
  { id: 'pc-05', name: 'Operational – Fixed site', desc: 'System is at a fixed physical location with associated physical access controls and environmental dependencies.' },
  { id: 'pc-06', name: 'Operational – Mobile / semi-mobile', desc: 'System or its components are mobile (handheld, laptop, vehicle-mounted), increasing physical exposure.' },
  { id: 'pc-07', name: 'Operational – Large population with access', desc: 'A large number of users (or users with varying vetting levels) have access to the system, increasing insider threat surface.' },
];

/** Assessment tiers */
export const TIERS = [
  { value: 'tier3', label: 'Tier 3 — Information System (recommended)', desc: 'Supports RMF activities: security categorization, control selection, implementation, assessment, authorization, and continuous monitoring.' },
  { value: 'tier2', label: 'Tier 2 — Mission / Business Process',        desc: 'Focuses on protection and resiliency requirements for mission/business processes and enterprise architecture segments.' },
  { value: 'tier1', label: 'Tier 1 — Organization',                      desc: 'Supports organization-wide policies, investment decisions, and governance. Appropriate for systemic, cross-cutting risks.' },
];

/**
 * NIST SP 800-30 R1 — Reference texts for the NIST modal help dialogs.
 * Fields:
 *   term  — the NIST technical term
 *   plain — plain-language explanation for non-security staff
 *   quote — verbatim extract from NIST SP 800-30 R1
 *   cite  — exact citation (chapter, section, page)
 */
export const NIST_REFERENCES = {
  'nist-sp-800-30': {
    term: 'NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments',
    plain: 'NIST SP 800-30 Rev. 1 is the US federal standard guide for conducting information security risk assessments. It provides a structured process for identifying threats, vulnerabilities, likelihoods, and impacts — and combining them into a risk level that supports decision-making. This tool implements the full NIST SP 800-30 Rev. 1 workflow.',
    quote: 'The purpose of Special Publication 800-30 is to provide guidance for conducting risk assessments of federal information systems and organizations, amplifying the guidance in Special Publication 800-39.',
    cite: 'NIST SP 800-30 Rev. 1, Chapter 1, Section 1.1, p. 1',
  },
  'risk-assessment': {
    term: 'Risk Assessment',
    plain: 'A risk assessment identifies, estimates, and prioritises risk to organisational operations, assets, individuals, and others, resulting from the operation of an information system. It is a key part of an organisation\'s risk management process and informs decisions about security controls, investments, and acceptable levels of risk.',
    quote: 'Risk assessments identify, estimate, and prioritize risks to organizational operations, organizational assets, individuals, other organizations, and the Nation, resulting from the operation and use of information systems.',
    cite: 'NIST SP 800-30 Rev. 1, Chapter 1, p. 1',
  },
  'tier-1': {
    term: 'Risk Assessment Tiers (Tier 1 & 2)',
    plain: 'NIST SP 800-30 defines three tiers of risk assessment:\n\n• Tier 1 — Organisation level: supports governance, investment decisions, and organisation-wide risk policies.\n• Tier 2 — Mission/Business Process level: focuses on protection requirements for specific mission processes and enterprise architecture segments.\n• Tier 3 — Information System level: supports the RMF activities for individual systems (most common starting point).',
    quote: 'Risk management is viewed as a holistic activity fully integrated into every aspect of the organization and addresses risk at Tier 1 (organization level), Tier 2 (mission/business process level), and Tier 3 (information system level).',
    cite: 'NIST SP 800-30 Rev. 1, Chapter 2, p. 7',
  },
  'tier-3': {
    term: 'Tier 3 — Information System Level',
    plain: 'A Tier 3 risk assessment focuses on a specific information system. It directly supports the NIST Risk Management Framework (RMF) activities: security categorisation, control selection, implementation, assessment, authorisation, and continuous monitoring. This is the most common starting point for organisations conducting their first NIST 800-30 assessment.',
    quote: 'At Tier 3, risk assessments support the RMF activities including security categorization, security control selection, implementation and assessment, and continuous monitoring.',
    cite: 'NIST SP 800-30 Rev. 1, Chapter 2, p. 9',
  },
  'assessment-approach': {
    term: 'Assessment Approach',
    plain: 'The assessment approach determines how risk values are expressed:\n\n• Qualitative — uses descriptive scales (Very Low, Low, Moderate, High, Very High). Best for communicating risk to decision-makers and easiest to apply.\n• Semi-Quantitative — uses numeric bins or scales (e.g. 0–100) that map to qualitative terms. Supports better comparison and prioritisation.\n• Quantitative — uses numeric probabilities and monetary values. Most rigorous but requires substantial data and expertise.',
    quote: 'Organizations can conduct risk assessments using qualitative, semi-quantitative, or quantitative methods (or some combination of these methods), depending upon the maturity of their risk management processes.',
    cite: 'NIST SP 800-30 Rev. 1, Chapter 3, p. 20',
  },
  'analysis-approach': {
    term: 'Analysis Approach',
    plain: 'The analysis approach sets the starting point for the risk assessment:\n\n• Threat-Oriented — starts with threat sources and events, identifying vulnerabilities in the context of those threats. Best when threat intelligence is available.\n• Asset/Impact-Oriented — starts with critical assets and the impacts of concern, then identifies threats that could cause those impacts.\n• Vulnerability-Oriented — starts with known weaknesses and predisposing conditions, then identifies threats that could exploit them.',
    quote: 'Organizations can conduct risk assessments that are threat-oriented, asset/impact-oriented, or vulnerability-oriented depending on the information available to support each type of analysis.',
    cite: 'NIST SP 800-30 Rev. 1, Chapter 3, p. 21',
  },
  'risk-tolerance': {
    term: 'Risk Tolerance',
    plain: 'Risk tolerance is the level of risk an organisation is willing to accept. It is set by senior leadership and reflects the organisation\'s overall risk appetite, mission requirements, and regulatory obligations. Risks that fall below the tolerance threshold may be accepted; those above it require treatment (mitigation, transfer, or avoidance).',
    quote: 'Risk tolerance is the organization\'s or organizational element\'s readiness to bear the risk after risk treatment in order to achieve its objectives.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix B, p. B-12',
  },
  'threat-source': {
    term: 'Threat Source',
    plain: 'A threat source is the intent and method targeted at the intentional exploitation of a vulnerability, or a situation and method that may accidentally trigger a vulnerability. NIST classifies threat sources into four types:\n\n• Adversarial — individuals or groups with malicious intent (insiders, outsiders, competitors, nation-states).\n• Accidental — unintentional errors by authorised users or administrators.\n• Structural — failures of hardware, software, or environmental controls.\n• Environmental — natural disasters and infrastructure failures outside the organisation\'s control.',
    quote: 'Threat sources are the intent and method targeted at the intentional exploitation of a vulnerability or a situation and method that may accidentally trigger a vulnerability.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix B, p. B-12',
  },
  'threat-event': {
    term: 'Threat Event',
    plain: 'A threat event is any event or situation that has the potential to cause adverse impacts by exploiting a vulnerability. Threat events can be caused by adversarial threat sources (deliberate attacks) or non-adversarial sources (accidents, natural events, equipment failures). Each event is assessed for its relevance, likelihood of initiation/occurrence, likelihood of adverse impact, and overall likelihood.',
    quote: 'Threat events are events or situations that have the potential for causing undesirable consequences or impact.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix B, p. B-12',
  },
  'vulnerability': {
    term: 'Vulnerability',
    plain: 'A vulnerability is a weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source. Vulnerabilities can be technical (e.g. unpatched software, weak authentication), operational (e.g. inadequate procedures), or management-related (e.g. lack of security oversight). Each vulnerability is rated for its severity — the potential impact if exploited, assuming no mitigating controls.',
    quote: 'A vulnerability is a weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix B, p. B-13',
  },
  'vulnerability-severity': {
    term: 'Vulnerability Severity',
    plain: 'Severity rates how serious a vulnerability is — specifically, the potential impact if it were exploited, assuming no mitigating controls are in place.\n\n• Very High — exploitation would cause catastrophic, organisation-wide harm (e.g. full data destruction, complete service outage).\n• High — exploitation would cause severe harm to critical operations or sensitive data.\n• Moderate — exploitation would cause significant but contained harm; recovery is feasible.\n• Low — exploitation would cause limited, localised harm with manageable consequences.\n• Very Low — exploitation would cause negligible harm with minimal operational impact.\n\nRate severity independently of likelihood — a very common weakness can still have low severity if the potential harm is small.',
    quote: 'Vulnerability severity is related to the exploitability of the vulnerability and the impact that results from exploitation.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix F, Table F-2, p. F-4',
  },
  'likelihood': {
    term: 'Likelihood of Occurrence',
    plain: 'For non-adversarial events, likelihood of occurrence is the probability that a threat event will happen, given the existence of predisposing conditions. Use the qualitative scale:\n\n• Very High — near certainty the event will occur.\n• High — highly likely.\n• Moderate — somewhat likely.\n• Low — unlikely but possible.\n• Very Low — rare; near certainty the event will not occur.',
    quote: 'The likelihood of a non-adversarial threat event is the probability that the event will occur given the existence of predisposing conditions.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix G, Table G-3, p. G-3',
  },
  'likelihood-initiation': {
    term: 'Likelihood of Initiation (Adversarial)',
    plain: 'For adversarial threat events, likelihood of initiation is the probability that a threat source will attempt to initiate a threat event, given the source\'s capability, intent, and targeting.\n\n• Very High — the threat source is highly motivated and capable; attack is near certain.\n• High — strong motivation and capability; attack is very likely.\n• Moderate — some motivation and capability; attack is plausible.\n• Low — limited motivation or capability; attack is possible but unlikely.\n• Very Low — minimal motivation or capability; attack is very unlikely.',
    quote: 'The likelihood of a threat event initiated by an adversarial threat source is determined by the intent and capability of the adversary and whether or not the adversary is targeting the organization or just scanning for any vulnerable target.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix G, Table G-2, p. G-2',
  },
  'likelihood-adverse-impact': {
    term: 'Likelihood of Adverse Impact',
    plain: 'Likelihood of adverse impact is the probability that a threat event, once initiated or occurring, will result in adverse impact — given the existing security controls and vulnerabilities in place.\n\n• Very High — existing controls provide little or no protection; harm is near certain if the event occurs.\n• High — controls are weak; harm is very likely.\n• Moderate — controls offer partial protection; harm is plausible.\n• Low — controls are mostly effective; harm is unlikely.\n• Very Low — strong controls in place; harm is very unlikely even if the event occurs.',
    quote: 'The likelihood that a threat event results in adverse impacts, given the organization\'s existing security controls and vulnerabilities.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix G, Table G-4, p. G-4',
  },
  'overall-likelihood': {
    term: 'Overall Likelihood',
    plain: 'Overall Likelihood combines the two likelihood components into a single value using the NIST lookup table:\n\n  Overall Likelihood = f(Initiation/Occurrence, Adverse Impact)\n\nThe combination is automatically calculated. A high likelihood of initiation but very low likelihood of adverse impact (due to strong controls) can result in a lower overall likelihood — reflecting the protective effect of security controls.',
    quote: 'The overall likelihood of a threat event is derived from both the likelihood that a threat source will initiate a threat event and the likelihood that the threat event, once initiated, will result in adverse impact.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix G, Table G-5, p. G-5',
  },
  'impact': {
    term: 'Impact',
    plain: 'Impact is the magnitude of harm that can be expected to result from a threat event exploiting a vulnerability. It encompasses harm to organisational operations (mission, functions, image, reputation), organisational assets, individuals, other organisations, or the nation.\n\n• Very High — catastrophic effect; organisation cannot carry out its primary mission.\n• High — severe effect; significantly degrades mission capability.\n• Moderate — significant effect; noticeably degrades mission capability.\n• Low — limited effect; some degradation of mission capability.\n• Very Low — negligible effect; little or no impact on mission.',
    quote: 'Impact is the magnitude of harm that can be expected to result from the consequences of unauthorized disclosure of information, unauthorized modification of information, unauthorized destruction of information, or loss of information or information system availability.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix H, Table H-2, p. H-2',
  },
  'risk': {
    term: 'Risk',
    plain: 'Risk is a measure of the extent to which an organisation is threatened by a potential circumstance or event. It is typically expressed as a function of the likelihood that a threat event will occur and the adverse impact if it does.\n\n  Risk = f(Likelihood, Impact)\n\nThe overall risk level guides prioritisation: Very High and High risks typically require immediate treatment; Moderate risks should be addressed; Low and Very Low risks may be accepted with monitoring.',
    quote: 'Risk is a measure of the extent to which an entity is threatened by a potential circumstance or event, and typically a function of: (i) the adverse impacts that would arise if the circumstance or event occurs; and (ii) the likelihood of occurrence.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix B, p. B-11',
  },
  'pervasiveness': {
    term: 'Pervasiveness',
    plain: 'Pervasiveness describes how broadly a predisposing condition applies across the system or organisation.\n\n\u2022 Very High \u2014 the condition is present organisation-wide, affecting virtually all systems and processes.\n\u2022 High \u2014 the condition affects most critical systems or the majority of the workforce.\n\u2022 Moderate \u2014 the condition is present in a significant subset of systems or processes.\n\u2022 Low \u2014 the condition is limited to a few isolated systems or a small team.\n\u2022 Very Low \u2014 the condition exists only in a very narrow, contained context.',
    quote: 'Pervasiveness of predisposing conditions is the extent to which predisposing conditions exist within the specific areas of concern for the risk assessment.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix F, Table F-5, p. F-5',
  },
  'predisposing-taxonomy': {
    term: 'NIST Predisposing Condition Taxonomy (Table F-4)',
    plain: 'These classifications come directly from NIST SP 800-30 Rev. 1, Appendix F, Table F-4. They provide a standardised way to categorise the types of predisposing conditions that can affect an information system.\n\nThe categories are:\n\u2022 Information-Related \u2014 the system handles classified, PII, controlled unclassified, or other specially protected information.\n\u2022 Technical \u2013 Architectural \u2014 the system must comply with specific technical standards, use particular product lines, or allocate security functions to common controls.\n\u2022 Technical \u2013 Functional (networked / multi-user) \u2014 the system is networked and supports multiple concurrent users.\n\u2022 Technical \u2013 Functional (stand-alone / restricted) \u2014 the system is stand-alone or has restricted connectivity.\n\u2022 Operational \u2013 Fixed site \u2014 the system is at a fixed physical location.\n\u2022 Operational \u2013 Mobile / semi-mobile \u2014 the system or its components are mobile (handheld, laptop, vehicle-mounted).\n\u2022 Operational \u2013 Large population with access \u2014 a large or varied group of users has access to the system.\n\nSelecting the applicable categories helps assessors and reviewers understand the structural context of the system being assessed.',
    quote: 'Predisposing conditions are conditions that exist within an organization, a mission/business process, enterprise architecture, or information system that affect (i.e., increase or decrease) the likelihood that threat events, once initiated, result in adverse impacts.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix F, Table F-4, p. F-5',
  },
  'predisposing-condition': {
    term: 'Predisposing Condition',
    plain: 'A predisposing condition is a characteristic of your organisation, its technology, processes, or environment that affects how likely it is that a threat event \u2014 once it occurs or is initiated \u2014 will result in adverse impact. Unlike a vulnerability in a specific system component, a predisposing condition is a broader contextual factor that shapes overall risk.',
    quote: 'Predisposing conditions are conditions that exist within an organization, a mission/business process, enterprise architecture, or information system that affect (i.e., increase or decrease) the likelihood that threat events, once initiated, result in adverse impacts.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix D, Section D.3, p. D-5',
  },
  'predisposing-conditions': {
    term: 'Predisposing Conditions & Pervasiveness',
    plain: `<p>A predisposing condition is any characteristic of your organisation, its technology, processes, or environment that makes a threat event more &mdash; or less &mdash; likely to have adverse impact. They are not vulnerabilities in a specific system component; they are background conditions that shape overall risk.</p>
<p><strong>Conditions that increase risk:</strong></p>
<ul>
  <li>Highly networked architecture with many external connections</li>
  <li>Legacy systems that cannot receive security patches</li>
  <li>High staff turnover leading to inconsistent security awareness</li>
  <li>Reliance on a small number of critical suppliers</li>
  <li>Sensitive data stored and processed in bulk</li>
</ul>
<p><strong>Conditions that decrease risk:</strong></p>
<ul>
  <li>Strong network segmentation limiting lateral movement</li>
  <li>Mature patch management with short remediation timelines</li>
  <li>Regular, tested backups stored offline or off-site</li>
  <li>Comprehensive security awareness training programme</li>
  <li>Dedicated security operations capability with 24/7 monitoring</li>
</ul>
<p><strong>Pervasiveness &mdash; how broadly the condition applies:</strong></p>
<ul>
  <li><strong>Very High</strong> &mdash; condition is present organisation-wide, across all systems and processes.</li>
  <li><strong>High</strong> &mdash; condition affects most critical systems or the majority of the workforce.</li>
  <li><strong>Moderate</strong> &mdash; condition is present in a significant subset of systems or processes.</li>
  <li><strong>Low</strong> &mdash; condition is limited to a few isolated systems or a small team.</li>
  <li><strong>Very Low</strong> &mdash; condition exists only in a very narrow, contained context.</li>
</ul>
<p>Rate pervasiveness honestly &mdash; a small but widely spread weakness (e.g. no MFA on all remote access) is more significant than a severe flaw in a single isolated system.</p>`,
    quote: 'Predisposing conditions are conditions that exist within an organization, a mission/business process, enterprise architecture, or information system that affect (i.e., increase or decrease) the likelihood that threat events, once initiated, result in adverse impacts to organizational operations and assets, individuals, other organizations, or the Nation.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix D, Section D.3, p. D-5',
  },
  'relevance': {
    term: 'Threat Event Relevance',
    plain: 'Relevance describes how credible and applicable a threat event is to your organisation, based on the source of evidence. Work through the levels from top to bottom and pick the highest that applies.\n\n\u2022 Confirmed \u2014 you have directly observed this event or tactic in your own environment.\n\u2022 Expected \u2014 your peers or sector partners have experienced it.\n\u2022 Anticipated \u2014 a trusted source (e.g. CISA, NCSC, ENISA) has reported this as an active threat.\n\u2022 Predicted \u2014 a trusted source has forecast this as an emerging threat.\n\u2022 Possible \u2014 a credible but less authoritative source has described this threat.\n\u2022 N/A \u2014 not currently applicable \u2014 the relevant technology, architecture, or predisposing condition is absent.',
    quote: 'Relevance is a means for organizations to identify, from the list of threat events developed from the risk framing step, those events that are applicable to specific risk assessments.',
    cite: 'NIST SP 800-30 Rev. 1, Appendix E, Table E-4, p. E-9',
  },
};

/** Assessment approaches */
export const ASSESSMENT_APPROACHES = [
  { value: 'qualitative',      label: 'Qualitative (default)',    desc: 'Uses descriptive levels: Very Low, Low, Moderate, High, Very High. Best for communicating risk to decision makers. Easiest to apply.' },
  { value: 'semi-quantitative', label: 'Semi-Quantitative',       desc: 'Uses bins / scales (e.g., 0–100) that translate to qualitative terms. Better supports prioritization and comparison.' },
  { value: 'quantitative',     label: 'Quantitative',             desc: 'Uses numerical probabilities and monetary values. Most rigorous; supports cost-benefit analysis. Requires significant data and expertise.' },
];

/** Analysis approaches */
export const ANALYSIS_APPROACHES = [
  { value: 'threat-oriented',       label: 'Threat-Oriented',       desc: 'Starts with threat sources and events; vulnerabilities identified in context of threats. Good when threat intelligence is available.' },
  { value: 'asset-impact-oriented', label: 'Asset / Impact-Oriented', desc: 'Starts with critical assets and impacts of concern; identifies threats that could lead to those impacts.' },
  { value: 'vulnerability-oriented', label: 'Vulnerability-Oriented', desc: 'Starts with known weaknesses / predisposing conditions; identifies threats that could exploit those vulnerabilities.' },
];

/**
 * Table G-5: Overall Likelihood matrix
 * Rows: likelihood of initiation/occurrence (index 0=Very Low … 4=Very High)
 * Cols: likelihood of adverse impact (index 0=Very Low … 4=Very High)
 */
export const OVERALL_LIKELIHOOD_MATRIX = [
  // VL   L    M    H    VH   ← likelihood of adverse impact
  [  0,   0,   0,   1,   1 ], // initiation = Very Low
  [  0,   0,   1,   2,   2 ], // initiation = Low
  [  0,   1,   2,   2,   3 ], // initiation = Moderate
  [  1,   1,   2,   3,   4 ], // initiation = High
  [  1,   1,   2,   3,   4 ], // initiation = Very High
];

/**
 * Table I-2: Risk level matrix
 * Rows: overall likelihood (index 0=Very Low … 4=Very High)
 * Cols: level of impact (index 0=Very Low … 4=Very High)
 */
export const RISK_MATRIX = [
  // VL   L    M    H    VH   ← impact
  [  0,   0,   0,   0,   0 ], // likelihood = Very Low
  [  0,   0,   1,   1,   2 ], // likelihood = Low
  [  0,   1,   2,   2,   3 ], // likelihood = Moderate
  [  0,   1,   2,   3,   4 ], // likelihood = High
  [  0,   1,   2,   3,   4 ], // likelihood = Very High
];

/** Semi-quantitative ranges for each level */
export const SEMI_QUANT_RANGES = {
  'Very High': '96–100', 'High': '80–95', 'Moderate': '21–79', 'Low': '5–20', 'Very Low': '0–4'
};

