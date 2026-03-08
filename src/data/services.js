const services = {
  'application-security': {
    title: 'Application Security',
    icon: 'bi-diamond',
    tagline:
      'Secure your applications from design to deployment with expert-led assessments and testing.',
    heroHighlight: 'Secure',
    heroImage: '/hero-bg.svg',
    description:
      'Our application security services help you identify and remediate vulnerabilities across your software development lifecycle. From code reviews to penetration testing, we ensure your applications are resilient against modern threats.',
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
        label: 'AppSec Architecture Review Process',
        title: 'Implement Application Security Controls From the Start',
        titleHighlight: 'Implement',
        paragraphs: [
          'Our application security services help you identify and remediate vulnerabilities across your software development lifecycle. From code reviews to penetration testing, we ensure your applications are resilient against modern threats.',
          'By regularly conducting application security architecture assessments as part of your ongoing software design and development processes, you can ship software that is free of security vulnerabilities, coding errors and architectural flaws that could expose company and customer data.',
        ],
        image: '/overview-icon.png',
      },
      {
        label: 'AppSec Architecture Review Process',
        title: 'Implement Application Security Controls From the Start',
        titleHighlight: 'Implement',
        paragraphs: [
          'Our team of application security engineers focuses on understanding the business context and risk profile of your application\'s architecture documents, input validation, authentication and authorization, as well as your application\'s framework and libraries including:',
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
        title: 'Security Architecture Review',
        description:
          'Evaluate application design and architecture for security weaknesses before writing a single line of code.',
      },
      { title: 'Threat Modeling', description: 'Identify potential threats and attack vectors specific to your application environment.' },
      { title: 'Secure SDLC Consulting', description: 'Embed security into every phase of your software development lifecycle.' },
    ],
    tactical: [
      { title: 'Penetration Testing', description: 'Simulate real-world attacks against your web, mobile, and API applications.' },
      { title: 'Code Review (SAST)', description: 'Automated and manual static analysis to find vulnerabilities in source code.' },
      {
        title: 'Dynamic Testing (DAST)',
        description:
          'Runtime testing of applications to identify vulnerabilities in deployed environments.',
      },
    ],
    managed: [
      {
        title: 'Continuous Assessment',
        description:
          'Ongoing automated scanning and periodic manual testing of your application portfolio.',
      },
      {
        title: 'DevSecOps Integration',
        description:
          'Embed security tools and processes into your CI/CD pipeline for continuous security.',
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
        icon: 'bi-graph-up',
        title: 'Prevent Coding Errors',
        description:
          'Catch coding errors early in the software development lifecycle to mitigate security risks.',
      },
      {
        icon: 'bi-currency-dollar',
        title: 'Reduce AppSec Dev Costs',
        description:
          'Avoid costly re-work, time-consuming security fixes & delays in software development.',
      },
      {
        icon: 'bi-percent',
        title: 'Eliminate Software Exploits',
        description:
          'Prevent cybercriminals from exploiting security vulnerabilities in your application code.',
      },
      {
        icon: 'bi-file-earmark-check',
        title: 'Ship Secure Software',
        description:
          'Accelerate the delivery of secure software across your legacy & modern application portfolio.',
      },
    ],
    testimonial: {
      quote:
        'CyberPoint\'s application security team found critical vulnerabilities that our internal scans completely missed. Their remediation guidance was actionable and clear.',
      author: 'VP of Engineering',
      company: 'Fortune 500 Financial Services',
    },
  },

  'ai-security': {
    title: 'Artificial Intelligence (AI) Security',
    icon: 'bi-cpu',
    tagline: 'Protect your AI/ML systems and leverage AI to strengthen your security posture.',
    heroHighlight: 'Protect',
    heroImage: '/hero-bg.svg',
    description:
      'As organizations rapidly adopt AI and machine learning, new attack surfaces emerge. Our AI security services help you secure AI systems, detect AI-powered threats, and use AI to enhance your defensive capabilities.',
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
        title: 'AI Risk Assessment',
        description:
          'Evaluate risks across your AI/ML lifecycle including data, models, and inference endpoints.',
      },
      { title: 'AI Governance Framework', description: 'Develop policies and controls for responsible and secure AI adoption.' },
      {
        title: 'LLM Security Review',
        description:
          'Assess large language model deployments for prompt injection, data leakage, and misuse risks.',
      },
    ],
    tactical: [
      {
        title: 'Model Security Testing',
        description:
          'Test AI models for adversarial robustness, data poisoning, and extraction attacks.',
      },
      {
        title: 'AI Infrastructure Audit',
        description:
          'Review the security of ML pipelines, training environments, and model serving infrastructure.',
      },
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
      'Secure your cloud infrastructure across AWS, Azure, GCP, and multi-cloud environments.',
    heroHighlight: 'Secure',
    heroImage: '/hero-bg.svg',
    description:
      'Cloud migration introduces new security challenges. Our cloud security experts help you design, implement, and maintain secure cloud architectures that protect your data and workloads while enabling business agility.',
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
        title: 'Cloud Security Architecture',
        description:
          'Design secure cloud architectures aligned with industry frameworks and best practices.',
      },
      { title: 'Cloud Migration Security', description: 'Ensure security is embedded throughout your cloud migration journey.' },
      { title: 'Multi-Cloud Strategy', description: 'Develop unified security strategies across AWS, Azure, and GCP environments.' },
    ],
    tactical: [
      {
        title: 'Cloud Penetration Testing',
        description:
          'Test cloud infrastructure, APIs, and workloads for vulnerabilities and misconfigurations.',
      },
      { title: 'Configuration Assessment', description: 'Audit cloud settings against CIS benchmarks and provider best practices.' },
      { title: 'Container Security', description: 'Secure Docker, Kubernetes, and serverless deployments across your cloud environment.' },
    ],
    managed: [
      {
        title: 'Cloud Security Posture Management',
        description:
          'Continuous monitoring and remediation of cloud misconfigurations and compliance drift.',
      },
      {
        title: 'Cloud Workload Protection',
        description: 'Runtime protection for VMs, containers, and serverless functions in production.',
      },
    ],
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
    tagline: 'Protect your most valuable asset — your data — wherever it lives.',
    heroHighlight: 'Protect',
    heroImage: '/hero-bg.svg',
    description:
      'Data is the lifeblood of every organization. Our data security services help you discover, classify, protect, and govern sensitive data across on-premises, cloud, and hybrid environments.',
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
        title: 'Data Security Strategy',
        description:
          'Develop a comprehensive data protection strategy aligned with business objectives and regulatory requirements.',
      },
      { title: 'Privacy Impact Assessment', description: 'Assess data processing activities for privacy risks and regulatory compliance.' },
    ],
    tactical: [
      {
        title: 'Data Discovery & Classification',
        description:
          'Find and classify sensitive data across structured and unstructured repositories.',
      },
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
      quote:
        'They helped us achieve GDPR compliance across 12 countries and implemented a DLP program that reduced data incidents by 85%.',
      author: 'Chief Privacy Officer',
      company: 'European Manufacturing Group',
    },
  },

  'email-security': {
    title: 'Email Security',
    icon: 'bi-envelope-check',
    tagline: 'Defend against phishing, BEC, and email-borne threats with layered protection.',
    heroHighlight: 'Defend',
    heroImage: '/hero-bg.svg',
    description:
      'Email remains the #1 attack vector. Our email security services protect your organization from phishing, business email compromise (BEC), malware delivery, and data exfiltration through email channels.',
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
      { title: 'Email Security Architecture', description: 'Design a layered email security strategy for your organization.' },
      { title: 'DMARC Implementation', description: 'Implement email authentication to prevent domain spoofing and impersonation.' },
    ],
    tactical: [
      {
        title: 'Phishing Simulation',
        description:
          'Test employee susceptibility with realistic phishing campaigns and measure improvement.',
      },
      { title: 'Email Gateway Assessment', description: 'Evaluate and optimize your email security gateway configurations.' },
    ],
    managed: [
      {
        title: 'Managed Email Protection',
        description:
          'Ongoing monitoring, threat analysis, and incident response for email-based threats.',
      },
      { title: 'Phishing Response Service', description: 'Rapid analysis and containment of reported phishing attempts.' },
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
      'Protect every endpoint — from workstations to mobile devices — against advanced threats.',
    heroHighlight: 'Protect',
    heroImage: '/hero-bg.svg',
    description:
      'Endpoints are where work happens and where attackers gain footholds. Our endpoint security services help you deploy, optimize, and manage endpoint protection platforms that detect and respond to threats in real time.',
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
        title: 'Endpoint Strategy Assessment',
        description:
          'Evaluate your current endpoint security stack and develop a modernization roadmap.',
      },
      {
        title: 'XDR Architecture',
        description:
          'Design an extended detection and response architecture that integrates endpoints with network and cloud telemetry.',
      },
    ],
    tactical: [
      { title: 'EDR Deployment', description: 'Deploy and configure endpoint detection and response solutions across your environment.' },
      {
        title: 'Endpoint Hardening',
        description:
          'Lock down endpoint configurations following CIS benchmarks and security best practices.',
      },
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
      quote:
        'Their managed EDR service detected a sophisticated supply chain attack that bypassed our other controls. Response was immediate.',
      author: 'IT Security Manager',
      company: 'Mid-Market Manufacturing Company',
    },
  },

  'grc': {
    title: 'Governance, Risk & Compliance',
    icon: 'bi-check2-square',
    tagline:
      'Build and maintain a risk management program that aligns security with business goals.',
    heroHighlight: 'Build',
    heroImage: '/hero-bg.svg',
    description:
      'Effective cybersecurity starts with governance. Our GRC services help you develop security policies, assess and manage risk, and achieve compliance with industry regulations and frameworks.',
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
      quote:
        'CyberPoint helped us achieve SOC 2 Type II certification in under 6 months. Their structured approach made a complex process manageable.',
      author: 'Chief Compliance Officer',
      company: 'SaaS Technology Company',
    },
  },

  'iam': {
    title: 'Identity & Access Management',
    icon: 'bi-fingerprint',
    tagline: 'Ensure the right people have the right access at the right time.',
    heroHighlight: 'Ensure',
    heroImage: '/hero-bg.svg',
    description:
      'Identity is the new perimeter. Our IAM services help you implement zero-trust access controls, manage privileged accounts, and govern identity lifecycles across your hybrid environment.',
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
      { title: 'IAM Strategy & Roadmap', description: 'Develop a comprehensive identity strategy aligned with zero-trust principles.' },
      { title: 'Zero Trust Architecture', description: 'Design and implement zero-trust access controls across your environment.' },
    ],
    tactical: [
      {
        title: 'PAM Implementation',
        description:
          'Deploy privileged access management to secure administrative accounts and credentials.',
      },
      { title: 'MFA Rollout', description: 'Implement multi-factor authentication across your organization with minimal user friction.' },
      {
        title: 'SSO Integration',
        description:
          'Consolidate application access with single sign-on for improved security and user experience.',
      },
    ],
    managed: [
      { title: 'Managed IAM', description: 'Ongoing identity governance, access reviews, and privileged account monitoring.' },
      {
        title: 'Identity Threat Detection',
        description:
          'Monitor for identity-based attacks including credential stuffing, privilege escalation, and lateral movement.',
      },
    ],
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
    title: 'Incident Response & Threat Intelligence',
    icon: 'bi-exclamation-triangle',
    tagline:
      'Prepare for, respond to, and recover from security incidents with expert support.',
    heroHighlight: 'Prepare',
    heroImage: '/hero-bg.svg',
    description:
      'When a breach occurs, every minute counts. Our incident response team provides rapid containment, forensic analysis, and recovery services. Our threat intelligence team keeps you ahead of emerging threats.',
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
      { title: 'IR Readiness Assessment', description: 'Evaluate your incident response capabilities and develop improvement plans.' },
      {
        title: 'IR Plan Development',
        description:
          'Create comprehensive incident response plans, playbooks, and communication templates.',
      },
      { title: 'Tabletop Exercises', description: 'Simulate incidents to test your team\'s response capabilities and decision-making.' },
    ],
    tactical: [
      {
        title: 'Incident Response',
        description:
          'Rapid response to active security incidents with containment, eradication, and recovery.',
      },
      { title: 'Digital Forensics', description: 'Forensic investigation of compromised systems, data, and networks.' },
      { title: 'Malware Analysis', description: 'Reverse engineering of malware samples to understand capabilities and attribution.' },
    ],
    managed: [
      { title: 'IR Retainer', description: 'Pre-negotiated incident response retainer for guaranteed response times and reduced costs.' },
      {
        title: 'Threat Intelligence Feed',
        description:
          'Curated, actionable threat intelligence tailored to your industry and threat landscape.',
      },
    ],
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
    heroImage: '/hero-bg.svg',
    description:
      'Not every organization can staff a full security team. Our managed security services provide 24/7 monitoring, detection, and response capabilities through our GPVUE program — a customized, integrated security program designed for your unique needs.',
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
    strategic: [
      {
        title: 'Security Program Design',
        description:
          'Design a comprehensive security program tailored to your risk profile and maturity level.',
      },
      {
        title: 'Technology Assessment',
        description:
          'Evaluate and select the right security technologies for your managed security program.',
      },
    ],
    tactical: [
      { title: 'SIEM Deployment', description: 'Deploy and optimize SIEM platforms for effective threat detection and log management.' },
      { title: 'SOAR Implementation', description: 'Automate security operations with orchestration, automation, and response playbooks.' },
    ],
    managed: [
      {
        title: 'GPVUE Managed Security',
        description:
          'Full-spectrum managed security operations including monitoring, detection, response, and reporting.',
      },
      {
        title: 'Managed Threat Hunting',
        description:
          'Proactive threat hunting by experienced analysts to find hidden threats in your environment.',
      },
      { title: 'Managed SIEM', description: 'Full lifecycle SIEM management including log ingestion, rule tuning, and alert triage.' },
    ],
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
    heroImage: '/hero-bg.svg',
    description:
      'Your network is the backbone of your operations. Our network security services help you design, implement, and maintain secure network architectures that protect against external and internal threats.',
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
    strategic: [
      {
        title: 'Network Security Architecture',
        description:
          'Design secure network architectures with proper segmentation and defense-in-depth.',
      },
      { title: 'Zero Trust Network Design', description: 'Implement micro-segmentation and zero-trust network access controls.' },
    ],
    tactical: [
      { title: 'Network Penetration Testing', description: 'Test network defenses with simulated attacks to identify vulnerabilities.' },
      { title: 'Firewall Assessment', description: 'Audit firewall rules, configurations, and policies for security and efficiency.' },
      {
        title: 'Wireless Security Assessment',
        description:
          'Evaluate wireless network security including rogue AP detection and encryption review.',
      },
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
      quote:
        'Their network security team redesigned our segmentation architecture, reducing our lateral movement risk by 80%.',
      author: 'Network Security Director',
      company: 'Large University System',
    },
  },

  'ot-security': {
    title: 'OT Security Services',
    icon: 'bi-gear-wide-connected',
    tagline:
      'Secure operational technology and industrial control systems without disrupting operations.',
    heroHighlight: 'Secure',
    heroImage: '/hero-bg.svg',
    description:
      'Operational technology (OT) and industrial control systems (ICS) face unique security challenges. Our OT security services bridge the gap between IT and OT to protect critical infrastructure without impacting operational reliability.',
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
    strategic: [
      {
        title: 'OT Risk Assessment',
        description:
          'Assess cybersecurity risks in your OT environment aligned with IEC 62443 and NIST CSF.',
      },
      {
        title: 'IT/OT Convergence Strategy',
        description:
          'Develop a secure strategy for connecting IT and OT networks while maintaining isolation.',
      },
    ],
    tactical: [
      { title: 'OT Network Assessment', description: 'Map and assess OT network architecture, protocols, and device inventory.' },
      {
        title: 'ICS Vulnerability Assessment',
        description:
          'Identify vulnerabilities in SCADA, DCS, and PLC systems without disrupting operations.',
      },
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
    heroImage: '/hero-bg.svg',
    description:
      'People are both the greatest vulnerability and the strongest defense. Our security awareness programs educate employees to recognize and respond to threats, building a security-first culture across your organization.',
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
    strategic: [
      {
        title: 'Awareness Program Design',
        description:
          'Design a comprehensive security awareness program tailored to your organization\'s culture and risks.',
      },
      {
        title: 'Security Culture Assessment',
        description:
          'Measure your organization\'s security culture maturity and identify improvement areas.',
      },
    ],
    tactical: [
      { title: 'Phishing Simulations', description: 'Realistic phishing campaigns to test and improve employee awareness.' },
      {
        title: 'Role-Based Training',
        description:
          'Targeted training for developers, executives, finance, HR, and other high-risk roles.',
      },
      { title: 'Security University', description: 'Advanced hands-on training and certification preparation for security professionals.' },
    ],
    managed: [
      {
        title: 'Managed Awareness Program',
        description: 'Fully managed security awareness program with content, campaigns, and reporting.',
      },
      {
        title: 'Continuous Education',
        description:
          'Ongoing micro-learning, newsletters, and just-in-time training for sustained awareness.',
      },
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
    title: 'Security Operations Center (SOC)',
    icon: 'bi-globe2',
    tagline: 'Build or enhance your security operations center with expert guidance.',
    heroHighlight: 'Build',
    heroImage: '/hero-bg.svg',
    description:
      'A well-run SOC is the nerve center of your security program. We help you build, optimize, or outsource SOC capabilities with the right people, processes, and technology.',
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
    heroImage: '/hero-bg.svg',
    description:
      'The cybersecurity talent shortage is real. Our staff augmentation services provide experienced security professionals to supplement your team — from short-term project support to long-term embedded consultants.',
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
    strategic: [
      {
        title: 'Talent Strategy Consulting',
        description:
          'Develop a security staffing strategy that balances full-time, augmented, and managed resources.',
      },
      { title: 'vCISO Services', description: 'Fractional CISO leadership for organizations that need strategic security guidance.' },
    ],
    tactical: [
      { title: 'Project-Based Staffing', description: 'Dedicated security professionals for specific projects and initiatives.' },
      { title: 'Skill-Based Placement', description: 'Match specialized security talent to your specific technical requirements.' },
    ],
    managed: [
      { title: 'Embedded Consultants', description: 'Long-term security professionals who integrate with your team and culture.' },
      {
        title: 'Managed Team',
        description:
          'A dedicated team of security professionals managed by CyberPoint to deliver ongoing services.',
      },
    ],
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
    heroImage: '/hero-bg.svg',
    description:
      'Vulnerabilities are discovered daily. Our vulnerability management services help you maintain continuous visibility into your attack surface and prioritize remediation based on real-world risk.',
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
    strategic: [
      {
        title: 'VM Program Design',
        description:
          'Design a risk-based vulnerability management program aligned with your business priorities.',
      },
      { title: 'Attack Surface Management', description: 'Continuously discover and assess your external attack surface.' },
    ],
    tactical: [
      { title: 'Penetration Testing', description: 'Expert-led penetration testing of networks, applications, and cloud environments.' },
      { title: 'Red Team Exercises', description: 'Full-scope adversary simulations to test your detection and response capabilities.' },
      {
        title: 'Vulnerability Assessment',
        description:
          'Comprehensive scanning and analysis of your internal and external attack surface.',
      },
    ],
    managed: [
      {
        title: 'Managed VM Program',
        description:
          'Full lifecycle vulnerability management including scanning, prioritization, and remediation tracking.',
      },
      { title: 'Continuous Pen Testing', description: 'Ongoing penetration testing program with regular assessments and retesting.' },
    ],
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
export const servicesList = Object.entries(services).map(([slug, s]) => ({
  icon: s.icon,
  title: s.title,
  path: `/services/${slug}`,
  description: s.description,
}));

export default services;
