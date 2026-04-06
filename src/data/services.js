const services = {
  'application-security': {
    title: 'Application Security',
    icon: 'bi-diamond',
    tagline:
      'Identify & Assess Application Security Weaknesses',
    heroLabel: 'Application Security Architecture Review',
    heroHighlight: 'Identify & Assess',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/application-security-as-a-service.jpg',
    description:
      'Conduct an architectural review of your web and cloud-based applications to identify security flaws, mitigate risk and strengthen your AppSec posture.',
    stats: [
      { number: '90%', label: 'of breaches involve application vulnerabilities' },
      { number: '30K+', label: 'application assessments completed' },
      { number: '48hr', label: 'average time to critical finding' },
    ],
    useCases: {
      label: 'Application Security Architecture Review Timing',
      title: 'When to Perform an Application Security Architecture Assessment',
      titleHighlight: 'Architecture Assessment',
      subtitle:
        'It is more cost effective to conduct AppSec architecture reviews during the design stage of the software development lifecycle instead of after development has already begun. Application Security Architecture Reviews are often performed after:',
      items: ['Suffering an application security breach', 'Planning an application redesign', 'Identifying application vulnerabilities', 'Changing the network environment', 'Undergoing expansion, merger or acquisition'],
    },
    splits: [
      {
        label: 'AppSec Architecture Review Overview',
        title: 'Strengthen Your AppSec Architecture',
        titleHighlight: 'Strengthen',
        paragraphs: [
          "In today's hyper-connected world, software applications are core to accomplishing daily operational tasks. As such, they are frequently targeted by threat actors who seek to exploit vulnerabilities within your application code.",
          'By regularly conducting application security architecture assessments as part of your ongoing software design and development processes, you can ship software that is free of security vulnerabilities, coding errors and architectural flaws that could expose company and customer data.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'AppSec Architecture Review Process',
        title: 'Implement Application Security Controls From the Start',
        titleHighlight: 'Implement',
        paragraphs: [
          "Our team of application security engineers focuses on understanding the business context and risk profile of your application's architecture documents, input validation, authentication and authorization, as well as your application's framework and libraries including:",
        ],
        image: '/overview-icon-left.png',
        checklist: [
          'Deployment & Infrastructure',
          'Input Validation',
          'Authentication',
          'Authorization',
          'Configuration Management',
          'Sensitive Data',
          'Session Management',
          'Cryptography',
          'Parameter Manipulation',
          'Exception Management',
          'Auditing & Logging',
        ],
      },
      {
        label: 'AppSec Technology Review Experience',
        title: 'Leverage our Deep AppSec Experience',
        titleHighlight: 'Leverage',
        paragraphs: [
          'With all the moving parts that go into a full security program, staying on top of secure application development and your overall Application Security can be a difficult task.',
          'Our team of AppSec experts designs and develops top-tier application security programs and conducts vulnerability and risk assessments to meet your unique security needs.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      {
        title: 'Application Security Architecture Review',
        description: 'Identify & assess application security weaknesses',
      },
      {
        title: 'Application Security Program Assessment',
        description: 'Improve application security posture through SDLC',
        path: '/services/secure-sdlc-program-review',
      },
    ],
    tactical: [
      { title: 'Application Security Assessments', description: 'Understand your attack surface through testing', path: '/services/application-security-assessment' },
      {
        title: 'AI-augmented Application Security Services',
        description: 'Enhance application security assessments by incorporating AI with expert oversight.',
        path: '/services/ai-augmented-application-security',
      },
      {
        title: 'Mobile Application Security Assessment',
        description: 'Provide an accurate understanding of mobile risk',
        path: '/services/mobile-application-security-assessment',
      },
      {
        title: 'Source Code Review',
        description: 'Evaluate applications for critical security issues',
        path: '/services/source-code-review',
      },
    ],
    managed: [
      {
        title: 'Application Security as a Service',
        description: 'AppSec tooling expertise to identify vulnerabilities & provide remediation recommendations',
        path: '/services/application-security-as-a-service',
      },
    ],
    training: [
      {
        title: 'Application Threat Modeling Training',
        description: 'Learn how to create applications that are secure by design',
        path: '/services/application-threat-modeling',
      },
      {
        title: 'Secure Development Training',
        description: 'Learn how to design & code secure web solutions',
      },
      {
        title: 'AI Security With a Focus on Large Language Models Training',
        description: 'Learn AI and LLM application security fundamentals',
        path: '/services/ai-security-large-language-models',
      },
      {
        title: 'Fundamentals of Reconnaissance and Attack Surface Analysis Training',
        description: 'Learn reconnaissance and attack surface analysis for effective web app testing',
        path: '/services/fundamentals-of-reconnaissance-and-attack-surface-analysis',
      },
    ],
    outcomesSection: {
      label: 'Application Security Architecture Review Outcomes',
      title: 'Reduce Software Security Risk',
      titleHighlight: 'Reduce',
      subtitle:
        'Our AppSec Architecture Review service is tailored for your unique use cases to reduce risk, improve cost savings and support the maturation of your application security program.',
    },
    outcomes: [
      {
        iconImage: '/images/icons/scale-appsec.png',
        title: 'Prevent Coding Errors',
        description:
          'Catch coding errors early in the software development lifecycle to mitigate security risks.',
      },
      {
        iconImage: '/images/icons/save-spending.png',
        title: 'Reduce AppSec Dev Costs',
        description:
          'Avoid costly re-work, time-consuming security fixes & delays in software development.',
      },
      {
        iconImage: '/images/icons/expand-testing.png',
        title: 'Eliminate Software Exploits',
        description:
          'Prevent cybercriminals from exploiting security vulnerabilities in your application code.',
      },
      {
        iconImage: '/images/icons/improve-compliance.png',
        title: 'Ship Secure Software',
        description:
          'Accelerate the delivery of secure software across your legacy & modern application portfolio.',
      },
    ],
    testimonial: {
      quote:
        'CyberPoint\'s application security team found critical vulnerabilities that our internal scans completely missed. Their remediation guidance was actionable and clear.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: '/logos/nuance.png',
    },
  },

  'secure-sdlc-program-review': {  // heroImage: local → /images/heroes/application-security-as-a-service.jpg
    parentService: 'application-security',
    title: 'Application Security Program Assessment',
    icon: 'bi-diamond',
    tagline: 'Ensure a Holistic Application Security Strategy',
    heroLabel: 'APPLICATION SECURITY PROGRAM ASSESSMENT',
    heroHighlight: 'Holistic',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/application-security-as-a-service.jpg',
    description:
      "Assess the state of your application security program and communicate a roadmap of key initiatives to improve your program\u2019s maturity from IT and compliance to development and security.",
    useCases: {
      label: 'APPLICATION SECURITY PROGRAM ASSESSMENT OVERVIEW',
      title: 'Accelerate Your Application Security Program Maturity',
      titleHighlight: 'Program Maturity',
      subtitle:
        'A holistic software security strategy begins with an understanding of the current state, a vision of the future state and a roadmap of initiatives to get there. This strategy is supported by policies, procedures, standards, tools, governance and training. Our team works with customers to understand their current state\u2014including strengths and areas of improvement\u2014and help lay a tailored, holistic AppSec strategy meant to:',
      items: [
        'Identify and Manage Application Risk',
        'Balance Business Objectives and Innovation',
        'Measure Compliance and Governance',
      ],
    },
    splits: [
      {
        label: 'APPLICATION SECURITY PROGRAM ASSESSMENT APPROACH',
        title: 'Take a Universal Approach to Application Security',
        titleHighlight: 'Universal Approach',
        paragraphs: [
          'We leverage concepts from the OWASP Software Assurance Maturity Model (SAMM), the Scaled Agile Framework (SAFe) CALMR model and our own experience in performing application security program assessments across all industries to align your program to leading practices. You can be confident that we will review all components of your program and provide you with expert guidance.',
          'As part of the AppSec program assessment, we can accelerate the adoption of your program and kick off roadmap initiatives by leveraging our professional services and Application Security as a Service (ASaaS) offerings.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'Universal AppSec Approach',
      },
      {
        label: 'APPSEC PROGRAM ASSESSMENT DELIVERABLES',
        title: 'Actionable Analysis of Your Application Security Program',
        titleHighlight: 'Analysis',
        paragraphs: [
          'Every Application Security Program Assessment engagement includes the following deliverables:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'AppSec Deliverables',
        checklist: [
          'Executive Summary – A high-level overview of the analysis as well as recommendations to improve your application security posture',
          'Current State Summary – A summary of the current state of your AppSec Program based on documentation, stakeholder interviews and review of supporting technology',
          'Observations and Recommendations – Detailed feedback on strengths, recommendations and observations based on the OWASP SAMM or NIST SSDF framework',
          'Future State Summary – A summary of the proposed future state of your Application Security Program',
          'Roadmap of Key Initiatives – A three-year roadmap of recommended key initiatives to improve the maturity of your program, including prioritization of activities',
        ],
      },
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: 'Global Information Assurance',
        certs: [
          { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GIAC GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GIAC GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'APPSEC PROGRAM ASSESSMENT OUTCOMES',
      title: 'Gain a Comprehensive Review of Your Application Security Program',
      titleHighlight: 'Comprehensive Review',
      subtitle:
        "Our Application Security Program Assessment ensures a comprehensive view of your organization\u2019s security strategies, from the foundational policies and procedures to the practical implementation across various stages of the SDLC.",
    },
    outcomes: [
      {
        title: 'Benchmark Your Security Posture',
        description:
          'Align security measures against an industry framework and best practices.',
      },
      {
        title: 'Uplift Your Security Posture',
        description:
          'Gain a more resilient and adaptive security culture within your organization.',
      },
      {
        title: 'Build a Strategic Roadmap',
        description:
          'Develop a 3-year roadmap for continuous improvement and AppSec maturity.',
      },
    ],
    testimonial: {
      quote:
        'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'application-security-as-a-service': {
    parentService: 'application-security',
    title: 'Application Security as a Service',
    icon: 'bi-diamond',
    tagline: 'Automate and Manage Your Application Security Program',
    heroLabel: 'APPLICATION SECURITY AS A SERVICE',
    heroHighlight: 'Automate and Manage',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/application-security-as-a-service.jpg',
    description:
      'With our AppSec as a Service offering, you can maximize the value of your AppSec tooling, identify vulnerabilities and provide actionable remediation recommendations to ensure a successful Application Security Program.',
    useCases: {
      label: 'APPLICATION SECURITY AS A SERVICE OVERVIEW',
      title: 'Ensure Optimal AppSec Program Health',
      titleHighlight: 'Optimal',
      subtitle:
        'Your AppSec solutions require significant bandwidth and the right skill set to properly manage. Our Application Security as a Service offering scales up or down based on your unique requirements for application security\u2014from leveraging our team to help with implementation or integration assistance to full application security program support. Our Application Security as a Service program can help you:',
      items: [
        'Optimize and Automate Your Environment to Deliver a Scalable and Effective Testing Approach',
        'Perform Software Upgrades, Troubleshooting, Onboarding and Comprehensive Testing of Applications',
        'Validate Findings and Work With Development Teams and Provide Remediation Recommendations',
        'Integrate With Source Code Management, IDE, Ticketing, Monitoring and Incident Response Platforms',
      ],
    },
    splits: [
      {
        label: 'APPLICATION SECURITY AS A SERVICE EXPERTISE',
        title: 'We Can Manage Your Application Security Tools and Overall Program',
        titleHighlight: 'Manage',
        paragraphs: [
          'Our team provides expert management, configuration and optimization of your AppSec tooling environment. We support the full suite of application security testing technologies:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'AppSec Tool Management',
        checklist: [
          'Software Composition Analysis (SCA)',
          'Static Application Security Testing (SAST)',
          'Dynamic Application Security Testing (DAST)',
          'Interactive Application Security Testing (IAST)',
          'Run-Time Application Self Protection (RASP)',
          'Next-Gen Web Application Firewall (NGWAF)',
        ],
      },
      {
        label: 'APPSEC AS A SERVICE USE CASES',
        title: 'Ensure Application Security and Speed Development',
        titleHighlight: 'Ensure',
        paragraphs: [
          'Among the most important use cases that are ideal for Application Security as a Service are:',
        ],
        cards: [
          {
            title: 'Acceleration of Application Security Programs',
            description: 'Quickly launch application security without requiring investment in infrastructure.',
          },
          {
            title: 'In-Depth Security Experience',
            description: 'Achieve quicker remediation at each point along your software development lifecycle.',
          },
          {
            title: 'Evolved Software Supply Chain Security',
            description: 'Enjoy a greater level of confidence around the components used to develop your applications.',
          },
          {
            title: 'DevSecOps',
            description: 'Allow your developers to code quicker — all without having to sacrifice any quality.',
          },
          {
            title: 'Entwine AppSec Into Your Organization',
            description: 'Seamlessly scale from a single application to hundreds or even thousands.',
          },
          {
            title: 'Cloud Transformation',
            description: 'Ensure expertise to help with cloud-native applications or those in the early stages of modernization.',
          },
        ],
      },
      {
        label: 'APPLICATION SECURITY AS A SERVICE TIERS',
        title: 'Tiered Service Offering',
        titleHighlight: 'Tiered',
        imageLeft: true,
        paragraphs: [
          'Our AppSec as a Service offering is tiered based upon the following criteria so that you can achieve your application security goals in a budget- and resource-friendly manner:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'AppSec Service Tiers',
        checklist: [
          'The amount of configuration or implementation needed (if any)',
          'The amount of code or number of applications and approximate number of retests per month, quarter or year',
          'Duration of service',
          'Desired workflow and automation integrations into your IDE and/or CI/CD Pipeline',
          'If your Application Security tool environment is on-prem or in your own cloud environment, we can manage it from end to end',
        ],
        tierCards: [
          {
            title: 'Basic',
            items: [
              'Basic code scanning',
              'Triage and false positive analysis',
              'Review of results',
              'Remediation advice',
              'Management and operations',
              'Reporting and metrics',
            ],
          },
          {
            title: 'Standard (Includes Basic Services)',
            items: [
              'Rule tuning',
              'Toolset optimization',
              'Integration with IDE',
              'Integration with CMDB and/or source code repository',
              'Integration with ticketing',
              'Project management support',
            ],
          },
          {
            title: 'Premium (Includes Standard Services)',
            items: [
              'Integration and automation within Secure SLDC and/or CI/CD process',
              'Integration with SIEM',
              'Integration with Vulnerability Management',
              'Vulnerability correlation and risk scoring',
              'Dedicated program manager',
            ],
          },
        ],
      },
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: 'Global Information Assurance',
        certs: [
          { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GIAC GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GIAC GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'APPLICATION SECURITY AS A SERVICE OUTCOMES',
      title: 'Maximize Your Application Security Landscape',
      titleHighlight: 'Maximize',
      subtitle:
        'Our Application Security as a Service allows your organization to invest in the long-term and robust security of applications while speeding up the rate at which you develop your applications.',
    },
    outcomes: [
      {
        title: 'Achieve Cost Savings',
        description: 'Leverage AppSec consultants and extend your team vs hiring in-house specialists.',
      },
      {
        title: 'Gain In-Depth Analysis',
        description: 'Understand the security of your critical applications and mitigate risk.',
      },
      {
        title: 'Expand Testing Coverage',
        description: 'Ensure comprehensive testing across your application portfolio.',
      },
      {
        title: 'White-Glove Service',
        description: 'Tailored approach to meet your unique AppSec needs and SLAs.',
      },
    ],
    testimonial: {
      quote:
        'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'ai-augmented-application-security': {
    parentService: 'application-security',
    title: 'AI-augmented Application Security Services',
    icon: 'bi-cpu',
    tagline: 'Revolutionizing Application Security with Agentic Workflows',
    heroLabel: 'AI-AUGMENTED APPLICATION SECURITY SERVICES',
    heroHighlight: 'Revolutionizing',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/ai-augmented-application-security-ai.jpg',
    description:
      'Artificial Intelligence (AI) meets human expertise to reveal vulnerabilities, validate results and ensure secure, scalable application development.',
    useCases: {
      label: 'THE APPLICATION SECURITY LANDSCAPE',
      title: 'The Mounting Risks of Application Development at Scale',
      titleHighlight: 'Mounting Risks',
      subtitle:
        "Today\u2019s organizations face unprecedented challenges in developing secure applications at enterprise scale. As development velocity increases and architectures grow more complex, traditional application security approaches struggle to keep pace and can even create security gaps and increase business risk.",
      subtitle2:
        "At GuidePoint Security, we offer AI-augmented application security services to help you overcome these challenges more efficiently and effectively. Our services address the most pressing risks in modern application development:",
      cards: [
        {
          title: 'AI-driven Threats',
          description: 'Attackers leveraging AI now create advanced malware and exploit vulnerabilities faster than traditional security teams can respond.',
        },
        {
          title: 'Regulatory Pressure',
          description: 'Changing compliance requirements (e.g., GDPR, PCI DSS, HIPAA) make it challenging to ensure solutions meet standards while maintaining development speed.',
        },
        {
          title: 'Third-party Risks',
          description: 'Increasing reliance on third-party integrations and APIs introduces additional vulnerabilities that traditional security testing may miss.',
        },
      ],
    },
    splits: [
      {
        label: 'SECURE APPLICATIONS AT SCALE WITH AI-AUGMENTED APPLICATION SECURITY SERVICES',
        title: 'AI + Human Expertise: The Future of Application Security, Delivered Today',
        titleHighlight: 'Future',
        paragraphs: [
          'Improve and accelerate application security assessments by combining AI-driven insights with expert analysis and oversight.',
          'AI-augmented application security enhances traditional application security assessments by combining artificial intelligence with expert oversight to improve both efficiency and effectiveness.',
        ],
        showAll: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/06/AI_icon-Triangle_elementor-rt.png',
        imageAlt: 'AI AppSec',
        splitCards: [
          {
            items: [
              'Faster Reviews: Accelerate the review of large source code and documentation repositories by 40-60% through AI-powered analysis',
              'In-depth Analysis: Identify application security vulnerabilities, flaws and weaknesses through GuidePoint\'s proprietary agentic workflows',
            ],
          },
          {
            items: [
              'Expert Results: Maintain expert oversight and reduce false positives through human validation of AI-generated results',
              'Actionable Guidance: Receive detailed reports with technical analysis and executive summaries to swiftly remediate issues while providing proof of application security program effectiveness',
            ],
          },
          {
            stat: '40-60%',
            statText: 'faster detection of vulnerabilities, security flaws and weaknesses in source code with fewer false positives.',
            link: { text: 'Learn More', href: '/services/ai-augmented-application-security' },
          },
        ],
      },
      {
        label: 'AI-AUGMENTED APPLICATION SECURITY USE CASES',
        title: 'Architectural Intelligence. Security By Design.',
        titleHighlight: 'Intelligence',
        paragraphs: [
          'Analyze, identify and address potential security flaws across your application architecture, threat models and source code using proprietary agentic AI workflows combined with expert human oversight.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Security_Awareness_and_Education_Left.png',
        imageAlt: 'AI Use Cases',
        inlineItems: [
          {
            title: 'Application Architecture Reviews at Scale',
            description: 'Analyze application architecture and design documents to identify potential security flaws and weaknesses in the application architecture using proprietary agentic AI workflows.',
            why: 'Why AI-augmented? Agentic workflows can systematically evaluate architectural components, data flows and security controls against established security principles and best practices, while application security consultants validate findings and provide contextual remediation guidance.',
          },
          {
            title: 'Deeper Application Threat Modeling',
            description: 'Use agentic AI workflows to analyze application architectures, identify potential attack vectors and systematically model threats against applications.',
            why: 'Why AI-augmented? AI can automate and accelerate the threat modeling process, map threats to STRIDE categories, analyze attack paths and correlate vulnerabilities with threat scenarios under continuous consultant supervision.',
          },
          {
            title: 'Automated Secure Code Reviews',
            description: 'Conduct an AI-driven security assessment of application source code using advanced reasoning that evolves beyond traditional static ruleset-based approaches.',
            why: 'Why AI-augmented? Agentic workflows can perform initial vulnerability detection using sophisticated analysis patterns, while human reviewers validate findings, investigate false positives and conduct targeted manual review of complex code sections requiring contextual analysis.',
          },
        ],
      },
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: '',
        certs: [
          { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line-e1759849674861.png' },
          { name: 'GIAC GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GWAPT-PenTester-Line-e1759849692152.png' },
        ],
      },
    ],
    outcomesEarly: true,
    industrySection: {
      label: 'WHO NEEDS AI-AUGMENTED APPLICATION SECURITY SERVICES?',
      title: 'Who Needs AI-augmented Application Security Services?',
      subtitle: 'Organizations scaling application development face security challenges that outpace human capabilities. When speed matters but security can\'t be compromised, AI-augmented application security becomes essential.',
      industries: [
        { title: 'Financial Services', description: 'Protect customer assets and transaction integrity while meeting evolving regulatory requirements with automated compliance verification.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-01.svg' },
        { title: 'Healthcare', description: 'Safeguard sensitive patient data against sophisticated threats while maintaining HIPAA compliance and ensuring clinical application reliability.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-02.svg' },
        { title: 'Retail & E-commerce', description: 'Defend payment systems and customer data across complex digital storefronts with continuous security that scales with seasonal demands.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-03.svg' },
        { title: 'Government & Defense', description: 'Shield critical infrastructure and classified information with advanced threat detection that stays ahead of nation-state adversaries.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-04.svg' },
        { title: 'Technology', description: 'Secure your intellectual property and maintain customer trust with development practices that make security an accelerator, not a bottleneck.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-05.svg' },
        { title: 'Energy & Utilities', description: 'Protect operational technology from increasingly targeted attacks with security that bridges IT/OT boundaries without disrupting essential services.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-06.svg' },
        { title: 'Education', description: 'Defend institutional and student data across diverse, distributed environments despite limited cybersecurity resources and expanding attack surfaces.', icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AI-Augmented_Icons-07.svg' },
      ],
    },
    outcomesSection: {
      label: 'AI-AUGMENTED APPSEC OUTCOMES',
      title: 'Fight AI with AI',
      titleHighlight: 'Fight',
      subtitle:
        "As threat actors weaponize artificial intelligence, organizations must adopt equally sophisticated defenses. AI-augmented application security services represent the next evolution of modern software defense. But nothing replaces human expertise. That\u2019s why we strategically apply human-validated AI to extend your team\u2019s capabilities, enabling them to secure increasingly complex applications against increasingly sophisticated threats.",
    },
    outcomes: [
      {
        title: 'Seamless DevSecOps Integration',
        description:
          'Maintain secure code delivery at scale with seamlessly embedded AI-powered vulnerability detection and automated secure coding guidance.',
      },
      {
        title: 'Integrated Threat Intelligence',
        description:
          'Harness intelligent threat correlation that prioritizes vulnerabilities based on real-world exploit patterns and predicts emerging risks specific to your applications.',
      },
      {
        title: 'Augmented Security Teams',
        description:
          "Multiply your security team\u2019s impact with AI-driven, human-validated analysis that automates triage, reduces false positives and provides actionable remediation guidance.",
      },
      {
        title: 'AI-powered Defenses',
        description:
          'Counter AI-powered threats with advanced defenses that outpace adversarial techniques, automated exploits and sophisticated social engineering attacks targeting your developers.',
      },
    ],
    testimonial: {
      quote:
        "GuidePoint Security is basically family. They\u2019re always there when I need them. At the end of the day GuidePoint is always there to help and that\u2019s how they add value.",
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'application-security-assessment': {
    parentService: 'application-security',
    title: 'Application Security Assessments',
    icon: 'bi-diamond',
    tagline: 'Comprehensive Application Security Testing that Goes Beyond Automation',
    heroLabel: 'APPLICATION SECURITY ASSESSMENTS',
    heroHighlight: 'Comprehensive',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/source-code-review.jpg',
    description:
      'Identify and verify application security risks within modern applications, back-end web services or thick clients by leveraging manual and automated application security assessments.',
    useCases: {
      label: 'APPLICATION SECURITY ASSESSMENT OVERVIEW',
      title: 'Prioritized Application Security Analysis and Recommendations',
      titleHighlight: 'Application Security',
      subtitle:
        'Since our time is finite, priority is given during testing efforts to areas of an application that, if compromised, would be of the most value for an adversary or could have the largest impact if compromised. Our Application Security Assessments are designed to:',
      items: [
        'Identify critical vulnerabilities within an application',
        'Allow you to easily comprehend the results',
        'Supply evidence and detailed reproduction steps',
        'Arm you with information to take action and remediate issues',
      ],
    },
    splits: [
      {
        label: 'APPLICATION SECURITY ASSESSMENT COVERAGE',
        title: 'Full Application Security Assessment Coverage',
        titleHighlight: 'Assessment',
        paragraphs: [
          "We aren't just here to identify application vulnerabilities and hand you a report. Our application security analysis and testing allows you to make your applications highly resilient to security threats. As part of our application security services, we help you identify weaknesses and security vulnerabilities that are present in your application's source code.",
          'Our application security assessments include issues from categories including, but not limited to:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'AppSec Coverage',
        splitCards: [
          {
            items: [
              'Authentication & Authorization',
              'Data in Transit & at Rest',
              'Session Handling',
              'Information Disclosure',
            ],
          },
          {
            items: [
              'Misconfiguration Issues',
              'Logic Flaws',
              'Client-Side Issues',
              'Injection Flaws',
            ],
          },
        ],
      },
      {
        label: 'APPLICATION SECURITY TESTING METHODOLOGY',
        title: 'Dynamic Application Security Analysis & Testing',
        titleHighlight: 'Dynamic',
        paragraphs: [
          'Our application security testing goes beyond a simple manual process. We use a combination of application security software and application security tools to largely automate our software security testing and analysis process.',
          'Our process involves:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'Dynamic AppSec Testing',
        checklist: [
          "Inspecting your application's source code during runtime to identify vulnerabilities such as issues with query strings, memory leaks, problems with authentication and data and DOM injection",
          'Providing a comprehensive analysis of the results generated by our tests that will report on risks identified in your proprietary source code, open source dependencies, runtime vulnerabilities and APIs',
        ],
      },
      {
        label: 'APPLICATION SECURITY ASSESSMENT DELIVERABLES',
        title: 'Analysis You Can Trust',
        titleHighlight: 'Trust',
        showAll: true,
        paragraphs: [
          'After we perform an Application Security Assessment, you can expect to receive:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Right.png',
        imageAlt: 'AppSec Deliverables',
        checklist: [
          'Executive Summary – An overview of the findings that is written for management, providing a high-level analysis of the engagement, identified findings and actionable recommendations',
          'Technical Analysis – Provides a detailed account of all findings for technical personnel, including identified findings, associated severity level and specific remediation recommendations',
        ],
      },
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: 'Global Information Assurance',
        certs: [
          { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GIAC GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GIAC GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'APPLICATION SECURITY ASSESSMENT OUTCOMES',
      title: 'Gain an In-Depth View of Your Application Security Landscape',
      titleHighlight: 'Gain',
      subtitle:
        "Our Application Security Assessments provide a balanced and thorough examination of an application's security that is tailored for your unique use cases to uncover a wide array of vulnerabilities.",
    },
    outcomes: [
      {
        title: 'Efficiently Identify Vulnerabilities',
        description: 'Manual and automated testing is used to confirm risks across web applications, web services and APIs.',
      },
      {
        title: 'Gain Detailed Understanding of Risk',
        description: 'We ensure you understand the potential risk of each identified application vulnerability.',
      },
      {
        title: 'Fortify Your Applications',
        description: 'Harden your applications against a wide range of threats.',
      },
    ],
    testimonial: {
      quote:
        "GuidePoint Security is basically family. They're always there when I need them. At the end of the day GuidePoint is always there to help and that's how they add value.",
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'mobile-application-security-assessment': {
    parentService: 'application-security',
    title: 'Mobile Application Security Assessment',
    icon: 'bi-phone',
    tagline: 'Testing Way Beyond Automation',
    heroLabel: 'MOBILE APPLICATION SECURITY ASSESSMENT',
    heroHighlight: 'Testing',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/source-code-review.jpg',
    description:
      'Identify and verify application security risks within mobile applications using real-world scenarios and proven testing standards to ensure a secure and reliable mobile experience.',
    useCases: {
      label: 'MOBILE APPLICATION SECURITY ASSESSMENT OVERVIEW',
      title: 'Simulate an Adversary\'s Approach for Attacking a Mobile Application',
      titleHighlight: 'Simulate',
      subtitle:
        'While mobile apps drive the modern world, they should be done without introducing risk to end users. Our Mobile Application Security Assessments (MASAs) provide a thorough assessment of a mobile application, covering both the installed application as well as its backend components—with the goal of identifying and addressing vulnerabilities ranging in severity.',
      cards: [
        {
          title: 'Real-World Scenarios and Proven Testing Standards',
          description: 'We can simulate an adversary\'s approach for attacking a mobile application or accessing sensitive data on users\' mobile devices.',
        },
        {
          title: 'Methodology and Process',
          description: 'We leverage a four-phased approach to gather information, test, verify and notify—allowing us to provide an accurate understanding of actual risk.',
        },
      ],
    },
    splits: [
      {
        label: 'MOBILE APPLICATION SECURITY TESTING',
        title: 'The Art of Testing Mobile Applications',
        titleHighlight: 'Art',
        paragraphs: [
          'MASAs are run from and connected to a customized assessment environment, consisting of wireless access points, proxies and a variety of commercial and custom mobile application security testing tools.',
          'Given the nature of modern iOS and Android mobile apps, we perform extensive manual mobile application security assessments. We validate any identified communication channels for proper confidentiality and integrity, monitoring the application execution on the device(s).',
          'Our mobile application security risk assessments also examine the device from a high-level, forensic perspective in order to identify areas where the app may be storing or caching sensitive information in an insecure manner.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'Mobile App Testing',
        splitCardsHeader: {
          label: 'MOBILE APPLICATION SECURITY TESTING',
          title: 'From Reverse Engineering to Deep Analysis & Penetration Testing',
          titleHighlight: 'Deep Analysis',
          description: 'After reverse-engineering the application binary to the furthest extent possible, we analyze it for information leakage or hard-coded secrets. Throughout our security testing of mobile apps, we map the back-end environment and test any in-scope components for vulnerabilities. Checks include vulnerabilities listed in the OWASP Top 10 Mobile Risks:',
        },
        splitCards: [
          {
            items: [
              'M1: Improper Platform Usage',
              'M2: Insecure Data Storage',
              'M3: Insecure Communication',
              'M4: Insecure Authentication',
            ],
          },
          {
            items: [
              'M6: Insecure Authorization',
              'M7: Client Code Quality',
              'M8: Code Tampering',
              'M9: Reverse Engineering',
              'M10: Extraneous Functionality',
            ],
          },
        ],
      },
      {
        label: 'MOBILE APPLICATION SECURITY ASSESSMENT USE CASES',
        title: 'Ensure Mobile Application Security Against Attacks',
        titleHighlight: 'Against Attacks',
        paragraphs: [
          'Common attack scenarios to consider include:',
          'It\'s also important to understand the severity and potential impact when explaining the vulnerability risk.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'Mobile Attack Scenarios',
        checklist: [
          'A lost or stolen device containing cached or stored user information',
          'Interception or modification of network traffic on a shared wireless network',
          'Attacks against backend web service endpoints',
          'User of the application within the view of others',
          'Attacks from another malicious application installed on the device',
        ],
      },
    ],
    certsDescription: [
      'Every member of GuidePoint\'s Application Security Practice offers a wealth of expertise stemming from years of relevant, real-world experience within the application layer from technical and strategic perspectives.',
      'We have a unique ability to understand the threats your applications face and can play a vital role in helping to mature or align your security posture.',
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: '',
        certs: [
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'MOBILE APPLICATION SECURITY ASSESSMENT OUTCOMES',
      title: 'Ensure Your Mobile Application Can Stand Up to Potential Threats',
      titleHighlight: 'Ensure',
      subtitle:
        'Our Mobile Application Security Assessment is designed to identify and address vulnerabilities of varying severity to safeguard against potential threats to both the users of the application and the application itself, ensuring a secure and reliable mobile experience.',
    },
    outcomes: [
      {
        title: 'Understand Your Security Posture',
        description: 'Gain a detailed evaluation of every facet of your application.',
      },
      {
        title: 'Prioritize Your Risk',
        description: 'Vulnerabilities are identified and addressed by severity.',
      },
      {
        title: 'Harden Your Application',
        description: 'Whether it\'s an attack against application users or the app itself.',
      },
      {
        title: 'Gain Stakeholder Trust',
        description: 'Users will enjoy a more dependable and secure mobile app experience.',
      },
    ],
    testimonial: {
      quote:
        "GuidePoint Security is basically family. They're always there when I need them. At the end of the day GuidePoint is always there to help and that's how they add value.",
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'application-threat-modeling': {
    parentService: 'application-security',
    title: 'Application Threat Modeling',
    icon: 'bi-diagram-3',
    tagline: 'A Proactive Approach to Application Security',
    heroLabel: 'APPLICATION THREAT MODELING',
    heroHighlight: 'Proactive Approach',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/application-security-as-a-service.jpg',
    description: 'We use application threat modeling solutions to help identify potential flaws and threats within your applications to create apps that are secure by design.',
    useCases: {
      label: 'APPLICATION THREAT MODELING OVERVIEW',
      title: 'Shift Left in the Software Development Lifecycle (SDLC)',
      titleHighlight: 'Shift Left',
      subtitle: 'Application threat modeling is a cost-effective way to "shift left" in the SDLC. We use application threat modeling solutions to help you identify design flaws and potential threats in your applications—before you spend time on the application or feature development—as well as developing effective compensating security controls to mitigate those threats. Our application threat modeling service supports and educates developers to better understand the application attack surface and where security controls are most needed.',
      cards: [
        { title: 'Reveal Application Security Risks' },
        { title: 'Identify Application Vulnerabilities' },
        { title: 'Understand Potential Attack Paths' },
      ],
    },
    splits: [
      {
        label: 'THREAT MODELING COMPONENTS',
        title: 'Analyze Application Design to Identify Vulnerabilities',
        titleHighlight: 'Identify Vulnerabilities',
        paragraphs: [
          'Our Application Threat Modeling helps you think like a hacker: we adopt the same perspective as malicious hackers to gauge how much of an impact potential threat agents may cause.',
          'With our Application Security Threat Modeling service, you gain a comprehensive assessment that includes:',
        ],
        checklist: [
          'Review of application architecture diagrams and design documents to bring to light potential vulnerabilities that are present in your applications',
          'Expert-led whiteboarding sessions with your key stakeholders to identify key data flows and application entry points',
          'Review of the attack surface and sensitive data flows to identify possible attack paths and threats that real-world threat actors may potentially use to negatively impact your applications',
          'Validate that your current security controls are appropriate enough to mitigate risk and where it is necessary to build in additional security controls',
          'Custom data flow diagrams, attack trees, asset summaries, listing of threat actors, security control summaries and a prioritized list of possible threats',
          'Create and regularly update your threat models to ensure your frameworks remain one step ahead of threat actors that can negatively impact your applications',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'Application Threat Modeling Components',
        splitCardsHeader: {
          label: 'APPLICATION THREAT MODELING ANALYSIS',
          title: 'Build Security Into Your Applications',
          titleHighlight: 'Build Security',
          description: 'Our application threat models, which include mobile application threat modeling and web application threat modeling, enhance the security of any product as it relates to potential areas of security risk, whether or not application testing is possible. We evaluate applications against industry-leading practices from OWASP, NIST and SANS and align security threats to the six categories found in Microsoft\'s STRIDE methodology:',
        },
        splitCards: [
          { items: ['Spoofing', 'Tampering', 'Repudiation'] },
          { items: ['Information Disclosure', 'Denial of Service', 'Elevation of Privilege'] },
        ],
      },
      {
        label: 'APPLICATION THREAT MODELING BENEFITS',
        title: 'Threat Modeling is a Key Enabler of DevSecOps',
        titleHighlight: 'DevSecOps',
        paragraphs: [
          'Many traditional AppSec capabilities are not optimized for Agile release cycles:',
          'While more effort has been placed on automation, this approach results in security bottlenecks in the build and deploy process. Organizations that have been successful in embracing DevSecOps tend to share one thing in common — they have a mature Threat Modeling capability and security is baked into their products.',
        ],
        checklist: [
          'Application scanning technologies take time to run and produce false positives, which take manual effort to triage',
          'Penetration testing occurs too late in the release cycle',
          'Most attempts at shifting left result in additional developer burden',
          'Current testing tools are not able to test for emerging threats',
        ],
        imageLeft: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'DevSecOps Threat Modeling',
      },
    ],
    certsDescription: [
      'Every member of GuidePoint\'s Application Security Practice offers a wealth of expertise stemming from years of relevant, real-world experience within the application layer from technical and strategic perspectives.',
      'We have a unique ability to understand the threats your applications face and can play a vital role in helping to mature or align your security posture.',
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: 'AI Certifications',
        certs: [
          { name: 'AI Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/ai_cert-02.png' },
          { name: 'AI Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/ai_cert-01.png' },
          { name: 'AI Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/ai_cert-03.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'APPLICATION THREAT MODELING OUTCOMES',
      title: 'Scale Your Application Security While Avoiding Costly Design Flaws',
      titleHighlight: 'Scale',
      subtitle: 'Our Application Security Threat Modeling services will help you partner with your development teams and provide education on the use of security leading practices. This allows you to scale your security efforts while avoiding costly design flaws that are difficult to fix once the application has already been deployed to production.',
    },
    outcomes: [
      {
        title: 'Understand Your Design',
        description: 'Know what\'s included in the application by leveraging a structured process.',
      },
      {
        title: 'Identify Potential Attack Paths',
        description: 'Think like a hacker to uncover possible attack paths and vulnerabilities.',
      },
      {
        title: 'Quantify Remediation',
        description: 'Prioritize remediation efforts to focus on the most actionable items.',
      },
      {
        title: 'Create Security Requirements',
        description: 'Ensure specific controls are in place and if any others should be considered.',
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'fundamentals-of-reconnaissance-and-attack-surface-analysis': {
    parentService: 'application-security',
    title: 'Fundamentals of Reconnaissance and Attack Surface Analysis',
    icon: 'bi-binoculars',
    tagline: 'Build a Stronger Foundation for Effective Web App Testing',
    heroLabel: 'FUNDAMENTALS OF RECONNAISSANCE AND ATTACK SURFACE ANALYSIS',
    heroHighlight: 'Build',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/source-code-review.jpg',
    description: 'Learn to systematically map, analyze and track web application attack surfaces with hands-on skills that elevate your reconnaissance precision and coverage.',
    useCases: {
      label: 'FUNDAMENTALS OF RECONNAISSANCE AND ATTACK SURFACE ANALYSIS TRAINING OVERVIEW',
      title: 'Learn to Think Like an Attacker',
      titleHighlight: 'Learn',
      subtitle: 'This course focuses on the fundamentals of web application reconnaissance and attack surface analysis, merging conceptual understanding with practical exercises. Upon completion, participants will be proficient in performing web application reconnaissance, attack surface mapping and analysis, maximizing application coverage and effectively tracking their testing progress.',
      cards: [
        {
          title: 'Fundamentals of Reconnaissance',
          description: 'Understand the fundamentals of reconnaissance, including application mapping and client-side code review.',
        },
        {
          title: 'Web Application Attack Surface',
          description: 'Learn how to identify and understand the attack surface of web applications, spot application entry points and understand HTTP requests and responses.',
        },
        {
          title: 'Security Posture Assessment',
          description: 'Gain the skills to map attack surfaces and assess the security posture of web applications, including vulnerability identification.',
        },
      ],
    },
    splits: [
      {
        label: 'TRAINING OBJECTIVES',
        title: 'Why Choose This Training?',
        titleHighlight: 'Why Choose',
        paragraphs: [
          'This course is designed for both entry-level and intermediate-level security professionals, quality assurance engineers and others who are seeking to establish a strong foundation in performing critical skills required for application security. Whether you are new to the field or have some experience, this course will provide you with the knowledge and skills necessary to effectively analyze the security posture of web applications.',
        ],
        showAll: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'Training Objectives',
        splitCards: [
          {
            title: 'What You\'ll Learn',
            items: [
              'Reconnaissance basics, including enumeration, application mapping and content discovery.',
              'Attack surface analysis in web applications.',
              'Practical application of reconnaissance and web app testing.',
            ],
          },
          {
            title: 'Who Should Attend?',
            items: [
              'Information security professionals',
              'Entry- to mid-level application security professionals',
              'Quality assurance team members',
              'Security champions',
            ],
          },
        ],
      },
      {
        label: 'PREREQUISITES',
        title: 'Your Path to Secure Code Development',
        titleHighlight: 'Path',
        paragraphs: [
          'Attendees will be best positioned to excel in this course when they possess a foundational grasp of web application structures and concepts, such as server-client interactions and basic application layer protocols such as HTTP. Familiarity with general security or web application security concepts is advantageous. While prior knowledge of reconnaissance or attack surface analysis is helpful, it is not necessary.',
        ],
        sectionsAllHidden: true,
        sections: [
          {
            paragraph: 'Participants will need:',
            items: [
              'A computer running Windows, macOS or Linux.',
              'An internet connection.',
              'VMWare or Virtual Box for running the virtual lab machine.',
            ],
          },
          {
            paragraph: 'All other lab environments and materials will be provided within the course.',
          },
          {
            paragraph: 'Our Fundamentals of Reconnaissance and Attack Surface Analysis training is available as a live, instructor-led virtual course or on-site session to accommodate your team\'s needs. This course ensures participants gain critical skills for secure application design, whether remote or in person.',
          },
        ],
        imageLeft: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'Training Prerequisites',
      },
    ],
    certsTitle: 'Our Elite Security Team is Now on Your Security Team',
    certsDescription: [
      'Every member of GuidePoint\'s Application Security Practice offers a wealth of expertise stemming from years of relevant, real-world experience within the application layer from technical and strategic perspectives.',
      'We have a unique ability to understand the threats your applications face and can play a vital role in helping to mature or align your security posture.',
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: '',
        certs: [
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'ai-security-large-language-models': {
    parentService: 'application-security',
    title: 'AI Security with a Focus on Large Language Models',
    icon: 'bi-robot',
    tagline: 'Secure Your AI Future by Mastering LLM Threats and Defense',
    heroLabel: 'AI SECURITY WITH A FOCUS ON LARGE LANGUAGE MODELS',
    heroHighlight: 'AI Future',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/ai-security-large-language-models.jpg',
    description: 'Develop hands-on expertise in securing LLMs through threat modeling, risk analysis, vulnerability identification and mitigation techniques across real-world AI architectures.',
    useCases: {
      label: 'AI SECURITY WITH A FOCUS ON LARGE LANGUAGE MODELS TRAINING OVERVIEW',
      title: 'From Fundamentals to Exploits: Build Real-World LLM Security Skills',
      titleHighlight: 'Fundamentals',
      subtitle: 'GuidePoint\'s Artificial Intelligence (AI) Security course with a focus on Large Language Models (LLMs) combines theoretical knowledge with practical applications. Participants will gain in-depth understanding of AI fundamentals, security implications and the unique challenges posed by LLMs.',
      cards: [
        {
          title: 'AI & LLM Fundamentals',
          description: 'Explore core AI concepts, LLM architecture, training methods and security implications across the AI lifecycle.',
        },
        {
          title: 'Risk Identification and Mitigation',
          description: 'Analyze real-world vulnerabilities, learn AI-specific threat vectors and see how to implement security controls tailored to LLM-based applications.',
        },
        {
          title: 'Governance & Best Practices',
          description: 'Navigate legal, ethical and governance challenges while applying industry-aligned risk management strategies and hands-on techniques.',
        },
      ],
    },
    splits: [
      {
        label: 'AI SECURITY TRAINING OBJECTIVES',
        title: 'Why Choose This Training?',
        titleHighlight: 'Why Choose',
        paragraphs: [
          'This AI Security training is an engaging class designed to introduce participants of all skill and knowledge levels to the security fundamentals of AI. Featuring a mix of live instruction, participant discussions and interactive exercises designed by our expert AI security professionals, attendees will examine real-world scenarios, learn industry best practices and gain hands-on experience with tools and techniques specific to AI and LLM security.',
        ],
        showAll: true,
        splitCards: [
          {
            title: 'What You\'ll Learn',
            icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Icon_3_Zscaler.svg',
            items: [
              'Apply industry best practices to real-world AI and LLM security scenarios through expert-led instruction and collaborative exercises.',
              'Identify and communicate AI-specific risks while developing effective mitigation strategies for LLM-based applications.',
              'Gain hands-on experience with tools and techniques used to assess and secure AI systems across the deployment lifecycle.',
            ],
          },
          {
            title: 'Who Should Attend',
            icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Icon_1_Zscaler.svg',
            items: [
              'IT Managers and Decision Makers',
              'AI/ML Engineers',
              'Software Developers',
              'Information Security Professionals',
            ],
          },
        ],
      },
      {
        label: 'AI LLM PREREQUISITES',
        title: 'AI Security with a Focus on Large Language Models Prerequisites',
        titleHighlight: 'Prerequisites',
        paragraphs: [
          'While no specific AI or security background is required, participants will benefit from a basic understanding of information security concepts.',
          'The following list outlines the necessities for participants to successfully complete this training course:',
        ],
        checklist: [
          'A computer, compatible with Windows, macOS or Linux',
          'A reliable internet connection',
        ],
        imageLeft: false,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'AI LLM Prerequisites',
      },
      {
        label: 'FLEXIBLE TRAINING OPTIONS',
        title: 'Flexible Training Options',
        titleHighlight: 'Flexible',
        paragraphs: [
          'Our AI Security with a Focus on Large Language Models training is available as a live, instructor-led virtual course or on-site session to accommodate your team\'s needs. This course ensures participants gain critical skills for secure application design, whether remote or in person.',
        ],
        showAll: true,
        imageLeft: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Staff_Left.png',
        imageAlt: 'Flexible Training Options',
      },
    ],
    certsTitle: 'Our Elite Security Team is Now on Your Security Team',
    certsDescription: [
      'Every member of GuidePoint\'s Application Security Practice offers a wealth of expertise stemming from years of relevant, real-world experience within the application layer from technical and strategic perspectives.',
      'We have a unique ability to understand the threats your applications face and can play a vital role in helping to mature or align your security posture.',
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: '',
        certs: [
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/01/gwapt.png' },
        ],
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'secure-development-training': {
    parentService: 'application-security',
    title: 'Secure Development Training',
    icon: 'bi-mortarboard',
    tagline: 'Application Security from the First Line of Code',
    heroLabel: 'SECURE DEVELOPMENT TRAINING',
    heroHighlight: 'Application Security',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/ai-security-large-language-models.jpg',
    description: 'Learn how to build with security in mind, embedding it naturally into every line of code, so that secure practices become a natural part of the development process.',
    useCases: {
      label: 'SECURE DEVELOPMENT TRAINING OVERVIEW',
      title: 'Turn Application Development into Defense',
      titleHighlight: 'Turn',
      subtitle: 'GuidePoint Security\'s Secure Software Development Training is a hands-on, comprehensive course crafted to deepen developers\' understanding of application security. Participants will learn how to identify, mitigate and remediate the industry\'s most critical vulnerabilities, empowering them to build resilient software solutions.',
      cards: [
        {
          title: 'Vulnerabilities and Application Development',
          description: 'Explore the OWASP Top 10 vulnerabilities, including real-world impacts, prevention and remediation techniques.',
        },
        {
          title: 'Remediation Techniques',
          description: 'Participate in interactive labs featuring vulnerability exploitation and code remediation using tools like Burp Suite.',
        },
        {
          title: 'Secure Code Review Best Practices',
          description: 'Conduct secure code reviews and implement secure practices within the Secure Development Lifecycle to protect against common threats.',
        },
      ],
    },
    splits: [
      {
        label: 'SECURE DEVELOPMENT TRAINING OBJECTIVES',
        title: 'Why Choose This Training?',
        titleHighlight: 'Why',
        paragraphs: [
          'Led by seasoned security professionals, this course emphasizes real-world application, guiding participants through secure coding practices that directly address today\'s most prevalent software threats. Each session combines live instruction, interactive labs and expert-led discussions, fostering a deep, practical understanding of secure software development principles.',
        ],
        showAll: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'Secure Development Training Objectives',
        splitCards: [
          {
            title: 'What You\'ll Learn',
            items: [
              'Proficiency in secure coding practices to defend against common vulnerabilities.',
              'Skills in identifying, exploiting and remediating vulnerabilities.',
              'An understanding of the Secure Development Lifecycle and its role in maintaining software integrity.',
            ],
          },
          {
            title: 'Who Should Attend?',
            items: [
              'Software Developers',
              'Quality Assurance Engineers',
              'Entry-Level Security Engineers',
            ],
          },
        ],
      },
      {
        label: 'SECURE DEVELOPMENT TRAINING PREREQUISITES',
        title: 'Your Path to Secure Code Development',
        titleHighlight: 'Secure Code Development',
        paragraphs: [
          'For the best experience, participants should ideally have:',
        ],
        sections: [
          {
            items: [
              'Basic experience in software development.',
              'Familiarity with foundational security concepts, though prior knowledge of the OWASP Top 10 is not required.',
            ],
          },
          {
            paragraph: 'Participants will need:',
            items: [
              'A computer compatible with Windows, macOS or Linux.',
              'A stable internet connection.',
              'Burp Suite Community Edition installed (additional setup instructions provided).',
            ],
          },
          {
            paragraph: 'All other lab environments and materials will be provided within the course.',
          },
        ],
        imageLeft: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'Training Prerequisites',
      },
    ],
    certsDescription: [
      'Every member of GuidePoint\'s Application Security Practice offers a wealth of expertise stemming from years of relevant, real-world experience within the application layer from technical and strategic perspectives.',
      'We have a unique ability to understand the threats your applications face and can play a vital role in helping to mature or align your security posture.',
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: '',
        certs: [
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'SECURE DEVELOPMENT TRAINING OUTCOMES',
      title: 'Learn How to Securely Develop Applications',
      titleHighlight: 'Securely Develop',
      subtitle: 'Our Secure Development Training course ensures you gain practical insights into secure application development. Attendees will dive into real-world examples, tools and techniques specific to vulnerability exploitation and remediation.',
    },
    outcomes: [
      {
        title: 'Understand Core Principles of AppSec',
        description: 'Gain knowledge on the importance of secure software development.',
      },
      {
        title: 'Learn about Application Risks',
        description: 'Understand OWASP Top 10, Broken Access Control, Cryptographic Failures, Injection Vulnerabilities and more.',
      },
      {
        title: 'Know How to Prevent and Remediate Vulnerabilities',
        description: 'Gain a solid foundation for secure development best practices.',
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'source-code-review': {
    parentService: 'application-security',
    title: 'Source Code Review',
    icon: 'bi-code-slash',
    tagline: 'Strengthen Your Application\'s Security',
    heroLabel: 'SECURE SOURCE CODE REVIEW',
    heroHighlight: 'Strengthen',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/heroes/source-code-review.jpg',
    description: 'Gain an assessment of the full source code of your applications and their dependent components.',
    useCases: {
      label: 'SECURE CODE REVIEW OVERVIEW',
      title: 'The Importance of Manual Inspection',
      titleHighlight: 'Manual Inspection',
      subtitle: 'There are a few vulnerability classes that are either extremely difficult to identify via dynamic testing or are extremely difficult to accurately identify via static analysis and result in a manual review of the source code for validation.',
      subtitle2: 'With a Secure Source Code Review, our expert team conducts an in-depth examination of your application\'s source code, identifying vulnerabilities that often go unnoticed in dynamic testing of the running application. We use multiple techniques to identify vulnerabilities that expose the greatest amount of attack surface to uncover and report potential risks, aiming to significantly reduce your application\'s susceptibility to security threats such as:',
      cards: [
        { title: 'Attack Surface Minimization' },
        { title: 'Component Usage' },
        { title: 'Authorization Logic Validation' },
        { title: 'Authentication' },
        { title: 'Session Management' },
        { title: 'Data Validation' },
      ],
    },
    splits: [
      {
        label: 'SECURE CODE REVIEW PROCESS',
        title: 'Context and Coverage Are Key',
        titleHighlight: 'Context and Coverage',
        paragraphs: [
          'Source code reviews require expertise with not only common vulnerability patterns and exploitation techniques at an implementation level, but also many different languages, frameworks and coding paradigms.',
          'Our team follows a highly-structured methodology to ensure a thorough review of the application source code. Our process, which includes information gathering, code review, validation and notification, ensures a detailed and effective security assessment.',
          'A technical analysis of an application\'s source code and dependent components is intended to expose insecure pieces (and reuses) of code. It also uncovers potentially hidden functionality that an adversary could leverage to compromise an application and gain access to sensitive information.',
          'With the increasing dynamic functionality found in modern applications, we typically perform a hybrid application security assessment in parallel to our source code review. This approach further enhances our ability to craft payloads for testing and allows us to verify whether issues identified from a code review actually carry the risk of exploitation in the live, running application.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'Source Code Review Process',
      },
    ],
    certsDescription: [
      'Every member of GuidePoint\'s Application Security Practice offers a wealth of expertise stemming from years of relevant, real-world experience within the application layer from technical and strategic perspectives.',
      'We have a unique ability to understand the threats your applications face and can play a vital role in helping to mature or align your security posture.',
    ],
    certGroups: [
      {
        category: 'SANS & ISC2',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
      {
        category: 'Offensive Security',
        certs: [
          { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-oscp.png' },
          { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ocse.png' },
        ],
      },
      {
        category: '',
        certs: [
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-gpen-removebg-preview-1.png' },
          { name: 'GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gwapt.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'SECURE CODE REVIEW OUTCOMES',
      title: 'Ensure Your Applications are Secure',
      titleHighlight: 'Secure',
      subtitle: 'Our Secure Source Code Review provides you with ample evidence and supporting reproduction steps to ultimately put you in the best possible position to make swift, informed decisions on the proper treatment of any critical issue identified within your application environment.',
    },
    outcomes: [
      {
        title: 'Identify Hidden Vulnerabilities',
        description: 'Uncover vulnerabilities that are missed by regular testing.',
      },
      {
        title: 'Prioritize Vulnerabilities by Risk',
        description: 'Rank vulnerabilities from high to low severity based on the insights.',
      },
      {
        title: 'Fortify Your Application\'s Resilience',
        description: 'Improve the resilience and reliability of your application.',
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'ai-security': {
    title: 'Artificial Intelligence (AI)',
    icon: 'bi-cpu',
    tagline: 'Protect Your Enterprise in the Age of AI',
    heroHighlight: 'Protect',
    heroImage: '/images/heroes/cloud-security-strategy-architecture-services.jpg',
    description:
      'Secure AI adoption and use AI to strengthen your defenses. Our technical and advisory services help organizations confidently incorporate AI without introducing new risks.',
    stats: [
      { number: '78%', label: 'of organizations using AI lack security controls' },
      { number: '3x', label: 'increase in AI-targeted attacks in 2025' },
      { number: '200+', label: 'AI security assessments completed' },
    ],
    useCases: {
      label: 'AI Security Assessment Timing',
      title: 'When to Perform an AI Security Assessment',
      titleHighlight: 'Security Assessment',
      subtitle:
        'Proactively assessing AI security risks is critical as organizations rapidly adopt AI and machine learning technologies.',
      items: [
        'Deploying a new AI/ML model to production',
        'Integrating third-party AI services',
        'Processing sensitive data with AI systems',
        'Facing regulatory AI compliance requirements',
        'Experiencing AI-specific security incidents',
      ],
    },
    splits: [
      {
        label: 'AI Security Assessment Process',
        title: 'Implement AI Security Controls Across Your Pipeline',
        titleHighlight: 'Implement',
        paragraphs: [
          'As organizations rapidly adopt AI and machine learning, new attack surfaces emerge. Our AI security services help you secure AI systems, detect AI-powered threats, and use AI to enhance your defensive capabilities.',
          'AI introduces unique risks including data poisoning, model theft, adversarial attacks, and prompt injection. Our experts assess your AI/ML pipeline end-to-end — from training data integrity to model deployment security. We also help you leverage AI-powered tools for threat detection, automated response, and security operations.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'AI Security Assessment Process',
        title: 'Implement AI Security Controls Across Your Pipeline',
        titleHighlight: 'Implement',
        paragraphs: ['Our team of AI security engineers evaluates the security posture of your AI/ML systems end-to-end, from training data integrity to model deployment, covering critical areas including:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Training Data Integrity',
          'Model Access Controls',
          'Adversarial Robustness Testing',
          'Prompt Injection Prevention',
          'Data Poisoning Detection',
          'Model Extraction Defenses',
          'LLM Security Controls',
          'AI Supply Chain Security',
          'Inference Endpoint Protection',
          'AI Governance Policies',
        ],
      },
      {
        label: 'AI Security Technology Experience',
        title: 'Leverage our Deep AI Security Experience',
        titleHighlight: 'Leverage',
        paragraphs: [
          'As organizations race to adopt AI and machine learning, new and complex attack surfaces emerge that traditional security approaches cannot address. Securing AI systems requires specialized expertise across data science, machine learning operations, and cybersecurity.',
          'Our team of AI security specialists brings cross-disciplinary expertise to assess, design, and implement security controls tailored to your AI/ML environment, ensuring your AI adoption is both innovative and secure.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      {
        title: 'AI Governance Services',
        description: 'Establish and maintain AI readiness',
        path: '/services/ai-governance',
      },
    ],
    tactical: [],
    managed: [],
    training: [],
    megaMenuLayout: 'ai',
    megaMenuResource: {
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/08/AI_for_GP_Header.jpg',
      title: '[DATASHEET] Artificial Intelligence at GuidePoint Security',
      path: '/resources/artificial-intelligence-at-guidepoint-security',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Map AI-specific risks across your organization.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Harden AI systems against emerging attack techniques.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Test AI defenses with adversarial simulations.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain secure AI operations with ongoing monitoring.' },
    ],
    testimonial: {
      quote:
        'Their understanding of AI-specific threats is unmatched. They helped us secure our ML pipeline and build a governance framework from scratch.',
      author: 'Chief Data Officer',
      company: 'Healthcare Technology Company',
    },
  },

  'ai-governance': {
    parentService: 'ai-security',
    title: 'AI Governance',
    icon: 'bi-diagram-3',
    tagline: 'Enable secure, compliant AI adoption',
    heroLabel: 'AI GOVERNANCE SERVICES',
    heroHighlight: 'Enable',
    heroCta: 'Manage Your Risk',
    heroImage: '/images/heroes/ai-security-large-language-models.jpg',
    description: 'Manage AI initiatives with confidence and reduce risk, better protect data and align technology adoption with your business goals. GuidePoint Security\'s AI Governance Services can help ensure that, as you bring AI technologies into your organization, you maintain security and compliance. The result: smarter decisions, safer data and accelerated growth.',
    useCases: {
      label: 'AI GOVERNANCE RISK LANDSCAPE',
      title: 'The Growing Risks of AI',
      titleHighlight: 'Growing Risks',
      subtitle: 'AI is being adopted at an unprecedented rate, unlocking immense organizational potential while also presenting significant challenges. Without proper governance, these risks can erode trust, disrupt operations and impact your bottom line.',
      cards: [
        {
          title: 'Compliance',
          description: 'Complex regulations, like the EU AI Act, require robust oversight.',
        },
        {
          title: 'Data Exposure',
          description: 'Sensitive data used in AI systems is vulnerable to breaches or misuse.',
        },
        {
          title: 'Shadow AI',
          description: 'Unregulated AI tools increase security and ethical challenges.',
        },
      ],
    },
    splits: [
      {
        label: 'SECURE AI ADOPTION STRATEGIES',
        title: 'Security-enabled AI Innovation',
        titleHighlight: 'AI Innovation',
        paragraphs: [
          'Harness the power of AI to drive speed, innovation and accuracy across your organization while responsibly managing risks. GuidePoint\'s AI Governance Services deliver decades of expertise to secure and govern your current solutions, as well as future AI adoption.',
        ],
        checklist: [
          'AI Model Discovery & Inventory: Gain visibility into sanctioned and unsanctioned AI tools, increasing accountability.',
          'AI Readiness Assessment: Identify gaps in your governance and receive tailored recommendations to meet your objectives.',
          'AI Governance Roadmap: Develop a multi-year governance plan adapted to evolving regulations and business needs.',
          'Data Protection Controls: Implement safeguards and oversight mechanisms to protect the security and privacy of sensitive data and ensure consistent governance.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'AI Governance Innovation',
      },
      {
        label: 'ALIGN AI WITH STRATEGIC OUTCOMES',
        title: 'Business-Driven AI Governance',
        titleHighlight: 'AI Governance',
        paragraphs: [
          'GuidePoint\'s tailored approach to AI Governance helps ensure measurable outcomes and increased efficiency. We empower organizations to safely harness AI\'s potential and uncover new opportunities for innovation without compromising on governance. Seamlessly integrate governance processes to:',
        ],
        showAll: true,
        checklist: [
          'Drive sustainable growth while safeguarding your data',
          'Enhance trust, build stakeholder and client confidence with defined, ethical and transparent AI practices',
          'Quickly identify vulnerabilities and mitigate risks such as breaches and reputational damage',
          'Simplify compliance with actionable steps and streamlined processes aligned with global standards',
        ],
        imageLeft: true,
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/06/AI_icon-Triangle_elementor-left.png',
        imageAlt: 'Business-Driven AI Governance',
      },
      {
        label: 'STEP-BY-STEP AI GOVERNANCE FRAMEWORK',
        title: 'A Streamlined Process for Success',
        titleHighlight: 'Streamlined Process',
        paragraphs: [
          'Our three-step process ensures effective AI governance tailored to your organization\'s unique needs.',
        ],
        inlineItems: [
          {
            title: 'Discover',
            description: 'Identify and catalog AI solutions within your ecosystem, including unauthorized tools, using specialized discovery tools. Gain enhanced visibility to establish accountability and oversight.',
          },
          {
            title: 'Assess',
            description: 'Evaluate governance maturity, pinpoint compliance gaps and address operational risks. Receive clear, actionable recommendations to fortify your AI security posture.',
          },
          {
            title: 'Strategize',
            description: 'Develop a customized AI governance framework aligned with regulatory requirements and your business goals. This flexible strategy evolves with your organization to support growth and innovation.',
          },
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/06/AI_Governance_Graphic_3_sections.svg',
        imageAlt: 'AI Governance Three-Step Process',
        imageStyle: { maxWidth: '460px', margin: '0 auto', display: 'block' },
      },
    ],
    outcomesSection: {
      label: 'AI GOVERNANCE IN REGULATED ENVIRONMENTS',
      title: 'AI Governance in Regulated Sectors',
      titleHighlight: 'Regulated Sectors',
      subtitle: 'In sectors such as healthcare, finance and government, AI adoption is expected to meet strict regulatory requirements. We work with organizations to go beyond securing their AI initiatives, helping to ensure compliance with legislation such as California AB 3030 and SB 1001, as well as the EU AI Act. We can also provide guidance on regulations while they are being discussed, allowing enterprises to stay ahead of the curve. Our custom services bridge the gap between innovation and regulation, empowering organizations to harness AI\'s full potential while staying compliant.',
    },
    outcomes: [],
    certsTitle: 'Your Elite, Highly-trained Team',
    certsDescription: [
      'Your organization will be backed by our team of cybersecurity engineers, architects and consultants who are veteran practitioners from Fortune 100 companies, the Department of Defense and U.S. intelligence agencies.',
    ],
    certGroups: [
      {
        category: 'Compliance & Governance',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AIGP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/04/CertificationSeals_AIGP.png' },
        ],
      },
      {
        category: 'Risk & Security Management',
        certs: [
          { name: 'CISM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/gps-cert-cism.png' },
          { name: 'CISA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/gps-cert-cisa.png' },
          { name: 'CRISC', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/CRISC_cert-e1752767713961.png' },
        ],
      },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      role: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'cloud-security': {
    title: 'Cloud Security',
    icon: 'bi-cloud',
    tagline: 'Secure Your Cloud Transformation End to End',
    heroHighlight: 'Secure',
    heroImage: '/images/heroes/ai-augmented-application-security-ai.jpg',
    description:
      'Our trusted technology experts can help drive a cloud strategy, ensure compliance and secure your cloud solution architecture aligned with business goals.',
    stats: [
      { number: '45%', label: 'of breaches occur in cloud environments' },
      { number: '1,500+', label: 'cloud security assessments delivered' },
      { number: '99.9%', label: 'uptime maintained for managed clients' },
    ],
    useCases: {
      label: 'Cloud Security Assessment Timing',
      title: 'When to Perform a Cloud Security Assessment',
      titleHighlight: 'Security Assessment',
      subtitle:
        'Cloud environments evolve rapidly. Regular security assessments ensure your configurations and controls keep pace with changes.',
      items: ['Migrating workloads to the cloud', 'Expanding multi-cloud environments', 'Experiencing cloud misconfigurations', 'Preparing for compliance audits', 'Adopting new cloud-native services'],
    },
    splits: [
      {
        label: 'Cloud Security Assessment Process',
        title: 'Establish Cloud Security Controls From Day One',
        titleHighlight: 'Establish',
        paragraphs: [
          'Cloud migration introduces new security challenges. Our cloud security experts help you design, implement, and maintain secure cloud architectures that protect your data and workloads while enabling business agility.',
          'We provide comprehensive cloud security services across all major platforms. Our team assesses your cloud posture, remediates misconfigurations, implements zero-trust architectures, and provides ongoing managed security for your cloud workloads. We specialize in AWS, Azure, and GCP with deep expertise in containerization, serverless, and hybrid cloud environments.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Cloud Security Assessment Process',
        title: 'Establish Cloud Security Controls From Day One',
        titleHighlight: 'Establish',
        paragraphs: ['Our cloud security engineers conduct thorough assessments of your cloud environments across all major platforms, evaluating configurations, access controls, and compliance posture including:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Identity & Access Management',
          'Network Configuration Review',
          'Storage & Encryption Settings',
          'Logging & Monitoring',
          'Compliance Benchmarking',
          'Container Security',
          'Serverless Security',
          'Multi-Cloud Governance',
          'Cloud Workload Protection',
          'Infrastructure as Code Review',
        ],
      },
      {
        label: 'Cloud Security Technology Experience',
        title: 'Harness our Deep Cloud Security Experience',
        titleHighlight: 'Harness',
        paragraphs: [
          'Cloud environments evolve rapidly, and misconfigurations remain the leading cause of cloud breaches. Maintaining a secure posture across AWS, Azure, and GCP requires continuous vigilance and specialized expertise.',
          'Our team of cloud security architects brings deep, hands-on experience across all major cloud platforms to help you design, implement, and maintain secure cloud environments that enable business agility without compromising security.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      { title: 'AWS Cloud Security Services', description: 'Secure your Amazon Web Services cloud environment end-to-end', path: '/services/aws-cloud-security-assessment-services' },
      { title: 'Google Cloud Security Services', description: 'Protect workloads and data across Google Cloud Platform', path: '/services/google-cloud-security' },
      { title: 'SaaS Security Services', description: 'Safeguard your SaaS application ecosystem', path: '/services/saas-security' },
      { title: 'Microsoft Security Services', description: 'Maximize security across Microsoft 365 and Azure', path: '/services/microsoft-security-services' },
      { title: 'Multi-Cloud Security', description: 'Unify security controls across multiple cloud providers', path: '/services/multi-cloud-security' },
    ],
    tactical: [
      { title: 'Cloud Security Assessments', description: 'Evaluate cloud configurations and identify security gaps', path: '/services/cloud-security-assessments' },
      { title: 'Cloud Security Strategy Services', description: 'Develop a comprehensive cloud security roadmap', path: '/services/cloud-security-strategy-architecture-services' },
      { title: 'Cloud Governance', description: 'Establish policies and controls for cloud resource management', path: '/services/cloud-governance-solutions' },
      { title: 'Cloud Security Engineering', description: 'Design and implement secure cloud architectures', path: '/services/cloud-security-engineering-services' },
      { title: 'CNAPP Services', description: 'Cloud-native application protection platform services', path: '/services/cnapp-services' },
      { title: 'Container Security', description: 'Secure containerized workloads and orchestration platforms', path: '/services/container-security' },
      { title: 'Digital Transformation', description: 'Enable secure digital transformation initiatives', path: '/services/digital-transformation' },
      { title: 'Zero Trust Workshops', description: 'Implement zero trust principles in your cloud environment', path: '/services/zero-trust-workshops' },
    ],
    managed: [],
    training: [],
    megaMenuLayout: 'cloud',
    megaMenuResource: {
      image: '/images/nav/cloud-nav.jpg',
      title: '[DATASHEET] Cloud Governance',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover cloud misconfigurations and vulnerabilities.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Fix issues with cloud-native remediation guidance.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify cloud security posture continuously.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain compliance across cloud environments.' },
    ],
    testimonial: {
      quote:
        'CyberPoint helped us migrate 200+ workloads to AWS securely. Their cloud team is deeply technical and incredibly responsive.',
      author: 'Cloud Infrastructure Director',
      company: 'Global Retail Corporation',
    },
  },

  'google-cloud-security': {
    parentService: 'cloud-security',
    title: 'Google Cloud Security Services',
    icon: 'bi-cloud',
    tagline: 'Ensure a strong security posture for your Google Cloud environment with expert-led consulting and implementation.',
    heroLabel: 'GOOGLE CLOUD SECURITY',
    heroHighlight: 'Security',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/google-cloud-security.jpg',
    description:
      'Our Google Cloud Security services provide the expertise and consulting to improve your security roadmap and strengthen your security posture.',
    stats: [
      { number: '100+', label: 'Google Cloud security engagements delivered' },
      { number: '50%', label: 'of workforce are certified engineers and architects' },
      { number: '3', label: 'core service pillars: health checks, engineering and workspace' },
    ],
    useCases: {
      label: 'GOOGLE CLOUD SECURITY USE CASES',
      title: 'When to Engage Google Cloud Security Services',
      titleHighlight: 'Google Cloud',
      subtitle:
        'From migrating to GCP to hardening your Workspace environment, our certified experts help you implement a robust cloud security program.',
      items: [
        'Migrating workloads to Google Cloud Platform',
        'Implementing GCP security controls from scratch',
        'Assessing your current Google Cloud security posture',
        'Securing your Google Workspace environment',
        'Building infrastructure as code for GCP',
      ],
    },
    splits: [
      {
        label: 'GOOGLE CLOUD SECURITY SERVICES: HEALTH CHECK',
        title: 'Comprehensive Google Cloud Security Assessment',
        titleHighlight: 'Comprehensive',
        paragraphs: [
          'With our CyberPoint Cloud Security Framework (CPCSF), we analyze the people, process and technology that support your Google Cloud security program and deliver a comprehensive report and roadmap.',
          'Our security assessments provide detailed recommendations for improving your Google Cloud platform security roadmap.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
      },
      {
        label: 'GOOGLE CLOUD SECURITY SERVICES: ENGINEERING',
        title: 'Hands-On Google Cloud Security Support',
        titleHighlight: 'Hands-On',
        paragraphs: [
          'When you need a hands-on approach to build security programs inside of Google Cloud, our team of certified Google Cloud engineers and architects will help you deliver secure configurations, policies and infrastructure as code.',
          'Our team can either help lead your cloud engineers or work alongside them. Our services are flexible and scalable to suit your unique needs.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
      {
        label: 'GOOGLE CLOUD SECURITY SERVICES: GOOGLE WORKSPACE',
        title: 'Assess Your Workspace Environment',
        titleHighlight: 'Workspace',
        paragraphs: [
          'With our Google Workspace Security Health Check, we thoroughly assess your environment\'s people, processes and technology using our Cloud Security Framework and SaaS Security Framework.',
          'Our team brings years of cloud experience, along with expertise in CIS, NIST and Google standards and guidelines.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Solutions Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/AWS-SolArchitect-Professional-2022_100x120px.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'GOOGLE CLOUD SECURITY SERVICES OUTCOMES',
      title: 'Strengthen Security with Google Cloud-Certified Expertise',
      titleHighlight: 'Certified',
      subtitle: 'Our Google Cloud Security services help you implement a robust GCP security program.',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Assess Your Environment', description: 'Evaluate your environment\'s people, process and technology and gain a comprehensive report to improve your security posture.' },
      { icon: 'bi-tools', title: 'Benefit from Hands-on Expertise', description: 'Leverage our certified Google Cloud engineers to implement secure configurations and infrastructure as code.' },
      { icon: 'bi-shield-check', title: 'Strengthen Your Program', description: 'Implement a strong GCP infrastructure and security program with expert guidance covering strategy and health checks.' },
      { icon: 'bi-check2-circle', title: 'Maintain Compliance', description: 'Align your Google Cloud environment with CIS, NIST and Google standards and guidelines.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'aws-cloud-security-assessment-services': {
    parentService: 'cloud-security',
    title: 'AWS Cloud Security Assessment Services',
    icon: 'bi-cloud',
    tagline: 'Evolve the maturity of your AWS security program with expert-led assessment and engineering services.',
    heroLabel: 'AWS CLOUD SECURITY ASSESSMENT SERVICES',
    heroHighlight: 'AWS',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/aws-cloud-security-assessment-services.jpg',
    description:
      'Take advantage of our wide range of AWS cloud security assessment services to build a strong foundation for cloud computing.',
    stats: [
      { number: 'Advanced', label: 'AWS Consulting Partner tier status' },
      { number: '4', label: 'program stages: Learn, Assess, Plan & Design and Build' },
      { number: '100+', label: 'AWS security assessments delivered' },
    ],
    useCases: {
      label: 'AWS SECURITY ASSESSMENT USE CASES',
      title: 'When to Engage AWS Cloud Security Services',
      titleHighlight: 'AWS',
      subtitle:
        'Many organizations have adopted AWS as their cloud provider. Our certified experts help you navigate this dynamic space and ensure a secure cloud environment.',
      items: [
        'Assessing your AWS security maturity and posture',
        'Migrating infrastructure to Amazon Web Services',
        'Implementing infrastructure-as-code security controls',
        'Preparing for AWS compliance and certification audits',
        'Building custom security policies and automation',
      ],
    },
    splits: [
      {
        label: 'AWS CLOUD SECURITY ASSESSMENT SERVICES OVERVIEW',
        title: 'Rely on Our AWS Expertise to Ensure a Secure Cloud Environment',
        titleHighlight: 'Secure',
        paragraphs: [
          'Many organizations have adopted Amazon Web Services (AWS) as their cloud service provider and while AWS provides a wide range of cloud services, it can be overwhelming for security teams to keep up.',
          'We are an Advanced AWS Consulting Partner and our team of AWS-certified experts can help you navigate this dynamic space and ensure that you have a secure cloud environment. From infrastructure-as-code to custom security controls and policies, we can help provide more maturity and security to solve some of the most complex AWS engineering problems.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
      },
      {
        label: 'AWS CLOUD SECURITY ASSESSMENT SERVICES APPROACH',
        title: 'Build or Enhance Your AWS Cloud Security Program',
        titleHighlight: 'Enhance',
        paragraphs: [
          'Our cloud security program is broken down into 4 stages: Learn, Assess, Plan & Design and Build. A critical part of securing a cloud environment is having a thorough understanding of the current state.',
          'We offer multiple ways to assess your AWS environment including AWS Well-Architected Review, AWS Security Health Check, AWS Security Maturity Assessment and Cloud Penetration Testing.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
        checklist: [
          'AWS Well-Architected Review',
          'AWS Security Health Check',
          'AWS Security Maturity Assessment',
          'AWS Cloud Security Strategy',
          'Secure Infrastructure CI/CD Pipeline',
          'Infrastructure-as-Code',
          'Policy-as-Code',
          'Detective Controls',
          'Preventative Controls',
          'Auto-Remediation',
        ],
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Solutions Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/AWS-SolArchitect-Professional-2022_100x120px.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'AWS SECURITY OUTCOMES',
      title: 'Achieve a Stronger AWS Security Posture',
      titleHighlight: 'Stronger',
      subtitle: 'Our AWS security services are designed to help organizations mature their cloud security program end-to-end.',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Assess', description: 'Gain a thorough understanding of your current AWS security state through comprehensive assessments.' },
      { icon: 'bi-map', title: 'Plan & Design', description: 'Develop a full cloud cybersecurity strategy, prioritized roadmap and secure architectures for your environment.' },
      { icon: 'bi-tools', title: 'Build', description: 'Have AWS and DevSecOps experts implement security controls directly into your AWS environment.' },
      { icon: 'bi-book', title: 'Learn', description: 'Stay current with educational sessions including AWS Immersion Days and Security Gameday exercises.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'saas-security': {
    parentService: 'cloud-security',
    title: 'SaaS Security',
    icon: 'bi-cloud',
    tagline: 'Transform SaaS Security from Obstacle to Advantage',
    heroLabel: 'SAAS SECURITY',
    heroHighlight: 'Transform',
    heroCta: 'Download Data Sheet',
    heroImage: '/images/heroes/cloud-security-assessments.jpg',
    description:
      'Gain visibility, reduce risk and embed compliance-driven security into Software-as-a-Service (SaaS) operations for measurable, organization-wide protection.',
    stats: [
      { number: '100s', label: 'of SaaS applications in a typical enterprise environment' },
      { number: '5', label: 'measurable outcomes: risk reduction, efficiency, compliance, innovation and resilience' },
      { number: '3', label: 'frameworks: CIS, NIST and CSA CCM/SSCF aligned' },
    ],
    useCases: {
      label: 'SAAS SECURITY SERVICES',
      title: 'Proactive SaaS Risk Management at Scale',
      titleHighlight: 'Proactive',
      subtitle:
        'Organizations rely on hundreds of SaaS applications, with each adding to inconsistent configuration controls, shadow IT proliferation and regulatory exposure that native security tools can\'t fully address. Our SaaS security services are designed to:',
      items: [
        'Take Control of SaaS Sprawl',
        'Get Ahead of Third-Party Risk',
        'Operationalize SaaS Security',
        'Build a Scalable and Effective Program',
      ],
    },
    splits: [
      {
        label: 'SAAS SECURITY OVERVIEW',
        title: 'From Assessment to Action: Complete SaaS Security',
        titleHighlight: 'Complete',
        paragraphs: [
          'Our SaaS security services help organizations gain visibility, reduce risk and maintain compliance across complex SaaS ecosystems. Enterprises often run hundreds of applications with inconsistent controls, shadow IT and regulatory exposure that native tools can\'t fully address.',
          'By embedding security into operations, operationalizing SSPM insights and providing actionable guidance aligned to CIS, NIST and CSA CCM and SSCF frameworks, we empower organizations to confidently develop SaaS security programs, strengthen their security posture and achieve measurable, compliance-aligned outcomes. Our SaaS security services help organizations achieve measurable results, including:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        checklist: [
          'Reduced risk with comprehensive SaaS visibility and strategic improvements',
          'Improved operational efficiency by centralizing SaaS security services',
          'Compliance with a systematic and automated approach',
          'Secure innovation through automated application onboarding and continuous monitoring',
          'Cyber resilience by rapidly detecting SaaS security issues and responding quickly to security events',
        ],
      },
      {
        label: 'SAAS SECURITY HEALTH CHECK',
        title: 'Gain Control Over Your SaaS Environment',
        titleHighlight: 'Control',
        paragraphs: [
          'Securing SaaS ecosystems is not a one-size-fits-all proposition. Each organization has its own unique blend of cloud applications, compliance requirements and risk tolerance. That\'s why our SaaS security assessment process begins with a health check. We dive deep into each specific environment to fully understand business context, compliance needs and desired outcomes.',
          'Our health check delivers a collaborative approach — working with stakeholders to understand the environment and define goals — plus deep discovery of overlooked vulnerabilities, and tailored recommendations aligned with industry frameworks and best practices.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
      {
        label: 'INTEGRATION RISK ASSESSMENT',
        title: 'Secure the Most Overlooked SaaS Attack Vector — The Integration Layer',
        titleHighlight: 'Integration Layer',
        paragraphs: [
          'Third-party integrations represent one of the most significant and overlooked attack vectors in SaaS environments. Our integration risk assessment focuses specifically on evaluating the OAuth connections, API integrations and service accounts that have access to your critical SaaS platforms.',
          'Trust our proven third-party risk reduction strategy to:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Right.png',
        checklist: [
          'Discover third-party connections, access scopes, permissions and data exposures.',
          'Identify potential security backdoors due to over-permissioned integrations, unmanaged connections and abandoned applications.',
          'Strengthen the attack surface with actionable integration lifecycle management guidance and scalable permission revocation strategies.',
        ],
      },
      {
        label: 'SAAS SECURITY POSTURE MANAGEMENT',
        title: 'Operationalize SaaS Security Posture Management',
        titleHighlight: 'Operationalize',
        paragraphs: [
          'Visibility without action delivers no security value. Our risk monitoring advisory service goes beyond just identifying vulnerabilities.',
          'We empower your team to operationalize your SaaS Security Posture Management (SSPM) tool and drive meaningful, ongoing risk reduction across your cloud application portfolio.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/02/Continuous-Saas-Security-Operations.png',
        checklist: [
          'Structured Risk Reviews: Stay on top of security risks with regular risk reviews that provide insight into concerns and prioritized, actionable guidance to improve security posture.',
          'Workflow Optimization: Streamline security operations with custom ticketing integrations, automated escalation processes and optimized workflows.',
          'Executive Reporting: Demonstrate the value of SaaS security to stakeholders with metrics and dashboards that demonstrate the impact of security improvements across the organization.',
        ],
      },
      {
        label: 'SAAS SECURITY PROGRAM DEVELOPMENT',
        title: 'Comprehensive Security for Complex SaaS Environments',
        titleHighlight: 'Comprehensive',
        paragraphs: [
          'SaaS security program development is a set of comprehensive services that help organizations build a sustainable operating model for securing their SaaS application ecosystem.',
          'With clarity, strategic guidance and execution, we take organizations from reactive to proactive security management across even the most complex SaaS environments. Services include: Baseline and Discovery (uncovering your full SaaS footprint and surfacing actionable risks), Strategic Design (policies, controls and governance aligned to regulatory demands), and Tailored Recommendations (repeatable procedures for onboarding, configuration monitoring and access governance).',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
    ],
    certGroups: [],
    outcomesSection: {
      label: 'SAAS SECURITY OUTCOMES',
      title: 'Proactive SaaS Risk Management at Scale',
      titleHighlight: 'Proactive',
      subtitle: 'Our SaaS security services are designed to help you take control, get ahead of risk and operationalize security.',
    },
    outcomes: [
      { icon: 'bi-eye', title: 'Take Control of SaaS Sprawl', description: 'Gain comprehensive visibility across all SaaS applications and eliminate shadow IT exposure.' },
      { icon: 'bi-shield', title: 'Get Ahead of Third-Party Risk', description: 'Proactively manage integration risk and vendor security across your SaaS ecosystem.' },
      { icon: 'bi-gear', title: 'Operationalize SaaS Security', description: 'Embed security into SaaS operations with SSPM insights and continuous monitoring.' },
      { icon: 'bi-graph-up', title: 'Build a Scalable Program', description: 'Develop a scalable, effective SaaS security program aligned with CIS, NIST and CSA frameworks.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'microsoft-security-services': {
    parentService: 'cloud-security',
    title: 'Microsoft Security Services',
    icon: 'bi-cloud',
    tagline: 'Maximize Your Microsoft Security Investment',
    heroLabel: 'MICROSOFT SECURITY SERVICES',
    heroHighlight: 'Maximize',
    heroCta: 'Learn More',
    heroImage: '/images/heroes/digital-transformation.jpg',
    description:
      'Our experts help organizations unlock the full potential of Microsoft tools. With expert guidance, we help transform underutilized capabilities into measurable security outcomes.',
    stats: [
      { number: '7', label: 'Microsoft security domains covered including cloud, endpoints and AI' },
      { number: '100%', label: 'certified Microsoft Solutions Partner for Security' },
      { number: '4', label: 'core service pillars: Uncover, Design, Build and Improve' },
    ],
    useCases: {
      label: 'MICROSOFT SECURITY USE CASES',
      title: 'When to Engage Microsoft Security Services',
      titleHighlight: 'Microsoft',
      subtitle:
        'Despite comprehensive Microsoft security licenses, resource constraints and competing priorities often leave powerful features underutilized, creating security gaps.',
      items: [
        'Identifying underutilized Microsoft security tools and redundant coverage',
        'Designing tailored, scalable security architectures with Microsoft 365',
        'Deploying optimized Microsoft solutions aligned with business priorities',
        'Measuring progress and enhancing ongoing Microsoft security protection',
        'Securely harnessing the potential of Microsoft Copilot and AI tools',
      ],
    },
    splits: [
      {
        label: 'EXPERT-LED MICROSOFT SECURITY SERVICES',
        title: 'Expert Guidance. Measurable Results.',
        titleHighlight: 'Expert',
        paragraphs: [
          'With rapid, diverse compute technology adoption comes increased pressure to secure complex environments at speed and scale. Our certified consultants bring deep Microsoft expertise and hands-on experience securing clouds, devices, applications, identities and AI applications.',
          'As a certified Microsoft Solutions Partner for Security, we deliver proven guidance, seamless integration and measurable outcomes that strengthen your organization\'s security posture.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
      },
      {
        label: 'SECURELY HARNESS MICROSOFT COPILOT',
        title: 'Securely Harness the Potential of Microsoft Copilot',
        titleHighlight: 'Copilot',
        paragraphs: [
          'We help organizations ensure robust security, compliance and governance around Microsoft Copilot. With robust security, organizations can maximize AI productivity gains and innovation potential while minimizing risk.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
        checklist: [
          'Comprehensive Security Evaluation: Assess AI model security, data protection mechanisms and access controls',
          'Compliance Readiness: Validate the environment against regulatory requirements and governance frameworks',
          'Strategic Implementation Planning: Develop a roadmap for secure Copilot integration',
          'Risk Mitigation: Identify potential vulnerabilities in Copilot architectures',
          'Adoption Optimization: Maximize ROI by ensuring technical and operational readiness',
        ],
      },
    ],
    certGroups: [
      {
        category: 'Microsoft Platforms',
        certs: [
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
          { name: 'Microsoft 365 Azure Solutions', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/06/Microsoft-365-cert-Azure-solutions-1.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'MICROSOFT SECURITY OUTCOMES',
      title: 'Secure More With Existing Tools',
      titleHighlight: 'Secure',
      subtitle: 'Our Microsoft Security Services uncover gaps, design for efficiency, build for outcomes and improve posture continuously.',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Uncover Gaps', description: 'Identify underutilized Microsoft tools and redundant security coverage across your environment.' },
      { icon: 'bi-diagram-3', title: 'Design for Efficiency', description: 'Create tailored, scalable security architectures aligned with your Microsoft investment.' },
      { icon: 'bi-tools', title: 'Build for Outcomes', description: 'Deploy optimized Microsoft security solutions aligned with your business priorities.' },
      { icon: 'bi-graph-up', title: 'Improve Posture Continuously', description: 'Measure progress and enhance ongoing Microsoft security protection over time.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'multi-cloud-security': {
    parentService: 'cloud-security',
    title: 'Multi-Cloud Security Solutions',
    icon: 'bi-cloud',
    tagline: 'Build a Comprehensive Cloud Security Strategy',
    heroLabel: 'MULTI-CLOUD SECURITY',
    heroHighlight: 'Build',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/multi-cloud-security.jpg',
    description:
      'Our Multi-Cloud Security solutions will help you establish and maintain a strong security program to reduce risk, prevent threats and ensure the resiliency of your multi-cloud infrastructure.',
    stats: [
      { number: '93%', label: 'of organizations utilize more than one cloud service provider' },
      { number: '3+', label: 'multi-cloud services: strategy, health check and maturity assessment' },
      { number: '150+', label: 'risk and security controls reviewed in our cloud security framework' },
    ],
    useCases: {
      label: 'MULTI-CLOUD SECURITY USE CASES',
      title: 'When to Implement Multi-Cloud Security',
      titleHighlight: 'Multi-Cloud',
      subtitle:
        'With 93% of organizations utilizing more than one cloud service provider, creating a comprehensive security strategy that spans all platforms is critical.',
      items: [
        'Operating across AWS, Azure and Google Cloud simultaneously',
        'Establishing a unified security strategy across cloud providers',
        'Validating cloud security posture against NIST and CSA standards',
        'Building infrastructure as code for multi-cloud environments',
        'Performing a multi-cloud security maturity assessment',
      ],
    },
    splits: [
      {
        label: 'MULTI-CLOUD SECURITY SERVICES: STRATEGY & ARCHITECTURE',
        title: 'Establish a Mature Cloud Security Program',
        titleHighlight: 'Mature',
        paragraphs: [
          'A multi-cloud environment demands a more versatile security approach. Our team of expert cloud engineers and architects can help you establish a mature cloud security program.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        checklist: [
          'Infrastructure as Code',
          'Policy as Code',
          'CI/CD frameworks',
          'Secure and resilient architectures for multi-cloud environments',
          'Multi-cloud computing strategies, virtual computing, containerization, server-less architectures',
        ],
      },
      {
        label: 'MULTI-CLOUD SECURITY SERVICES: HEALTH CHECK',
        title: 'Assess Your Cloud Security Posture',
        titleHighlight: 'Assess',
        paragraphs: [
          'Our team of experts can help you validate your current cloud security posture and provide recommendations based on cloud and other security standards such as NIST, Cloud Security Alliance\'s CCM and GDPR, as well as our years of experience.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
      {
        label: 'MULTI-CLOUD SECURITY SERVICES: MATURITY ASSESSMENT',
        title: 'Assess Your Multi-Cloud Environment',
        titleHighlight: 'Environment',
        paragraphs: [
          'Our team of cloud security experts can perform a multi-cloud maturity assessment of your environment, which provides you with a holistic view of your ecosystem, including your processes, people and technologies.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'MULTI-CLOUD SECURITY OUTCOMES',
      title: 'Build a Comprehensive Cloud Security Strategy',
      titleHighlight: 'Comprehensive',
      subtitle: 'Our proprietary Cloud Security Framework is designed for multi-cloud architectures, creating technical harmony between distinct cloud services.',
    },
    outcomes: [
      { icon: 'bi-shield-check', title: 'Unified Security Strategy', description: 'Create a comprehensive cloud security strategy that effectively spans all cloud platforms.' },
      { icon: 'bi-search', title: 'Posture Validation', description: 'Validate your current cloud security posture against NIST, CCM, GDPR and industry standards.' },
      { icon: 'bi-diagram-3', title: 'Multi-Cloud Harmony', description: 'Strike the right balance between CSP-native and multi-cloud tools and technologies.' },
      { icon: 'bi-bar-chart', title: 'Maturity Assessment', description: 'Gain a holistic view of your multi-cloud ecosystem across processes, people and technologies.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'cloud-security-assessments': {
    parentService: 'cloud-security',
    title: 'Cloud Security Assessment Services',
    icon: 'bi-cloud',
    tagline: 'Understand Where You are in Your Cloud Security Journey',
    heroLabel: 'CLOUD SECURITY ASSESSMENTS',
    heroHighlight: 'Understand',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/cloud-security-assessments.jpg',
    description:
      'Gain an analysis of your cloud readiness and maturity level through a holistic review across various domains that maps to your information security program.',
    stats: [
      { number: '5', label: 'assessment types: readiness, maturity, health check, infrastructure and audit' },
      { number: '3', label: 'review dimensions: technology, people and process' },
      { number: '150+', label: 'risk and security controls evaluated per assessment' },
    ],
    useCases: {
      label: 'CLOUD ASSESSMENT USE CASES',
      title: 'When to Perform a Cloud Security Assessment',
      titleHighlight: 'Cloud Security Assessment',
      subtitle:
        'The cloud provides many business and operational advantages, but you must understand your cloud readiness and maturity to ensure a security-first approach.',
      items: [
        'Planning your migration to a cloud-based environment',
        'Measuring your cloud security maturity level',
        'Evaluating cloud configurations and identifying security gaps',
        'Preparing for cloud compliance and regulatory audits',
        'Conducting a holistic review of your cloud security posture',
      ],
    },
    splits: [
      {
        label: 'CLOUD READINESS ASSESSMENT',
        title: 'Ensure You\'re Prepared in Your Cloud Migration',
        titleHighlight: 'Prepared',
        paragraphs: [
          'Our Cloud Readiness Assessment gives your organization actionable steps to follow in order to successfully adopt a cloud-based environment. We\'ll work with you to better understand the current hurdles that must be overcome to successfully migrate to the cloud.',
          'We evaluate the items your technology stack currently contains and the dependencies that need to be considered in your migration planning.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
      {
        label: 'CLOUD MATURITY ASSESSMENT',
        title: 'Gain a Quantified Snapshot of Your Current Cloud Estate',
        titleHighlight: 'Quantified',
        paragraphs: [
          'For organizations that already have a cloud footprint, our Cloud Maturity Assessment provides a clear understanding of how far along you are in your journey toward the cloud.',
          'Our maturity assessment is essential when you need to begin planning your progress and maturing your capabilities in the cloud — ideal for organizations both relatively new to the cloud and those that have already matured their activities.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
      {
        label: 'CLOUD HEALTH CHECK',
        title: 'Analyze Your Cloud Environment',
        titleHighlight: 'Analyze',
        paragraphs: [
          'Our health check service provides a look at your cloud environment from a people, process and technology perspective. We provide a comprehensive report and roadmap to remediating any issues discovered.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
        checklist: [
          'Technology: We examine your cloud environment against our cloud security framework, combining NIST, CCM and CSP controls',
          'People: We interview individuals who manage your cloud security program to understand strengths and weaknesses',
          'Process: We review processes utilized by your team to secure the cloud environment',
        ],
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'CLOUD ASSESSMENT OUTCOMES',
      title: 'Evaluate Your Cloud Security Environment',
      titleHighlight: 'Evaluate',
      subtitle: 'Our portfolio of cloud security assessment services ensure you understand the current state of your environment and help guide you on your cloud security journey.',
    },
    outcomes: [
      { icon: 'bi-check2-circle', title: 'Cloud Readiness', description: 'Gain actionable steps to successfully adopt a cloud-based environment for your organization.' },
      { icon: 'bi-bar-chart', title: 'Cloud Maturity', description: 'Understand exactly how far along you are in your cloud journey with a quantified maturity snapshot.' },
      { icon: 'bi-activity', title: 'Cloud Health Check', description: 'Receive a comprehensive report and roadmap for remediating issues across your cloud environment.' },
      { icon: 'bi-shield-check', title: 'Cloud Security Audit', description: 'Validate your cloud configurations against industry standards and best practices.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'cloud-security-strategy-architecture-services': {
    parentService: 'cloud-security',
    title: 'Cloud Security Strategy & Architecture Services',
    icon: 'bi-cloud',
    tagline: 'Ensuring a "Security First" Cloud Environment',
    heroLabel: 'CLOUD SECURITY STRATEGY & ARCHITECTURE SERVICES',
    heroHighlight: '"Security First"',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/cloud-security-strategy-architecture-services.jpg',
    description:
      'Our team of experts can help you implement and maintain a "security first" architecture in your cloud environment and improve your cloud security maturity.',
    stats: [
      { number: '150+', label: 'risk and security controls in our cloud security framework' },
      { number: '3', label: 'framework standards: CSA, CIS and operational best practices' },
      { number: '100%', label: 'security-first approach to cloud environment design' },
    ],
    useCases: {
      label: 'CLOUD STRATEGY USE CASES',
      title: 'When to Develop a Cloud Security Strategy',
      titleHighlight: 'Cloud Security Strategy',
      subtitle:
        'With the continuous evolution of cloud computing, keeping your security strategy controls and processes up to speed is increasingly challenging.',
      items: [
        'Aligning with emerging cloud compliance standards and programs',
        'Minimizing the complexity of your cloud environment',
        'Reducing security risks within your cloud infrastructure',
        'Selecting the right cloud service providers for your organization',
        'Establishing an automated, security-first cloud architecture',
      ],
    },
    splits: [
      {
        label: 'CLOUD SECURITY STRATEGY APPROACH',
        title: 'Having the Right Cloud Security Strategy Requires the Right Framework',
        titleHighlight: 'Framework',
        paragraphs: [
          'We\'ve developed a unique cloud security controls framework that assists you in creating a secure cloud environment and outlines key objectives. Our framework reviews over 150 risk and security controls based on the Cloud Security Alliance (CSA), CIS and our own operational experiences.',
          'With the guidance of our cloud security controls, your organization will be better able to track your services in the cloud and ensure they are all properly and securely configured.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
      {
        label: 'CLOUD SECURITY STRATEGY CONSIDERATIONS',
        title: 'Select the Cloud Service Providers that Best Fit Your Program',
        titleHighlight: 'Cloud Service Providers',
        paragraphs: [
          'We help you decide on the infrastructure and services needed to determine which cloud service providers are the right fit for your organization and environment.',
          'We help you consider areas including cloud providers\' certifications and standards, policies on data governance and security, reputations for reliability, key technologies used and partnerships and service dependencies.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Solutions Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/AWS-SolArchitect-Professional-2022_100x120px.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'CLOUD STRATEGY OUTCOMES',
      title: 'Ensure the Right Cloud Security Controls are in Place',
      titleHighlight: 'Controls',
      subtitle: 'Our security-first approach arms you with the right framework and best-fit tools to continuously monitor and manage risks and threats.',
    },
    outcomes: [
      { icon: 'bi-shield-check', title: 'Comply with Standards', description: 'Align with emerging cloud security standards and compliance programs across your environment.' },
      { icon: 'bi-diagram-3', title: 'Minimize Complexity', description: 'Streamline your cloud environment architecture to reduce overhead and operational burden.' },
      { icon: 'bi-lock', title: 'Reduce Risk', description: 'Implement automated controls that continuously monitor and manage cloud security risks and threats.' },
      { icon: 'bi-check2-circle', title: 'Select the Right Providers', description: 'Make informed cloud provider decisions based on certifications, governance policies and reliability.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'cloud-governance-solutions': {
    parentService: 'cloud-security',
    title: 'Cloud Governance Solutions',
    icon: 'bi-cloud',
    tagline: 'Align your cloud security goals and gain the knowledge to understand cloud computing risks through a modern governance approach.',
    heroLabel: 'CLOUD GOVERNANCE SOLUTIONS',
    heroHighlight: 'Governance',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/cloud-security-engineering-services.jpg',
    description:
      'Gain the necessary knowledge to understand cloud computing risks through a modern approach to risk assessment and security analysis.',
    stats: [
      { number: '5', label: 'phase methodology for cloud governance implementation' },
      { number: '3', label: 'teams aligned: GRC, security and cloud operations' },
      { number: '100%', label: 'focus on enabling safe, fast cloud adoption' },
    ],
    useCases: {
      label: 'CLOUD GOVERNANCE USE CASES',
      title: 'When to Implement Cloud Governance',
      titleHighlight: 'Cloud Governance',
      subtitle:
        'Cloud environments are in constant flux. Organizations must evaluate new capabilities and features against security, budgetary and regulatory requirements.',
      items: [
        'Overseeing control and direction of cloud services organization-wide',
        'Managing risk while enabling the benefits of cloud computing',
        'Aligning cloud teams with security and GRC requirements',
        'Implementing a five-phase cloud governance methodology',
        'Building organizational policies and standards for cloud adoption',
      ],
    },
    splits: [
      {
        label: 'CLOUD GOVERNANCE METHODOLOGY',
        title: 'Ensure Cloud Governance With Our Five Phase Methodology',
        titleHighlight: 'Five Phase Methodology',
        paragraphs: [
          'Since the inception of cloud computing, administrators, engineers and builders can extend the data center too easily. Our team of experts leverage our five-phase methodology to ensure your organization has a properly implemented Cloud Governance solution.',
          'Our unique methodology ensures your organization meets the requirements that are critical for managing operations and security risk by bringing together your GRC, security and cloud teams.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
      {
        label: 'CLOUD GOVERNANCE PROCESS',
        title: 'The Right Approach to Cloud Governance Services',
        titleHighlight: 'Right Approach',
        paragraphs: [
          'Our approach to cloud security will build an understanding of your business goals for cloud adoption, guide you in creating organizational policies and standards for those goals and ensure your cloud systems meet those requirements as well as security and compliance best practices.',
          'Throughout the process, we act as your trusted advisor. Our Cloud Governance approach rests on the shoulders of our Governance and Risk Practice and helps you carry the heavy elements on the organizational side.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'CLOUD GOVERNANCE OUTCOMES',
      title: 'Implement a Modern Approach to Cloud Security Governance',
      titleHighlight: 'Modern',
      subtitle: 'Our cloud governance solution gives you the ability to make informed decisions that will allow your organization to safely move at the speed of the cloud.',
    },
    outcomes: [
      { icon: 'bi-sliders', title: 'Oversee Control', description: 'Establish direction and control of cloud services across your organization with clear governance policies.' },
      { icon: 'bi-shield', title: 'Manage Risk', description: 'Manage cloud security risk while enabling the full benefits of cloud computing innovation.' },
      { icon: 'bi-check2-circle', title: 'Enable Decisions', description: 'Become an organization of "know" instead of "no" with data-driven cloud governance.' },
      { icon: 'bi-people', title: 'Align Teams', description: 'Bring together your GRC, security and cloud teams to meet critical operational and security requirements.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'cloud-security-engineering-services': {
    parentService: 'cloud-security',
    title: 'Cloud Security Engineering Services',
    icon: 'bi-cloud',
    tagline: 'Engineer your cloud journey to ensure security with certified specialists who scale to meet your unique needs.',
    heroLabel: 'CLOUD SECURITY ENGINEERING SERVICES',
    heroHighlight: 'Engineering',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/cloud-security-engineering-services.jpg',
    description:
      'Gain access to the expertise and resources you need to deliver on your cloud security roadmap.',
    stats: [
      { number: '3+', label: 'cloud platforms: AWS, Azure and Google Cloud certified specialists' },
      { number: '100%', label: 'security-first approach to cloud architecture and implementation' },
      { number: 'Scalable', label: 'resources from day-to-day guidance to full engineering team' },
    ],
    useCases: {
      label: 'CLOUD ENGINEERING USE CASES',
      title: 'When to Engage Cloud Security Engineering Services',
      titleHighlight: 'Cloud Security Engineering',
      subtitle:
        'The increasing prevalence of cloud services makes it critical for organizations to invest in cloud engineering and security expertise.',
      items: [
        'Complying with emerging cloud security standards and compliance programs',
        'Meeting internal and external policies and regulatory requirements',
        'Interfacing with external auditors and key stakeholders',
        'Accelerating your migration to a cloud computing environment',
        'Adopting native cloud services and implementing modern DevSecOps practices',
      ],
    },
    splits: [
      {
        label: 'CLOUD SECURITY ENGINEERING EXPERTISE',
        title: 'Our Cloud Security Engineering Services Can Scale to Meet Your Unique Needs',
        titleHighlight: 'Scale',
        paragraphs: [
          'Our highly-certified AWS, Azure and Google Cloud security specialists are available whether you are just looking for day-to-day guidance or a full cloud security engineering team. We work with you hand-in-hand to scale our cloud platform and infrastructure engineering resources to meet your cloud network security needs.',
          'Our team of cloud-native specialists and cloud-certified architects rely on a deep understanding of cloud-native services as well as a security-first approach to accelerate your migration and help you adopt native cloud services and implement modern practices.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
      },
      {
        label: 'CLOUD SECURITY ENGINEERING SUPPORT',
        title: 'Cloud Engineering Services to Improve Compliance',
        titleHighlight: 'Compliance',
        paragraphs: [
          'The speed at which organizations are migrating to cloud computing environments has not gone unnoticed by regulatory agencies. Our cloud engineering services can help your organization improve its compliance with industry regulations and standards.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
        checklist: [
          'Reducing your general business risk and risk of non-compliance',
          'Avoiding interruptions to operations when cloud security audits are announced',
          'Giving you a competitive edge against competitors who lack backups of cloud-based applications and data',
        ],
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Solutions Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/AWS-SolArchitect-Professional-2022_100x120px.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'CLOUD ENGINEERING OUTCOMES',
      title: 'Our Team of Cloud Security Engineers are Ready to Execute on Your Vision',
      titleHighlight: 'Execute',
      subtitle: 'We thoroughly analyze your cloud architecture to develop a robust cloud security roadmap and strategy while ensuring productivity remains uninterrupted.',
    },
    outcomes: [
      { icon: 'bi-shield-check', title: 'Comply with Standards', description: 'Meet emerging cloud security standards and compliance programs across your cloud environment.' },
      { icon: 'bi-file-check', title: 'Meet Requirements', description: 'Satisfy internal and external policies and regulatory requirements for your cloud infrastructure.' },
      { icon: 'bi-people', title: 'Engage Stakeholders', description: 'Interface effectively with external auditors and key stakeholders throughout the process.' },
      { icon: 'bi-rocket', title: 'Accelerate Migration', description: 'Accelerate your cloud migration while implementing modern, secure cloud-native practices.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'container-security': {
    parentService: 'cloud-security',
    title: 'Container Security Services',
    icon: 'bi-cloud',
    tagline: 'Ensure strong security controls for your cloud containers with expert guidance from planning to production.',
    heroLabel: 'CONTAINER SECURITY SERVICES',
    heroHighlight: 'Container',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/aws-cloud-security-assessment-services.jpg',
    description:
      'Our team of container security experts can ensure that security is built into your approach to leveraging container technology.',
    stats: [
      { number: '9+', label: 'container security project types we support' },
      { number: '100%', label: 'security-first approach to containerized workloads' },
      { number: 'Multi-cloud', label: 'container strategy support across all major platforms' },
    ],
    useCases: {
      label: 'CONTAINER SECURITY USE CASES',
      title: 'When to Engage Container Security Services',
      titleHighlight: 'Container Security',
      subtitle:
        'Container technology provides resilient, scalable and flexible environments — but with that power comes a new series of security controls and strategies.',
      items: [
        'Building a secure CI/CD pipeline for containerized workloads',
        'Automating and stabilizing your container ecosystem',
        'Implementing container orchestration with security controls',
        'Moving containers to production with strong security between environments',
        'Implementing a secure multi-cloud container strategy',
      ],
    },
    splits: [
      {
        label: 'CONTAINER SECURITY SERVICES OVERVIEW',
        title: 'Leverage Container Security Best Practices',
        titleHighlight: 'Best Practices',
        paragraphs: [
          'Container technology has been one of the leading innovations for providing IT operations with more resilient, scalable and flexible environments. With that power comes a new series of security controls and strategies.',
          'Our team has deep expertise and knowledge of container technologies. We can help you secure and stabilize your container ecosystem and secure every aspect of your development and delivery pipeline.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
      },
      {
        label: 'CONTAINER SECURITY EXPERTISE',
        title: 'We Can Help With Your Container Security Projects',
        titleHighlight: 'Projects',
        paragraphs: [
          'From planning your cloud and container roadmap to helping implement a production environment, our team of certified cloud security practitioners can help you with container-related projects across CI/CD pipeline development, container environment automation, container portability, resource efficiency and multi-cloud strategy.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
        checklist: [
          'CI/CD Pipeline Development',
          'Container Environment Automation',
          'Container Portability',
          'Resource Efficiency and Density',
          'Container Orchestration',
          'Public Cloud, On-Prem Support',
          'Multi-Cloud Strategy',
          'Microservice Architecture',
          'Traditional Application Migration to Microservices',
        ],
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'CONTAINER SECURITY OUTCOMES',
      title: 'Ensure Strong Container Security Controls',
      titleHighlight: 'Controls',
      subtitle: 'Our container security services help you take advantage of modern application architectures in the cloud with security built in from the start.',
    },
    outcomes: [
      { icon: 'bi-shield-check', title: 'Secure Your Pipeline', description: 'Build or enhance your secure DevOps model to ensure your container strategy is more resilient and compliant.' },
      { icon: 'bi-gear', title: 'Automate Securely', description: 'Create a secure, automated environment that ensures stability and compliance in your container program.' },
      { icon: 'bi-diagram-3', title: 'Orchestrate at Scale', description: 'Implement a comprehensive solution to manage containerized computing resources and ensure resilience.' },
      { icon: 'bi-cloud', title: 'Multi-Cloud Support', description: 'Implement a secure multi-cloud container strategy across any cloud environment.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'digital-transformation': {
    parentService: 'cloud-security',
    title: 'Digital Transformation Services',
    icon: 'bi-cloud',
    tagline: 'Ensure security is included in your digital transformation journey with the right strategy, expertise and toolsets.',
    heroLabel: 'DIGITAL TRANSFORMATION SERVICES',
    heroHighlight: 'Digital',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/digital-transformation.jpg',
    description:
      'We can help you ensure that security is baked into your digital transformation program.',
    stats: [
      { number: '6', label: 'cloud platform solutions: AWS, Azure, Google, Multi-Cloud, Oracle, SaaS' },
      { number: '150+', label: 'risk and security controls reviewed in our framework' },
      { number: '3', label: 'core services: Cloud Assessments, Strategy and DevOps' },
    ],
    useCases: {
      label: 'DIGITAL TRANSFORMATION USE CASES',
      title: 'When to Engage Digital Transformation Security Services',
      titleHighlight: 'Digital Transformation',
      subtitle:
        'Digital transformation provides organizations with robust architectures allowing agility and scalability at speeds never seen before — but security must be built in from the start.',
      items: [
        'Migrating and modernizing infrastructure to cloud environments',
        'Embedding security into your DevOps and CI/CD programs',
        'Evaluating cloud security maturity and readiness for transformation',
        'Building secure cloud-native architectures for agile development',
        'Selecting the right cloud providers and security tools for your program',
      ],
    },
    splits: [
      {
        label: 'DIGITAL TRANSFORMATION OVERVIEW',
        title: 'Empower Your Digital Transformation with the Right Strategy, Expertise and Tools',
        titleHighlight: 'Strategy',
        paragraphs: [
          'Digital transformation has provided organizations with a robust architecture allowing agility and scalability at speeds never seen before. With this new approach to computing comes a new way to think about security.',
          'We can provide you with the right strategy, expertise and toolsets to help you navigate your digital transformation program.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
      },
      {
        label: 'DIGITAL TRANSFORMATION SERVICES',
        title: 'We Can Help With Your Digital Transformation',
        titleHighlight: 'Digital Transformation',
        paragraphs: [
          'Our digital transformation services include Cloud Security Assessments that provide a scored report evaluating the maturity level of your organizational posture for the cloud, and Cloud Security Strategy and Architecture that leverages our unique controls framework to help determine the right infrastructure and services.',
          'Our Cloud DevOps service provides you with strategy and implementation on the right tools, process and skills to implement a full DevOps environment in the cloud with a security-first mindset.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
      },
    ],
    certGroups: [
      {
        category: 'Cloud Platforms',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
          { name: 'Azure Cybersecurity Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'DIGITAL TRANSFORMATION OUTCOMES',
      title: 'Solutions to Meet Your Cloud Environment',
      titleHighlight: 'Solutions',
      subtitle: 'We are an Advanced AWS Consulting Partner and our cloud security services are designed to help further mature your digital transformation.',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Cloud Security Assessments', description: 'Receive a scored report evaluating the maturity level of your organizational posture for the cloud.' },
      { icon: 'bi-map', title: 'Cloud Security Strategy', description: 'Leverage our controls framework to determine the right infrastructure, services and cloud providers.' },
      { icon: 'bi-gear', title: 'Cloud DevOps', description: 'Implement a full DevOps environment in the cloud with a security-first mindset baked into the process.' },
      { icon: 'bi-cloud', title: 'Multi-Platform Support', description: 'Access security services across AWS, Azure, Google Cloud, Multi-Cloud and SaaS environments.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'zero-trust-workshops': {
    parentService: 'cloud-security',
    title: 'Zero Trust Workshops & Consulting Services',
    icon: 'bi-cloud',
    tagline: 'Establish your roadmap for Zero Trust adoption through iterative, manageable steps designed to meet your unique requirements.',
    heroLabel: 'ZERO TRUST WORKSHOPS AND CONSULTING SERVICES',
    heroHighlight: 'Zero Trust',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/heroes/google-cloud-security.jpg',
    description:
      'Our Zero Trust Workshops are designed to help your organization incrementally adopt a "never trust, always verify" approach to security.',
    stats: [
      { number: '5', label: 'phase approach: Identify, Assess, Plan, Implement and Operate' },
      { number: '0', label: 'full re-architecture required to achieve Zero Trust security' },
      { number: '100%', label: 'least-privilege access model for your mobile workforce' },
    ],
    useCases: {
      label: 'ZERO TRUST USE CASES',
      title: 'When to Implement a Zero Trust Strategy',
      titleHighlight: 'Zero Trust',
      subtitle:
        'A Zero Trust security model is an end-to-end strategy around least-privilege that involves integrating identity, infrastructure, monitoring, analytics and automation.',
      items: [
        'Understanding your Zero Trust maturity level and readiness',
        'Driving adoption of critical capabilities in interactive steps',
        'Optimizing existing controls to align with risk reduction goals',
        'Securing cloud access for your mobile and remote workforce',
        'Implementing Zero Trust Network Access (ZTNA) use cases',
      ],
    },
    splits: [
      {
        label: 'ZERO TRUST WORKSHOPS: METHODOLOGY',
        title: 'Achieve Zero Trust with Our Customized 5-Phase Approach',
        titleHighlight: '5-Phase',
        paragraphs: [
          'We will help accelerate your Zero Trust adoption by working with you to understand your inventory of business assets, configure your access management, IGA and PAM solutions, ensure you have the necessary visibility into your network and application traffic, and optimize, centralize and automate your policies.',
          'Our workshops employ a proven 5-phased approach that is customized to meet your specific requirements and environmental challenges — all without re-architecting your entire network.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
      },
      {
        label: 'ZERO TRUST WORKSHOPS: NETWORK ACCESS',
        title: 'Securing the Cloud for Your Mobile Workforce',
        titleHighlight: 'Mobile Workforce',
        paragraphs: [
          'In cloud-based scenarios, organizations should consider a least-privilege access model. Our team of Zero Trust experts leverages a defined framework to establish business requirements for the mobile workforce\'s secure access to organizational assets — regardless of where they are located.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
        checklist: [
          'Ensure strong identity and enforcement capabilities are tightly integrated with existing security tools and processes',
          'Develop various Zero Trust Network Access (ZTNA) use cases and determine what controls are already in place or need to be implemented',
          'Integrate and optimize services to design, implement and support ZTNA use cases',
        ],
      },
    ],
    certGroups: [],
    outcomesSection: {
      label: 'ZERO TRUST OUTCOMES',
      title: 'Incrementally Build the Right Zero Trust Strategy',
      titleHighlight: 'Incrementally',
      subtitle: 'Our Zero Trust Workshops are designed to facilitate your journey through iterative, manageable steps toward a never trust, always verify security model.',
    },
    outcomes: [
      { icon: 'bi-bar-chart', title: 'Understand Your Maturity', description: 'Assess your Zero Trust maturity level and develop a roadmap to enhance your transformation.' },
      { icon: 'bi-arrow-right-circle', title: 'Drive Adoption', description: 'Adopt critical Zero Trust capabilities through interactive, iterative steps tailored to your environment.' },
      { icon: 'bi-sliders', title: 'Optimize Controls', description: 'Optimize existing security controls to align with your specific risk reduction goals.' },
      { icon: 'bi-lock', title: 'Secure Access', description: 'Implement least-privilege access for your mobile workforce regardless of their location.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'cnapp-services': {
    parentService: 'cloud-security',
    title: 'CNAPP Services',
    icon: 'bi-cloud',
    tagline: 'Security across your organization — safeguarding every layer of your cloud-native applications with visibility, control and proactive threat protection.',
    heroLabel: 'CLOUD NATIVE APPLICATION PROTECTION PLATFORM (CNAPP) SERVICES',
    heroHighlight: 'CNAPP',
    heroCta: 'Secure Your Cloud Applications',
    heroImage: '/images/heroes/multi-cloud-security.jpg',
    description:
      'Cloud-native growth demands security first. Our CNAPP services safeguard every layer of your cloud apps, delivering visibility, control and proactive threat protection to drive secure innovation and meet your goals with confidence.',
    stats: [
      { number: '43%', label: 'of organizations identified misconfigurations of permissions as their top multi-cloud concern' },
      { number: '85%', label: 'of enterprises struggle to prioritize cloud security events due to alert volume' },
      { number: '45%', label: 'faster mean time to detect (MTTD) by organizations leveraging CNAPPs' },
    ],
    useCases: {
      label: 'CNAPP USE CASES',
      title: 'When to Implement CNAPP Services',
      titleHighlight: 'CNAPP',
      subtitle:
        'Cloud-native growth demands a proactive approach to application security. Our CNAPP expertise delivers seamless security integration, empowering you with streamlined protection.',
      items: [
        'Implementing a proactive CNAPP strategy across cloud-native applications',
        'Managing threat detection and response for cloud workloads',
        'Automating vulnerability management across cloud environments',
        'Enforcing identity and access management controls at scale',
        'Achieving compliance and governance across cloud-native deployments',
      ],
    },
    splits: [
      {
        label: 'CNAPP ENABLEMENT SERVICES',
        title: 'Comprehensive Cloud Security Support',
        titleHighlight: 'Comprehensive',
        paragraphs: [
          'Our CNAPP Enablement Services empower your organization to fully secure cloud-native applications at every development and deployment phase. With reduced risks and enhanced protection, you can confidently maximize the flexibility and scalability of the cloud to drive innovation and growth.',
          'Our experts work closely with your security, development and operations teams to build a holistic CNAPP strategy, ensuring every layer of your cloud application is protected.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_right.png',
        checklist: [
          'Threat Detection and Response: Continuous real-time monitoring to detect and respond to security events',
          'Vulnerability Management: Automated tools and processes to identify, assess and remediate vulnerabilities across cloud environments',
          'Identity and Access Management: Robust controls for identity verification, access permissions and user management',
          'Compliance and Governance: Frameworks and policies to ensure adherence to regulatory requirements and internal security standards',
        ],
      },
      {
        label: 'BENEFITS OF CNAPP SERVICES',
        title: 'Benefits of CNAPP Services',
        titleHighlight: 'Benefits',
        paragraphs: [
          'Our custom services bring comprehensive protection to your cloud-native application. Whether you need help identifying the right CNAPP solution, implementing and customizing it or optimizing and maintaining it, we provide comprehensive, adaptable support.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_SOC_Left_Revised.png',
        checklist: [
          'Enhanced Threat Visibility: Gain full visibility into your cloud applications, identifying vulnerabilities and misconfigurations before they become threats',
          'Streamlined Compliance: Simplify regulatory compliance with automated policy enforcement and continuous monitoring',
          'Optimized Cloud Security Operations: Integrate and automate security workflows to enhance operational efficiency',
          'Proactive Mitigation: Shift to a proactive security approach, identifying and addressing risks earlier in the development lifecycle',
        ],
      },
    ],
    certGroups: [
      {
        category: 'CNAPP Certifications',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'GCSA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/02/GCSA-e1739297364848.png' },
        ],
      },
    ],
    outcomesSection: {
      label: 'CNAPP OUTCOMES',
      title: 'A Proactive Approach to CNAPP',
      titleHighlight: 'Proactive',
      subtitle: 'Our CNAPP expertise delivers seamless security integration, empowering you with streamlined protection, unified governance and proactive threat management.',
    },
    outcomes: [
      { icon: 'bi-eye', title: 'Enhanced Threat Visibility', description: 'Gain full visibility into your cloud applications, identifying vulnerabilities and misconfigurations before they become threats.' },
      { icon: 'bi-check2-circle', title: 'Streamlined Compliance', description: 'Simplify regulatory compliance with automated policy enforcement and continuous monitoring.' },
      { icon: 'bi-gear', title: 'Optimized Operations', description: 'Integrate and automate security workflows to enhance operational efficiency across cloud environments.' },
      { icon: 'bi-shield-fill-check', title: 'Proactive Mitigation', description: 'Shift to a proactive security approach, identifying and addressing risks earlier in the development lifecycle.' },
    ],
    testimonial: {
      quote: 'CyberPoint Security is basically family. They\'re always there when I need them. At the end of the day CyberPoint is always there to help and that\'s how they add value.',
      author: 'Mark Gilman',
      company: 'Security Manager',
      personImage: '/images/testimonials/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/nuance-logo.png',
    },
  },

  'data-security': {
    title: 'Data Security & Privacy',
    icon: 'bi-database',
    tagline: 'Protect Your Most Sensitive Data Everywhere',
    heroHighlight: 'Protect',
    heroImage: '/images/heroes/source-code-review.jpg',
    description:
      'Identify, classify and secure sensitive data across complex environments. Our Data Security and Privacy services align with global regulations and help you build a resilient data protection program.',
    stats: [
      { number: '$4.45M', label: 'average cost of a data breach (IBM 2025)' },
      { number: '83%', label: 'of breaches involve data in the cloud' },
      { number: '500+', label: 'data protection programs implemented' },
    ],
    useCases: {
      label: 'Data Security Assessment Timing',
      title: 'When to Perform a Data Security Assessment',
      titleHighlight: 'Security Assessment',
      subtitle:
        'Understanding where your sensitive data lives and how it is protected is the foundation of any effective security program.',
      items: ['Discovering unclassified sensitive data', 'Responding to data privacy regulations', 'Planning data migration projects', 'Investigating a data breach', 'Implementing data loss prevention'],
    },
    splits: [
      {
        label: 'Data Security Assessment Process',
        title: 'Build Data Protection Controls That Scale',
        titleHighlight: 'Build',
        paragraphs: [
          'Data is the lifeblood of every organization. Our data security services help you discover, classify, protect, and govern sensitive data across on-premises, cloud, and hybrid environments.',
          'We take a data-centric approach to security, helping you understand where sensitive data lives, who has access, and how it flows through your organization. Our services span data discovery and classification, DLP implementation, encryption strategy, privacy compliance (GDPR, CCPA, HIPAA), and data governance frameworks.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Data Security Assessment Process',
        title: 'Build Data Protection Controls That Scale',
        titleHighlight: 'Build',
        paragraphs: ['Our data security specialists take a data-centric approach, helping you discover, classify, and protect sensitive information across all environments. Our assessment methodology covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Data Discovery & Classification',
          'Access Control Review',
          'Encryption Assessment',
          'Data Loss Prevention',
          'Privacy Compliance Mapping',
          'Data Flow Analysis',
          'Retention Policy Review',
          'Database Security',
          'Backup & Recovery Controls',
          'Third-Party Data Sharing',
        ],
      },
      {
        label: 'Data Security Technology Experience',
        title: 'Capitalize on our Deep Data Security Experience',
        titleHighlight: 'Capitalize',
        paragraphs: [
          'With the explosion of data across cloud, on-premises, and hybrid environments, organizations struggle to maintain visibility into where sensitive data lives and how it is being accessed and shared.',
          'Our team of data security experts brings extensive experience in data protection technologies, privacy regulations, and governance frameworks to help you build a comprehensive data security program that protects your most valuable asset.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      {
        title: 'Data Security & Protection Services',
        description: 'Protect data from undesired access & mishandling, & secure data from deletion, ransomware, & theft',
      },
      { title: 'Data Security Governance', description: 'Protect & control your data from creation to destruction' },
      { title: 'Data Loss Prevention', description: 'Secure sensitive data & prevent unauthorized use' },
      { title: 'Data Privacy', description: 'Navigate complex Federal, State & international privacy regulations' },
    ],
    tactical: [],
    managed: [],
    training: [],
    megaMenuLayout: 'ai',
    megaMenuResources: [
      { image: '/images/nav/data-security-nav.jpg', title: '[DATASHEET] Data Security' },
      { image: '/images/nav/data-security-wp-nav.jpg', title: '[WHITEPAPER] Data Security Strategies for an Evolving Threat Landscape' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover where sensitive data lives across your environment.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement controls to protect data from unauthorized access.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify data protection controls are effective.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain ongoing compliance with data privacy regulations.' },
    ],
    testimonial: {
      quote:
        'They helped us achieve GDPR compliance across 12 countries and implemented a DLP program that reduced data incidents by 85%.',
      author: 'Chief Privacy Officer',
      company: 'European Manufacturing Group',
    },
  },

  'email-security': {
    title: 'Email Security',
    icon: 'bi-envelope-check',
    tagline: 'Defend Your Inbox Against Advanced Threats',
    heroHighlight: 'Defend',
    heroImage: '/images/heroes/multi-cloud-security.jpg',
    description:
      'Email Security services help protect content, accounts and infrastructure from threats like phishing, malware and data loss.',
    stats: [
      { number: '91%', label: 'of cyberattacks begin with email' },
      { number: '$2.4B', label: 'lost to BEC attacks annually' },
      { number: '98.5%', label: 'phishing detection rate for our clients' },
    ],
    useCases: {
      label: 'Email Security Assessment Timing',
      title: 'When to Strengthen Your Email Security',
      titleHighlight: 'Email Security',
      subtitle:
        'Email remains the number one attack vector. Proactive assessment reduces the risk of phishing, BEC, and credential theft.',
      items: ['Experiencing phishing attacks', 'Deploying new email platforms', 'Failing phishing simulations', 'Lacking DMARC implementation', 'Onboarding remote workforce'],
    },
    splits: [
      {
        label: 'Email Security Review Process',
        title: 'Deploy Layered Email Defenses Across Your Organization',
        titleHighlight: 'Deploy',
        paragraphs: [
          'Email remains the #1 attack vector. Our email security services protect your organization from phishing, business email compromise (BEC), malware delivery, and data exfiltration through email channels.',
          'We implement defense-in-depth email security strategies combining advanced threat protection, email authentication (DMARC/DKIM/SPF), user awareness training, and incident response capabilities. Our approach addresses both inbound threats and outbound data loss across Microsoft 365, Google Workspace, and on-premises email systems.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Email Security Review Process',
        title: 'Deploy Layered Email Defenses Across Your Organization',
        titleHighlight: 'Deploy',
        paragraphs: ['Our email security engineers evaluate your entire email ecosystem and implement defense-in-depth strategies to stop threats before they reach your users. Our assessment covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Email Gateway Configuration',
          'DMARC/DKIM/SPF Authentication',
          'Anti-Phishing Controls',
          'BEC Prevention Policies',
          'Attachment Sandboxing',
          'URL Rewriting & Analysis',
          'Outbound DLP Controls',
          'Email Encryption',
          'User Reporting Workflows',
          'Quarantine Management',
        ],
      },
      {
        label: 'Email Security Technology Experience',
        title: 'Utilize our Deep Email Security Experience',
        titleHighlight: 'Utilize',
        paragraphs: [
          'Email remains the number one attack vector for cybercriminals, with phishing, business email compromise, and malware delivery growing more sophisticated every day. Traditional email filters alone are no longer sufficient.',
          'Our team of email security specialists brings hands-on experience across Microsoft 365, Google Workspace, and enterprise email platforms to design and implement comprehensive email protection strategies that dramatically reduce your exposure to email-borne threats.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      { title: 'Phishing Services', description: 'Customized phishing services that provide meaningful results' },
      { title: 'Phishing as a Service', description: 'Optimize your phishing simulation program' },
    ],
    tactical: [],
    managed: [],
    training: [],
    megaMenuLayout: 'ai',
    megaMenuResources: [
      { image: '/images/nav/email-phishing-nav.jpg', title: '[WHITEPAPER] A Guide to Spear Phishing' },
      { image: '/images/nav/email-security-nav.jpg', title: '[WHITEPAPER] Countering the Threat of Spear Phishing' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect phishing and BEC attempts before they reach users.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Remove threats and remediate compromised accounts.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify email defenses with ongoing phishing simulations.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain email security posture with continuous monitoring.' },
    ],
    testimonial: {
      quote:
        'After implementing their email security program, we saw a 95% reduction in successful phishing attempts and zero BEC incidents.',
      author: 'CISO',
      company: 'Financial Services Firm',
    },
  },

  'endpoint-security': {
    title: 'Endpoint Security',
    icon: 'bi-pencil',
    tagline: 'Protect Every Endpoint Across Your Enterprise',
    heroHighlight: 'Protect',
    heroImage: '/images/heroes/application-security-as-a-service.jpg',
    description:
      'Detect, contain and remediate endpoint threats including ransomware across your entire device fleet. Full lifecycle services spanning selection, implementation and ongoing optimization.',
    stats: [
      { number: '70%', label: 'of breaches originate at the endpoint' },
      { number: '500K+', label: 'endpoints under our protection' },
      { number: '<1min', label: 'average detection time for critical threats' },
    ],
    useCases: {
      label: 'Endpoint Security Assessment Timing',
      title: 'When to Perform an Endpoint Security Assessment',
      titleHighlight: 'Security Assessment',
      subtitle:
        'Endpoints are a primary target for attackers. Regular assessments ensure your defenses keep pace with evolving threats.',
      items: ['Deploying new endpoint solutions', 'Experiencing endpoint compromises', 'Expanding remote workforce', 'Consolidating security tools', 'Preparing for compliance audits'],
    },
    splits: [
      {
        label: 'Endpoint Security Assessment Process',
        title: 'Strengthen Endpoint Defenses Across Your Fleet',
        titleHighlight: 'Strengthen',
        paragraphs: [
          'Endpoints are where work happens and where attackers gain footholds. Our endpoint security services help you deploy, optimize, and manage endpoint protection platforms that detect and respond to threats in real time.',
          'We help organizations move beyond traditional antivirus to next-generation endpoint protection (NGAV), endpoint detection and response (EDR), and extended detection and response (XDR). Our vendor-agnostic approach ensures you get the best-fit solution for your environment.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Endpoint Security Assessment Process',
        title: 'Strengthen Endpoint Defenses Across Your Fleet',
        titleHighlight: 'Strengthen',
        paragraphs: ['Our endpoint security engineers evaluate your current endpoint protection stack and implement next-generation defenses that detect and respond to threats in real time. Our assessment covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Endpoint Protection Platform Review',
          'EDR/XDR Configuration',
          'Endpoint Hardening Standards',
          'Patch Management Process',
          'Privilege Management',
          'Application Control Policies',
          'Device Encryption',
          'Mobile Device Security',
          'Remote Endpoint Protection',
          'Endpoint Logging & Telemetry',
        ],
      },
      {
        label: 'Endpoint Security Technology Experience',
        title: 'Tap Into our Deep Endpoint Security Experience',
        titleHighlight: 'Tap',
        paragraphs: [
          'With the rise of remote work and bring-your-own-device policies, endpoints have become the primary target for attackers seeking initial access. Traditional antivirus solutions can no longer keep pace with advanced threats.',
          'Our team of endpoint security specialists brings vendor-agnostic expertise across leading EDR, XDR, and endpoint protection platforms to help you deploy, optimize, and manage defenses that stop threats before they spread.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      {
        title: 'Endpoint Security Services',
        description: 'Architect, implement & optimize the right solution for your environment',
      },
    ],
    tactical: [],
    managed: [],
    training: [],
    megaMenuLayout: 'ai',
    megaMenuResource: {
      image: '/images/nav/endpoint-nav.jpg',
      title: '',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect endpoint threats with advanced behavioral analysis.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Contain and remediate endpoint compromises rapidly.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify endpoint security controls through testing.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain endpoint hygiene with continuous monitoring.' },
    ],
    testimonial: {
      quote:
        'Their managed EDR service detected a sophisticated supply chain attack that bypassed our other controls. Response was immediate.',
      author: 'IT Security Manager',
      company: 'Mid-Market Manufacturing Company',
    },
  },

  'grc': {
    title: 'Governance, Risk & Compliance (GRC)',
    icon: 'bi-check2-square',
    tagline: 'Build a Risk-Aligned, Compliance-Ready Program',
    heroHighlight: 'Build',
    heroImage: '/images/heroes/google-cloud-security.jpg',
    description:
      'Align security with business goals, manage risk and meet compliance mandates. Our GRC portfolio spans program assessments, policy development, risk frameworks and executive advisory.',
    stats: [
      { number: '800+', label: 'GRC program assessments completed' },
      { number: '100%', label: 'audit pass rate for managed compliance clients' },
      { number: '40%', label: 'average risk reduction in year one' },
    ],
    useCases: {
      label: 'GRC Assessment Timing',
      title: 'When to Perform a Governance, Risk & Compliance Assessment',
      titleHighlight: 'Compliance Assessment',
      subtitle:
        'Aligning security with business objectives requires continuous evaluation of your risk management and compliance posture.',
      items: ['Preparing for regulatory audits', 'Experiencing organizational changes', 'Building a new security program', 'Responding to third-party risk concerns', 'Aligning with new compliance frameworks'],
    },
    splits: [
      {
        label: 'GRC Program Assessment Process',
        title: 'Establish a Risk Management Framework That Scales',
        titleHighlight: 'Establish',
        paragraphs: [
          'Effective cybersecurity starts with governance. Our GRC services help you develop security policies, assess and manage risk, and achieve compliance with industry regulations and frameworks.',
          'We help organizations build and mature their GRC programs across multiple frameworks including NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP. Our consultants bring deep regulatory expertise and practical experience to help you achieve and maintain compliance efficiently.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'GRC Program Assessment Process',
        title: 'Establish a Risk Management Framework That Scales',
        titleHighlight: 'Establish',
        paragraphs: ['Our GRC consultants evaluate your governance, risk management, and compliance posture against industry frameworks and regulatory requirements. Our assessment methodology covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Security Policy Review',
          'Risk Assessment & Scoring',
          'Compliance Gap Analysis',
          'Control Mapping',
          'Third-Party Risk Management',
          'Regulatory Requirement Mapping',
          'Audit Readiness Evaluation',
          'Security Program Maturity',
          'Board-Level Reporting',
          'Continuous Monitoring Strategy',
        ],
      },
      {
        label: 'GRC Technology & Framework Experience',
        title: 'Draw on our Deep GRC Experience',
        titleHighlight: 'Draw',
        paragraphs: [
          'Navigating the complex landscape of security regulations, frameworks, and standards is a significant challenge for organizations of every size. Aligning security investments with business objectives requires both strategic vision and tactical expertise.',
          'Our team of GRC specialists brings deep regulatory expertise across NIST CSF, ISO 27001, SOC 2, HIPAA, PCI DSS, CMMC, and FedRAMP to help you build and maintain a risk management program that satisfies auditors and genuinely reduces risk.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      { title: 'Security Program Review', description: 'Ensure a sound cybersecurity program right-sized for your business' },
      { title: 'M&A Security', description: 'Know the cyber risks of a target company before acquisition' },
      { title: 'Data Security Governance', description: 'Protect & control your data from creation to destruction' },
      { title: 'AI Governance Services', description: 'Establish and maintain AI readiness' },
    ],
    strategicExtra: [
      { title: 'Business Continuity & Disaster Recovery', description: 'Ensure you have the right systems & processes in place for ongoing business operations' },
    ],
    tactical: [
      { title: 'Risk Assessment Services', description: 'Improve decision making, optimize IT investments & centralize visibility' },
      { title: 'Third-Party Risk Management', description: 'Manage inherent supply chain risk' },
      { title: 'Cyber Risk Quantification Services', description: "It's difficult to quantify something you prevented from happening." },
    ],
    tacticalExtra: [
      { title: 'CISO as a Service', description: 'Leverage experienced cybersecurity, governance & risk professionals' },
      { title: 'Third Party Risk Management as a Service', description: 'Leverage our expertise to effectively run your TPRM program' },
    ],
    managed: [
      { title: 'Compliance Assessment & Advisory Services', description: 'Stay on top of information security standards' },
      { title: 'CMMC Compliance', description: 'Ensure alignment with CMMC requirements' },
      { title: 'HIPAA Compliance', description: 'Protect patient health information & ensure HIPAA compliance' },
      { title: 'PCI DSS Compliance', description: 'Ensure you meet PCI compliance obligations' },
      { title: 'FedRAMP Advisory', description: 'Ensure your cloud applications meet FedRAMP and StateRAMP compliance' },
      { title: 'Compliance Management as a Service', description: 'Ensure continuous compliance in between assessments' },
    ],
    training: [],
    megaMenuLayout: 'grc',
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Assess risks and compliance gaps across your organization.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Close gaps with practical, cost-effective controls.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Demonstrate compliance through successful audits.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuous compliance with evolving regulations.' },
    ],
    testimonial: {
      quote:
        'CyberPoint helped us achieve SOC 2 Type II certification in under 6 months. Their structured approach made a complex process manageable.',
      author: 'Chief Compliance Officer',
      company: 'SaaS Technology Company',
    },
  },

  'iam': {
    title: 'Identity & Access Management (IAM)',
    icon: 'bi-fingerprint',
    tagline: 'Ensure the Right Access at the Right Time',
    heroHighlight: 'Ensure',
    heroImage: '/images/heroes/digital-transformation.jpg',
    description:
      'Manage human and non-human identities with IAM advisory, implementation and managed services. Reduce risk, improve compliance and streamline access across cloud and on-premise environments.',
    stats: [
      { number: '80%', label: 'of breaches involve compromised credentials' },
      { number: '600+', label: 'IAM implementations completed' },
      { number: '60%', label: 'reduction in access-related incidents' },
    ],
    useCases: {
      label: 'IAM Assessment Timing',
      title: 'When to Perform an Identity & Access Management Assessment',
      titleHighlight: 'Management Assessment',
      subtitle:
        'Identity is the new security perimeter. Ensuring the right access at the right time is critical to zero-trust security.',
      items: ['Implementing zero-trust architecture', 'Experiencing privilege escalation incidents', 'Consolidating identity platforms', 'Onboarding cloud applications', 'Addressing audit findings'],
    },
    splits: [
      {
        label: 'IAM Assessment Process',
        title: 'Enforce Zero-Trust Access Controls Across Your Environment',
        titleHighlight: 'Enforce',
        paragraphs: [
          'Identity is the new perimeter. Our IAM services help you implement zero-trust access controls, manage privileged accounts, and govern identity lifecycles across your hybrid environment.',
          'We deliver end-to-end IAM solutions including identity governance (IGA), privileged access management (PAM), single sign-on (SSO), multi-factor authentication (MFA), and zero-trust network access (ZTNA). Our vendor-agnostic approach ensures the best-fit solution for your environment and scale.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'IAM Assessment Process',
        title: 'Enforce Zero-Trust Access Controls Across Your Environment',
        titleHighlight: 'Enforce',
        paragraphs: ['Our IAM specialists conduct comprehensive assessments of your identity infrastructure, evaluating access policies, privilege management, and authentication mechanisms including:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Identity Governance Review',
          'Privileged Access Management',
          'Single Sign-On Configuration',
          'Multi-Factor Authentication',
          'Role-Based Access Control',
          'Access Certification Workflows',
          'Directory Services Assessment',
          'Federation & Trust Review',
          'Service Account Management',
          'Orphaned Account Discovery',
        ],
      },
      {
        label: 'IAM Technology Experience',
        title: 'Rely on our Deep IAM Experience',
        titleHighlight: 'Rely',
        paragraphs: [
          'With the shift to cloud and hybrid environments, managing identities and access has become exponentially more complex. Compromised credentials remain the leading cause of data breaches, making identity the new security perimeter.',
          'Our team of IAM experts brings extensive experience across leading identity platforms to help you implement zero-trust access controls, manage privileged accounts, and govern identity lifecycles at enterprise scale.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      { title: 'IAM Advisory Services', description: 'Ensure the best possible end state for your IAM program' },
      { title: 'IAM Implementation Services', description: 'Simplify your IAM solution implementation' },
      { title: 'Zero Trust Workshops', description: 'Establish a roadmap & strategy for Zero Trust adoption' },
    ],
    tactical: [
      { title: 'Access Management', description: 'Ensure secure & optimized business operations' },
      { title: 'Customer Identity & Access Management (CIAM)', description: 'Protect Your Customers. Enhance Their Experience. Achieve Compliance.' },
      { title: 'Identity Governance & Administration (IGA)', description: 'Automate user lifecycle processes while reducing risk & operational cost' },
      { title: 'Privileged Access Management (PAM)', description: 'Automate the PAM process to protect your crown jewels' },
    ],
    managed: [
      { title: 'Identity as a Service', description: 'Rely on experts to manage your IAM solutions' },
    ],
    training: [],
    megaMenuLayout: 'iam',
    megaMenuResource: {
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/REPORT_image_NAV.jpg',
      title: 'Report: The State of Identity and Access Management (IAM) Maturity, 2025',
      path: '/resources/state-of-iam-maturity-2025',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover excessive privileges and orphaned accounts.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement least-privilege access controls.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify access policies through regular reviews.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain identity hygiene with continuous governance.' },
    ],
    testimonial: {
      quote:
        'Their IAM team reduced our privileged account sprawl by 70% and implemented PAM across 2,000+ servers in just 3 months.',
      author: 'Director of IT Security',
      company: 'Healthcare System',
    },
  },

  'incident-response': {
    title: 'Incident Response (IR) & Threat Intelligence (TI)',
    icon: 'bi-exclamation-triangle',
    tagline: 'Prepare, Respond and Recover from Cyber Threats',
    heroHighlight: 'Prepare',
    heroImage: '/images/heroes/aws-cloud-security-assessment-services.jpg',
    description:
      '24/7 incident response and threat intelligence to detect, contain and recover from attacks. Strengthen your security posture before, during and after a security event.',
    stats: [
      { number: '1hr', label: 'average response time for critical incidents' },
      { number: '2,000+', label: 'incident investigations completed' },
      { number: '99%', label: 'of incidents contained within 24 hours' },
    ],
    useCases: {
      label: 'Incident Response Readiness Timing',
      title: 'When to Assess Your Incident Response Readiness',
      titleHighlight: 'Response Readiness',
      subtitle:
        'Being prepared to respond to security incidents is critical. Regular readiness assessments ensure your team can act swiftly and effectively.',
      items: ['After a security incident', 'Lacking an incident response plan', 'Experiencing staff turnover in security', 'Meeting cyber insurance requirements', 'Preparing for tabletop exercises'],
    },
    splits: [
      {
        label: 'Incident Response Review Process',
        title: 'Prepare Your Organization to Contain Threats Rapidly',
        titleHighlight: 'Prepare',
        paragraphs: [
          'When a breach occurs, every minute counts. Our incident response team provides rapid containment, forensic analysis, and recovery services. Our threat intelligence team keeps you ahead of emerging threats.',
          'Our GRIT (CyberPoint Research and Intelligence Team) combines world-class incident response with cutting-edge threat intelligence. We offer proactive IR readiness assessments, incident response retainer services, digital forensics, and actionable threat intelligence feeds tailored to your industry.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Incident Response Review Process',
        title: 'Prepare Your Organization to Contain Threats Rapidly',
        titleHighlight: 'Prepare',
        paragraphs: ['Our incident response team evaluates your readiness to detect, contain, and recover from security incidents. Our IR readiness assessment covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'IR Plan & Playbook Review',
          'Communication Protocols',
          'Escalation Procedures',
          'Forensic Readiness',
          'Evidence Preservation',
          'Containment Strategies',
          'Recovery Planning',
          'Threat Intelligence Integration',
          'Tabletop Exercise Design',
          'Post-Incident Review Process',
          'Legal & Regulatory Notification',
          'Cyber Insurance Alignment',
        ],
      },
      {
        label: 'Incident Response Technology Experience',
        title: 'Count on our Deep Incident Response Experience',
        titleHighlight: 'Count',
        paragraphs: [
          'When a security incident strikes, every minute of delay increases the damage. Organizations without tested incident response plans and experienced responders face significantly longer containment times and higher breach costs.',
          'Our GRIT (CyberPoint Research and Intelligence Team) brings battle-tested experience from thousands of incident investigations to help you prepare for, respond to, and recover from security incidents with speed and precision.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    strategic: [
      { title: 'IR Enablement Services', description: 'Ensure your team is equipped with required capabilities to effectively respond to threats' },
      { title: 'IR Maturity Assessment', description: 'Tailored assessment to enhance incident response effectiveness' },
      { title: 'IR Retainer', description: 'Ensure a team of IR experts are ready on-demand' },
      { title: 'Threat Actor Communications Retainer', description: 'Be ready to negotiate the best possible outcome if victimized by ransomware' },
      { title: 'Threat Hunting & Discovery', description: 'Identify potential threats before they become a breach' },
      { title: 'Threat Intelligence Services', description: 'Build a customizable TI program to meet your needs' },
    ],
    tactical: [
      { title: 'Incident Response', description: 'Quickly investigate & understand the full scope of an incident' },
      { title: 'Ransomware Response Services', description: 'Navigate ransomware variants, threat actors & techniques to ensure an effective outcome' },
      { title: 'Digital Forensics Services', description: 'Preserve, collect & analyze electronic data to support investigations & litigation' },
    ],
    tacticalExtra: [
      { title: 'Threat Intelligence as a Service', description: 'Fully managed threat intelligence program from conception to execution' },
    ],
    managed: [
      { title: 'Tabletop Exercises', description: 'Identify potential gaps in your IR process' },
      { title: 'Purple Team Assessments', description: 'Validate, extend & expand your IR capabilities, while actively working to reduce your threat profile' },
      { title: 'IR Playbook & Runbook Development', description: 'Ensure you\'re following a predefined process during a response effort' },
      { title: 'IR Plan Development & Review', description: 'Be prepared with a well-defined process for responding to an incident' },
    ],
    training: [],
    megaMenuLayout: 'ir',
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect and classify security incidents rapidly.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Contain and eradicate threats from your environment.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Confirm complete remediation through forensic verification.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Strengthen defenses to prevent recurrence.' },
    ],
    testimonial: {
      quote:
        'When we discovered a breach at 2 AM, their IR team was on the phone within 30 minutes and had the threat contained by morning.',
      author: 'CISO',
      company: 'Government Contractor',
    },
  },

  'incident-response-threat-intelligence': {
    title: 'Threat Intelligence Services',
    icon: 'bi-eye',
    tagline: 'Actionable Intelligence to Stay Ahead of Adversaries',
    heroLabel: 'THREAT INTELLIGENCE',
    heroHighlight: 'Intelligence',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Incident_Response_and_Threat_Intelligence.png',
    description:
      'GRIT delivers customizable, high-fidelity threat intelligence programs built around your industry, threat actors, and risk profile — so you can act before attackers do.',
    parentService: 'incident-response',
    statsBanner: [
      { number: '500+', label: 'threat actors tracked' },
      { number: '10,000+', label: 'indicators of compromise processed daily' },
      { number: '95%', label: 'accuracy rate on threat actor attribution' },
    ],
    useCases: {
      label: 'Threat Intelligence Use Cases',
      title: 'When You Need Threat Intelligence',
      titleHighlight: 'Threat Intelligence',
      subtitle:
        'Threat intelligence is most valuable when it is specific, timely, and actionable. GRIT programs are built to support a wide range of security functions.',
      items: [
        'Proactively defending against known threat actors',
        'Reducing alert fatigue with contextual threat data',
        'Supporting incident response investigations',
        'Meeting regulatory and compliance requirements',
        'Informing security strategy and board reporting',
        'Identifying third-party and supply chain risks',
      ],
    },
    splits: [
      {
        label: 'GRIT Threat Intelligence',
        title: 'Intelligence Built by Practitioners, for Practitioners',
        titleHighlight: 'Practitioners',
        paragraphs: [
          'GuidePoint Research and Intelligence Team (GRIT) is composed of elite threat researchers and incident response professionals who live at the intersection of active attack campaigns and defensive strategy.',
          'Our threat intelligence is drawn from real investigations, dark web monitoring, proprietary collection infrastructure, and deep adversary tracking — not just commodity feeds. Every report and indicator is validated by our analysts before it reaches you.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Incident_Response_and_Threat_Intelligence.png',
        imageAlt: 'GRIT Threat Intelligence',
      },
      {
        label: 'Customizable TI Programs',
        title: 'A Threat Intelligence Program Tailored to Your Risk',
        titleHighlight: 'Tailored',
        paragraphs: [
          'No two organizations face the same threat landscape. GRIT threat intelligence programs are scoped to your industry verticals, geographic footprint, technology stack, and known adversary interest — ensuring every piece of intelligence is relevant and actionable.',
        ],
        checklist: [
          'Strategic intelligence for executive and board-level reporting',
          'Operational intelligence for SOC and IR teams',
          'Tactical IOC feeds integrated into your existing tooling',
          'Dark web and underground forum monitoring',
          'Threat actor profiling and attribution',
          'Ransomware group tracking and early warning',
          'Third-party and supply chain threat monitoring',
          'Custom intelligence requirements (RFIs) answered by GRIT analysts',
        ],
        imageLeft: true,
      },
      {
        label: 'Threat Intelligence as a Service',
        title: 'Fully Managed Intelligence — From Collection to Action',
        titleHighlight: 'Fully Managed',
        paragraphs: [
          'For organizations that lack the internal resources to run a dedicated TI program, GRIT offers Threat Intelligence as a Service (TIaaS) — a fully managed offering where GRIT analysts act as an extension of your security team.',
          'From collection and analysis to dissemination and integration with your SIEM, SOAR, and ticketing systems, GRIT handles the entire intelligence lifecycle so your team can focus on response.',
        ],
      },
    ],
    strategic: [
      { title: 'Threat Intelligence Program Development', description: 'Build a customizable TI program aligned to your risk profile and business objectives' },
      { title: 'Threat Actor Profiling', description: 'In-depth profiles of adversaries most likely to target your organization' },
      { title: 'Intelligence Requirements Workshop', description: 'Define the intelligence your team needs to make better security decisions' },
    ],
    tactical: [
      { title: 'Threat Intelligence as a Service', description: 'Fully managed threat intelligence program from collection to dissemination' },
      { title: 'Dark Web Monitoring', description: 'Continuous monitoring of underground forums and marketplaces for your data and credentials' },
      { title: 'IOC Feed Integration', description: 'High-fidelity indicators of compromise integrated directly into your security tooling' },
    ],
    managed: [
      { title: 'Ransomware Early Warning', description: 'Track active ransomware groups and receive early warning when your sector is targeted' },
      { title: 'Executive Threat Briefings', description: 'Regular briefings tailored for CISOs and board audiences on the evolving threat landscape' },
    ],
    training: [],
    outcomesSection: {
      label: 'Threat Intelligence Outcomes',
      title: 'What GRIT Intelligence Delivers',
      titleHighlight: 'GRIT Intelligence',
      subtitle: 'Measurable improvements in detection, response, and strategic decision-making.',
    },
    outcomes: [
      { icon: 'bi-radar', title: 'Earlier Detection', description: 'Identify adversary activity before it reaches production systems.' },
      { icon: 'bi-lightning-charge', title: 'Faster Response', description: 'Contextual intelligence accelerates triage and reduces MTTR.' },
      { icon: 'bi-graph-up-arrow', title: 'Stronger Posture', description: 'Strategic intelligence informs long-term security investments.' },
      { icon: 'bi-shield-check', title: 'Reduced Risk', description: 'Proactive awareness of actor TTPs keeps you one step ahead.' },
    ],
    testimonial: {
      quote:
        'GRIT threat intelligence has transformed how our SOC operates. We went from reactive to proactive — and the quality of their reporting is unlike anything we\'ve seen from a vendor.',
      author: 'Director of Threat Operations',
      company: 'Fortune 500 Financial Services',
    },
  },

  'managed-security': {
    title: 'Managed Security Services',
    icon: 'bi-shield-lock',
    tagline: 'Extend your security team with our 24/7 managed security operations.',
    heroHighlight: 'Extend',
    heroImage: '/images/heroes/ai-security-large-language-models.jpg',
    description:
      'A strong security program relies on skilled resources to manage your environment. We can help reduce administrative burdens through our comprehensive "as-a-service" offerings, 24/7 monitoring and specialized expertise on demand.',
    stats: [
      { number: '24/7', label: 'security operations coverage' },
      { number: '15min', label: 'average time to detect critical threats' },
      { number: '1,200+', label: 'managed security clients' },
    ],
    useCases: {
      label: 'Managed Security Assessment Timing',
      title: 'When to Consider Managed Security Services',
      titleHighlight: 'Security Services',
      subtitle:
        'Extending your security team with managed services provides 24/7 coverage and expertise without the overhead of building an in-house SOC.',
      items: ['Lacking 24/7 security monitoring', 'Experiencing security staff shortages', 'Needing to reduce alert fatigue', 'Scaling security operations quickly', 'Optimizing security technology investments'],
    },
    splits: [
      {
        label: 'Managed Security Review Process',
        title: 'Integrate Managed Security Into Your Operations',
        titleHighlight: 'Integrate',
        paragraphs: [
          'Not every organization can staff a full security team. Our managed security services provide 24/7 monitoring, detection, and response capabilities through our GPVUE program — a customized, integrated security program designed for your unique needs.',
          'GPVUE is our signature managed security program that provides an integrated approach to cybersecurity. Unlike traditional MSSPs, GPVUE leverages our expertise across all cybersecurity disciplines to deliver a program specifically designed for your organization. We become an extension of your team, providing continuous monitoring, threat hunting, incident response, and strategic guidance.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Managed Security Review Process',
        title: 'Integrate Managed Security Into Your Operations',
        titleHighlight: 'Integrate',
        paragraphs: ['Our managed security team works with you to design and implement a customized security program through our GPVUE platform, covering all critical operational areas including:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Security Monitoring & Detection',
          'Alert Triage & Investigation',
          'Threat Hunting Operations',
          'Incident Response Coordination',
          'SIEM Management & Tuning',
          'Vulnerability Monitoring',
          'Compliance Reporting',
          'Executive Dashboards',
          'Technology Integration',
          'Continuous Improvement Planning',
        ],
      },
      {
        label: 'Managed Security Technology Experience',
        title: 'Benefit From our Deep Managed Security Experience',
        titleHighlight: 'Benefit',
        paragraphs: [
          'Building and staffing a 24/7 security operations capability is expensive and challenging. Many organizations struggle with alert fatigue, talent shortages, and the complexity of managing multiple security technologies.',
          'Our managed security team operates as a seamless extension of your organization, bringing years of experience across all cybersecurity disciplines to deliver continuous protection through our integrated GPVUE program.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'managed',
    gpvue: {
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/GPVUE.png',
      description: 'Integrated program designed to improve your security posture over the course of a year. Included Annual Program Review and Quarterly Business Reviews.',
      link: '/services/managed-security',
    },
    strategic: [
      { title: 'Managed Detection & Response (MDR)', description: 'Our experts help you identify the right MDR provider for your needs' },
    ],
    tactical: [
      { title: 'Application Security as a Service', description: 'AppSec tooling expertise to identify vulnerabilities & provide remediation recommendations' },
      { title: 'Breach & Attack Simulation as a Service', description: 'Leverage threat emulation operators to optimize your BAS program and increase ROI' },
      { title: 'CISO as a Service', description: 'Leverage experienced cybersecurity, governance & risk professionals' },
      { title: 'Compliance Management as a Service', description: 'Ensure continuous compliance in between assessments' },
      { title: 'Identity as a Service', description: 'Rely on experts to manage your Access Management, IGA, PAM & CIAM solutions' },
      { title: 'Next-Generation Firewall as a Service', description: 'Leverage experts to manage your NGFW administration' },
    ],
    managed: [
      { title: 'Penetration Testing as a Service', description: 'Combine the power of manual & automated penetration testing' },
      { title: 'Phishing as a Service', description: 'Optimize your phishing simulation program' },
      { title: 'Security Analytics as a Service', description: 'Our experts tailor your security analytics platform to fit your environment & use cases' },
      { title: 'Threat Intelligence as a Service', description: 'Fully managed threat intelligence program from conception to execution' },
      { title: 'Third Party Risk Management as a Service', description: 'Leverage our expertise to effectively run your TPRM program' },
      { title: 'Vulnerability Management as a Service', description: 'Our experts identify critical assets, threats, & vulnerabilities to close gaps' },
    ],
    training: [],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect threats with 24/7 monitoring and advanced analytics.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Respond to incidents with expert-led containment and recovery.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Measure security effectiveness with detailed reporting.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuous security operations without staffing burden.' },
    ],
    testimonial: {
      quote:
        'GPVUE transformed our security posture. We went from reactive firefighting to proactive threat management in just 6 months.',
      author: 'VP of Information Security',
      company: 'National Healthcare Provider',
    },
  },

  'network-security': {
    title: 'Network & Infrastructure Security',
    icon: 'bi-hdd-network',
    tagline: 'Protect your network infrastructure with defense-in-depth security controls.',
    heroHighlight: 'Protect',
    heroImage: '/images/heroes/cloud-security-assessments.jpg',
    description:
      'Network infrastructure is critical to operations. We help architect, deploy, optimize secure network infrastructures for both enterprise and government IT environments.',
    stats: [
      { number: '60%', label: 'of attacks involve lateral network movement' },
      { number: '1,000+', label: 'network security assessments completed' },
      { number: '50%', label: 'average reduction in attack surface' },
    ],
    useCases: {
      label: 'Network Security Assessment Timing',
      title: 'When to Perform a Network Security Assessment',
      titleHighlight: 'Security Assessment',
      subtitle:
        'Network infrastructure is the backbone of your organization. Regular assessments identify vulnerabilities before attackers exploit them.',
      items: ['Experiencing network security incidents', 'Planning network architecture changes', 'Implementing network segmentation', 'Adopting SD-WAN or SASE solutions', 'Preparing for penetration testing'],
    },
    splits: [
      {
        label: 'Network Security Assessment Process',
        title: 'Architect Secure Network Defenses From the Ground Up',
        titleHighlight: 'Architect',
        paragraphs: [
          'Your network is the backbone of your operations. Our network security services help you design, implement, and maintain secure network architectures that protect against external and internal threats.',
          'We provide comprehensive network security services including architecture review, segmentation design, firewall optimization, intrusion detection/prevention, and network access control. Our team has deep expertise across all major network security vendors and technologies.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Network Security Assessment Process',
        title: 'Architect Secure Network Defenses From the Ground Up',
        titleHighlight: 'Architect',
        paragraphs: [
          'Our network security engineers conduct comprehensive assessments of your network architecture, identifying vulnerabilities, misconfigurations, and opportunities for hardening across all layers including:',
        ],
        image: '/overview-icon-left.png',
        checklist: [
          'Network Architecture Review',
          'Firewall Rule Analysis',
          'Segmentation Assessment',
          'Intrusion Detection & Prevention',
          'Wireless Security Review',
          'VPN & Remote Access',
          'DNS Security',
          'Network Access Control',
          'Traffic Flow Analysis',
          'Zero Trust Network Design',
        ],
      },
      {
        label: 'Network Security Technology Experience',
        title: 'Apply our Deep Network Security Experience',
        titleHighlight: 'Apply',
        paragraphs: [
          'As networks grow in complexity with cloud connectivity, remote access, and IoT devices, maintaining a secure network architecture becomes increasingly challenging. Lateral movement remains a primary attack technique used in most breaches.',
          'Our team of network security architects brings deep expertise across all major network security vendors and technologies to help you design, implement, and maintain defense-in-depth network architectures that minimize your attack surface.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'network',
    strategic: [
      { title: 'Security Architecture Review', description: 'Understand existing capabilities & security controls' },
      { title: 'Network Segmentation Services', description: 'Ensure your network is secure through segmentation' },
      { title: 'Digital Transformation', description: 'Navigate digital transformation with the right strategy, expertise & toolsets' },
      { title: 'Zero Trust Workshops', description: 'Establish a roadmap & strategy for Zero Trust adoption' },
    ],
    tactical: [
      { title: 'F5 Application Delivery', description: 'Maximize the security, compliance, performance & optimization of mission critical applications' },
      { title: 'Network Security Architecture & Implementation', description: "Review your network security capabilities and design, and ultimately architect a solution that meets your needs for today's dynamic security landscape" },
      { title: 'Network Security Platform Specific Services', description: 'Leverage our expertise to design, implement & manage your network security' },
    ],
    managed: [
      { title: 'Next-Generation Firewall as a Service', description: 'Leverage experts to manage your NGFW administration' },
    ],
    training: [],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover network vulnerabilities and misconfigurations.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement network segmentation and hardening controls.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify network defenses through penetration testing.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain network security with continuous monitoring.' },
    ],
    testimonial: {
      quote:
        'Their network security team redesigned our segmentation architecture, reducing our lateral movement risk by 80%.',
      author: 'Network Security Director',
      company: 'Large University System',
    },
  },

  'ot-security': {
    title: 'OT, IoT, and IIoT Security',
    icon: 'bi-gear-wide-connected',
    tagline:
      'Secure operational technology and industrial control systems without disrupting operations.',
    heroHighlight: 'Secure',
    heroImage: '/images/heroes/application-security-as-a-service.jpg',
    description:
      'We help organizations bridge IT/OT convergence to reduce risk and ensure compliance. OT Security Services include assessments, program development and managed services to protect critical infrastructure while ensuring uptime and safety.',
    stats: [
      { number: '300%', label: 'increase in OT-targeted attacks since 2023' },
      { number: '200+', label: 'OT/ICS security assessments completed' },
      { number: '95%', label: 'client recommendation rate' },
    ],
    useCases: {
      label: 'OT Security Assessment Timing',
      title: 'When to Perform an OT Security Assessment',
      titleHighlight: 'Security Assessment',
      subtitle:
        'Operational technology environments require specialized security approaches that balance protection with operational continuity.',
      items: ['Connecting OT systems to IT networks', 'Experiencing OT-specific threats', 'Meeting industrial compliance requirements', 'Modernizing legacy control systems', 'Planning IT/OT convergence initiatives'],
    },
    splits: [
      {
        label: 'OT Security Assessment Process',
        title: 'Protect Industrial Control Systems Without Disrupting Operations',
        titleHighlight: 'Protect',
        paragraphs: [
          'Operational technology (OT) and industrial control systems (ICS) face unique security challenges. Our OT security services bridge the gap between IT and OT to protect critical infrastructure without impacting operational reliability.',
          'We specialize in securing industrial environments including manufacturing, energy, utilities, and critical infrastructure. Our team understands the unique constraints of OT environments — availability requirements, legacy systems, and safety implications. We provide assessments, architecture design, and managed services tailored to OT/ICS/SCADA environments.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'OT Security Assessment Process',
        title: 'Protect Industrial Control Systems Without Disrupting Operations',
        titleHighlight: 'Protect',
        paragraphs: [
          'Our OT security specialists assess your industrial environment using methodologies designed for operational technology, ensuring security improvements never compromise availability or safety. Our assessment covers:',
        ],
        image: '/overview-icon-left.png',
        checklist: [
          'OT Asset Inventory & Mapping',
          'Network Architecture Review',
          'IT/OT Boundary Assessment',
          'SCADA/DCS Security Review',
          'PLC & RTU Hardening',
          'Industrial Protocol Analysis',
          'Remote Access Controls',
          'Patch Management for OT',
          'Safety System Integration',
          'IEC 62443 Compliance Assessment',
        ],
      },
      {
        label: 'OT Security Technology Experience',
        title: 'Trust our Deep OT Security Experience',
        titleHighlight: 'Trust',
        paragraphs: [
          'Securing operational technology environments presents unique challenges that traditional IT security approaches cannot address. Legacy systems, proprietary protocols, and strict availability requirements demand specialized expertise and a safety-first mindset.',
          'Our team of OT security experts brings hands-on experience across manufacturing, energy, utilities, and critical infrastructure to help you bridge the gap between IT and OT security while maintaining operational continuity.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'ot',
    strategic: [
      { title: 'OT Security Implementation Services', description: 'Evaluate, select, test, and implement tools to secure OT environments' },
    ],
    tactical: [
      { title: 'OT Architecture Review', description: 'Identify and assess security weakness in your OT architecture' },
      { title: 'Cybersecurity Architecture Design Review (CADR)', description: "Validate your OT security controls to meet TSA's security directive" },
      { title: 'OT Security Program Review', description: 'Align your OT security strategy with your business goals and compliance standards' },
      { title: 'IoT & IIoT Security Assessment', description: 'Gain an in-depth architectural review of your IoT & IIoT ecosystems' },
    ],
    managed: [
      { title: 'OT Penetration Testing', description: 'Bridge the gap between IT and OT to ensure a holistic view of your converged environments' },
      { title: 'IoT Threat Modeling', description: 'Reduce risk by identifying IoT vulnerabilities and threats earlier' },
    ],
    training: [],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover OT assets and assess their security posture.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Implement controls without disrupting industrial operations.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify OT security through safe, non-disruptive testing.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain OT security with continuous monitoring.' },
    ],
    testimonial: {
      quote:
        'They understood our OT environment and the criticality of uptime. Their assessment was thorough without causing any production disruptions.',
      author: 'Plant Security Manager',
      company: 'Energy & Utilities Company',
    },
  },

  'security-awareness': {
    title: 'Security Awareness & Education',
    icon: 'bi-mortarboard',
    tagline: 'Transform your workforce into your strongest line of defense.',
    heroHighlight: 'Transform',
    heroImage: '/images/heroes/source-code-review.jpg',
    description:
      'Security Awareness and Education Services deliver comprehensive, customizable training to reduce human-centric risks, tailored for employees and executives.',
    stats: [
      { number: '82%', label: 'of breaches involve the human element' },
      { number: '75%', label: 'reduction in click rates after training' },
      { number: '50K+', label: 'employees trained annually' },
    ],
    useCases: {
      label: 'Security Awareness Assessment Timing',
      title: 'When to Assess Your Security Awareness Program',
      titleHighlight: 'Awareness Program',
      subtitle:
        'Your workforce is your first line of defense. Regular assessment of awareness programs ensures employees remain vigilant against evolving threats.',
      items: ['High phishing simulation failure rates', 'After a social engineering incident', 'Onboarding large numbers of employees', 'Meeting compliance training requirements', 'Building a security-first culture'],
    },
    splits: [
      {
        label: 'Security Awareness Program Process',
        title: 'Transform Employee Behavior Through Targeted Training',
        titleHighlight: 'Transform',
        paragraphs: [
          'People are both the greatest vulnerability and the strongest defense. Our security awareness programs educate employees to recognize and respond to threats, building a security-first culture across your organization.',
          'We deliver engaging, effective security awareness programs that go beyond checkbox compliance. Our approach combines interactive training, phishing simulations, role-based education, and culture measurement to create lasting behavioral change. We also offer Security University — our advanced training program for cybersecurity professionals.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Security Awareness Program Process',
        title: 'Transform Employee Behavior Through Targeted Training',
        titleHighlight: 'Transform',
        paragraphs: ['Our security awareness specialists design and deliver engaging programs that create lasting behavioral change. Our comprehensive approach covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Phishing Simulation Campaigns',
          'Interactive Training Modules',
          'Role-Based Education',
          'Executive Awareness Briefings',
          'Social Engineering Testing',
          'Security Culture Measurement',
          'Just-In-Time Training',
          'Compliance Training',
          'Incident Reporting Workflows',
          'Gamification & Recognition Programs',
        ],
      },
      {
        label: 'Security Awareness Training Experience',
        title: 'Embrace our Deep Security Awareness Experience',
        titleHighlight: 'Embrace',
        paragraphs: [
          'The human element remains the leading factor in security breaches. Even the most advanced technical controls cannot fully protect against well-crafted social engineering attacks that exploit human psychology.',
          'Our team of security awareness professionals brings expertise in adult learning, behavioral science, and cybersecurity to design programs that go beyond checkbox compliance and create a genuine security-first culture across your organization.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'ai',
    strategic: [
      { title: 'Security Awareness Services', description: 'Ensure your employees have the security awareness & education to minimize the risk of being socially engineered' },
    ],
    tactical: [],
    managed: [],
    training: [],
    megaMenuResources: [
      { image: '/images/nav/email-phishing-nav.jpg', title: '[WHITEPAPER] A Guide to Spear Phishing' },
      { image: '/images/nav/email-security-nav.jpg', title: '[WHITEPAPER] Countering the Threat of Spear Phishing' },
    ],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Measure current awareness levels and risk areas.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Deliver targeted training to close knowledge gaps.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Test awareness through simulations and assessments.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain awareness with ongoing education programs.' },
    ],
    testimonial: {
      quote:
        'Our phishing click rate dropped from 35% to 4% in one year. Their program made security awareness engaging, not just mandatory.',
      author: 'HR Director',
      company: 'Regional Bank',
    },
  },

  'soc': {
    title: 'Security Operations Center (SOC) Services',
    icon: 'bi-globe2',
    tagline: 'Build or enhance your security operations center with expert guidance.',
    heroHighlight: 'Build',
    heroImage: '/images/heroes/cloud-security-engineering-services.jpg',
    description:
      'We design, optimize and operate modern Security Operations programs. Transforming complex security tools into scalable detection, automation and response capabilities that deliver measurable security performance.',
    stats: [
      { number: '200+', label: 'SOC projects delivered' },
      { number: '85%', label: 'reduction in mean time to detect (MTTD)' },
      { number: '24/7', label: 'coverage with follow-the-sun model' },
    ],
    useCases: {
      label: 'SOC Assessment Timing',
      title: 'When to Assess Your Security Operations Center',
      titleHighlight: 'Operations Center',
      subtitle:
        'An effective SOC is critical for threat detection and response. Regular assessments ensure your operations are optimized and effective.',
      items: ['Experiencing high alert volumes', 'Building a new SOC from scratch', 'Modernizing legacy SIEM platforms', 'Improving mean time to detect', 'Evaluating SOC-as-a-Service options'],
    },
    splits: [
      {
        label: 'SOC Assessment Process',
        title: 'Elevate Your Security Operations Capabilities',
        titleHighlight: 'Elevate',
        paragraphs: [
          'A well-run SOC is the nerve center of your security program. We help you build, optimize, or outsource SOC capabilities with the right people, processes, and technology.',
          'Whether you need to build a SOC from scratch, optimize an existing operation, or augment your team with expert analysts, we have the experience to help. Our SOC services cover SIEM optimization, alert tuning, playbook development, threat hunting, and SOC maturity assessment.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'SOC Assessment Process',
        title: 'Elevate Your Security Operations Capabilities',
        titleHighlight: 'Elevate',
        paragraphs: ['Our SOC specialists evaluate your security operations center across people, processes, and technology to identify gaps and opportunities for improvement. Our assessment covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'SOC Maturity Assessment',
          'SIEM Rule Optimization',
          'Alert Triage Workflow',
          'Playbook Development',
          'Threat Hunting Methodology',
          'Analyst Skill Assessment',
          'Metrics & KPI Framework',
          'Tool Integration Review',
          'Shift Coverage Analysis',
          'Automation & SOAR Readiness',
        ],
      },
      {
        label: 'SOC Technology Experience',
        title: 'Access our Deep SOC Operations Experience',
        titleHighlight: 'Access',
        paragraphs: [
          'Building and maintaining an effective SOC is one of the most challenging aspects of cybersecurity. High alert volumes, analyst fatigue, and rapidly evolving threats make it difficult to maintain consistent detection and response quality.',
          'Our team of SOC experts brings extensive experience in designing, building, and optimizing security operations centers to help you achieve faster detection, more efficient response, and measurable improvements in your security posture.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'soc',
    strategic: [
      { title: 'Security Analytics Services', description: 'Drive real-time insights into your security posture' },
      { title: 'SOC Optimization', description: 'Improve the efficiency and effectiveness of your incident detection and response' },
      { title: 'SOAR Services', description: "Jumpstart your SOC's ability to respond via automated playbooks" },
      { title: 'Security Data Pipeline Services', description: 'Unlock the full potential of your security tools' },
      { title: 'Insider Threat Solutions', description: 'Build an insider threat program that identifies compromised credentials & malicious individuals' },
    ],
    tactical: [
      { title: 'Splunk Services', description: 'Maximize the value of your Splunk instance, improve visibility of security events, & reduce remediation time' },
    ],
    managed: [
      { title: 'Security Analytics as a Service', description: 'Experts tailor your security analytics platform to fit your environment & use cases' },
    ],
    training: [],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Detect threats faster with optimized detection rules.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Respond to incidents with standardized playbooks.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Measure SOC effectiveness with key metrics.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain 24/7 security monitoring and response.' },
    ],
    testimonial: {
      quote:
        'They helped us transform our SOC from a noisy alert factory into a lean, effective threat detection machine.',
      author: 'SOC Manager',
      company: 'Insurance Company',
    },
  },

  'staff-augmentation': {
    title: 'Staff Augmentation',
    icon: 'bi-person-plus',
    tagline: 'Fill Critical Security Talent Gaps Fast',
    heroHighlight: 'Fill',
    heroImage: '/images/heroes/ai-security-large-language-models.jpg',
    description:
      'Access vetted consultants, engineers and analysts on demand. Flexible augmentation services bridge skill gaps and deliver certified expertise for implementation, compliance and strategic security programs.',
    stats: [
      { number: '3.5M', label: 'unfilled cybersecurity jobs globally' },
      { number: '500+', label: 'security professionals placed' },
      { number: '48hr', label: 'average time to present qualified candidates' },
    ],
    useCases: {
      label: 'Staff Augmentation Assessment Timing',
      title: 'When to Consider Security Staff Augmentation',
      titleHighlight: 'Staff Augmentation',
      subtitle:
        'Finding and retaining qualified cybersecurity talent is challenging. Staff augmentation fills critical gaps while you build your team.',
      items: ['Facing critical security talent gaps', 'Launching new security initiatives', 'Experiencing team burnout or turnover', 'Needing specialized expertise', 'Scaling security operations rapidly'],
    },
    splits: [
      {
        label: 'Staff Augmentation Review Process',
        title: 'Match Expert Security Talent to Your Specific Needs',
        titleHighlight: 'Match',
        paragraphs: [
          'The cybersecurity talent shortage is real. Our staff augmentation services provide experienced security professionals to supplement your team — from short-term project support to long-term embedded consultants.',
          'We maintain a deep bench of vetted cybersecurity professionals across all disciplines. Whether you need a SIEM engineer for a migration project, a GRC analyst for audit prep, or a security architect for a cloud transformation, we can provide the right expertise quickly.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Staff Augmentation Review Process',
        title: 'Match Expert Security Talent to Your Specific Needs',
        titleHighlight: 'Match',
        paragraphs: ['Our staffing specialists work with you to understand your requirements and match vetted cybersecurity professionals to your team. Our placement process covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Skills & Requirements Analysis',
          'Candidate Vetting & Screening',
          'Technical Assessment',
          'Cultural Fit Evaluation',
          'Security Clearance Verification',
          'Onboarding & Integration',
          'Performance Monitoring',
          'Knowledge Transfer Planning',
          'Contract & SOW Management',
          'Continuous Talent Pipeline',
        ],
      },
      {
        label: 'Staff Augmentation Placement Experience',
        title: 'Leverage our Deep Security Staffing Experience',
        titleHighlight: 'Leverage',
        paragraphs: [
          'The cybersecurity talent shortage continues to grow, with millions of positions unfilled globally. Finding qualified professionals with the right technical skills and cultural fit is increasingly difficult and time-consuming.',
          'Our staffing team maintains a deep bench of pre-vetted cybersecurity professionals across all disciplines, enabling us to quickly place the right experts in your organization — whether for short-term projects or long-term embedded engagements.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'staff',
    strategic: [
      { title: 'Staff Augmentation Services', description: 'Increase your staffing to prioritize cybersecurity objectives in a cost-effective manner' },
    ],
    tactical: [],
    managed: [
      { title: 'CISO as a Service', description: 'Leverage experienced cybersecurity, governance & risk professionals' },
    ],
    training: [],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Assess talent gaps and define role requirements.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Fill gaps with qualified, vetted professionals.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify performance through regular reviews.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuity with knowledge transfer processes.' },
    ],
    testimonial: {
      quote:
        'They placed two senior security engineers within a week. Both were exceptional and stayed with us for over a year.',
      author: 'Director of Security Operations',
      company: 'Technology Company',
    },
  },

  'vulnerability-management': {
    title: 'Vulnerability Management & Penetration Testing',
    icon: 'bi-activity',
    tagline: 'Find and Fix Vulnerabilities Before Attackers Do',
    heroHighlight: 'Find',
    heroImage: '/images/heroes/cloud-security-strategy-architecture-services.jpg',
    description:
      'Identify, prioritize and remediate security gaps with VM and penetration testing services. Go beyond checkbox compliance and achieve measurable risk reduction across your attack surface.',
    stats: [
      { number: '25K+', label: 'new CVEs published annually' },
      { number: '5,000+', label: 'penetration tests conducted' },
      { number: '85%', label: 'of exploited vulns had a patch available' },
    ],
    useCases: {
      label: 'Vulnerability Management Assessment Timing',
      title: 'When to Assess Your Vulnerability Management Program',
      titleHighlight: 'Management Program',
      subtitle:
        'A mature vulnerability management program finds and fixes weaknesses before they can be exploited by attackers.',
      items: ['Lacking visibility into your attack surface', 'Failing to prioritize remediation efforts', 'Preparing for penetration testing', 'Responding to new critical vulnerabilities', 'Building a continuous testing program'],
    },
    splits: [
      {
        label: 'Vulnerability Management Assessment Process',
        title: 'Build a Risk-Based Vulnerability Program That Scales',
        titleHighlight: 'Build',
        paragraphs: [
          'Vulnerabilities are discovered daily. Our vulnerability management services help you maintain continuous visibility into your attack surface and prioritize remediation based on real-world risk.',
          'We deliver comprehensive vulnerability management programs that go beyond scanning. Our approach includes asset discovery, vulnerability assessment, risk-based prioritization, remediation tracking, and penetration testing. We help you build a program that continuously reduces risk across your entire attack surface.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'Vulnerability Management Assessment Process',
        title: 'Build a Risk-Based Vulnerability Program That Scales',
        titleHighlight: 'Build',
        paragraphs: ['Our vulnerability management specialists evaluate your current program maturity and implement a risk-based approach to finding and fixing vulnerabilities. Our assessment covers:'],
        image: '/overview-icon-left.png',
        checklist: [
          'Asset Discovery & Inventory',
          'Vulnerability Scanning Configuration',
          'Risk-Based Prioritization',
          'Remediation Workflow Design',
          'Patch Management Integration',
          'Attack Surface Mapping',
          'Penetration Testing Scope',
          'Remediation Tracking & SLAs',
          'Reporting & Metrics',
          'Continuous Testing Strategy',
          'Red Team Exercise Planning',
          'Compliance Validation',
        ],
      },
      {
        label: 'Vulnerability Management Technology Experience',
        title: 'Harness our Deep Vulnerability Management Experience',
        titleHighlight: 'Harness',
        paragraphs: [
          'With tens of thousands of new vulnerabilities published every year, organizations face an overwhelming challenge in identifying which ones pose real risk and prioritizing remediation efforts effectively.',
          'Our team of vulnerability management and penetration testing experts brings extensive experience across scanning platforms, attack simulation tools, and risk prioritization frameworks to help you build a program that continuously reduces risk across your entire attack surface.',
        ],
        image: '/overview-icon-right.png',
      },
    ],
    megaMenuLayout: 'vuln',
    strategic: [
      { title: 'Penetration Testing', description: 'Gain real-world results to understand vulnerabilities, threats & gaps, & prioritize security investments' },
      { title: 'Cloud Penetration Testing', description: 'Identify current & emerging cloud-specific threats' },
      { title: 'Social Engineering', description: 'Use in-depth reconnaissance & hand-crafted campaigns to reveal realistic responses' },
      { title: 'Red Team Assessments', description: 'Sophisticated, multi-pronged attack simulation to identify threats before an adversary does' },
      { title: 'Purple Team Assessments', description: 'Prepare your security team for real-world attacks without the risk of an actual incident' },
    ],
    tactical: [
      { title: 'Active Directory Security Review', description: 'Gain a baseline security audit of your AD environment & its key services' },
      { title: 'Application Vulnerability Scan', description: 'Evaluate your attack surface' },
      { title: 'IoT Security Assessments', description: 'Gain an in-depth architectural review of your IoT ecosystem' },
      { title: 'Wireless Security Assessments', description: 'Ensure a secure wireless network built for productivity' },
    ],
    managed: [
      { title: 'Vulnerability Management Services', description: 'Optimize your VM program & toolset through a risk-based approach' },
    ],
    managedExtra: [
      { title: 'Breach & Attack Simulation (BAS) as a Service', description: 'Leverage threat emulation operators to optimize your BAS program & increase ROI' },
      { title: 'Penetration Testing as a Service', description: 'Combine the power of manual & automated penetration testing' },
      { title: 'Phishing as a Service', description: 'Optimize your phishing simulation program' },
      { title: 'Vulnerability Management as a Service', description: 'Our experts identify critical assets, threats, & vulnerabilities to close gaps' },
    ],
    training: [],
    outcomes: [
      { icon: 'bi-search', title: 'Identify', description: 'Discover vulnerabilities across your entire attack surface.' },
      { icon: 'bi-tools', title: 'Remediate', description: 'Prioritize and fix vulnerabilities based on real-world risk.' },
      { icon: 'bi-check2-circle', title: 'Validate', description: 'Verify remediation through retesting and validation.' },
      { icon: 'bi-shield-check', title: 'Ensure', description: 'Maintain continuous visibility with ongoing scanning.' },
    ],
    testimonial: {
      quote:
        'Their red team exercise revealed attack paths we never considered. The detailed report and remediation plan were incredibly valuable.',
      author: 'VP of Security',
      company: 'E-Commerce Platform',
    },
  },
};

// Lightweight list for navigation, grids, and accordion components
export const servicesList = Object.entries(services)
  .filter(([, s]) => !s.parentService)
  .map(([slug, s]) => ({
    icon: s.icon,
    title: s.title,
    path: `/services/${slug}`,
    description: s.description,
  }));

export default services;
