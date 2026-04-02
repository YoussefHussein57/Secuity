// ===========================================
// Resource Detail Pages — downloadable assets
// Each keyed by slug for /resources/:slug routing
// ===========================================

const resourceDetails = {
  'grit-2026-ransomware-cyber-threat-report': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/01/GRIT-2026-Ransomware-and-Cyber-Threat-Report.pdf',
    title: 'GRIT 2026 Ransomware & Cyber Threat Report',
    category: 'Incident Response & Threat Intelligence',
    resourceType: 'Threat Advisory',
    resourceIcon: '/images/resources/datasheet-icon.png',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/09/GRIT_HeaderImage.png',
    formTitle: 'Download Now',
    submitText: 'DOWNLOAD NOW',
    subtitle:
      'Trends and threats from the past year, with insights to protect your organization.',
    body: 'Stay prepared for the year ahead with a look-back at the cyber threats that had the most impact in 2025. Insights from the report include:',
    insights: [
      {
        bold: 'Ransomware victim numbers hit a new all-time high.',
        text: '2,287 ransomware victims were posted in Q4 2025 alone \u2014 the largest number recorded in a single quarter since the report\u2019s inception.',
      },
      {
        bold: 'The number of threat groups has reached record levels.',
        text: '124 distinct ransomware groups were active in 2025, the highest ever recorded and a 46% year-over-year increase.',
      },
      {
        bold: 'The United States remains a primary target.',
        text: 'U.S.-based organizations accounted for nearly half of all ransomware victims, with Manufacturing and Technology sectors bearing the brunt.',
      },
      {
        bold: 'Initial access brokers are fueling the ecosystem.',
        text: 'The rise of access-as-a-service has lowered the barrier to entry, enabling less sophisticated actors to launch devastating attacks.',
      },
      {
        bold: 'Data exfiltration without encryption is on the rise.',
        text: 'An increasing number of threat actors are shifting to exfiltration-only attacks, bypassing traditional ransomware deployment entirely.',
      },
    ],
    closing:
      'Download the full report for a comprehensive analysis of 2025\u2019s ransomware landscape, threat actor profiles, and actionable recommendations to strengthen your defenses in 2026.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'establishing-ai-governance-competitive-advantage': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/08/Generative_AI_Services.pdf',
    title: 'Establishing AI Governance as a Competitive Advantage',
    category: 'Governance, Risk & Compliance',
    resourceType: 'Whitepaper',
    resourceIcon: '/images/resources/datasheet-icon.png',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/08/WIR_08.04.21_FEATURED_Image_Roundup_Blog_2000x675.jpg',
    formTitle: 'Download',
    formSubtitle: 'Whitepaper',
    submitText: 'DOWNLOAD WHITEPAPER',
    subtitle: null,
    bodyParagraphs: [
      'Organizations across every industry are integrating AI into their platforms to drive innovation, efficiency and to stay competitive. The challenge is that many are building or bringing in AI solutions without proper governance and data protections in place, creating significant risks that can undermine the very advantages organizations seek.',
      'This document is for anyone considering adopting AI or has already adopted AI but who requires further guidance and governance. The same principles apply to both agentic or generative AI. This guide provides a practical framework for successfully implementing AI as a competitive advantage through data readiness and effective AI governance.',
      'This guide, intended for organizational leadership and cybersecurity specialists, discusses:',
    ],
    body: null,
    insights: [
      { bold: '', text: 'How to ensure AI systems operate responsibly, ethically and in compliance with regulations, even in the face of explosive adoption.' },
      { bold: '', text: 'The strategic and competitive advantages of using governance frameworks.' },
      { bold: '', text: 'How AI governance results in faster scalability and better results.' },
      { bold: '', text: 'The key stakeholders in AI governance, including the roles they play in protecting the organization.' },
      { bold: '', text: 'What organizations can do today, while preparing for a future that is ready for AI proliferation.' },
    ],
    closing: 'Download now to learn more.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'grit-2026-annual-ransomware-cyber-threat-report-webinar': {
    title: 'GRIT 2026 Ransomware & Cyber Threat Report Presentation',
    category: 'Incident Response & Threat Intelligence',
    resourceType: 'Webinar',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/09/GRIT_HeaderImage.png',
    formTitle: 'Watch Now',
    formSubtitle: 'Webinar',
    submitText: 'WATCH NOW',
    subtitle: 'Annual Ransomware Retrospective: 2025 Insights & 2026 Expectations',
    bodyParagraphs: [
      'The <strong>GRIT 2026 Ransomware &amp; Cyber Threat Report</strong> documents the most active year for ransomware GRIT has ever recorded, including a <strong>58% year-over-year increase in reported victims</strong> and a growing number of active threat groups. While law enforcement disruptions reshaped parts of the ransomware ecosystem, overall activity accelerated\u2014driven by group fragmentation, faster attack cycles and increasingly repeatable operations.',
    ],
    insightsHeading: "In this session, you\u2019ll learn:",
    insights: [
      { bold: '', text: 'Why ransomware victim counts hit record highs in 2025' },
      { bold: '', text: 'How group fragmentation is driving higher attack volume' },
      { bold: '', text: 'What the rise of Qilin signals about where ransomware is headed' },
      { bold: '', text: 'Which industries and regions attackers focused on most' },
      { bold: '', text: 'How AI and vulnerability exploitation are accelerating attacks' },
    ],
    closing:
      'Watch the GuidePoint Security\u2019s Research and Intelligence Team (GRIT) walk through the GRIT 2026 Annual Report, focused on what these trends mean for incident responders, SOC analysts and detection engineering teams. We\u2019ll connect the data to real-world response challenges and discuss where defenders are most likely to encounter ransomware activity in 2026.',
    presentersList: [
      { name: 'Jason Baker', role: 'Managing Security Consultant' },
      { name: 'Grayson North', role: 'Principal Threat Intelligence Consultant' },
      { name: 'Justin Timothy', role: 'Senior Threat Intelligence Consultant' },
      { name: 'Nick Hyatt', role: 'Senior Threat Intelligence Consultant' },
    ],
    presenters: [
      {
        name: 'Grayson North',
        role: 'Principal Threat Intelligence Consultant',
        company: 'GuidePoint Security',
        photo: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/01/Grayson_North_HS.png',
      },
      {
        name: 'Jason Baker',
        role: 'Managing Security Consultant',
        company: 'GuidePoint Security',
        photo: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/01/Jason_Baker_HS.png',
      },
      {
        name: 'Justin Timothy',
        role: 'Principal Threat Intelligence Consultant',
        company: 'GuidePoint Security',
        photo: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/01/Justin_Timothy_HS.png',
      },
      {
        name: 'Nick Hyatt',
        role: 'Senior Threat Intelligence Consultant',
        company: 'GuidePoint Security',
        photo: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/01/Nick_Hyatt_HS.png',
      },
    ],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'state-of-iam-maturity-2025': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/GuidePoint-Security-Ponemon-IAM-Maturity-Report-2025_FINAL.pdf',
    title: 'Report: The State of Identity and Access Management (IAM) Maturity, 2025',
    category: 'Identity & Access Management',
    resourceType: 'Report',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/REPORT_image_NAV.jpg',
    formTitle: 'Report Download',
    submitText: 'DOWNLOAD NOW',
    subtitle: null,
    bodyParagraphs: [
      'Identity-based threats make up more than three-quarters of breaches, making it urgent that organizations mature their Identity and Access Management (IAM) programs. A survey of 625 IT professionals by the Ponemon Institute, sponsored by GuidePoint Security, reveals that most organizations are struggling to reach IAM maturity, largely due to manual processes, underinvestment in IAM technologies and limited adoption of advanced tools and automation.',
      'Download the full report to see how your organization stacks up against others and to learn how your organization can close the IAM maturity gap.',
    ],
    insightsHeading: 'Key Findings in the Report:',
    insights: [
      {
        bold: 'Low Confidence in IAM Effectiveness:',
        text: 'Only 50% of respondents rate their IAM tools and investments as effective.',
      },
      {
        bold: 'Manual Processes Impede Progress:',
        text: 'A key barrier to IAM maturity is the continued reliance on manual or semi-manual processes.',
      },
      {
        bold: 'High Performers Set the Standard:',
        text: 'Only 23% of organizations qualify as \u201chigh performers\u201d \u2014 those that rate their identity tools and investments as highly effective (9 or 10 out of 10).',
      },
      {
        bold: 'Technology, Expertise and Resource Gaps:',
        text: 'Lack of appropriate technologies (54%), in-house expertise (52%) and resources (45%) are cited as top challenges to achieving IAM maturity.',
      },
      {
        bold: 'IAM Implementation Misaligned with Security Goals:',
        text: 'Surprisingly, 45% of respondents say the primary driver for IAM investments is to improve user experience \u2014 not security.',
      },
      {
        bold: 'Policy and Platform Disconnect:',
        text: 'While most organizations report having policies in place or in development (83%), only 28% have these policies integrated into their IAM platforms.',
      },
    ],
    closing: null,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },
  'artificial-intelligence-at-guidepoint-security': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/08/Generative_AI_Services.pdf',
    title: 'Artificial Intelligence at GuidePoint Security',
    category: 'Cybersecurity',
    resourceType: 'Datasheet',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/AI_for_GP_Header.jpg',
    formTitle: 'Download Data Sheet',
    submitText: 'DOWNLOAD DATA SHEET',
    subtitle: 'Accelerate innovation and maximize security with a strategic approach to AI.',
    bodyParagraphs: [
      'Accelerate innovation and maximize security with a strategic approach to implementing and optimizing AI within your IT workflows. GuidePoint Security helps organizations adopt and govern AI technologies intelligently to accelerate success, find and neutralize threats faster and safeguard data and assets against AI-driven attacks.',
    ],
    insightsHeading: 'In this datasheet, learn how GuidePoint Security helps you:',
    insights: [
      { bold: 'Adopt AI confidently.', text: 'Implement governance frameworks that ensure your AI initiatives are secure, compliant and aligned with business goals.' },
      { bold: 'Defend against AI-powered threats.', text: 'Leverage our expertise to identify, assess and neutralize threats amplified by adversarial AI.' },
      { bold: 'Protect sensitive data.', text: 'Implement controls to safeguard data used in AI systems from breaches and misuse.' },
      { bold: 'Stay ahead of regulation.', text: 'Navigate complex AI legislation including the EU AI Act, California AB 3030 and SB 1001 with expert guidance.' },
    ],
    closing: null,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },
  'zero-trust-architecture-best-practices': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/06/Zero-Trust_eBook_3.pdf',
    title: 'Zero Trust Architecture Best Practices',
    category: 'Identity & Access Management',
    resourceType: 'Whitepaper',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/08/WIR_08.04.21_FEATURED_Image_Roundup_Blog_2000x675.jpg',
    formTitle: 'Download Whitepaper',
    submitText: 'DOWNLOAD NOW',
    subtitle: null,
    bodyParagraphs: [
      'Zero Trust is no longer optional. As perimeter-based security continues to fail against modern threats, organizations must adopt an architecture that assumes breach and verifies every request explicitly.',
      'This whitepaper provides actionable guidance for implementing Zero Trust across your organization, covering identity, network segmentation, endpoint security, and continuous monitoring.',
    ],
    insights: [
      { bold: 'Never Trust, Always Verify.', text: 'Implement strong identity verification for every user and device, regardless of network location.' },
      { bold: 'Least Privilege Access.', text: 'Limit user access rights to only what is necessary for their role, reducing the blast radius of any breach.' },
      { bold: 'Micro-Segmentation.', text: 'Divide your network into small zones to contain lateral movement and limit attacker access.' },
      { bold: 'Continuous Monitoring.', text: 'Implement real-time monitoring and analytics to detect anomalies and respond quickly to threats.' },
    ],
    closing: 'Download this whitepaper to get a practical roadmap for implementing Zero Trust in your organization.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'cloud-security-playbook-2026': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Cloud_Security_Arch_WP_Updated_2025_final.pdf',
    title: 'Cloud Security Playbook 2026',
    category: 'Cloud Security',
    resourceType: 'eBook',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/REPORT_image_NAV.jpg',
    formTitle: 'Download eBook',
    submitText: 'DOWNLOAD NOW',
    subtitle: null,
    bodyParagraphs: [
      'Cloud environments are growing faster than security teams can keep up. Misconfigurations, excessive permissions, and lack of visibility continue to be the top causes of cloud breaches.',
      'This playbook gives your security team a structured approach to securing cloud environments across AWS, Azure, and Google Cloud — from initial assessment through continuous monitoring.',
    ],
    insights: [
      { bold: 'Cloud Security Posture Management.', text: 'Continuously assess and improve your cloud security posture with automated compliance and misconfiguration detection.' },
      { bold: 'Identity and Access in the Cloud.', text: 'Apply least privilege principles across cloud IAM roles to prevent privilege escalation attacks.' },
      { bold: 'Data Protection Strategies.', text: 'Encrypt data at rest and in transit, and implement DLP controls to prevent sensitive data exposure.' },
      { bold: 'Incident Response in Cloud Environments.', text: 'Build playbooks specifically designed for cloud-native incident scenarios.' },
    ],
    closing: 'Download the Cloud Security Playbook 2026 to strengthen your cloud defenses this year.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'ai-powered-threat-detection': {
    title: 'AI-Powered Threat Detection Demo',
    category: 'AI Security',
    resourceType: 'Video',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/AI_for_GP_Header.jpg',
    formTitle: 'Watch Now',
    formSubtitle: 'Video Demo',
    submitText: 'WATCH NOW',
    subtitle: 'See how AI is transforming threat detection and response.',
    bodyParagraphs: [
      'Artificial intelligence is fundamentally changing how security teams detect and respond to threats. In this demo, see how AI-driven analytics identify threats that traditional rule-based systems miss — faster and with fewer false positives.',
    ],
    insights: [
      { bold: 'Behavioral Analytics.', text: 'Detect anomalous user and entity behavior in real time using machine learning models trained on your environment.' },
      { bold: 'Automated Triage.', text: 'Reduce alert fatigue by automatically prioritizing and correlating alerts based on threat context and risk.' },
      { bold: 'Threat Hunting Acceleration.', text: 'Use AI to surface hidden threats and indicators of compromise that manual analysis would miss.' },
    ],
    closing: 'Register to watch the full demo and see AI-powered threat detection in action.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'application-security-as-a-service-overview': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/AppSec_RGB_WP.pdf',
    title: 'Application Security as a Service Overview',
    category: 'Application Security',
    resourceType: 'Datasheet',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/08/WIR_08.04.21_FEATURED_Image_Roundup_Blog_2000x675.jpg',
    formTitle: 'Download Datasheet',
    submitText: 'DOWNLOAD NOW',
    subtitle: 'Comprehensive application security testing and advisory services.',
    bodyParagraphs: [
      "Application vulnerabilities remain one of the most exploited attack vectors. GuidePoint's Application Security as a Service (ASaaS) provides continuous security testing, expert guidance, and remediation support to keep your applications secure throughout the development lifecycle.",
    ],
    insights: [
      { bold: 'Continuous Application Testing.', text: 'Regular penetration testing and vulnerability assessments to identify and remediate application security weaknesses.' },
      { bold: 'DAST and SAST Integration.', text: 'Integrate dynamic and static application security testing into your CI/CD pipeline for shift-left security.' },
      { bold: 'Expert Remediation Guidance.', text: 'Our application security experts work with your development teams to prioritize and fix vulnerabilities effectively.' },
      { bold: 'Compliance Alignment.', text: 'Ensure your applications meet requirements for PCI DSS, SOC 2, HIPAA, and other regulatory frameworks.' },
    ],
    closing: 'Download the datasheet to learn more about our Application Security as a Service offering.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'securing-cloud-native-applications': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/09/Cloud_Governance_in_Action_WP.pdf',
    title: 'Securing Cloud-Native Applications',
    category: 'Cloud Security',
    resourceType: 'On-Demand Webinar',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/REPORT_image_NAV.jpg',
    formTitle: 'Watch Now',
    formSubtitle: 'On-Demand Webinar',
    submitText: 'WATCH NOW',
    subtitle: 'Best practices for securing containers, Kubernetes, and serverless workloads.',
    bodyParagraphs: [
      'Cloud-native architectures introduce new security challenges that traditional tools are not designed to address. In this on-demand webinar, our cloud security experts cover the key risks and controls for securing containerized workloads, Kubernetes clusters, and serverless functions.',
    ],
    insights: [
      { bold: 'Container Security Fundamentals.', text: 'Scan container images, enforce runtime policies, and limit container privileges to reduce attack surface.' },
      { bold: 'Kubernetes Hardening.', text: 'Apply CIS Kubernetes benchmarks, implement RBAC, and monitor cluster activity for suspicious behavior.' },
      { bold: 'Serverless Security.', text: 'Understand the unique threat model for serverless functions and apply appropriate input validation and access controls.' },
      { bold: 'Supply Chain Security.', text: 'Secure your container registry and image build pipeline to prevent supply chain attacks.' },
    ],
    closing: 'Watch the on-demand webinar to get expert guidance on securing your cloud-native environment.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'managed-detection-response-service-brief': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/09/Getting_Started_eBook.pdf',
    title: 'Managed Detection & Response Service Brief',
    category: 'Managed Security',
    resourceType: 'Datasheet',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/12/iStock-611745966_2000x675.jpg',
    formTitle: 'Download Service Brief',
    submitText: 'DOWNLOAD NOW',
    subtitle: '24/7 threat detection, investigation, and response — without the overhead.',
    bodyParagraphs: [
      "GuidePoint's Managed Detection & Response (MDR) service provides around-the-clock monitoring, threat hunting, and incident response by a team of experienced security analysts. We integrate with your existing tools to deliver faster detection and more effective response.",
    ],
    insights: [
      { bold: '24/7 Security Operations.', text: 'Continuous monitoring by expert analysts who detect and respond to threats before they become breaches.' },
      { bold: 'Threat Hunting.', text: 'Proactive hunting for hidden threats across your environment using advanced analytics and threat intelligence.' },
      { bold: 'Rapid Incident Response.', text: 'Our team acts immediately when threats are confirmed, containing and remediating attacks faster than in-house teams.' },
      { bold: 'Technology-Agnostic.', text: 'We integrate with your existing SIEM, EDR, and security tools — no rip-and-replace required.' },
    ],
    closing: 'Download the service brief to learn how MDR can strengthen your security posture.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'genuine-parts-company-cloud-security': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Wyndham_Hotels_Case_Study.pdf',
    title: 'How Genuine Parts Company Secured Their Cloud',
    category: 'Cloud Security',
    resourceType: 'Customer Success',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/REPORT_image_NAV.jpg',
    formTitle: 'Read the Case Study',
    submitText: 'READ NOW',
    subtitle: 'Discover how Genuine Parts Company transformed their cloud security posture.',
    bodyParagraphs: [
      'Genuine Parts Company faced growing complexity across their multi-cloud environment, with limited visibility into misconfigurations and cloud-native threats. They partnered with GuidePoint Security to establish a cloud security program that scales with their business.',
    ],
    insightsHeading: 'Key outcomes:',
    insights: [
      { bold: 'Challenge.', text: 'Limited visibility into cloud configurations and growing exposure across AWS and Azure environments.' },
      { bold: 'Solution.', text: 'GuidePoint deployed a cloud security posture management solution and provided expert advisory services.' },
      { bold: 'Results.', text: 'Reduced critical misconfiguration alerts by 70% within 90 days and established continuous compliance monitoring.' },
    ],
    closing: 'Read the full case study to see how GuidePoint helped Genuine Parts Company build a scalable cloud security program.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },

  'k-hovnanian-homes-security-program': {
    pdfUrl: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/09/Getting_Started_eBook.pdf',
    title: 'K. Hovnanian Homes: Building a Security Program',
    category: 'Managed Security',
    resourceType: 'Customer Success',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/12/iStock-611745966_2000x675.jpg',
    formTitle: 'Read the Case Study',
    submitText: 'READ NOW',
    subtitle: 'How K. Hovnanian Homes built a mature security program with GuidePoint.',
    bodyParagraphs: [
      'As one of the largest homebuilders in the US, K. Hovnanian Homes needed to build a comprehensive security program that protected sensitive customer and financial data while enabling rapid business growth.',
    ],
    insightsHeading: 'Key outcomes:',
    insights: [
      { bold: 'Challenge.', text: 'No formalized security program and growing compliance requirements across a distributed organization.' },
      { bold: 'Solution.', text: 'GuidePoint provided vCISO services, security architecture guidance, and managed detection and response.' },
      { bold: 'Results.', text: 'Achieved SOC 2 compliance, implemented 24/7 MDR coverage, and reduced security incidents by 60%.' },
    ],
    closing: 'Read the full case study to learn how K. Hovnanian Homes achieved security maturity with GuidePoint as their trusted advisor.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },
};

export default resourceDetails;
