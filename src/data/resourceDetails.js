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
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/09/GRIT_HeaderImage.png',
    formTitle: 'Download Now',
    submitText: 'DOWNLOAD NOW',
    subtitle:
      'A strategic framework for building AI governance that drives innovation while managing risk.',
    body: 'As organizations rapidly adopt AI technologies, establishing robust governance frameworks is no longer optional \u2014 it\u2019s a competitive advantage. This whitepaper covers:',
    insights: [
      {
        bold: 'AI governance is a business enabler, not a blocker.',
        text: 'Organizations with mature AI governance frameworks deploy AI solutions faster and with greater stakeholder confidence.',
      },
      {
        bold: 'Regulatory landscapes are evolving rapidly.',
        text: 'From the EU AI Act to emerging U.S. state-level regulations, compliance requirements are expanding across jurisdictions.',
      },
      {
        bold: 'Risk management must be embedded in the AI lifecycle.',
        text: 'Effective governance integrates risk assessment at every stage \u2014 from data collection through model deployment and monitoring.',
      },
      {
        bold: 'Transparency and accountability build trust.',
        text: 'Clear documentation, explainability standards, and defined ownership structures are essential for responsible AI adoption.',
      },
    ],
    closing:
      'Download the whitepaper for actionable guidance on building an AI governance program that positions your organization for competitive advantage in the age of artificial intelligence.',
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
    resourceIcon: '/images/resources/datasheet-icon.png',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/09/GRIT_HeaderImage.png',
    formTitle: 'Download Now',
    submitText: 'DOWNLOAD NOW',
    subtitle:
      'Benchmarking IAM maturity across industries to identify gaps and accelerate security posture improvement.',
    body: 'Identity and access management remains one of the most critical \u2014 and challenging \u2014 areas of cybersecurity. Key findings from the report include:',
    insights: [
      {
        bold: 'Most organizations are still in early IAM maturity stages.',
        text: 'Over 60% of surveyed organizations rated their IAM programs at level 2 or below on a 5-point maturity scale.',
      },
      {
        bold: 'Privileged access management is the top priority.',
        text: 'PAM was identified as the highest-priority IAM initiative for 2025, driven by ransomware threats exploiting privileged credentials.',
      },
      {
        bold: 'Identity governance gaps persist.',
        text: 'Only 35% of organizations have fully automated identity lifecycle management, leaving significant exposure to orphaned accounts.',
      },
      {
        bold: 'Zero Trust adoption is accelerating.',
        text: 'Organizations implementing Zero Trust principles report 40% fewer identity-related security incidents compared to traditional perimeter-based approaches.',
      },
    ],
    closing:
      'Download the full report for detailed benchmarks, maturity models, and actionable recommendations to strengthen your IAM program in 2025 and beyond.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/company/guidepointsec',
      twitter: 'https://twitter.com/GuidePointSec',
      facebook: 'https://www.facebook.com/GuidePointSec',
    },
  },
};

export default resourceDetails;
