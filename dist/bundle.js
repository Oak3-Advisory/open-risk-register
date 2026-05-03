(()=>{var Nt=Object.defineProperty;var j=(e,t)=>{for(var a in t)Nt(e,a,{get:t[a],enumerable:!0})};var R=["Very Low","Low","Moderate","High","Very High"];var Z=[{id:"ts-a1",type:"Adversarial",name:"Individual \u2013 Outsider"},{id:"ts-a2",type:"Adversarial",name:"Individual \u2013 Insider"},{id:"ts-a3",type:"Adversarial",name:"Individual \u2013 Trusted Insider"},{id:"ts-a4",type:"Adversarial",name:"Individual \u2013 Privileged Insider"},{id:"ts-a5",type:"Adversarial",name:"Group \u2013 Ad hoc"},{id:"ts-a6",type:"Adversarial",name:"Group \u2013 Established"},{id:"ts-a7",type:"Adversarial",name:"Organization \u2013 Competitor"},{id:"ts-a8",type:"Adversarial",name:"Organization \u2013 Supplier / Partner"},{id:"ts-a9",type:"Adversarial",name:"Organization \u2013 Nation-State"},{id:"ts-b1",type:"Accidental",name:"User \u2013 Accidental Error"},{id:"ts-b2",type:"Accidental",name:"Privileged User / Administrator \u2013 Accidental Error"},{id:"ts-c1",type:"Structural",name:"IT Equipment \u2013 Storage"},{id:"ts-c2",type:"Structural",name:"IT Equipment \u2013 Processing / Compute"},{id:"ts-c3",type:"Structural",name:"IT Equipment \u2013 Communications / Networking"},{id:"ts-c4",type:"Structural",name:"Environmental Controls \u2013 Power Supply"},{id:"ts-c5",type:"Structural",name:"Software \u2013 Operating System"},{id:"ts-c6",type:"Structural",name:"Software \u2013 Application or Service"},{id:"ts-d1",type:"Environmental",name:"Natural Disaster \u2013 Fire"},{id:"ts-d2",type:"Environmental",name:"Natural Disaster \u2013 Flood / Tsunami"},{id:"ts-d3",type:"Environmental",name:"Natural Disaster \u2013 Windstorm / Tornado / Hurricane"},{id:"ts-d4",type:"Environmental",name:"Natural Disaster \u2013 Earthquake"},{id:"ts-d5",type:"Environmental",name:"Infrastructure Failure \u2013 Telecommunications"},{id:"ts-d6",type:"Environmental",name:"Infrastructure Failure \u2013 Electrical Power"}];var W=[{id:"ae-01",name:"Perform network perimeter scanning / reconnaissance",description:"Adversary uses software to scan organizational perimeters to understand the IT infrastructure and improve ability to launch successful attacks."},{id:"ae-02",name:"Open-source (OSINT) discovery of organizational information",description:"Adversary mines publicly accessible information to gather data about organizational systems, business processes, users, or external relationships."},{id:"ae-03",name:"Network sniffing of exposed wired or wireless networks",description:"Adversary with access to exposed data channels uses network sniffing to identify components, resources, and protections."},{id:"ae-04",name:"Reconnaissance and surveillance of targeted organization",description:"Adversary uses various means (scanning, physical observation) over time to examine and assess organizations and ascertain points of vulnerability."},{id:"ae-05",name:"Phishing / spear-phishing attack",description:"Adversary counterfeits communications from a legitimate source to acquire sensitive information (usernames, passwords, SSNs). Often via email or instant messaging."},{id:"ae-06",name:"Deliver known malware (e.g., virus via email)",description:"Adversary uses common delivery mechanisms to install known malware into organizational information systems."},{id:"ae-07",name:"Deliver targeted malware for system control and data exfiltration",description:"Adversary installs malware specifically designed to take control of internal systems, identify sensitive information, exfiltrate it, and conceal these actions."},{id:"ae-08",name:"Deliver malware via removable media (e.g., USB drive)",description:"Adversary places removable media containing malware in locations where employees are likely to find and use them (parking lots, conference exhibits)."},{id:"ae-09",name:"Exploit known vulnerabilities in information systems",description:"Adversary searches for known vulnerabilities in organizational information systems and exploits those vulnerabilities."},{id:"ae-10",name:"Exploit recently discovered / zero-day vulnerabilities",description:"Adversary employs attacks that exploit as yet unpublicized vulnerabilities, based on adversary knowledge of the IT environment."},{id:"ae-11",name:"Exploit vulnerabilities in mobile / remote systems",description:"Adversary takes advantage of mobile or remote systems outside organizational physical and logical protections to compromise them and gather information."},{id:"ae-12",name:"Conduct Denial of Service (DoS) or DDoS attack",description:"Adversary attempts to make Internet-accessible resources unavailable to intended users, or uses multiple compromised systems for a distributed attack."},{id:"ae-13",name:"Conduct brute-force / password-guessing attack",description:"Adversary attempts to gain access by random or systematic guessing of passwords, possibly supported by password-cracking utilities."},{id:"ae-14",name:"Conduct man-in-the-middle (MITM) attack",description:"Adversary intercepts sessions between organizational and external systems, relaying messages while controlling the entire communication."},{id:"ae-15",name:"Conduct social engineering (insider or outsider)",description:"Adversary persuades or tricks individuals within organizations into revealing critical or sensitive information."},{id:"ae-16",name:"Exploit split tunneling on remote connections",description:"Adversary takes advantage of remote systems simultaneously connected to organizational networks and insecure external networks."},{id:"ae-17",name:"Compromise organizational information systems via physical access",description:"Adversary obtains physical access to organizational information systems and makes unauthorized modifications."},{id:"ae-18",name:"Exfiltrate sensitive information via malware",description:"Adversary directs malware on organizational systems to locate and surreptitiously transmit sensitive information to an external destination."},{id:"ae-19",name:"Corrupt or destroy critical organizational data",description:"Adversary implants corrupted data or destroys information system components, preventing organization from carrying out missions."},{id:"ae-20",name:"Supply chain attack (hardware, software, or firmware)",description:"Adversary compromises the design, manufacture, or distribution of software, firmware, or hardware to introduce malicious functionality."},{id:"ae-21",name:"Exploit cloud multi-tenancy or insecure cloud configuration",description:"Adversary exploits multi-tenant cloud environments to observe organizational processes, acquire data, or interfere with operations."},{id:"ae-22",name:"Conduct physical attack on facilities or supporting infrastructure",description:"Adversary conducts physical attack on organizational facilities (e.g., sets fire, sabotages power) or supporting infrastructure."},{id:"ae-23",name:"Web defacement or integrity attack on publicly accessible systems",description:"Adversary makes unauthorized changes to organizational websites or publicly accessible data, causing integrity loss and reputational damage."},{id:"ae-24",name:"Insert subverted individual into organization or privileged position",description:"Adversary places individuals within the organization who carry out actions to cause harm to organizational missions or gain access to privileged functions."}],ie=[{id:"ne-01",name:"Accidental disclosure of sensitive information by authorized user",description:"Authorized user inadvertently exposes, discloses, or mishandles critical or sensitive information."},{id:"ne-02",name:"Incorrect privilege settings by administrator",description:"Authorized privileged user or administrator erroneously assigns excessive privileges or sets access requirements too low."},{id:"ne-03",name:"Introduction of vulnerabilities during software development",description:"Due to weaknesses in programming languages or development environments, errors and vulnerabilities are inadvertently introduced into software products."},{id:"ne-04",name:"Disk / storage error causing data corruption or loss",description:"Corrupted storage due to a disk error or pervasive failure due to aging of a set of devices acquired at the same time."},{id:"ne-05",name:"Resource depletion causing degraded performance",description:"Degraded communications or processing performance due to resource depletion or contention, exceeding expected operating parameters."},{id:"ne-06",name:"Hardware failure due to aging or component end-of-life",description:"Failures of IT equipment or environmental controls due to aging, resource depletion, or circumstances exceeding expected operating parameters."},{id:"ne-07",name:"Fire at primary or backup facility",description:"Fire (not due to adversarial activity) makes primary or backup facility inoperable or destroys system backups."},{id:"ne-08",name:"Flood at primary or backup facility",description:"Flood (not due to adversarial activity) at primary or backup facility makes facility inoperable or destroys backups."},{id:"ne-09",name:"Hurricane, tornado, or severe windstorm at primary facility",description:"Severe windstorm at primary facility makes facility inoperable."},{id:"ne-10",name:"Earthquake at primary facility",description:"Earthquake of significant magnitude at primary facility makes facility inoperable."},{id:"ne-11",name:"Power outage or electrical infrastructure failure",description:"Electrical power failure (not due to adversarial activity) affecting organizational information systems and operations."},{id:"ne-12",name:"Telecommunications infrastructure failure",description:"Telecommunications outage (not due to adversarial activity) affecting organizational connectivity and operations."}],pe=[{value:"Confirmed",desc:"The threat event or TTP has been observed by the organization."},{value:"Expected",desc:"The threat event or TTP has been seen by the organization's peers or partners."},{value:"Anticipated",desc:"The threat event or TTP has been reported by a trusted source."},{value:"Predicted",desc:"The threat event or TTP has been predicted by a trusted source."},{value:"Possible",desc:"The threat event or TTP has been described by a somewhat credible source."},{value:"N/A",desc:"Not currently applicable \u2014 technology, architecture, or predisposing conditions are not present."}],me=[{id:"pc-01",name:"Information-Related",desc:"System handles classified, PII, controlled unclassified, or specially protected information."},{id:"pc-02",name:"Technical \u2013 Architectural",desc:"System must comply with specific technical standards, use particular product lines, or allocate specific security functions to common controls."},{id:"pc-03",name:"Technical \u2013 Functional (networked / multi-user)",desc:"System is networked and supports multiple concurrent users, increasing exposure to remote threats."},{id:"pc-04",name:"Technical \u2013 Functional (stand-alone / restricted)",desc:"System is stand-alone or has restricted network connectivity, limiting but not eliminating some threats."},{id:"pc-05",name:"Operational \u2013 Fixed site",desc:"System is at a fixed physical location with associated physical access controls and environmental dependencies."},{id:"pc-06",name:"Operational \u2013 Mobile / semi-mobile",desc:"System or its components are mobile (handheld, laptop, vehicle-mounted), increasing physical exposure."},{id:"pc-07",name:"Operational \u2013 Large population with access",desc:"A large number of users (or users with varying vetting levels) have access to the system, increasing insider threat surface."}];var et={"nist-sp-800-30":{term:"NIST SP 800-30 Rev. 1 \u2014 Guide for Conducting Risk Assessments",plain:"NIST SP 800-30 Rev. 1 is the US federal standard guide for conducting information security risk assessments. It provides a structured process for identifying threats, vulnerabilities, likelihoods, and impacts \u2014 and combining them into a risk level that supports decision-making. This tool implements the full NIST SP 800-30 Rev. 1 workflow.",quote:"The purpose of Special Publication 800-30 is to provide guidance for conducting risk assessments of federal information systems and organizations, amplifying the guidance in Special Publication 800-39.",cite:"NIST SP 800-30 Rev. 1, Chapter 1, Section 1.1, p. 1"},"risk-assessment":{term:"Risk Assessment",plain:"A risk assessment identifies, estimates, and prioritises risk to organisational operations, assets, individuals, and others, resulting from the operation of an information system. It is a key part of an organisation's risk management process and informs decisions about security controls, investments, and acceptable levels of risk.",quote:"Risk assessments identify, estimate, and prioritize risks to organizational operations, organizational assets, individuals, other organizations, and the Nation, resulting from the operation and use of information systems.",cite:"NIST SP 800-30 Rev. 1, Chapter 1, p. 1"},"tier-1":{term:"Risk Assessment Tiers (Tier 1 & 2)",plain:`NIST SP 800-30 defines three tiers of risk assessment:

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
\u2022 N/A \u2014 not currently applicable \u2014 the relevant technology, architecture, or predisposing condition is absent.`,quote:"Relevance is a means for organizations to identify, from the list of threat events developed from the risk framing step, those events that are applicable to specific risk assessments.",cite:"NIST SP 800-30 Rev. 1, Appendix E, Table E-4, p. E-9"}},ee=[{value:"qualitative",label:"Qualitative (default)",desc:"Uses descriptive levels: Very Low, Low, Moderate, High, Very High. Best for communicating risk to decision makers. Easiest to apply."},{value:"semi-quantitative",label:"Semi-Quantitative",desc:"Uses bins / scales (e.g., 0\u2013100) that translate to qualitative terms. Better supports prioritization and comparison."},{value:"quantitative",label:"Quantitative",desc:"Uses numerical probabilities and monetary values. Most rigorous; supports cost-benefit analysis. Requires significant data and expertise."}],te=[{value:"threat-oriented",label:"Threat-Oriented",desc:"Starts with threat sources and events; vulnerabilities identified in context of threats. Good when threat intelligence is available."},{value:"asset-impact-oriented",label:"Asset / Impact-Oriented",desc:"Starts with critical assets and impacts of concern; identifies threats that could lead to those impacts."},{value:"vulnerability-oriented",label:"Vulnerability-Oriented",desc:"Starts with known weaknesses / predisposing conditions; identifies threats that could exploit those vulnerabilities."}],Ne=[[0,0,0,1,1],[0,0,1,2,2],[0,1,2,2,3],[1,1,2,3,4],[1,1,2,3,4]],ne=[[0,0,0,0,0],[0,0,1,1,2],[0,1,2,2,3],[0,1,2,3,4],[0,1,2,3,4]];function q(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();if(globalThis.crypto?.getRandomValues){let e=new Uint8Array(16);globalThis.crypto.getRandomValues(e),e[6]=e[6]&15|64,e[8]=e[8]&63|128;let t=[...e].map(a=>a.toString(16).padStart(2,"0")).join("");return`${t.slice(0,8)}-${t.slice(8,12)}-${t.slice(12,16)}-${t.slice(16,20)}-${t.slice(20)}`}throw new Error("Secure random ID generation is not available in this browser.")}function he(){return new Date().toISOString().slice(0,10)}function Re(e){if(!e)return"\u2014";try{return new Intl.DateTimeFormat(void 0,{dateStyle:"medium"}).format(new Date(e))}catch{return e}}function s(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function K(e){return{"Very High":"very-high",High:"high",Moderate:"moderate",Low:"low","Very Low":"very-low"}[e]??"neutral"}function B(e){return`<span class="badge badge-${K(e)}">${s(e)}</span>`}function Ce(e,t){if(e.innerHTML="",!t||t.length===0)return;let a=document.createElement("ul");a.className="error-list",t.forEach(i=>{let n=document.createElement("li");n.textContent=i,a.appendChild(n)}),e.appendChild(a)}function tt(){window.scrollTo({top:0,behavior:"smooth"})}function Pe(e,t,a,i){let n=a.indexOf(e),d=a.indexOf(t);return n<0||d<0?"":a[i[n][d]]}function ve(e,t,a,i){let n=a.indexOf(e),d=a.indexOf(t);return n<0||d<0?"":a[i[n][d]]}function ae(e,t,a){let i=new Blob([e],{type:a}),n=URL.createObjectURL(i),d=document.createElement("a");d.href=n,d.download=t,d.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Rt(e,t={}){Object.entries(t).forEach(([a,i])=>{if(!(i==null||i===!1)){if(a==="className"){e.className=i;return}if(a==="text"){e.textContent=i;return}if(i===!0){e.setAttribute(a,"");return}e.setAttribute(a,String(i))}})}function C(e,t={},a=[]){let i=document.createElement(e);return Rt(i,t),(Array.isArray(a)?a:[a]).filter(Boolean).forEach(d=>{typeof d=="string"?i.appendChild(document.createTextNode(d)):i.appendChild(d)}),i}function J({text:e,children:t=[],...a}={}){return C("button",a,e?[e,...t]:t)}function se(e={}){return C("input",e)}function Ct(e){return encodeURIComponent(JSON.stringify(e))}function Pt(e){return JSON.parse(decodeURIComponent(e))}function at({id:e,label:t,value:a,placeholder:i,required:n=!1,type:d="input",rows:l=3,suggestions:g=[]}){let r=g.length>0,y=d==="textarea"?`<textarea class="form-control" id="${e}" rows="${l}" placeholder="${i??""}"${n?' aria-required="true"':""}>${a??""}</textarea>`:`<input class="form-control" id="${e}" type="text" value="${a??""}" placeholder="${i??""}" autocomplete="off"${n?' aria-required="true"':""}${r?` aria-autocomplete="list" aria-controls="${e}-suggestions" aria-expanded="false"`:""} />`,p=r?`
    <div class="suggest-panel" id="${e}-suggestions" role="listbox" aria-label="Suggestions" hidden>
      <p class="suggest-panel-heading">Suggestions</p>
      ${g.map((u,m)=>`
        <button type="button" class="suggest-item" role="option" data-suggest-for="${e}" data-value="${s(u.value)}"${u.description?` data-description="${s(u.description)}"`:""}${u.extras?` data-extras="${Ct(u.extras)}"`:""} tabindex="-1" aria-selected="false">
          <span class="suggest-item-value">${s(u.value)}</span>
          ${u.hint?`<span class="suggest-item-hint">${s(u.hint)}</span>`:""}
        </button>`).join("")}
    </div>`:"";return`
    <div class="form-group suggest-layout${r?" suggest-layout--has-panel":""}">
      <label class="label" for="${e}">${t}</label>
      <div class="suggest-field-row">
        <div class="suggest-field-wrap">${y}</div>
      </div>
      ${p}
    </div>`}function st(e,t){e.querySelectorAll('[aria-controls$="-suggestions"]').forEach(a=>{let i=a.getAttribute("aria-controls"),n=e.querySelector(`#${i}`);if(!n)return;let d=()=>{a.value.trim()||(n.hidden=!1,a.setAttribute("aria-expanded","true"))},l=()=>{n.hidden=!0,a.setAttribute("aria-expanded","false")};a.addEventListener("focus",d),a.addEventListener("input",()=>{a.value.trim()?l():d()}),a.addEventListener("blur",()=>setTimeout(l,160)),a.addEventListener("keydown",g=>{g.key==="Escape"&&l(),g.key==="ArrowDown"&&!n.hidden&&(g.preventDefault(),n.querySelector(".suggest-item")?.focus())}),n.querySelectorAll(".suggest-item").forEach((g,r,y)=>{let p=()=>{a.value=g.dataset.value;let u=g.dataset.extras?Pt(g.dataset.extras):{};t?.(a.id,g.dataset.value,g.dataset.description??"",u),l(),a.focus()};g.addEventListener("click",p),g.addEventListener("keydown",u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),p()),u.key==="Escape"&&(l(),a.focus()),u.key==="ArrowDown"&&(u.preventDefault(),y[r+1]?.focus()),u.key==="ArrowUp"&&(u.preventDefault(),r===0?a.focus():y[r-1]?.focus())})})})}function Ot(e){return/<[a-z][\s\S]*>/i.test(e)?e:e.split(/\n\n/).map(t=>{let a=t.split(`
`),i=a.filter(n=>/^[•\u2022]\s*/.test(n.trim()));if(i.length>0){let n=a.filter(g=>!/^[•\u2022]\s*/.test(g.trim())&&g.trim()),d=n.length?`<p>${n.join(" ")}</p>`:"",l=i.map(g=>"<li>"+g.replace(/^[•\u2022]\s*/,"").trim().replace(/^(.+?)\s*\u2014\s*/,"<strong>$1</strong> \u2014 ")+"</li>");return`${d}<ul>${l.join("")}</ul>`}return a.some(n=>/^ {2}/.test(n))?a.map(n=>/^ {2}/.test(n)?`<p><code>${n.trim()}</code></p>`:n.trim()?`<p>${n.trim()}</p>`:"").join(""):`<p>${t.trim()}</p>`}).join("")}function qt(e){let t=et[e];if(!t)return;let a=document.getElementById("nist-modal");if(!a)return;a.querySelector(".nist-modal-term").textContent=t.term,a.querySelector(".nist-modal-plain").innerHTML=Ot(t.plain),a.querySelector(".nist-modal-quote").textContent=t.quote,a.querySelector(".nist-modal-cite").textContent=t.cite;let i=a.querySelector(".nist-modal-link");i&&(t.link?(i.href=t.link.href,i.textContent=t.link.label,i.hidden=!1):i.hidden=!0),a.showModal()}function P(e){e.querySelectorAll("[data-nist-ref]").forEach(t=>{t._nistWired||(t._nistWired=!0,t.addEventListener("click",a=>{a.stopPropagation(),qt(t.dataset.nistRef)}))})}var _=[{id:"ransomware",name:"Ransomware Attack",description:"Pre-filled with threat sources, attack paths, and common vulnerabilities drawn from CISA advisories and ENISA Threat Landscape reports. Each item includes a source reference and a prompt to adapt it to your environment.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',tags:["Cybercriminal","Extortion","High impact"],available:!0,defaults:{name:"Ransomware Risk Assessment",purpose:"Assess the organisation\u2019s exposure to ransomware attacks \u2014 covering the likelihood of successful compromise, the potential operational and financial impact, and the effectiveness of existing controls.",scope:"All IT systems handling business-critical data, including endpoints, servers, backup infrastructure, and internet-facing remote access services (VPN, RDP, cloud portals).",assumptions:"The organisation has at least basic IT infrastructure. Remote access is used by some staff. Cloud or on-premises email is in use. No specialised OT/ICS systems are in scope unless added manually."},threatSources:[{name:"Ransomware Affiliate / Cybercriminal Group",type:"Adversarial",description:"Organised cybercriminal groups or Ransomware-as-a-Service (RaaS) affiliates targeting organisations for financial gain through encryption and/or data-theft extortion. Affiliates typically purchase initial access from brokers.",capability:"High",intent:"High",targeting:"Moderate",notes:"Sources: CISA #StopRansomware advisories; ENISA Threat Landscape 2023; Sophos State of Ransomware 2024. Adapt capability/intent ratings to reflect intelligence on groups active in your sector."},{name:"Nation-State Affiliated Threat Actor",type:"Adversarial",description:"State-sponsored or state-aligned actors deploying ransomware or wiper malware for financial gain or geopolitical disruption. Notable examples: Sandworm (Russia), Lazarus Group (North Korea).",capability:"Very High",intent:"High",targeting:"Low",notes:"Sources: CISA Alert AA24-109A; ENISA Threat Landscape for Critical Infrastructure. Remove this source if your organisation is unlikely to be a nation-state target."},{name:"Malicious or Coerced Insider",type:"Adversarial",description:"A disgruntled, financially motivated, or coerced employee who assists ransomware operators by disabling controls, sharing credentials, or deliberately deploying malware.",capability:"Moderate",intent:"Moderate",targeting:"High",notes:"Sources: Verizon DBIR 2024 \u2014 insider involvement observed in ~19\u202F% of incidents. Assess whether your offboarding, access revocation, and insider threat detection processes are adequate."}],threatEventRefIds:["ae-05","ae-06","ae-07","ae-09","ae-11","ae-13","ae-18","ae-19"],threatEventRelevance:{"ae-05":"Expected","ae-06":"Expected","ae-07":"Anticipated","ae-09":"Anticipated","ae-11":"Expected","ae-13":"Expected","ae-18":"Anticipated","ae-19":"Expected"},threatEventNotes:{"ae-05":"Phishing is the leading ransomware initial access vector (~41\u202F% of attacks). Review whether this applies to your organisation and confirm your email filtering and user awareness training coverage. (Source: CISA Ransomware Guide 2023)","ae-06":"Commodity strains such as LockBit, BlackCat/ALPHV, and Cl0p are delivered via email or malicious websites. Update this note with your specific endpoint protection and mail filtering configuration. (Source: CISA #StopRansomware)","ae-07":'Modern "double-extortion" ransomware exfiltrates data before encrypting. Assess your data classification, egress monitoring, and DLP controls. (Source: ENISA Threat Landscape 2024; CISA Ransomware Guide)',"ae-09":"CISA\u2019s Known Exploited Vulnerabilities (KEV) catalogue lists many CVEs actively used in ransomware attacks. Cross-reference with your asset inventory. (Source: cisa.gov/kev)","ae-11":"Internet-exposed RDP is a top-3 ransomware initial access vector. Verify which remote access services are internet-facing in your environment. (Source: Coveware Ransomware Report Q4 2023)","ae-13":"Credential stuffing and brute force against VPN, RDP, and cloud portals are widely used. Assess your password policy and MFA coverage on internet-facing services. (Source: ENISA Threat Landscape 2023)","ae-18":"Data exfiltration before encryption (double extortion) is now standard. Assess whether sensitive data is identifiable and whether egress traffic is monitored. (Source: IBM Cost of a Data Breach 2024)","ae-19":"Ransomware routinely deletes Volume Shadow Copies and targets backup systems before deploying encryption. Verify offline/immutable backup availability and recovery test results. (Source: CISA Ransomware Guide)"},vulnerabilities:[{name:"Unpatched operating systems and applications",description:"Systems running outdated software with known, exploitable CVEs \u2014 particularly internet-facing services and endpoints. Frequently the primary exploitation path for ransomware initial access.",severity:"High",notes:"Cross-reference your asset inventory with the CISA KEV catalogue (cisa.gov/kev). NCSC best-practice timescales (v2.0, Feb\u202F2024): internet-facing services within 5\u202Fdays, OS and applications within 7\u202Fdays, internal/air-gapped systems within 14\u202Fdays \u2014 all regardless of severity. Where a vulnerability is being actively exploited in the wild, treat it as an IT incident and patch immediately, checking for signs of compromise before applying the update. Adapt the severity rating to reflect your actual patching posture. (Source: NCSC Vulnerability Management guidance \u2014 ncsc.gov.uk/collection/vulnerability-management)"},{name:"No MFA on remote access services",description:"Internet-facing VPN, RDP, and cloud authentication portals without multi-factor authentication are highly susceptible to credential stuffing and brute force \u2014 one of the top-three ransomware initial access methods.",severity:"Very High",notes:"CISA and NSA jointly recommend MFA as the single most effective preventive control against ransomware initial access via compromised credentials. (Source: CISA/NSA Advisory AA21-321A) Adjust severity based on your current MFA coverage."},{name:"Inadequate backup and recovery capability",description:"Backups on network-attached or cloud-synced drives are routinely destroyed by ransomware. Without offline or immutable backups and tested recovery procedures, full restoration may be impossible.",severity:"Very High",notes:"Baseline standard: the 3-2-1-1-0 backup rule (3 copies, 2 different media, 1 offsite, 1 offline/immutable, 0 verified errors on last test). Adapt to reflect your current backup architecture and the date of your last successful recovery test."},{name:"Flat or insufficiently segmented network",description:"Without network segmentation, ransomware can spread laterally from the initial compromise point to all reachable systems, dramatically increasing the blast radius.",severity:"High",notes:"Network segmentation is listed as a Tier-1 control in the CISA Ransomware Guide and aligns with NIST CSF control PR.AC-5. Adapt based on your actual network topology and VLAN/firewall configuration."},{name:"No endpoint detection and response (EDR)",description:"Without EDR, pre-encryption ransomware activity \u2014 lateral movement, credential harvesting, shadow copy deletion \u2014 is unlikely to be detected in time to contain the incident.",severity:"Moderate",notes:"Organisations with EDR detect ransomware attacks significantly faster on average. Adjust severity to reflect your current endpoint tooling, detection coverage, and alert response SLA. (Source: CrowdStrike Global Threat Report 2024)"}],predisposingConditionRefIds:["pc-03","pc-07"],predisposingConditionPervasiveness:{"pc-03":"High","pc-07":"Moderate"},predisposingConditionNotes:{"pc-03":"Networked, multi-user environments are the primary ransomware lateral movement target. Assess how broadly your users and systems are interconnected and whether east\u2013west traffic is monitored.","pc-07":"A large or diverse user population increases phishing and social engineering exposure. Review security awareness training coverage and phishing simulation frequency."}},{id:"bec",name:"Business Email Compromise",description:"Pre-filled guidance for BEC scenarios: account takeover, CEO/CFO impersonation, and fraudulent payment redirection.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>',tags:["Fraud","Social engineering","Financial loss"],available:!1},{id:"invoice-fraud",name:"Invoice & Payment Fraud",description:"Covers invoice manipulation, mandate fraud, and supplier account takeover leading to misdirected payments.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',tags:["Fraud","Financial loss","Supplier risk"],available:!1},{id:"ip-theft",name:"Intellectual Property Theft",description:"Covers insider threat, industrial espionage, and exfiltration of trade secrets or R&D data.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',tags:["Espionage","Insider threat","Competitive"],available:!1},{id:"supply-chain",name:"Supply Chain Attack",description:"Covers software supply chain compromise, third-party vendor risk, and hardware or firmware tampering.",icon:'<svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',tags:["Third-party","Software","High impact"],available:!1}];var rt="open-risk-register-assessment",ot=2,ge="open-risk-register-encrypted-export",ye=1,oe=1024*1024,Ht=new Set(["__proto__","prototype","constructor"]),D=new Set(R),Mt=new Set(["Adversarial","Accidental","Structural","Environmental"]),Vt=new Set(["adversarial","non-adversarial"]),Bt=new Set(["essential","important","not-applicable"]),Dt=new Set(ee.map(e=>e.value)),_t=new Set(te.map(e=>e.value)),zt=new Set(pe.map(e=>e.value)),jt=new Set(_.map(e=>e.id)),Ft=new Set(Z.map(e=>e.id)),Ut=new Set([...W,...ie].map(e=>e.id)),Gt=new Set(me.map(e=>e.id)),Yt=new Set(["version","assessments","assessmentIds"]),Kt=new Set(["format","version","exportedAt","assessment"]),Jt=new Set(["id","createdAt","updatedAt","currentStep","completedSteps","tier","nis2EntityType","name","organization","assessor","date","systemName","systemDescription","authorizationBoundary","purpose","scope","assessmentApproach","analysisApproach","assumptions","constraints","riskTolerance","threatSources","threatEvents","vulnerabilities","predisposingConditions","scenarioId","riskNotes"]),Wt=new Set(["id","refId","name","type","isCustom","inScope","capability","intent","targeting","rangeOfEffects","notes"]),Xt=new Set(["id","refId","name","description","type","isCustom","threatSourceIds","relevance","notes","likelihoodInitiation","likelihoodImpact","overallLikelihood","impactLevel","impactNotes","riskLevel","riskOverride","riskOverrideReason","riskNotes"]),Qt=new Set(["id","name","description","severity","notes"]),Zt=new Set(["id","refId","name","description","pervasiveness","notes","isCustom"]),E={id:128,name:160,organization:160,assessor:200,shortText:240,mediumText:1e3,longText:5e3,notes:8e3,itemCount:250};function Oe(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function lt(e){return new TextEncoder().encode(String(e)).length}function U(e,t){if(!Oe(e))throw new Error(`${t} must be an object.`);for(let a of Object.keys(e))if(Ht.has(a))throw new Error(`${t} contains a forbidden field.`)}function X(e,t,a){if(Object.keys(e).filter(n=>!t.has(n)).length>0)throw new Error(`${a} contains unsupported fields.`)}function A(e,t,{maxBytes:a=E.longText,allowEmpty:i=!0,enumSet:n=null}={}){if(e==null){if(!i)throw new Error(`${t} is required.`);return""}if(typeof e!="string")throw new Error(`${t} must be a string.`);if(!i&&e.trim()==="")throw new Error(`${t} is required.`);if(lt(e)>a)throw new Error(`${t} is too long.`);if(n&&e!==""&&!n.has(e))throw new Error(`${t} has an invalid value.`);return e}function fe(e,t,a=!1){if(e===void 0)return a;if(typeof e!="boolean")throw new Error(`${t} must be true or false.`);return e}function it(e,t,{min:a,max:i,defaultValue:n}={}){if(e==null||e===""){if(n!==void 0)return n;throw new Error(`${t} is required.`)}if(!Number.isInteger(e))throw new Error(`${t} must be a whole number.`);if(a!==void 0&&e<a)throw new Error(`${t} is invalid.`);if(i!==void 0&&e>i)throw new Error(`${t} is invalid.`);return e}function ea(e,t,a){if(e==null||e==="")return a;if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}$/.test(e))throw new Error(`${t} must be a valid date.`);return e}function nt(e,t,a){if(e==null||e==="")return a;if(typeof e!="string"||Number.isNaN(Date.parse(e)))throw new Error(`${t} must be a valid timestamp.`);return e}function ta(e,t,{maxItems:a=E.itemCount,maxBytes:i=E.id}={}){if(e==null)return[];if(!Array.isArray(e))throw new Error(`${t} must be a list.`);if(e.length>a)throw new Error(`${t} is too large.`);return e.map((n,d)=>A(n,`${t} item ${d+1}`,{maxBytes:i,allowEmpty:!1}))}function ct(e){return[...new Set(e)]}function aa(e,t,{preserveIds:a,allowIncompleteDrafts:i=!1}){U(e,"Threat source"),X(e,Wt,"Threat source");let n=A(e.id??"","Threat source id",{maxBytes:E.id,allowEmpty:!0}),d=a&&n||t(),l=A(e.refId??"","Threat source reference",{maxBytes:E.id,allowEmpty:!0}),g=fe(e.isCustom,"Threat source custom flag",!1),r=A(e.type??"","Threat source type",{maxBytes:E.shortText,allowEmpty:!1,enumSet:Mt});if(!g&&l&&!Ft.has(l))throw new Error("Threat source reference is invalid.");return{oldId:n,value:{id:d,refId:l||null,name:A(e.name,"Threat source name",{maxBytes:E.shortText,allowEmpty:i&&g}),type:r,isCustom:g,inScope:fe(e.inScope,"Threat source scope flag",!0),capability:A(e.capability??"","Threat source capability",{maxBytes:E.shortText,enumSet:D}),intent:A(e.intent??"","Threat source intent",{maxBytes:E.shortText,enumSet:D}),targeting:A(e.targeting??"","Threat source targeting",{maxBytes:E.shortText,enumSet:D}),rangeOfEffects:A(e.rangeOfEffects??"","Threat source range of effects",{maxBytes:E.shortText,enumSet:D}),notes:A(e.notes??"","Threat source notes",{maxBytes:E.notes})}}}function sa(e,t,a,{preserveIds:i,allowUnknownSourceRefs:n=!1,allowIncompleteDrafts:d=!1}){U(e,"Threat event"),X(e,Xt,"Threat event");let l=A(e.id??"","Threat event id",{maxBytes:E.id,allowEmpty:!0}),g=i&&l||t(),r=A(e.refId??"","Threat event reference",{maxBytes:E.id,allowEmpty:!0}),y=fe(e.isCustom,"Threat event custom flag",!1),p=A(e.type??"","Threat event type",{maxBytes:E.shortText,allowEmpty:!1,enumSet:Vt});if(!y&&r&&!Ut.has(r))throw new Error("Threat event reference is invalid.");let u=ta(e.threatSourceIds,"Threat source references"),m=ct(u.map(T=>{let c=a.get(T);if(!c){if(n)return null;throw new Error("Threat event references an unknown threat source.")}return c}).filter(Boolean));return{id:g,refId:r||null,name:A(e.name,"Threat event name",{maxBytes:E.mediumText,allowEmpty:d&&y}),description:A(e.description??"","Threat event description",{maxBytes:E.longText}),type:p,isCustom:y,threatSourceIds:m,relevance:A(e.relevance??"","Threat event relevance",{maxBytes:E.shortText,enumSet:zt}),notes:A(e.notes??"","Threat event notes",{maxBytes:E.notes}),likelihoodInitiation:A(e.likelihoodInitiation??"","Likelihood of initiation",{maxBytes:E.shortText,enumSet:D}),likelihoodImpact:A(e.likelihoodImpact??"","Likelihood of adverse impact",{maxBytes:E.shortText,enumSet:D}),overallLikelihood:A(e.overallLikelihood??"","Overall likelihood",{maxBytes:E.shortText,enumSet:D}),impactLevel:A(e.impactLevel??"","Impact level",{maxBytes:E.shortText,enumSet:D}),impactNotes:A(e.impactNotes??"","Impact notes",{maxBytes:E.notes}),riskLevel:A(e.riskLevel??"","Risk level",{maxBytes:E.shortText,enumSet:D}),riskOverride:A(e.riskOverride??"","Risk override",{maxBytes:E.shortText,enumSet:D}),riskOverrideReason:A(e.riskOverrideReason??"","Risk override reason",{maxBytes:E.mediumText}),riskNotes:A(e.riskNotes??"","Risk notes",{maxBytes:E.notes})}}function ia(e,t,{preserveIds:a,allowIncompleteDrafts:i=!1}){U(e,"Vulnerability"),X(e,Qt,"Vulnerability");let n=A(e.id??"","Vulnerability id",{maxBytes:E.id,allowEmpty:!0});return{id:a&&n||t(),name:A(e.name,"Vulnerability name",{maxBytes:E.mediumText,allowEmpty:i}),description:A(e.description??"","Vulnerability description",{maxBytes:E.longText}),severity:A(e.severity??"","Vulnerability severity",{maxBytes:E.shortText,enumSet:D}),notes:A(e.notes??"","Vulnerability notes",{maxBytes:E.notes})}}function na(e,t,{preserveIds:a,allowIncompleteDrafts:i=!1}){U(e,"Predisposing condition"),X(e,Zt,"Predisposing condition");let n=A(e.id??"","Predisposing condition id",{maxBytes:E.id,allowEmpty:!0}),d=A(e.refId??"","Predisposing condition reference",{maxBytes:E.id,allowEmpty:!0}),l=fe(e.isCustom,"Predisposing condition custom flag",!1);if(!l&&d&&!Gt.has(d))throw new Error("Predisposing condition reference is invalid.");return{id:a&&n||t(),refId:d||null,name:A(e.name,"Predisposing condition name",{maxBytes:E.mediumText,allowEmpty:i&&l}),description:A(e.description??"","Predisposing condition description",{maxBytes:E.longText}),pervasiveness:A(e.pervasiveness??"","Predisposing condition pervasiveness",{maxBytes:E.shortText,enumSet:D}),notes:A(e.notes??"","Predisposing condition notes",{maxBytes:E.notes}),isCustom:l}}function re(e,{preserveIds:t=!1,idFactory:a,allowUnknownSourceRefs:i=!1,allowIncompleteDrafts:n=!1}){U(e,"Assessment"),X(e,Jt,"Assessment");let d=new Date().toISOString(),l=nt(e.createdAt,"Created at",d),g=nt(e.updatedAt,"Updated at",d),r=Array.isArray(e.threatSources)?e.threatSources:[],y=Array.isArray(e.threatEvents)?e.threatEvents:[],p=Array.isArray(e.vulnerabilities)?e.vulnerabilities:[],u=Array.isArray(e.predisposingConditions)?e.predisposingConditions:[];if(r.length>E.itemCount||y.length>E.itemCount||p.length>E.itemCount||u.length>E.itemCount)throw new Error("The imported assessment contains too many records.");let m=t&&A(e.id??"","Assessment id",{maxBytes:E.id,allowEmpty:!0})||a(),T=new Map,c=r.map(L=>{let f=aa(L,a,{preserveIds:t,allowIncompleteDrafts:n});return f.oldId&&T.set(f.oldId,f.value.id),f.value}),S=y.map(L=>sa(L,a,T,{preserveIds:t,allowUnknownSourceRefs:i,allowIncompleteDrafts:n})),k=p.map(L=>ia(L,a,{preserveIds:t,allowIncompleteDrafts:n})),v=u.map(L=>na(L,a,{preserveIds:t,allowIncompleteDrafts:n})),b=ct((Array.isArray(e.completedSteps)?e.completedSteps:[]).map(L=>it(L,"Completed step",{min:1,max:9}))),o=it(e.currentStep??1,"Current step",{min:1,max:9,defaultValue:1}),h=A(e.tier??"system","Assessment tier",{maxBytes:E.shortText,allowEmpty:!1,enumSet:new Set(["org","system"])}),w=A(e.nis2EntityType??"","NIS2 entity type",{maxBytes:E.shortText,enumSet:Bt}),$=A(e.scenarioId??"","Scenario id",{maxBytes:E.shortText});if($&&!jt.has($))throw new Error("Scenario id is invalid.");return{id:m,createdAt:l,updatedAt:g,currentStep:o,completedSteps:b,tier:h,nis2EntityType:w,name:A(e.name??"","Assessment name",{maxBytes:E.shortText}),organization:A(e.organization??"","Organisation",{maxBytes:E.shortText}),assessor:A(e.assessor??"","Assessor",{maxBytes:E.shortText}),date:ea(e.date,"Assessment date",new Date().toISOString().slice(0,10)),systemName:A(e.systemName??"","System or scope name",{maxBytes:E.mediumText}),systemDescription:A(e.systemDescription??"","System description",{maxBytes:E.longText}),authorizationBoundary:A(e.authorizationBoundary??"","Authorization boundary",{maxBytes:E.longText}),purpose:A(e.purpose??"","Purpose",{maxBytes:E.longText}),scope:A(e.scope??"","Scope",{maxBytes:E.longText}),assessmentApproach:A(e.assessmentApproach??"qualitative","Assessment approach",{maxBytes:E.shortText,allowEmpty:!1,enumSet:Dt}),analysisApproach:A(e.analysisApproach??"","Analysis approach",{maxBytes:E.shortText,enumSet:_t}),assumptions:A(e.assumptions??"","Assumptions",{maxBytes:E.longText}),constraints:A(e.constraints??"","Constraints",{maxBytes:E.longText}),riskTolerance:A(e.riskTolerance??"","Risk tolerance",{maxBytes:E.shortText,enumSet:D}),threatSources:c,threatEvents:S,vulnerabilities:k,predisposingConditions:v,scenarioId:$,riskNotes:A(e.riskNotes??"","Assessment notes",{maxBytes:E.notes})}}function dt(e,t){if(lt(e)>oe)throw new Error("Import files larger than 1 MB are not supported.");let a;try{a=JSON.parse(e)}catch{throw new Error("Invalid JSON format.")}if(U(a,"Import document"),a.format){if(X(a,Kt,"Import document"),a.format!==rt||a.version!==ot)throw new Error("Unsupported assessment export format.");return U(a.assessment,"Assessment"),re(a.assessment,{preserveIds:!1,idFactory:t,allowUnknownSourceRefs:!1})}return re(a,{preserveIds:!1,idFactory:t,allowUnknownSourceRefs:!1})}function ut(e,t=()=>e.id){return{format:rt,version:ot,exportedAt:new Date().toISOString(),assessment:re(e,{preserveIds:!0,idFactory:t,allowUnknownSourceRefs:!0})}}function pt(e,t=()=>e.id){return re(e,{preserveIds:!0,idFactory:t,allowUnknownSourceRefs:!0,allowIncompleteDrafts:!0})}function qe(e,t){if(!Oe(e))return{version:2,assessments:{},assessmentIds:[]};try{if(U(e,"Saved data"),X(e,Yt,"Saved data"),e.version!==2)throw new Error("Unsupported store version.");if(U(e.assessments??{},"Saved assessments"),!Array.isArray(e.assessmentIds))throw new Error("Saved assessment ids must be a list.");let a={},i=[];for(let n of e.assessmentIds){if(typeof n!="string")continue;let d=e.assessments?.[n];if(d)try{let l=re(d,{preserveIds:!0,idFactory:t,allowUnknownSourceRefs:!0,allowIncompleteDrafts:!0});if(!l.id||a[l.id])continue;a[l.id]=l,i.push(l.id)}catch{}}return{version:2,assessments:a,assessmentIds:i}}catch{return{version:2,assessments:{},assessmentIds:[]}}}function be(e){try{let t=JSON.parse(e);return Oe(t)&&t.format===ge&&t.version===ye}catch{return!1}}var Ve=25e4,ra=256,oa=12,la=16;function mt(){if(!globalThis.crypto?.subtle||!globalThis.crypto?.getRandomValues)throw new Error("Web Crypto is not available in this browser.")}function ht(e){if(typeof e!="string"||e.length<12)throw new Error("Use a passphrase with at least 12 characters.")}function He(e){if(typeof Buffer<"u")return Buffer.from(e).toString("base64");let t="",a=32768;for(let i=0;i<e.length;i+=a)t+=String.fromCharCode(...e.subarray(i,i+a));return btoa(t)}function Me(e){if(typeof Buffer<"u")return new Uint8Array(Buffer.from(e,"base64"));let t=atob(e),a=new Uint8Array(t.length);for(let i=0;i<t.length;i+=1)a[i]=t.charCodeAt(i);return a}async function vt(e,t,a){let i=new TextEncoder,n=await crypto.subtle.importKey("raw",i.encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:Ve,hash:"SHA-256"},n,{name:"AES-GCM",length:ra},!1,a)}function ca(e){if(new TextEncoder().encode(e).length>oe)throw new Error("Import files larger than 1 MB are not supported.");let t;try{t=JSON.parse(e)}catch{throw new Error("Invalid encrypted backup format.")}if(!t||typeof t!="object"||Array.isArray(t))throw new Error("Invalid encrypted backup format.");let a=new Set(["format","version","cipher","kdf","digest","iterations","salt","iv","ciphertext"]);for(let i of Object.keys(t))if(i==="__proto__"||i==="prototype"||i==="constructor"||!a.has(i))throw new Error("Invalid encrypted backup format.");if(t.format!==ge||t.version!==ye||t.cipher!=="AES-GCM"||t.kdf!=="PBKDF2"||t.digest!=="SHA-256"||t.iterations!==Ve)throw new Error("Unsupported encrypted backup format.");if(typeof t.salt!="string"||typeof t.iv!="string"||typeof t.ciphertext!="string")throw new Error("Invalid encrypted backup format.");return t}async function ft(e,t){mt(),ht(t);let a=new TextEncoder,i=crypto.getRandomValues(new Uint8Array(la)),n=crypto.getRandomValues(new Uint8Array(oa)),d=await vt(t,i,["encrypt"]),l=await crypto.subtle.encrypt({name:"AES-GCM",iv:n},d,a.encode(e));return JSON.stringify({format:ge,version:ye,cipher:"AES-GCM",kdf:"PBKDF2",digest:"SHA-256",iterations:Ve,salt:He(i),iv:He(n),ciphertext:He(new Uint8Array(l))},null,2)}async function gt(e,t){mt(),ht(t);let a=ca(e),i=await vt(t,Me(a.salt),["decrypt"]);try{let n=await crypto.subtle.decrypt({name:"AES-GCM",iv:Me(a.iv)},i,Me(a.ciphertext));return new TextDecoder().decode(n)}catch{throw new Error("Could not decrypt the backup. Check the passphrase and try again.")}}var yt="nist-800-30-v2";function we(){try{let e=localStorage.getItem(yt);if(e)return qe(JSON.parse(e),q)}catch{}return{version:2,assessments:{},assessmentIds:[]}}function Be(e){try{localStorage.setItem(yt,JSON.stringify(qe(e,q)))}catch{}}function le(){let e=we();return e.assessmentIds.filter(t=>e.assessments[t]).map(t=>e.assessments[t]).sort((t,a)=>a.updatedAt.localeCompare(t.updatedAt))}function Se(e){return we().assessments[e]??null}function G(e){let t=we(),a=new Date().toISOString(),i=pt({...e,id:e.id||q(),createdAt:e.createdAt||a,updatedAt:a},()=>e.id||q());t.assessments[i.id]||t.assessmentIds.unshift(i.id),t.assessments[i.id]=i,Be(t)}function bt(e){let t=we();delete t.assessments[e],t.assessmentIds=t.assessmentIds.filter(a=>a!==e),Be(t)}function wt(){Be({version:2,assessments:{},assessmentIds:[]})}function St(e="system"){return{id:q(),createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),currentStep:1,completedSteps:[],tier:e,nis2EntityType:"",name:"",organization:"",assessor:"",date:he(),systemName:"",systemDescription:"",authorizationBoundary:"",purpose:"",scope:"",assessmentApproach:"qualitative",analysisApproach:"",assumptions:"",constraints:"",riskTolerance:"",threatSources:[],threatEvents:[],vulnerabilities:[],predisposingConditions:[],scenarioId:"",riskNotes:""}}function De(e){if(be(e))throw new Error("This backup is encrypted. Use the encrypted import flow and enter the passphrase.");let t=dt(e,q);return G(t),t.id}async function kt(e,t){let a=await gt(e,t);return De(a)}function ce(e){let t=Se(e);if(!t)throw new Error("Assessment not found");return JSON.stringify(ut(t),null,2)}async function ke(e,t){let a=ce(e);return ft(a,t)}var _e={};j(_e,{render:()=>ua,validate:()=>pa});function V(e,t=void 0){if(typeof window>"u")return;let a=window.umami;if(!(!a||typeof a.track!="function")){if(t&&typeof t=="object"){a.track(e,t);return}a.track(e)}}var Et={org:{badge:"tier-badge-org",text:"Org / Process"},system:{badge:"tier-badge-system",text:"System"}};function da({tier:e,scenarioId:t}){let a={tier:e,mode:t?"guided":"blank"};t&&(a.scenarioId=t),V("start_assessment",a)}function ua(e,{openAssessment:t}){let a=document.createElement("div"),i=null;function n(v){let b={"Very High":0,High:0,Moderate:0,Low:0,"Very Low":0};return(v.threatEvents??[]).forEach(h=>{let w=h.riskOverride||h.riskLevel;b[w]!==void 0&&b[w]++}),Object.values(b).reduce((h,w)=>h+w,0)?R.slice().reverse().filter(h=>b[h]>0).map(h=>`<span class="badge badge-${K(h)}">${b[h]} ${s(h)}</span>`).join(" "):'<span class="text-muted">No risk items yet</span>'}function d(v){let b=v.tier==="org"?Et.org:Et.system;return`<span class="tier-badge ${b.badge}">${b.text}</span>`}function l(){let v=le();a.innerHTML=`
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
            Import Backup
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
          ${_.map(o=>`
            <div class="scenario-card ${o.available?"":"scenario-card--disabled"}" ${o.available?`role="button" tabindex="0" data-scenario="${s(o.id)}"`:""} aria-label="${s(o.name)}${o.available?"":" \u2014 coming soon"}">
              <div class="scenario-card-icon">${o.icon??""}</div>
              <div class="scenario-card-body">
                <div class="scenario-card-title-row">
                  <strong>${s(o.name)}</strong>
                  ${o.available?"":'<span class="badge badge-neutral badge-xs">Coming soon</span>'}
                </div>
                <p>${s(o.description)}</p>
                <div class="scenario-tags">
                  ${(o.tags??[]).map(h=>`<span class="scenario-tag">${s(h)}</span>`).join("")}
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
        <strong>Sensitive data warning:</strong> Assessments are stored <strong>unencrypted</strong> in this browser's localStorage.
        Do not use this tool on shared devices or browsers you do not trust. Malicious scripts, browser extensions,
        and compromised endpoints can still read data stored on this origin. Export an <strong>encrypted backup</strong>
        for sensitive assessments, and use <strong>Delete all local data</strong> when you are finished.
      </div>
      <div class="flex gap-3 flex-wrap mb-5">
        <button id="btn-delete-all" class="btn btn-outline-danger" type="button" ${v.length===0?'disabled aria-disabled="true"':""}>Delete all local data</button>
      </div>
      ${v.length===0?`
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
          ${v.map(o=>`
            <div class="assessment-card" data-id="${s(o.id)}">
              <div class="assessment-card-body" role="button" tabindex="0" data-open="${s(o.id)}"
                aria-label="Open assessment: ${s(o.name)}">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 flex-wrap mb-2">
                      <h3 class="assessment-name">${s(o.name)}</h3>
                      ${d(o)}
                      ${o.scenarioId?`<span class="scenario-badge">${s(_.find(h=>h.id===o.scenarioId)?.name??o.scenarioId)}</span>`:""}
                      <span class="badge badge-neutral badge-xs">Step ${o.currentStep??1} of 9</span>
                    </div>
                    ${o.systemName?`<p class="assessment-meta">${o.tier==="org"?"Scope":"System"}: <strong>${s(o.systemName)}</strong></p>`:""}
                    ${o.organization?`<p class="assessment-meta-sm">${s(o.organization)}</p>`:""}
                    <div class="flex gap-2 flex-wrap mb-3">
                      ${n(o)}
                    </div>
                    <p class="assessment-timestamp">
                      Created ${Re(o.createdAt)} &nbsp;\xB7&nbsp; Updated ${Re(o.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
              <div class="assessment-card-actions">
                <button class="btn btn-secondary btn-sm btn-open" data-id="${s(o.id)}" type="button">Open</button>
                <button class="btn btn-primary btn-sm btn-export-encrypted" data-id="${s(o.id)}" type="button">Export Encrypted</button>
                <button class="btn btn-secondary btn-sm btn-export" data-id="${s(o.id)}" type="button">Export JSON</button>
                <button class="btn btn-sm btn-outline-danger btn-delete" data-id="${s(o.id)}" type="button"
                  aria-label="Delete assessment ${s(o.name)}">Delete</button>
              </div>
            </div>`).join("")}
        </div>`}`,P(a);function b(o){["mode-panel","scenario-panel","tier-panel"].forEach(h=>{let w=a.querySelector(`#${h}`);w&&(w.hidden=h!==o)}),a.querySelector(`#${o}`)?.scrollIntoView({behavior:"smooth",block:"nearest"})}a.querySelector("#btn-new")?.addEventListener("click",()=>b("mode-panel")),a.querySelector("#btn-mode-blank")?.addEventListener("click",()=>{V("assessment_mode_blank"),i=null,b("tier-panel")}),a.querySelector("#btn-mode-guided")?.addEventListener("click",()=>{V("assessment_mode_guided"),b("scenario-panel")}),a.querySelectorAll("[data-scenario]").forEach(o=>{let h=()=>{let w=_.find($=>$.id===o.dataset.scenario);!w||!w.available||(V("guided_option_selected",{scenarioId:w.id,scenarioName:w.name}),i=w,g("org"))};o.addEventListener("click",h),o.addEventListener("keydown",w=>{(w.key==="Enter"||w.key===" ")&&h()})}),a.querySelector("#btn-back-to-mode")?.addEventListener("click",()=>b("mode-panel")),a.querySelector("#btn-back-to-prev")?.addEventListener("click",()=>{b(i?"scenario-panel":"mode-panel")}),a.querySelector("#file-import")?.addEventListener("change",y),a.querySelector("#btn-delete-all")?.addEventListener("click",T),a.querySelector("#btn-tier-org")?.addEventListener("click",()=>g("org")),a.querySelector("#btn-tier-system")?.addEventListener("click",()=>g("system")),a.querySelectorAll("[data-open]").forEach(o=>{o.addEventListener("click",()=>t(o.dataset.open)),o.addEventListener("keydown",h=>{(h.key==="Enter"||h.key===" ")&&t(o.dataset.open)})}),a.querySelectorAll(".btn-open").forEach(o=>o.addEventListener("click",()=>t(o.dataset.id))),a.querySelectorAll(".btn-export").forEach(o=>o.addEventListener("click",()=>p(o.dataset.id))),a.querySelectorAll(".btn-export-encrypted").forEach(o=>o.addEventListener("click",()=>u(o.dataset.id))),a.querySelectorAll(".btn-delete").forEach(o=>o.addEventListener("click",()=>m(o.dataset.id)))}function g(v){let b=St(v);i&&k(b,i),G(b),da({tier:v,scenarioId:i?.id}),t(b.id)}function r(v,b){let o=document.createElement("div");o.className=`alert ${v==="error"?"alert-error":"alert-info"}`,o.setAttribute("role",v==="error"?"alert":"status"),o.textContent=b,a.prepend(o),v!=="error"&&setTimeout(()=>o.remove(),4e3)}async function y(v){let b=v.target.files?.[0];if(!b)return;if(b.size>oe){V("import_assessment",{status:"failed",reason:"file_too_large"}),r("error","Import failed: files larger than 1 MB are not supported."),v.target.value="";return}let o=new FileReader;o.onload=async h=>{let w=String(h.target?.result??"");try{let $=be(w)?"encrypted":"json",L;if($==="encrypted"){let f=await S({title:"Decrypt encrypted backup",description:"Enter the passphrase used when the encrypted backup was created.",confirmLabel:"Decrypt & import",requireConfirmation:!1});if(!f)return;L=await kt(w,f)}else L=De(w);V("import_assessment",{status:"success",format:$}),l(),r("info","Assessment imported successfully.")}catch($){V("import_assessment",{status:"failed"}),r("error",`Import failed: ${$.message}`)}},o.readAsText(b),v.target.value=""}function p(v){try{let b=ce(v),h=`risk-assessment-${(le().find(w=>w.id===v)?.name??v).replace(/[^a-z0-9]/gi,"-").toLowerCase()}.json`;ae(b,h,"application/json"),V("export_json",{source:"dashboard"})}catch(b){r("error",`Export failed: ${b.message}`)}}async function u(v){let b=le().find(h=>h.id===v),o=await S({title:"Create encrypted backup",description:"Use a strong passphrase. It is never stored and cannot be recovered later.",confirmLabel:"Create backup",requireConfirmation:!0});if(o)try{let h=await ke(v,o),w=`risk-assessment-${(b?.name??v).replace(/[^a-z0-9]/gi,"-").toLowerCase()}.encrypted.json`;ae(h,w,"application/json"),V("export_encrypted",{source:"dashboard"}),r("info","Encrypted backup created successfully.")}catch(h){r("error",`Encrypted export failed: ${h.message}`)}}function m(v){let b=le().find(o=>o.id===v);c(`Delete "${b?.name??"this assessment"}"?`,"This will permanently remove all assessment data from your browser. This action cannot be undone.",()=>{bt(v),l()})}function T(){c("Delete all local data?","This permanently deletes every assessment stored in this browser, including imported data. Make sure you have exported backups first.",()=>{wt(),l(),r("info","All local assessment data has been deleted.")},"Delete all data")}function c(v,b,o,h="Delete"){let w=C("div",{className:"dialog-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"dlg-title"}),$=C("div",{className:"dialog"});$.append(C("h3",{id:"dlg-title",text:v}),C("p",{text:b}));let L=C("div",{className:"dialog-actions"},[J({id:"dlg-cancel",className:"btn btn-secondary",type:"button",text:"Cancel"}),J({id:"dlg-confirm",className:"btn btn-danger",type:"button",text:h})]);$.appendChild(L),w.appendChild($),document.body.appendChild(w),w.querySelector("#dlg-cancel").addEventListener("click",()=>w.remove()),w.querySelector("#dlg-confirm").addEventListener("click",()=>{w.remove(),o()}),w.addEventListener("click",f=>{f.target===w&&w.remove()})}function S({title:v,description:b,confirmLabel:o,requireConfirmation:h}){return new Promise(w=>{let $=C("div",{className:"dialog-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"passphrase-title"}),L=C("form",{className:"dialog",novalidate:!0}),f=se({id:"passphrase-input",className:"form-control",type:"password",autocomplete:"new-password"}),x=se({id:"passphrase-confirm",className:"form-control",type:"password",autocomplete:"new-password"}),H=C("p",{className:"text-danger text-sm",role:"alert",hidden:!0});L.append(C("h3",{id:"passphrase-title",text:v}),C("p",{text:b}),C("label",{className:"label",for:"passphrase-input",text:"Passphrase"}),f),h&&L.append(C("label",{className:"label mt-3",for:"passphrase-confirm",text:"Confirm passphrase"}),x),L.append(H),L.appendChild(C("div",{className:"dialog-actions mt-4"},[J({className:"btn btn-secondary",type:"button",text:"Cancel"}),J({className:"btn btn-primary",type:"submit",text:o})])),$.appendChild(L),document.body.appendChild($);let[z]=L.querySelectorAll("button"),I=M=>{$.remove(),w(M)},F=M=>{H.hidden=!1,H.textContent=M};z.addEventListener("click",()=>I(null)),$.addEventListener("click",M=>{M.target===$&&I(null)}),L.addEventListener("submit",M=>{M.preventDefault();let Q=f.value;if(Q.length<12){F("Use a passphrase with at least 12 characters.");return}if(h&&Q!==x.value){F("The passphrases do not match.");return}I(Q)}),f.focus()})}function k(v,b){let o=b.defaults??{};o.name&&(v.name=o.name),o.purpose&&(v.purpose=o.purpose),o.scope&&(v.scope=o.scope),o.assumptions&&(v.assumptions=o.assumptions),v.scenarioId=b.id,v.analysisApproach="threat-oriented",v.threatSources=[],v.threatEvents=[],v.vulnerabilities=[],v.predisposingConditions=[]}return l(),a}function pa(){return{valid:!0,errors:[]}}var ze={};j(ze,{render:()=>ma,validate:()=>ha});function ma(e,t){let a=e.tier==="org",i=a?"tier-1":"tier-3",n=a?"Organisation / Business Process (Tier 1 &amp; 2)":"Information System (Tier 3)",d=a?"Business Process or Scope Name *":"System Name *",l=a?"e.g. Order Fulfilment Process, HR Management, Finance &amp; Payroll":"e.g. Human Resources Management System (HRMS)",g=a?"Process Description":"System Description",r=a?"Brief description of the business process, its purpose and key activities\u2026":"Brief description of the system's purpose, users, and key functions\u2026",y=a?"Scope &amp; Boundaries":"Authorization Boundary",p=a?"What is included and excluded from this assessment? Who and what are in scope?":"Describe the components, interfaces, and services within the authorization boundary\u2026",u=document.createElement("div");u.innerHTML=`
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

        <div class="alert alert-warning mb-5">
          <strong>Before you enter sensitive risk data:</strong> this assessment is stored unencrypted in your browser until you delete it.
          Use encrypted backups for sensitive records, avoid shared or untrusted devices, and remember that local-first storage does not protect against XSS, malicious browser extensions, or compromised endpoints.
        </div>

        <fieldset class="section-card">
          <legend class="section-title">Assessment Identification</legend>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="label" for="f-name">Assessment Name *</label>
              <input class="form-control" id="f-name" type="text" value="${s(e.name)}"
                placeholder="e.g. Q3 2025 Risk Assessment" autocomplete="off" aria-required="true" />
            </div>
            <div class="form-group">
              <label class="label" for="f-org">Organisation</label>
              <input class="form-control" id="f-org" type="text" value="${s(e.organization)}"
                placeholder="e.g. Acme Corp" autocomplete="organization" />
            </div>
          </div>
          <div class="form-row form-row-2">
            <div class="form-group">
              <label class="label" for="f-assessor">Assessor(s)</label>
              <input class="form-control" id="f-assessor" type="text" value="${s(e.assessor)}"
                placeholder="e.g. J. Smith, A. Jones" autocomplete="name" />
            </div>
            <div class="form-group">
              <label class="label" for="f-date">Assessment Date</label>
              <input class="form-control" id="f-date" type="date" value="${s(e.date||he())}" />
            </div>
          </div>
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            ${n}
            <button type="button" class="nist-ref-btn" data-nist-ref="${i}" aria-label="NIST definition">&#9432;</button>
          </legend>
          <div class="info-box mb-4">
            ${a?"This is a <strong>Tier 1/2 assessment</strong> \u2014 it examines risks at the <strong>organisation or business-process level</strong>. This is the right starting point when you want a broad risk overview before drilling into specific systems.":"This is a <strong>Tier 3 assessment</strong> \u2014 it examines risks for a specific <strong>information system</strong>. Tier 3 assessments support security control selection, system authorisation, and continuous monitoring activities."}
          </div>
          ${at({id:"f-sysname",label:d,value:s(e.systemName),placeholder:l,required:!0,suggestions:a?[{value:"Whole Organisation",hint:"Assess cybersecurity risk across the entire organisation \u2014 all departments, processes, and supporting IT.",description:"This risk assessment covers all organisational units, business processes, and supporting information technology within the organisation.",extras:{boundary:"In scope: all business units, departments, key business processes, and supporting IT systems. Out of scope: third-party managed services and cloud platforms not under direct organisational control.",scope:"The assessment examines cybersecurity risks across the full organisational structure, including people, processes, technology, and governance arrangements."}},{value:"On-Premises Datacenter",hint:"Scope the assessment to your organisation's on-site datacenter \u2014 servers, storage, networking, and physical infrastructure.",description:"This risk assessment covers the on-premises datacenter environment, including physical servers, storage systems, network infrastructure, and associated management processes.",extras:{boundary:"In scope: all physical and virtual infrastructure within the datacenter perimeter, including servers, storage, networking equipment, and environmental controls. Out of scope: end-user devices and remote office locations.",scope:"The assessment focuses on cybersecurity risks associated with the on-premises datacenter infrastructure, including availability, integrity, and confidentiality of hosted systems and data."}},{value:"ERP System",hint:"Focus on your Enterprise Resource Planning platform and the business processes and data it supports.",description:"This risk assessment covers the Enterprise Resource Planning system, including all integrated modules, underlying databases, interfaces, and dependent business processes.",extras:{boundary:"In scope: all ERP modules, underlying database servers, application interfaces, and administrative access paths. Out of scope: end-user workstations and peripheral applications not directly integrated with the ERP.",scope:"The assessment examines cybersecurity risks to the ERP system, including risks to business-critical data, operational continuity, and integration points with other organisational systems."}}]:[]})}
          <div class="form-group">
            <label class="label" for="f-sysdesc">${g}</label>
            <textarea class="form-control" id="f-sysdesc" rows="3"
              placeholder="${r}">${s(e.systemDescription)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-boundary">${y}</label>
            <textarea class="form-control" id="f-boundary" rows="2"
              placeholder="${p}">${s(e.authorizationBoundary)}</textarea>
          </div>
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title">Assessment Scope &amp; Purpose</legend>
          <div class="form-group">
            <label class="label" for="f-purpose">Purpose *</label>
            <textarea class="form-control" id="f-purpose" rows="3"
              placeholder="Why are you conducting this assessment? (e.g., NIS2 compliance, internal review, following a security incident, preparing for system go-live)\u2026">${s(e.purpose)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-scope">Scope</label>
            <textarea class="form-control" id="f-scope" rows="3"
              placeholder="What is and is not included in this assessment?\u2026">${s(e.scope)}</textarea>
          </div>
        </fieldset>


      </div>
    </div>`,P(u);let m=["name","org","assessor","date","sysname","sysdesc","boundary","purpose","scope"],T={name:"name",org:"organization",assessor:"assessor",date:"date",sysname:"systemName",sysdesc:"systemDescription",boundary:"authorizationBoundary",purpose:"purpose",scope:"scope"};return m.forEach(c=>{let S=u.querySelector(`#f-${c}`);S&&(S.addEventListener("input",()=>t({[T[c]]:S.value})),S.addEventListener("change",()=>t({[T[c]]:S.value})))}),st(u,(c,S,k,v)=>{let b=c.replace("f-",""),o=T[b],h={};if(o&&(h[o]=S),c==="f-sysname"){if(k){let w=u.querySelector("#f-sysdesc");w&&!w.value.trim()&&(w.value=k,h.systemDescription=k)}if(v?.boundary){let w=u.querySelector("#f-boundary");w&&!w.value.trim()&&(w.value=v.boundary,h.authorizationBoundary=v.boundary)}if(v?.scope){let w=u.querySelector("#f-scope");w&&!w.value.trim()&&(w.value=v.scope,h.scope=v.scope)}}t(h,!0)}),u}function ha(e){let t=[];return e.name?.trim()||t.push("Assessment Name is required."),e.systemName?.trim()||t.push(e.tier==="org"?"Business Process / Scope Name is required.":"System Name is required."),e.purpose?.trim()||t.push("Purpose is required."),{valid:t.length===0,errors:t}}var je={};j(je,{render:()=>va,validate:()=>fa});function va(e,t){let a=!!e.scenarioId,i=ee.find(m=>m.value==="qualitative"),n=ee.filter(m=>m.value!=="qualitative"),d=m=>m.map(T=>`
    <label class="radio-option ${e.assessmentApproach===T.value?"selected":""}">
      <input type="radio" name="assessmentApproach" value="${s(T.value)}"
        ${e.assessmentApproach===T.value?"checked":""} />
      <div>
        <strong>${s(T.label)}</strong>
        <p>${s(T.desc)}</p>
      </div>
    </label>`).join(""),l=a?`
    <div class="radio-group" id="approach-radios">
      ${d([i])}
    </div>
    <details class="advanced-options">
      <summary class="advanced-options-toggle">Show advanced approaches (semi-quantitative &amp; quantitative)</summary>
      <div class="radio-group mt-3" id="approach-radios-advanced">
        ${d(n)}
      </div>
    </details>`:`
    <div class="radio-group" id="approach-radios">
      ${d(ee)}
    </div>`,g=te.find(m=>m.value==="threat-oriented"),r=te.filter(m=>m.value!=="threat-oriented"),y=m=>m.map(T=>`
    <label class="radio-option ${e.analysisApproach===T.value?"selected":""}">
      <input type="radio" name="analysisApproach" value="${s(T.value)}"
        ${e.analysisApproach===T.value?"checked":""} />
      <div>
        <strong>${s(T.label)}</strong>
        <p>${s(T.desc)}</p>
      </div>
    </label>`).join(""),p=a?`
    <div class="radio-group" id="analysis-radios">
      ${y([g])}
    </div>
    <details class="advanced-options">
      <summary class="advanced-options-toggle">Show other starting points (asset / impact-oriented &amp; vulnerability-oriented)</summary>
      <div class="radio-group mt-3" id="analysis-radios-advanced">
        ${y(r)}
      </div>
    </details>`:`
    <div class="radio-group" id="analysis-radios">
      ${y(te)}
    </div>`,u=document.createElement("div");return u.innerHTML=`
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
          ${l}
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title legend-flex">
            What is the starting point for identifying risks?
            <span class="nist-term">Analysis Approach (Task 1-4)</span>
            <button type="button" class="nist-ref-btn" data-nist-ref="analysis-approach" aria-label="NIST definition of Analysis Approach">&#9432;</button>
          </legend>
          <p class="text-muted mb-4">Select the starting point for the analysis.</p>
          ${p}
        </fieldset>

        <fieldset class="section-card">
          <legend class="section-title">Key Assumptions, Constraints &amp; Risk Tolerance (Task 1-5)</legend>
          <div class="form-group">
            <label class="label" for="f-assumptions">Key Assumptions</label>
            <textarea class="form-control" id="f-assumptions" rows="4"
              placeholder="List any key assumptions made during this assessment (e.g., all employees have completed security awareness training, no third-party access to the system)...">${s(e.assumptions)}</textarea>
          </div>
          <div class="form-group">
            <label class="label" for="f-constraints">Constraints</label>
            <textarea class="form-control" id="f-constraints" rows="4"
              placeholder="List any constraints that limit the assessment scope or methodology (e.g., limited access to system documentation, time constraints, assessor expertise limitations)...">${s(e.constraints)}</textarea>
          </div>
          <div class="form-group">
              <label class="label" for="f-risktol">
                Organisational Risk Tolerance *
                <button type="button" class="nist-ref-btn" data-nist-ref="risk-tolerance" aria-label="NIST definition of Risk Tolerance">&#9432;</button>
              </label>
            <select class="form-control" id="f-risktol" aria-required="true">
              <option value="">\u2014 Select \u2014</option>
              ${["Very Low","Low","Moderate","High","Very High"].map(m=>`<option value="${s(m)}" ${e.riskTolerance===m?"selected":""}>${s(m)}</option>`).join("")}
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
    </div>`,P(u),u.querySelectorAll('[name="assessmentApproach"]').forEach(m=>{m.addEventListener("change",()=>{t({assessmentApproach:m.value}),u.querySelectorAll('[name="assessmentApproach"]').forEach(T=>{T.closest(".radio-option")?.classList.toggle("selected",T.value===m.value)})})}),u.querySelectorAll('[name="analysisApproach"]').forEach(m=>{m.addEventListener("change",()=>{t({analysisApproach:m.value}),u.querySelectorAll('[name="analysisApproach"]').forEach(T=>{T.closest(".radio-option")?.classList.toggle("selected",T.value===m.value)})})}),u.querySelector("#f-assumptions")?.addEventListener("input",m=>t({assumptions:m.target.value})),u.querySelector("#f-constraints")?.addEventListener("input",m=>t({constraints:m.target.value})),u.querySelector("#f-risktol")?.addEventListener("change",m=>t({riskTolerance:m.target.value},!0)),u}function fa(e){return e.riskTolerance?{valid:!0,errors:[]}:{valid:!1,errors:["Organisational Risk Tolerance is required. Select a level before continuing."]}}var Fe={};j(Fe,{render:()=>Sa,validate:()=>ka});var de={refId:"ts-a6",capability:"High",intent:"High",targeting:"Moderate",notes:`Ransomware-as-a-Service (RaaS) affiliates and organised cybercriminal groups targeting organisations for financial gain through encryption and data-theft extortion.

Capability \u2014 HIGH: RaaS platforms lower the technical barrier by providing ready-made tooling, infrastructure, and support to affiliates. CISA #StopRansomware advisories document groups such as LockBit, BlackCat/ALPHV, and Cl0p operating with sophisticated, multi-stage attack chains including initial access brokering, credential harvesting, lateral movement, and double-extortion. ENISA Threat Landscape 2024 ranks organised cybercriminal groups among the highest-capability non-state actors.

Intent \u2014 HIGH: Financial motivation is strong and consistent. ENISA TL 2024 identifies ransomware as the top cybersecurity threat for the fifth consecutive year, driven by predictable monetisation through ransom payments and data-sale markets. CISA notes that RaaS groups actively reinvest profits to improve tooling and recruit affiliates.

Targeting \u2014 MODERATE: Most RaaS affiliates use opportunistic targeting \u2014 scanning for exposed services (RDP, VPN) and unpatched systems \u2014 rather than singling out specific organisations. ENISA TL 2024 notes that while small and medium-sized organisations are frequently hit due to weaker defences, highly specific targeting is more typical of nation-state actors. Adjust to HIGH if your sector (healthcare, critical infrastructure, finance) is explicitly named in CISA advisories.

Sources: CISA #StopRansomware (cisa.gov/stopransomware); ENISA Threat Landscape 2024 (enisa.europa.eu); CISA/NSA Advisory AA21-321A.`},ga=["Adversarial","Accidental","Structural","Environmental"],ya={Adversarial:"Intentional attackers",Accidental:"Accidents and errors",Structural:"Hardware and software failures",Environmental:"Natural disasters and infrastructure failures"},ba={Adversarial:"Individuals, groups, or organisations that intentionally target and exploit information systems.",Accidental:"Errors and omissions by authorised users \u2014 no malicious intent.",Structural:"Failures of IT equipment, environmental controls, or software components.",Environmental:"Natural disasters and infrastructure failures outside organisational control."};function wa(e){return e==="Adversarial"}function Ee(e,t,a){return`<select class="form-control form-control-sm" name="${s(e)}" ${a?"disabled":""} aria-label="${s(e)}">
    <option value="">\u2014 Select \u2014</option>
    ${R.map(i=>`<option value="${s(i)}" ${t===i?"selected":""}>${s(i)}</option>`).join("")}
  </select>`}function Sa(e,t){let a=e.threatSources??[];function i(u){return a.find(m=>m.id===u)}function n(u){t({threatSources:u},!0)}function d(u){a.some(m=>m.refId===u.id)||n([...a,{id:q(),refId:u.id,name:u.name,type:u.type,isCustom:!1,inScope:!0,capability:"",intent:"",targeting:"",rangeOfEffects:"",notes:""}])}function l(u){n([...a,{id:q(),refId:null,name:"",type:u,isCustom:!0,inScope:!0,capability:"",intent:"",targeting:"",rangeOfEffects:"",notes:""}])}function g(u){n(a.filter(m=>m.id!==u))}function r(u,m){let T=(e.threatSources??[]).map(c=>c.id===u?{...c,...m}:c);t({threatSources:T})}let y=document.createElement("div");function p(){let u=e.scenarioId==="ransomware",m=Z.find(c=>c.id===de.refId),T=u&&m?(e.threatSources??[]).some(c=>c.refId===m.id):!1;y.innerHTML=`
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
          ${ga.map(c=>{let S=Z.filter(h=>h.type===c),k=a.filter(h=>h.type===c),v=k.filter(h=>!h.isCustom).map(h=>h.refId),b=c==="Adversarial"&&u&&m,o=b?`
              <div class="suggest-panel" aria-label="Suggested threat source">
                <p class="suggest-panel-heading">Suggested for ransomware</p>
                <button type="button" class="suggest-item${T?" suggest-item--added":""}"
                  id="btn-add-ransomware-src"
                  ${T?'disabled aria-disabled="true"':""}>
                  <span class="suggest-item-value">${s(m.name)}</span>
                  <span class="suggest-item-hint">Capability: High &middot; Intent: High &middot; Targeting: Moderate${T?" &middot; &#10003; Added":""}</span>
                </button>
              </div>`:"";return`
              <details class="section-card collapsible-section" ${c==="Adversarial"?"open":""}>
                <summary class="section-title collapsible-summary">
                  <span>
                    ${s(ya[c])}
                    <small class="nist-term ml-2">${s(c)} Threat Sources</small>
                    <button type="button" class="nist-ref-btn" data-nist-ref="threat-source" aria-label="NIST definition of Threat Source">&#9432;</button>
                  </span>
                  <span class="badge badge-neutral">${k.length} selected</span>
                </summary>
                <p class="text-muted mb-4">${s(ba[c])}</p>

                <div class="${b?"suggest-layout suggest-layout--has-panel":""}">
                  <div class="checkbox-grid mb-4">
                    ${S.map(h=>`
                      <label class="checkbox-option ${v.includes(h.id)?"checked":""}">
                        <input type="checkbox" data-add-ref="${s(h.id)}" ${v.includes(h.id)?"checked":""} />
                        <span>${s(h.name)}</span>
                      </label>`).join("")}
                  </div>
                  ${o}
                </div>

                ${k.map(h=>`
                  <div class="source-detail-card" data-src-id="${s(h.id)}">
                    <div class="source-detail-header">
                      ${h.isCustom?`
                        <input type="text" class="form-control form-control-sm source-name-input"
                          value="${s(h.name)}" placeholder="Custom source name\u2026" data-src-field="name" data-src-id="${s(h.id)}" />
                      `:`<strong>${s(h.name)}</strong>`}
                      <button type="button" class="btn btn-sm btn-remove-src" data-src-id="${s(h.id)}"
                        class="btn-remove"
                        aria-label="Remove ${s(h.name)}">\u2715 Remove</button>
                    </div>
                    <div class="source-detail-fields">
                      ${wa(c)?`
                        <div class="form-row form-row-3">
                          <div class="form-group">
                            <label class="label">Capability</label>
                            ${Ee("capability",h.capability,!1)}
                          </div>
                          <div class="form-group">
                            <label class="label">Intent</label>
                            ${Ee("intent",h.intent,!1)}
                          </div>
                          <div class="form-group">
                            <label class="label">Targeting</label>
                            ${Ee("targeting",h.targeting,!1)}
                          </div>
                        </div>`:`
                        <div class="form-row form-row-2">
                          <div class="form-group">
                            <label class="label">Range of Effects</label>
                            ${Ee("rangeOfEffects",h.rangeOfEffects,!1)}
                          </div>
                        </div>`}
                      <div class="form-group">
                        <label class="label">Notes</label>
                        <textarea class="form-control form-control-sm" rows="2"
                          data-src-field="notes" data-src-id="${s(h.id)}"
                          placeholder="Optional notes about this threat source\u2026">${s(h.notes)}</textarea>
                      </div>
                    </div>
                  </div>`).join("")}

                <button type="button" class="btn btn-secondary btn-sm btn-add-custom mt-2" data-type="${s(c)}">+ Add Custom ${s(c)} Source</button>
              </details>`}).join("")}
        </div>
      </div>`,P(y),y.querySelector("#btn-add-ransomware-src")?.addEventListener("click",()=>{!m||T||n([...e.threatSources??[],{id:q(),refId:m.id,name:m.name,type:m.type,isCustom:!1,inScope:!0,capability:de.capability,intent:de.intent,targeting:de.targeting,rangeOfEffects:"",notes:de.notes}])}),y.querySelectorAll("[data-add-ref]").forEach(c=>{c.addEventListener("change",()=>{let S=Z.find(k=>k.id===c.dataset.addRef);S&&(c.checked?d(S):g(a.find(k=>k.refId===S.id)?.id))})}),y.querySelectorAll(".btn-remove-src").forEach(c=>{c.addEventListener("click",()=>g(c.dataset.srcId))}),y.querySelectorAll(".btn-add-custom").forEach(c=>{c.addEventListener("click",()=>l(c.dataset.type))}),y.querySelectorAll("[data-src-field]").forEach(c=>{c.addEventListener("input",()=>r(c.dataset.srcId,{[c.dataset.srcField]:c.value})),c.addEventListener("change",()=>r(c.dataset.srcId,{[c.dataset.srcField]:c.value}))}),y.querySelectorAll(".source-detail-card select").forEach(c=>{c.addEventListener("change",()=>{let S=c.closest("[data-src-id]");S&&r(S.dataset.srcId,{[c.name]:c.value})})})}return y._draw=p,p(),y}function ka(e){return(e.threatSources??[]).filter(i=>i.inScope).length===0?{valid:!1,errors:["Select at least one threat source before continuing."]}:{valid:!0,errors:[]}}var Ue={};j(Ue,{render:()=>Ea,validate:()=>xa});function Ea(e,t){let a=e.threatSources??[];function i(c){let S=(e.threatEvents??[]).length>0;Object.assign(e,{threatEvents:c});let k=c.length>0;t({threatEvents:c},!1,S!==k)}function n(c,S){let k=(e.threatEvents??[]).map(v=>v.id===c?{...v,...S}:v);t({threatEvents:k})}function d(c,S,k){let v=(e.threatEvents??[]).find(o=>o.id===c);if(!v)return;let b=k?[...new Set([...v.threatSourceIds,S])]:v.threatSourceIds.filter(o=>o!==S);n(c,{threatSourceIds:b})}function l(c){return a.length===1?[a[0].id]:c.threatSourceIds??[]}function g(c){let S=l(c);return`
      <div class="event-detail-card" data-ev-id="${s(c.id)}">
        <div class="source-detail-header">
          ${c.isCustom?`
            <input type="text" class="form-control form-control-sm" value="${s(c.name)}"
              placeholder="Custom event name\u2026" data-ev-field="name" data-ev-id="${s(c.id)}" />
          `:`<strong class="text-sm">${s(c.name)}</strong>`}
          <button type="button" class="btn btn-sm btn-remove-ev" data-ev-id="${s(c.id)}"
            aria-label="Remove event ${s(c.name)}">\u2715 Remove</button>
        </div>
        ${c.isCustom?`
          <div class="form-group mt-3">
            <label class="label">Description</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-ev-field="description" data-ev-id="${s(c.id)}"
              placeholder="Describe this threat event\u2026">${s(c.description)}</textarea>
          </div>`:c.description?`
          <p class="text-muted text-sm mt-2 mb-3">${s(c.description)}</p>`:""}
        <div class="form-row form-row-2 mt-3">
          <div class="form-group">
            <label class="label">
              Relevance
              <button type="button" class="nist-ref-btn" data-nist-ref="relevance" aria-label="What do the relevance levels mean?">&#9432;</button>
            </label>
            <select class="form-control form-control-sm" data-ev-field="relevance" data-ev-id="${s(c.id)}">
              <option value="">\u2014 Select \u2014</option>
              ${pe.map(k=>`<option value="${s(k.value)}" ${c.relevance===k.value?"selected":""}
                  title="${s(k.desc)}">${s(k.value)}</option>`).join("")}
            </select>
          </div>
          ${a.length>0?`
          <div class="form-group">
            <label class="label">Linked Threat Sources</label>
            <div class="source-multiselect">
              ${a.map(k=>`
                <label class="checkbox-option checkbox-option-sm ${S.includes(k.id)?"checked":""}">
                  <input type="checkbox" data-src-link="${s(k.id)}" data-ev-id="${s(c.id)}"
                    ${S.includes(k.id)?"checked":""} />
                  <span>${s(k.name||"Unnamed source")}</span>
                </label>`).join("")}
            </div>
          </div>`:""}
        </div>
        <div class="form-group mt-2">
          <label class="label">Notes</label>
          <textarea class="form-control form-control-sm" rows="2"
            data-ev-field="notes" data-ev-id="${s(c.id)}"
            placeholder="Optional notes\u2026">${s(c.notes)}</textarea>
        </div>
      </div>`}function r(c,S,k,v,b=!0){let o=e.threatEvents??[],h=o.filter(x=>x.type===v&&!x.isCustom).map(x=>x.refId),w=o.filter(x=>x.type===v),$=_.find(x=>x.id===e.scenarioId)??null,L=v==="adversarial"&&$?.threatEventRefIds?.length>0,f=L?(()=>{let x=W;return`
        <div class="suggest-panel" aria-label="Suggested threat events">
          <p class="suggest-panel-heading">Suggested for ransomware</p>
          ${($.threatEventRefIds??[]).map(z=>x.find(I=>I.id===z)).filter(Boolean).map(z=>{let I=h.includes(z.id);return`
              <button type="button" class="suggest-item${I?" suggest-item--added":""}"
                data-suggest-event="${s(z.id)}"
                ${I?'disabled aria-disabled="true"':""}>
                <span class="suggest-item-value">${s(z.name)}</span>
                <span class="suggest-item-hint">Relevance: ${s($.threatEventRelevance?.[z.id]??"\u2014")}</span>
              </button>`}).join("")}
        </div>`})():"";return`
      <details class="section-card collapsible-section" ${b?"open":""}>
        <summary class="section-title collapsible-summary">
          <span>${s(c)} <small class="nist-term">&mdash; ${s(S)}</small></span>
          <span class="badge badge-neutral">${w.length} selected</span>
        </summary>

        ${a.length===0?`
          <div class="alert alert-warning mb-4">
            <strong>Tip:</strong> No threat sources were defined in Step 3.
            Events can still be selected, but linking them to sources won\u2019t be possible.
          </div>`:""}

        <div class="${L?"suggest-layout suggest-layout--has-panel":""}">
          <div class="checkbox-grid mb-4">
            ${k.map(x=>`
              <label class="checkbox-option ${h.includes(x.id)?"checked":""}">
                <input type="checkbox" data-add-event="${s(x.id)}" data-event-type="${s(v)}"
                  ${h.includes(x.id)?"checked":""} title="${s(x.description)}" />
                <span>${s(x.name)}</span>
              </label>`).join("")}
          </div>
          ${f}
        </div>

        ${w.map(x=>g(x)).join("")}

        <button type="button" class="btn btn-secondary btn-sm btn-add-custom-ev mt-2"
          data-event-type="${s(v)}">
          + Add Custom ${s(v==="adversarial"?"Adversarial":"Non-Adversarial")} Event
        </button>
      </details>`}let y=document.createElement("div");function p(c){let S=c.dataset.evId;c.querySelectorAll("[data-ev-field]").forEach(k=>{k.addEventListener("input",()=>n(S,{[k.dataset.evField]:k.value})),k.addEventListener("change",()=>n(S,{[k.dataset.evField]:k.value}))}),c.querySelector(".btn-remove-ev")?.addEventListener("click",()=>u(S,c)),c.querySelectorAll("[data-src-link]").forEach(k=>{k.addEventListener("change",()=>d(S,k.dataset.srcLink,k.checked))}),P(c)}function u(c,S){let v=(e.threatEvents??[]).find(b=>b.id===c)?.refId;if(i((e.threatEvents??[]).filter(b=>b.id!==c)),S.remove(),v){let b=y.querySelector(`[data-add-event="${CSS.escape(v)}"]`);b&&(b.checked=!1,b.closest(".checkbox-option")?.classList.remove("checked"));let o=y.querySelector(`[data-suggest-event="${CSS.escape(v)}"]`);if(o){o.disabled=!1,o.removeAttribute("aria-disabled"),o.classList.remove("suggest-item--added");let h=o.querySelector(".suggest-item-hint")}}}function m(c,S){let k=S.querySelector(".btn-add-custom-ev");k.insertAdjacentHTML("beforebegin",g(c)),p(k.previousElementSibling)}function T(){y.innerHTML=`
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
          ${r("Events caused by intentional attackers","Adversarial Threat Events (Table E-2)",W,"adversarial",!0)}
          ${r("Accidental and environmental events","Non-Adversarial Threat Events (Table E-3)",ie,"non-adversarial",!1)}
        </div>
      </div>`,P(y),y.querySelectorAll(".event-detail-card").forEach(p),y.querySelectorAll("[data-suggest-event]").forEach(S=>{S.addEventListener("click",()=>{let k=S.dataset.suggestEvent,v=W.find(L=>L.id===k);if(!v||(e.threatEvents??[]).some(L=>L.refId===k))return;let b=_.find(L=>L.id===e.scenarioId),o={id:q(),refId:v.id,name:v.name,description:v.description,type:"adversarial",isCustom:!1,threatSourceIds:l({}),relevance:b?.threatEventRelevance?.[k]??"",notes:b?.threatEventNotes?.[k]??"",likelihoodInitiation:"",likelihoodImpact:"",overallLikelihood:"",impactLevel:"",impactNotes:"",riskLevel:"",riskOverride:"",riskOverrideReason:"",riskNotes:""};i([...e.threatEvents??[],o]),S.disabled=!0,S.setAttribute("aria-disabled","true"),S.classList.add("suggest-item--added");let h=S.querySelector(".suggest-item-hint"),w=y.querySelector(`[data-add-event="${CSS.escape(k)}"]`);w&&(w.checked=!0,w.closest(".checkbox-option")?.classList.add("checked"));let $=w?.closest("details");$&&m(o,$)})});let c=[...W,...ie];y.querySelectorAll("[data-add-event]").forEach(S=>{S.addEventListener("change",()=>{let k=c.find(o=>o.id===S.dataset.addEvent);if(!k)return;let v=S.closest(".checkbox-option"),b=S.closest("details");if(S.checked){if((e.threatEvents??[]).some(w=>w.refId===k.id))return;let o={id:q(),refId:k.id,name:k.name,description:k.description,type:S.dataset.eventType,isCustom:!1,threatSourceIds:l({}),relevance:"",notes:"",likelihoodInitiation:"",likelihoodImpact:"",overallLikelihood:"",impactLevel:"",impactNotes:"",riskLevel:"",riskOverride:"",riskOverrideReason:"",riskNotes:""};i([...e.threatEvents??[],o]),v?.classList.add("checked"),b&&m(o,b);let h=y.querySelector(`[data-suggest-event="${CSS.escape(k.id)}"]`);if(h){h.disabled=!0,h.setAttribute("aria-disabled","true"),h.classList.add("suggest-item--added");let w=h.querySelector(".suggest-item-hint")}}else{let o=(e.threatEvents??[]).find(w=>w.refId===k.id);if(!o)return;let h=b?.querySelector(`.event-detail-card[data-ev-id="${CSS.escape(o.id)}"]`);v?.classList.remove("checked"),h?u(o.id,h):i((e.threatEvents??[]).filter(w=>w.refId!==k.id))}})}),y.querySelectorAll(".btn-add-custom-ev").forEach(S=>{S.addEventListener("click",()=>{let k={id:q(),refId:null,name:"",description:"",type:S.dataset.eventType,isCustom:!0,threatSourceIds:l({}),relevance:"",notes:"",likelihoodInitiation:"",likelihoodImpact:"",overallLikelihood:"",impactLevel:"",impactNotes:"",riskLevel:"",riskOverride:"",riskOverrideReason:"",riskNotes:""};i([...e.threatEvents??[],k]),m(k,S.closest("details"))})})}return y._draw=T,T(),y}function xa(e){return(e.threatEvents??[]).length===0?{valid:!1,errors:["Select at least one threat event before continuing."]}:{valid:!0,errors:[]}}var Ge={};j(Ge,{render:()=>Aa,validate:()=>Ta});function xt(e,t,a){return`<select class="form-control form-control-sm" name="${s(e)}" aria-label="${s(a)}">
    <option value="">\u2014 Select \u2014</option>
    ${R.map(i=>`<option value="${s(i)}" ${t===i?"selected":""}>${s(i)}</option>`).join("")}
  </select>`}function Aa(e,t){let a=e.vulnerabilities??[],i=e.predisposingConditions??[];function n(f){t({vulnerabilities:f},!0)}function d(f){t({predisposingConditions:f},!0)}let l=e.scenarioId?_.find(f=>f.id===e.scenarioId)??null:null,g=l?.vulnerabilities??[],r=[{group:"increase",name:"Highly networked architecture with many external connections",description:"The system has numerous external connections, increasing the attack surface and exposure to remote threats."},{group:"increase",name:"Legacy systems that cannot receive security patches",description:"One or more system components are past end-of-life or cannot be patched, leaving known vulnerabilities permanently unmitigated."},{group:"increase",name:"High staff turnover leading to inconsistent security awareness",description:"Frequent changes in personnel result in gaps in security training and inconsistent adherence to security procedures."},{group:"increase",name:"Reliance on a small number of critical suppliers",description:"Key operational dependencies are concentrated in a small number of external suppliers, increasing supply-chain risk."},{group:"increase",name:"Sensitive data stored and processed in bulk",description:"Large volumes of sensitive or regulated data are held in the system, making it a high-value target."},{group:"decrease",name:"Strong network segmentation limiting lateral movement",description:"Network zones are isolated so that a compromise in one segment cannot easily spread to others."},{group:"decrease",name:"Mature patch management with short remediation timelines",description:"Security patches are applied promptly and consistently across all system components, reducing the window of exploitation."},{group:"decrease",name:"Regular, tested backups stored offline or off-site",description:"Up-to-date backups are maintained and tested, enabling recovery from destructive or ransomware attacks."},{group:"decrease",name:"Comprehensive security awareness training programme",description:"All users receive regular, relevant security training, reducing the likelihood of social engineering and human error."},{group:"decrease",name:"Dedicated security operations capability with 24/7 monitoring",description:"Continuous monitoring and a dedicated security operations function enable rapid detection and response to incidents."}];function y(f){Object.assign(e,{vulnerabilities:f}),t({vulnerabilities:f})}function p(f){Object.assign(e,{predisposingConditions:f}),t({predisposingConditions:f})}function u(){n([...a,{id:q(),name:"",description:"",severity:"",notes:""}])}function m(f){n((e.vulnerabilities??[]).filter(x=>x.id!==f))}function T(f,x){t({vulnerabilities:(e.vulnerabilities??[]).map(H=>H.id===f?{...H,...x}:H)})}function c(f){return`
      <div class="event-detail-card" data-vuln-id="${s(f.id)}">
        <div class="source-detail-header">
          <input type="text" class="form-control form-control-sm" value="${s(f.name)}"
            placeholder="Vulnerability name\u2026" data-vuln-field="name" data-vuln-id="${s(f.id)}" />
          <button type="button" class="btn btn-sm btn-remove-vuln btn-remove" data-vuln-id="${s(f.id)}"
            aria-label="Remove vulnerability">\u2715 Remove</button>
        </div>
        <div class="form-row form-row-2 mt-3">
          <div class="form-group col-full">
            <label class="label">Description</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-vuln-field="description" data-vuln-id="${s(f.id)}"
              placeholder="Describe the vulnerability and affected component\u2026">${s(f.description)}</textarea>
          </div>
          <div class="form-group">
            <label class="label">
              Severity
              <button type="button" class="nist-ref-btn" data-nist-ref="vulnerability-severity" aria-label="What do the severity levels mean?">&#9432;</button>
            </label>
            ${xt("severity",f.severity,"Vulnerability severity")}
          </div>
          <div class="form-group">
            <label class="label">Notes</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-vuln-field="notes" data-vuln-id="${s(f.id)}"
              placeholder="CVE IDs, references, remediation status\u2026">${s(f.notes)}</textarea>
          </div>
        </div>
      </div>`}function S(f){P(f),f.querySelectorAll("[data-vuln-field]").forEach(x=>{x.addEventListener("input",()=>T(x.dataset.vulnId,{[x.dataset.vulnField]:x.value})),x.addEventListener("change",()=>T(x.dataset.vulnId,{[x.dataset.vulnField]:x.value}))}),f.querySelectorAll("select").forEach(x=>{x.addEventListener("change",()=>T(f.dataset.vulnId,{[x.name]:x.value}))}),f.querySelector(".btn-remove-vuln")?.addEventListener("click",()=>m(f.dataset.vulnId))}function k(f){return`
      <div class="event-detail-card" data-pred-id="${s(f.id)}">
        <div class="source-detail-header">
          ${f.isCustom?`
            <input type="text" class="form-control form-control-sm" value="${s(f.name)}"
              placeholder="Condition name\u2026" data-pred-field="name" data-pred-id="${s(f.id)}" />
          `:`<strong class="text-sm">${s(f.name)}</strong>`}
          <button type="button" class="btn btn-sm btn-remove-pred btn-remove" data-pred-id="${s(f.id)}"
            aria-label="Remove predisposing condition">\u2715 Remove</button>
        </div>
        <div class="form-row form-row-2 mt-3">
          ${f.isCustom?`
            <div class="form-group col-full">
              <label class="label">Description</label>
              <textarea class="form-control form-control-sm" rows="2"
                data-pred-field="description" data-pred-id="${s(f.id)}"
                placeholder="Describe this predisposing condition\u2026">${s(f.description)}</textarea>
            </div>`:f.description?`
            <p class="text-muted text-sm col-full">${s(f.description)}</p>`:""}
          <div class="form-group">
            <label class="label label-flex">Pervasiveness
              <button type="button" class="nist-ref-btn" data-nist-ref="pervasiveness" aria-label="What do the pervasiveness levels mean?">&#9432;</button>
            </label>
            ${xt("pervasiveness",f.pervasiveness,"Pervasiveness")}
          </div>
          <div class="form-group">
            <label class="label">Notes</label>
            <textarea class="form-control form-control-sm" rows="2"
              data-pred-field="notes" data-pred-id="${s(f.id)}"
              placeholder="Optional notes\u2026">${s(f.notes)}</textarea>
          </div>
        </div>
      </div>`}function v(f){P(f),f.querySelectorAll("[data-pred-field]").forEach(x=>{x.addEventListener("input",()=>w(x.dataset.predId,{[x.dataset.predField]:x.value})),x.addEventListener("change",()=>w(x.dataset.predId,{[x.dataset.predField]:x.value}))}),f.querySelectorAll("select").forEach(x=>{x.addEventListener("change",()=>{let H=x.closest("[data-pred-id]")?.dataset.predId;H&&w(H,{[x.name]:x.value})})}),f.querySelector(".btn-remove-pred")?.addEventListener("click",()=>h(f.dataset.predId))}function b(f){i.some(x=>x.refId===f.id)||d([...i,{id:q(),refId:f.id,name:f.name,description:f.desc,pervasiveness:"",notes:"",isCustom:!1}])}function o(){d([...i,{id:q(),refId:null,name:"",description:"",pervasiveness:"",notes:"",isCustom:!0}])}function h(f){d(i.filter(x=>x.id!==f))}function w(f,x){t({predisposingConditions:(e.predisposingConditions??[]).map(H=>H.id===f?{...H,...x}:H)})}let $=document.createElement("div");function L(){let f=i.filter(I=>!I.isCustom).map(I=>I.refId),x=(e.vulnerabilities??[]).map(I=>I.name),H=g.length>0,z=H?`
      <div class="suggest-panel" aria-label="Suggested vulnerabilities">
        <p class="suggest-panel-heading">Suggested for ${s(l.name)}</p>
        ${g.map((I,F)=>{let M=x.includes(I.name);return`
            <button type="button" class="suggest-item${M?" suggest-item--added":""}"
              data-suggest-vuln="${F}"
              ${M?'disabled aria-disabled="true"':""}>
              <span class="suggest-item-value">${s(I.name)}</span>
              <span class="suggest-item-hint">Severity: ${s(I.severity)}</span>
            </button>`}).join("")}
      </div>`:"";$.innerHTML=`
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
            <div class="${H?"suggest-layout suggest-layout--has-panel":""}">
              <div>
                ${a.length===0?`
                  <p class="text-muted text-italic mb-4">
                    No vulnerabilities added yet. Use the suggestions or click the button below.
                  </p>`:""}
                ${a.map(I=>c(I)).join("")}
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
              <span class="badge badge-neutral">${i.length} selected</span>
            </summary>
            <p class="text-muted mb-4">
              Select applicable predisposing conditions from the NIST taxonomy. Rate the
              <strong>pervasiveness</strong> \u2014 how broadly the condition applies across the system.
              <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-conditions" aria-label="NIST definition of Predisposing Conditions">&#9432;</button>
            </p>

            <div>
                <details class="collapsible-section mb-4"${f.length>0?" open":""}>
                  <summary class="collapsible-summary text-sm">
                    <span>NIST taxonomy classifications
                      ${f.length>0?`<span class="badge badge-neutral ml-2">${f.length} selected</span>`:""}
                      <button type="button" class="nist-ref-btn" data-nist-ref="predisposing-taxonomy" aria-label="What are these taxonomy classifications?">&#9432;</button>
                    </span>
                  </summary>
                  <div class="checkbox-grid mt-3">
                    ${me.map(I=>`
                      <label class="checkbox-option ${f.includes(I.id)?"checked":""}"
                        title="${s(I.desc)}">
                        <input type="checkbox" data-add-pred="${s(I.id)}"
                          ${f.includes(I.id)?"checked":""} />
                        <span>${s(I.name)}</span>
                      </label>`).join("")}
                  </div>
                </details>

                ${i.map(I=>k(I)).join("")}

                <button type="button" id="btn-add-pred" class="btn btn-secondary btn-sm mt-2">
                  + Add Custom Predisposing Condition
                </button>
            </div>
          </details>

        </div>
      </div>`,P($),$.querySelectorAll("[data-vuln-id]").forEach(S),$.querySelector("#btn-add-vuln")?.addEventListener("click",u),$.querySelectorAll("[data-suggest-vuln]").forEach(I=>{I.addEventListener("click",()=>{let F=parseInt(I.dataset.suggestVuln,10),M=g[F];if(!M||(e.vulnerabilities??[]).some(Lt=>Lt.name===M.name))return;let Q={id:q(),name:M.name,description:M.description,severity:M.severity,notes:M.notes};y([...e.vulnerabilities??[],Q]),I.disabled=!0,I.setAttribute("aria-disabled","true"),I.classList.add("suggest-item--added");let Le=$.querySelector("#btn-add-vuln");Le&&(Le.insertAdjacentHTML("beforebegin",c(Q)),S(Le.previousElementSibling))})}),$.querySelector("#btn-add-pred")?.addEventListener("click",o),$.querySelectorAll(".btn-remove-pred").forEach(I=>I.addEventListener("click",()=>h(I.dataset.predId))),$.querySelectorAll("[data-pred-field]").forEach(I=>{I.addEventListener("input",()=>w(I.dataset.predId,{[I.dataset.predField]:I.value})),I.addEventListener("change",()=>w(I.dataset.predId,{[I.dataset.predField]:I.value}))}),$.querySelectorAll("[data-pred-id] select").forEach(I=>{I.addEventListener("change",()=>{let F=I.closest("[data-pred-id]")?.dataset.predId;F&&w(F,{[I.name]:I.value})})})}return $._draw=L,L(),$}function Ta(e){return{valid:!0,errors:[]}}var Ye={};j(Ye,{render:()=>$a,validate:()=>La});var Tt={"ae-01":{initiation:"Very High",impact:"Very Low",source:"ENISA Threat Landscape 2024",rationale:"Automated internet scanning is continuous and near-universal; virtually all internet-facing systems are probed daily."},"ae-02":{initiation:"Very High",impact:"Very Low",source:"ENISA Threat Landscape 2024",rationale:"OSINT collection is trivially easy and widely practised; direct harm from passive reconnaissance alone is negligible."},"ae-03":{initiation:"Low",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"Sniffing requires prior network access or a MITM position; widespread TLS adoption substantially limits what can be captured."},"ae-04":{initiation:"High",impact:"Low",source:"ENISA Threat Landscape 2024",rationale:"Targeted surveillance is common against internet-facing organisations; intelligence gathered rarely causes direct harm in isolation."},"ae-05":{initiation:"Very High",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"Phishing is the leading initial-access vector in ENISA reports; successful campaigns routinely lead to credential theft or malware deployment."},"ae-06":{initiation:"High",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"Known-malware delivery via email remains one of the highest-volume attack techniques; email filtering and endpoint controls reduce adverse impact for most organisations."},"ae-07":{initiation:"Moderate",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Targeted malware campaigns are less frequent than commodity attacks but highly effective; detection is typically delayed."},"ae-08":{initiation:"Low",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"Removable-media attacks are uncommon in modern office environments; when successful they typically allow deep, persistent access."},"ae-09":{initiation:"High",impact:"Moderate",source:"CISA KEV Catalog 2024",rationale:"Exploitation of catalogued known vulnerabilities is widespread and automated; impact depends heavily on patch currency."},"ae-10":{initiation:"Low",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Zero-day exploits are scarce and expensive; when deployed, no defensive countermeasure exists at the time of attack."},"ae-11":{initiation:"Moderate",impact:"Moderate",source:"NCSC Annual Review 2024",rationale:"The remote and mobile attack surface has grown substantially with hybrid working; endpoint controls reduce but do not eliminate risk."},"ae-12":{initiation:"Moderate",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"DDoS is one of the most frequently observed attack categories in ENISA data; impact varies with redundancy and mitigation capability."},"ae-13":{initiation:"Very High",impact:"Moderate",source:"ENISA Threat Landscape 2024",rationale:"Credential-guessing and stuffing attacks are near-universal; MFA and account lockout policies substantially reduce adverse impact."},"ae-14":{initiation:"Low",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"MITM is harder to execute against TLS-protected traffic; when successful, the attacker obtains high-value credentials or session tokens."},"ae-15":{initiation:"High",impact:"High",source:"ENISA Threat Landscape 2024",rationale:"Social engineering is a consistent top-tier attack vector in ENISA and NCSC reports; it remains highly effective even against trained users."},"ae-16":{initiation:"Low",impact:"High",source:"CISA Remote Access Guidance",rationale:"Split-tunnel exploitation requires a specific VPN configuration to be present; when conditions exist it bypasses perimeter controls entirely."},"ae-17":{initiation:"Low",impact:"High",source:"ENISA Physical Threats 2024",rationale:"Physical attacks on IT infrastructure are infrequent for most organisations; when successful they afford direct hardware-level access."},"ae-18":{initiation:"Moderate",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Data exfiltration follows the majority of successful network compromises; exfiltrated data causes lasting regulatory and reputational harm."},"ae-19":{initiation:"Moderate",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Ransomware is the most reported high-impact threat in ENISA data; destruction of data without tested backups is catastrophic."},"ae-20":{initiation:"Low",impact:"Very High",source:"ENISA Threat Landscape 2024",rationale:"Supply-chain attacks are increasing in frequency but remain relatively uncommon; a successful compromise propagates silently and at scale."},"ae-21":{initiation:"High",impact:"High",source:"ENISA Cloud Security 2024",rationale:"Cloud misconfiguration is a leading cause of cloud-related incidents in ENISA and NCSC guidance; exposed APIs and storage are actively scanned."},"ae-22":{initiation:"Very Low",impact:"Very High",source:"ENISA Physical Threats 2024",rationale:"Physical facility attacks are rare for most organisations; when they occur, operational disruption is typically severe and prolonged."},"ae-23":{initiation:"Moderate",impact:"Low",source:"ENISA Threat Landscape 2024",rationale:"Web defacement is opportunistic and common; direct operational harm is limited but reputational and trust damage can be significant."},"ae-24":{initiation:"Very Low",impact:"Very High",source:"ENISA Insider Threat 2024",rationale:"Deliberately planted insiders are rare; their trusted position and prolonged access cause disproportionate harm when it occurs."},"ne-01":{initiation:"High",impact:"Moderate",source:"ENISA NIS Investments 2024",rationale:"Accidental data disclosure by authorised users is consistently one of the most reported incident categories across EU operators."},"ne-02":{initiation:"Moderate",impact:"Moderate",source:"ENISA NIS Investments 2024",rationale:"Misconfigured access privileges are a frequent finding in security audits; impact is bounded by what the over-privileged account can reach."},"ne-03":{initiation:"High",impact:"Moderate",source:"NIST NVD / ENISA CVE Trends",rationale:"New vulnerabilities are disclosed at high and rising rates; most require a separate trigger to cause harm and are medium severity."},"ne-04":{initiation:"Moderate",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Storage hardware failures follow predictable failure-rate curves; impact is low where regular, tested backups are maintained."},"ne-05":{initiation:"Low",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Resource depletion is normally detected by monitoring before causing significant degradation; capacity planning limits likelihood."},"ne-06":{initiation:"Moderate",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Hardware failure rates increase predictably with age; redundancy and maintenance schedules constrain adverse impact."},"ne-07":{initiation:"Low",impact:"Very High",source:"ENISA Physical Threats 2024",rationale:"Accidental facility fires are rare; where they occur without off-site backups and tested DR plans the consequences are catastrophic."},"ne-08":{initiation:"Low",impact:"High",source:"EU Copernicus Climate Service",rationale:"Flood risk is highly location-dependent; where applicable, a flood event typically renders the affected facility inoperable."},"ne-09":{initiation:"Low",impact:"High",source:"EU Copernicus Climate Service",rationale:"Severe windstorm risk is region-dependent; significant windstorm events routinely cause extended facility outages."},"ne-10":{initiation:"Very Low",impact:"Very High",source:"EMSC European Seismic Hazard",rationale:"Seismic risk is highly location-dependent; a significant earthquake at a primary facility would be catastrophic for operations."},"ne-11":{initiation:"High",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Power outages are among the most frequently reported non-adversarial incidents; UPS and generator provision typically limits impact."},"ne-12":{initiation:"Moderate",impact:"Low",source:"ENISA NIS Investments 2024",rationale:"Telecommunications outages occur periodically; redundant ISP or carrier connections reduce impact to a minor inconvenience."}};function Ia(e,t){let a=Tt[e.refId];if(!a)return"";let i=t?"Initiation":"Occurrence",n=e.likelihoodInitiation===a.initiation;return`
    <div class="suggest-panel" aria-label="Suggested likelihood">
      <p class="suggest-panel-heading">Suggested from public intel</p>
      <button type="button" class="suggest-item${n?" suggest-item--added":""}"
        data-ev-id="${s(e.id)}" data-init="${s(a.initiation)}"
        ${n?'disabled aria-disabled="true"':""}
        aria-label="Apply suggested ${i.toLowerCase()} likelihood for ${s(e.name)}">
        <span class="suggest-item-value">${s(i)}: ${s(a.initiation)}</span>
        <span class="suggest-item-hint">${s(a.rationale)}</span>
        <span class="suggest-item-hint">Source: ${s(a.source)}</span>
      </button>
    </div>`}function At(e,t,a){return`<div class="scale-group" role="group" aria-label="${s(e)}">
    ${R.map(i=>`
      <button type="button" class="scale-btn ${t===i?"active":""}"
        data-ev-id="${s(a)}" data-field="${s(e)}" data-value="${s(i)}"
        aria-pressed="${t===i?"true":"false"}">${s(i)}</button>`).join("")}
  </div>`}function $a(e,t){let a=e.threatEvents??[];function i(l,g){let r=(e.threatEvents??[]).map(u=>{if(u.id!==l)return u;let m={...u,...g};return m.likelihoodInitiation&&m.likelihoodImpact?m.overallLikelihood=Pe(m.likelihoodInitiation,m.likelihoodImpact,R,Ne):m.overallLikelihood="",m}),y=(e.threatEvents??[]).every(u=>!!u.overallLikelihood),p=r.every(u=>!!u.overallLikelihood);t({threatEvents:r},!1,y!==p)}let n=document.createElement("div");function d(){if(a.length===0){n.innerHTML=`
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">Step 6 &mdash; Likelihood Assessment</h2>
          </div>
          <div class="card-body">
            <div class="alert alert-warning">
              No threat events were selected in Step 4. Please go back and select at least one threat event.
            </div>
          </div>
        </div>`;return}n.innerHTML=`
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

          ${a.map(l=>{let g=l.type==="adversarial",r=l.overallLikelihood;return`
              <details class="section-card collapsible-section event-likelihood-card" open>
                <summary class="section-title collapsible-summary">
                  <span class="text-sm font-medium">${s(l.name)}</span>
                  <div class="flex gap-2 items-center">
                    <span class="badge badge-${g?"high":"neutral"}">${g?"Adversarial":"Non-Adversarial"}</span>
                    ${r?`<span>Overall: ${B(r)}</span>`:'<span class="badge badge-neutral">Not rated</span>'}
                  </div>
                </summary>

                <div class="suggest-layout${Tt[l.refId]?" suggest-layout--has-panel":""}">
                  <div>
                    <label class="label label-flex">
                      ${g?"How likely is this attack to be attempted?":"How likely is this event to occur?"}
                      <button type="button" class="nist-ref-btn" data-nist-ref="${g?"likelihood-initiation":"likelihood"}" aria-label="NIST definition">&#9432;</button>
                    </label>
                    <p class="text-muted text-sm">
                      ${g?"The probability that a threat source will attempt to initiate a threat event against the organization, given the source's capability, intent, and targeting.":"The probability that this non-adversarial event occurs, given the existence of predisposing conditions."}
                    </p>
                    ${At("likelihoodInitiation",l.likelihoodInitiation,l.id)}
                  </div>
                  ${Ia(l,g)}
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
                  ${At("likelihoodImpact",l.likelihoodImpact,l.id)}
                </div>

                <div class="likelihood-result">
                  <div class="flex items-center gap-3 flex-wrap">
                    <span class="label m-0">
                      Combined likelihood (auto-calculated)
                      <button type="button" class="nist-ref-btn" data-nist-ref="overall-likelihood" aria-label="NIST definition of Overall Likelihood">&#9432;</button>
                    </span>
                    ${r?B(r):'<span class="text-muted">Rate both values above to calculate</span>'}
                  </div>
                </div>

                <div class="form-group mt-3">
                  <label class="label">Rationale / Notes</label>
                  <textarea class="form-control form-control-sm" rows="2"
                    data-lh-notes="${s(l.id)}"
                    placeholder="Explain the basis for these likelihood ratings\u2026">${s(l.notes)}</textarea>
                </div>
              </details>`}).join("")}
        </div>
      </div>`,P(n),n.querySelectorAll(".scale-btn").forEach(l=>{l.addEventListener("click",()=>{i(l.dataset.evId,{[l.dataset.field]:l.dataset.value}),l.closest(".scale-group")?.querySelectorAll(".scale-btn").forEach(p=>{p.classList.toggle("active",p.dataset.value===l.dataset.value),p.setAttribute("aria-pressed",p.dataset.value===l.dataset.value?"true":"false")});let r=l.dataset.evId,y=(e.threatEvents??[]).find(p=>p.id===r);if(y){let u=l.closest(".event-likelihood-card")?.querySelector(".likelihood-result");if(u){let m=y.likelihoodInitiation,T=y.likelihoodImpact;if(m&&T){let c=Pe(m,T,R,Ne);u.innerHTML=`<div class="flex items-center gap-3 flex-wrap">
                <span class="label m-0">Combined likelihood (auto-calculated)</span>
                ${B(c)}
              </div>`}}}})}),n.querySelectorAll(".suggest-item[data-ev-id]").forEach(l=>{l.addEventListener("click",()=>{let g=l.dataset.evId,r=l.dataset.init;i(g,{likelihoodInitiation:r});let y=l.closest(".event-likelihood-card");y&&y.querySelectorAll('.scale-btn[data-field="likelihoodInitiation"]').forEach(p=>{p.classList.toggle("active",p.dataset.value===r),p.setAttribute("aria-pressed",p.dataset.value===r?"true":"false")}),l.disabled=!0,l.setAttribute("aria-disabled","true"),l.classList.add("suggest-item--added")})}),n.querySelectorAll("[data-lh-notes]").forEach(l=>{l.addEventListener("input",()=>i(l.dataset.lhNotes,{notes:l.value}))})}return n._draw=d,d(),n}function La(e){let t=e.threatEvents??[],a=t.filter(i=>!i.overallLikelihood);return a.length>0&&t.length>0?{valid:!1,errors:[`${a.length} threat event(s) do not have a likelihood rating. Please rate all events before continuing.`]}:{valid:!0,errors:[]}}var Ke={};j(Ke,{render:()=>Ra,validate:()=>Ca});var Na={"Very High":"The threat event could be expected to have multiple severe or catastrophic adverse effects on the organization's mission, operations, assets, individuals, other organizations, or the Nation.",High:"The threat event could be expected to have a severe or catastrophic adverse effect on the organization's mission, operations, assets, or individuals.",Moderate:"The threat event could be expected to have a serious adverse effect on the organization's mission, operations, assets, or individuals.",Low:"The threat event could be expected to have a limited adverse effect on the organization's mission, operations, assets, or individuals.","Very Low":"The threat event could be expected to have a negligible adverse effect on the organization's mission, operations, assets, or individuals."};function Ra(e,t){let a=e.threatEvents??[];function i(d,l){let g=(e.threatEvents??[]).every(p=>!!p.impactLevel),r=(e.threatEvents??[]).map(p=>p.id===d?{...p,...l}:p),y=r.every(p=>!!p.impactLevel);t({threatEvents:r},!1,g!==y)}let n=document.createElement("div");return a.length===0?(n.innerHTML=`
      <div class="card"><div class="card-header"><h2 class="card-title">Step 7 &mdash; Impact Assessment</h2></div>
      <div class="card-body"><div class="alert alert-warning">No threat events selected. Please go back to Step 4.</div></div></div>`,n):(n.innerHTML=`
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
        ${a.map(d=>`
          <div class="section-card event-impact-card" data-ev-id="${s(d.id)}">
            <div class="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 class="text-base font-semibold">${s(d.name)}</h3>
                <span class="badge badge-${d.type==="adversarial"?"high":"neutral"} mt-1">
                  ${d.type==="adversarial"?"Adversarial":"Non-Adversarial"}
                </span>
              </div>
              ${d.impactLevel?B(d.impactLevel):'<span class="badge badge-neutral">Not rated</span>'}
            </div>

            <div class="scale-cards" role="group" aria-label="Impact level for ${s(d.name)}">
              ${R.map(l=>`
                <button type="button" class="scale-card-btn ${d.impactLevel===l?"active":""}"
                  data-impact-ev="${s(d.id)}" data-value="${s(l)}"
                  aria-pressed="${d.impactLevel===l?"true":"false"}">
                  <strong>${s(l)}</strong>
                  <p>${s(Na[l])}</p>
                </button>`).join("")}
            </div>

            <div class="form-group mt-4">
              <label class="label">Impact Rationale / Notes</label>
              <textarea class="form-control form-control-sm" rows="3"
                data-impact-notes="${s(d.id)}"
                placeholder="Describe the specific harm that could result (e.g., data breach exposing PII of 10,000 individuals, system downtime of 48 hours)\u2026">${s(d.impactNotes)}</textarea>
            </div>
          </div>`).join("")}
      </div>
    </div>`,P(n),n.querySelectorAll("[data-impact-ev]").forEach(d=>{d.addEventListener("click",()=>{i(d.dataset.impactEv,{impactLevel:d.dataset.value});let l=d.closest(".event-impact-card");l?.querySelectorAll("[data-impact-ev]").forEach(r=>{r.classList.toggle("active",r.dataset.value===d.dataset.value),r.setAttribute("aria-pressed",r.dataset.value===d.dataset.value?"true":"false")});let g=l?.querySelector(".badge.badge-neutral, .badge.badge-very-high, .badge.badge-high, .badge.badge-moderate, .badge.badge-low, .badge.badge-very-low");g&&(g.outerHTML=B(d.dataset.value))})}),n.querySelectorAll("[data-impact-notes]").forEach(d=>{d.addEventListener("input",()=>i(d.dataset.impactNotes,{impactNotes:d.value}))}),n)}function Ca(e){let t=e.threatEvents??[],a=t.filter(i=>!i.impactLevel);return a.length>0&&t.length>0?{valid:!1,errors:[`${a.length} threat event(s) have no impact rating. Please rate all events.`]}:{valid:!0,errors:[]}}var Je={};j(Je,{render:()=>Oa,validate:()=>qa});var Pa={"Very High":"Unacceptable risk. Corrective actions required immediately.",High:"Unacceptable risk. Corrective actions planned with urgency.",Moderate:"Risk may be acceptable. Corrective actions should be planned.",Low:"Risk is acceptable with monitoring.","Very Low":"Risk is acceptable."};function Oa(e,t){let i=(e.threatEvents??[]).map(r=>{let y=ve(r.overallLikelihood,r.impactLevel,R,ne);return{...r,_computedRisk:y,_effectiveRisk:r.riskOverride||y}});function n(r,y){t({threatEvents:(e.threatEvents??[]).map(p=>p.id===r?{...p,...y}:p)})}let d=i.filter(r=>r._computedRisk).length,l={"Very High":0,High:0,Moderate:0,Low:0,"Very Low":0};i.forEach(r=>{r._effectiveRisk&&l[r._effectiveRisk]!==void 0&&l[r._effectiveRisk]++});let g=document.createElement("div");return g.innerHTML=`
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
          ${R.slice().reverse().map(r=>`
            <div class="risk-count-card risk-count-${K(r)}">
              <span class="risk-count-num">${l[r]}</span>
              <span class="risk-count-label">${s(r)}</span>
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
                  ${R.map(r=>`<th scope="col">${s(r)}</th>`).join("")}
                </tr>
              </thead>
              <tbody>
                ${R.map((r,y)=>`
                  <tr>
                    <th scope="row">${s(r)}</th>
                    ${R.map((p,u)=>{let m=R[ne[y][u]];return`<td class="risk-cell risk-cell-${K(m)}">${s(m)}</td>`}).join("")}
                  </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </details>

        <!-- Per-event risk review -->
        ${i.length===0?`
          <div class="alert alert-warning">No threat events with likelihood and impact ratings. Please complete Steps 6 and 7.</div>
        `:i.map(r=>`
          <div class="section-card event-risk-card" data-ev-id="${s(r.id)}">
            <div class="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 class="text-base font-semibold">${s(r.name)}</h3>
                <div class="flex gap-2 flex-wrap mt-2">
                  <span class="badge badge-neutral">
                    Likelihood: ${s(r.overallLikelihood||"\u2014")}
                  </span>
                  <span class="badge badge-neutral">
                    Impact: ${s(r.impactLevel||"\u2014")}
                  </span>
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs text-dim mb-1">
                  ${r.riskOverride?"Overridden risk":"Calculated risk"}
                </div>
                ${r._effectiveRisk?B(r._effectiveRisk):'<span class="text-muted">Not calculated</span>'}
              </div>
            </div>

            ${r._computedRisk?`
              <div class="surface-box">
                <p class="text-sm">${s(Pa[r._effectiveRisk]??"")}</p>
              </div>`:`
              <div class="alert alert-warning mb-4">
                Risk cannot be calculated \u2014 likelihood or impact is not rated in steps 6 and 7.
              </div>`}

            <div class="form-group">
              <label class="label label-flex">
                <input type="checkbox" data-override-toggle="${s(r.id)}"
                  ${r.riskOverride?"checked":""} />
                Override calculated risk level
              </label>
            </div>
            <div class="risk-override-row ${r.riskOverride?"":"hidden"}" id="override-${s(r.id)}">
              <div class="form-row form-row-2 mt-3">
                <div class="form-group">
                  <label class="label">Override Risk Level</label>
                  <select class="form-control form-control-sm" data-override-level="${s(r.id)}">
                    <option value="">\u2014 Select \u2014</option>
                    ${R.map(y=>`<option value="${s(y)}" ${r.riskOverride===y?"selected":""}>${s(y)}</option>`).join("")}
                  </select>
                </div>
                <div class="form-group">
                  <label class="label">Reason for Override *</label>
                  <input type="text" class="form-control form-control-sm" value="${s(r.riskOverrideReason)}"
                    placeholder="Explain why the calculated risk was overridden\u2026"
                    data-override-reason="${s(r.id)}" />
                </div>
              </div>
            </div>

            <div class="form-group mt-3">
              <label class="label">Risk Notes</label>
              <textarea class="form-control form-control-sm" rows="2"
                data-risk-notes="${s(r.id)}"
                placeholder="Notes about risk treatment, existing controls, or residual risk\u2026">${s(r.riskNotes)}</textarea>
            </div>
          </div>`).join("")}

        <div class="section-card mt-5">
          <label class="label" for="f-risk-notes">Overall Assessment Notes</label>
          <textarea class="form-control" id="f-risk-notes" rows="4"
            placeholder="Summarize the risk determination results, key findings, or overall risk posture\u2026">${s(e.riskNotes)}</textarea>
        </div>

      </div>
    </div>`,P(g),g.querySelectorAll("[data-override-toggle]").forEach(r=>{r.addEventListener("change",()=>{let y=r.dataset.overrideToggle,p=g.querySelector(`#override-${CSS.escape(y)}`);p&&p.classList.toggle("hidden",!r.checked),r.checked||n(y,{riskOverride:"",riskOverrideReason:""})})}),g.querySelectorAll("[data-override-level]").forEach(r=>{r.addEventListener("change",()=>n(r.dataset.overrideLevel,{riskOverride:r.value}))}),g.querySelectorAll("[data-override-reason]").forEach(r=>{r.addEventListener("input",()=>n(r.dataset.overrideReason,{riskOverrideReason:r.value}))}),g.querySelectorAll("[data-risk-notes]").forEach(r=>{r.addEventListener("input",()=>n(r.dataset.riskNotes,{riskNotes:r.value}))}),g.querySelector("#f-risk-notes")?.addEventListener("input",r=>t({riskNotes:r.target.value})),g}function qa(e){return{valid:!0,errors:[]}}var We={};j(We,{render:()=>Ha,validate:()=>Ma});var It=["Very High","High","Moderate","Low","Very Low",""];function xe(e){return e.riskOverride||e.riskLevel||ve(e.overallLikelihood,e.impactLevel,R,ne)||""}function Ha(e,t){let a=e.threatEvents??[],i=[...a].sort((p,u)=>It.indexOf(xe(p))-It.indexOf(xe(u))),n={"Very High":0,High:0,Moderate:0,Low:0,"Very Low":0};a.forEach(p=>{let u=xe(p);n[u]!==void 0&&n[u]++});let d=document.createElement("div");d.innerHTML=`
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
              <button id="btn-export-encrypted" class="btn btn-primary" type="button">Export Encrypted</button>
              <button id="btn-export" class="btn btn-secondary" type="button">
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
              <p>You have worked through all the steps and your risk register is ready. We recommend <strong>downloading an encrypted backup</strong> right now &mdash; it protects the full assessment while still letting you reload or share it later.</p>
              `:`
              <strong>Your results so far</strong>
              <p>You can review your risk register at any stage. Once you have finished all steps, we recommend <strong>saving an encrypted backup</strong> so you do not lose your work and keep the data better protected.</p>
              `}
              <button class="btn btn-primary btn-sm btn-download-encrypted" type="button">Download encrypted backup</button>
              <button class="btn btn-secondary btn-sm btn-download-json" type="button">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download JSON backup
              </button>
            </div>
          </div>

          <!-- Assessment metadata -->
          <div class="section-card mb-5">
            <h3 class="section-title">Assessment Details</h3>
            <div class="summary-grid">
              <div><span class="summary-label">Assessment</span><span class="summary-value">${s(e.name)}</span></div>
              <div><span class="summary-label">Organisation</span><span class="summary-value">${s(e.organization||"\u2014")}</span></div>
              <div><span class="summary-label">Assessor</span><span class="summary-value">${s(e.assessor||"\u2014")}</span></div>
              <div><span class="summary-label">Date</span><span class="summary-value">${s(e.date||"\u2014")}</span></div>
              <div><span class="summary-label">${e.tier==="org"?"Scope":"System"}</span><span class="summary-value">${s(e.systemName||"\u2014")}</span></div>
              <div><span class="summary-label">Assessment tier</span><span class="summary-value">${e.tier==="org"?"Org / Process (Tier 1\u20132)":"System (Tier 3)"}</span></div>
              <div><span class="summary-label">Approach</span><span class="summary-value">${s(e.assessmentApproach||"\u2014")}</span></div>
              ${e.nis2EntityType?`<div><span class="summary-label">NIS2 entity type</span><span class="summary-value">${s({essential:"Essential Entity",important:"Important Entity","not-applicable":"Not applicable"}[e.nis2EntityType]??e.nis2EntityType)}</span></div>`:""}
              ${e.riskTolerance?`<div><span class="summary-label">Risk Tolerance</span><span class="summary-value">${B(e.riskTolerance)}</span></div>`:""}
            </div>
          </div>

          <!-- Risk summary -->
          <div class="section-card mb-5">
            <h3 class="section-title">Risk Summary</h3>
            <div class="flex gap-4 flex-wrap mb-4">
              ${R.slice().reverse().map(p=>`
                <div class="risk-count-card risk-count-${K(p)}">
                  <span class="risk-count-num">${n[p]}</span>
                  <span class="risk-count-label">${s(p)}</span>
                </div>`).join("")}
            </div>
          </div>

          <!-- Risk register table -->
          <div class="section-card mb-5">
            <h3 class="section-title">Risk Register (sorted by risk level)</h3>
            ${i.length===0?`
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
                    ${i.map(p=>{let u=xe(p),m=e.threatSources??[],T=(p.threatSourceIds??[]).map(c=>m.find(S=>S.id===c)?.name??c).join(", ")||"\u2014";return`
                        <tr>
                          <td>${s(p.name)}</td>
                          <td><span class="badge badge-${p.type==="adversarial"?"high":"neutral"}">${s(p.type==="adversarial"?"Adversarial":"Non-Adv.")}</span></td>
                          <td>${s(p.relevance||"\u2014")}</td>
                          <td class="text-sm">${s(T)}</td>
                          <td>${p.overallLikelihood?B(p.overallLikelihood):'<span class="text-muted">\u2014</span>'}</td>
                          <td>${p.impactLevel?B(p.impactLevel):'<span class="text-muted">\u2014</span>'}</td>
                          <td>${u?B(u):'<span class="text-muted">\u2014</span>'}</td>
                          <td class="text-sm">${p.riskOverride?`<span title="${s(p.riskOverrideReason)}">Yes</span>`:"\u2014"}</td>
                        </tr>`}).join("")}
                  </tbody>
                </table>
              </div>`}
          </div>

          <!-- Overall notes -->
          ${e.riskNotes?`
            <div class="section-card mt-4">
              <h3 class="section-title">Assessment Notes</h3>
              <p>${s(e.riskNotes)}</p>
            </div>`:""}

        </div>
      </div>
    `,P(d);function l(){try{let p=ce(e.id),u=`risk-assessment-${(e.name||e.id).replace(/[^a-z0-9]/gi,"-").toLowerCase()}.json`;ae(p,u,"application/json"),V("export_json",{source:"results"})}catch(p){alert(`Export failed: ${p.message}`)}}function g(){return new Promise(p=>{let u=C("div",{className:"dialog-overlay",role:"dialog","aria-modal":"true","aria-labelledby":"results-passphrase-title"}),m=C("form",{className:"dialog",novalidate:!0}),T=se({id:"results-passphrase",className:"form-control",type:"password",autocomplete:"new-password"}),c=se({id:"results-passphrase-confirm",className:"form-control",type:"password",autocomplete:"new-password"}),S=C("p",{className:"text-danger text-sm",role:"alert",hidden:!0});m.append(C("h3",{id:"results-passphrase-title",text:"Create encrypted backup"}),C("p",{text:"Use a strong passphrase. It is never stored and cannot be recovered later."}),C("label",{className:"label",for:"results-passphrase",text:"Passphrase"}),T,C("label",{className:"label mt-3",for:"results-passphrase-confirm",text:"Confirm passphrase"}),c,S,C("div",{className:"dialog-actions mt-4"},[J({className:"btn btn-secondary",type:"button",text:"Cancel"}),J({className:"btn btn-primary",type:"submit",text:"Create backup"})])),u.appendChild(m),document.body.appendChild(u);let[k]=m.querySelectorAll("button"),v=b=>{u.remove(),p(b)};k.addEventListener("click",()=>v(null)),u.addEventListener("click",b=>{b.target===u&&v(null)}),m.addEventListener("submit",b=>{if(b.preventDefault(),T.value.length<12){S.hidden=!1,S.textContent="Use a passphrase with at least 12 characters.";return}if(T.value!==c.value){S.hidden=!1,S.textContent="The passphrases do not match.";return}v(T.value)}),T.focus()})}async function r(){let p=await g();if(p)try{let u=await ke(e.id,p),m=`risk-assessment-${(e.name||e.id).replace(/[^a-z0-9]/gi,"-").toLowerCase()}.encrypted.json`;ae(u,m,"application/json"),V("export_encrypted",{source:"results"})}catch(u){alert(`Encrypted export failed: ${u.message}`)}}function y(){return new Promise((p,u)=>{if(typeof window.generateRiskPdf=="function"){p();return}let m=document.createElement("script");m.src="/dist/pdf-bundle.js?v=1",m.onload=p,m.onerror=()=>u(new Error("Could not load PDF library")),document.head.appendChild(m)})}return d.querySelector("#btn-pdf")?.addEventListener("click",async()=>{let p=d.querySelector("#btn-pdf"),u=p.innerHTML;p.disabled=!0,p.textContent="Generating\u2026";try{await y(),window.generateRiskPdf(e),V("export_pdf",{source:"results"})}catch(m){alert(`PDF generation failed: ${m.message}`)}finally{p.disabled=!1,p.innerHTML=u}}),d.querySelector("#btn-export")?.addEventListener("click",l),d.querySelector("#btn-export-encrypted")?.addEventListener("click",r),d.querySelector(".btn-download-json")?.addEventListener("click",l),d.querySelector(".btn-download-encrypted")?.addEventListener("click",r),d}function Ma(e){return{valid:!0,errors:[]}}var Ie=[_e,ze,je,Fe,Ue,Ge,Ye,Ke,Je,We],Qe=["Dashboard","Setup","Risk Model","Threat Sources","Threat Events","Vulnerabilities","Likelihood","Impact","Risk","Results"],N=null,O=0,Ae=document.getElementById("step-content"),Xe=document.getElementById("progress-bar-container"),Y=document.getElementById("wizard-nav");function $t(){let e=location.hash.slice(1);if(!e||e==="dashboard")return{step:0,id:null};let t=e.match(/^assessment\/([^/]+)\/step\/(\d+)$/);return t?{step:parseInt(t[2],10),id:t[1]}:{step:0,id:null}}function Va(e,t){let a=e===0?"#dashboard":`#assessment/${t}/step/${e}`;location.hash!==a&&history.pushState(null,"",a)}function ue(e,t){Va(e,t??N?.id??null),$e(e,t)}function $e(e,t){if(e===0)N=null,O=0;else{let a=t?Se(t):N;if(!a){history.replaceState(null,"","#dashboard"),$e(0,null);return}N=a,O=e>=1&&e<=9?e:a.currentStep??1}_a(O)}function Ba(e){let t=Se(e);if(!t)return;let a=t.currentStep>=1&&t.currentStep<=9?t.currentStep:1;ue(a,e)}function Ze(){ue(0,null)}function Da(){if(!N||O===0){Xe.innerHTML="";return}let e=new Set(N.completedSteps??[]),t=Qe.length-1,a=Qe.slice(1).map((i,n)=>{let d=n+1,l=e.has(d),g=d===O,r=l?"completed":g?"active":"",y=l||d!==O&&e.has(d-1),p=`Step ${d}: ${i}${l?", completed":g?", current step":""}`,u=`<div class="pstep${r?` pstep--${r}`:""}" role="listitem">
        <button type="button" class="pstep-btn"
          ${y?`data-goto="${d}"`:'disabled aria-disabled="true"'}
          aria-current="${g?"step":"false"}"
          aria-label="${p}">
          <span aria-hidden="true">${l?"\u2713":d}</span>
        </button>
        <span class="pstep-label" aria-hidden="true">${s(i)}</span>
      </div>`;return n===0?u:`<div class="pstep-line${e.has(d-1)||d<=O?" pstep-line--filled":""}" aria-hidden="true"></div>${u}`}).join("");Xe.innerHTML=`
    <nav class="progress-steps" role="list"
      aria-label="Assessment progress: step ${O} of ${t}">
      ${a}
    </nav>`,Xe.querySelectorAll("[data-goto]").forEach(i=>{i.addEventListener("click",()=>ue(parseInt(i.dataset.goto,10),N.id))})}function Te(){if(!N||O===0){Y.innerHTML="";return}Y.innerHTML=`
    <div id="nav-errors" role="alert" aria-live="polite" class="error-list-container"></div>
    <div class="wizard-nav-buttons">
      ${O>1?'<button type="button" id="btn-back" class="btn btn-secondary">\u2190 Back</button>':'<button type="button" id="btn-dashboard" class="btn btn-ghost">\u2190 Dashboard</button>'}
      <span class="step-indicator" aria-label="Step ${O} of 9">Step ${O} / 9</span>
      ${O<9?'<button type="button" id="btn-next" class="btn btn-primary">Next \u2192</button>':'<button type="button" id="btn-finish" class="btn btn-success">Finish \u2713</button>'}
    </div>`,Y.querySelector("#btn-back")?.addEventListener("click",()=>{N.currentStep=O-1,G(N),ue(O-1,N.id)}),Y.querySelector("#btn-dashboard")?.addEventListener("click",Ze);let e=()=>{let{valid:a,errors:i}=Ie[O].validate(N),n=Y.querySelector("#nav-errors");if(!a){Ce(n,i),n.scrollIntoView({behavior:"smooth",block:"nearest"});return}Ce(n,[]);let d=N.completedSteps??[];d.includes(O)||d.push(O),N.completedSteps=d;let l=Math.min(O+1,9);N.currentStep=l,G(N),ue(l,N.id)};Y.querySelector("#btn-next")?.addEventListener("click",e),Y.querySelector("#btn-finish")?.addEventListener("click",()=>{N.currentStep=9,G(N),Ze()});let t=Y.querySelector("#btn-next")??Y.querySelector("#btn-finish");if(t){let{valid:a}=Ie[O].validate(N);t.disabled=!a,t.setAttribute("aria-disabled",String(!a))}}function _a(e){O=e,e>=1&&e<=9&&V(`step-${e}`,{step:e,stepLabel:Qe[e]}),tt(),Da(),Ae.innerHTML="";let t=Ie[e];if(!t)return;let a;if(e===0)a=t.render(null,{openAssessment:Ba});else{let i=function(){let n=Ie[O].render(N,(d,l,g)=>{Object.assign(N,d),G(N),l?i():g&&Te()});Ae.innerHTML="",Ae.appendChild(n),Te()};a=t.render(N,(n,d,l)=>{Object.assign(N,n),G(N),d?i():l&&Te()})}Ae.appendChild(a),Te()}window.addEventListener("hashchange",()=>{let{step:e,id:t}=$t();$e(e,t)});document.addEventListener("DOMContentLoaded",()=>{document.getElementById("btn-new-assessment")?.addEventListener("click",()=>{Ze()});let{step:e,id:t}=$t();$e(e,t);let a=document.getElementById("nist-modal");a&&(a.querySelector("#nist-modal-close")?.addEventListener("click",()=>a.close()),a.addEventListener("click",i=>{i.target===a&&a.close()}))});})();
