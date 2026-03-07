const services = {
  'application-security': {
    title: 'Application Security',
    icon: 'bi-diamond',
    tagline: 'Secure your applications from design to deployment with expert-led assessments and testing.',
    description:
      'Our application security services help you identify and remediate vulnerabilities across your software development lifecycle. From code reviews to penetration testing, we ensure your applications are resilient against modern threats.',
    stats: [
      { number: '90%', label: 'of breaches involve application vulnerabilities' },
      { number: '30K+', label: 'application assessments completed' },
      { number: '48hr', label: 'average time to critical finding' },
    ],
    overview:
      'Applications are the primary attack surface for most organizations. Our team of certified professionals conducts thorough security assessments including static analysis (SAST), dynamic analysis (DAST), manual code review, and API security testing. We integrate security into your SDLC through DevSecOps consulting and developer training.',
    strategic: [
      { title: 'Security Architecture Review', description: 'Evaluate application design and architecture for security weaknesses before writing a single line of code.' },
      { title: 'Threat Modeling', description: 'Identify potential threats and attack vectors specific to your application environment.' },
      { title: 'Secure SDLC Consulting', description: 'Embed security into every phase of your software development lifecycle.' },
    ],
    tactical: [
      { title: 'Penetration Testing', description: 'Simulate real-world attacks against your web, mobile, and API applications.' },
      { title: 'Code Review (SAST)', description: 'Automated and manual static analysis to find vulnerabilities in source code.' },
      { title: 'Dynamic Testing (DAST)', description: 'Runtime testing of applications to identify vulnerabilities in deployed environments.' },
    ],
    managed: [
      { title: 'Continuous Assessment', description: 'Ongoing automated scanning and periodic manual testing of your application portfolio.' },
      { title: 'DevSecOps Integration', description: 'Embed security tools and processes into your CI/CD pipeline for continuous security.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover vulnerabilities before attackers do.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Fix issues with expert-guided remediation support.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify fixes through retesting and validation.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain security posture with ongoing assessments.' },
    ],
    testimonial: {
      quote: 'GuidePoint\'s application security team found critical vulnerabilities that our internal scans completely missed. Their remediation guidance was actionable and clear.',
      author: 'VP of Engineering',
      company: 'Fortune 500 Financial Services',
    },
  },

  'ai-security': {
    title: 'Artificial Intelligence (AI) Security',
    icon: 'bi-cpu',
    tagline: 'Protect your AI/ML systems and leverage AI to strengthen your security posture.',
    description:
      'As organizations rapidly adopt AI and machine learning, new attack surfaces emerge. Our AI security services help you secure AI systems, detect AI-powered threats, and use AI to enhance your defensive capabilities.',
    stats: [
      { number: '78%', label: 'of organizations using AI lack security controls' },
      { number: '3x', label: 'increase in AI-targeted attacks in 2025' },
      { number: '200+', label: 'AI security assessments completed' },
    ],
    overview:
      'AI introduces unique risks including data poisoning, model theft, adversarial attacks, and prompt injection. Our experts assess your AI/ML pipeline end-to-end — from training data integrity to model deployment security. We also help you leverage AI-powered tools for threat detection, automated response, and security operations.',
    strategic: [
      { title: 'AI Risk Assessment', description: 'Evaluate risks across your AI/ML lifecycle including data, models, and inference endpoints.' },
      { title: 'AI Governance Framework', description: 'Develop policies and controls for responsible and secure AI adoption.' },
      { title: 'LLM Security Review', description: 'Assess large language model deployments for prompt injection, data leakage, and misuse risks.' },
    ],
    tactical: [
      { title: 'Model Security Testing', description: 'Test AI models for adversarial robustness, data poisoning, and extraction attacks.' },
      { title: 'AI Infrastructure Audit', description: 'Review the security of ML pipelines, training environments, and model serving infrastructure.' },
    ],
    managed: [
      { title: 'AI Threat Monitoring', description: 'Continuous monitoring of AI systems for anomalous behavior and adversarial inputs.' },
      { title: 'AI-Powered SOC', description: 'Leverage AI to enhance threat detection and automate incident response in your SOC.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Map AI-specific risks across your organization.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Harden AI systems against emerging attack techniques.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Test AI defenses with adversarial simulations.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain secure AI operations with ongoing monitoring.' },
    ],
    testimonial: {
      quote: 'Their understanding of AI-specific threats is unmatched. They helped us secure our ML pipeline and build a governance framework from scratch.',
      author: 'Chief Data Officer',
      company: 'Healthcare Technology Company',
    },
  },

  'cloud-security': {
    title: 'Cloud Security',
    icon: 'bi-cloud',
    tagline: 'Secure your cloud infrastructure across AWS, Azure, GCP, and multi-cloud environments.',
    description:
      'Cloud migration introduces new security challenges. Our cloud security experts help you design, implement, and maintain secure cloud architectures that protect your data and workloads while enabling business agility.',
    stats: [
      { number: '45%', label: 'of breaches occur in cloud environments' },
      { number: '1,500+', label: 'cloud security assessments delivered' },
      { number: '99.9%', label: 'uptime maintained for managed clients' },
    ],
    overview:
      'We provide comprehensive cloud security services across all major platforms. Our team assesses your cloud posture, remediates misconfigurations, implements zero-trust architectures, and provides ongoing managed security for your cloud workloads. We specialize in AWS, Azure, and GCP with deep expertise in containerization, serverless, and hybrid cloud environments.',
    strategic: [
      { title: 'Cloud Security Architecture', description: 'Design secure cloud architectures aligned with industry frameworks and best practices.' },
      { title: 'Cloud Migration Security', description: 'Ensure security is embedded throughout your cloud migration journey.' },
      { title: 'Multi-Cloud Strategy', description: 'Develop unified security strategies across AWS, Azure, and GCP environments.' },
    ],
    tactical: [
      { title: 'Cloud Penetration Testing', description: 'Test cloud infrastructure, APIs, and workloads for vulnerabilities and misconfigurations.' },
      { title: 'Configuration Assessment', description: 'Audit cloud settings against CIS benchmarks and provider best practices.' },
      { title: 'Container Security', description: 'Secure Docker, Kubernetes, and serverless deployments across your cloud environment.' },
    ],
    managed: [
      { title: 'Cloud Security Posture Management', description: 'Continuous monitoring and remediation of cloud misconfigurations and compliance drift.' },
      { title: 'Cloud Workload Protection', description: 'Runtime protection for VMs, containers, and serverless functions in production.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover cloud misconfigurations and vulnerabilities.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Fix issues with cloud-native remediation guidance.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify cloud security posture continuously.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain compliance across cloud environments.' },
    ],
    testimonial: {
      quote: 'GuidePoint helped us migrate 200+ workloads to AWS securely. Their cloud team is deeply technical and incredibly responsive.',
      author: 'Cloud Infrastructure Director',
      company: 'Global Retail Corporation',
    },
  },

  'data-security': {
    title: 'Data Security & Privacy',
    icon: 'bi-database',
    tagline: 'Protect your most valuable asset — your data — wherever it lives.',
    description:
      'Data is the lifeblood of every organization. Our data security services help you discover, classify, protect, and govern sensitive data across on-premises, cloud, and hybrid environments.',
    stats: [
      { number: '$4.45M', label: 'average cost of a data breach (IBM 2025)' },
      { number: '83%', label: 'of breaches involve data in the cloud' },
      { number: '500+', label: 'data protection programs implemented' },
    ],
    overview:
      'We take a data-centric approach to security, helping you understand where sensitive data lives, who has access, and how it flows through your organization. Our services span data discovery and classification, DLP implementation, encryption strategy, privacy compliance (GDPR, CCPA, HIPAA), and data governance frameworks.',
    strategic: [
      { title: 'Data Security Strategy', description: 'Develop a comprehensive data protection strategy aligned with business objectives and regulatory requirements.' },
      { title: 'Privacy Impact Assessment', description: 'Assess data processing activities for privacy risks and regulatory compliance.' },
    ],
    tactical: [
      { title: 'Data Discovery & Classification', description: 'Find and classify sensitive data across structured and unstructured repositories.' },
      { title: 'DLP Implementation', description: 'Deploy and tune data loss prevention controls across endpoints, network, and cloud.' },
      { title: 'Encryption Assessment', description: 'Evaluate and implement encryption for data at rest, in transit, and in use.' },
    ],
    managed: [
      { title: 'Managed DLP', description: 'Ongoing monitoring, tuning, and incident response for your data loss prevention program.' },
      { title: 'Privacy Program Management', description: 'Continuous privacy compliance monitoring and data subject request handling.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover where sensitive data lives across your environment.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement controls to protect data from unauthorized access.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify data protection controls are effective.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain ongoing compliance with data privacy regulations.' },
    ],
    testimonial: {
      quote: 'They helped us achieve GDPR compliance across 12 countries and implemented a DLP program that reduced data incidents by 85%.',
      author: 'Chief Privacy Officer',
      company: 'European Manufacturing Group',
    },
  },

  'email-security': {
    title: 'Email Security',
    icon: 'bi-envelope-check',
    tagline: 'Defend against phishing, BEC, and email-borne threats with layered protection.',
    description:
      'Email remains the #1 attack vector. Our email security services protect your organization from phishing, business email compromise (BEC), malware delivery, and data exfiltration through email channels.',
    stats: [
      { number: '91%', label: 'of cyberattacks begin with email' },
      { number: '$2.4B', label: 'lost to BEC attacks annually' },
      { number: '98.5%', label: 'phishing detection rate for our clients' },
    ],
    overview:
      'We implement defense-in-depth email security strategies combining advanced threat protection, email authentication (DMARC/DKIM/SPF), user awareness training, and incident response capabilities. Our approach addresses both inbound threats and outbound data loss across Microsoft 365, Google Workspace, and on-premises email systems.',
    strategic: [
      { title: 'Email Security Architecture', description: 'Design a layered email security strategy for your organization.' },
      { title: 'DMARC Implementation', description: 'Implement email authentication to prevent domain spoofing and impersonation.' },
    ],
    tactical: [
      { title: 'Phishing Simulation', description: 'Test employee susceptibility with realistic phishing campaigns and measure improvement.' },
      { title: 'Email Gateway Assessment', description: 'Evaluate and optimize your email security gateway configurations.' },
    ],
    managed: [
      { title: 'Managed Email Protection', description: 'Ongoing monitoring, threat analysis, and incident response for email-based threats.' },
      { title: 'Phishing Response Service', description: 'Rapid analysis and containment of reported phishing attempts.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect phishing and BEC attempts before they reach users.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Remove threats and remediate compromised accounts.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify email defenses with ongoing phishing simulations.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain email security posture with continuous monitoring.' },
    ],
    testimonial: {
      quote: 'After implementing their email security program, we saw a 95% reduction in successful phishing attempts and zero BEC incidents.',
      author: 'CISO',
      company: 'Financial Services Firm',
    },
  },

  'endpoint-security': {
    title: 'Endpoint Security',
    icon: 'bi-pencil',
    tagline: 'Protect every endpoint — from workstations to mobile devices — against advanced threats.',
    description:
      'Endpoints are where work happens and where attackers gain footholds. Our endpoint security services help you deploy, optimize, and manage endpoint protection platforms that detect and respond to threats in real time.',
    stats: [
      { number: '70%', label: 'of breaches originate at the endpoint' },
      { number: '500K+', label: 'endpoints under our protection' },
      { number: '<1min', label: 'average detection time for critical threats' },
    ],
    overview:
      'We help organizations move beyond traditional antivirus to next-generation endpoint protection (NGAV), endpoint detection and response (EDR), and extended detection and response (XDR). Our vendor-agnostic approach ensures you get the best-fit solution for your environment.',
    strategic: [
      { title: 'Endpoint Strategy Assessment', description: 'Evaluate your current endpoint security stack and develop a modernization roadmap.' },
      { title: 'XDR Architecture', description: 'Design an extended detection and response architecture that integrates endpoints with network and cloud telemetry.' },
    ],
    tactical: [
      { title: 'EDR Deployment', description: 'Deploy and configure endpoint detection and response solutions across your environment.' },
      { title: 'Endpoint Hardening', description: 'Lock down endpoint configurations following CIS benchmarks and security best practices.' },
    ],
    managed: [
      { title: 'Managed EDR', description: '24/7 monitoring, threat hunting, and incident response for your endpoint environment.' },
      { title: 'Managed Patching', description: 'Automated patch management with prioritized vulnerability remediation.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect endpoint threats with advanced behavioral analysis.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Contain and remediate endpoint compromises rapidly.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify endpoint security controls through testing.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain endpoint hygiene with continuous monitoring.' },
    ],
    testimonial: {
      quote: 'Their managed EDR service detected a sophisticated supply chain attack that bypassed our other controls. Response was immediate.',
      author: 'IT Security Manager',
      company: 'Mid-Market Manufacturing Company',
    },
  },

  'grc': {
    title: 'Governance, Risk & Compliance',
    icon: 'bi-check2-square',
    tagline: 'Build and maintain a risk management program that aligns security with business goals.',
    description:
      'Effective cybersecurity starts with governance. Our GRC services help you develop security policies, assess and manage risk, and achieve compliance with industry regulations and frameworks.',
    stats: [
      { number: '800+', label: 'GRC program assessments completed' },
      { number: '100%', label: 'audit pass rate for managed compliance clients' },
      { number: '40%', label: 'average risk reduction in year one' },
    ],
    overview:
      'We help organizations build and mature their GRC programs across multiple frameworks including NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP. Our consultants bring deep regulatory expertise and practical experience to help you achieve and maintain compliance efficiently.',
    strategic: [
      { title: 'Risk Assessment', description: 'Comprehensive risk assessments aligned with NIST, ISO, and industry-specific frameworks.' },
      { title: 'Policy Development', description: 'Create security policies, standards, and procedures tailored to your organization.' },
      { title: 'Compliance Roadmap', description: 'Develop a prioritized roadmap to achieve compliance with target frameworks.' },
    ],
    tactical: [
      { title: 'Gap Analysis', description: 'Identify gaps between current security controls and target framework requirements.' },
      { title: 'Audit Preparation', description: 'Prepare for SOC 2, ISO 27001, HIPAA, PCI DSS, and other compliance audits.' },
      { title: 'Third-Party Risk Assessment', description: 'Evaluate the security posture of your vendors and supply chain partners.' },
    ],
    managed: [
      { title: 'Managed Compliance', description: 'Ongoing compliance monitoring, evidence collection, and audit support.' },
      { title: 'vCISO Services', description: 'Fractional CISO leadership to guide your security strategy and program maturity.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Assess risks and compliance gaps across your organization.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Close gaps with practical, cost-effective controls.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Demonstrate compliance through successful audits.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuous compliance with evolving regulations.' },
    ],
    testimonial: {
      quote: 'GuidePoint helped us achieve SOC 2 Type II certification in under 6 months. Their structured approach made a complex process manageable.',
      author: 'Chief Compliance Officer',
      company: 'SaaS Technology Company',
    },
  },

  'iam': {
    title: 'Identity & Access Management',
    icon: 'bi-fingerprint',
    tagline: 'Ensure the right people have the right access at the right time.',
    description:
      'Identity is the new perimeter. Our IAM services help you implement zero-trust access controls, manage privileged accounts, and govern identity lifecycles across your hybrid environment.',
    stats: [
      { number: '80%', label: 'of breaches involve compromised credentials' },
      { number: '600+', label: 'IAM implementations completed' },
      { number: '60%', label: 'reduction in access-related incidents' },
    ],
    overview:
      'We deliver end-to-end IAM solutions including identity governance (IGA), privileged access management (PAM), single sign-on (SSO), multi-factor authentication (MFA), and zero-trust network access (ZTNA). Our vendor-agnostic approach ensures the best-fit solution for your environment and scale.',
    strategic: [
      { title: 'IAM Strategy & Roadmap', description: 'Develop a comprehensive identity strategy aligned with zero-trust principles.' },
      { title: 'Zero Trust Architecture', description: 'Design and implement zero-trust access controls across your environment.' },
    ],
    tactical: [
      { title: 'PAM Implementation', description: 'Deploy privileged access management to secure administrative accounts and credentials.' },
      { title: 'MFA Rollout', description: 'Implement multi-factor authentication across your organization with minimal user friction.' },
      { title: 'SSO Integration', description: 'Consolidate application access with single sign-on for improved security and user experience.' },
    ],
    managed: [
      { title: 'Managed IAM', description: 'Ongoing identity governance, access reviews, and privileged account monitoring.' },
      { title: 'Identity Threat Detection', description: 'Monitor for identity-based attacks including credential stuffing, privilege escalation, and lateral movement.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover excessive privileges and orphaned accounts.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement least-privilege access controls.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify access policies through regular reviews.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain identity hygiene with continuous governance.' },
    ],
    testimonial: {
      quote: 'Their IAM team reduced our privileged account sprawl by 70% and implemented PAM across 2,000+ servers in just 3 months.',
      author: 'Director of IT Security',
      company: 'Healthcare System',
    },
  },

  'incident-response': {
    title: 'Incident Response & Threat Intelligence',
    icon: 'bi-exclamation-triangle',
    tagline: 'Prepare for, respond to, and recover from security incidents with expert support.',
    description:
      'When a breach occurs, every minute counts. Our incident response team provides rapid containment, forensic analysis, and recovery services. Our threat intelligence team keeps you ahead of emerging threats.',
    stats: [
      { number: '1hr', label: 'average response time for critical incidents' },
      { number: '2,000+', label: 'incident investigations completed' },
      { number: '99%', label: 'of incidents contained within 24 hours' },
    ],
    overview:
      'Our GRIT (GuidePoint Research and Intelligence Team) combines world-class incident response with cutting-edge threat intelligence. We offer proactive IR readiness assessments, incident response retainer services, digital forensics, and actionable threat intelligence feeds tailored to your industry.',
    strategic: [
      { title: 'IR Readiness Assessment', description: 'Evaluate your incident response capabilities and develop improvement plans.' },
      { title: 'IR Plan Development', description: 'Create comprehensive incident response plans, playbooks, and communication templates.' },
      { title: 'Tabletop Exercises', description: 'Simulate incidents to test your team\'s response capabilities and decision-making.' },
    ],
    tactical: [
      { title: 'Incident Response', description: 'Rapid response to active security incidents with containment, eradication, and recovery.' },
      { title: 'Digital Forensics', description: 'Forensic investigation of compromised systems, data, and networks.' },
      { title: 'Malware Analysis', description: 'Reverse engineering of malware samples to understand capabilities and attribution.' },
    ],
    managed: [
      { title: 'IR Retainer', description: 'Pre-negotiated incident response retainer for guaranteed response times and reduced costs.' },
      { title: 'Threat Intelligence Feed', description: 'Curated, actionable threat intelligence tailored to your industry and threat landscape.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect and classify security incidents rapidly.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Contain and eradicate threats from your environment.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Confirm complete remediation through forensic verification.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Strengthen defenses to prevent recurrence.' },
    ],
    testimonial: {
      quote: 'When we discovered a breach at 2 AM, their IR team was on the phone within 30 minutes and had the threat contained by morning.',
      author: 'CISO',
      company: 'Government Contractor',
    },
  },

  'managed-security': {
    title: 'Managed Security Services',
    icon: 'bi-shield-lock',
    tagline: 'Extend your security team with our 24/7 managed security operations.',
    description:
      'Not every organization can staff a full security team. Our managed security services provide 24/7 monitoring, detection, and response capabilities through our GPVUE program — a customized, integrated security program designed for your unique needs.',
    stats: [
      { number: '24/7', label: 'security operations coverage' },
      { number: '15min', label: 'average time to detect critical threats' },
      { number: '1,200+', label: 'managed security clients' },
    ],
    overview:
      'GPVUE is our signature managed security program that provides an integrated approach to cybersecurity. Unlike traditional MSSPs, GPVUE leverages our expertise across all cybersecurity disciplines to deliver a program specifically designed for your organization. We become an extension of your team, providing continuous monitoring, threat hunting, incident response, and strategic guidance.',
    strategic: [
      { title: 'Security Program Design', description: 'Design a comprehensive security program tailored to your risk profile and maturity level.' },
      { title: 'Technology Assessment', description: 'Evaluate and select the right security technologies for your managed security program.' },
    ],
    tactical: [
      { title: 'SIEM Deployment', description: 'Deploy and optimize SIEM platforms for effective threat detection and log management.' },
      { title: 'SOAR Implementation', description: 'Automate security operations with orchestration, automation, and response playbooks.' },
    ],
    managed: [
      { title: 'GPVUE Managed Security', description: 'Full-spectrum managed security operations including monitoring, detection, response, and reporting.' },
      { title: 'Managed Threat Hunting', description: 'Proactive threat hunting by experienced analysts to find hidden threats in your environment.' },
      { title: 'Managed SIEM', description: 'Full lifecycle SIEM management including log ingestion, rule tuning, and alert triage.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect threats with 24/7 monitoring and advanced analytics.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Respond to incidents with expert-led containment and recovery.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Measure security effectiveness with detailed reporting.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuous security operations without staffing burden.' },
    ],
    testimonial: {
      quote: 'GPVUE transformed our security posture. We went from reactive firefighting to proactive threat management in just 6 months.',
      author: 'VP of Information Security',
      company: 'National Healthcare Provider',
    },
  },

  'network-security': {
    title: 'Network & Infrastructure Security',
    icon: 'bi-hdd-network',
    tagline: 'Protect your network infrastructure with defense-in-depth security controls.',
    description:
      'Your network is the backbone of your operations. Our network security services help you design, implement, and maintain secure network architectures that protect against external and internal threats.',
    stats: [
      { number: '60%', label: 'of attacks involve lateral network movement' },
      { number: '1,000+', label: 'network security assessments completed' },
      { number: '50%', label: 'average reduction in attack surface' },
    ],
    overview:
      'We provide comprehensive network security services including architecture review, segmentation design, firewall optimization, intrusion detection/prevention, and network access control. Our team has deep expertise across all major network security vendors and technologies.',
    strategic: [
      { title: 'Network Security Architecture', description: 'Design secure network architectures with proper segmentation and defense-in-depth.' },
      { title: 'Zero Trust Network Design', description: 'Implement micro-segmentation and zero-trust network access controls.' },
    ],
    tactical: [
      { title: 'Network Penetration Testing', description: 'Test network defenses with simulated attacks to identify vulnerabilities.' },
      { title: 'Firewall Assessment', description: 'Audit firewall rules, configurations, and policies for security and efficiency.' },
      { title: 'Wireless Security Assessment', description: 'Evaluate wireless network security including rogue AP detection and encryption review.' },
    ],
    managed: [
      { title: 'Managed Firewall', description: 'Full lifecycle firewall management including rule changes, patching, and monitoring.' },
      { title: 'Network Monitoring', description: '24/7 network traffic analysis and anomaly detection for threat identification.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover network vulnerabilities and misconfigurations.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement network segmentation and hardening controls.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify network defenses through penetration testing.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain network security with continuous monitoring.' },
    ],
    testimonial: {
      quote: 'Their network security team redesigned our segmentation architecture, reducing our lateral movement risk by 80%.',
      author: 'Network Security Director',
      company: 'Large University System',
    },
  },

  'ot-security': {
    title: 'OT Security Services',
    icon: 'bi-gear-wide-connected',
    tagline: 'Secure operational technology and industrial control systems without disrupting operations.',
    description:
      'Operational technology (OT) and industrial control systems (ICS) face unique security challenges. Our OT security services bridge the gap between IT and OT to protect critical infrastructure without impacting operational reliability.',
    stats: [
      { number: '300%', label: 'increase in OT-targeted attacks since 2023' },
      { number: '200+', label: 'OT/ICS security assessments completed' },
      { number: '95%', label: 'client recommendation rate' },
    ],
    overview:
      'We specialize in securing industrial environments including manufacturing, energy, utilities, and critical infrastructure. Our team understands the unique constraints of OT environments — availability requirements, legacy systems, and safety implications. We provide assessments, architecture design, and managed services tailored to OT/ICS/SCADA environments.',
    strategic: [
      { title: 'OT Risk Assessment', description: 'Assess cybersecurity risks in your OT environment aligned with IEC 62443 and NIST CSF.' },
      { title: 'IT/OT Convergence Strategy', description: 'Develop a secure strategy for connecting IT and OT networks while maintaining isolation.' },
    ],
    tactical: [
      { title: 'OT Network Assessment', description: 'Map and assess OT network architecture, protocols, and device inventory.' },
      { title: 'ICS Vulnerability Assessment', description: 'Identify vulnerabilities in SCADA, DCS, and PLC systems without disrupting operations.' },
    ],
    managed: [
      { title: 'OT Monitoring', description: 'Continuous monitoring of OT networks for anomalous activity and cyber threats.' },
      { title: 'OT Incident Response', description: 'Specialized incident response for OT environments with safety-first approach.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover OT assets and assess their security posture.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement controls without disrupting industrial operations.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify OT security through safe, non-disruptive testing.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain OT security with continuous monitoring.' },
    ],
    testimonial: {
      quote: 'They understood our OT environment and the criticality of uptime. Their assessment was thorough without causing any production disruptions.',
      author: 'Plant Security Manager',
      company: 'Energy & Utilities Company',
    },
  },

  'security-awareness': {
    title: 'Security Awareness & Education',
    icon: 'bi-mortarboard',
    tagline: 'Transform your workforce into your strongest line of defense.',
    description:
      'People are both the greatest vulnerability and the strongest defense. Our security awareness programs educate employees to recognize and respond to threats, building a security-first culture across your organization.',
    stats: [
      { number: '82%', label: 'of breaches involve the human element' },
      { number: '75%', label: 'reduction in click rates after training' },
      { number: '50K+', label: 'employees trained annually' },
    ],
    overview:
      'We deliver engaging, effective security awareness programs that go beyond checkbox compliance. Our approach combines interactive training, phishing simulations, role-based education, and culture measurement to create lasting behavioral change. We also offer Security University — our advanced training program for cybersecurity professionals.',
    strategic: [
      { title: 'Awareness Program Design', description: 'Design a comprehensive security awareness program tailored to your organization\'s culture and risks.' },
      { title: 'Security Culture Assessment', description: 'Measure your organization\'s security culture maturity and identify improvement areas.' },
    ],
    tactical: [
      { title: 'Phishing Simulations', description: 'Realistic phishing campaigns to test and improve employee awareness.' },
      { title: 'Role-Based Training', description: 'Targeted training for developers, executives, finance, HR, and other high-risk roles.' },
      { title: 'Security University', description: 'Advanced hands-on training and certification preparation for security professionals.' },
    ],
    managed: [
      { title: 'Managed Awareness Program', description: 'Fully managed security awareness program with content, campaigns, and reporting.' },
      { title: 'Continuous Education', description: 'Ongoing micro-learning, newsletters, and just-in-time training for sustained awareness.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Measure current awareness levels and risk areas.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Deliver targeted training to close knowledge gaps.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Test awareness through simulations and assessments.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain awareness with ongoing education programs.' },
    ],
    testimonial: {
      quote: 'Our phishing click rate dropped from 35% to 4% in one year. Their program made security awareness engaging, not just mandatory.',
      author: 'HR Director',
      company: 'Regional Bank',
    },
  },

  'soc': {
    title: 'Security Operations Center (SOC)',
    icon: 'bi-globe2',
    tagline: 'Build or enhance your security operations center with expert guidance.',
    description:
      'A well-run SOC is the nerve center of your security program. We help you build, optimize, or outsource SOC capabilities with the right people, processes, and technology.',
    stats: [
      { number: '200+', label: 'SOC projects delivered' },
      { number: '85%', label: 'reduction in mean time to detect (MTTD)' },
      { number: '24/7', label: 'coverage with follow-the-sun model' },
    ],
    overview:
      'Whether you need to build a SOC from scratch, optimize an existing operation, or augment your team with expert analysts, we have the experience to help. Our SOC services cover SIEM optimization, alert tuning, playbook development, threat hunting, and SOC maturity assessment.',
    strategic: [
      { title: 'SOC Design & Build', description: 'Design and build a security operations center tailored to your organization\'s needs.' },
      { title: 'SOC Maturity Assessment', description: 'Evaluate your SOC capabilities and develop a maturity improvement roadmap.' },
    ],
    tactical: [
      { title: 'SIEM Optimization', description: 'Tune SIEM rules, reduce alert fatigue, and improve detection fidelity.' },
      { title: 'Playbook Development', description: 'Create standardized response playbooks for common incident types.' },
      { title: 'Threat Hunt Exercises', description: 'Conduct proactive threat hunting to find adversaries already in your environment.' },
    ],
    managed: [
      { title: 'SOC-as-a-Service', description: 'Full SOC operations delivered as a managed service with 24/7 analyst coverage.' },
      { title: 'SOC Staff Augmentation', description: 'Embed experienced SOC analysts into your team to fill capability gaps.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect threats faster with optimized detection rules.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Respond to incidents with standardized playbooks.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Measure SOC effectiveness with key metrics.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain 24/7 security monitoring and response.' },
    ],
    testimonial: {
      quote: 'They helped us transform our SOC from a noisy alert factory into a lean, effective threat detection machine.',
      author: 'SOC Manager',
      company: 'Insurance Company',
    },
  },

  'staff-augmentation': {
    title: 'Staff Augmentation',
    icon: 'bi-person-plus',
    tagline: 'Fill critical security talent gaps with vetted cybersecurity professionals.',
    description:
      'The cybersecurity talent shortage is real. Our staff augmentation services provide experienced security professionals to supplement your team — from short-term project support to long-term embedded consultants.',
    stats: [
      { number: '3.5M', label: 'unfilled cybersecurity jobs globally' },
      { number: '500+', label: 'security professionals placed' },
      { number: '48hr', label: 'average time to present qualified candidates' },
    ],
    overview:
      'We maintain a deep bench of vetted cybersecurity professionals across all disciplines. Whether you need a SIEM engineer for a migration project, a GRC analyst for audit prep, or a security architect for a cloud transformation, we can provide the right expertise quickly.',
    strategic: [
      { title: 'Talent Strategy Consulting', description: 'Develop a security staffing strategy that balances full-time, augmented, and managed resources.' },
      { title: 'vCISO Services', description: 'Fractional CISO leadership for organizations that need strategic security guidance.' },
    ],
    tactical: [
      { title: 'Project-Based Staffing', description: 'Dedicated security professionals for specific projects and initiatives.' },
      { title: 'Skill-Based Placement', description: 'Match specialized security talent to your specific technical requirements.' },
    ],
    managed: [
      { title: 'Embedded Consultants', description: 'Long-term security professionals who integrate with your team and culture.' },
      { title: 'Managed Team', description: 'A dedicated team of security professionals managed by GuidePoint to deliver ongoing services.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Assess talent gaps and define role requirements.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Fill gaps with qualified, vetted professionals.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify performance through regular reviews.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuity with knowledge transfer processes.' },
    ],
    testimonial: {
      quote: 'They placed two senior security engineers within a week. Both were exceptional and stayed with us for over a year.',
      author: 'Director of Security Operations',
      company: 'Technology Company',
    },
  },

  'vulnerability-management': {
    title: 'Vulnerability Management & Penetration Testing',
    icon: 'bi-activity',
    tagline: 'Find, prioritize, and fix vulnerabilities before attackers exploit them.',
    description:
      'Vulnerabilities are discovered daily. Our vulnerability management services help you maintain continuous visibility into your attack surface and prioritize remediation based on real-world risk.',
    stats: [
      { number: '25K+', label: 'new CVEs published annually' },
      { number: '5,000+', label: 'penetration tests conducted' },
      { number: '85%', label: 'of exploited vulns had a patch available' },
    ],
    overview:
      'We deliver comprehensive vulnerability management programs that go beyond scanning. Our approach includes asset discovery, vulnerability assessment, risk-based prioritization, remediation tracking, and penetration testing. We help you build a program that continuously reduces risk across your entire attack surface.',
    strategic: [
      { title: 'VM Program Design', description: 'Design a risk-based vulnerability management program aligned with your business priorities.' },
      { title: 'Attack Surface Management', description: 'Continuously discover and assess your external attack surface.' },
    ],
    tactical: [
      { title: 'Penetration Testing', description: 'Expert-led penetration testing of networks, applications, and cloud environments.' },
      { title: 'Red Team Exercises', description: 'Full-scope adversary simulations to test your detection and response capabilities.' },
      { title: 'Vulnerability Assessment', description: 'Comprehensive scanning and analysis of your internal and external attack surface.' },
    ],
    managed: [
      { title: 'Managed VM Program', description: 'Full lifecycle vulnerability management including scanning, prioritization, and remediation tracking.' },
      { title: 'Continuous Pen Testing', description: 'Ongoing penetration testing program with regular assessments and retesting.' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover vulnerabilities across your entire attack surface.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Prioritize and fix vulnerabilities based on real-world risk.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify remediation through retesting and validation.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuous visibility with ongoing scanning.' },
    ],
    testimonial: {
      quote: 'Their red team exercise revealed attack paths we never considered. The detailed report and remediation plan were incredibly valuable.',
      author: 'VP of Security',
      company: 'E-Commerce Platform',
    },
  },
};

export default services;
