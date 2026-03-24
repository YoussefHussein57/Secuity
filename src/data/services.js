const services = {
  'application-security': {
    title: 'Application Security',
    icon: 'bi-diamond',
    tagline:
      'Identify & Assess Application Security Weaknesses',
    heroLabel: 'Application Security Architecture Review',
    heroHighlight: 'Identify & Assess',
    heroCta: 'Secure Your Applications',
    heroImage: '/images/services/hero-placeholder.png',
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
      { title: 'Application Security Assessments', description: 'Understand your attack surface through testing' },
      {
        title: 'AI-augmented Application Security Services',
        description: 'Enhance application security assessments by incorporating AI with expert oversight.',
        path: '/services/ai-augmented-application-security',
      },
      {
        title: 'Mobile Application Security Assessment',
        description: 'Provide an accurate understanding of mobile risk',
      },
      {
        title: 'Source Code Review',
        description: 'Evaluate applications for critical security issues',
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
      },
      {
        title: 'Secure Development Training',
        description: 'Learn how to design & code secure web solutions',
      },
      {
        title: 'AI Security With a Focus on Large Language Models Training',
        description: 'Learn AI and LLM application security fundamentals',
      },
      {
        title: 'Fundamentals of Reconnaissance and Attack Surface Analysis Training',
        description: 'Learn reconnaissance and attack surface analysis for effective web app testing',
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

  'secure-sdlc-program-review': {
    parentService: 'application-security',
    title: 'Application Security Program Assessment',
    icon: 'bi-diamond',
    tagline: 'Ensure a Holistic Application Security Strategy',
    heroLabel: 'APPLICATION SECURITY PROGRAM ASSESSMENT',
    heroHighlight: 'Holistic',
    heroCta: 'Assess Your Program',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png',
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
          'Executive summary with key findings and recommendations',
          'Detailed assessment of current program maturity',
          'Gap analysis against industry frameworks',
          'Prioritized roadmap of improvement initiatives',
          'Governance and compliance alignment review',
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
        iconImage: '/images/icons/scale-appsec.png',
        title: 'Benchmark Your Security Posture',
        description:
          'Align security measures against an industry framework and best practices.',
      },
      {
        iconImage: '/images/icons/save-spending.png',
        title: 'Uplift Your Security Posture',
        description:
          'Gain a more resilient and adaptive security culture within your organization.',
      },
      {
        iconImage: '/images/icons/expand-testing.png',
        title: 'Build a Strategic Roadmap',
        description:
          'Develop a 3-year roadmap for continuous improvement and AppSec maturity.',
      },
    ],
    testimonial: {
      quote:
        'Our team works side-by-side with you as your cybersecurity partner.',
      author: 'GuidePoint Security',
      company: 'Application Security Practice',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png',
      companyLogo: '/logos/guidepointsecurity.png',
    },
  },

  'application-security-as-a-service': {
    parentService: 'application-security',
    title: 'Application Security as a Service',
    icon: 'bi-diamond',
    tagline: 'Automate and Manage Your Application Security Program',
    heroLabel: 'APPLICATION SECURITY AS A SERVICE',
    heroHighlight: 'Automate and Manage',
    heroCta: 'Get Started',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Services_SUB_Pages_Application_Security_as_a_Service.png',
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
          'As part of the AppSec program assessment, we can accelerate the adoption of your program and kick off roadmap initiatives by leveraging our professional services and Application Security as a Service (ASaaS) offerings.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_infiniti_right.png',
        imageAlt: 'AppSec Expertise',
      },
      {
        label: 'APPSEC AS A SERVICE USE CASES',
        title: 'Ensure Application Security and Speed Development',
        titleHighlight: 'Speed Development',
        paragraphs: [
          'Among the most important use cases that are ideal for Application Security as a Service are:',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Appsec_Left.png',
        imageAlt: 'AppSec Use Cases',
        checklist: [
          'Acceleration of Application Security Programs',
          'In-Depth Security Experience',
          'Evolved Software Supply Chain Security',
          'DevSecOps',
          'Entwine AppSec Into Your Organization',
          'Cloud Transformation',
        ],
      },
    ],
    outcomesSection: {
      label: 'APPLICATION SECURITY AS A SERVICE OUTCOMES',
      title: 'Scale Your Application Security Program',
      titleHighlight: 'Scale',
      subtitle:
        'Our Application Security as a Service offering helps you maximize the value of your AppSec tooling while ensuring a successful, scalable security program.',
    },
    outcomes: [
      {
        iconImage: '/images/icons/scale-appsec.png',
        title: 'Maximize Tool Value',
        description:
          'Get the most out of your AppSec tooling with expert management, configuration and optimization.',
      },
      {
        iconImage: '/images/icons/save-spending.png',
        title: 'Reduce Operational Burden',
        description:
          'Free your team to focus on development while we manage your application security program end to end.',
      },
      {
        iconImage: '/images/icons/expand-testing.png',
        title: 'Scale With Confidence',
        description:
          'Seamlessly scale from a single application to hundreds or even thousands without sacrificing quality.',
      },
      {
        iconImage: '/images/icons/improve-compliance.png',
        title: 'Accelerate Remediation',
        description:
          'Achieve quicker remediation at each point along your software development lifecycle.',
      },
    ],
    testimonial: {
      quote:
        'Our team works side-by-side with you as your cybersecurity partner.',
      author: 'GuidePoint Security',
      company: 'Application Security Practice',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png',
      companyLogo: '/logos/guidepointsecurity.png',
    },
  },

  'ai-augmented-application-security': {
    parentService: 'application-security',
    title: 'AI-augmented Application Security Services',
    icon: 'bi-cpu',
    tagline: 'Revolutionizing Application Security with Agentic Workflows',
    heroLabel: 'AI-AUGMENTED APPLICATION SECURITY SERVICES',
    heroHighlight: 'Revolutionizing',
    heroCta: 'Learn More',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Website_Refresh_Services_SUB_Pages_AI-augmented_Application_Security_Services.png',
    description:
      'Artificial Intelligence (AI) meets human expertise to reveal vulnerabilities, validate results and ensure secure, scalable application development.',
    useCases: {
      label: 'THE APPLICATION SECURITY LANDSCAPE',
      title: 'The Mounting Risks of Application Development at Scale',
      titleHighlight: 'Mounting Risks',
      subtitle:
        "Today\u2019s organizations face unprecedented challenges in developing secure applications at enterprise scale. As development velocity increases, traditional security approaches struggle to keep pace, leaving critical vulnerabilities undetected.",
      items: [
        'AI-driven Threats',
        'Regulatory Pressure',
        'Third-party Risks',
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
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/06/AI_icon-Triangle_elementor-rt.png',
        imageAlt: 'AI AppSec',
      },
      {
        label: 'AI-AUGMENTED APPLICATION SECURITY USE CASES',
        title: 'Architectural Intelligence. Security By Design.',
        titleHighlight: 'Intelligence',
        paragraphs: [
          'Analyze application architecture and design documents to identify potential security flaws and weaknesses in the application architecture using proprietary agentic AI workflows.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Security_Awareness_and_Education_Left.png',
        imageAlt: 'AI Security Use Cases',
        checklist: [
          'Application Architecture Reviews at Scale',
          'Deeper Application Threat Modeling',
          'Automated Secure Code Reviews',
        ],
      },
      {
        label: 'THE FUTURE OF APPLICATION SECURITY',
        title: 'Fight AI with AI',
        titleHighlight: 'Fight',
        paragraphs: [
          "As threat actors weaponize artificial intelligence, organizations must adopt equally sophisticated defenses. AI-augmented application security services represent the next evolution of modern software defense. But nothing replaces human expertise. That\u2019s why we strategically apply human-validated AI to extend your team\u2019s capabilities, enabling them to secure increasingly complex applications against increasingly sophisticated threats.",
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/06/AI_icon-Triangle_elementor-rt.png',
        imageAlt: 'Fight AI with AI',
      },
    ],
    outcomesSection: {
      label: 'AI-AUGMENTED APPSEC OUTCOMES',
      title: 'Transform Your Application Security Program',
      titleHighlight: 'Transform',
      subtitle:
        'Our AI-augmented approach delivers measurable improvements across your application security program.',
    },
    outcomes: [
      {
        iconImage: '/images/icons/scale-appsec.png',
        title: 'Seamless DevSecOps Integration',
        description:
          'Maintain secure code delivery at scale with seamlessly embedded AI-powered vulnerability detection and automated secure coding guidance.',
      },
      {
        iconImage: '/images/icons/save-spending.png',
        title: 'Integrated Threat Intelligence',
        description:
          'Harness intelligent threat correlation that prioritizes vulnerabilities based on real-world exploit patterns and predicts emerging risks specific to your applications.',
      },
      {
        iconImage: '/images/icons/expand-testing.png',
        title: 'Augmented Security Teams',
        description:
          'Multiply your security team\u2019s effectiveness with AI-powered tools that automate routine analysis while surfacing critical findings that require expert judgment.',
      },
      {
        iconImage: '/images/icons/improve-compliance.png',
        title: 'AI-powered Defenses',
        description:
          'Deploy intelligent security controls that adapt in real-time to emerging threats, providing continuous protection against sophisticated attack techniques.',
      },
    ],
    testimonial: {
      quote:
        'Our team works side-by-side with you as your cybersecurity partner.',
      author: 'GuidePoint Security',
      company: 'Application Security Practice',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png',
      companyLogo: '/logos/guidepointsecurity.png',
    },
  },

  'ai-security': {
    title: 'Artificial Intelligence (AI)',
    icon: 'bi-cpu',
    tagline: 'Confidently use AI to fuel organizational success.',
    heroHighlight: 'Protect',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'Secure AI and use AI to secure everything else. Our technical and advisory services for AI help organizations securely and confidently incorporate AI technologies into their IT environment, use AI for threat hunting and response and better defend against AI-enhanced threats.',
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
      },
    ],
    tactical: [],
    managed: [],
    training: [],
    megaMenuLayout: 'ai',
    megaMenuResource: {
      image: '/images/nav/ai-nav.jpg',
      title: '[DATASHEET] Artificial Intelligence at Cyber Security',
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

  'cloud-security': {
    title: 'Cloud Security',
    icon: 'bi-cloud',
    tagline:
      'Adapt cybersecurity to cloud transformation across your enterprise.',
    heroHighlight: 'Secure',
    heroImage: '/images/services/hero-placeholder.png',
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
      {
        title: 'AWS Cloud Security Services',
        description: 'Secure your Amazon Web Services cloud environment end-to-end',
      },
      { title: 'Google Cloud Security Services', description: 'Protect workloads and data across Google Cloud Platform' },
      { title: 'SaaS Security Services', description: 'Safeguard your SaaS application ecosystem' },
      { title: 'Microsoft Security Services', description: 'Maximize security across Microsoft 365 and Azure' },
      { title: 'Multi-Cloud Security', description: 'Unify security controls across multiple cloud providers' },
    ],
    tactical: [
      {
        title: 'Cloud Security Assessments',
        description: 'Evaluate cloud configurations and identify security gaps',
      },
      { title: 'Cloud Security Strategy Services', description: 'Develop a comprehensive cloud security roadmap' },
      { title: 'Cloud Governance', description: 'Establish policies and controls for cloud resource management' },
      { title: 'Cloud Security Engineering', description: 'Design and implement secure cloud architectures' },
      { title: 'CNAPP Services', description: 'Cloud-native application protection platform services' },
      { title: 'Container Security', description: 'Secure containerized workloads and orchestration platforms' },
      { title: 'Digital Transformation', description: 'Enable secure digital transformation initiatives' },
      { title: 'Zero Trust Workshops', description: 'Implement zero trust principles in your cloud environment' },
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

  'data-security': {
    title: 'Data Security & Privacy',
    icon: 'bi-database',
    tagline: 'Overcome data security challenges & improve data protection to fit your needs & environment.',
    heroHighlight: 'Protect',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'Better protect your data with tailored Data Security, Data Privacy and AI Governance services. We enable organizations to identify, classify and secure sensitive information across complex environments, align with industry best practices and comply with global, Federal and U.S. state laws and regulations.',
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
    tagline: 'Ensure the protection of email content & accounts from unauthorized access.',
    heroHighlight: 'Defend',
    heroImage: '/images/services/hero-placeholder.png',
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
    tagline:
      'Identify & manage the right endpoint security technologies for your unique requirements.',
    heroHighlight: 'Protect',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'Our comprehensive Endpoint Security Services help protect, detect and remediate threats like ransomware. Full lifecycle endpoint security services span selection, implementation, integration and optimization.',
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
    tagline:
      'Align your security program with industry best practices while managing risk & addressing compliance mandates.',
    heroHighlight: 'Build',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'We help align information security with business goals, manage risk and ensure compliance with industry standards. Our comprehensive GRC portfolio includes security program assessments, policy development, risk management frameworks and executive advisory services.',
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
    tagline: 'Ensure the right people have the right access at the right time.',
    heroHighlight: 'Ensure',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'Better manage humans and non-human identity and access with our comprehensive IAM services. IAM advisory, implementation and managed services can reduce risk, improve compliance and streamline user access for on-premise and cloud environments.',
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
    tagline:
      'Prepare for, respond to, and recover from security incidents with expert support.',
    heroHighlight: 'Prepare',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'We provide comprehensive, 24/7 incident response (IR) and tailored threat intelligence (TI) services to help organizations prepare, detect, contain and recover from cyber threats. The team helps organizations enhance their security posture and reduce risk.',
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

  'managed-security': {
    title: 'Managed Security Services',
    icon: 'bi-shield-lock',
    tagline: 'Extend your security team with our 24/7 managed security operations.',
    heroHighlight: 'Extend',
    heroImage: '/images/services/hero-placeholder.png',
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
    heroImage: '/images/services/hero-placeholder.png',
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
    heroImage: '/images/services/hero-placeholder.png',
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
    heroImage: '/images/services/hero-placeholder.png',
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
    heroImage: '/images/services/hero-placeholder.png',
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
    tagline: 'Fill critical security talent gaps with vetted cybersecurity professionals.',
    heroHighlight: 'Fill',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'Gain quick access to industry-leading consultants, engineers and analysts. Our flexible, cost-effective executive advisory and cybersecurity staff augmentation services can bridge skill gaps and provide on-demand access to certified expertise to support technology implementation, compliance and strategic security initiatives.',
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
    tagline: 'Find, prioritize, and fix vulnerabilities before attackers exploit them.',
    heroHighlight: 'Find',
    heroImage: '/images/services/hero-placeholder.png',
    description:
      'Vulnerability Management (VM) and Penetration Testing (Pen Testing) services help organizations identify, prioritize and remediate security gaps. Go beyond the checkbox exercises and achieve measurable results in risk reduction, no matter where you\'re starting out.',
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
