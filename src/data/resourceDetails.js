// ===========================================
// Resource Detail Pages — downloadable assets
// Each keyed by slug for /resources/:slug routing
// ===========================================

const resourceDetails = {
  'grit-2026-ransomware-cyber-threat-report': {
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
};

export default resourceDetails;
