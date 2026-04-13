// Service Category pages — one entry per footer service link
// Each category contains its own sections: hero, stats, practice, outcomes, services tabs

// Shared placeholder circle images (reused across categories)
const C1 = 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/Gradient_Circle_82.6_percent-1.png';
const C2 = 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/Gradient_Circle_78_percent-1.png';
const C3 = 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/Gradient_Circle_60_percent.png';

const serviceCategories = {

  // ─────────────────────────────────────────────
  // Artificial Intelligence
  // ─────────────────────────────────────────────
 // extracted & fixed from your file :contentReference[oaicite:0]{index=0}

'artificial-intelligence': {
  slug: 'artificial-intelligence',

  iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/AI_Icon_Light_Blue-rar5ayxj5afgiytc1a5ulf2xedcuhzzp30srdmf5qo.png',

  heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/Website_Refresh_Services_MAIN_Page_AI.png',

  heroTitle: 'Safely Adopt and Defend Against AI',

  // ✅ FIXED TEXT
  heroSubtitle: 'GuidePoint AI Security Services help users confidently and securely use AI to fuel organizational success, speed threat detection and response and defend against AI-based attacks.',

  heroCta: 'Download Datasheet',

  // ✅ FIXED LINK
  heroCtaLink: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/AI_at_GPS_DS.pdf',

  statsLabel: 'Can You Keep Pace?',

  statsIntro: 'AI can accelerate business innovation, quickly find and stop threats and defend against AI-based attacks. Learn to safely use AI to accelerate organizational success.',

  stats: [
    {
      value: '82.6%',
      label: 'of phishing emails use AI technology',
      sourceName: 'TechAdvisors',
      sourceContext: 'AI Cyber Attack Statistics 2025',
      sourceLink: 'https://tech-adv.com/blog/ai-cyber-attack-statistics/',
      circleImage: C1,
    },
    {
      value: '78%',
      label: 'believe the benefits of generative AI outweigh the risks',
      sourceName: 'National University',
      sourceContext: 'AI Cyber Statistics & Trends 2025',
      sourceLink: 'https://www.nu.edu/blog/ai-statistics-trends/',
      circleImage: C2,
    },
    {
      value: '60%',
      label: 'faster threat detection using AI-driven security platforms',
      sourceName: 'Takepoint Research',
      sourceContext: 'AI in industrial cybersecurity',
      sourceLink: 'https://industrialcyber.co/ai/takepoint-research-80-of-cybersecurity-professionals-favor-ai-benefits-over-evolving-risks/',
      circleImage: C3,
    }
  ],

  practiceLabel: 'ARTIFICIAL INTELLIGENCE SECURITY PRACTICE',

  practiceTitle: 'Smarter Use, Defense, Adoption and Governance of Artificial Intelligence (AI)',

  practiceTitleHighlight: 'Smarter',

  practiceDescription: [
    'GuidePoint Security helps organizations securely use AI to accelerate business, secure what matters and prepare for what’s next.',
    'Our experts guide and help organizations to more effectively use AI and improve their overall security posture, quickly detect AI-based security threats, better protect data and identities and ensure regulatory compliance during AI adoption.',
    'GuidePoint’s comprehensive cybersecurity technical and advisory services help organizations harness the full potential of AI to drive business innovation, stop advanced threats, improve efficiency and productivity and make more informed decisions.'
  ],

  commitmentTitle: 'Our Artificial Intelligence (AI) Security Commitment to You',

  commitmentSubtitle: 'We Ensure AI Remains A Strategic Enabler—Not A Roadblock by:',

  commitmentItems: [
    {
      text: 'Evaluating, deploying and optimizing AI-based tools and solutions to accelerate business and/or speed threat hunting, detection, response and remediation.',
      children: []
    },
    {
      text: 'Developing AI Governance programs, solutions and initiatives',
      children: [
        { text: 'Track and inventory the AI tools being used, by whom and with what data' },
        { text: 'Integrate policy and guardrail enforcement seamlessly as users use AI to augment their capabilities' }
      ]
    },
    {
      text: 'Leveraging AI to strengthen security posture and better secure data, users and IT:',
      children: [
        { bold: 'Endpoints:', text: 'prevent malware on laptops, desktop, mobile' },
        { bold: 'Network:', text: 'monitor traffic for anomalies, intrusions and DDoS attacks' },
        { bold: 'Cloud:', text: 'analyze data across CSP platforms for a faster threat hunting, detection and response via a unified view' },
        { bold: 'Email:', text: 'More effectively filter spam and detect phishing attempts and malicious attachments' },
        { bold: 'User and Device Identities:', text: 'analyze user behavior patterns to ID suspicious behavior and prevent unauthorized access to data' },
        { bold: 'Application Security:', text: 'enhance traditional application security assessments with AI agentic workflows that identify vulnerabilities, flaws and weaknesses faster' }
      ]
    }
  ],

  outcomesLabel: 'ARTIFICIAL INTELLIGENCE SECURITY OUTCOMES',

  outcomesTitle: 'Reduce Risk, Accelerate Innovation with AI',

  outcomesTitleHighlight: 'Reduce',

  outcomesSubtitle: 'Safely harness the power and potential of AI. GuidePoint Security helps organizations build secure AI strategies and safely adopt and optimize AI solutions to protect what matters.',

  outcomes: [
    {
      title: 'Accelerate Innovation',
      description: 'Speed innovation and time to market by securely and confidently adopting AI-based solutions.'
    },
    {
      title: 'Increase Productivity and Efficiency',
      description: 'Increase efficiency, minimize human error and automate tasks with AI for greater productivity.'
    },
    {
      title: 'Improve Decision Making',
      description: 'Make faster, more accurate decisions by using AI to better understand data, insights and communications and find and stop threats in real time.'
    },
    {
      title: "Build for What's Next",
      description: 'Improve security operations today and build for tomorrow with proven AI-enabled solutions that speed detection and response to evolving AI-based threats.'
    }
  ],

  servicesLabel: 'ARTIFICIAL INTELLIGENCE SECURITY SERVICES',

  servicesTitle: 'Results-oriented Artificial Intelligence Security',

  servicesTitleHighlight: 'Results-oriented',

  servicesSubtitle: 'Explore Our AI Security Services:',

  strategicServices: [
    {
      title: 'AI Governance',
      description: 'Proactively identify risks, ensure compliance with evolving regulations and establish governance frameworks for responsible and scalable AI adoption.'
    },
    {
      title: 'Incident Response Investigation',
      description: 'Support for all types of incident response, which may include AI solution use or access or identified attacker AI use.'
    },
    {
      title: 'AI Threat Modeling',
      description: 'Identify, analyze and mitigate potential threats to systems and applications up to 60% faster.'
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Evaluate preparedness for adopting AI against the NIST AI RMF framework and get actionable remediation strategies.'
    }
  ],

  tacticalServices: [
    {
      title: 'AI Application Architecture Review',
      description: 'A comprehensive AI-enabled application assessment to provide security assurance for intelligent applications within an operational environment.'
    },
    {
      title: 'Secure Code Review',
      description: 'Examine AI-enabled application source code, looking for AI and traditional code vulnerabilities and implementation flaws to ensure code-level security assurance pre-deployment.'
    },
    {
      title: 'Application Architecture Review',
      description: 'Examine the structural foundation of AI-enabled applications, evaluating design, infrastructure configurations, data flows and trust boundaries to uncover architectural weaknesses.'
    }
  ],

  testimonial: {
    quote: 'GuidePoint Security has been a great partner. They\'ve taken the time to understand Intelsat and our customers and that\'s helped drive value through the security program. They\'ve become part of the Intelsat family.',
    author: 'Vinit Duggal',
    role: 'Chief Security & Trust Officer',
    company: 'Intelsat',
    companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/intelsat-logo.png',
    personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Vinit_Duggal_Headshot-150x150.png',
  },
},

  // ─────────────────────────────────────────────
  // Application Security
  // ─────────────────────────────────────────────
  'application-security': {
    slug: 'application-security',
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/app-sec-icon-light-blue-qnao7t706zq6z2r91fn1ettvnmo1pve4o4j9rg9sk0.png',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Application_Security-1.png',
    heroTitle: 'Application Security Services',
    heroSubtitle: 'Ensure All Software Releases Are Secure',
    heroCta: 'Secure Your Applications',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/Application_Security_Services.pdf',
    statsLabel: 'APPLICATION SECURITY CHALLENGES',
    statsTitle: 'How Secure Is Your Software?',
    statsIntro: 'With Modern Software Development Needing To Move At The Speed Of Business, It\'s No Surprise That Organizations Are Having Difficulty Scaling Security To Meet This Demand.',
    stats: [
      { value: '50%', label: 'of developers don\'t have time for security in their SDLC', circleImage: C1, sourceName: 'ESG Survey Report: Modern Application Development Security', sourceContext: '2023', sourceLink: 'https://omdia.tech.informa.com/esg-welcome' },
      { value: '26%', label: 'of all breaches involve web application attacks', circleImage: C2, sourceName: 'Verizon 2023 Data Breach Investigations Report', sourceContext: '2023', sourceLink: 'https://www.verizon.com/business/resources/reports/dbir/' },
      { value: '70%', label: 'of organizations with SDLCs are missing critical steps', circleImage: C3, sourceName: 'Enterprise Management Associates Secure Coding Practices', sourceContext: '2023', sourceLink: 'https://www.enterprisemanagement.com' },
    ],
    practiceLabel: 'APPLICATION SECURITY PRACTICE',
    practiceTitle: 'Improve the Maturity of your AppSec Program',
    practiceTitleHighlight: 'Improve',
    practiceDescription: [
      'Our application security practice offers years of relevant, real-world experience securing the application layer, from mainframe and IoT applications to mobile apps and web services.',
      'We tailor solutions to the unique challenges of your specific environment with a focus on actionable recommendations that immediately improve your security posture.',
      'This customized approach allows us to help you reduce the most risk at the lowest cost of remediation for all of the legacy and modern software across your entire application portfolio.',
    ],
    practiceVideo: {
      thumbnail: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/byran-orme-video-qnao2l7fftpxv5r9jr35y8cmkcl01oj6a4mbkimo4u.png',
      link: 'https://www.guidepointsecurity.com/services/application-security/',
    },
    commitmentLabel: 'OUR APPLICATION SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise the AppSec bar by:',
    commitmentItems: [
      { text: 'Focusing testing efforts in order to maximize the coverage of an application and ensure that the most security sensitive functions and features are assessed.', children: [
        { text: 'Testing' },
      ]},
      { text: 'Providing you with actionable insights into how an adversary can currently leverage or exploit real issues or vulnerabilities in your business-critical applications—allowing you to not only reduce risk but also the cost of remediation.', children: [] },
      { text: 'Assessing the gaps in your current development lifecycle and provide implementation recommendations meant to strengthen overall efforts and reduce risk.', children: [] },
      { text: 'Moving the needle with your Application Security program—whether it\'s a gap analysis, program development, AppSec artifact creation (secure coding checklists, standards, etc.), onboarding, socialization or a unique need that doesn\'t fit into a fixed offering.', children: [] },
    ],
    outcomesLabel: 'APPLICATION SECURITY OUTCOMES',
    outcomesTitle: 'Reduce Software Security Risk',
    outcomesTitleHighlight: 'Reduce',
    outcomesSubtitle: 'Our AppSec services are tailored for your unique use cases to reduce risk, speed application delivery and support the maturation of your application security program.',
    outcomes: [
      { title: 'Identify Vulnerabilities', description: 'Assess and uncover security weaknesses in your application security architecture.' },
      { title: 'Remediate Security Issues', description: 'Gain actionable remediation guidance to address AppSec risks.' },
      { title: 'Validate Security Controls', description: 'Ensure existing security controls can mitigate risk and identify where to add other controls.' },
      { title: 'Ensure AppSec Program Health', description: 'Optimize operational overhead by integrating and automating security tooling.' },
    ],
    servicesLabel: 'APPLICATION SECURITY SERVICES',
    servicesTitle: 'Results-Oriented Application Security',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore Our Application Security Services:',
    strategicTabDesc: 'Our team helps assess security gaps in your software development lifecycle, provides implementation guidance and recommends best practices to improve the maturity of your AppSec program.',
    tacticalTabDesc: 'Our tactical application security services provide hands-on testing and assessments to identify and remediate vulnerabilities across your entire application portfolio.',
    managedTabDesc: 'Our managed application security services provide continuous protection and ongoing security monitoring across your application environment.',
    strategicServices: [
      { icon: 'bi-arrow-repeat', title: 'Application Security Architecture Review', description: 'Identify and assess security weaknesses due to architectural flaws in an application, with specific mitigation or remediation advice.', slug: null },
      { icon: 'bi-arrow-repeat', title: 'Application Security Program Assessment', description: 'Identify and manage application risk, balance business objectives and innovation and measure governance and compliance.', slug: 'application-security-as-a-service' },
      { icon: 'bi-exclamation-triangle', title: 'Application Threat Modeling', description: 'Evaluate applications against industry best practices to ensure adversaries can\'t take advantage of threats you didn\'t consider.', slug: 'application-threat-modeling' },
      { icon: 'bi-code-slash', title: 'Secure Development Training', description: 'Design and code secure web solutions by exploring defense-based code samples and third-party security libraries.', slug: 'secure-development-training' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    tacticalServices: [
      { icon: 'bi-shield-check', title: 'Application Security Assessments', description: 'Understand your attack surface through comprehensive penetration testing and vulnerability assessment.', slug: 'application-security-assessment' },
      { icon: 'bi-phone', title: 'Mobile Application Security Assessment', description: 'Provide an accurate understanding of mobile risk across iOS and Android applications aligned to OWASP MASVS.', slug: 'mobile-application-security-assessment' },
      { icon: 'bi-file-code', title: 'Source Code Review', description: 'Evaluate applications for critical security issues at the code level to ensure security assurance before deployment.', slug: 'source-code-review' },
      { icon: 'bi-robot', title: 'AI-Augmented Application Security', description: 'Enhance application security assessments by incorporating AI with expert oversight to identify vulnerabilities faster.', slug: 'ai-augmented-application-security' },
      { icon: 'bi-puzzle', title: 'Fundamentals of Reconnaissance & Attack Surface Analysis', description: 'Build attacker awareness and sharpen defensive skills through structured reconnaissance and attack surface training.', slug: 'fundamentals-of-reconnaissance-and-attack-surface-analysis' },
    ],
    managedServices: [
      { icon: 'bi-tools', title: 'AppSec as a Service', description: 'AppSec tooling expertise to continuously identify vulnerabilities and provide remediation recommendations across your SDLC.', slug: 'application-security-as-a-service' },
    ],
    testimonial: {
      quote: 'GuidePoint Security has been a great partner. They\'ve taken the time to understand Intelsat and our customers and that\'s helped drive value through the security program. They\'ve become part of the Intelsat family.',
      author: 'Vinit Duggal',
      role: 'Chief Security & Trust Officer',
      company: 'Intelsat',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/intelsat-logo.png',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Vinit_Duggal_Headshot-150x150.png',
    },
  },

  // ─────────────────────────────────────────────
  // Cloud Security
  // ─────────────────────────────────────────────
  'cloud-security': {
    slug: 'cloud-security',
    icon: 'bi-cloud',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Cloud_Security.png',
    heroTitle: 'Cloud Security Services',
    heroSubtitle: 'Secure Your IT Workload In The Cloud',
    heroCta: 'Safeguard Your Cloud',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/Cloud_Security_Services.pdf',
    statsLabel: 'CLOUD SECURITY CHALLENGES',
    statsTitle: 'How Are You Securing Your Cloud Environment?',
    statsIntro: 'With IT workloads moving to the cloud faster than ever, your cybersecurity practices must be ready to address this shift.',
    stats: [
      { value: '82%', label: 'of breaches involved data stored in the cloud', circleImage: C1, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach', sourceLink: 'https://www.ibm.com/security/data-breach' },
      { value: '39%', label: 'of all breaches spanned multiple environments', circleImage: C2, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach', sourceLink: 'https://www.ibm.com/security/data-breach' },
      { value: '258 days', label: 'to identify & contain a breach from cloud misconfiguration', circleImage: C3, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach', sourceLink: 'https://www.ibm.com/security/data-breach' },
    ],
    practiceLabel: 'CLOUD SECURITY PRACTICE',
    practiceTitle: 'Improve the Maturity of your Cloud Security Program',
    practiceTitleHighlight: 'Improve',
    practiceDescription: [
      'Our cloud security practice has a comprehensive set of services that helps your organization, whether you\'re moving more IT workloads to the cloud or already have them in the cloud.',
      'Our team has the right expertise to help you adopt cloud security controls across AWS, Azure, GCP and multi-cloud environments.',
      'We can help your organization operationalize security controls and ensure they scale with the business as more workloads are moved into the cloud.',
    ],
    practiceVideo: {
      thumbnail: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/byran-orme-video-qnao2l7fftpxv5r9jr35y8cmkcl01oj6a4mbkimo4u.png',
      link: 'https://www.guidepointsecurity.com/services/cloud-security/',
    },
    commitmentLabel: 'OUR CLOUD SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise the Cloud Security bar by:',
    commitmentItems: [
      { text: 'Designing and implementing a secure cloud infrastructure that utilizes our unique cloud controls framework, which reviews over 150+ risk and security controls based on the CSA, CIS and our own operational experiences.', children: [] },
      { text: 'Delivering a scored report that evaluates the maturity level of your organizational posture for the cloud.', children: [] },
      { text: 'Providing a third-party analysis of the current state of your cloud infrastructure by applying targeted controls and best practices to your cloud service provider or SaaS platform.', children: [] },
      { text: 'Ensuring you have the right cloud security operations and engineering services to help you execute your cloud security program.', children: [] },
    ],
    outcomesLabel: 'CLOUD SECURITY OUTCOMES',
    outcomesTitle: 'Enable A Modernized And Secure Environment',
    outcomesTitleHighlight: 'Enable',
    outcomesSubtitle: 'Our Cloud Security services are tailored for your unique use cases to help you move more workloads securely into the cloud.',
    outcomes: [
      { title: 'Know Your Cloud Maturity', description: 'Understand your cloud security state & gain a roadmap for enhancing capabilities.' },
      { title: 'Remediate Issues', description: 'Identify vulnerabilities & remediate gaps in your cloud infrastructure & security compliance.' },
      { title: 'Ensure Strong Controls', description: 'Oversee the control & direction of your cloud services as well as the processes & systems behind it.' },
      { title: 'Security for Any Cloud', description: 'Whether AWS, Azure, GCP, Oracle Fusion or multi-cloud, we can help you secure your cloud.' },
    ],
    servicesLabel: 'CLOUD SECURITY SERVICES',
    servicesTitle: 'Results-Oriented Cloud Security Offerings',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our cloud security solutions:',
    strategicTabDesc: 'Our cloud security services provide a "security first" strategy, covering security operations, compliance and architecture to help your organization gain control of the cloud.',
    strategicServices: [
      { icon: 'bi-search', title: 'Cloud Security Assessments', description: 'Designed to address the stage of your cloud security transformation, including cloud readiness, maturity & a health check.', slug: 'cloud-security-assessments' },
      { icon: 'bi-map', title: 'Cloud Security Strategy', description: 'Leverage our unique cloud security framework that covers more than 150 risk & security controls to ensure a secure cloud.', slug: 'cloud-security-strategy-architecture-services' },
      { icon: 'bi-gear', title: 'Cloud Security Engineering', description: 'Our engineers are highly certified across various platforms & solutions – ready to help you execute on your cloud security program.', slug: 'cloud-security-engineering-services' },
      { icon: 'bi-shield-check', title: 'Cloud Governance Solutions', description: 'Leverage a modern way of risk assessment & analysis so you can gain the knowledge to understand cloud computing risks.', slug: 'cloud-governance-solutions' },
      { icon: 'bi-cloud', title: 'Cloud Container Security', description: 'Our engineers can help plan your cloud & container roadmap as well as implement in a production environment.', slug: 'container-security' },
      { icon: 'bi-arrow-repeat', title: 'Digital Transformation', description: 'Gain the necessary cloud security guidance & implementation support to help modernize your environment.', slug: 'digital-transformation' },
      { icon: 'bi-check2-circle', title: 'Zero Trust Workshops', description: 'We help facilitate your organization\'s journey towards zero trust adoption through iterative, manageable steps.', slug: 'zero-trust-workshops' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    tacticalServices: [
      { icon: 'bi-cloud-arrow-up', title: 'AWS Security', description: 'Advanced AWS Consulting Partner with cloud security services to help mature your security transformation.', slug: 'aws-cloud-security-assessment-services' },
      { icon: 'bi-microsoft', title: 'Microsoft Cloud Security', description: 'Microsoft Gold Security Partner & expertise across Compliance, Identity, Security Operations and Visibility.', slug: 'microsoft-security-services' },
      { icon: 'bi-google', title: 'Google Cloud Security', description: 'Google-certified cloud experts can help you understand & implement a strong security program.', slug: 'google-cloud-security' },
      { icon: 'bi-diagram-3', title: 'Multi-Cloud Security', description: 'Our experts can help you ensure a comprehensive cloud security strategy that spans across all platforms.', slug: 'multi-cloud-security' },
      { icon: 'bi-server', title: 'Oracle Cloud Security', description: 'Ensure a strong security posture across your Oracle SaaS solution or custom applications built on the Oracle Fusion platform.', slug: 'oracle-cloud-security' },
      { icon: 'bi-cloud-check', title: 'SaaS Security', description: 'Leverage our robust security controls framework based on tenant, vendor & cloud service providers\' shared responsibility model.', slug: 'saas-security' },
    ],
    testimonial: {
      quote: 'GuidePoint Security helps us identify our problems and bring solutions to the problems that are in the best interest for GPC. They differ substantially because most vendors only care about selling something. GuidePoint is taking that long-term personal relationship and partnership approach which we value greatly.',
      author: 'Damian Apone',
      role: 'Global Security Program Director',
      company: 'Genuine Parts Company',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/GPC_Logo.png',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Damian_Apone_Headshot-150x150.png',
    },
  },

  // ─────────────────────────────────────────────
  // Data Security & Privacy
  // ─────────────────────────────────────────────
  'data-security': {
    slug: 'data-security',
    icon: 'bi-database',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Data_Security_and_Privacy.png',
    heroTitle: 'Data Security Solutions',
    heroSubtitle: 'Improve Data Protection Without Impeding Business',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'DATA SECURITY CHALLENGES',
    statsTitle: 'How Are You Protecting Your Crown Jewels?',
    statsIntro: 'The most common reason for immature data security in an organization is its overall culture and evolution to the current state of operations. Key factors include:',
    stats: [
      { value: 'Legacy Systems', label: 'and processes incorporated with new technology', circleImage: C1, sourceName: '', sourceContext: '', sourceLink: '' },
      { value: 'Cloud Adoption', label: 'and how data may be managed differently', circleImage: C2, sourceName: '', sourceContext: '', sourceLink: '' },
      { value: 'Mobile Devices', label: 'pushing data further away from corporate boundaries', circleImage: C3, sourceName: '', sourceContext: '', sourceLink: '' },
    ],
    practiceLabel: 'DATA SECURITY PRACTICE',
    practiceTitle: 'Improve the Maturity of your Data Security Program',
    practiceTitleHighlight: 'Improve',
    practiceDescription: [
      'GuidePoint Security helps organizations improve their data security posture, whether you\'re strengthening controls around existing data assets or building a program from the ground up.',
      'Our team has the right expertise to help you adopt data security controls that protect sensitive business and customer data while ensuring regulatory compliance.',
      'We can help your organization operationalize data security controls and ensure they scale with the business as your data landscape evolves.',
    ],
    commitmentLabel: 'OUR DATA SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you improve your Data Security by:',
    commitmentItems: [
      { text: 'Ensuring compliance by assisting with your data security strategy, your initiatives to strengthen data protection and valuation, compliance and standards-based assessments (e.g., CCPA, GDPR, HIPAA, NIST, etc.) and privacy impact assessments and internal cybersecurity auditing.', children: [] },
      { text: 'Allowing your security teams to more effectively reduce risk, increase compliance with the regulations to which they adhere and protect against data breaches perpetrated by bad actors.', children: [] },
      { text: 'Assessing and improving your data protection in a way that suits your unique environment and requirements through data security solutions that consider limitations to personal data collection, the purposes behind the collection of data and its disclosure, personal data security and data protection principles.', children: [] },
    ],
    outcomesLabel: 'DATA SECURITY OUTCOMES',
    outcomesTitle: 'Minimize The Risk Of Sensitive Business And Customer Data Being Stolen Or Leaked',
    outcomesTitleHighlight: 'Minimize',
    outcomesSubtitle: 'Our Data Security solutions are tailored for your unique use cases to ensure key data is safeguarded and that regulatory or industry guidelines are being met.',
    outcomes: [
      {
        title: 'Ensure Data Security Compliance',
        description: 'Secure your customers\' digital trust & satisfy regulatory requirements.',
        itemsIntro: 'Our data security experts help you:',
        items: [
          'Understand your current business operations, technical requirements, & regulatory mandates',
          'Form a foundation for your information security environment',
          'Ensure a continually updated enterprise security architecture',
        ],
      },
      {
        title: 'Safeguard Sensitive Data',
        description: 'Secure corporate & customer data, protect against attack & stay ahead of competitors.',
        itemsIntro: 'Our experienced professionals will help you:',
        items: [
          'Adopt a data-centric approach that shifts the focus from "system" to "data"',
          'Design & deliver a best-fit enterprise security architecture',
          'Gain full visibility & control of your data across on-premise & cloud-based architecture',
        ],
      },
    ],
    servicesLabel: 'DATA SECURITY SERVICES',
    servicesTitle: 'Results-Oriented Data Security',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our data security solutions:',
    strategicTabDesc: 'Our solutions analyze the impact of your people, process and technology with regards to the protection of sensitive data.',
    strategicServices: [
      { icon: 'bi-database', title: 'Data Security Assessment', description: 'Understand your current state, examining processes across stakeholders to identify potential security gaps & a roadmap for enhancements.', slug: 'data-security-assessment' },
      { icon: 'bi-file-earmark-text', title: 'Policy & Architecture Review', description: 'We conduct a comprehensive review of your data security policies, architecture & stakeholders, & provide an assessment for configuration & feature use.', slug: 'data-security-policy-review' },
      { icon: 'bi-check2-square', title: 'Data Security Standards Review', description: 'Understand if available technical controls are aligned with current policy & gain recommendations for improvements across the organization.', slug: 'data-security-standards-review' },
      { icon: 'bi-shield-check', title: 'Data Governance Review', description: 'Ensure adherence of corporate/regulatory policies via software & implement standards of control across tools and users.', slug: 'data-governance-review' },
      { icon: 'bi-slash-circle', title: 'Data Loss Prevention', description: 'Keep your sensitive data secure & prevent unauthorized use & transmission of confidential data.', slug: 'data-loss-prevention' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Email Security
  // ─────────────────────────────────────────────
  'email-security': {
    slug: 'email-security',
    icon: 'bi-envelope',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Page_Email_Security.png',
    heroTitle: 'Email Security Services',
    heroSubtitle: 'Protect Email Content & Accounts from Unauthorized Access',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'EMAIL SECURITY CHALLENGES',
    statsTitle: 'How Are You Protecting Email From Being Exploited?',
    statsIntro: 'The majority of attacks start with email because it targets the weakest link in your security chain: People.',
    stats: [
      { value: '293 days', label: 'to identify & contain a data breach by phishing', circleImage: C1, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach Report', sourceLink: 'https://www.ibm.com/security/data-breach' },
      { value: '98%', label: 'of human-targeted attacks are delivered through email', circleImage: C2, sourceName: '2023 Verizon', sourceContext: 'Data Breach and Investigations Report', sourceLink: 'https://www.verizon.com/business/resources/reports/dbir/' },
      { value: '15%', label: 'phishing is the most common initial attack vector', circleImage: C3, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach Report', sourceLink: 'https://www.ibm.com/security/data-breach' },
    ],
    commitmentLabel: 'OUR EMAIL SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you improve your Email Security by:',
    commitmentItems: [
      { text: 'Ensuring the protection of email content and accounts from unauthorized access.', children: [] },
      { text: 'Identifying areas of weakness against attacks such as phishing and providing meaningful remediation recommendations.', children: [] },
      { text: 'Recommending the email security architecture and best-fit solutions to protect your organization—from inbound to outbound protection.', children: [] },
    ],
    outcomesLabel: 'EMAIL SECURITY OUTCOMES',
    outcomesTitle: 'Protect Your Email From Being Exploited by Phishing and Spear-phishing Campaigns',
    outcomesTitleHighlight: 'Protect',
    outcomesSubtitle: 'Our Email Security services are tailored to help you better defend against these types of social engineering attacks, identify the right tools and to set up your email environment in a secure manner.',
    outcomes: [
      { title: 'Secure Your Weakest Link', description: 'Train your users to reduce the risk of being socially engineered.' },
      { title: 'Ensure Email Protection', description: 'Minimize the risk of email content and accounts from unauthorized access.' },
    ],
    servicesLabel: 'EMAIL SECURITY SERVICES',
    servicesTitle: 'Results-Oriented Email Security Services',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our email security services:',
    strategicTabDesc: 'Our experts understand the types of attacks that are carried out through email, as well as the different email security technologies and recommendations for setting up your environment in a secure manner.',
    strategicServices: [
      { icon: 'bi-envelope-exclamation', title: 'Phishing Services', description: 'Our social engineers can develop customized phishing campaigns to ensure meaningful results with clear remediation steps.', slug: 'phishing-services' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Endpoint Security
  // ─────────────────────────────────────────────
  'endpoint-security': {
    slug: 'endpoint-security',
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/Endpoint_Security-qzc0by0eqjg5hrf2cesoshc7exdjfdvhqi8mg283bk.png',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Endpoint_Security.png',
    heroTitle: 'Protect Your Endpoints and Recover Faster From Ransomware',
    heroSubtitle: 'Gain Visibility and Control of Your Endpoints',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'ENDPOINT SECURITY CHALLENGES',
    statsTitle: 'How Are You Protecting Your Endpoints?',
    statsIntro: 'Endpoints are the primary attack vector for most breaches. Attackers rely on organizations having inconsistent visibility and control across their endpoint fleet.',
    stats: [
      { value: '68%', label: 'of data breaches involved a human element, which often starts at the endpoint', circleImage: C1, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach Report', sourceLink: '' },
      { value: '24%', label: 'of breaches were caused by negligent employees or contractors interacting with endpoint devices', circleImage: C2, sourceName: 'Ponemon Institute', sourceContext: '2023 Cost of a Data Breach Report', sourceLink: '' },
    ],
    commitmentLabel: 'OUR ENDPOINT SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you improve your Endpoint Security by:',
    commitmentItems: [
      { text: 'Facilitating tool evaluations to ensure you have the best-fit endpoint security solution for your environment, budget, and risk profile.', children: [] },
      { text: 'Architecting and implementing endpoint security solutions that provide the visibility and control needed to detect and respond to threats.', children: [] },
      { text: 'Extending your security staff through Managed Detection and Response (MDR) partnerships to ensure 24x7 monitoring and response capabilities.', children: [] },
    ],
    outcomesLabel: 'ENDPOINT SECURITY OUTCOMES',
    outcomesTitle: 'Gain the Visibility and Control You Need to Protect Your Endpoints',
    outcomesTitleHighlight: 'Gain',
    outcomesSubtitle: 'Our Endpoint Security services are tailored to help you select the right tools, configure them correctly, and architect a program that scales with your organization.',
    outcomes: [
      {
        title: 'Evaluate & Select the Best-Fit Solution',
        description: 'Identify and assess the endpoint security tools that are right for your organization, ensuring you invest in capabilities aligned to your risk profile and environment.',
      },
      {
        title: 'Ensure the Proper Configuration',
        description: 'Proper configuration of endpoint security tools is critical. Our experts ensure your solutions are tuned to detect threats while minimizing alert fatigue.',
      },
      {
        title: 'Architect a Solution that Scales',
        description: 'Design an endpoint security architecture that grows with your organization, providing consistent coverage as your device fleet expands across on-premise and cloud environments.',
      },
    ],
    servicesLabel: 'ENDPOINT SECURITY SOLUTIONS',
    servicesTitle: 'Results-Oriented Endpoint Security',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our endpoint security solutions:',
    strategicTabDesc: 'Our experts help you select, deploy, and optimize the endpoint security tools that are right for your environment and risk profile.',
    strategicServices: [
      { icon: 'bi-search', title: 'Endpoint Security Tool Evaluation & Selection', description: 'Find the best-fit endpoint security solution by working with you to define selection criteria, assist with RFI/RFP creation, build a vendor comparison matrix & develop a POC/POV.', slug: 'endpoint-security' },
      { icon: 'bi-diagram-3', title: 'Endpoint Security Architecture', description: 'Define the components of each endpoint solution to ensure it meets your requirements, & we\'ll build the solution architecture based on best practices & future needs.', slug: 'endpoint-security' },
      { icon: 'bi-gear', title: 'Endpoint Security Solution Implementation', description: 'Leveraging our background with large commercial & government organizations, our engineers work with you to properly install & configure solutions, ultimately ensuring a successful implementation.', slug: 'endpoint-security' },
      { icon: 'bi-arrow-repeat', title: 'Endpoint Security Optimization', description: 'We use best practices to help ensure your endpoint security platforms are optimized & to ensure your team members are trained to efficiently utilize the solution.', slug: 'endpoint-security' },
      { icon: 'bi-gear-wide-connected', title: 'Endpoint Security Management', description: 'While our services are designed to operationalize an endpoint security tool deployment, we also partner with MDR vendors to act as an extension of your team.', slug: 'endpoint-security' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Governance, Risk & Compliance (GRC)
  // ─────────────────────────────────────────────
  'grc': {
    slug: 'grc',
    icon: 'bi-check2-square',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Page_Governance-Risk-Compliance.png',
    heroTitle: 'Governance, Risk & Compliance Solutions',
    heroSubtitle: 'Ensure Your Infosec Program is Aligned with GRC Best Practices, Frameworks Regulations & Compliance Mandates',
    heroCta: 'Manage Your Risk',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: '#',
    statsLabel: 'GRC CHALLENGES',
    statsTitle: 'How Are You Addressing Cyber Risk, Compliance and Business Resilience?',
    statsIntro: 'Organizations face persistent threats from advanced attackers, a rapidly expanding technology landscape, as well as complicated and evolving regulatory requirements. And yet many senior-level executives rank risk and compliance among the top two risk categories they feel least prepared to address.',
    stats: [
      { value: '40%', label: 'of corporate risk & compliance professionals lack confidence to address compliance risks', circleImage: C1, sourceName: '2023 Thomson Reuters Risk & Compliance Survey Report', sourceContext: '', sourceLink: '' },
      { value: '49%', label: 'of respondents said standardizing risk & compliance frameworks would reduce complexity & cost', circleImage: C2, sourceName: '2023 Thomson Reuters Risk & Compliance Survey Report', sourceContext: '', sourceLink: '' },
      { value: '54%', label: 'of organizations reported experiencing a data breach caused by one of their third parties in the last 12 months', circleImage: C3, sourceName: '2022 Data Risk in the Third-Party Ecosystem Study', sourceContext: '', sourceLink: '' },
    ],
    practiceLabel: 'GOVERNANCE, RISK & COMPLIANCE PRACTICE',
    practiceTitle: 'GRC Services Designed to Address Your Unique Needs',
    practiceTitleHighlight: 'GRC Services',
    practiceDescription: [
      'Our team of GRC practitioners and consultants helps organizations to plan, build and run mature security programs.',
      'Whether it\'s aligning with a specific industry framework or a bespoke security strategy, we help you to reduce cyber risk and enable your business.',
      'We offer a robust set of capabilities across strategy, governance, third party and supply chain risk management, business resilience and compliance advisory services.',
    ],
    practiceVideo: {
      thumbnail: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/byran-orme-video-qnao2l7fftpxv5r9jr35y8cmkcl01oj6a4mbkimo4u.png',
      link: 'https://www.guidepointsecurity.com/services/grc/',
    },
    commitmentLabel: 'OUR GOVERNANCE, RISK & COMPLIANCE COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise the GRC bar by:',
    commitmentItems: [
      { text: 'Ensuring you have improved decision-making, optimized information security investments, centralized visibility across your environment and alignment with industry best practices, regulations and compliance mandates.', children: [] },
      { text: 'Defining your organizational information security structure and strategy, creating a prioritized information security program roadmap and establishing, reviewing and updating security policies and procedures. Additionally, we can provide security leadership and direction through a virtual CISO advisory.', children: [] },
      { text: 'Establishing a strategic risk management program built on a security framework to effectively manage and grow the program and ultimately allowing you to make faster, more risk-informed business decisions.', children: [] },
      { text: 'Providing you with a clear understanding of your level of compliance, any gaps and how to shore them up, including an environment review and scope validation, conducting readiness assessments to determine areas of deficiency, reviewing and assessing your IT controls and providing formal compliance assessments and advisory services.', children: [] },
    ],
    outcomesLabel: 'GOVERNANCE, RISK & COMPLIANCE OUTCOMES',
    outcomesTitle: 'Align Information Security to Your Business Goals, Manage Risk & Ensure Compliance',
    outcomesTitleHighlight: 'Align',
    outcomesSubtitle: 'Our GRC services help ensure your information security program is optimized to meet today\'s complex cyber risks while aligning with industry best practices, regulations and compliance mandates.',
    outcomes: [
      { title: 'Gain an Accurate View of Risk', description: 'Ensure visibility of risk & controls to make faster, more risk-informed decisions' },
      { title: 'Ensure Consistent Measurement', description: 'Gain robust risk & compliance measurements & insights into your environment' },
      { title: 'Enable Effective Compliance Programs', description: 'Address evolving regulations, technology advances & business needs' },
      { title: 'Reduce Your Assurance Cost', description: 'Proactively address third party risk, business resilience issues & security gaps' },
    ],
    servicesLabel: 'GRC SERVICES',
    servicesTitle: 'The Guidance You Need To Develop Or Enhance Your Information Security Program',
    servicesTitleHighlight: 'Guidance',
    servicesSubtitle: 'Explore our GRC services:',
    strategicTabLabel: 'GOVERNANCE',
    tacticalTabLabel: 'RISK',
    complianceTabLabel: 'COMPLIANCE',
    resilienceTabLabel: 'BUSINESS RESILIENCE',
    managedTabLabel: 'MANAGED SECURITY',
    strategicTabDesc: 'With our help, you can be assured of improved decision-making, optimized information security investments, centralized visibility across your environment and alignment with industry best practices, regulations and compliance mandates.',
    gpvueTabs: ['tactical', 'compliance', 'resilience', 'managed'],
    strategicServices: [
      { icon: 'bi-clipboard-check', title: 'Security Program Review', description: 'Evaluate & measure your organization\'s security program maturity, which can be based on a multitude of frameworks.', slug: 'grc' },
      { icon: 'bi-database-check', title: 'Data Security Governance', description: 'Aligning your data protection strategies with business objectives through expert assessments, program development, advisory and sensitive data scans.', slug: 'data-security' },
      { icon: 'bi-shield-lock', title: 'Data Privacy', description: 'Enhancing compliance and privacy maturity with tailored assessments, advisory, program development and strategic solutions.', slug: 'data-security' },
      { icon: 'bi-gear', title: 'ICS Security Program Review', description: 'Designed to align your OT/ICS security strategy with your organization\'s business goals – while managing security risk.', slug: 'ot-security' },
      { icon: 'bi-building', title: 'M&A Security', description: 'Go beyond documentation review to evaluate your target company\'s vulnerabilities & risk of being compromised by a cyber-attack.', slug: 'grc' },
    ],
    tacticalServices: [
      { icon: 'bi-graph-up', title: 'Risk Assessments', description: 'Ensure your infosec program.', slug: 'grc' },
      { icon: 'bi-shield-exclamation', title: 'Ransomware Readiness', description: 'Gain a broad, risk-based analysis of your organization\'s ability to protect against ransomware & respond if victimized.', slug: 'incident-response' },
      { icon: 'bi-people', title: 'Third Party Risk Management', description: 'Understand & manage risk as it relates to the vendors in your supply chain.', slug: 'grc' },
    ],
    complianceServices: [
      { icon: 'bi-journal-check', title: 'Compliance Advisory Services', description: 'Designed to keep you on top of the dynamic landscape for relevant regulatory & industry standards.', slug: 'grc' },
      { icon: 'bi-shield-check', title: 'CMMC Compliance', description: 'Ensure you\'re prepared to address the new age of information security for the defense industrial base.', slug: 'grc' },
      { icon: 'bi-heart-pulse', title: 'HIPAA Compliance', description: 'Protect patient health information & compliance with HIPAA & other healthcare security regulations.', slug: 'grc' },
      { icon: 'bi-credit-card', title: 'PCI DSS Compliance', description: 'Ensure PCI DSS compliance obligations via advisory & assessment services, as well as formal audit & attestation.', slug: 'grc' },
      { icon: 'bi-cloud-check', title: 'FedRAMP Advisory Services', description: 'Design and build your Cloud Service Offering to adhere to FedRAMP & StateRAMP compliance requirements.', slug: 'cloud-governance-solutions' },
    ],
    resilienceServices: [
      { icon: 'bi-arrow-repeat', title: 'Business Resilience', description: 'Ensure your organization is prepared for the next unexpected event.', slug: 'incident-response' },
    ],
    managedServices: [
      { icon: 'bi-infinity', title: 'Compliance Management as a Service', description: 'We manage your compliance program to ensure your organization stays on top of required activities & maintains the necessary data to support future compliance assessments.', slug: 'managed-security' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    testimonial: {
      quote: 'GuidePoint Security helps us identify our problems and bring solutions to the problems that are in the best interest for GPC. They differ substantially because most vendors only care about selling something. GuidePoint is taking that long-term personal relationship and partnership approach which we value greatly.',
      author: 'Damian Apone',
      role: 'Global Security Program Director',
      company: 'Genuine Parts Company',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/GPC_Logo.png',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Damian_Apone_Headshot-150x150.png',
    },
  },

  // ─────────────────────────────────────────────
  // Identity & Access Management (IAM)
  // ─────────────────────────────────────────────
  'iam': {
    slug: 'iam',
    icon: 'bi-fingerprint',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png',
    heroTitle: 'Identity & Access Management (IAM) Services',
    heroSubtitle: 'Control User Access to Critical Information and Systems - Without Impeding Business Operations',
    heroCta: 'Strengthen Your IAM Program',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: '#',
    statsLabel: 'IAM CHALLENGES',
    statsTitle: 'How Are You Using IAM To Enable Business Agility, While Improving Security?',
    statsIntro: 'The modern business landscape is a competitive one, however, scaling too quickly – especially in today\'s world of hyperconnected devices, applications and points of access – leaves you with an ecosystem that is unnecessarily complicated and practically bursting at the seams. By properly mapping out and implementing an Identity & Access Management program, you can streamline user access, improve operational efficiencies and reduce your risk.',
    stats: [
      { value: '54%', label: 'of all attacks are initiated via compromised credentials', circleImage: C1, sourceName: 'CISA Analysis: Fiscal Year 2022 Risk and Vulnerability Assessments', sourceContext: '', sourceLink: '' },
      { value: '$4.62m', label: 'is the average cost of a breach due to stolen or compromised credentials', circleImage: C2, sourceName: 'Ponemon Institute 2023 Cost of a Data Breach', sourceContext: '', sourceLink: '' },
      { value: '49%', label: 'of breaches involved the use of stolen credentials', circleImage: C3, sourceName: 'Verizon 2023 Data Breach Investigations Report', sourceContext: '', sourceLink: '' },
    ],
    practiceLabel: 'IDENTITY & ACCESS MANAGEMENT SOLUTIONS',
    practiceTitle: 'IAM Services That Help You Realize a Return on Investment',
    practiceTitleHighlight: 'IAM Services',
    practiceDescription: [
      'Our IAM practice helps organizations secure identities across on-prem, hybrid and cloud environments.',
      'Whether it\'s Identity Governance & Administration, Access Management, Privileged Access Management or Customer IAM, our team ensures that the right people have the right access to get their jobs done in a secure manner.',
    ],
    practiceVideo: {
      thumbnail: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/byran-orme-video-qnao2l7fftpxv5r9jr35y8cmkcl01oj6a4mbkimo4u.png',
      link: 'https://www.guidepointsecurity.com/services/iam/',
    },
    commitmentLabel: 'OUR IDENTITY & ACCESS MANAGEMENT COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise the IAM bar by:',
    commitmentItems: [
      { text: 'Automating joiner, leaver and mover user lifecycle processes, ensuring efficient provisioning and de-provisioning and improving access certification for a better user experience.', children: [] },
      { text: 'Seamlessly managing access to improve business users\' experience and reduce risk of unauthorized access through capabilities such as single sign-on, multi-factor authentication and federated single sign-on for robust authentication and authorization.', children: [] },
      { text: 'Establishing a strategic risk management program built on a security framework to effectively manage and grow the program and ultimately allowing you to make faster, more risk-informed business decisions.', children: [] },
      { text: 'Evaluating, deploying and managing your Privileged Access Management solution to govern the lifecycle of privileged users as well as implement best practices to reduce the associated risk.', children: [] },
      { text: 'Guiding you through the CIAM implementation process, focusing on streamlining user registration, enhancing data security and compliance and gaining valuable customer insights.', children: [] },
    ],
    outcomesLabel: 'IDENTITY & ACCESS MANAGEMENT OUTCOMES',
    outcomesTitle: 'Improve Operational Efficiency While Reducing Risk',
    outcomesTitleHighlight: 'Improve',
    outcomesSubtitle: 'Our IAM services help ensure your IT staff is armed with the necessary tools to manage and monitor user roles and activities and to consistently enforce your program-defined policies.',
    outcomes: [
      { title: 'Improve Information Sharing', description: 'Share information & improve collaboration among applications, devices, & business units' },
      { title: 'Proactively Identify & Mitigate Risk', description: 'Flag policy violations & eliminate improper access privileges without searching through distributed systems' },
      { title: 'Develop Strong Security Policies & Practices', description: 'Meet privacy & protection regulations with high-quality security practices & policies that mitigate data breaches' },
      { title: 'Lower Service Costs', description: 'Eliminate outsourcing & the cost of managing obsolete, unreliable systems & avoid the pitfalls of regulatory violations' },
    ],
    servicesLabel: 'IAM SERVICES',
    servicesTitle: 'Enable Business Operations Through Access Governance & Process Automation',
    servicesTitleHighlight: 'Enable',
    servicesSubtitle: 'Explore our IAM services:',
    strategicTabLabel: 'PROFESSIONAL SERVICES',
    tacticalTabLabel: 'IAM PILLARS',
    managedTabLabel: 'MANAGED SECURITY',
    strategicTabDesc: 'With our help, you can improve business agility by reducing operational costs through process automation and enhancing user experience and productivity through self-service—all while improving your security posture and mitigating risk.',
    gpvueTabs: ['strategic', 'tactical', 'managed'],
    strategicServices: [
      { icon: 'bi-clipboard2-check', title: 'Advisory Services', description: 'Assess your IAM setup & improve your program via roadmap development, architecture reviews, health checks, & PAM, Zero Trust & Passwordless architecture workshops.', slug: 'iam' },
      { icon: 'bi-gear-wide-connected', title: 'Implementation Services', description: 'Automate & simplify your IAM program by ensuring continuous management & optimization of your IGA, PAM, Access Management & CIAM solutions.', slug: 'iam' },
      { icon: 'bi-shield-lock', title: 'Zero Trust Workshops', description: 'We help facilitate your organization\'s journey towards zero trust adoption through iterative, manageable steps.', slug: 'zero-trust-workshops' },
    ],
    tacticalServices: [
      { icon: 'bi-fingerprint', title: 'Access Management', description: 'Identify & implement access management solutions that best align with your current & future needs.', slug: 'iam' },
      { icon: 'bi-shield-check', title: 'Identity & Governance Administration (IGA)', description: 'Automate lifecycle processes to improve efficiency, user experience & security posture, while reducing risk & cost.', slug: 'iam' },
      { icon: 'bi-key', title: 'Privileged Access Management (PAM)', description: 'Define processes & implement the right PAM solution to manage the lifecycle of privileged accounts.', slug: 'iam' },
      { icon: 'bi-person-gear', title: 'Customer Identity & Access Management (CIAM)', description: 'Focus on streamlining user registration, enhancing data security & compliance, & gaining valuable customer insights.', slug: 'iam' },
    ],
    managedServices: [
      { icon: 'bi-infinity', title: 'Identity as a Service', description: 'A robust solution for the complex challenges of identity management, focusing on optimizing resources, enhancing user experience, & ensuring security.', slug: 'managed-security' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Incident Response & Threat Intelligence
  // ─────────────────────────────────────────────
  'incident-response': {
    slug: 'incident-response',
    icon: 'bi-exclamation-triangle',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Vulnerability_Pentest-1.png',
    heroTitle: 'Incident Response & Threat Intelligence',
    heroSubtitle: 'In Order to Identify and Respond to Incidents as Early as Possible, You Need an Effective Threat Intelligence Program and a Robust Incident Response Framework',
    heroCta: 'Protect Your Network',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: '#',
    statsLabel: 'INCIDENT RESPONSE & THREAT INTELLIGENCE CHALLENGES',
    statsTitle: 'How Are You Preparing For, Responding To And Efficiently Resolving Cybersecurity Incidents?',
    statsIntro: 'Cyber attacks happen on a regular basis – across all industries and organizations of all sizes. Your preparedness and ability to quickly respond to threats and recover requires the right personnel, processes and solutions.',
    stats: [
      { value: '277 days', label: 'is the average time it takes to identify and contain a data breach', circleImage: C1, sourceName: 'Ponemon Institute 2023 Cost of a Data Breach', sourceContext: '', sourceLink: '' },
      { value: '54 days', label: 'faster to resolve a breach if there\'s an IR team and IR plan testing in place', circleImage: C2, sourceName: 'Ponemon Institute 2023 Cost of a Data Breach', sourceContext: '', sourceLink: '' },
      { value: '$1.49m', label: 'less in costs for organizations with IR programs compared to those without', circleImage: C3, sourceName: 'Ponemon Institute 2023 Cost of a Data Breach', sourceContext: '', sourceLink: '' },
    ],
    practiceLabel: 'INCIDENT RESPONSE & THREAT INTELLIGENCE PRACTICE',
    practiceTitle: 'Proactive and Reactive Incident Response & Threat Intelligence Services',
    practiceTitleHighlight: 'Proactive and Reactive',
    practiceDescription: [
      'Our Incident Response & Threat Intelligence practice provides proactive and reactive services to help organizations prepare for, respond to and recover from a security incident.',
      'Whether it\'s Ransomware, Insider Threats or Data Breaches, our team helps customers quickly respond to these incidents so they can get back to business.',
      'Our Threat Intelligence capabilities help our customers understand the threat actors and the TTPs they leverage to target their environment and operationalize this intel to implement the right countermeasures.',
    ],
    practiceVideo: {
      thumbnail: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/byran-orme-video-qnao2l7fftpxv5r9jr35y8cmkcl01oj6a4mbkimo4u.png',
      link: 'https://www.guidepointsecurity.com/services/incident-response-threat-intelligence/',
    },
    commitmentLabel: 'OUR APPLICATION SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise the AppSec bar by:',
    commitmentItems: [
      { text: 'Focusing testing efforts in order to maximize the coverage of an application and ensure that the most security sensitive functions and features are assessed.', children: [
        { text: 'Testing' },
      ]},
      { text: 'Providing you with actionable insights into how an adversary can currently leverage or exploit real issues or vulnerabilities in your business-critical applications—allowing you to not only reduce risk but also the cost of remediation.', children: [] },
      { text: 'Assessing the gaps in your current development lifecycle and provide implementation recommendations meant to strengthen overall efforts and reduce risk.', children: [] },
      { text: 'Moving the needle with your Application Security program—whether it\'s a gap analysis, program development, AppSec artifact creation (secure coding checklists, standards, etc.), onboarding, socialization or a unique need that doesn\'t fit into a fixed offering.', children: [] },
    ],
    outcomesLabel: 'INCIDENT RESPONSE & THREAT INTELLIGENCE OUTCOMES',
    outcomesTitle: 'Ensure Best Practices For When A Security Incident Happens',
    outcomesTitleHighlight: 'Ensure',
    outcomesSubtitle: 'Our dedicated IR practitioners & Threat Intelligence analysts are experienced with a wide variety of industry standard tools and solutions that provide the required visibility across your network, endpoints and other systems to perform efficient and comprehensive investigation of an incident.',
    outcomes: [
      { title: 'Ensure Incident Preparedness', description: 'Hunt for threats, gain critical threat intelligence & ensure you have an experienced team on standby' },
      { title: 'Quickly Respond & Recover', description: 'Investigate & understand the full scope of an incident, preserve necessary data and ensure an effective outcome' },
      { title: 'Develop & Test Your Incident Response Plans', description: 'Identify gaps in your IR process, establish & enforce predefined a response process, validate & extend your capabilities' },
      { title: 'Gain a Fully Managed TI Program', description: 'From conception to execution, gain an entire Threat Intelligence program that meets your organization\'s needs' },
    ],
    servicesLabel: 'INCIDENT RESPONSE & THREAT INTELLIGENCE SERVICES',
    servicesTitle: 'Prepare for, Respond to & Resolve Security Incidents Through an Effective Threat Intelligence Program & IR Framework',
    servicesTitleHighlight: 'Prepare',
    servicesSubtitle: 'Explore our Incident Response & Threat Intelligence services:',
    strategicTabLabel: 'PROACTIVE SERVICES',
    tacticalTabLabel: 'REACTIVE SERVICES',
    complianceTabLabel: 'ADVISORY SERVICES',
    managedTabLabel: 'MANAGED SECURITY',
    strategicTabDesc: 'Whether you need a dedicated Incident Response (IR) or Threat Intelligence (TI) team or an evaluation of your current programs, our expert practitioners are ready to assess your program maturity, provide critical intel to improve your defenses, develop and test your plans, respond to and help you recover from an incident.',
    gpvueTabs: ['strategic', 'tactical', 'compliance', 'managed'],
    strategicServices: [
      { icon: 'bi-exclamation-triangle', title: 'Incident Response Retainer', description: 'Ensure a team of IR experts are ready on-demand.', slug: 'incident-response' },
      { icon: 'bi-chat-dots', title: 'Threat Actor Communications Retainer', description: 'Be ready to negotiate the best possible outcome if victimized by ransomware.', slug: 'incident-response' },
      { icon: 'bi-shield-check', title: 'IR Enablement Services', description: 'Ensure your team is equipped with required capabilities to effectively respond to threats.', slug: 'incident-response' },
      { icon: 'bi-search', title: 'Threat Hunting & Discovery', description: 'Identify potential threats before they become a breach.', slug: 'incident-response' },
      { icon: 'bi-binoculars', title: 'Threat Intelligence Services', description: 'Build a customizable TI program to meet your needs.', slug: 'incident-response-threat-intelligence' },
    ],
    tacticalServices: [
      { icon: 'bi-exclamation-circle', title: 'Incident Response Services', description: 'Quickly investigate & understand the full scope of an incident, preserve necessary data and ensure an effective outcome.', slug: 'incident-response' },
      { icon: 'bi-lock', title: 'Ransomware Response Services', description: 'Navigate ransomware variants, threat actors & techniques to ensure an effective outcome.', slug: 'incident-response' },
      { icon: 'bi-file-earmark-lock', title: 'Digital Forensics Services', description: 'Preserve, collect & analyze electronic data to support investigations & litigation.', slug: 'incident-response' },
    ],
    complianceServices: [
      { icon: 'bi-diagram-3', title: 'Tabletop Exercises', description: 'Run relevant incident scenario simulations to identify potential gaps in your IR process.', slug: 'incident-response-threat-intelligence' },
      { icon: 'bi-arrow-left-right', title: 'Purple Team Assessments', description: 'Validate, extend & expand your IR capabilities, while actively working to reduce your threat profile.', slug: 'incident-response' },
      { icon: 'bi-journal-text', title: 'IR Playbook & Runbook Development', description: 'Ensure you\'re following a predefined process during a response effort.', slug: 'incident-response' },
      { icon: 'bi-gear-wide-connected', title: 'IR Plan Development & Review', description: 'Be prepared with a well-defined process for responding to an incident.', slug: 'incident-response' },
    ],
    managedServices: [
      { icon: 'bi-search', title: 'Threat Intelligence as a Service', description: 'Fully managed threat intelligence program from conception to execution.', slug: 'incident-response-threat-intelligence' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Managed Security Services
  // ─────────────────────────────────────────────
  'managed-security': {
    slug: 'managed-security',
    icon: 'bi-shield-star',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Managed_Security_Services.png',
    heroTitle: 'Managed Security Services',
    heroSubtitle: 'Gain the Skilled Cybersecurity Resources You Need to Manage Your Environment',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    statsLabel: 'MANAGED SECURITY CHALLENGES',
    statsTitle: 'How are You Managing All of the Data and Tools Within Your Security Stack?',
    statsIntro: 'Most organizations need more skilled cybersecurity resources than they have. This is where GuidePoint\'s managed security services come in. Whether you need 24x7x365 eyes on glass or help managing one of your security platforms to ensure that you gain all of the benefits possible, our team of practitioners can help.',
    stats: [
      { value: '92%', label: 'of surveyed cybersecurity professionals revealed they had skills gaps in their organization', circleImage: C1, sourceName: 'ISC2 2023 Cybersecurity Workforce Study', sourceContext: '', sourceLink: '' },
      { value: '4 million', label: 'cybersecurity workforce shortage, despite 10% growth in the workforce last year', circleImage: C2, sourceName: 'ISC2 2023 Cybersecurity Workforce Study', sourceContext: '', sourceLink: '' },
      { value: '67%', label: 'of surveyed cybersecurity professionals reported staff shortages for preventing & troubleshooting issues', circleImage: C3, sourceName: 'Ponemon Institute 2023 Cost of a Data Breach', sourceContext: '', sourceLink: '' },
    ],
    practiceLabel: 'MANAGED SECURITY SERVICES: SECURITY PROGRAM MANAGEMENT',
    practiceTitle: 'Building an Effective and Sustainable Cybersecurity Program',
    practiceTitleHighlight: 'Building',
    practiceDescription: [
      'GPVUE is our answer to helping organizations build a cybersecurity program that improves their overall security maturity.',
      'This offering provides an integrated program that leverages our expertise across a wide range of cybersecurity disciplines and is designed specifically to meet your unique needs over the course of a year. With GPVUE, you gain a strategic, programmatic approach to ensuring a stronger cybersecurity posture at all times.',
    ],
    commitmentLabel: 'OUR IR & THREAT INTELLIGENCE COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you mature your security program and provide the skilled resources you need by:',
    commitmentItems: [
      { text: 'Delivering a strategic, programmatic cybersecurity approach that goes beyond individual solutions and services to give you a more mature security program and posture.', children: [] },
      { text: 'Providing experts to manage your security solutions and processes, including: application security, breach and attack simulation, compliance management, identity & access management solutions, penetration testing platforms, security analytics platforms, Next-Generation Firewalls, third party risk management solutions, threat intelligence programs and platforms, vulnerability management and more.', children: [] },
      { text: 'Providing or augmenting your security leadership through our flexible, customizable Chief Information Security Officer (CISO) service offerings.', children: [] },
      { text: 'Working with leading Managed Detection & Response (MDR) providers to ensure seamless 24x7x365 coverage on all aspects of monitoring your security operations, to ensure they remain relevant to your security program.', children: [] },
    ],
    outcomesLabel: 'MANAGED SECURITY OUTCOMES',
    outcomesTitle: 'Leverage the Right Security Skills and Program Management',
    outcomesTitleHighlight: 'Leverage',
    outcomesSubtitle: 'A strong security program depends on more than just the right tools – it also requires skilled resources and continuous program management to reduce your risk and improve your security posture. Our security practitioners and consultants have achieved the highest levels of certification across many industry standards and products. We can wrap our expertise and solutions into a comprehensive managed security program that enables you to minimize cyber risk.',
    outcomes: [
      { title: 'Skilled Cyber Resources', description: 'Address your cybersecurity skills challenge by leveraging our experts to manage certain security platforms' },
      { title: 'Expand Your Security Team', description: 'By having our experts manage some of the security tools in your stack, you can focus on addressing critical alerts' },
      { title: 'Ensure a Robust Security Program', description: 'Mature your security program through GPVUE and/or by leveraging our team of senior security professionals to drive your program forward' },
    ],
    servicesLabel: 'MANAGED SECURITY SERVICES',
    servicesTitle: 'Leverage Skilled Resources to Manage Your Security Platforms, So You Can Focus on Reducing Cyber Risk',
    servicesTitleHighlight: 'Leverage',
    servicesSubtitle: 'Explore our Managed Security services:',
    strategicTabLabel: 'SECURITY PROGRAM MANAGEMENT',
    tacticalTabLabel: '"AS A SERVICE" OFFERINGS',
    complianceTabLabel: 'THIRD PARTY MANAGED SERVICES',
    strategicTabDesc: 'Whether you need around-the-clock monitoring and management or help managing a solution in your cybersecurity stack, we have the expertise you need.',
    gpvueTabs: ['strategic'],
    gpvueCard: {
      description: 'Integrated program designed to improve your security posture over the course of a year. Includes Annual Program Review & Quarterly Business Reviews.',
      link: '/gpvue',
    },
    strategicServices: [],
    tacticalServices: [
      { icon: 'bi-layers', title: 'Application Security as a Service', description: 'AppSec tooling expertise to identify vulnerabilities & provide remediation recommendations.', slug: 'application-security-as-a-service' },
      { icon: 'bi-arrow-repeat', title: 'Breach & Attack Simulation (BAS) as a Service', description: 'Leverage threat emulation operators to optimize your BAS program & increase ROI.', slug: 'managed-security' },
      { icon: 'bi-person-badge', title: 'CISO as a Service', description: 'Rely on experienced cybersecurity, governance & risk professionals', slug: 'managed-security' },
      { icon: 'bi-infinity', title: 'Compliance Management as a Service', description: 'Ensure continuous compliance in between assessments.', slug: 'managed-security' },
      { icon: 'bi-people', title: 'Identity as a Service', description: 'Rely on experts to manage your Access Management, IGA, PAM and CIAM solutions.', slug: 'managed-security' },
      { icon: 'bi-bricks', title: 'Next-Generation Firewall (NGFW) as a Service', description: 'Leverage network security experts to manage your NGFW administration.', slug: 'managed-security' },
      { icon: 'bi-arrow-clockwise', title: 'Penetration Testing as a Service', description: 'Combine the power of manual & automated penetration testing.', slug: 'managed-security' },
      { icon: 'bi-graph-up-arrow', title: 'Security Analytics as a Service', description: 'We tailor your security analytics platform to fit your environment & use cases.', slug: 'managed-security' },
      { icon: 'bi-file-earmark-text', title: 'Threat Intelligence as a Service', description: 'Fully managed threat intelligence program from conception to execution.', slug: 'incident-response-threat-intelligence' },
      { icon: 'bi-diagram-3', title: 'Third Party Risk Management (TPRM) as a Service', description: 'Leverage our expertise to effectively run your TPRM program.', slug: 'managed-security' },
      { icon: 'bi-shield-exclamation', title: 'Vulnerability Management as a Service', description: 'Our experts identify critical assets, threats & vulnerabilities to close gaps.', slug: 'managed-security' },
    ],
    complianceServices: [
      { icon: 'bi-search', title: 'Managed Detection & Response', description: 'Our experts help you identify the right MDR provider for your needs.', slug: 'managed-security' },
    ],
    testimonial: {
      quote: 'Anytime I have any questions on any security solutions, I can reach out to the entire GuidePoint Security team. They will follow up and touch base on how our security program is rolling. From the sales team to management to the executives, you get that custom, family feel from GuidePoint Security.',
      author: 'Scott Main',
      role: 'Senior Cyber Security Engineer',
      company: 'K. Hovnanian Homes',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/khovnanian-logo.png',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Scott_Main_K.Hovnanian_Photo.png',
    },
  },

  // ─────────────────────────────────────────────
  // Network & Infrastructure Security
  // ─────────────────────────────────────────────
  'network-security': {
    slug: 'network-security',
    icon: 'bi-globe',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Page_Network_Infrastructure_Security-1.png',
    heroTitle: 'Network & Infrastructure Security Solutions',
    heroSubtitle: 'Protect Your Network from the Perimeter to the Core',
    heroCta: 'Secure Your Network',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'NETWORK SECURITY CHALLENGES',
    statsTitle: 'How are You Protecting Your Modern Network?',
    statsIntro: 'Your network infrastructure is critical to the operation of your business, but traditional security implementations do not address the modern threats that organizations face today. Threats and risks you face include:',
    stats: [
      { value: 'System Intrusion', label: 'Complex attacks that leverage malware and/or hacking, including the deployment of ransomware.', circleImage: C1, sourceName: '', sourceContext: '', sourceLink: '' },
      { value: 'Denial of Service', label: 'DoS attacks compromise the availability of networks and systems at the network and application layer.', circleImage: C2, sourceName: '', sourceContext: '', sourceLink: '' },
      { value: 'Flat Network Topology', label: 'Without strong segmentation, attackers who successfully breach the network have freedom of movement.', circleImage: C3, sourceName: '', sourceContext: '', sourceLink: '' },
    ],
    commitmentLabel: 'OUR NETWORK SECURITY COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise the Network Security bar by:',
    commitmentItems: [
      { text: 'Evaluating your organization\'s existing network security capabilities and identifying gaps across your infrastructure.', children: [] },
      { text: 'Designing and implementing the right network security solutions for your environment, including NGFW, NAC, micro-segmentation and Zero Trust.', children: [] },
      { text: 'Helping modernize your environment through digital transformation with the necessary cloud security guidance and implementation support.', children: [] },
      { text: 'Providing ongoing managed network security services to ensure your security solutions remain optimized and effective.', children: [] },
    ],
    outcomesLabel: 'NETWORK SECURITY OUTCOMES',
    outcomesTitle: 'Ensure The Integrity, Confidentiality And Accessibility Of Your Organization\'s Network And Data',
    outcomesTitleHighlight: 'Ensure',
    outcomesSubtitle: 'Our Network & Infrastructure Security services are designed to build the foundation of a smooth, secure and scalable infrastructure.',
    outcomes: [
      { title: 'Build & Maintain Your Customer\'s Trust', description: 'By ensuring your network is protected from threats, you\'re mitigating cyber risk & protecting your customers\' information.' },
      { title: 'Protect Your Network from Threats', description: 'Defend against threats by implementing, managing & optimizing innovative technologies & monitoring those systems.' },
      { title: 'Architect a Solution that Scales', description: 'Integrate new or existing solutions into your operating environment to ensure visibility & overall security posture over time.' },
    ],
    servicesLabel: 'NETWORK & INFRASTRUCTURE SECURITY SOLUTIONS',
    servicesTitle: 'Results-Oriented Network Security Solutions',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our network & infrastructure security solutions:',
    strategicTabLabel: 'PROFESSIONAL SERVICES',
    tacticalTabLabel: 'IMPLEMENTATION & ADMINISTRATION',
    managedTabLabel: 'MANAGED SECURITY',
    strategicTabDesc: 'Our experts cover the full range of network security practices and tools, from assessments and planning to implementation of advanced security solutions.',
    gpvueTabs: ['strategic'],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    strategicServices: [
      { icon: 'bi-search', title: 'Security Architecture Review', description: 'Evaluate your organization\'s security capabilities to ensure deployed technologies are aligned with relevant compliance requirements.', slug: 'network-security' },
      { icon: 'bi-diagram-2', title: 'Network Segmentation Services', description: 'Whether it\'s NGFW, NAC, micro-segmentation or assisting you on the path to Zero Trust, we can help you identify the best solution for your organization.', slug: 'network-security' },
      { icon: 'bi-cloud-arrow-up', title: 'Digital Transformation', description: 'Gain the necessary cloud security guidance & implementation support to help modernize your environment.', slug: 'network-security' },
      { icon: 'bi-shield-check', title: 'Zero Trust Workshops', description: 'We help facilitate your organization\'s journey towards zero trust adoption through iterative, manageable steps.', slug: 'zero-trust-workshops' },
    ],
    tacticalServices: [
      { icon: 'bi-layers', title: 'F5 Application Delivery', description: 'Maximize the security, compliance, performance & optimization of mission-critical applications.', slug: 'network-security' },
      { icon: 'bi-globe2', title: 'Network Security Architecture & Implementation', description: 'Review your network security capabilities & design to architect a solution that meets your needs.', slug: 'network-security' },
      { icon: 'bi-hdd-network', title: 'Network Security Platform-Specific Services', description: 'Leverage our expertise to design, implement & manage your network security solutions.', slug: 'network-security' },
    ],
    managedServices: [
      { icon: 'bi-bricks', title: 'Next-Generation Firewall (NGFW) as a Service', description: 'Leverage network security experts to manage your NGFW administration.', slug: 'managed-security' },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Security Awareness & Education
  // ─────────────────────────────────────────────
  'security-awareness': {
    slug: 'security-awareness',
    icon: 'bi-mortarboard',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Page_Security_And_Education.png',
    heroTitle: 'Security Awareness & Education Services',
    heroSubtitle: 'Instructor-led Security Awareness Training and Education Customized to Address Your Organization\'s Needs',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'SECURITY AWARENESS & EDUCATION CHALLENGES',
    statsTitle: 'How Are You Training Your Employees On Security Best Practices?',
    statsIntro: 'You can reduce cybersecurity risk by establishing and maintaining a security awareness program that can positively influence behavior among employees to be security conscious.',
    stats: [
      { value: '50%+', label: 'By 2025, the lack of skilled staff or human failure will be responsible for more than half of significant cyber incidents.', circleImage: C1, sourceName: 'Gartner Predicts 2023: Cybersecurity Industry Focuses on the Human Deal', sourceContext: '', sourceLink: '' },
      { value: '74%', label: 'Of all breaches include the human element via error, privilege misuse, use of stolen credentials or social engineering.', circleImage: C2, sourceName: 'Verizon 2023 Data Breach Investigations Report', sourceContext: '', sourceLink: '' },
      { value: '16%', label: 'Percentage of breaches in which phishing was the initial attack vector.', circleImage: C3, sourceName: 'Ponemon Institute 2023 Cost of a Data Breach', sourceContext: '', sourceLink: '' },
    ],
    commitmentLabel: 'OUR SECURITY AWARENESS & EDUCATION COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you raise Security Awareness & Education by:',
    commitmentItems: [
      { text: 'Providing general security awareness training services designed to provide your employees with a general overview of the information security landscape and key risk areas.', children: [] },
      { text: 'Offering a specifically designed course for your executive team with targeted awareness training, including tangible ways to incorporate key information security concepts into their respective areas.', children: [] },
      { text: 'Delivering customizable technical courses that focus on information security solutions and cover topics from high-level architectural and use case discussions to proper configurations and best practice management.', children: [] },
      { text: 'Providing training topics on secure coding practices in the development lifecycle, performing red or blue team exercises, incident response planning and tabletop exercises, best practices for operating in the cloud, identifying and managing risks and building a scalable compliance program.', children: [] },
    ],
    outcomesLabel: 'SECURITY AWARENESS & EDUCATION OUTCOMES',
    outcomesTitle: 'Improve Your Security Awareness Education With The Right Training & Technologies',
    outcomesTitleHighlight: 'Improve',
    outcomesSubtitle: 'Leveraging our security training services and the right security awareness technologies gives you access to seasoned practitioners with deep subject matter expertise, as well as vetted tools to help improve your organization\'s security education.',
    outcomes: [
      { title: 'Strengthen Your Weakest Link', description: 'With strong security training programs you can improve the weakest link in your security chain: your people.' },
      { title: 'Improve Your Team\'s Cyber Skills', description: 'Technical training and CTF exercises can help improve the skills within your cybersecurity personnel.' },
    ],
    servicesLabel: 'SECURITY AWARENESS & EDUCATION SOLUTIONS',
    servicesTitle: 'Results-Oriented Security Awareness Training Solutions',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our security awareness and education solutions:',
    strategicTabDesc: 'Whether helping you select and implement security awareness solutions or performing instructor-led training, we can help you develop, implement and execute your security awareness education program.',
    gpvueTabs: ['strategic'],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    strategicServices: [
      { icon: 'bi-arrow-repeat', title: 'Security Awareness Services', description: 'Ensure your employees have the security awareness & education to minimize the risk of being socially engineered.', slug: 'security-awareness' },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Security Operations Center (SOC)
  // ─────────────────────────────────────────────
  'soc': {
    slug: 'soc',
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/SOC-qzc0juti9ca17lxd5bwn9zgveodr7oa5tnwquwhsy8.png',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/SOC.png',
    heroTitle: 'Security Operations Center (SOC) Services',
    heroSubtitle: 'GuidePoint Security helps you design, build, tune and manage a more effective Security Operations Center (SOC) to help you detect and respond to threats faster.',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'SOC CHALLENGES',
    statsTitle: 'How Are You Maximizing The Value From Your Existing SOC Investment?',
    statsIntro: 'Your SOC is the hub of your capability to detect and respond to incidents targeting your organization, but if not implemented, optimized and managed properly, your security operations center may create a lot of noise—impacting your analysts\' efficiency and ability to detect and respond to real threats.',
    stats: [
      {
        value: '277 Days',
        label: 'average time to identify and contain a data breach',
        sourceName: 'Ponemon Institute',
        sourceContext: '2023 Cost of a Data Breach Report',
        circleImage: C1,
      },
      {
        value: '32%',
        label: 'of security professionals say they do not have enough staff to adequately manage their SOC',
        sourceName: 'Morning Consult',
        sourceContext: '2023 State of Cybersecurity Report',
        circleImage: C2,
      },
      {
        value: '40%',
        label: 'of security alerts go uninvestigated each day due to understaffed SOCs',
        sourceName: 'Ponemon Institute',
        sourceContext: '2023 State of Cybersecurity Report',
        circleImage: C3,
      },
    ],
    commitmentLabel: 'OUR SECURITY OPERATIONS COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you create more signal and less noise from your SOC',
    commitmentItems: [
      { text: 'Assess your current SOC maturity and identify gaps in your people, processes, and technologies' },
      { text: 'Help you define and build a use case library aligned to your specific threat model and industry' },
      { text: 'Design, implement, and tune your SIEM to reduce false positives and improve alert fidelity' },
      { text: 'Build custom detection content mapped to MITRE ATT&CK to identify attacker behaviors early' },
      { text: 'Design and implement SOAR playbooks to automate and accelerate threat investigation and response' },
      { text: 'Optimize your data pipeline to ingest the right data at the right cost for effective detection' },
      { text: 'Develop Insider Threat monitoring capabilities to identify compromised accounts and malicious insiders' },
      { text: 'Build and operationalize a threat intelligence program to proactively inform your SOC operations' },
      { text: 'Provide Security Analytics as a Service for ongoing content development and SOC optimization' },
      { text: 'Support SIEM platform migrations and technology transitions with minimal disruption to operations' },
      { text: 'Deliver regular reporting and metrics to measure SOC performance and demonstrate continuous improvement' },
    ],
    servicesLabel: 'SECURITY OPERATIONS CENTER SOLUTIONS',
    servicesTitle: 'Results-Oriented Security Operations Center Services',
    servicesTitleHighlight: 'Security Operations',
    servicesSubtitle: 'Explore our SOC services:',
    strategicTabLabel: 'PROFESSIONAL SERVICES',
    tacticalTabLabel: 'PLATFORM-SPECIFIC SERVICES',
    managedTabLabel: 'MANAGED SECURITY',
    strategicTabDesc: 'Our team of SOC experts has experience architecting, deploying and operationalizing security operations for some of the world\'s largest organizations. Whether it\'s developing a robust data aggregation platform or designing workflows and playbooks to meet a wide range of use cases, our SOC services enable you to respond faster with meaningful insights that improve your overall security.',
    tacticalTabDesc: 'Our team of SOC experts has experience architecting, deploying and operationalizing security operations for some of the world\'s largest organizations. Whether it\'s developing a robust data aggregation platform or designing workflows and playbooks to meet a wide range of use cases, our SOC services enable you to respond faster with meaningful insights that improve your overall security.',
    managedTabDesc: 'Our team of SOC experts has experience architecting, deploying and operationalizing security operations for some of the world\'s largest organizations. Whether it\'s developing a robust data aggregation platform or designing workflows and playbooks to meet a wide range of use cases, our SOC services enable you to respond faster with meaningful insights that improve your overall security.',
    strategicServices: [
      { icon: 'bi-arrow-repeat', title: 'Security Analytics Services', description: 'Improve visibility into security events, reduce remediation & improve your security posture.', slug: null },
      { icon: 'bi-shield-check', title: 'SOAR Services', description: 'Operationalize your SOAR through automated playbooks that enable you to respond faster to alerts.', slug: null },
      { icon: 'bi-person-exclamation', title: 'Insider Threat Solutions', description: 'Build an insider threat program that identifies compromised credentials & malicious individuals.', slug: null },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    gpvueTabs: ['strategic'],
    tacticalServices: [
      { icon: 'bi-arrow-clockwise', title: 'Splunk Services', description: 'Maximize the value of your Splunk instance, improve visibility of security events & reduce remediation time.', slug: null },
      { icon: 'bi-arrow-repeat', title: 'Splunk Training', description: 'Enhance your Splunk knowledge with hands-on instruction & exercises.', slug: null },
    ],
    managedServices: [
      { icon: 'bi-graph-up-arrow', title: 'Security Analytics as a Service', description: 'Experts tailor your security analytics platform to fit your environment & use cases.', slug: null },
    ],
    outcomesLabel: 'SOC OUTCOMES',
    outcomesTitle: 'Ensure your SOC is Fully Optimized to Quickly Detect & Respond to Threats',
    outcomesTitleHighlight: 'Ensure your SOC is Fully Optimized',
    outcomesSubtitle: 'GuidePoint SOC Services help organizations build a high-performing security operations function that detects threats earlier, responds faster, and continuously improves over time.',
    outcomes: [
      {
        title: 'Increase Visibility & Detection',
        description: 'Build and optimize detection content, data pipelines, and analytics capabilities to identify attacker behaviors earlier and with greater fidelity.',
      },
      {
        title: 'Accelerate Response & Reduce Risk',
        description: 'Automate threat investigation and response with SOAR playbooks to dramatically reduce mean time to respond and limit the blast radius of security incidents.',
      },
      {
        title: 'Optimize SOC Performance',
        description: 'Eliminate alert fatigue, reduce false positives, and continuously improve SOC efficiency through expert tuning, metrics, and ongoing content development.',
      },
    ],
    testimonial: {
      quote: "GuidePoint Security is a trusted partner. Cybersecurity is a program not a project, so it's always evolving. And GuidePoint does a great job of staying in step with the times. The GuidePoint Security team has an answer for every question and challenge we have around cybersecurity.",
      author: 'James Lowry',
      role: 'Director of Information Security',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Staff Augmentation
  // ─────────────────────────────────────────────
  'staff-augmentation': {
    slug: 'staff-augmentation',
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/Staff_Augmentation-qzc0khdmtd4wy90lhlnoxtrxnxakcerpwrkedjkcsw.png',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Servcies_MAIN_Staff_Augmentation-2.png',
    heroTitle: 'Cybersecurity Staff Augmentation Services',
    heroSubtitle: 'Our Team of Industry-Leading Consultants, Engineers & Analysis are Ready to Support Your Cybersecurity Staffing Needs',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    hidePractice: true,
    statsLabel: 'CYBERSECURITY STAFFING CHALLENGES',
    statsTitle: 'How are You Staffing Your Cybersecurity Program?',
    statsIntro: 'Many organizations increase their budgets to add more security tools and layers with the goal of better detecting threats within the network. However, those funds don\'t often go to the necessary staffing requirements for detecting, monitoring and managing the additional security technologies deployed. GuidePoint Security\'s staff augmentation services can help you execute on your organization\'s security strategy.',
    stats: [
      {
        value: '92%',
        label: 'of surveyed cybersecurity professionals revealed they had skills gaps in their organization',
        sourceName: 'ISC2 2023 Cybersecurity Workforce Study',
        circleImage: C1,
      },
      {
        value: '4 million',
        label: 'cybersecurity workforce shortage, despite 10% growth in the workforce last year',
        sourceName: 'ISC2 2023 Cybersecurity Workforce Study',
        circleImage: C2,
      },
      {
        value: '67%',
        label: 'of surveyed cybersecurity professionals reported staff shortages for preventing & troubleshooting issues',
        sourceName: 'Ponemon Institute 2023 Cost of a Data Breach',
        circleImage: C3,
      },
    ],
    commitmentLabel: 'OUR COMMITMENT TO HELPING YOU EFFICIENTLY AUGMENT YOUR CYBERSECURITY TEAM',
    commitmentSubtitle: 'We will help create a cost-effective, cybersecurity staffing force multiplier',
    commitmentItems: [
      { text: 'Our security engineering and operations services will help you integrate and operationalize your technology capability to meet your organization\'s requirements, supporting the full security technology lifecycle, including migrations from on-prem to cloud security services.' },
      { text: 'We can take on any new requirements that need to be assessed and mapped, including penetration testing, application security, identity & access management, security audits and more.' },
      { text: 'We can provide security operations analysts to support your SOC or Cyber Fusion Center with Cyber Hunt, threat intelligence, digital forensics, incident response and analysis of log data.' },
    ],
    servicesLabel: 'STAFF AUGMENTATION SERVICES',
    servicesTitle: 'We Have the Expertise to Enhance Your Security Staffing',
    servicesTitleHighlight: 'Security Staffing',
    servicesSubtitle: 'Explore our Staff Augmentation Offerings:',
    strategicTabLabel: 'STAFF AUGMENTATION',
    strategicTabDesc: 'We offer a robust solution for staffing needs with our team of industry cybersecurity experts who cover a wide range of security disciplines including engineering, security operations and information assurance requirements.',
    strategicServices: [
      { icon: 'bi-people', title: 'Staff Augmentation Services', description: 'Increase your staffing to prioritize cybersecurity objectives in a cost-effective manner.', slug: null },
      { icon: 'bi-person-badge', title: 'CISO as a Service', description: 'Leverage experienced cybersecurity, governance & risk professionals to build out & oversee your security program.', slug: null },
    ],
    outcomesLabel: 'STAFF AUGMENTATION OUTCOMES',
    outcomesTitle: 'Ramp Up Your Staffing to Cost-Effectively Meet Your Cybersecurity Needs',
    outcomesTitleHighlight: 'Ramp Up',
    outcomesSubtitle: 'Our staff augmentation service allows you to increase your organization\'s staffing capabilities for a set amount of time to accomplish your defined goals. Whether our staffing offering is used for a short-term project or for longer-term needs, we are vested in your cybersecurity strategy for the long haul and will work to increase the security maturity of your organization.',
    outcomes: [
      {
        title: 'Say Goodbye to Security Shelfware',
        description: 'Integrate & operationalize your technology capability, supporting the full security technology lifecycle, including migrations from on-prem to cloud security services.',
      },
      {
        title: 'Address New Security Needs',
        description: 'Assess & map new requirements to cyber capabilities, including pen testing, application security, identity & access management, security audits and more.',
      },
      {
        title: 'Enhance your SOC Capabilities',
        description: 'Leverage analysts to support your SOC or Cyber Fusion Center with Cyber Hunt, threat intelligence, digital forensics, incident response and analysis of log data.',
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Vulnerability Management & Pen Testing
  // ─────────────────────────────────────────────
  'vulnerability-management': {
    slug: 'vulnerability-management',
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/Vulnerability_Management_Pentesting-qzc0l222zpx81o6k4ulhgok2qegn1r1tblx2xmpp00.png',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Vulnerability_Management_and_Pentesting.png',
    heroTitle: 'Vulnerability Management & Penetration Testing Solutions',
    heroSubtitle: 'Identify and Prioritize Your Vulnerabilities for Effective Remediation — Before Attackers Can Leverage Them',
    heroCta: 'Evaluate Your Security',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/GPS_VM_PT_DS.pdf',
    statsLabel: 'VULNERABILITY MANAGEMENT & PENETRATION TESTING CHALLENGES',
    statsTitle: 'How are You Mitigating Risk and Ensuring Your Security Controls are Working Effectively?',
    statsIntro: 'Zero-day and known, unpatched vulnerabilities are among the top most common initial attack vectors. Having an efficient, repeatable vulnerability management program along with offensive security services such as penetration testing, that identify gaps and test your controls is an effective way to help prevent cyber attacks.',
    stats: [
      {
        value: '50%',
        label: 'of organizations experienced more than 39 Web application attacks this year',
        sourceName: 'Verizon 2023 Data Breach Investigations Report',
        circleImage: C1,
      },
      {
        value: '18%',
        label: 'Reduction in the cost of a data breach for organizations that deploy more intensive, risk-based analysis',
        sourceName: 'Ponemon Institute 2023 Cost of a Data Breach',
        circleImage: C2,
      },
    ],
    practiceLabel: 'THREAT & ATTACK SIMULATION PRACTICE',
    practiceTitle: 'Improve Your Defenses Against Any Adversary',
    practiceTitleHighlight: 'Improve Your',
    practiceDescription: [
      'Our Threat & Attack Simulation practice allows you to emulate an advanced adversary attacking your organization.',
      'From traditional vulnerability assessments and penetration tests to advanced services such as red teaming, social engineering, continuous penetration testing and breach and attack simulation, we enable you to test your defenses against any type of adversary.',
    ],
    commitmentLabel: 'OUR VULNERABILITY MANAGEMENT & PENETRATION TESTING COMMITMENT TO YOU',
    commitmentSubtitle: 'We will help you identify security weaknesses and test your controls by:',
    commitmentItems: [
      { text: 'Tailoring our vulnerability management and penetration testing offerings to your specific organizational goals, ensuring that we provide the most value based on your budget, objectives, time constraints and/or security program maturity levels.' },
      { text: 'Helping you navigate your political landscape, overcome technical hurdles and best position you to achieve your objectives.' },
      { text: 'Inventorying, demonstrating and prioritizing risks.' },
      { text: 'Identifying and addressing gaps in policies and procedures.' },
      { text: 'Helping you understand real-world business impacts.' },
      { text: 'Strengthening your security posture with realistic, actionable recommendations.' },
    ],
    servicesLabel: 'VULNERABILITY MANAGEMENT & PENETRATION TESTING SOLUTIONS',
    servicesTitle: 'Understand Your Security Gaps, Prioritize Risks and Improve Your Defenses',
    servicesTitleHighlight: 'Understand',
    servicesSubtitle: 'Identify & prioritize vulnerabilities & assess your organization\'s readiness to withstand an attack from the most advanced adversaries.',
    strategicTabLabel: 'THREAT EMULATION',
    tacticalTabLabel: 'TACTICAL ASSESSMENTS',
    complianceTabLabel: 'VULNERABILITY MANAGEMENT',
    managedTabLabel: 'MANAGED SECURITY',
    strategicTabDesc: 'Our team of highly-certified and vetted threat and attack simulation experts provides a wide range of vulnerability management and penetration testing services to help you prioritize risks and improve your defenses.',
    strategicServices: [
      { icon: 'bi-layers', title: 'Penetration Testing', description: 'Gain real-world results to understand vulnerabilities, threats & gaps, & prioritize security investments.', path: '/services/vulnerability-management' },
      { icon: 'bi-cloud-arrow-up', title: 'Cloud Penetration Testing', description: 'Identify current & emerging cloud-specific threats to your environment.', path: '/services/cloud-security-assessments' },
      { icon: 'bi-hdd-network', title: 'ICS Penetration Testing', description: 'Bridge the IT & OT gap and gain a holistic view of your ICS security posture.', path: '/services/ot-security' },
      { icon: 'bi-person-gear', title: 'Social Engineering', description: 'Use in-depth reconnaissance & hand-crafted campaigns to reveal realistic responses.', path: '/services/security-awareness' },
      { icon: 'bi-people', title: 'Red Team Assessments', description: 'Sophisticated, multi-pronged attack simulation to identify threats before an adversary does.', path: '/services/vulnerability-management' },
      { icon: 'bi-arrow-left-right', title: 'Purple Team Assessments', description: 'Prepare your security team for real-world attacks without the risk of an actual incident.', path: '/services/vulnerability-management' },
    ],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    gpvueTabs: ['strategic', 'tactical', 'managed'],
    tacticalServices: [
      { icon: 'bi-file-earmark-check', title: 'Active Directory Security Review', description: 'Gain a baseline security audit of your AD environment & its key services.', path: '/services/iam' },
      { icon: 'bi-arrow-repeat', title: 'Application Vulnerability Scan', description: 'Evaluate your attack surface & gain insight into vulnerabilities inherent to your applications.', path: '/services/application-security-assessment' },
      { icon: 'bi-arrow-left-right', title: 'IoT Vulnerability Assessments', description: 'Gain an in-depth architectural review of your IoT ecosystem.', path: '/services/ot-security' },
      { icon: 'bi-phone', title: 'Wireless Security Assessments', description: 'Ensure a secure wireless network built for productivity.', path: '/services/network-security' },
    ],
    complianceServices: [
      { icon: 'bi-search', title: 'Vulnerability Management Services', description: 'Optimize your vulnerability management program and toolset through a risk-based approach.', path: '/services/vulnerability-management' },
    ],
    managedServices: [
      { icon: 'bi-arrow-clockwise', title: 'Breach & Attack Simulation as a Service', description: 'Fully managed threat intelligence program from conception to execution.', path: '/services/managed-security' },
      { icon: 'bi-arrow-repeat', title: 'Penetration Testing as a Service', description: 'Combine the power of manual & automated penetration testing.', path: '/services/vulnerability-management' },
      { icon: 'bi-shield-check', title: 'Vulnerability Management as a Service', description: 'Our experts identify critical assets, threats & vulnerabilities to close gaps.', path: '/services/vulnerability-management' },
    ],
    outcomesLabel: 'VULNERABILITY MANAGEMENT & PENETRATION TESTING OUTCOMES',
    outcomesTitle: 'A Fundamental Component of Your Security Program',
    outcomesTitleHighlight: 'A Fundamental Component',
    outcomesSubtitle: 'The combination of an efficient, repeatable vulnerability management program and threat and attack simulation services can help identify and prevent cyber attacks.',
    outcomes: [
      {
        title: 'Understand Security Gaps',
        description: 'Identify security gaps & emulate adversary tactics to strengthen security policies & procedures',
      },
      {
        title: 'Prioritize Security Risks',
        description: 'Know where your greatest risks are at all times & implement the right controls',
      },
      {
        title: 'Strengthen Your Security Posture',
        description: 'Gain realistic, actionable recommendations to shore up vulnerabilities and weak security controls',
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

  // ─────────────────────────────────────────────
  // Operational Technology (OT) Security
  // ─────────────────────────────────────────────
  'ot-security': {
    slug: 'ot-security',
    icon: 'bi-gear-wide-connected',
    heroBgImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Page_OT_Security.png',
    heroTitle: 'Operational Technology (OT) Security Services',
    heroSubtitle: 'Secure Your Critical Infrastructure',
    heroCta: 'Talk to an Expert',
    heroCtaLink: '/contact',
    heroSecondaryCta: 'Download Datasheet',
    heroSecondaryCtaLink: '#',
    statsLabel: 'OPERATIONAL TECHNOLOGY SECURITY CHALLENGES',
    statsTitle: 'How Are You Securing An Interconnected IT And OT Environment?',
    statsIntro: 'The convergence of OT and traditional IT infrastructure has led to easier operational oversight, but it also introduces new avenues for attackers to exploit.',
    stats: [
      { value: '70%', label: 'of industrial organizations have experienced a cyberattack in the past year', circleImage: C1, sourceName: 'ABi Research: State of OT Security Survey Report 2024', sourceContext: '', sourceLink: '' },
      { value: '72%', label: 'of attacks targeting the OT originate from IT', circleImage: C2, sourceName: 'ABi Research: State of OT Security Survey Report 2024', sourceContext: '', sourceLink: '' },
      { value: '40%', label: 'of survey respondents say that their OT and IT teams are frictional', circleImage: C3, sourceName: 'ABi Research: State of OT Security Survey Report 2024', sourceContext: '', sourceLink: '' },
    ],
    practiceLabel: 'OPERATIONAL TECHNOLOGY SECURITY PRACTICE',
    practiceTitle: 'Operational Technology is the Heartbeat that Keeps Your Business Running',
    practiceTitleHighlight: 'Operational Technology',
    practiceDescription: [
      'Traditionally, OT was kept separate and isolated from the IT infrastructure, which reduced the attack surface, but made management difficult and costly. Today, while combining IT and OT (Industry 4.0) introduces new features and easier management, this interconnectivity also creates new vulnerabilities and openings for attack that require mitigation.',
      'Our operational technology security practice provides proactive solutions to address OT security challenges. With our tailored solutions and services, you can gain a holistic view of the security posture of your OT environment.',
    ],
    outcomesLabel: 'OT SECURITY OUTCOMES',
    outcomesTitle: 'Gain Holistic Visibility Of Your OT Security Posture',
    outcomesTitleHighlight: 'Gain',
    outcomesSubtitle: 'Our OT Security services are tailored for your unique use cases to understand your current state and to reduce risk through targeted assessments and by building a defensible OT and network architecture.',
    outcomes: [
      { title: 'Identify Security Gaps', description: 'Assess and uncover security weaknesses in your OT environment.' },
      { title: 'Assess Your OT Security Program', description: 'Gain insights into your current program status and understand areas to improve.' },
      { title: 'Validate Security Controls', description: 'Ensure existing security controls can mitigate risk and identify where to add other controls.' },
    ],
    servicesLabel: 'OT SECURITY SERVICES',
    servicesTitle: 'Results-Oriented OT Security Offerings',
    servicesTitleHighlight: 'Results-Oriented',
    servicesSubtitle: 'Explore our operational technology security services:',
    strategicTabDesc: 'Our team helps assess your OT security program maturity, provides expertise on relevant cybersecurity technologies, helps build your OT architecture and identifies security weaknesses through OT Penetration Testing.',
    gpvueTabs: ['strategic'],
    gpvueCard: {
      description: 'Also available through our integrated Managed Security Services Program',
      link: '/gpvue',
    },
    strategicServices: [
      { icon: 'bi-clipboard-check', title: 'OT Security Program Review', description: 'Evaluate and measure your OT cybersecurity program and its maturity level and create a plan to build or enhance your existing program to scale to your organization\'s unique requirements.', slug: 'ot-security' },
      { icon: 'bi-arrow-repeat', title: 'OT Architecture Review', description: 'Analyze your existing infrastructure and create a plan to build a defensible architecture and network and reduce as much risk as possible through system design and implementation.', slug: 'ot-security' },
      { icon: 'bi-bug', title: 'OT Penetration Testing', description: 'Go beyond a typical OT and ICS pentest by combining best-in-class IT and OT pentesting methodologies to achieve a holistic offering that will assess all security aspects of your environment.', slug: 'ot-security' },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/nuance-logo.png',
      personImage: '/images/testimonials/mark-gilman.png',
    },
  },

};

export default serviceCategories;
