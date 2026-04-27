(()=>{var We=Object.defineProperty;var P=(e,i)=>{for(var a in i)We(e,a,{get:i[a],enumerable:!0})};var $=["Very Low","Low","Moderate","High","Very High"];var W=[{id:"ts-a1",type:"Adversarial",name:"Individual \u2013 Outsider"},{id:"ts-a2",type:"Adversarial",name:"Individual \u2013 Insider"},{id:"ts-a3",type:"Adversarial",name:"Individual \u2013 Trusted Insider"},{id:"ts-a4",type:"Adversarial",name:"Individual \u2013 Privileged Insider"},{id:"ts-a5",type:"Adversarial",name:"Group \u2013 Ad hoc"},{id:"ts-a6",type:"Adversarial",name:"Group \u2013 Established"},{id:"ts-a7",type:"Adversarial",name:"Organization \u2013 Competitor"},{id:"ts-a8",type:"Adversarial",name:"Organization \u2013 Supplier / Partner"},{id:"ts-a9",type:"Adversarial",name:"Organization \u2013 Nation-State"},{id:"ts-b1",type:"Accidental",name:"User \u2013 Accidental Error"},{id:"ts-b2",type:"Accidental",name:"Privileged User / Administrator \u2013 Accidental Error"},{id:"ts-c1",type:"Structural",name:"IT Equipment \u2013 Storage"},{id:"ts-c2",type:"Structural",name:"IT Equipment \u2013 Processing / Compute"},{id:"ts-c3",type:"Structural",name:"IT Equipment \u2013 Communications / Networking"},{id:"ts-c4",type:"Structural",name:"Environmental Controls \u2013 Power Supply"},{id:"ts-c5",type:"Structural",name:"Software \u2013 Operating System"},{id:"ts-c6",type:"Structural",name:"Software \u2013 Application or Service"},{id:"ts-d1",type:"Environmental",name:"Natural Disaster \u2013 Fire"},{id:"ts-d2",type:"Environmental",name:"Natural Disaster \u2013 Flood / Tsunami"},{id:"ts-d3",type:"Environmental",name:"Natural Disaster \u2013 Windstorm / Tornado / Hurricane"},{id:"ts-d4",type:"Environmental",name:"Natural Disaster \u2013 Earthquake"},{id:"ts-d5",type:"Environmental",name:"Infrastructure Failure \u2013 Telecommunications"},{id:"ts-d6",type:"Environmental",name:"Infrastructure Failure \u2013 Electrical Power"}];var F=[{id:"ae-01",name:"Perform network perimeter scanning / reconnaissance",description:"Adversary uses software to scan organizational perimeters to understand the IT infrastructure and improve ability to launch successful attacks."},{id:"ae-02",name:"Open-source (OSINT) discovery of organizational information",description:"Adversary mines publicly accessible information to gather data about organizational systems, business processes, users, or external relationships."},{id:"ae-03",name:"Network sniffing of exposed wired or wireless networks",description:"Adversary with access to exposed data channels uses network sniffing to identify components, resources, and protections."},{id:"ae-04",name:"Reconnaissance and surveillance of targeted organization",description:"Adversary uses various means (scanning, physical observation) over time to examine and assess organizations and ascertain points of vulnerability."},{id:"ae-05",name:"Phishing / spear-phishing attack",description:"Adversary counterfeits communications from a legitimate source to acquire sensitive information (usernames, passwords, SSNs). Often via email or instant messaging."},{id:"ae-06",name:"Deliver known malware (e.g., virus via email)",description:"Adversary uses common delivery mechanisms to install known malware into organizational information systems."},{id:"ae-07",name:"Deliver targeted malware for system control and data exfiltration",description:"Adversary installs malware specifically designed to take control of internal systems, identify sensitive information, exfiltrate it, and conceal these actions."},{id:"ae-08",name:"Deliver malware via removable media (e.g., USB drive)",description:"Adversary places removable media containing malware in locations where employees are likely to find and use them (parking lots, conference exhibits)."},{id:"ae-09",name:"Exploit known vulnerabilities in information systems",description:"Adversary searches for known vulnerabilities in organizational information systems and exploits those vulnerabilities."},{id:"ae-10",name:"Exploit recently discovered / zero-day vulnerabilities",description:"Adversary employs attacks that exploit as yet unpublicized vulnerabilities, based on adversary knowledge of the IT environment."},{id:"ae-11",name:"Exploit vulnerabilities in mobile / remote systems",description:"Adversary takes advantage of mobile or remote systems outside organizational physical and logical protections to compromise them and gather information."},{id:"ae-12",name:"Conduct Denial of Service (DoS) or DDoS attack",description:"Adversary attempts to make Internet-accessible resources unavailable to intended users, or uses multiple compromised systems for a distributed attack."},{id:"ae-13",name:"Conduct brute-force / password-guessing attack",description:"Adversary attempts to gain access by random or systematic guessing of passwords, possibly supported by password-cracking utilities."},{id:"ae-14",name:"Conduct man-in-the-middle (MITM) attack",description:"Adversary intercepts sessions between organizational and external systems, relaying messages while controlling the entire communication."},{id:"ae-15",name:"Conduct social engineering (insider or outsider)",description:"Adversary persuades or tricks individuals within organizations into revealing critical or sensitive information."},{id:"ae-16",name:"Exploit split tunneling on remote connections",description:"Adversary takes advantage of remote systems simultaneously connected to organizational networks and insecure external networks."},{id:"ae-17",name:"Compromise organizational information systems via physical access",description:"Adversary obtains physical access to organizational information systems and makes unauthorized modifications."},{id:"ae-18",name:"Exfiltrate sensitive information via malware",description:"Adversary directs malware on organizational systems to locate and surreptitiously transmit sensitive information to an external destination."},{id:"ae-19",name:"Corrupt or destroy critical organizational data",description:"Adversary implants corrupted data or destroys information system components, preventing organization from carrying out missions."},{id:"ae-20",name:"Supply chain attack (hardware, software, or firmware)",description:"Adversary compromises the design, manufacture, or distribution of software, firmware, or hardware to introduce malicious functionality."},{id:"ae-21",name:"Exploit cloud multi-tenancy or insecure cloud configuration",description:"Adversary exploits multi-tenant cloud environments to observe organizational processes, acquire data, or interfere with operations."},{id:"ae-22",name:"Conduct physical attack on facilities or supporting infrastructure",description:"Adversary conducts physical attack on organizational facilities (e.g., sets fire, sabotages power) or supporting infrastructure."},{id:"ae-23",name:"Web defacement or integrity attack on publicly accessible systems",description:"Adversary makes unauthorized changes to organizational websites or publicly accessible data, causing integrity loss and reputational damage."},{id:"ae-24",name:"Insert subverted individual into organization or privileged position",description:"Adversary places individuals within the organization who carry out actions to cause harm to organizational missions or gain access to privileged functions."}],de=[{id:"ne-01",name:"Accidental disclosure of sensitive information by authorized user",description:"Authorized user inadvertently exposes, discloses, or mishandles critical or sensitive information."},{id:"ne-02",name:"Incorrect privilege settings by administrator",description:"Authorized privileged user or administrator erroneously assigns excessive privileges or sets access requirements too low."},{id:"ne-03",name:"Introduction of vulnerabilities during software development",description:"Due to weaknesses in programming languages or development environments, errors and vulnerabilities are inadvertently introduced into software products."},{id:"ne-04",name:"Disk / storage error causing data corruption or loss",description:"Corrupted storage due to a disk error or pervasive failure due to aging of a set of devices acquired at the same time."},{id:"ne-05",name:"Resource depletion causing degraded performance",description:"Degraded communications or processing performance due to resource depletion or contention, exceeding expected operating parameters."},{id:"ne-06",name:"Hardware failure due to aging or component end-of-life",description:"Failures of IT equipment or environmental controls due to aging, resource depletion, or circumstances exceeding expected operating parameters."},{id:"ne-07",name:"Fire at primary or backup facility",description:"Fire (not due to adversarial activity) makes primary or backup facility inoperable or destroys system backups."},{id:"ne-08",name:"Flood at primary or backup facility",description:"Flood (not due to adversarial activity) at primary or backup facility makes facility inoperable or destroys backups."},{id:"ne-09",name:"Hurricane, tornado, or severe windstorm at primary facility",description:"Severe windstorm at primary facility makes facility inoperable."},{id:"ne-10",name:"Earthquake at primary facility",description:"Earthquake of significant magnitude at primary facility makes facility inoperable."},{id:"ne-11",name:"Power outage or electrical infrastructure failure",description:"Electrical power failure (not due to adversarial activity) affecting organizational information systems and operations."},{id:"ne-12",name:"Telecommunications infrastructure failure",description:"Telecommunications outage (not due to adversarial activity) affecting organizational connectivity and operations."}],Te=[{value:"Confirmed",desc:"The threat event or TTP has been observed by the organization."},{value:"Expected",desc:"The threat event or TTP has been seen by the organization's peers or partners."},{value:"Anticipated",desc:"The threat event or TTP has been reported by a trusted source."},{value:"Predicted",desc:"The threat event or TTP has been predicted by a trusted source."},{value:"Possible",desc:"The threat event or TTP has been described by a somewhat credible source."},{value:"N/A",desc:"Not currently applicable \u2014 technology, architecture, or predisposing conditions are not present."}],Le=[{id:"pc-01",name:"Information-Related",desc:"System handles classified, PII, controlled unclassified, or specially protected information."},{id:"pc-02",name:"Technical \u2013 Architectural",desc:"System must comply with specific technical standards, use particular product lines, or allocate specific security functions to common controls."},{id:"pc-03",name:"Technical \u2013 Functional (networked / multi-user)",desc:"System is networked and supports multiple concurrent users, increasing exposure to remote threats."},{id:"pc-04",name:"Technical \u2013 Functional (stand-alone / restricted)",desc:"System is stand-alone or has restricted network connectivity, limiting but not eliminating some threats."},{id:"pc-05",name:"Operational \u2013 Fixed site",desc:"System is at a fixed physical location with associated physical access controls and environmental dependencies."},{id:"pc-06",name:"Operational \u2013 Mobile / semi-mobile",desc:"System or its components are mobile (handheld, laptop, vehicle-mounted), increasing physical exposure."},{id:"pc-07",name:"Operational \u2013 Large population with access",desc:"A large number of users (or users with varying vetting levels) have access to the system, increasing insider threat surface."}];var Ne={"nist-sp-800-30":{term:"NIST SP 800-30 Rev. 1 \u2014 Guide for Conducting Risk Assessments",plain:"NIST SP 800-30 Rev. 1 is the US federal standard guide for conducting information security risk assessments. It provides a structured process for identifying threats, vulnerabilities, likelihoods, and impacts \u2014 and combining them into a risk level that supports decision-making. This tool implements the full NIST SP 800-30 Rev. 1 workflow.",quote:"The purpose of Special Publication 800-30 is to provide guidance for conducting risk assessments of federal information systems and organizations, amplifying the guidance in Special Publication 800-39.",cite:"NIST SP 800-30 Rev. 1, Chapter 1, Section 1.1, p. 1"},"risk-assessment":{term:"Risk Assessment",plain:"A risk assessment identifies, estimates, and prioritises risk to organisational operations, assets, individuals, and others, resulting from the operation of an information system. It is a key part of an organisation's risk management process and informs decisions about security controls, investments, and acceptable levels of risk.",quote:"Risk assessments identify, estimate, and prioritize risks to organizational operations, organizational assets, individuals, other organizations, and the Nation, resulting from the operation and use of information systems.",cite:"NIST SP 800-30 Rev. 1, Chapter 1, p. 1"},"tier-1":{term:"Risk Assessment Tiers (Tier 1 & 2)",plain:`NIST SP 800-30 defines three tiers of risk assessment:

\u2022 Tier 1 \u2014 Organisation level: supports governance, investment decisions, and organisation-wide risk policies.
\u2022 Tier 2 \u2014 Mission/Business Process level: focuses on protection requirements for specific mission processes and enterprise architecture segments.
\u2022 Tier 3 \u2014 Information System level: supports the RMF activities for individual systems (most common starting point).`,quote:"Risk management is viewed as a holistic activity fully integrated into every aspect of the organization and addresses risk at Tier 1 (organization level), Tier 2 (mission/business process level), and Tier 3 (information system level).",cite:"NIST SP 800-30 Rev. 1, Chapter 2, p. 7"},"tier-3":{term:"Tier 3 \u2014 Information System Level",plain:"A Tier 3 risk assessment focuses on a specific information system. It directly supports the NIST Risk Management Framework (RMF) activities: security categorisation, control selection, implementation, assessment, authorisation, and continuous monitoring. This is the most common starting point for organisations conducting their first NIST 800-30 assessment.",quote:"At Tier 3, risk assessments support the RMF activities including security categorization, security control selection, implementation and assessment, and continuous monitoring.",cite:"NIST SP 800-30 Rev. 1, Chapter 2, p. 9"},"assessment-approach":{term:"Assessment Approach",plain:`The assessment approach determines how risk values are expressed:

\u2022 Qualitative \u2014 uses descriptive scales (Very Low, Low, Moderate, High, Very High). Best for communicating risk to decision-makers and easiest to apply.
\u2022 Semi-Quantitative \u2014 uses numeric bins or scales (e.g. 0\u2013100) that map to qualitative terms. Supports better comparison and prioritisation.
\u2022 Quantitative \u2014 uses numeric probabilities and monetary values. Most rigorous but requires substantial data and expertise.`,quote:"Organizations can conduct risk assessments using qualitative, semi-quantitative, or quantitative methods (or some combination of these methods), depending upon the maturity of their risk management processes.",cite:"NIST SP 800-30 Rev. 1, Chapter 3, p. 20"},"analysis-approach":{term:"Analysis Approach",plain:`The analysis approach sets the starting point for the risk assessment:

\u2022 Threat-Oriented \u2014 starts with threat sources and events, identifying vulnerabilities in the context of those threats. Best when threat intelligence is available.
\u2022 Asset/Impact-Oriented \u2014 starts with critical assets and the impacts of concern, then identifies threats that could cause those impacts.
\u2022 Vulnerability-Oriented \u2014 starts with known weaknesses and predisposing conditions, then identifies threats that could exploit them.`,quote:"Organizations can conduct risk assessments that are threat-oriented, asset/impact-oriented, or vulnerability-oriented depending on the information available to support each type of analysis.",cite:"NIST SP 800-30 Rev. 1, Chapter 3, p. 21"},"risk-tolerance":{term:"Risk Tolerance",plain:"Risk tolerance is the level of risk an organisation is willing to accept. It is set by senior leadership and reflects the organisation's overall risk appetite, mission requirements, and regulatory obligations. Risks that fall below the tolerance threshold may be accepted; those above it require treatment (mitigation, transfer, or avoidance).",quote:"Risk tolerance is the organization's or organizational element's readiness to bear the risk after risk treatment in order to achieve its objectives.",cite:"NIST SP 800-30 Rev. 1, Appendix B, p. B-12"},"threat-source":{term:"Threat Source",plain:`A threat source is the intent and method targeted at the intentional exploitation of a vulnerability, or a situation and method that may accidentally trigger a vulnerability. NIST classifies threat sources into four types:

\u2022 Adversarial \u2014 individuals or groups with malicious intent (insiders, outsiders, competitors, nation-states).
\u2022 Accidental \u2014 unintentional errors by authorised users or administrators.
\u2022 Structural \u2014 failures of hardware, software, or environmental controls.
\u2022 Environmental \u2014 natural disasters and infrastructure failures outside the organisation's control.`,quote:"Threat sources are the intent and method targeted at the intentional exploitation of a vulnerability or a situation and method that may accidentally trigger a vulnerability.",cite:"NIST SP 800-30 Rev. 1, Appendix B, p. B-12"},"threat-event":{term:"Threat Event",plain:"A threat event is any event or situation that has the potential to cause adverse impacts by exploiting a vulnerability. Threat events can be caused by adversarial threat sources (deliberate attacks) or non-adversarial sources (accidents, natural events, equipment failures). Each event is assessed for its relevance, likelihood of initiation/occurrence, likelihood of adverse impact, and overall likelihood.",quote:"Threat events are events or situations that have the potential for causing undesirable consequences or impact.",cite:"NIST SP 800-30 Rev. 1, Appendix B, p. B-12"},vulnerability:{term:"Vulnerability",plain:"A vulnerability is a weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source. Vulnerabilities can be technical (e.g. unpatched software, weak authentication), operational (e.g. inadequate procedures), or management-related (e.g. lack of security oversight). Each vulnerability is rated for its severity \u2014 the potential impact if exploited, assuming no mitigating controls.",quote:"A vulnerability is a weakness in an information system, system security procedures, internal controls, or implementation that could be exploited by a threat source.",cite:"NIST SP 800-30 Rev. 1, Appendix B, p. B-13"},"vulnerability-severity":{term:"Vulnerability Severity",plain:`Severity rates how serious a vulnerability is \u2014 specifically, the potential impact if it were exploited, assuming no mitigating controls are in place.

\u2022 Very High \u2014 exploitation would cause catastrophic, organisation-wide harm (e.g. full data destruction, complete service outage).
\u2022 High \u2014 exploitation would cause severe harm to critical operations or sensitive data.
\u2022 Moderate \u2014 exploitation would cause significant but contained harm; recovery is feasible.
\u2022 Low \u2014 exploitation would cause limited, localised harm with manageable consequences.
\u2022 Very Low \u2014 exploitation would cause negligible harm with minimal operational impact.

Rate severity independently of likelihood \u2014 a very common weakness can still have low severity if the potential harm is small.`,quote:"Vulnerability severity is related to the exploitability of the vulnerability and the impact that results from exploitation.",cite:"NIST SP 800-30 Rev. 1, Appendix F, Table F-2, p. F-4"},likelihood:{term:"Likelihood of Occurrence",plain:`For non-adversarial events, likelihood of occurrence is the probability that a threat event will happen, given the existence of predisposing conditions. Use the qualitative scale:

\u2022 Very High \u2014 near certainty the event will occur.
\u2022 High \u2014 highly likely.
\u2022 Moderate \u2014 somewhat likely.
\u2022 Low \u2014 unlikely but possible.
\u2022 Very Low \u2014 rare; near certainty the event will not occur.`,quote:"The likelihood of a non-adversarial threat event is the probability that the event will occur given the existence of predisposing conditions.",cite:"NIST SP 800-30 Rev. 1, Appendix G, Table G-3, p. G-3"},"likelihood-initiation":{term:"Likelihood of Initiation (Adversarial)",plain:`For adversarial threat events, likelihood of initiation is the probability that a threat source will attempt to initiate a threat event, given the source's capability, intent, and targeting.

\u2022 Very High \u2014 the threat source is highly motivated and capable; attack is near certain.
\u2022 High \u2014 strong motivation and capability; attack is very likely.
\u2022 Moderate \u2014 some motivation and capability; attack is plausible.
\u2022 Low \u2014 limited motivation or capability; attack is possible but unlikely.
\u2022 Very Low \u2014 minimal motivation or capability; attack is very unlikely.`,quote:"The likelihood of a threat event initiated by an adversarial threat source is determined by the intent and capability of the adversary and whether or not the adversary is targeting the organization or just scanning for any vulnerable target.",cite:"NIST SP 800-30 Rev. 1, Appendix G, Table G-2, p. G-2"},"likelihood-adverse-impact":{term:"Likelihood of Adverse Impact",plain:`Likelihood of adverse impact is the probability that a threat event, once initiated or occurring, will result in adverse impact \u2014 given the existing security controls and vulnerabilities in place.

\u2022 Very High \u2014 existing controls provide little or no protection; harm is near certain if the event occurs.
\u2022 High \u2014 controls are weak; harm is very likely.
\u2022 Moderate \u2014 controls offer partial protection; harm is plausible.
\u2022 Low \u2014 controls are mostly effective; harm is unlikely.
\u2022 Very Low \u2014 strong controls in place; harm is very unlikely even if the event occurs.`,quote:"The likelihood that a threat event results in adverse impacts, given the organization's existing security controls and vulnerabilities.",cite:"NIST SP 800-30 Rev. 1, Appendix G, Table G-4, p. G-4"},"overall-likelihood":{term:"Overall Likelihood",plain:`Overall Likelihood combines the two likelihood components into a single value using the NIST lookup table:

  Overall Likelihood = f(Initiation/Occurrence, Adverse Impact)

The combination is automatically calculated. A high likelihood of initiation but very low likelihood of adverse impact (due to strong controls) can result in a lower overall likelihood \u2014 reflecting the protective effect of security controls.`,quote:"The overall likelihood of a threat event is derived from both the likelihood that a threat source will initiate a threat event and the likelihood that the threat event, once initiated, will result in adverse impact.",cite:"NIST SP 800-30 Rev. 1, Appendix G, Table G-5, p. G-5"},impact:{term:"Impact",plain:`Impact is the magnitude of harm that can be expected to result from a threat event exploiting a vulnerability. It encompasses harm to organisational operations (mission, functions, image, reputation), organisational assets, individuals, other organisations, or the nation.

\u2022 Very High \u2014 catastrophic effect; organisation cannot carry out its primary mission.
\u2022 High \u2014 severe effect; significantly degrades mission capability.
\u2022 Moderate \u2014 significant effect; noticeably degrades mission capability.
\u2022 Low \u2014 limited effect; some degradation of mission capability.
\u2022 Very Low \u2014 negligible effect; little or no impact on mission.`,quote:"Impact is the magnitude of harm that can be expected to result from the consequences of unauthorized disclosure of information, unauthorized modification of information, unauthorized destruction of information, or loss of information or information system availability.",cite:"NIST SP 800-30 Rev. 1, Appendix H, Table H-2, p. H-2"},risk:{term:"Risk",plain:`Risk is a measure of the extent to which an organisation is threatened by a potential circumstance or event. It is typically expressed as a function of the likelihood that a threat event will occur and the adverse impact if it does.

  Risk = f(Likelihood, Impact)

The overall risk level guides prioritisation: Very High and High risks typically require immediate treatment; Moderate risks should be addressed; Low and Very Low risks may be accepted with monitoring.`,quote:"Risk is a measure of the extent to which an entity is threatened by a potential circumstance or event, and typically a function of: (i) the adverse impacts that would arise if the circumstance or event occurs; and (ii) the likelihood of occurrence.",cite:"NIST SP 800-30 Rev. 1, Appendix B, p. B-11"},pervasiveness:{term:"Pervasiveness",plain:`Pervasiveness describes how broadly a predisposing condition applies across the system or organisation.

\u2022 Very High \u2014 the condition is present organisation-wide, affecting virtually all systems and processes.
\u2022 High \u2014 the condition affects most critical systems or the majority of the workforce.
\u2022 Moderate \u2014 the condition is present in a significant subset of systems or processes.
\u2022 Low \u2014 the condition is limited to a few isolated systems or a small team.
\u2022 Very Low \u2014 the condition exists only in a very narrow, contained context.`,quote:"Pervasiveness of predisposing conditions is the extent to which predisposing conditions exist within the specific areas of concern for the risk assessment.",cite:"NIST SP 800-30 Rev. 1, Appendix F, Table F-5, p. F-5"},"predisposing-taxonomy":{term:"NIST Predisposing Condition Taxonomy (Table F-4)",plain:`These classifications come directly from NIST SP 800-30 Rev. 1, Appendix F, Table F-4. They provide a standardised way to categorise the types of predisposing conditions that can affect an information system.

The categories are:
\u2022 Information-Related \u2014 the system handles classified, PII, controlled unclassified, or other specially protected information.
\u2022 Technical \u2013 Architectural \u2014 the system must comply with specific technical standards, use particular product lines, or allocate security functions to common controls.
\u2022 Technical \u2013 Functional (networked / multi-user) \u2014 the system is networked and supports multiple concurrent users.
\u2022 Technical \u2013 Functional (stand-alone / restricted) \u2014 the system is stand-alone or has restricted connectivity.
\u2022 Operational \u2013 Fixed site \u2014 the system is at a fixed physical location.
\u2022 Operational \u2013 Mobile / semi-mobile \u2014 the system or its components are mobile (handheld, laptop, vehicle-mounted).
\u2022 Operational \u2013 Large population with access \u2014 a large or varied group of users has access to the system.

Selecting the applicable categories helps assessors and reviewers understand the structural context of the system being assessed.`,quote:"Predisposing conditions are conditions that exist within an organization, a mission/business process, enterprise architecture, or information system that affect (i.e., increase or decrease) the likelihood that threat events, once initiated, result in adverse impacts.",cite:"NIST SP 800-30 Rev. 1, Appendix F, Table F-4, p. F-5"},"predisposing-condition":{term:"Predisposing Condition",plain:"A predisposing condition is a characteristic of your organisation, its technology, processes, or environment that affects how likely it is that a threat event \u2014 once it occurs or is initiated \u2014 will result in adverse impact. Unlike a vulnerability in a specific system component, a predisposing condition is a broader contextual factor that shapes overall risk.",quote:"Predisposing conditions are conditions that exist within an organization, a mission/business process, enterprise architecture, or information system that affect (i.e., increase or decrease) the likelihood that threat events, once initiated, result in adverse impacts.",cite:"NIST SP 800-30 Rev. 1, Appendix D, Section D.3, p. D-5"},"predisposing-conditions":{term:"Predisposing Conditions & Pervasiveness",plain:`<p>A predisposing condition is any characteristic of your organisation, its technology, processes, or environment that makes a threat event more &mdash; or less &mdash; likely to have adverse impact. They are not vulnerabilities in a specific system component; they are background conditions that shape overall risk.</p>
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
<p>Rate pervasiveness honestly &mdash; a small but widely spread weakness (e.g. no MFA on all remote access) is more significant than a severe flaw in a single isolated system.</p>`,quote:"Predisposing conditions are conditions that exist within an organization, a mission/business process, enterprise architecture, or information system that affect (i.e., increase or decrease) the likelihood that threat events, once initiated, result in adverse impacts to organizational operations and assets, individuals, other organizations, or the Nation.",cite:"NIST SP 800-30 Rev. 1, Appendix D, Section D.3, p. D-5"},relevance:{term:"Threat Event Relevance",plain:`Relevance describes how credible and applicable a threat event is to your organisation, based on the source of evidence. Work through the levels from top to bottom and pick the highest that applies.

\u2022 Confirmed \u2014 you have directly observed this event or tactic in your own environment.
\u2022 Expected \u2014 your peers or sector partners have experienced it.
\u2022 Anticipated \u2014 a trusted source (e.g. CISA, NCSC, ENISA) has reported this as an active threat.
\u2022 Predicted \u2014 a trusted source has forecast this as an emerging threat.
\u2022 Possible \u2014 a credible but less authoritative source has described this threat.
\u2022 N/A \u2014 not currently applicable \u2014 the relevant technology, architecture, or predisposing condition is absent.`,quote:"Relevance is a means for organizations to identify, from the list of threat events developed from the risk framing step, those events that are applicable to specific risk assessments.",cite:"NIST SP 800-30 Rev. 1, Appendix E, Table E-4, p. E-9"}},J=[{value:"qualitative",label:"Qualitative (default)",desc:"Uses descriptive levels: Very Low, Low, Moderate, High, Very High. Best for communicating risk to decision makers. Easiest to apply."},{value:"semi-quantitative",label:"Semi-Quantitative",desc:"Uses bins / scales (e.g., 0\u2013100) that translate to qualitative terms. Better supports prioritization and comparison."},{value:"quantitative",label:"Quantitative",desc:"Uses numerical probabilities and monetary values. Most rigorous; supports cost-benefit analysis. Requires significant data and expertise."}],K=[{value:"threat-oriented",label:"Threat-Oriented",desc:"Starts with threat sources and events; vulnerabilities identified in context of threats. Good when threat intelligence is available."},{value:"asset-impact-oriented",label:"Asset / Impact-Oriented",desc:"Starts with critical assets and impacts of concern; identifies threats that could lead to those impacts."},{value:"vulnerability-oriented",label:"Vulnerability-Oriented",desc:"Starts with known weaknesses / predisposing conditions; identifies threats that could exploit those vulnerabilities."}],ue=[[0,0,0,1,1],[0,0,1,2,2],[0,1,2,2,3],[1,1,2,3,4],[1,1,2,3,4]],_=[[0,0,0,0,0],[0,0,1,1,2],[0,1,2,2,3],[0,1,2,3,4],[0,1,2,3,4]];function R(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function Y(){return new Date().toISOString().slice(0,10)}function pe(e){if(!e)return"\u2014";try{return new Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(new Date(e))}catch{return e}}function t(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function B(e){return{"Very High":"very-high",High:"high",Moderate:"moderate",Low:"low","Very Low":"very-low"}[e]??"neutral"}function q(e){return`<span class="badge badge-${B(e)}">${t(e)}</span>`}function me(e,i){if(e.innerHTML="",!i||i.length===0)return;let a=document.createElement("ul");a.className="error-list",i.forEach(l=>{let d=document.createElement("li");d.textContent=l,a.appendChild(d)}),e.appendChild(a)}function Re(){window.scrollTo({top:0,behavior:"smooth"})}function he(e,i,a,l){let d=a.indexOf(e),u=a.indexOf(i);return d<0||u<0?"":a[l[d][u]]}function Q(e,i,a,l){let d=a.indexOf(e),u=a.indexOf(i);return d<0||u<0?"":a[l[d][u]]}function X(e,i,a){let l=new Blob([e],{type:a}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=i,u.click(),setTimeout(()=>URL.revokeObjectURL(d),1e3)}function Ce({id:e,label:i,value:a,placeholder:l,required:d=!1,type:u="input",rows:c=3,suggestions:v=[]}){let s=v.length>0,m=u==="textarea"?`<textarea class="form-control" id="${e}" rows="${c}" placeholder="${l??""}"${d?' aria-required="true"':""}>${a??""}</textarea>`:`<input class="form-control" id="${e}" type="text" value="${a??""}" placeholder="${l??""}" autocomplete="off"${d?' aria-required="true"':""}${s?` aria-autocomplete="list" aria-controls="${e}-suggestions" aria-expanded="false"`:""} />`,y=s?`
    <div class="suggest-panel" id="${e}-suggestions" role="listbox" aria-label="Suggestions" hidden>
      <p class="suggest-panel-heading">Suggestions</p>
      ${v.map((p,h)=>`
        <button type="button" class="suggest-item" role="option" data-suggest-for="${e}" data-value="${t(p.value)}"${p.description?` data-description="${t(p.description)}"`:""}${p.extras?` data-extras='${JSON.stringify(p.extras)}'`:""} tabindex="-1" aria-selected="false">
          <span class="suggest-item-value">${t(p.value)}</span>
          ${p.hint?`<span class="suggest-item-hint">${t(p.hint)}</span>`:""}
        </button>`).join("")}
    </div>`:"";return`
    <div class="form-group suggest-layout${s?" suggest-layout--has-panel":""}">
      <label class="label" for="${e}">${i}</label>
      <div class="suggest-field-row">
        <div class="suggest-field-wrap">${m}</div>
      </div>
      ${y}
    </div>`}function qe(e,i){e.querySelectorAll('[aria-controls$="-suggestions"]').forEach(a=>{let l=a.getAttribute("aria-controls"),d=e.querySelector(`#${l}`);if(!d)return;let u=()=>{a.value.trim()||(d.hidden=!1,a.setAttribute("aria-expanded","true"))},c=()=>{d.hidden=!0,a.setAttribute("aria-expanded","false")};a.addEventListener("focus",u),a.addEventListener("input",()=>{a.value.trim()?c():u()}),a.addEventListener("blur",()=>setTimeout(c,160)),a.addEventListener("keydown",v=>{v.key==="Escape"&&c(),v.key==="ArrowDown"&&!d.hidden&&(v.preventDefault(),d.querySelector(".suggest-item")?.focus())}),d.querySelectorAll(".suggest-item").forEach((v,s,m)=>{let y=()=>{a.value=v.dataset.value;let p=v.dataset.extras?JSON.parse(v.dataset.extras):{};i?.(a.id,v.dataset.value,v.dataset.description??"",p),c(),a.focus()};v.addEventListener("click",y),v.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),y()),p.key==="Escape"&&(c(),a.focus()),p.key==="ArrowDown"&&(p.preventDefault(),m[s+1]?.focus()),p.key==="ArrowUp"&&(p.preventDefault(),s===0?a.focus():m[s-1]?.focus())})})})}function Je(e){return/<[a-z][\s\S]*>/i.test(e)?e:e.split(/\n\n/).map(i=>{let a=i.split(`
`),l=a.filter(d=>/^[•\u2022]\s*/.test(d.trim()));if(l.length>0){let d=a.filter(v=>!/^[•\u2022]\s*/.test(v.trim())&&v.trim()),u=d.length?`<p>${d.join(" ")}</p>`:"",c=l.map(v=>"<li>"+v.replace(/^[•\u2022]\s*/,"").trim().replace(/^(.+?)\s*\u2014\s*/,"<strong>$1</strong> \u2014 ")+"</li>");return`${u}<ul>${c.join("")}</ul>`}return a.some(d=>/^ {2}/.test(d))?a.map(d=>/^ {2}/.test(d)?`<p><code>${d.trim()}</code></p>`:d.trim()?`<p>${d.trim()}</p>`:"").join(""):`<p>${i.trim()}</p>`}).join("")}function Ke(e){let i=Ne[e];if(!i)return;let a=document.getElementById("nist-modal");if(!a)return;a.querySelector(".nist-modal-term").textContent=i.term,a.querySelector(".nist-modal-plain").innerHTML=Je(i.plain),a.querySelector(".nist-modal-quote").textContent=i.quote,a.querySelector(".nist-modal-cite").textContent=i.cite;let l=a.querySelector(".nist-modal-link");l&&(i.link?(l.href=i.link.href,l.textContent=i.link.label,l.hidden=!1):l.hidden=!0),a.showModal()}function T(e){e.querySelectorAll("[data-nist-ref]").forEach(i=>{i._nistWired||(i._nistWired=!0,i.addEventListener("click",a=>{a.stopPropagation(),Ke(i.dataset.nistRef)}))})}var He="nist-800-30-v2";function Z(){try{let e=localStorage.getItem(He);if(e){let i=JSON.parse(e);if(i.version===2)return i}}catch{}return{version:2,assessments:{},assessmentIds:[]}}function Pe(e){try{localStorage.setItem(He,JSON.stringify(e))}catch{}}function ee(){let e=Z();return e.assessmentIds.filter(i=>e.assessments[i]).map(i=>e.assessments[i]).sort((i,a)=>a.updatedAt.localeCompare(i.updatedAt))}function te(e){return Z().assessments[e]??null}function M(e){let i=Z();e.updatedAt=new Date().toISOString(),i.assessments[e.id]||i.assessmentIds.unshift(e.id),i.assessments[e.id]=e,Pe(i)}function Oe(e){let i=Z();delete i.assessments[e],i.assessmentIds=i.assessmentIds.filter(a=>a!==e),Pe(i)}function Me(e="system"){return{id:R(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),currentStep:1,completedSteps:[],tier:e,nis2EntityType:"",name:"",organization:"",assessor:"",date:Y(),systemName:"",systemDescription:"",authorizationBoundary:"",purpose:"",scope:"",assessmentApproach:"qualitative",analysisApproach:"",assumptions:"",constraints:"",riskTolerance:"",threatSources:[],threatEvents:[],vulnerabilities:[],predisposingConditions:[],scenarioId:"",riskNotes:""}}function Ve(e){let i;try{i=JSON.parse(e)}catch{throw new Error("Invalid JSON format")}if(typeof i!="object"||!i.name)throw new Error("Missing required field: name");return i.id=R(),i.updatedAt=new Date().toISOString(),i.createdAt||(i.createdAt=i.updatedAt),M(i),i.id}function ae(e){let i=te(e);if(!i)throw new Error("Assessment not found");return JSON.stringify(i,null,2)}var ve={};P(ve,{render:()=>Ye,validate:()=>Qe});var V=[{id:"ransomware",name:"Ransomware Attack",description:"Pre-filled with threat sources, attack paths, and common vulnerabilities drawn from CISA advisories and ENISA Threat Landscape reports. Each item includes a source reference and a prompt to adapt it to your environment.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',tags:["Cybercriminal","Extortion","High impact"],available:!0,defaults:{name:"Ransomware Risk Assessment",purpose:"Assess the organisation\u2019s exposure to ransomware attacks \u2014 covering the likelihood of successful compromise, the potential operational and financial impact, and the effectiveness of existing controls.",scope:"All IT systems handling business-critical data, including endpoints, servers, backup infrastructure, and internet-facing remote access services (VPN, RDP, cloud portals).",assumptions:"The organisation has at least basic IT infrastructure. Remote access is used by some staff. Cloud or on-premises email is in use. No specialised OT/ICS systems are in scope unless added manually."},threatSources:[{name:"Ransomware Affiliate / Cybercriminal Group",type:"Adversarial",description:"Organised cybercriminal groups or Ransomware-as-a-Service (RaaS) affiliates targeting organisations for financial gain through encryption and/or data-theft extortion. Affiliates typically purchase initial access from brokers.",capability:"High",intent:"High",targeting:"Moderate",notes:"Sources: CISA #StopRansomware advisories; ENISA Threat Landscape 2023; Sophos State of Ransomware 2024. Adapt capability/intent ratings to reflect intelligence on groups active in your sector."},{name:"Nation-State Affiliated Threat Actor",type:"Adversarial",description:"State-sponsored or state-aligned actors deploying ransomware or wiper malware for financial gain or geopolitical disruption. Notable examples: Sandworm (Russia), Lazarus Group (North Korea).",capability:"Very High",intent:"High",targeting:"Low",notes:"Sources: CISA Alert AA24-109A; ENISA Threat Landscape for Critical Infrastructure. Remove this source if your organisation is unlikely to be a nation-state target."},{name:"Malicious or Coerced Insider",type:"Adversarial",description:"A disgruntled, financially motivated, or coerced employee who assists ransomware operators by disabling controls, sharing credentials, or deliberately deploying malware.",capability:"Moderate",intent:"Moderate",targeting:"High",notes:"Sources: Verizon DBIR 2024 \u2014 insider involvement observed in ~19\u202F% of incidents. Assess whether your offboarding, access revocation, and insider threat detection processes are adequate."}],threatEventRefIds:["ae-05","ae-06","ae-07","ae-09","ae-11","ae-13","ae-18","ae-19"],threatEventRelevance:{"ae-05":"Expected","ae-06":"Expected","ae-07":"Anticipated","ae-09":"Anticipated","ae-11":"Expected","ae-13":"Expected","ae-18":"Anticipated","ae-19":"Expected"},threatEventNotes:{"ae-05":"Phishing is the leading ransomware initial access vector (~41\u202F% of attacks). Review whether this applies to your organisation and confirm your email filtering and user awareness training coverage. (Source: CISA Ransomware Guide 2023)","ae-06":"Commodity strains such as LockBit, BlackCat/ALPHV, and Cl0p are delivered via email or malicious websites. Update this note with your specific endpoint protection and mail filtering configuration. (Source: CISA #StopRansomware)","ae-07":'Modern "double-extortion" ransomware exfiltrates data before encrypting. Assess your data classification, egress monitoring, and DLP controls. (Source: ENISA Threat Landscape 2024; CISA Ransomware Guide)',"ae-09":"CISA\u2019s Known Exploited Vulnerabilities (KEV) catalogue lists many CVEs actively used in ransomware attacks. Cross-reference with your asset inventory. (Source: cisa.gov/kev)","ae-11":"Internet-exposed RDP is a top-3 ransomware initial access vector. Verify which remote access services are internet-facing in your environment. (Source: Coveware Ransomware Report Q4 2023)","ae-13":"Credential stuffing and brute force against VPN, RDP, and cloud portals are widely used. Assess your password policy and MFA coverage on internet-facing services. (Source: ENISA Threat Landscape 2023)","ae-18":"Data exfiltration before encryption (double extortion) is now standard. Assess whether sensitive data is identifiable and whether egress traffic is monitored. (Source: IBM Cost of a Data Breach 2024)","ae-19":"Ransomware routinely deletes Volume Shadow Copies and targets backup systems before deploying encryption. Verify offline/immutable backup availability and recovery test results. (Source: CISA Ransomware Guide)"},vulnerabilities:[{name:"Unpatched operating systems and applications",description:"Systems running outdated software with known, exploitable CVEs \u2014 particularly internet-facing services and endpoints. Frequently the primary exploitation path for ransomware initial access.",severity:"High",notes:"Cross-reference your asset inventory with the CISA KEV catalogue (cisa.gov/kev). NCSC best-practice timescales (v2.0, Feb\u202F2024): internet-facing services within 5\u202Fdays, OS and applications within 7\u202Fdays, internal/air-gapped systems within 14\u202Fdays \u2014 all regardless of severity. Where a vulnerability is being actively exploited in the wild, treat it as an IT incident and patch immediately, checking for signs of compromise before applying the update. Adapt the severity rating to reflect your actual patching posture. (Source: NCSC Vulnerability Management guidance \u2014 ncsc.gov.uk/collection/vulnerability-management)"},{name:"No MFA on remote access services",description:"Internet-facing VPN, RDP, and cloud authentication portals without multi-factor authentication are highly susceptible to credential stuffing and brute force \u2014 one of the top-three ransomware initial access methods.",severity:"Very High",notes:"CISA and NSA jointly recommend MFA as the single most effective preventive control against ransomware initial access via compromised credentials. (Source: CISA/NSA Advisory AA21-321A) Adjust severity based on your current MFA coverage."},{name:"Inadequate backup and recovery capability",description:"Backups on network-attached or cloud-synced drives are routinely destroyed by ransomware. Without offline or immutable backups and tested recovery procedures, full restoration may be impossible.",severity:"Very High",notes:"Baseline standard: the 3-2-1-1-0 backup rule (3 copies, 2 different media, 1 offsite, 1 offline/immutable, 0 verified errors on last test). Adapt to reflect your current backup architecture and the date of your last successful recovery test."},{name:"Flat or insufficiently segmented network",description:"Without network segmentation, ransomware can spread laterally from the initial compromise point to all reachable systems, dramatically increasing the blast radius.",severity:"High",notes:"Network segmentation is listed as a Tier-1 control in the CISA Ransomware Guide and aligns with NIST CSF control PR.AC-5. Adapt based on your actual network topology and VLAN/firewall configuration."},{name:"No endpoint detection and response (EDR)",description:"Without EDR, pre-encryption ransomware activity \u2014 lateral movement, credential harvesting, shadow copy deletion \u2014 is unlikely to be detected in time to contain the incident.",severity:"Moderate",notes:"Organisations with EDR detect ransomware attacks significantly faster on average. Adjust severity to reflect your current endpoint tooling, detection coverage, and alert response SLA. (Source: CrowdStrike Global Threat Report 2024)"}],predisposingConditionRefIds:["pc-03","pc-07"],predisposingConditionPervasiveness:{"pc-03":"High","pc-07":"Moderate"},predisposingConditionNotes:{"pc-03":"Networked, multi-user environments are the primary ransomware lateral movement target. Assess how broadly your users and systems are interconnected and whether east\u2013west traffic is monitored.","pc-07":"A large or diverse user population increases phishing and social engineering exposure. Review security awareness training coverage and phishing simulation frequency."}},{id:"bec",name:"Business Email Compromise",description:"Pre-filled guidance for BEC scenarios: account takeover, CEO/CFO impersonation, and fraudulent payment redirection.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>',tags:["Fraud","Social engineering","Financial loss"],available:!1},{id:"invoice-fraud",name:"Invoice & Payment Fraud",description:"Covers invoice manipulation, mandate fraud, and supplier account takeover leading to misdirected payments.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',tags:["Fraud","Financial loss","Supplier risk"],available:!1},{id:"ip-theft",name:"Intellectual Property Theft",description:"Covers insider threat, industrial espionage, and exfiltration of trade secrets or R&D data.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',tags:["Espionage","Insider threat","Competitive"],available:!1},{id:"supply-chain",name:"Supply Chain Attack",description:"Covers software supply chain compromise, third-party vendor risk, and hardware or firmware tampering.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',tags:["Third-party","Software","High impact"],available:!1}];var De={org:{badge:"tier-badge-org",text:"Org / Process"},system:{badge:"tier-badge-system",text:"System"}};function Ye(e,{openAssessment:i}){let a=document.createElement("div"),l=null;function d(f){let n={"Very High":0,High:0,Moderate:0,Low:0,"Very Low":0};return(f.threatEvents??[]).forEach(o=>{let b=o.riskOverride||o.riskLevel;n[b]!==void 0&&n[b]++}),Object.values(n).reduce((o,b)=>o+b,0)?$.slice().reverse().filter(o=>n[o]>0).map(o=>`<span class="badge badge-${B(o)}">${n[o]} ${t(o)}</span>`).join(" "):'<span class="text-muted">No risk items yet</span>'}function u(f){let n=f.tier==="org"?De.org:De.system;return`<span class="tier-badge ${n.badge}">${n.text}</span>`}function c(){let f=ee();a.innerHTML=`
      <div class="flex items-start justify-between flex-wrap gap-4 mb-6">
        <div>
          <h1 class="dashboard-title">Risk Assessment Dashboard</h1>
          <p class="dashboard-desc">
            Conduct a structured cybersecurity risk assessment using a proven methodology published by the
            U.S. National Institute of Standards and Technology \u2014
            <button type="button" class="nist-ref-btn nist-ref-inline" data-nist-ref="nist-sp-800-30" aria-label="What is NIST SP 800-30?">NIST SP 800-30</button>.
            <strong>All data is stored locally in this browser</strong> \u2014 nothing is sent to any server.
          </p>
        </div>
        <div class="flex gap-3 flex-wrap">
          <button id="btn-new" class="btn btn-primary" type="button">+ New Assessment</button>
          <label class="btn btn-secondary" tabindex="0">
            Import JSON
            <input type="file" id="file-import" accept=".json,application/json" class="input-file-hidden" aria-label="Import JSON assessment file" />
          </label>
        </div>
      </div>

      <!-- Panel 1: choose blank vs guided (hidden until New Assessment is clicked) -->
      <div id="mode-panel" class="new-assessment-panel" hidden>
        <h3>How do you want to start?</h3>
        <p>Choose a blank assessment to fill in everything yourself, or start with a guided scenario that pre-fills threat sources, events, and vulnerabilities based on publicly available evidence.</p>
        <div class="mode-select-grid">
          <button type="button" id="btn-mode-guided" class="mode-card mode-card--featured">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <div class="mode-card-label-row">
              <strong>Guided Scenario</strong>
              <span class="badge badge-accent">Recommended</span>
            </div>
            <p>Pre-filled with evidence-based threat data for a specific attack type. Review and adapt each item to your environment.</p>
          </button>
          <button type="button" id="btn-mode-blank" class="mode-card">
            <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
            <strong>Blank Assessment</strong>
            <p>Start from scratch. All fields are empty \u2014 you define the scope, threats, and risks yourself.</p>
          </button>
        </div>
      </div>

      <!-- Panel 2: scenario picker (shown after choosing Guided) -->
      <div id="scenario-panel" class="new-assessment-panel" hidden>
        <div class="panel-nav">
          <button type="button" id="btn-back-to-mode" class="btn btn-ghost btn-sm">\u2190 Back</button>
          <h3>Choose a threat scenario</h3>
        </div>
        <p>Select the attack type that best fits what you want to assess. Each available scenario comes pre-filled with sources, events, and vulnerabilities you can review and adjust.</p>
        <div class="scenario-select-grid">
          ${V.map(r=>`
            <div class="scenario-card ${r.available?"":"scenario-card--disabled"}" ${r.available?`role="button" tabindex="0" data-scenario="${t(r.id)}"`:""} aria-label="${t(r.name)}${r.available?"":" \u2014 coming soon"}">
              <div class="scenario-card-icon">${r.icon??""}</div>
              <div class="scenario-card-body">
                <div class="scenario-card-title-row">
                  <strong>${t(r.name)}</strong>
                  ${r.available?"":'<span class="badge badge-neutral badge-xs">Coming soon</span>'}
                </div>
                <p>${t(r.description)}</p>
                <div class="scenario-tags">
                  ${(r.tags??[]).map(o=>`<span class="scenario-tag">${t(o)}</span>`).join("")}
                </div>
              </div>
            </div>`).join("")}
        </div>
      </div>

      <!-- Panel 3: tier selection (shown after blank or after choosing a scenario) -->
      <div id="tier-panel" class="new-assessment-panel" hidden>
        <div class="panel-nav">
          <button type="button" id="btn-back-to-prev" class="btn btn-ghost btn-sm">\u2190 Back</button>
          <h3>Assessment scope</h3>
        </div>
        <p>Choose the right level for your organisation. You can always start with an Organisation Assessment and add system-level assessments later.</p>
        <div class="tier-select-grid">
          <div class="tier-select-card">
            <div class="flex items-center justify-between">
              <span class="tier-badge tier-badge-org">Tier 1 &amp; 2</span>
              <button type="button" class="nist-ref-btn" data-nist-ref="tier-1" aria-label="NIST definition of Tier 1 and 2">&#9432;</button>
            </div>
            <h4>Organisation Assessment</h4>
            <p>Assess risks across your whole organisation or a key business process. Recommended starting point if this is your first risk assessment.</p>
            <button type="button" class="btn btn-primary btn-sm" id="btn-tier-org">Start Organisation Assessment</button>
          </div>
          <div class="tier-select-card">
            <div class="flex items-center justify-between">
              <span class="tier-badge tier-badge-system">Tier 3</span>
              <button type="button" class="nist-ref-btn" data-nist-ref="tier-3" aria-label="NIST definition of Tier 3">&#9432;</button>
            </div>
            <h4>System Assessment</h4>
            <p>Assess a specific IT system in depth. Best when IT and the business are jointly reviewing a defined system.</p>
            <button type="button" class="btn btn-secondary btn-sm" id="btn-tier-system">Start System Assessment</button>
          </div>
        </div>
      </div>

      <div class="alert alert-info mb-5">
        <strong>Browser storage notice:</strong> Assessments are saved in your browser's localStorage.
        Clearing browser data will permanently delete all assessments. Use <strong>Export JSON</strong>
        on each assessment to back up your work.
      </div>
      ${f.length===0?`
        <div class="card empty-state-card">
          <svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" class="empty-state-icon">
            <path d="M12 2L4 6v6c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6l-8-4z" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <path d="M12 11v4m0-8v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <h2 class="empty-state-title">No assessments yet</h2>
          <p class="empty-state-desc">
            Create your first risk assessment or import an existing one from a JSON file.
          </p>
        </div>`:`
        <div class="assessment-list">
          ${f.map(r=>`
            <div class="assessment-card" data-id="${t(r.id)}">
              <div class="assessment-card-body" role="button" tabindex="0" data-open="${t(r.id)}"
                aria-label="Open assessment: ${t(r.name)}">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 flex-wrap mb-2">
                      <h3 class="assessment-name">${t(r.name)}</h3>
                      ${u(r)}
                      ${r.scenarioId?`<span class="scenario-badge">${t(V.find(o=>o.id===r.scenarioId)?.name??r.scenarioId)}</span>`:""}
                      <span class="badge badge-neutral badge-xs">Step ${r.currentStep??1} of 9</span>
                    </div>
                    ${r.systemName?`<p class="assessment-meta">${r.tier==="org"?"Scope":"System"}: <strong>${t(r.systemName)}</strong></p>`:""}
                    ${r.organization?`<p class="assessment-meta-sm">${t(r.organization)}</p>`:""}
                    <div class="flex gap-2 flex-wrap mb-3">
                      ${d(r)}
                    </div>
                    <p class="assessment-timestamp">
                      Created ${pe(r.createdAt)} &nbsp;\xB7&nbsp; Updated ${pe(r.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
              <div class="assessment-card-actions">
                <button class="btn btn-secondary btn-sm btn-open" data-id="${t(r.id)}" type="button">Open</button>
                <button class="btn btn-secondary btn-sm btn-export" data-id="${t(r.id)}" type="button">Export JSON</button>
                <button class="btn btn-sm btn-outline-danger btn-delete" data-id="${t(r.id)}" type="button"
                  aria-label="Delete assessment ${t(r.name)}">Delete</button>
              </div>
            </div>`).join("")}
        </div>`}`,T(a);function n(r){["mode-panel","scenario-panel","tier-panel"].forEach(o=>{let b=a.querySelector(`#${o}`);b&&(b.hidden=o!==r)}),a.querySelector(`#${r}`)?.scrollIntoView({behavior:"smooth",block:"nearest"})}a.querySelector("#btn-new")?.addEventListener("click",()=>n("mode-panel")),a.querySelector("#btn-mode-blank")?.addEventListener("click",()=>{l=null,n("tier-panel")}),a.querySelector("#btn-mode-guided")?.addEventListener("click",()=>n("scenario-panel")),a.querySelectorAll("[data-scenario]").forEach(r=>{let o=()=>{let b=V.find(A=>A.id===r.dataset.scenario);!b||!b.available||(l=b,v("org"))};r.addEventListener("click",o),r.addEventListener("keydown",b=>{(b.key==="Enter"||b.key===" ")&&o()})}),a.querySelector("#btn-back-to-mode")?.addEventListener("click",()=>n("mode-panel")),a.querySelector("#btn-back-to-prev")?.addEventListener("click",()=>{n(l?"scenario-panel":"mode-panel")}),a.querySelector("#file-import")?.addEventListener("change",s),a.querySelector("#btn-tier-org")?.addEventListener("click",()=>v("org")),a.querySelector("#btn-tier-system")?.addEventListener("click",()=>v("system")),a.querySelectorAll("[data-open]").forEach(r=>{r.addEventListener("click",()=>i(r.dataset.open)),r.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&i(r.dataset.open)})}),a.querySelectorAll(".btn-open").forEach(r=>r.addEventListener("click",()=>i(r.dataset.id))),a.querySelectorAll(".btn-export").forEach(r=>r.addEventListener("click",()=>m(r.dataset.id))),a.querySelectorAll(".btn-delete").forEach(r=>r.addEventListener("click",()=>y(r.dataset.id)))}function v(f){let n=Me(f);l&&h(n,l),M(n),i(n.id)}function s(f){let n=f.target.files?.[0];if(!n)return;let r=new FileReader;r.onload=o=>{try{let b=Ve(o.target.result);c();let A=document.createElement("div");A.className="alert alert-info",A.setAttribute("role","status"),A.textContent="Assessment imported successfully.",a.prepend(A),setTimeout(()=>A.remove(),3e3)}catch(b){let A=document.createElement("div");A.className="alert alert-error",A.setAttribute("role","alert"),A.textContent=`Import failed: ${b.message}`,a.prepend(A)}},r.readAsText(n),f.target.value=""}function m(f){try{let n=ae(f),o=`risk-assessment-${(ee().find(b=>b.id===f)?.name??f).replace(/[^a-z0-9]/gi,"-").toLowerCase()}.json`;X(n,o,"application/json")}catch(n){alert(`Export failed: ${n.message}`)}}function y(f){let n=ee().find(r=>r.id===f);p(`Delete "${n?.name??"this assessment"}"?`,"This will permanently remove all assessment data from your browser. This action cannot be undone.",()=>{Oe(f),c()})}function p(f,n,r){let o=document.createElement("div");o.className="dialog-overlay",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-labelledby","dlg-title"),o.innerHTML=`
      <div class="dialog">
        <h3 id="dlg-title">${t(f)}</h3>
        <p>${t(n)}</p>
        <div class="dialog-actions">
          <button id="dlg-cancel" class="btn btn-secondary" type="button">Cancel</button>
          <button id="dlg-confirm" class="btn btn-danger" type="button">Delete</button>
        </div>
      </div>`,document.body.appendChild(o),o.querySelector("#dlg-cancel").addEventListener("click",()=>o.remove()),o.querySelector("#dlg-confirm").addEventListener("click",()=>{o.remove(),r()}),o.addEventListener("click",b=>{b.target===o&&o.remove()})}function h(f,n){let r=n.defaults??{};r.name&&(f.name=r.name),r.purpose&&(f.purpose=r.purpose),r.scope&&(f.scope=r.scope),r.assumptions&&(f.assumptions=r.assumptions),f.scenarioId=n.id,f.analysisApproach="threat-oriented",f.threatSources=[],f.threatEvents=[],f.vulnerabilities=[],f.predisposingConditions=[]}return c(),a}function Qe(){return{valid:!0,errors:[]}}var fe={};P(fe,{render:()=>Xe,validate:()=>Ze});function Xe(e,i){let a=e.tier==="org",l=a?"tier-1":"tier-3",d=a?"Organisation / Business Process (Tier 1 &amp; 2)":"Information System (Tier 3)",u=a?"Business Process or Scope Name *":"System Name *",c=a?"e.g. Order Fulfilment Process, HR Management, Finance &amp; Payroll":"e.g. Human Resources Management System (HRMS)",v=a?"Process Description":"System Description",s=a?"Brief description of the business process, its purpose and key activities\u2026":"Brief description of the system's purpose, users, and key functions\u2026",m=a?"Scope &amp; Boundaries":"Authorization Boundary",y=a?"What is included and excluded from this assessment? Who and what are in scope?":"Describe the components, interfaces, and services within the authorization boundary\u2026",p=document.createElement("div");p.innerHTML=`
    <div class="card">
      <div class="card-header">
        <div class="card-header-row">
          <div>
            <h2 class="card-title">Step 1 &mdash; Set Up Your Assessment</h2>
            <p class="card-subtitle">
              <span class="nist-term">Identification &amp; Context (Tasks 1-1, 1-2)</span>
              <button type="button" class="nist-ref-btn" data-nist-ref="risk-assessment" aria-label="NIST definition of Risk Assessment">&#9432;</button>
            </p>
          </div>
          <span class="tier-badge ${a?"tier-badge-org":"tier-badge-system"}">${a?"Org / Process \u2014 Tier 1 &amp; 2":"System \u2014 Tier 3"}</span>
        </div>
      </div>
      <div class="card-body">
        <div id="step1-errors" role="alert" aria-live="polite"></div>

        <fieldset class="section-card">
          <legend class="section-title">Assessment Identification</legend>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="label" for="f-name">Assessment Name *</label>
              <input class="form-control" id="f-name" type="text" value="${t(e.name)}"
                placeholder="e.g. Q3 2025 Risk Assessment" autocomplete="off" aria-required="true" />
            </div>
            <div class="form-group">
              <label class="label" for="f-org">Organisation</label>
              <input class="form-control" id="f-org" type="text" value="${t(e.organization)}"
                placeholder="e.g. Acme Corp" autocomplete="organization" />
            </div>
          </div>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="label" for="f-assessor">Assessor(s)</label>
              <input class="form-control" id="f-assessor" type="text" value="${t(e.assessor)}"
                placeholder="e.g. J. Smith, A. Jones" autocomplete="name" />
            </div>
            <div class="form-group">
              <label class="label" for="f-date">Assessment Date</label>
              <input class="form-control" id="f-date" type="date" value="${t(e.date||Y())}" />
            </div>
          </div>
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            ${d}
            <button type="button" class="nist-ref-btn" data-nist-ref="${l}" aria-label="NIST definition">&#9432;</button>
          </legend>
          <div class="info-box mb-4">
            ${a?"This is a <strong>Tier 1/2 assessment</strong> \u2014 it examines risks at the <strong>organisation or business-process level</strong>. This is the right starting point when you want a broad risk overview before drilling into specific systems.":"This is a <strong>Tier 3 assessment</strong> \u2014 it examines risks for a specific <strong>information system</strong>. Tier 3 assessments support security control selection, system authorisation, and continuous monitoring activities."}
          </div>
          ${Ce({id:"f-sysname",label:u,value:t(e.systemName),placeholder:c,required:!0,suggestions:a?[{value:"Whole Organisation",hint:"Assess cybersecurity risk across the entire organisation \u2014 all departments, processes, and supporting IT.",description:"This risk assessment covers all organisational units, business processes, and supporting information technology within the organisation.",extras:{boundary:"In scope: all business units, departments, key business processes, and supporting IT systems. Out of scope: third-party managed services and cloud platforms not under direct organisational control.",scope:"The assessment examines cybersecurity risks across the full organisational structure, including people, processes, technology, and governance arrangements."}},{value:"On-Premises Datacenter",hint:"Scope the assessment to your organisation's on-site datacenter \u2014 servers, storage, networking, and physical infrastructure.",description:"This risk assessment covers the on-premises datacenter environment, including physical servers, storage systems, network infrastructure, and associated management processes.",extras:{boundary:"In scope: all physical and virtual infrastructure within the datacenter perimeter, including servers, storage, networking equipment, and environmental controls. Out of scope: end-user devices and remote office locations.",scope:"The assessment focuses on cybersecurity risks associated with the on-premises datacenter infrastructure, including availability, integrity, and confidentiality of hosted systems and data."}},{value:"ERP System",hint:"Focus on your Enterprise Resource Planning platform and the business processes and data it supports.",description:"This risk assessment covers the Enterprise Resource Planning system, including all integrated modules, underlying databases, interfaces, and dependent business processes.",extras:{boundary:"In scope: all ERP modules, underlying database servers, application interfaces, and administrative access paths. Out of scope: end-user workstations and peripheral applications not directly integrated with the ERP.",scope:"The assessment examines cybersecurity risks to the ERP system, including risks to business-critical data, operational continuity, and integration points with other organisational systems."}}]:[]})}
          <div class="form-group">
            <label class="label" for="f-sysdesc">${v}</label>
            <textarea class="form-control" id="f-sysdesc" rows="3"
              placeholder="${s}">${t(e.systemDescription)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-boundary">${m}</label>
            <textarea class="form-control" id="f-boundary" rows="2"
              placeholder="${y}">${t(e.authorizationBoundary)}</textarea>
          </div>
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title">Assessment Scope &amp; Purpose</legend>
          <div class="form-group">
            <label class="label" for="f-purpose">Purpose *</label>
            <textarea class="form-control" id="f-purpose" rows="3"
              placeholder="Why are you conducting this assessment? (e.g., NIS2 compliance, internal review, following a security incident, preparing for system go-live)\u2026">${t(e.purpose)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-scope">Scope</label>
            <textarea class="form-control" id="f-scope" rows="3"
              placeholder="What is and is not included in this assessment?\u2026">${t(e.scope)}</textarea>
          </div>
        </fieldset>


      </div>
    </div>`,T(p);let h=["name","org","assessor","date","sysname","sysdesc","boundary","purpose","scope"],f={name:"name",org:"organization",assessor:"assessor",date:"date",sysname:"systemName",sysdesc:"systemDescription",boundary:"authorizationBoundary",purpose:"purpose",scope:"scope"};return h.forEach(n=>{let r=p.querySelector(`#f-${n}`);r&&(r.addEventListener("input",()=>i({[f[n]]:r.value})),r.addEventListener("change",()=>i({[f[n]]:r.value})))}),qe(p,(n,r,o,b)=>{let A=n.replace("f-",""),x=f[A],w={};if(x&&(w[x]=r),n==="f-sysname"){if(o){let E=p.querySelector("#f-sysdesc");E&&!E.value.trim()&&(E.value=o,w.systemDescription=o)}if(b?.boundary){let E=p.querySelector("#f-boundary");E&&!E.value.trim()&&(E.value=b.boundary,w.authorizationBoundary=b.boundary)}if(b?.scope){let E=p.querySelector("#f-scope");E&&!E.value.trim()&&(E.value=b.scope,w.scope=b.scope)}}i(w,!0)}),p}function Ze(e){let i=[];return e.name?.trim()||i.push("Assessment Name is required."),e.systemName?.trim()||i.push(e.tier==="org"?"Business Process / Scope Name is required.":"System Name is required."),e.purpose?.trim()||i.push("Purpose is required."),{valid:i.length===0,errors:i}}var ge={};P(ge,{render:()=>et,validate:()=>tt});function et(e,i){let a=!!e.scenarioId,l=J.find(h=>h.value==="qualitative"),d=J.filter(h=>h.value!=="qualitative"),u=h=>h.map(f=>`
    <label class="radio-option ${e.assessmentApproach===f.value?"selected":""}">
      <input type="radio" name="assessmentApproach" value="${t(f.value)}"
        ${e.assessmentApproach===f.value?"checked":""} />
      <div>
        <strong>${t(f.label)}</strong>
        <p>${t(f.desc)}</p>
      </div>
    </label>`).join(""),c=a?`
    <div class="radio-group" id="approach-radios">
      ${u([l])}
    </div>
    <details class="advanced-options">
      <summary class="advanced-options-toggle">Show advanced approaches (semi-quantitative &amp; quantitative)</summary>
      <div class="radio-group mt-3" id="approach-radios-advanced">
        ${u(d)}
      </div>
    </details>`:`
    <div class="radio-group" id="approach-radios">
      ${u(J)}
    </div>`,v=K.find(h=>h.value==="threat-oriented"),s=K.filter(h=>h.value!=="threat-oriented"),m=h=>h.map(f=>`
    <label class="radio-option ${e.analysisApproach===f.value?"selected":""}">
      <input type="radio" name="analysisApproach" value="${t(f.value)}"
        ${e.analysisApproach===f.value?"checked":""} />
      <div>
        <strong>${t(f.label)}</strong>
        <p>${t(f.desc)}</p>
      </div>
    </label>`).join(""),y=a?`
    <div class="radio-group" id="analysis-radios">
      ${m([v])}
    </div>
    <details class="advanced-options">
      <summary class="advanced-options-toggle">Show other starting points (asset / impact-oriented &amp; vulnerability-oriented)</summary>
      <div class="radio-group mt-3" id="analysis-radios-advanced">
        ${m(s)}
      </div>
    </details>`:`
    <div class="radio-group" id="analysis-radios">
      ${m(K)}
    </div>`,p=document.createElement("div");return p.innerHTML=`
    <div class="card">
      <div class="card-header">
        <div class="card-header-row-center">
          <div>
            <h2 class="card-title">Step 2 \u2014 Risk Model &amp; Approach</h2>
            <p class="card-subtitle">Define how risk will be measured and analyzed (Tasks 1-3, 1-4, 1-5)</p>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" data-info-toggle="#step2-info" aria-expanded="false">\u25BC Show info</button>
        </div>
        <div id="step2-info" hidden>
          <div class="info-box mt-3">
            <p>The <strong>risk model</strong> defines the key factors used to assess risk and the relationships among those factors.
            NIST SP 800-30 R1 uses threat sources, threat events, vulnerabilities, likelihood, and impact as its model components
            (see Figure 3: Generic Risk Model).</p>
            <p>The <strong>assessment approach</strong> determines whether risk is expressed using descriptive terms (qualitative),
            numeric scales (semi-quantitative), or numerical probabilities and monetary values (quantitative). Qualitative is the
            recommended default for most Tier 3 assessments.</p>
          </div>
        </div>
      </div>
      <div class="card-body">

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            How should risk values be expressed?
            <span class="nist-term">Assessment Approach (Task 1-3)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="assessment-approach" aria-label="NIST definition">&#9432;</button>
          </legend>
          <p class="text-muted mb-4">Select how risk levels will be expressed in this assessment. <strong>Qualitative is recommended</strong> for most organisations.</p>
          ${c}
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            What is the starting point for identifying risks?
            <span class="nist-term">Analysis Approach (Task 1-4)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="analysis-approach" aria-label="NIST definition of Analysis Approach">&#9432;</button>
          </legend>
          <p class="text-muted mb-4">Select the starting point for the analysis.</p>
          ${y}
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title">Key Assumptions, Constraints &amp; Risk Tolerance (Task 1-5)</legend>
          <div class="form-group">
            <label class="label" for="f-assumptions">Key Assumptions</label>
            <textarea class="form-control" id="f-assumptions" rows="4"
              placeholder="List any key assumptions made during this assessment (e.g., all employees have completed security awareness training, no third-party access to the system)...">${t(e.assumptions)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-constraints">Constraints</label>
            <textarea class="form-control" id="f-constraints" rows="4"
              placeholder="List any constraints that limit the assessment scope or methodology (e.g., limited access to system documentation, time constraints, assessor expertise limitations)...">${t(e.constraints)}</textarea>
          </div>
          <div class="form-group">
              <label class="label" for="f-risktol">
                Organisational Risk Tolerance *
                <button type="button" class="nist-ref-btn" data-nist-ref="risk-tolerance" aria-label="NIST definition of Risk Tolerance">&#9432;</button>
              </label>
            <select class="form-control" id="f-risktol" aria-required="true">
              <option value="">\u2014 Select \u2014</option>
              ${["Very Low","Low","Moderate","High","Very High"].map(h=>`<option value="${t(h)}" ${e.riskTolerance===h?"selected":""}>${t(h)}</option>`).join("")}
            </select>

            <div class="warn-box mt-3">
              <strong>Choose carefully \u2014 this has real consequences.</strong>
              Risk tolerance determines the threshold at which identified risks require action. A higher tolerance means
              more risks are accepted without a response. If a security incident later occurs, regulators (including under
              NIS2) may review this assessment. A stated tolerance of <em>High</em> or <em>Very High</em> \u2014 combined
              with a lack of corresponding controls \u2014 can be used as evidence that the organisation knowingly accepted
              significant risk without acting. Set this to reflect genuine board or senior-management policy, not
              aspiration.
            </div>

            <details class="advanced-options mt-3">
              <summary class="advanced-options-toggle">What do the levels mean?</summary>
              <div class="risk-tol-guide mt-3">
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-vl">Very Low</span>
                  <div>
                    <strong>Near-zero tolerance.</strong> Even low-likelihood or low-impact risks require a documented
                    response. Typical for critical-infrastructure operators, financial institutions, or organisations
                    processing highly sensitive personal data. Aligns with the strictest interpretation of NIS2 Article 21
                    obligations.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-l">Low</span>
                  <div>
                    <strong>Conservative.</strong> The organisation accepts only residual risks after proportionate
                    controls are in place. Most risks rated <em>Low</em> or above trigger a treatment plan. A reasonable
                    default for organisations with NIS2 obligations.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-m">Moderate</span>
                  <div>
                    <strong>Balanced.</strong> Low risks may be accepted; Medium risks are reviewed and treated where
                    cost-effective; High and Very High risks always require action. Appropriate for organisations where
                    cybersecurity risk is significant but not existential. Per NIST SP 800-30, this is a common starting
                    point for Tier 1/2 assessments.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-h">High</span>
                  <div>
                    <strong>Risk-accepting.</strong> Only High and Very High risks are systematically treated. Use this
                    level only if senior management has explicitly accepted it and documented the rationale \u2014 especially
                    if your organisation is subject to NIS2, GDPR, or sector-specific regulation. Regulators will
                    scrutinise this choice in the event of an incident.
                  </div>
                </div>
                <div class="risk-tol-item">
                  <span class="risk-tol-badge risk-tol-vh">Very High</span>
                  <div>
                    <strong>Near-unlimited tolerance.</strong> Only the most severe, near-certain risks prompt a
                    response. This level is rarely appropriate for any regulated or public-facing organisation. Selecting
                    this without a compelling, documented justification creates significant legal and reputational
                    exposure.
                  </div>
                </div>
              </div>
            </details>
          </div>
        </fieldset>

      </div>
    </div>`,T(p),p.querySelectorAll('[name="assessmentApproach"]').forEach(h=>{h.addEventListener("change",()=>{i({assessmentApproach:h.value}),p.querySelectorAll('[name="assessmentApproach"]').forEach(f=>{f.closest(".radio-option")?.classList.toggle("selected",f.value===h.value)})})}),p.querySelectorAll('[name="analysisApproach"]').forEach(h=>{h.addEventListener("change",()=>{i({analysisApproach:h.value}),p.querySelectorAll('[name="analysisApproach"]').forEach(f=>{f.closest(".radio-option")?.classList.toggle("selected",f.value===h.value)})})}),p.querySelector("#f-assumptions")?.addEventListener("input",h=>i({assumptions:h.target.value})),p.querySelector("#f-constraints")?.addEventListener("input",h=>i({constraints:h.target.value})),p.querySelector("#f-risktol")?.addEventListener("change",h=>i({riskTolerance:h.target.value},!0)),p}function tt(e){return e.riskTolerance?{valid:!0,errors:[]}:{valid:!1,errors:["Organisational Risk Tolerance is required. Select a level before continuing."]}}var ye={};P(ye,{render:()=>rt,validate:()=>ot});var G={refId:"ts-a6",capability:"High",intent:"High",targeting:"Moderate",notes:`Ransomware-as-a-Service (RaaS) affiliates and organised cybercriminal groups targeting organisations for financial gain through encryption and data-theft extortion.

Capability \u2014 HIGH: RaaS platforms lower the technical barrier by providing ready-made tooling, infrastructure, and support to affiliates. CISA #StopRansomware advisories document groups such as LockBit, BlackCat/ALPHV, and Cl0p operating with sophisticated, multi-stage attack chains including initial access brokering, credential harvesting, lateral movement, and double-extortion. ENISA Threat Landscape 2024 ranks organised cybercriminal groups among the highest-capability non-state actors.

Intent \u2014 HIGH: Financial motivation is strong and consistent. ENISA TL 2024 identifies ransomware as the top cybersecurity threat for the fifth consecutive year, driven by predictable monetisation through ransom payments and data-sale markets. CISA notes that RaaS groups actively reinvest profits to improve tooling and recruit affiliates.

Targeting \u2014 MODERATE: Most RaaS affiliates use opportunistic targeting \u2014 scanning for exposed services (RDP, VPN) and unpatched systems \u2014 rather than singling out specific organisations. ENISA TL 2024 notes that while small and medium-sized organisations are frequently hit due to weaker defences, highly specific targeting is more typical of nation-state actors. Adjust to HIGH if your sector (healthcare, critical infrastructure, finance) is explicitly named in CISA advisories.

Sources: CISA #StopRansomware (cisa.gov/stopransomware); ENISA Threat Landscape 2024 (enisa.europa.eu); CISA/NSA Advisory AA21-321A.`},at=["Adversarial","Accidental","Structural","Environmental"],it={Adversarial:"Intentional attackers",Accidental:"Accidents and errors",Structural:"Hardware and software failures",Environmental:"Natural disasters and infrastructure failures"},st={Adversarial:"Individuals, groups, or organisations that intentionally target and exploit information systems.",Accidental:"Errors and omissions by authorised users \u2014 no malicious intent.",Structural:"Failures of IT equipment, environmental controls, or software components.",Environmental:"Natural disasters and infrastructure failures outside organisational control."};function nt(e){return e==="Adversarial"}function ie(e,i,a){return`<select class="form-control form-control-sm" name="${t(e)}" ${a?"disabled":""} aria-label="${t(e)}">
    <option value="">\u2014 Select \u2014</option>
    ${$.map(l=>`<option value="${t(l)}" ${i===l?"selected":""}>${t(l)}</option>`).join("")}
  </select>`}function rt(e,i){let a=e.threatSources??[];function l(p){return a.find(h=>h.id===p)}function d(p){i({threatSources:p},!0)}function u(p){a.some(h=>h.refId===p.id)||d([...a,{id:R(),refId:p.id,name:p.name,type:p.type,isCustom:!1,inScope:!0,capability:"",intent:"",targeting:"",rangeOfEffects:"",notes:""}])}function c(p){d([...a,{id:R(),refId:null,name:"",type:p,isCustom:!0,inScope:!0,capability:"",intent:"",targeting:"",rangeOfEffects:"",notes:""}])}function v(p){d(a.filter(h=>h.id!==p))}function s(p,h){let f=(e.threatSources??[]).map(n=>n.id===p?{...n,...h}:n);i({threatSources:f})}let m=document.createElement("div");function y(){let p=e.scenarioId==="ransomware",h=W.find(n=>n.id===G.refId),f=p&&h?(e.threatSources??[]).some(n=>n.refId===h.id):!1;m.innerHTML=`
      <div class="card">
        <div class="card-header">
          <div class="card-header-row-center">
            <div>
              <h2 class="card-title">Step 3 &mdash; Who or What Could Cause Harm?</h2>
              <p class="card-subtitle">
                <span class="nist-term">Threat Sources (Task 2-1 &mdash; Table D-2)</span>
                <button type="button" class="nist-ref-btn" data-nist-ref="threat-source" aria-label="NIST definition of Threat Source">&#9432;</button>
              </p>
            </div>
          </div>
          <div class="info-box mt-3">
            Select every type of threat source that is relevant to your organisation. For intentional attackers,
            rate their capability, intent, and targeting. You can add custom sources if your situation is not covered by the list.
          </div>
        </div>
        <div class="card-body">
          ${at.map(n=>{let r=W.filter(w=>w.type===n),o=a.filter(w=>w.type===n),b=o.filter(w=>!w.isCustom).map(w=>w.refId),A=n==="Adversarial"&&p&&h,x=A?`
              <div class="suggest-panel" aria-label="Suggested threat source">
                <p class="suggest-panel-heading">Suggested for ransomware</p>
                <button type="button" class="suggest-item${f?" suggest-item--added":""}"
                  id="btn-add-ransomware-src"
                  ${f?'disabled aria-disabled="true"':""}>
                  <span class="suggest-item-value">${t(h.name)}</span>
                  <span class="suggest-item-hint">Capability: High &middot; Intent: High &middot; Targeting: Moderate${f?" &middot; &#10003; Added":""}</span>
                </button>
              </div>`:"";return`
              <details class="section-card collapsible-section" ${n==="Adversarial"?"open":""}>
                <summary class="section-title collapsible-summary">
                  <span>
                    ${t(it[n])}
                    <small class="nist-term ml-2">${t(n)} Threat Sources</small>
                    <button type="button" class="nist-ref-btn" data-nist-ref="threat-source" aria-label="NIST definition of Threat Source">&#9432;</button>
                  </span>
                  <span class="badge badge-neutral">${o.length} selected</span>
                </summary>
                <p class="text-muted mb-4">${t(st[n])}</p>

                <div class="${A?"suggest-layout suggest-layout--has-panel":""}">
                  <div class="checkbox-grid mb-4">
                    ${r.map(w=>`
                      <label class="checkbox-option ${b.includes(w.id)?"checked":""}">
                        <input type="checkbox" data-add-ref="${t(w.id)}" ${b.includes(w.id)?"checked":""} />
                        <span>${t(w.name)}</span>
                      </label>`).join("")}
                  </div>
                  ${x}
                </div>

                ${o.map(w=>`
                  <div class="source-detail-card" data-src-id="${t(w.id)}">
                    <div class="source-detail-header">
                      ${w.isCustom?`
                        <input type="text" class="form-control form-control-sm source-name-input"
                          value="${t(w.name)}" placeholder="Custom source name\u2026" data-src-field="name" data-src-id="${t(w.id)}" />
                      `:`<strong>${t(w.name)}</strong>`}
                      <button type="button" class="btn btn-sm btn-remove-src" data-src-id="${t(w.id)}"
                        class="btn-remove"
                        aria-label="Remove ${t(w.name)}">\u2715 Remove</button>
                    </div>
                    <div class="source-detail-fields">
                      ${nt(n)?`
                        <div class="form-row form-row-3">
                          <div class="form-group">
                            <label class="label">Capability</label>
                            ${ie("capability",w.capability,!1)}
                          </div>
                          <div class="form-group">
                            <label class="label">Intent</label>
                            ${ie("intent",w.intent,!1)}
                          </div>
                          <div class="form-group">
                            <label class="label">Targeting</label>
                            ${ie("targeting",w.targeting,!1)}
                          </div>
                        </div>`:`
                        <div class="form-row form-row-2">
                          <div class="form-group">
                            <label class="label">Range of Effects</label>
                            ${ie("rangeOfEffects",w.rangeOfEffects,!1)}
                          </div>
                        </div>`}
                      <div class="form-group">
                        <label class="label">Notes</label>
                        <textarea class="form-control form-control-sm" rows="2"
                          data-src-field="notes" data-src-id="${t(w.id)}"
                          placeholder="Optional notes about this threat source\u2026">${t(w.notes)}</textarea>
                      </div>
                    </div>
                  </div>`).join("")}

                <button type="button" class="btn btn-secondary btn-sm btn-add-custom mt-2" data-type="${t(n)}">+ Add Custom ${t(n)} Source</button>
              </details>`}).join("")}
        </div>
      </div>`,T(m),m.querySelector("#btn-add-ransomware-src")?.addEventListener("click",()=>{!h||f||d([...e.threatSources??[],{id:R(),refId:h.id,name:h.name,type:h.type,isCustom:!1,inScope:!0,capability:G.capability,intent:G.intent,targeting:G.targeting,rangeOfEffects:"",notes:G.notes}])}),m.querySelectorAll("[data-add-ref]").forEach(n=>{n.addEventListener("change",()=>{let r=W.find(o=>o.id===n.dataset.addRef);r&&(n.checked?u(r):v(a.find(o=>o.refId===r.id)?.id))})}),m.querySelectorAll(".btn-remove-src").forEach(n=>{n.addEventListener("click",()=>v(n.dataset.srcId))}),m.querySelectorAll(".btn-add-custom").forEach(n=>{n.addEventListener("click",()=>c(n.dataset.type))}),m.querySelectorAll("[data-src-field]").forEach(n=>{n.addEventListener("input",()=>s(n.dataset.srcId,{[n.dataset.srcField]:n.value})),n.addEventListener("change",()=>s(n.dataset.srcId,{[n.dataset.srcField]:n.value}))}),m.querySelectorAll(".source-detail-card select").forEach(n=>{n.addEventListener("change",()=>{let r=n.closest("[data-src-id]");r&&s(r.dataset.srcId,{[n.name]:n.value})})})}return m._draw=y,y(),m}function ot(e){return(e.threatSources??[]).filter(l=>l.inScope).length===0?{valid:!1,errors:["Select at least one threat source before continuing."]}:{valid:!0,errors:[]}}var be={};P(be,{render:()=>lt,validate:()=>ct});function lt(e,i){let a=e.threatSources??[];function l(n){let r=(e.threatEvents??[]).length>0;Object.assign(e,{threatEvents:n});let o=n.length>0;i({threatEvents:n},!1,r!==o)}function d(n,r){let o=(e.threatEvents??[]).map(b=>b.id===n?{...b,...r}:b);i({threatEvents:o})}function u(n,r,o){let b=(e.threatEvents??[]).find(x=>x.id===n);if(!b)return;let A=o?[...new Set([...b.threatSourceIds,r])]:b.threatSourceIds.filter(x=>x!==r);d(n,{threatSourceIds:A})}function c(n){return a.length===1?[a[0].id]:n.threatSourceIds??[]}function v(n){let r=c(n);return`
      <div class="event-detail-card" data-ev-id="${t(n.id)}">
        <div class="source-detail-header">
          ${n.isCustom?`
            <input type="text" class="form-control form-control-sm" value="${t(n.name)}"
              placeholder="Custom event name\u2026" data-ev-field="name" data-ev-id="${t(n.id)}" />
          `:`<strong class="text-sm">${t(n.name)}</strong>`}
          <button type="button" class="btn btn-sm btn-remove-ev" data-ev-id="${t(n.id)}"
            aria-label="Remove event ${t(n.name)}">\u2715 Remove</button>
        </div>
        ${n.isCustom?`
          <div class="form-group mt-3">
            <label class="label">Description</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-ev-field="description" data-ev-id="${t(n.id)}"
              placeholder="Describe this threat event\u2026">${t(n.description)}</textarea>
          </div>`:n.description?`
          <p class="text-muted text-sm mt-2 mb-3">${t(n.description)}</p>`:""}
        <div class="form-row form-row-2 mt-3">
          <div class="form-group">
            <label class="label">
              Relevance
              <button type="button" class="nist-ref-btn" data-nist-ref="relevance" aria-label="What do the relevance levels mean?">&#9432;</button>
            </label>
            <select class="form-control form-control-sm" data-ev-field="relevance" data-ev-id="${t(n.id)}">
              <option value="">\u2014 Select \u2014</option>
              ${Te.map(o=>`<option value="${t(o.value)}" ${n.relevance===o.value?"selected":""}
                  title="${t(o.desc)}">${t(o.value)}</option>`).join("")}
            </select>
          </div>
          ${a.length>0?`
          <div class="form-group">
            <label class="label">Linked Threat Sources</label>
            <div class="source-multiselect">
              ${a.map(o=>`
                <label class="checkbox-option checkbox-option-sm ${r.includes(o.id)?"checked":""}">
                  <input type="checkbox" data-src-link="${t(o.id)}" data-ev-id="${t(n.id)}"
                    ${r.includes(o.id)?"checked":""} />
                  <span>${t(o.name||"Unnamed source")}</span>
                </label>`).join("")}
            </div>
          </div>`:""}
        </div>
        <div class="form-group mt-2">
          <label class="label">Notes</label>
          <textarea class="form-control form-control-sm" rows="2"
            data-ev-field="notes" data-ev-id="${t(n.id)}"
            placeholder="Optional notes\u2026">${t(n.notes)}</textarea>
        </div>
      </div>`}function s(n,r,o,b,A=!0){let x=e.threatEvents??[],w=x.filter(k=>k.type===b&&!k.isCustom).map(k=>k.refId),E=x.filter(k=>k.type===b),N=V.find(k=>k.id===e.scenarioId)??null,H=b==="adversarial"&&N?.threatEventRefIds?.length>0,g=H?(()=>{let k=F;return`
        <div class="suggest-panel" aria-label="Suggested threat events">
          <p class="suggest-panel-heading">Suggested for ransomware</p>
          ${(N.threatEventRefIds??[]).map(z=>k.find(S=>S.id===z)).filter(Boolean).map(z=>{let S=w.includes(z.id);return`
              <button type="button" class="suggest-item${S?" suggest-item--added":""}"
                data-suggest-event="${t(z.id)}"
                ${S?'disabled aria-disabled="true"':""}>
                <span class="suggest-item-value">${t(z.name)}</span>
                <span class="suggest-item-hint">Relevance: ${t(N.threatEventRelevance?.[z.id]??"\u2014")}</span>
              </button>`}).join("")}
        </div>`})():"";return`
      <details class="section-card collapsible-section" ${A?"open":""}>
        <summary class="section-title collapsible-summary">
          <span>${t(n)} <small class="nist-term">&mdash; ${t(r)}</small></span>
          <span class="badge badge-neutral">${E.length} selected</span>
        </summary>

        ${a.length===0?`
          <div class="alert alert-warning mb-4">
            <strong>Tip:</strong> No threat sources were defined in Step 3.
            Events can still be selected, but linking them to sources won\u2019t be possible.
          </div>`:""}

        <div class="${H?"suggest-layout suggest-layout--has-panel":""}">
          <div class="checkbox-grid mb-4">
            ${o.map(k=>`
              <label class="checkbox-option ${w.includes(k.id)?"checked":""}">
                <input type="checkbox" data-add-event="${t(k.id)}" data-event-type="${t(b)}"
                  ${w.includes(k.id)?"checked":""} title="${t(k.description)}" />
                <span>${t(k.name)}</span>
              </label>`).join("")}
          </div>
          ${g}
        </div>

        ${E.map(k=>v(k)).join("")}

        <button type="button" class="btn btn-secondary btn-sm btn-add-custom-ev mt-2"
          data-event-type="${t(b)}">
          + Add Custom ${t(b==="adversarial"?"Adversarial":"Non-Adversarial")} Event
        </button>
      </details>`}let m=document.createElement("div");function y(n){let r=n.dataset.evId;n.querySelectorAll("[data-ev-field]").forEach(o=>{o.addEventListener("input",()=>d(r,{[o.dataset.evField]:o.value})),o.addEventListener("change",()=>d(r,{[o.dataset.evField]:o.value}))}),n.querySelector(".btn-remove-ev")?.addEventListener("click",()=>p(r,n)),n.querySelectorAll("[data-src-link]").forEach(o=>{o.addEventListener("change",()=>u(r,o.dataset.srcLink,o.checked))}),T(n)}function p(n,r){let b=(e.threatEvents??[]).find(A=>A.id===n)?.refId;if(l((e.threatEvents??[]).filter(A=>A.id!==n)),r.remove(),b){let A=m.querySelector(`[data-add-event="${CSS.escape(b)}"]`);A&&(A.checked=!1,A.closest(".checkbox-option")?.classList.remove("checked"));let x=m.querySelector(`[data-suggest-event="${CSS.escape(b)}"]`);if(x){x.disabled=!1,x.removeAttribute("aria-disabled"),x.classList.remove("suggest-item--added");let w=x.querySelector(".suggest-item-hint")}}}function h(n,r){let o=r.querySelector(".btn-add-custom-ev");o.insertAdjacentHTML("beforebegin",v(n)),y(o.previousElementSibling)}function f(){m.innerHTML=`
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Step 4 &mdash; What Harmful Events Could Happen?</h2>
          <p class="card-subtitle">
            <span class="nist-term">Threat Events (Task 2-2 &mdash; Tables E-2, E-3)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="threat-event" aria-label="NIST definition of Threat Event">&#9432;</button>
          </p>
        </div>
        <div class="card-body">
          <div class="info-box mb-5">
            Select every event that could realistically occur in your environment. For each event selected you will
            rate likelihood and impact in the next two steps. You can add custom events if your situation is
            not covered by the NIST taxonomy.
          </div>
          ${s("Events caused by intentional attackers","Adversarial Threat Events (Table E-2)",F,"adversarial",!0)}
          ${s("Accidental and environmental events","Non-Adversarial Threat Events (Table E-3)",de,"non-adversarial",!1)}
        </div>
      </div>`,T(m),m.querySelectorAll(".event-detail-card").forEach(y),m.querySelectorAll("[data-suggest-event]").forEach(r=>{r.addEventListener("click",()=>{let o=r.dataset.suggestEvent,b=F.find(H=>H.id===o);if(!b||(e.threatEvents??[]).some(H=>H.refId===o))return;let A=V.find(H=>H.id===e.scenarioId),x={id:R(),refId:b.id,name:b.name,description:b.description,type:"adversarial",isCustom:!1,threatSourceIds:c({}),relevance:A?.threatEventRelevance?.[o]??"",notes:A?.threatEventNotes?.[o]??"",likelihoodInitiation:"",likelihoodImpact:"",overallLikelihood:"",impactLevel:"",impactNotes:"",riskLevel:"",riskOverride:"",riskOverrideReason:"",riskNotes:""};l([...e.threatEvents??[],x]),r.disabled=!0,r.setAttribute("aria-disabled","true"),r.classList.add("suggest-item--added");let w=r.querySelector(".suggest-item-hint"),E=m.querySelector(`[data-add-event="${CSS.escape(o)}"]`);E&&(E.checked=!0,E.closest(".checkbox-option")?.classList.add("checked"));let N=E?.closest("details");N&&h(x,N)})});let n=[...F,...de];m.querySelectorAll("[data-add-event]").forEach(r=>{r.addEventListener("change",()=>{let o=n.find(x=>x.id===r.dataset.addEvent);if(!o)return;let b=r.closest(".checkbox-option"),A=r.closest("details");if(r.checked){if((e.threatEvents??[]).some(E=>E.refId===o.id))return;let x={id:R(),refId:o.id,name:o.name,description:o.description,type:r.dataset.eventType,isCustom:!1,threatSourceIds:c({}),relevance:"",notes:"",likelihoodInitiation:"",likelihoodImpact:"",overallLikelihood:"",impactLevel:"",impactNotes:"",riskLevel:"",riskOverride:"",riskOverrideReason:"",riskNotes:""};l([...e.threatEvents??[],x]),b?.classList.add("checked"),A&&h(x,A);let w=m.querySelector(`[data-suggest-event="${CSS.escape(o.id)}"]`);if(w){w.disabled=!0,w.setAttribute("aria-disabled","true"),w.classList.add("suggest-item--added");let E=w.querySelector(".suggest-item-hint")}}else{let x=(e.threatEvents??[]).find(E=>E.refId===o.id);if(!x)return;let w=A?.querySelector(`.event-detail-card[data-ev-id="${CSS.escape(x.id)}"]`);b?.classList.remove("checked"),w?p(x.id,w):l((e.threatEvents??[]).filter(E=>E.refId!==o.id))}})}),m.querySelectorAll(".btn-add-custom-ev").forEach(r=>{r.addEventListener("click",()=>{let o={id:R(),refId:null,name:"",description:"",type:r.dataset.eventType,isCustom:!0,threatSourceIds:c({}),relevance:"",notes:"",likelihoodInitiation:"",likelihoodImpact:"",overallLikelihood:"",impactLevel:"",impactNotes:"",riskLevel:"",riskOverride:"",riskOverrideReason:"",riskNotes:""};l([...e.threatEvents??[],o]),h(o,r.closest("details"))})})}return m._draw=f,f(),m}function ct(e){return(e.threatEvents??[]).length===0?{valid:!1,errors:["Select at least one threat event before continuing."]}:{valid:!0,errors:[]}}var ke={};P(ke,{render:()=>dt,validate:()=>ut});function ze(e,i,a){return`<select class="form-control form-control-sm" name="${t(e)}" aria-label="${t(a)}">
    <option value="">\u2014 Select \u2014</option>
    ${$.map(l=>`<option value="${t(l)}" ${i===l?"selected":""}>${t(l)}</option>`).join("")}
  </select>`}function dt(e,i){let a=e.vulnerabilities??[],l=e.predisposingConditions??[];function d(g){i({vulnerabilities:g},!0)}function u(g){i({predisposingConditions:g},!0)}let c=e.scenarioId?V.find(g=>g.id===e.scenarioId)??null:null,v=c?.vulnerabilities??[],s=[{group:"increase",name:"Highly networked architecture with many external connections",description:"The system has numerous external connections, increasing the attack surface and exposure to remote threats."},{group:"increase",name:"Legacy systems that cannot receive security patches",description:"One or more system components are past end-of-life or cannot be patched, leaving known vulnerabilities permanently unmitigated."},{group:"increase",name:"High staff turnover leading to inconsistent security awareness",description:"Frequent changes in personnel result in gaps in security training and inconsistent adherence to security procedures."},{group:"increase",name:"Reliance on a small number of critical suppliers",description:"Key operational dependencies are concentrated in a small number of external suppliers, increasing supply-chain risk."},{group:"increase",name:"Sensitive data stored and processed in bulk",description:"Large volumes of sensitive or regulated data are held in the system, making it a high-value target."},{group:"decrease",name:"Strong network segmentation limiting lateral movement",description:"Network zones are isolated so that a compromise in one segment cannot easily spread to others."},{group:"decrease",name:"Mature patch management with short remediation timelines",description:"Security patches are applied promptly and consistently across all system components, reducing the window of exploitation."},{group:"decrease",name:"Regular, tested backups stored offline or off-site",description:"Up-to-date backups are maintained and tested, enabling recovery from destructive or ransomware attacks."},{group:"decrease",name:"Comprehensive security awareness training programme",description:"All users receive regular, relevant security training, reducing the likelihood of social engineering and human error."},{group:"decrease",name:"Dedicated security operations capability with 24/7 monitoring",description:"Continuous monitoring and a dedicated security operations function enable rapid detection and response to incidents."}];function m(g){Object.assign(e,{vulnerabilities:g}),i({vulnerabilities:g})}function y(g){Object.assign(e,{predisposingConditions:g}),i({predisposingConditions:g})}function p(){d([...a,{id:R(),name:"",description:"",severity:"",notes:""}])}function h(g){d((e.vulnerabilities??[]).filter(k=>k.id!==g))}function f(g,k){i({vulnerabilities:(e.vulnerabilities??[]).map(C=>C.id===g?{...C,...k}:C)})}function n(g){return`
      <div class="event-detail-card" data-vuln-id="${t(g.id)}">
        <div class="source-detail-header">
          <input type="text" class="form-control form-control-sm" value="${t(g.name)}"
            placeholder="Vulnerability name\u2026" data-vuln-field="name" data-vuln-id="${t(g.id)}" />
          <button type="button" class="btn btn-sm btn-remove-vuln btn-remove" data-vuln-id="${t(g.id)}"
            aria-label="Remove vulnerability">\u2715 Remove</button>
        </div>
        <div class="form-row form-row-2 mt-3">
          <div class="form-group col-full">
            <label class="label">Description</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-vuln-field="description" data-vuln-id="${t(g.id)}"
              placeholder="Describe the vulnerability and affected component\u2026">${t(g.description)}</textarea>
          </div>
          <div class="form-group">
            <label class="label">
              Severity
              <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability-severity" aria-label="What do the severity levels mean?">&#9432;</button>
            </label>
            ${ze("severity",g.severity,"Vulnerability severity")}
          </div>
          <div class="form-group">
            <label class="label">Notes</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-vuln-field="notes" data-vuln-id="${t(g.id)}"
              placeholder="CVE IDs, references, remediation status\u2026">${t(g.notes)}</textarea>
          </div>
        </div>
      </div>`}function r(g){T(g),g.querySelectorAll("[data-vuln-field]").forEach(k=>{k.addEventListener("input",()=>f(k.dataset.vulnId,{[k.dataset.vulnField]:k.value})),k.addEventListener("change",()=>f(k.dataset.vulnId,{[k.dataset.vulnField]:k.value}))}),g.querySelectorAll("select").forEach(k=>{k.addEventListener("change",()=>f(g.dataset.vulnId,{[k.name]:k.value}))}),g.querySelector(".btn-remove-vuln")?.addEventListener("click",()=>h(g.dataset.vulnId))}function o(g){return`
      <div class="event-detail-card" data-pred-id="${t(g.id)}">
        <div class="source-detail-header">
          ${g.isCustom?`
            <input type="text" class="form-control form-control-sm" value="${t(g.name)}"
              placeholder="Condition name\u2026" data-pred-field="name" data-pred-id="${t(g.id)}" />
          `:`<strong class="text-sm">${t(g.name)}</strong>`}
          <button type="button" class="btn btn-sm btn-remove-pred btn-remove" data-pred-id="${t(g.id)}"
            aria-label="Remove predisposing condition">\u2715 Remove</button>
        </div>
        <div class="form-row form-row-2 mt-3">
          ${g.isCustom?`
            <div class="form-group col-full">
              <label class="label">Description</label>
              <textarea class="form-control form-control-sm" rows="2"
                data-pred-field="description" data-pred-id="${t(g.id)}"
                placeholder="Describe this predisposing condition\u2026">${t(g.description)}</textarea>
            </div>`:g.description?`
            <p class="text-muted text-sm col-full">${t(g.description)}</p>`:""}
          <div class="form-group">
            <label class="label label-flex">Pervasiveness
              <button type="button" class="nist-ref-btn" data-nist-ref="pervasiveness" aria-label="What do the pervasiveness levels mean?">&#9432;</button>
            </label>
            ${ze("pervasiveness",g.pervasiveness,"Pervasiveness")}
          </div>
          <div class="form-group">
            <label class="label">Notes</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-pred-field="notes" data-pred-id="${t(g.id)}"
              placeholder="Optional notes\u2026">${t(g.notes)}</textarea>
          </div>
        </div>
      </div>`}function b(g){T(g),g.querySelectorAll("[data-pred-field]").forEach(k=>{k.addEventListener("input",()=>E(k.dataset.predId,{[k.dataset.predField]:k.value})),k.addEventListener("change",()=>E(k.dataset.predId,{[k.dataset.predField]:k.value}))}),g.querySelectorAll("select").forEach(k=>{k.addEventListener("change",()=>{let C=k.closest("[data-pred-id]")?.dataset.predId;C&&E(C,{[k.name]:k.value})})}),g.querySelector(".btn-remove-pred")?.addEventListener("click",()=>w(g.dataset.predId))}function A(g){l.some(k=>k.refId===g.id)||u([...l,{id:R(),refId:g.id,name:g.name,description:g.desc,pervasiveness:"",notes:"",isCustom:!1}])}function x(){u([...l,{id:R(),refId:null,name:"",description:"",pervasiveness:"",notes:"",isCustom:!0}])}function w(g){u(l.filter(k=>k.id!==g))}function E(g,k){i({predisposingConditions:(e.predisposingConditions??[]).map(C=>C.id===g?{...C,...k}:C)})}let N=document.createElement("div");function H(){let g=l.filter(S=>!S.isCustom).map(S=>S.refId),k=(e.vulnerabilities??[]).map(S=>S.name),C=v.length>0,z=C?`
      <div class="suggest-panel" aria-label="Suggested vulnerabilities">
        <p class="suggest-panel-heading">Suggested for ${t(c.name)}</p>
        ${v.map((S,j)=>{let O=k.includes(S.name);return`
            <button type="button" class="suggest-item${O?" suggest-item--added":""}"
              data-suggest-vuln="${j}"
              ${O?'disabled aria-disabled="true"':""}>
              <span class="suggest-item-value">${t(S.name)}</span>
              <span class="suggest-item-hint">Severity: ${t(S.severity)}</span>
            </button>`}).join("")}
      </div>`:"";N.innerHTML=`
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Step 5 &mdash; What Weaknesses Exist?</h2>
          <p class="card-subtitle">
            <span class="nist-term">Vulnerabilities &amp; Predisposing Conditions (Task 2-3)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability" aria-label="NIST definition of Vulnerability">&#9432;</button>
          </p>
        </div>
        <div class="card-body">
          <div class="info-box mb-5">
            <strong>Vulnerabilities</strong> are weaknesses in the information system (technical, operational, or management)
            that could be exploited by a threat event. <strong>Predisposing conditions</strong> are characteristics of the system
            or its environment that affect the likelihood or impact of a threat event \u2014 they create a path for threats to cause harm.
          </div>

          <!-- Vulnerabilities -->
          <details class="section-card collapsible-section" open>
            <summary class="section-title collapsible-summary">
              <span>
                Known weaknesses
                <small class="nist-term">&mdash; Vulnerabilities</small>
                <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability" aria-label="NIST definition of Vulnerability">&#9432;</button>
              </span>
              <span class="badge badge-neutral">${a.length} defined</span>
            </summary>
            <p class="text-muted mb-4">
              Document known weaknesses in the system. For each vulnerability, rate its severity
              (the potential impact if exploited, in the absence of any mitigating security controls).
            </p>
            <div class="${C?"suggest-layout suggest-layout--has-panel":""}">
              <div>
                ${a.length===0?`
                  <p class="text-muted text-italic mb-4">
                    No vulnerabilities added yet. Use the suggestions or click the button below.
                  </p>`:""}
                ${a.map(S=>n(S)).join("")}
                <button type="button" id="btn-add-vuln" class="btn btn-secondary btn-sm mt-2">
                  + Add Vulnerability
                </button>
              </div>
              ${z}
            </div>
          </details>

          <!-- Predisposing Conditions -->
          <details class="section-card collapsible-section" open>
            <summary class="section-title collapsible-summary">
                <span>
                  Conditions that increase or decrease risk
                  <small class="nist-term">&mdash; Predisposing Conditions</small>
                  <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-condition" aria-label="NIST definition of Predisposing Condition">&#9432;</button>
                </span>
              <span class="badge badge-neutral">${l.length} selected</span>
            </summary>
            <p class="text-muted mb-4">
              Select applicable predisposing conditions from the NIST taxonomy. Rate the
              <strong>pervasiveness</strong> \u2014 how broadly the condition applies across the system.
              <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-conditions" aria-label="NIST definition of Predisposing Conditions">&#9432;</button>
            </p>

            <div>
                <details class="collapsible-section mb-4"${g.length>0?" open":""}>
                  <summary class="collapsible-summary text-sm">
                    <span>NIST taxonomy classifications
                      ${g.length>0?`<span class="badge badge-neutral ml-2">${g.length} selected</span>`:""}
                      <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-taxonomy" aria-label="What are these taxonomy classifications?">&#9432;</button>
                    </span>
                  </summary>
                  <div class="checkbox-grid mt-3">
                    ${Le.map(S=>`
                      <label class="checkbox-option ${g.includes(S.id)?"checked":""}"
                        title="${t(S.desc)}">
                        <input type="checkbox" data-add-pred="${t(S.id)}"
                          ${g.includes(S.id)?"checked":""} />
                        <span>${t(S.name)}</span>
                      </label>`).join("")}
                  </div>
                </details>

                ${l.map(S=>o(S)).join("")}

                <button type="button" id="btn-add-pred" class="btn btn-secondary btn-sm mt-2">
                  + Add Custom Predisposing Condition
                </button>
            </div>
          </details>

        </div>
      </div>`,T(N),N.querySelectorAll("[data-vuln-id]").forEach(r),N.querySelector("#btn-add-vuln")?.addEventListener("click",p),N.querySelectorAll("[data-suggest-vuln]").forEach(S=>{S.addEventListener("click",()=>{let j=parseInt(S.dataset.suggestVuln,10),O=v[j];if(!O||(e.vulnerabilities??[]).some(Ue=>Ue.name===O.name))return;let $e={id:R(),name:O.name,description:O.description,severity:O.severity,notes:O.notes};m([...e.vulnerabilities??[],$e]),S.disabled=!0,S.setAttribute("aria-disabled","true"),S.classList.add("suggest-item--added");let ce=N.querySelector("#btn-add-vuln");ce&&(ce.insertAdjacentHTML("beforebegin",n($e)),r(ce.previousElementSibling))})}),N.querySelector("#btn-add-pred")?.addEventListener("click",x),N.querySelectorAll(".btn-remove-pred").forEach(S=>S.addEventListener("click",()=>w(S.dataset.predId))),N.querySelectorAll("[data-pred-field]").forEach(S=>{S.addEventListener("input",()=>E(S.dataset.predId,{[S.dataset.predField]:S.value})),S.addEventListener("change",()=>E(S.dataset.predId,{[S.dataset.predField]:S.value}))}),N.querySelectorAll("[data-pred-id] select").forEach(S=>{S.addEventListener("change",()=>{let j=S.closest("[data-pred-id]")?.dataset.predId;j&&E(j,{[S.name]:S.value})})})}return N._draw=H,H(),N}function ut(e){return{valid:!0,errors:[]}}var we={};P(we,{render:()=>mt,validate:()=>ht});var je={"ae-01":{initiation:"Very High",impact:"Very Low",source:"ENISA Threat Landscape 2024",rationale:"Automated internet scanning is continuous and near-universal; virtually all internet-facing systems are probed daily."},"ae-02":{initiation:"Very High",impact:"Very Low",source:"ENISA Threat Landscape 2024",rationale:"OSINT collection is trivially easy and widely practised; direct harm from passive reconnaissance alone is negligible."},"ae-03":{initiation:"Low",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"Sniffing requires prior network access or a MITM position; widespread TLS adoption substantially limits what can be captured."},"ae-04":{initiation:"High",impact:"Low",source:"ENISA Threat Landscape 2024",rationale:"Targeted surveillance is common against internet-facing organisations; intelligence gathered rarely causes direct harm in isolation."},"ae-05":{initiation:"Very High",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"Phishing is the leading initial-access vector in ENISA reports; successful campaigns routinely lead to credential theft or malware deployment."},"ae-06":{initiation:"High",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"Known-malware delivery via email remains one of the highest-volume attack techniques; email filtering and endpoint controls reduce adverse impact for most organisations."},"ae-07":{initiation:"Moderate",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Targeted malware campaigns are less frequent than commodity attacks but highly effective; detection is typically delayed."},"ae-08":{initiation:"Low",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"Removable-media attacks are uncommon in modern office environments; when successful they typically allow deep, persistent access."},"ae-09":{initiation:"High",impact:"Moderate",source:"CISA KEV Catalog 2024",rationale:"Exploitation of catalogued known vulnerabilities is widespread and automated; impact depends heavily on patch currency."},"ae-10":{initiation:"Low",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Zero-day exploits are scarce and expensive; when deployed, no defensive countermeasure exists at the time of attack."},"ae-11":{initiation:"Moderate",impact:"Moderate",source:"NCSC Annual Review 2024",rationale:"The remote and mobile attack surface has grown substantially with hybrid working; endpoint controls reduce but do not eliminate risk."},"ae-12":{initiation:"Moderate",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"DDoS is one of the most frequently observed attack categories in ENISA data; impact varies with redundancy and mitigation capability."},"ae-13":{initiation:"Very High",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"Credential-guessing and stuffing attacks are near-universal; MFA and account lockout policies substantially reduce adverse impact."},"ae-14":{initiation:"Low",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"MITM is harder to execute against TLS-protected traffic; when successful, the attacker obtains high-value credentials or session tokens."},"ae-15":{initiation:"High",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"Social engineering is a consistent top-tier attack vector in ENISA and NCSC reports; it remains highly effective even against trained users."},"ae-16":{initiation:"Low",impact:"High",source:"CISA Remote Access Guidance",rationale:"Split-tunnel exploitation requires a specific VPN configuration to be present; when conditions exist it bypasses perimeter controls entirely."},"ae-17":{initiation:"Low",impact:"High",source:"ENISA Physical Threats 2024",rationale:"Physical attacks on IT infrastructure are infrequent for most organisations; when successful they afford direct hardware-level access."},"ae-18":{initiation:"Moderate",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Data exfiltration follows the majority of successful network compromises; exfiltrated data causes lasting regulatory and reputational harm."},"ae-19":{initiation:"Moderate",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Ransomware is the most reported high-impact threat in ENISA data; destruction of data without tested backups is catastrophic."},"ae-20":{initiation:"Low",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Supply-chain attacks are increasing in frequency but remain relatively uncommon; a successful compromise propagates silently and at scale."},"ae-21":{initiation:"High",impact:"High",source:"ENISA Cloud Security 2024",rationale:"Cloud misconfiguration is a leading cause of cloud-related incidents in ENISA and NCSC guidance; exposed APIs and storage are actively scanned."},"ae-22":{initiation:"Very Low",impact:"Very High",source:"ENISA Physical Threats 2024",rationale:"Physical facility attacks are rare for most organisations; when they occur, operational disruption is typically severe and prolonged."},"ae-23":{initiation:"Moderate",impact:"Low",source:"ENISA Threat Landscape 2024",rationale:"Web defacement is opportunistic and common; direct operational harm is limited but reputational and trust damage can be significant."},"ae-24":{initiation:"Very Low",impact:"Very High",source:"ENISA Insider Threat 2024",rationale:"Deliberately planted insiders are rare; their trusted position and prolonged access cause disproportionate harm when it occurs."},"ne-01":{initiation:"High",impact:"Moderate",source:"ENISA NIS Investments 2024",rationale:"Accidental data disclosure by authorised users is consistently one of the most reported incident categories across EU operators."},"ne-02":{initiation:"Moderate",impact:"Moderate",source:"ENISA NIS Investments 2024",rationale:"Misconfigured access privileges are a frequent finding in security audits; impact is bounded by what the over-privileged account can reach."},"ne-03":{initiation:"High",impact:"Moderate",source:"NIST NVD / ENISA CVE Trends",rationale:"New vulnerabilities are disclosed at high and rising rates; most require a separate trigger to cause harm and are medium severity."},"ne-04":{initiation:"Moderate",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Storage hardware failures follow predictable failure-rate curves; impact is low where regular, tested backups are maintained."},"ne-05":{initiation:"Low",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Resource depletion is normally detected by monitoring before causing significant degradation; capacity planning limits likelihood."},"ne-06":{initiation:"Moderate",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Hardware failure rates increase predictably with age; redundancy and maintenance schedules constrain adverse impact."},"ne-07":{initiation:"Low",impact:"Very High",source:"ENISA Physical Threats 2024",rationale:"Accidental facility fires are rare; where they occur without off-site backups and tested DR plans the consequences are catastrophic."},"ne-08":{initiation:"Low",impact:"High",source:"EU Copernicus Climate Service",rationale:"Flood risk is highly location-dependent; where applicable, a flood event typically renders the affected facility inoperable."},"ne-09":{initiation:"Low",impact:"High",source:"EU Copernicus Climate Service",rationale:"Severe windstorm risk is region-dependent; significant windstorm events routinely cause extended facility outages."},"ne-10":{initiation:"Very Low",impact:"Very High",source:"EMSC European Seismic Hazard",rationale:"Seismic risk is highly location-dependent; a significant earthquake at a primary facility would be catastrophic for operations."},"ne-11":{initiation:"High",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Power outages are among the most frequently reported non-adversarial incidents; UPS and generator provision typically limits impact."},"ne-12":{initiation:"Moderate",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Telecommunications outages occur periodically; redundant ISP or carrier connections reduce impact to a minor inconvenience."}};function pt(e,i){let a=je[e.refId];if(!a)return"";let l=i?"Initiation":"Occurrence",d=e.likelihoodInitiation===a.initiation;return`
    <div class="suggest-panel" aria-label="Suggested likelihood">
      <p class="suggest-panel-heading">Suggested from public intel</p>
      <button type="button" class="suggest-item${d?" suggest-item--added":""}"
        data-ev-id="${t(e.id)}" data-init="${t(a.initiation)}"
        ${d?'disabled aria-disabled="true"':""}
        aria-label="Apply suggested ${l.toLowerCase()} likelihood for ${t(e.name)}">
        <span class="suggest-item-value">${t(l)}: ${t(a.initiation)}</span>
        <span class="suggest-item-hint">${t(a.rationale)}</span>
        <span class="suggest-item-hint">Source: ${t(a.source)}</span>
      </button>
    </div>`}function Be(e,i,a){return`<div class="scale-group" role="group" aria-label="${t(e)}">
    ${$.map(l=>`
      <button type="button" class="scale-btn ${i===l?"active":""}"
        data-ev-id="${t(a)}" data-field="${t(e)}" data-value="${t(l)}"
        aria-pressed="${i===l?"true":"false"}">${t(l)}</button>`).join("")}
  </div>`}function mt(e,i){let a=e.threatEvents??[];function l(c,v){let s=(e.threatEvents??[]).map(p=>{if(p.id!==c)return p;let h={...p,...v};return h.likelihoodInitiation&&h.likelihoodImpact?h.overallLikelihood=he(h.likelihoodInitiation,h.likelihoodImpact,$,ue):h.overallLikelihood="",h}),m=(e.threatEvents??[]).every(p=>!!p.overallLikelihood),y=s.every(p=>!!p.overallLikelihood);i({threatEvents:s},!1,m!==y)}let d=document.createElement("div");function u(){if(a.length===0){d.innerHTML=`
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Step 6 &mdash; Likelihood Assessment</h2>
          </div>
          <div class="card-body">
            <div class="alert alert-warning">
              No threat events were selected in Step 4. Please go back and select at least one threat event.
            </div>
          </div>
        </div>`;return}d.innerHTML=`
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">Step 6 &mdash; How Likely Is Each Event?</h2>
          <p class="card-subtitle">
            <span class="nist-term">Likelihood Assessment (Task 2-4)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="likelihood" aria-label="NIST definition of Likelihood">&#9432;</button>
          </p>
        </div>
        <div class="card-body">
          <div class="info-box mb-5">
            <p>For each threat event, assess two likelihood components:</p>
            <ul>
              <li><strong>Adversarial events</strong> \u2014 Likelihood of <em>initiation</em>: the probability the threat source will attempt the attack.</li>
              <li><strong>Non-adversarial events</strong> \u2014 Likelihood of <em>occurrence</em>: the probability the event will happen.</li>
              <li><strong>All events</strong> \u2014 Likelihood of <em>adverse impact</em>: given the event occurs, the probability it results in harm.</li>
            </ul>
            <p>The <strong>Overall Likelihood</strong> is automatically calculated (the combination of initiation/occurrence \xD7 adverse impact).</p>
          </div>

          ${a.map(c=>{let v=c.type==="adversarial",s=c.overallLikelihood;return`
              <details class="section-card collapsible-section event-likelihood-card" open>
                <summary class="section-title collapsible-summary">
                  <span class="text-sm font-medium">${t(c.name)}</span>
                  <div class="flex gap-2 items-center">
                    <span class="badge badge-${v?"high":"neutral"}">${v?"Adversarial":"Non-Adversarial"}</span>
                    ${s?`<span>Overall: ${q(s)}</span>`:'<span class="badge badge-neutral">Not rated</span>'}
                  </div>
                </summary>

                <div class="suggest-layout${je[c.refId]?" suggest-layout--has-panel":""}">
                  <div>
                    <label class="label label-flex">
                      ${v?"How likely is this attack to be attempted?":"How likely is this event to occur?"}
                      <button type="button" class="nist-ref-btn" data-nist-ref="${v?"likelihood-initiation":"likelihood"}" aria-label="NIST definition">&#9432;</button>
                    </label>
                    <p class="text-muted text-sm">
                      ${v?"The probability that a threat source will attempt to initiate a threat event against the organization, given the source's capability, intent, and targeting.":"The probability that this non-adversarial event occurs, given the existence of predisposing conditions."}
                    </p>
                    ${Be("likelihoodInitiation",c.likelihoodInitiation,c.id)}
                  </div>
                  ${pt(c,v)}
                </div>

                <div class="form-group mt-4">
                  <label class="label label-flex">
                    If this event occurs, how likely is it to cause real harm?
                    <button type="button" class="nist-ref-btn" data-nist-ref="likelihood-adverse-impact" aria-label="NIST definition of Likelihood of Adverse Impact">&#9432;</button>
                  </label>
                  <p class="text-muted text-sm">
                    The probability that the threat event, once initiated or occurring, results in adverse impact,
                    given existing security controls and vulnerabilities.
                  </p>
                  ${Be("likelihoodImpact",c.likelihoodImpact,c.id)}
                </div>

                <div class="likelihood-result">
                  <div class="flex items-center gap-3 flex-wrap">
                    <span class="label m-0">
                      Combined likelihood (auto-calculated)
                      <button type="button" class="nist-ref-btn" data-nist-ref="overall-likelihood" aria-label="NIST definition of Overall Likelihood">&#9432;</button>
                    </span>
                    ${s?q(s):'<span class="text-muted">Rate both values above to calculate</span>'}
                  </div>
                </div>

                <div class="form-group mt-3">
                  <label class="label">Rationale / Notes</label>
                  <textarea class="form-control form-control-sm" rows="2"
                    data-lh-notes="${t(c.id)}"
                    placeholder="Explain the basis for these likelihood ratings\u2026">${t(c.notes)}</textarea>
                </div>
              </details>`}).join("")}
        </div>
      </div>`,T(d),d.querySelectorAll(".scale-btn").forEach(c=>{c.addEventListener("click",()=>{l(c.dataset.evId,{[c.dataset.field]:c.dataset.value}),c.closest(".scale-group")?.querySelectorAll(".scale-btn").forEach(y=>{y.classList.toggle("active",y.dataset.value===c.dataset.value),y.setAttribute("aria-pressed",y.dataset.value===c.dataset.value?"true":"false")});let s=c.dataset.evId,m=(e.threatEvents??[]).find(y=>y.id===s);if(m){let p=c.closest(".event-likelihood-card")?.querySelector(".likelihood-result");if(p){let h=m.likelihoodInitiation,f=m.likelihoodImpact;if(h&&f){let n=he(h,f,$,ue);p.innerHTML=`<div class="flex items-center gap-3 flex-wrap">
                <span class="label m-0">Combined likelihood (auto-calculated)</span>
                ${q(n)}
              </div>`}}}})}),d.querySelectorAll(".suggest-item[data-ev-id]").forEach(c=>{c.addEventListener("click",()=>{let v=c.dataset.evId,s=c.dataset.init;l(v,{likelihoodInitiation:s});let m=c.closest(".event-likelihood-card");m&&m.querySelectorAll('.scale-btn[data-field="likelihoodInitiation"]').forEach(y=>{y.classList.toggle("active",y.dataset.value===s),y.setAttribute("aria-pressed",y.dataset.value===s?"true":"false")}),c.disabled=!0,c.setAttribute("aria-disabled","true"),c.classList.add("suggest-item--added")})}),d.querySelectorAll("[data-lh-notes]").forEach(c=>{c.addEventListener("input",()=>l(c.dataset.lhNotes,{notes:c.value}))})}return d._draw=u,u(),d}function ht(e){let i=e.threatEvents??[],a=i.filter(l=>!l.overallLikelihood);return a.length>0&&i.length>0?{valid:!1,errors:[`${a.length} threat event(s) do not have a likelihood rating. Please rate all events before continuing.`]}:{valid:!0,errors:[]}}var Se={};P(Se,{render:()=>ft,validate:()=>gt});var vt={"Very High":"The threat event could be expected to have multiple severe or catastrophic adverse effects on the organization's mission, operations, assets, individuals, other organizations, or the Nation.",High:"The threat event could be expected to have a severe or catastrophic adverse effect on the organization's mission, operations, assets, or individuals.",Moderate:"The threat event could be expected to have a serious adverse effect on the organization's mission, operations, assets, or individuals.",Low:"The threat event could be expected to have a limited adverse effect on the organization's mission, operations, assets, or individuals.","Very Low":"The threat event could be expected to have a negligible adverse effect on the organization's mission, operations, assets, or individuals."};function ft(e,i){let a=e.threatEvents??[];function l(u,c){let v=(e.threatEvents??[]).every(y=>!!y.impactLevel),s=(e.threatEvents??[]).map(y=>y.id===u?{...y,...c}:y),m=s.every(y=>!!y.impactLevel);i({threatEvents:s},!1,v!==m)}let d=document.createElement("div");return a.length===0?(d.innerHTML=`
      <div class="card"><div class="card-header"><h2 class="card-title">Step 7 &mdash; Impact Assessment</h2></div>
      <div class="card-body"><div class="alert alert-warning">No threat events selected. Please go back to Step 4.</div></div></div>`,d):(d.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Step 7 &mdash; How Much Harm Could Each Event Cause?</h2>
        <p class="card-subtitle">
          <span class="nist-term">Impact Assessment (Task 2-5)</span>
          <button type="button" class="nist-ref-btn" data-nist-ref="impact" aria-label="NIST definition of Impact">&#9432;</button>
        </p>
      </div>
      <div class="card-body">
        <div class="info-box mb-5">
          The <strong>level of impact</strong> reflects the severity of harm that would result if a threat event
          were to occur. Consider consequences for the system's confidentiality, integrity, and availability \u2014
          and the downstream effects on the organization's mission, assets, individuals, or other organizations.
          <button type="button" class="nist-ref-btn" data-nist-ref="impact" aria-label="More about impact levels">&#9432;</button>
        </div>
        ${a.map(u=>`
          <div class="section-card event-impact-card" data-ev-id="${t(u.id)}">
            <div class="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 class="text-base font-semibold">${t(u.name)}</h3>
                <span class="badge badge-${u.type==="adversarial"?"high":"neutral"} mt-1">
                  ${u.type==="adversarial"?"Adversarial":"Non-Adversarial"}
                </span>
              </div>
              ${u.impactLevel?q(u.impactLevel):'<span class="badge badge-neutral">Not rated</span>'}
            </div>

            <div class="scale-cards" role="group" aria-label="Impact level for ${t(u.name)}">
              ${$.map(c=>`
                <button type="button" class="scale-card-btn ${u.impactLevel===c?"active":""}"
                  data-impact-ev="${t(u.id)}" data-value="${t(c)}"
                  aria-pressed="${u.impactLevel===c?"true":"false"}">
                  <strong>${t(c)}</strong>
                  <p>${t(vt[c])}</p>
                </button>`).join("")}
            </div>

            <div class="form-group mt-4">
              <label class="label">Impact Rationale / Notes</label>
              <textarea class="form-control form-control-sm" rows="3"
                data-impact-notes="${t(u.id)}"
                placeholder="Describe the specific harm that could result (e.g., data breach exposing PII of 10,000 individuals, system downtime of 48 hours)\u2026">${t(u.impactNotes)}</textarea>
            </div>
          </div>`).join("")}
      </div>
    </div>`,T(d),d.querySelectorAll("[data-impact-ev]").forEach(u=>{u.addEventListener("click",()=>{l(u.dataset.impactEv,{impactLevel:u.dataset.value});let c=u.closest(".event-impact-card");c?.querySelectorAll("[data-impact-ev]").forEach(s=>{s.classList.toggle("active",s.dataset.value===u.dataset.value),s.setAttribute("aria-pressed",s.dataset.value===u.dataset.value?"true":"false")});let v=c?.querySelector(".badge.badge-neutral, .badge.badge-very-high, .badge.badge-high, .badge.badge-moderate, .badge.badge-low, .badge.badge-very-low");v&&(v.outerHTML=q(u.dataset.value))})}),d.querySelectorAll("[data-impact-notes]").forEach(u=>{u.addEventListener("input",()=>l(u.dataset.impactNotes,{impactNotes:u.value}))}),d)}function gt(e){let i=e.threatEvents??[],a=i.filter(l=>!l.impactLevel);return a.length>0&&i.length>0?{valid:!1,errors:[`${a.length} threat event(s) have no impact rating. Please rate all events.`]}:{valid:!0,errors:[]}}var Ae={};P(Ae,{render:()=>bt,validate:()=>kt});var yt={"Very High":"Unacceptable risk. Corrective actions required immediately.",High:"Unacceptable risk. Corrective actions planned with urgency.",Moderate:"Risk may be acceptable. Corrective actions should be planned.",Low:"Risk is acceptable with monitoring.","Very Low":"Risk is acceptable."};function bt(e,i){let l=(e.threatEvents??[]).map(s=>{let m=Q(s.overallLikelihood,s.impactLevel,$,_);return{...s,_computedRisk:m,_effectiveRisk:s.riskOverride||m}});function d(s,m){i({threatEvents:(e.threatEvents??[]).map(y=>y.id===s?{...y,...m}:y)})}let u=l.filter(s=>s._computedRisk).length,c={"Very High":0,High:0,Moderate:0,Low:0,"Very Low":0};l.forEach(s=>{s._effectiveRisk&&c[s._effectiveRisk]!==void 0&&c[s._effectiveRisk]++});let v=document.createElement("div");return v.innerHTML=`
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Step 8 &mdash; What Is the Overall Risk?</h2>
        <p class="card-subtitle">
          <span class="nist-term">Risk Determination (Task 2-6 &mdash; Table I-2)</span>
          <button type="button" class="nist-ref-btn" data-nist-ref="risk" aria-label="NIST definition of Risk">&#9432;</button>
        </p>
      </div>
      <div class="card-body">
        <div class="info-box mb-5">
          Risk is determined by combining the <strong>Overall Likelihood</strong> (from Step 6) and the
          <strong>Level of Impact</strong> (from Step 7) using the risk matrix in NIST SP 800-30 R1, Table I-2.
          You may optionally override the calculated risk level if there is additional context not captured in
          the quantitative assessment.
        </div>

        <!-- Summary counters -->
        <div class="risk-summary-row">
          ${$.slice().reverse().map(s=>`
            <div class="risk-count-card risk-count-${B(s)}">
              <span class="risk-count-num">${c[s]}</span>
              <span class="risk-count-label">${t(s)}</span>
            </div>`).join("")}
        </div>

        <!-- Risk matrix -->
        <details class="section-card collapsible-section">
          <summary class="section-title collapsible-summary">Risk Matrix (Table I-2)</summary>
          <div class="table-wrap mt-4">
            <table class="risk-matrix-table">
              <caption class="sr-only">Risk level matrix: rows are likelihood (Very Low to Very High), columns are impact (Very Low to Very High)</caption>
              <thead>
                <tr>
                  <th scope="col">Likelihood \u2193 / Impact \u2192</th>
                  ${$.map(s=>`<th scope="col">${t(s)}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${$.map((s,m)=>`
                  <tr>
                    <th scope="row">${t(s)}</th>
                    ${$.map((y,p)=>{let h=$[_[m][p]];return`<td class="risk-cell risk-cell-${B(h)}">${t(h)}</td>`}).join("")}
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </details>

        <!-- Per-event risk review -->
        ${l.length===0?`
          <div class="alert alert-warning">No threat events with likelihood and impact ratings. Please complete Steps 6 and 7.</div>
        `:l.map(s=>`
          <div class="section-card event-risk-card" data-ev-id="${t(s.id)}">
            <div class="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 class="text-base font-semibold">${t(s.name)}</h3>
                <div class="flex gap-2 flex-wrap mt-2">
                  <span class="badge badge-neutral">
                    Likelihood: ${t(s.overallLikelihood||"\u2014")}
                  </span>
                  <span class="badge badge-neutral">
                    Impact: ${t(s.impactLevel||"\u2014")}
                  </span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs text-dim mb-1">
                  ${s.riskOverride?"Overridden risk":"Calculated risk"}
                </div>
                ${s._effectiveRisk?q(s._effectiveRisk):'<span class="text-muted">Not calculated</span>'}
              </div>
            </div>

            ${s._computedRisk?`
              <div class="surface-box">
                <p class="text-sm">${t(yt[s._effectiveRisk]??"")}</p>
              </div>`:`
              <div class="alert alert-warning mb-4">
                Risk cannot be calculated \u2014 likelihood or impact is not rated in steps 6 and 7.
              </div>`}

            <div class="form-group">
              <label class="label label-flex">
                <input type="checkbox" data-override-toggle="${t(s.id)}"
                  ${s.riskOverride?"checked":""} />
                Override calculated risk level
              </label>
            </div>
            <div class="risk-override-row ${s.riskOverride?"":"hidden"}" id="override-${t(s.id)}">
              <div class="form-row form-row-2 mt-3">
                <div class="form-group">
                  <label class="label">Override Risk Level</label>
                  <select class="form-control form-control-sm" data-override-level="${t(s.id)}">
                    <option value="">\u2014 Select \u2014</option>
                    ${$.map(m=>`<option value="${t(m)}" ${s.riskOverride===m?"selected":""}>${t(m)}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label class="label">Reason for Override *</label>
                  <input type="text" class="form-control form-control-sm" value="${t(s.riskOverrideReason)}"
                    placeholder="Explain why the calculated risk was overridden\u2026"
                    data-override-reason="${t(s.id)}" />
                </div>
              </div>
            </div>

            <div class="form-group mt-3">
              <label class="label">Risk Notes</label>
              <textarea class="form-control form-control-sm" rows="2"
                data-risk-notes="${t(s.id)}"
                placeholder="Notes about risk treatment, existing controls, or residual risk\u2026">${t(s.riskNotes)}</textarea>
            </div>
          </div>`).join("")}

        <div class="section-card mt-5">
          <label class="label" for="f-risk-notes">Overall Assessment Notes</label>
          <textarea class="form-control" id="f-risk-notes" rows="4"
            placeholder="Summarize the risk determination results, key findings, or overall risk posture\u2026">${t(e.riskNotes)}</textarea>
        </div>

      </div>
    </div>`,T(v),v.querySelectorAll("[data-override-toggle]").forEach(s=>{s.addEventListener("change",()=>{let m=s.dataset.overrideToggle,y=v.querySelector(`#override-${CSS.escape(m)}`);y&&y.classList.toggle("hidden",!s.checked),s.checked||d(m,{riskOverride:"",riskOverrideReason:""})})}),v.querySelectorAll("[data-override-level]").forEach(s=>{s.addEventListener("change",()=>d(s.dataset.overrideLevel,{riskOverride:s.value}))}),v.querySelectorAll("[data-override-reason]").forEach(s=>{s.addEventListener("input",()=>d(s.dataset.overrideReason,{riskOverrideReason:s.value}))}),v.querySelectorAll("[data-risk-notes]").forEach(s=>{s.addEventListener("input",()=>d(s.dataset.riskNotes,{riskNotes:s.value}))}),v.querySelector("#f-risk-notes")?.addEventListener("input",s=>i({riskNotes:s.target.value})),v}function kt(e){return{valid:!0,errors:[]}}var Ee={};P(Ee,{render:()=>wt,validate:()=>St});var Fe=["Very High","High","Moderate","Low","Very Low",""];function se(e){return e.riskOverride||e.riskLevel||Q(e.overallLikelihood,e.impactLevel,$,_)||""}function wt(e,i){let a=e.threatEvents??[],l=[...a].sort((s,m)=>Fe.indexOf(se(s))-Fe.indexOf(se(m))),d={"Very High":0,High:0,Moderate:0,Low:0,"Very Low":0};a.forEach(s=>{let m=se(s);d[m]!==void 0&&d[m]++});let u=document.createElement("div");u.innerHTML=`
    <!-- Report header (visible in print only \u2014 injected into #print-region by app) -->

    <div class="card">
        <div class="card-header">
          <div class="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 class="card-title">Step 9 &mdash; Results &amp; Report</h2>
              <p class="card-subtitle">
                <span class="nist-term">Risk Register (Task 2-7)</span>
                <button type="button" class="nist-ref-btn" data-nist-ref="risk" aria-label="NIST definition of Risk">&#9432;</button>
              </p>
            </div>
            <div class="flex gap-3 flex-wrap">
              <button id="btn-pdf" class="btn btn-secondary" type="button">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><polyline points="14,2 14,8 20,8"/></svg>
                Export PDF
              </button>
              <button id="btn-export" class="btn btn-primary" type="button">
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Export JSON
              </button>
            </div>
          </div>
        </div>

        <div class="card-body">

          <!-- Completion banner -->
          <div class="completion-banner ${(e.completedSteps??[]).length>=8?"completion-banner--complete":"completion-banner--progress"}">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${(e.completedSteps??[]).length>=8?'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/>':'<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
            </svg>
            <div class="completion-banner-body">
              ${(e.completedSteps??[]).length>=8?`
              <strong>Assessment complete &mdash; well done!</strong>
              <p>You have worked through all the steps and your risk register is ready. We recommend <strong>downloading your assessment as a JSON file</strong> right now &mdash; it keeps a full backup of everything you have entered and lets you reload or share it at any time.</p>
              `:`
              <strong>Your results so far</strong>
              <p>You can review your risk register at any stage. Once you have finished all steps, we recommend <strong>saving your assessment as a JSON file</strong> so you never lose your work.</p>
              `}
              <button class="btn btn-primary btn-sm btn-download-json" type="button">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download JSON backup
              </button>
            </div>
          </div>

          <!-- Assessment metadata -->
          <div class="section-card mb-5">
            <h3 class="section-title">Assessment Details</h3>
            <div class="summary-grid">
              <div><span class="summary-label">Assessment</span><span class="summary-value">${t(e.name)}</span></div>
              <div><span class="summary-label">Organisation</span><span class="summary-value">${t(e.organization||"\u2014")}</span></div>
              <div><span class="summary-label">Assessor</span><span class="summary-value">${t(e.assessor||"\u2014")}</span></div>
              <div><span class="summary-label">Date</span><span class="summary-value">${t(e.date||"\u2014")}</span></div>
              <div><span class="summary-label">${e.tier==="org"?"Scope":"System"}</span><span class="summary-value">${t(e.systemName||"\u2014")}</span></div>
              <div><span class="summary-label">Assessment tier</span><span class="summary-value">${e.tier==="org"?"Org / Process (Tier 1\u20132)":"System (Tier 3)"}</span></div>
              <div><span class="summary-label">Approach</span><span class="summary-value">${t(e.assessmentApproach||"\u2014")}</span></div>
              ${e.nis2EntityType?`<div><span class="summary-label">NIS2 entity type</span><span class="summary-value">${t({essential:"Essential Entity",important:"Important Entity","not-applicable":"Not applicable"}[e.nis2EntityType]??e.nis2EntityType)}</span></div>`:""}
              ${e.riskTolerance?`<div><span class="summary-label">Risk Tolerance</span><span class="summary-value">${q(e.riskTolerance)}</span></div>`:""}
            </div>
          </div>

          <!-- Risk summary -->
          <div class="section-card mb-5">
            <h3 class="section-title">Risk Summary</h3>
            <div class="flex gap-4 flex-wrap mb-4">
              ${$.slice().reverse().map(s=>`
                <div class="risk-count-card risk-count-${B(s)}">
                  <span class="risk-count-num">${d[s]}</span>
                  <span class="risk-count-label">${t(s)}</span>
                </div>`).join("")}
            </div>
          </div>

          <!-- Risk register table -->
          <div class="section-card mb-5">
            <h3 class="section-title">Risk Register (sorted by risk level)</h3>
            ${l.length===0?`
              <p class="text-muted text-italic">No threat events assessed.</p>
            `:`
              <div class="table-wrap">
                <table class="data-table">
                  <caption class="sr-only">Risk register: threat events sorted by risk level, highest first</caption>
                  <thead>
                    <tr>
                      <th scope="col">Threat Event</th>
                      <th scope="col">Type</th>
                      <th scope="col">Relevance</th>
                      <th scope="col">Linked Sources</th>
                      <th scope="col">Overall Likelihood</th>
                      <th scope="col">Impact</th>
                      <th scope="col">Risk Level</th>
                      <th scope="col">Override</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${l.map(s=>{let m=se(s),y=e.threatSources??[],p=(s.threatSourceIds??[]).map(h=>y.find(f=>f.id===h)?.name??h).join(", ")||"\u2014";return`
                        <tr>
                          <td>${t(s.name)}</td>
                          <td><span class="badge badge-${s.type==="adversarial"?"high":"neutral"}">${t(s.type==="adversarial"?"Adversarial":"Non-Adv.")}</span></td>
                          <td>${t(s.relevance||"\u2014")}</td>
                          <td class="text-sm">${t(p)}</td>
                          <td>${s.overallLikelihood?q(s.overallLikelihood):'<span class="text-muted">\u2014</span>'}</td>
                          <td>${s.impactLevel?q(s.impactLevel):'<span class="text-muted">\u2014</span>'}</td>
                          <td>${m?q(m):'<span class="text-muted">\u2014</span>'}</td>
                          <td class="text-sm">${s.riskOverride?`<span title="${t(s.riskOverrideReason)}">Yes</span>`:"\u2014"}</td>
                        </tr>`}).join("")}
                  </tbody>
                </table>
              </div>`}
          </div>

          <!-- Overall notes -->
          ${e.riskNotes?`
            <div class="section-card mt-4">
              <h3 class="section-title">Assessment Notes</h3>
              <p>${t(e.riskNotes)}</p>
            </div>`:""}

        </div>
      </div>
    `,T(u);function c(){try{let s=ae(e.id),m=`risk-assessment-${(e.name||e.id).replace(/[^a-z0-9]/gi,"-").toLowerCase()}.json`;X(s,m,"application/json")}catch(s){alert(`Export failed: ${s.message}`)}}function v(){return new Promise((s,m)=>{if(typeof window.generateRiskPdf=="function"){s();return}let y=document.createElement("script");y.src="/dist/pdf-bundle.js?v=1",y.onload=s,y.onerror=()=>m(new Error("Could not load PDF library")),document.head.appendChild(y)})}return u.querySelector("#btn-pdf")?.addEventListener("click",async()=>{let s=u.querySelector("#btn-pdf"),m=s.innerHTML;s.disabled=!0,s.textContent="Generating\u2026";try{await v(),window.generateRiskPdf(e)}catch(y){alert(`PDF generation failed: ${y.message}`)}finally{s.disabled=!1,s.innerHTML=m}}),u.querySelector("#btn-export")?.addEventListener("click",c),u.querySelector(".btn-download-json")?.addEventListener("click",c),u}function St(e){return{valid:!0,errors:[]}}var oe=[ve,fe,ge,ye,be,ke,we,Se,Ae,Ee],_e=["Dashboard","Setup","Risk Model","Threat Sources","Threat Events","Vulnerabilities","Likelihood","Impact","Risk","Results"],I=null,L=0,ne=document.getElementById("step-content"),xe=document.getElementById("progress-bar-container"),D=document.getElementById("wizard-nav");function Ge(){let e=location.hash.slice(1);if(!e||e==="dashboard")return{step:0,id:null};let i=e.match(/^assessment\/([^/]+)\/step\/(\d+)$/);return i?{step:parseInt(i[2],10),id:i[1]}:{step:0,id:null}}function At(e,i){let a=e===0?"#dashboard":`#assessment/${i}/step/${e}`;location.hash!==a&&history.pushState(null,"",a)}function U(e,i){At(e,i??I?.id??null),le(e,i)}function le(e,i){if(e===0)I=null,L=0;else{let a=i?te(i):I;if(!a){history.replaceState(null,"","#dashboard"),le(0,null);return}I=a,L=e>=1&&e<=9?e:a.currentStep??1}It(L)}function Et(e){let i=te(e);if(!i)return;let a=i.currentStep>=1&&i.currentStep<=9?i.currentStep:1;U(a,e)}function Ie(){U(0,null)}function xt(){if(!I||L===0){xe.innerHTML="";return}let e=new Set(I.completedSteps??[]),i=_e.length-1,a=_e.slice(1).map((l,d)=>{let u=d+1,c=e.has(u),v=u===L,s=c?"completed":v?"active":"",m=c||u!==L&&e.has(u-1),y=`Step ${u}: ${l}${c?", completed":v?", current step":""}`,p=`<div class="pstep${s?` pstep--${s}`:""}" role="listitem">
        <button type="button" class="pstep-btn"
          ${m?`data-goto="${u}"`:'disabled aria-disabled="true"'}
          aria-current="${v?"step":"false"}"
          aria-label="${y}">
          <span aria-hidden="true">${c?"\u2713":u}</span>
        </button>
        <span class="pstep-label" aria-hidden="true">${t(l)}</span>
      </div>`;return d===0?p:`<div class="pstep-line${e.has(u-1)||u<=L?" pstep-line--filled":""}" aria-hidden="true"></div>${p}`}).join("");xe.innerHTML=`
    <nav class="progress-steps" role="list"
      aria-label="Assessment progress: step ${L} of ${i}">
      ${a}
    </nav>`,xe.querySelectorAll("[data-goto]").forEach(l=>{l.addEventListener("click",()=>U(parseInt(l.dataset.goto,10),I.id))})}function re(){if(!I||L===0){D.innerHTML="";return}D.innerHTML=`
    <div id="nav-errors" role="alert" aria-live="polite" class="error-list-container"></div>
    <div class="wizard-nav-buttons">
      ${L>1?'<button type="button" id="btn-back" class="btn btn-secondary">\u2190 Back</button>':'<button type="button" id="btn-dashboard" class="btn btn-ghost">\u2190 Dashboard</button>'}
      <span class="step-indicator" aria-label="Step ${L} of 9">Step ${L} / 9</span>
      ${L<9?'<button type="button" id="btn-next" class="btn btn-primary">Next \u2192</button>':'<button type="button" id="btn-finish" class="btn btn-success">Finish \u2713</button>'}
    </div>`,D.querySelector("#btn-back")?.addEventListener("click",()=>{I.currentStep=L-1,M(I),U(L-1,I.id)}),D.querySelector("#btn-dashboard")?.addEventListener("click",Ie);let e=()=>{let{valid:a,errors:l}=oe[L].validate(I),d=D.querySelector("#nav-errors");if(!a){me(d,l),d.scrollIntoView({behavior:"smooth",block:"nearest"});return}me(d,[]);let u=I.completedSteps??[];u.includes(L)||u.push(L),I.completedSteps=u;let c=Math.min(L+1,9);I.currentStep=c,M(I),U(c,I.id)};D.querySelector("#btn-next")?.addEventListener("click",e),D.querySelector("#btn-finish")?.addEventListener("click",()=>{I.currentStep=9,M(I),Ie()});let i=D.querySelector("#btn-next")??D.querySelector("#btn-finish");if(i){let{valid:a}=oe[L].validate(I);i.disabled=!a,i.setAttribute("aria-disabled",String(!a))}}function It(e){L=e,Re(),xt(),ne.innerHTML="";let i=oe[e];if(!i)return;let a;if(e===0)a=i.render(null,{openAssessment:Et});else{let l=function(){let d=oe[L].render(I,(u,c,v)=>{Object.assign(I,u),M(I),c?l():v&&re()});ne.innerHTML="",ne.appendChild(d),re()};a=i.render(I,(d,u,c)=>{Object.assign(I,d),M(I),u?l():c&&re()})}ne.appendChild(a),re()}window.addEventListener("hashchange",()=>{let{step:e,id:i}=Ge();le(e,i)});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btn-new-assessment")?.addEventListener("click",()=>{Ie()});let{step:e,id:i}=Ge();le(e,i);let a=document.getElementById("nist-modal");a&&(a.querySelector("#nist-modal-close")?.addEventListener("click",()=>a.close()),a.addEventListener("click",l=>{l.target===a&&a.close()}))});})();
