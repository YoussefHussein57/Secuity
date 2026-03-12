const technologies = {
  'application-security': {
    title: 'Application Security',
    icon: 'bi-diamond',
    tagline: 'Secure your applications from code to cloud with best-of-breed AppSec tools.',
    heroHighlight: 'Applications',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We evaluate, deploy, and manage application security solutions across SAST, DAST, RASP, SCA, and WAF — ensuring your software is protected at every stage of the development lifecycle.',
    vendors: ['Checkmarx', 'Snyk', 'Veracode', 'Fortify', 'Imperva', 'Akamai'],
    stats: [
      { number: '90%', label: 'of breaches involve application vulnerabilities' },
      { number: '650+', label: 'technology partnerships' },
      { number: '48hr', label: 'average time to critical finding' },
    ],
    outcomesSection: {
      label: 'AppSec Outcomes',
      title: 'What You Get with Our Application Security Solutions',
      titleHighlight: 'Application Security',
    },
    outcomes: [
      { icon: 'bi-code-slash', title: 'Shift-Left Security', description: 'Embed security testing directly into CI/CD pipelines for continuous assurance.' },
      { icon: 'bi-shield-check', title: 'Vulnerability Reduction', description: 'Reduce application vulnerabilities by 70% with automated and manual testing.' },
      { icon: 'bi-globe', title: 'Runtime Protection', description: 'WAF and RASP defend live applications against OWASP Top 10 and zero-day exploits.' },
      { icon: 'bi-box-seam', title: 'SCA & Supply Chain', description: 'Identify and remediate risks in open-source libraries and third-party components.' },
    ],
    split: {
      label: 'AppSec Technology Review Process',
      title: 'Determine The Right Application Security Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The application security technology landscape is vast, covering everything from static and dynamic analysis to runtime protection and software composition analysis. How are you securing your applications today?',
        'We take a vendor-agnostic approach to reviewing, analyzing, comparing and vetting current and emerging AppSec technologies — from SAST and DAST to WAF and RASP — to find the solutions that best fit your development workflows and risk profile.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Application Security Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Application Security consultants can help you evaluate the right solutions across SAST, DAST, SCA, and WAF tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada.' },
      ],
      commitment: {
        label: 'Our Application Security Commitment to You',
        title: 'We will help you navigate the Application Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right application security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of application security technologies including: SAST, DAST, RASP, SCA, and WAF solutions',
          'Offering comprehensive integration services for a wide variety of application security focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'AppSec Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit AppSec solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'They integrated Snyk and Checkmarx into our DevOps pipeline — we now catch 85% of vulnerabilities before code reaches production.',
      author: 'VP of Engineering',
      company: 'Enterprise SaaS Company',
    },
  },

  'endpoint-security': {
    title: 'Endpoint Security',
    icon: 'bi-pencil',
    tagline: 'Next-gen endpoint protection, EDR, and extended detection and response.',
    heroHighlight: 'Endpoint',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We evaluate and implement EPP, EDR, and XDR solutions tailored to your environment. From initial deployment to managed detection, we ensure every endpoint is protected.',
    vendors: ['CrowdStrike', 'SentinelOne', 'Microsoft Defender', 'Carbon Black', 'Cortex XDR', 'Trend Micro'],
    stats: [
      { number: '70%', label: 'of breaches originate at the endpoint' },
      { number: '100K+', label: 'endpoints protected' },
      { number: '<15min', label: 'average threat containment time' },
    ],
    outcomesSection: {
      label: 'Endpoint Outcomes',
      title: 'What You Get with Our Endpoint Solutions',
      titleHighlight: 'Endpoint Solutions',
    },
    outcomes: [
      { icon: 'bi-shield-lock', title: 'Advanced Threat Prevention', description: 'AI-powered prevention stops ransomware, fileless malware, and zero-day exploits.' },
      { icon: 'bi-eye', title: 'Full Endpoint Visibility', description: 'Real-time telemetry across every device — managed, unmanaged, and BYOD.' },
      { icon: 'bi-lightning', title: 'Rapid Response', description: 'Automated containment and remediation within minutes of detection.' },
      { icon: 'bi-diagram-3', title: 'XDR Correlation', description: 'Cross-domain detection correlates endpoint, network, and cloud signals.' },
    ],
    split: {
      label: 'Endpoint Technology Review Process',
      title: 'Determine The Right Endpoint Security Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The endpoint security landscape has evolved rapidly — from traditional antivirus to AI-driven EDR and XDR platforms. Are your endpoints truly protected against modern threats like fileless malware and living-off-the-land attacks?',
        'We evaluate and compare EPP, EDR, and XDR solutions from leading vendors, considering your environment size, threat profile, and operational maturity to recommend and deploy the optimal endpoint security stack.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Endpoint Security Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Endpoint Security consultants can help you evaluate the right solutions across EPP, EDR, and XDR tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin molestie malesuada.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus.' },
      ],
      commitment: {
        label: 'Our Endpoint Security Commitment to You',
        title: 'We will help you navigate the Endpoint Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right endpoint security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of endpoint security technologies including: Endpoint Protection Platforms, Endpoint Detection & Response, Managed Detection & Response and Endpoint Data Loss Prevention',
          'Offering comprehensive integration services for a wide variety of endpoint security focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Endpoint Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit endpoint security solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'After deploying CrowdStrike with their managed service, we went from 200+ monthly alerts to 12 actionable incidents. Game changer.',
      author: 'Director of IT Security',
      company: 'National Retail Chain',
    },
  },

  'network-security': {
    title: 'Network & Infrastructure Security',
    icon: 'bi-hdd-network',
    tagline: 'Firewalls, SASE, NDR, and network segmentation solutions built for modern infrastructure.',
    heroHighlight: 'Network',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We design, deploy, and manage network security architectures using industry-leading NGFW, SASE, SD-WAN, and NDR technologies. Our approach ensures secure connectivity without sacrificing performance.',
    vendors: ['Palo Alto Networks', 'Fortinet', 'Cisco', 'Zscaler', 'Netskope', 'Darktrace'],
    stats: [
      { number: '99.9%', label: 'network uptime maintained' },
      { number: '300+', label: 'network transformations delivered' },
      { number: '50%', label: 'reduction in lateral movement risk' },
    ],
    outcomesSection: {
      label: 'Network Outcomes',
      title: 'What You Get with Our Network Solutions',
      titleHighlight: 'Network Solutions',
    },
    outcomes: [
      { icon: 'bi-bricks', title: 'Micro-Segmentation', description: 'Limit blast radius with granular network segmentation and zero-trust policies.' },
      { icon: 'bi-cloud-arrow-up', title: 'SASE Architecture', description: 'Converge networking and security for remote and hybrid workforces.' },
      { icon: 'bi-activity', title: 'Network Detection', description: 'AI-driven NDR identifies anomalous traffic patterns and lateral movement.' },
      { icon: 'bi-speedometer', title: 'Performance Optimized', description: 'Security that enhances rather than hinders network performance and user experience.' },
    ],
    split: {
      label: 'Network Technology Review Process',
      title: 'Determine The Right Network Security Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The network security landscape is transforming with the shift to SASE, zero-trust architectures, and cloud-delivered security. Are your firewalls, VPNs, and segmentation strategies keeping pace with your hybrid infrastructure?',
        'We assess your current network architecture and compare NGFW, SASE, SD-WAN, and NDR solutions to design a security stack that protects every edge — from data center to remote worker to cloud workload.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Network & Infrastructure Security Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Network Security consultants can help you evaluate the right solutions across NGFW, SASE, SD-WAN, and NDR tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem. Maecenas nec odio et ante tincidunt tempus.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum aenean imperdiet etiam ultricies nisi vel augue.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Aenean vulputate eleifend tellus. Aenean leo ligula porttitor eu consequat vitae eleifend ac enim.' },
      ],
      commitment: {
        label: 'Our Network Security Commitment to You',
        title: 'We will help you navigate the Network Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right network security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of network security technologies including: Next-Generation Firewalls (NGFW), Secure Access Service Edge (SASE), Software-Defined WAN (SD-WAN) and Network Detection & Response (NDR)',
          'Offering comprehensive integration services for a wide variety of network security focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Network Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit network security solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'They redesigned our entire network security stack with Palo Alto and Zscaler — 40% cost reduction with better protection.',
      author: 'Network Security Manager',
      company: 'Global Manufacturing Company',
    },
  },

  'cloud-security': {
    title: 'Cloud Security',
    icon: 'bi-cloud',
    tagline: 'Protect your cloud workloads across AWS, Azure, and GCP with best-of-breed solutions.',
    heroHighlight: 'Cloud',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'Our vendor-agnostic approach ensures you get the right cloud security tools — not the ones that pay us the most. We evaluate, deploy, and manage solutions across CSPM, CWPP, CASB, and container security.',
    vendors: ['Palo Alto Prisma', 'Wiz', 'CrowdStrike', 'Zscaler', 'Lacework', 'Orca Security'],
    stats: [
      { number: '95%', label: 'of cloud breaches stem from misconfigurations' },
      { number: '650+', label: 'technology partnerships' },
      { number: '24/7', label: 'cloud monitoring & response' },
    ],
    outcomesSection: {
      label: 'Security Outcomes',
      title: 'What You Get with Our Cloud Security Solutions',
      titleHighlight: 'Cloud Security',
    },
    outcomes: [
      { icon: 'bi-shield-check', title: 'Complete Visibility', description: 'Unified view across multi-cloud environments with real-time posture management.' },
      { icon: 'bi-speedometer2', title: 'Faster Remediation', description: 'Automated detection and response reduces mean time to resolution by 80%.' },
      { icon: 'bi-lock', title: 'Compliance Assurance', description: 'Continuous compliance monitoring against CIS, SOC 2, HIPAA, and PCI-DSS.' },
      { icon: 'bi-graph-up-arrow', title: 'Cost Optimization', description: 'Right-sized security stack eliminates redundant tools and reduces licensing costs.' },
    ],
    split: {
      label: 'Cloud Technology Review Process',
      title: 'Determine The Right Cloud Security Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The cloud security technology landscape is large, encompassing CSPM, CWPP, CASB, CIEM, and container security platforms. How are you securing your multi-cloud environment today? Through manual configurations and siloed tools?',
        'There are a host of cloud security solutions — from posture management to workload protection to identity entitlement management — that can really add value to your organization, providing visibility, automation, and compliance assurance across your entire cloud footprint.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Cloud Security Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Cloud Security consultants can help you evaluate the right solutions across CSPM, CWPP, CASB, and container security tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Fusce nec tellus sed augue semper porta. Mauris massa nunc pulvinar sit amet pretium a, lacinia a felis.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Integer tincidunt cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Aliquam erat volutpat ut pharetra sit amet aliquam id diam maecenas ultricies mi eget mauris.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.' },
      ],
      commitment: {
        label: 'Our Cloud Security Commitment to You',
        title: 'We will help you navigate the Cloud Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right cloud security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of cloud security technologies including: Cloud Security Posture Management (CSPM), Cloud Workload Protection Platforms (CWPP), Cloud Access Security Brokers (CASB) and Container Security',
          'Offering comprehensive integration services for a wide variety of cloud security focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Cloud Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit cloud security solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'They helped us consolidate three cloud security tools into one platform, saving us 40% on licensing while improving our detection capabilities.',
      author: 'VP of Cloud Engineering',
      company: 'Fortune 500 Financial Services',
    },
  },

  'grc': {
    title: 'Governance, Risk & Compliance',
    icon: 'bi-check2-square',
    tagline: 'Business resilience, third-party risk management, and compliance automation.',
    heroHighlight: 'Compliance',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We implement GRC platforms and automation tools that streamline compliance workflows, quantify cyber risk, and strengthen business resilience — all while reducing manual overhead.',
    vendors: ['ServiceNow GRC', 'Archer', 'OneTrust', 'LogicGate', 'Prevalent', 'Vanta'],
    stats: [
      { number: '60%', label: 'reduction in compliance effort' },
      { number: '200+', label: 'GRC programs implemented' },
      { number: '100%', label: 'audit pass rate for our clients' },
    ],
    outcomesSection: {
      label: 'GRC Outcomes',
      title: 'What You Get with Our GRC Solutions',
      titleHighlight: 'GRC Solutions',
    },
    outcomes: [
      { icon: 'bi-clipboard-data', title: 'Risk Quantification', description: 'Translate cyber risk into business language with quantitative risk analysis.' },
      { icon: 'bi-journal-check', title: 'Compliance Automation', description: 'Automate evidence collection and control mapping across multiple frameworks.' },
      { icon: 'bi-people', title: 'Third-Party Risk', description: 'Continuous vendor monitoring and assessment to manage supply chain risk.' },
      { icon: 'bi-shield-check', title: 'Business Resilience', description: 'BCP/DR planning and testing to ensure continuity during disruptions.' },
    ],
    split: {
      label: 'GRC Technology Review Process',
      title: 'Determine The Right GRC Technology Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The GRC technology landscape is large, encompassing just about every aspect of your program. How are you running your GRC program today? Through manual processes and spreadsheets?',
        'There are a host of governance, risk and compliance solutions — from risk management to control alignment to data classification and more — that can really add value to your organization, providing insights, metrics and reporting for your program and giving you better insight for decision making.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Governance, Risk & Compliance Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified GRC consultants can help you evaluate the right solutions across risk management, compliance automation, and third-party risk tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores alias consequatur.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.' },
      ],
      commitment: {
        label: 'Our GRC Commitment to You',
        title: 'We will help you navigate the GRC technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right GRC solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of GRC technologies including: Risk Management platforms, Compliance Automation tools and Third-Party Risk Management solutions',
          'Offering comprehensive integration services for a wide variety of GRC focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'GRC Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit GRC solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'They automated our SOC 2 and HIPAA compliance workflows — what used to take 6 weeks now takes 3 days.',
      author: 'Chief Compliance Officer',
      company: 'HealthTech Startup',
    },
  },

  'security-awareness': {
    title: 'Security Awareness & Education',
    icon: 'bi-mortarboard',
    tagline: 'Phishing simulation, enterprise LMS, and security culture transformation.',
    heroHighlight: 'Awareness',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We deploy and manage security awareness platforms that reduce human risk through phishing simulations, interactive training, and measurable behavior change programs.',
    vendors: ['KnowBe4', 'Proofpoint', 'Cofense', 'SANS Security Awareness', 'Hoxhunt', 'Curricula'],
    stats: [
      { number: '82%', label: 'of breaches involve the human element' },
      { number: '75%', label: 'reduction in phishing click rates' },
      { number: '500K+', label: 'users trained across our clients' },
    ],
    outcomesSection: {
      label: 'Awareness Outcomes',
      title: 'What You Get with Our Awareness Solutions',
      titleHighlight: 'Awareness Solutions',
    },
    outcomes: [
      { icon: 'bi-envelope-exclamation', title: 'Phishing Resilience', description: 'Simulated campaigns that test and improve employee phishing detection skills.' },
      { icon: 'bi-mortarboard', title: 'Engaging Training', description: 'Interactive, role-based modules that employees actually complete and remember.' },
      { icon: 'bi-graph-up', title: 'Measurable Results', description: 'Track behavior change metrics and risk reduction over time with executive dashboards.' },
      { icon: 'bi-building', title: 'Security Culture', description: 'Build a security-first culture from the boardroom to the front line.' },
    ],
    split: {
      label: 'Awareness Technology Review Process',
      title: 'Determine The Right Security Awareness Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The human element remains the largest attack surface in any organization. Are you running generic, checkbox training that employees ignore — or building a measurable security culture?',
        'We evaluate phishing simulation platforms, enterprise LMS solutions, and behavior analytics tools to find the right combination that drives real behavior change and measurable risk reduction across your workforce.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Security Awareness & Education Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Security Awareness consultants can help you evaluate the right solutions across phishing simulation, LMS, and behavior analytics tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Proin gravida hendrerit lectus a molestie. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Praesent mauris fusce non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit vivamus vel nulla.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Aenean lectus elit fermentum non convallis id sagittis at neque. Nullam vel sem praesent pharetra felis.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Cras sagittis vulputate metus donec posuere vulputate arcu phasellus accumsan cursus velit vestibulum.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Morbi mollis tellus ac sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames.' },
      ],
      commitment: {
        label: 'Our Security Awareness Commitment to You',
        title: 'We will help you navigate the Security Awareness technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right security awareness solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of security awareness technologies including: Phishing Simulation platforms, Enterprise Learning Management Systems (LMS) and Behavior Analytics tools',
          'Offering comprehensive integration services for a wide variety of security awareness focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Security Awareness Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit security awareness solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'Phishing click rates dropped from 32% to under 4% within 6 months of deploying their managed awareness program.',
      author: 'CISO',
      company: 'Mid-Market Financial Services',
    },
  },

  'data-security': {
    title: 'Data Security',
    icon: 'bi-database',
    tagline: 'Data loss prevention, encryption, and privacy management for your most critical assets.',
    heroHighlight: 'Data',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We implement comprehensive data security programs covering DLP, encryption, data classification, and privacy compliance. Protect sensitive data wherever it lives — at rest, in motion, and in use.',
    vendors: ['Symantec DLP', 'Varonis', 'Thales', 'BigID', 'Digital Guardian', 'Forcepoint'],
    stats: [
      { number: '$4.5M', label: 'average cost of a data breach' },
      { number: '150+', label: 'data security programs built' },
      { number: '99%', label: 'sensitive data discovery accuracy' },
    ],
    outcomesSection: {
      label: 'Data Outcomes',
      title: 'What You Get with Our Data Security Solutions',
      titleHighlight: 'Data Security',
    },
    outcomes: [
      { icon: 'bi-search', title: 'Data Discovery', description: 'Find and classify sensitive data across endpoints, cloud, and on-prem repositories.' },
      { icon: 'bi-shield-exclamation', title: 'Data Loss Prevention', description: 'Policy-driven DLP prevents unauthorized data exfiltration across all channels.' },
      { icon: 'bi-file-earmark-lock', title: 'Encryption & Tokenization', description: 'Protect data at rest and in transit with enterprise-grade encryption solutions.' },
      { icon: 'bi-journal-check', title: 'Privacy Compliance', description: 'Meet GDPR, CCPA, and industry-specific data privacy requirements.' },
    ],
    split: {
      label: 'Data Security Technology Review Process',
      title: 'Determine The Right Data Security Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'Do you know where all your sensitive data lives — across endpoints, cloud storage, SaaS applications, and on-prem databases? Without visibility, you cannot protect what you cannot see.',
        'We evaluate DLP, data classification, encryption, and privacy management solutions to build a comprehensive data protection program that safeguards your most critical assets across every environment and data state.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Data Security Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Data Security consultants can help you evaluate the right solutions across DLP, encryption, data classification, and privacy management tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Turpis egestas integer eget aliquet nibh praesent tristique magna sit amet purus gravida quis blandit.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis.' },
      ],
      commitment: {
        label: 'Our Data Security Commitment to You',
        title: 'We will help you navigate the Data Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right data security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of data security technologies including: Data Loss Prevention (DLP), Encryption and Tokenization solutions and Data Classification platforms',
          'Offering comprehensive integration services for a wide variety of data security focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Data Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit data security solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'They stood up our entire DLP program in 12 weeks — from data discovery to policy enforcement. We went from zero visibility to full control.',
      author: 'Chief Privacy Officer',
      company: 'SaaS Platform Company',
    },
  },

  'iam': {
    title: 'Identity & Access Management',
    icon: 'bi-fingerprint',
    tagline: 'Manage identities, privileged access, and zero-trust network access at scale.',
    heroHighlight: 'Identity',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We help you implement and optimize IAM, PAM, and IGA solutions from leading vendors. Our identity-first approach ensures the right people have the right access at the right time.',
    vendors: ['CyberArk', 'SailPoint', 'Okta', 'BeyondTrust', 'Ping Identity', 'Saviynt'],
    stats: [
      { number: '80%', label: 'of breaches involve compromised credentials' },
      { number: '500+', label: 'identity deployments completed' },
      { number: '60%', label: 'reduction in access-related incidents' },
    ],
    outcomesSection: {
      label: 'Identity Outcomes',
      title: 'What You Get with Our Identity Solutions',
      titleHighlight: 'Identity Solutions',
    },
    outcomes: [
      { icon: 'bi-person-check', title: 'Zero Trust Access', description: 'Enforce least-privilege access across every user, device, and application.' },
      { icon: 'bi-key', title: 'Privileged Access Control', description: 'Vault, rotate, and audit privileged credentials with full session recording.' },
      { icon: 'bi-arrow-repeat', title: 'Lifecycle Automation', description: 'Automate joiner-mover-leaver workflows to eliminate orphaned accounts.' },
      { icon: 'bi-clipboard-check', title: 'Audit Readiness', description: 'Continuous access certification and compliance reporting for SOX, HIPAA, and more.' },
    ],
    split: {
      label: 'IAM Technology Review Process',
      title: 'Determine The Right Identity & Access Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'Identity is the new perimeter. With hybrid workforces and cloud-first strategies, managing who has access to what — and enforcing least privilege — has never been more critical or complex.',
        'We evaluate IAM, PAM, and IGA platforms from leading vendors to design an identity-first security architecture that reduces credential-based risk while improving user experience and operational efficiency.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Identity & Access Management Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Identity & Access Management consultants can help you evaluate the right solutions across IAM, PAM, and IGA tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Amet dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Neque egestas congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis.' },
      ],
      commitment: {
        label: 'Our Identity & Access Management Commitment to You',
        title: 'We will help you navigate the IAM technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right identity and access management solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of identity technologies including: Identity & Access Management (IAM), Privileged Access Management (PAM) and Identity Governance & Administration (IGA)',
          'Offering comprehensive integration services for a wide variety of identity and access management focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'IAM Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit identity and access management solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'Their team migrated our entire PAM infrastructure to CyberArk in under 8 weeks with zero downtime. Exceptional execution.',
      author: 'CISO',
      company: 'Regional Healthcare System',
    },
  },

  'soc': {
    title: 'Security Operations Center',
    icon: 'bi-globe2',
    tagline: 'SIEM, SOAR, and threat intelligence platforms for modern security operations.',
    heroHighlight: 'Operations',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We help you build, optimize, and run security operations with the right SIEM, SOAR, and TIP solutions. From tool selection to 24/7 managed SOC, we have you covered.',
    vendors: ['Splunk', 'Microsoft Sentinel', 'Google Chronicle', 'IBM QRadar', 'Palo Alto XSOAR', 'Swimlane'],
    stats: [
      { number: '85%', label: 'reduction in alert fatigue' },
      { number: '200+', label: 'SOC deployments' },
      { number: '5min', label: 'average detection to triage' },
    ],
    outcomesSection: {
      label: 'SecOps Outcomes',
      title: 'What You Get with Our SecOps Solutions',
      titleHighlight: 'SecOps Solutions',
    },
    outcomes: [
      { icon: 'bi-display', title: 'Unified SOC Platform', description: 'Single pane of glass across SIEM, SOAR, and threat intelligence feeds.' },
      { icon: 'bi-robot', title: 'Automated Playbooks', description: 'SOAR-driven automation handles repetitive tasks so analysts focus on real threats.' },
      { icon: 'bi-binoculars', title: 'Threat Intelligence', description: 'Curated threat feeds and IOC correlation for proactive threat hunting.' },
      { icon: 'bi-bar-chart-line', title: 'Measurable Metrics', description: 'MTTD, MTTR, and SOC maturity dashboards with executive reporting.' },
    ],
    split: {
      label: 'SecOps Technology Review Process',
      title: 'Determine The Right Security Operations Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'Building a modern SOC requires the right combination of SIEM, SOAR, and threat intelligence platforms. Are your analysts overwhelmed by alert fatigue, or are they empowered with automation and correlated intelligence?',
        'We evaluate and compare security operations platforms — from next-gen SIEM to AI-driven SOAR — to design a SOC technology stack that maximizes analyst efficiency, reduces mean time to detect, and scales with your organization.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Security Operations Center Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Security Operations consultants can help you evaluate the right solutions across SIEM, SOAR, and threat intelligence tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat scelerisque varius.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh.' },
      ],
      commitment: {
        label: 'Our Security Operations Commitment to You',
        title: 'We will help you navigate the Security Operations technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right security operations solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of security operations technologies including: Security Information & Event Management (SIEM), Security Orchestration, Automation & Response (SOAR) and Threat Intelligence Platforms (TIP)',
          'Offering comprehensive integration services for a wide variety of security operations focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'SecOps Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit security operations solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'Moving from QRadar to Sentinel with their managed SOAR playbooks cut our MTTR from 4 hours to 22 minutes.',
      author: 'SOC Director',
      company: 'Major Insurance Provider',
    },
  },

  'email-security': {
    title: 'Email Security',
    icon: 'bi-envelope-check',
    tagline: 'Secure email gateways, DMARC enforcement, and encrypted communications.',
    heroHighlight: 'Email',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We implement and manage email security solutions that stop phishing, BEC, and malware before they reach the inbox — while ensuring compliance with encryption and authentication standards.',
    vendors: ['Proofpoint', 'Mimecast', 'Abnormal Security', 'Microsoft Defender for O365', 'Barracuda', 'Agari'],
    stats: [
      { number: '91%', label: 'of cyberattacks start with email' },
      { number: '99.9%', label: 'phishing detection rate' },
      { number: '300+', label: 'email security deployments' },
    ],
    outcomesSection: {
      label: 'Email Outcomes',
      title: 'What You Get with Our Email Security Solutions',
      titleHighlight: 'Email Security',
    },
    outcomes: [
      { icon: 'bi-envelope-slash', title: 'Advanced Phishing Defense', description: 'AI-powered detection blocks sophisticated phishing, spear-phishing, and BEC attacks.' },
      { icon: 'bi-lock', title: 'Email Encryption', description: 'End-to-end encryption ensures sensitive communications remain confidential.' },
      { icon: 'bi-patch-check', title: 'DMARC & Authentication', description: 'Full SPF, DKIM, and DMARC implementation to prevent domain spoofing.' },
      { icon: 'bi-shield-check', title: 'Threat Remediation', description: 'Automated clawback of malicious emails already delivered to user mailboxes.' },
    ],
    split: {
      label: 'Email Security Technology Review Process',
      title: 'Determine The Right Email Security Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'Email remains the number one attack vector, with increasingly sophisticated phishing, BEC, and malware campaigns bypassing traditional gateways. Is your email security keeping up with AI-generated social engineering attacks?',
        'We evaluate secure email gateways, API-based detection platforms, DMARC enforcement tools, and email encryption solutions to build a layered defense that stops threats before they reach the inbox.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Email Security Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Email Security consultants can help you evaluate the right solutions across secure email gateways, anti-phishing, and email authentication tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante.' },
      ],
      commitment: {
        label: 'Our Email Security Commitment to You',
        title: 'We will help you navigate the Email Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right email security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of email security technologies including: Secure Email Gateways, DMARC/SPF/DKIM Authentication and Email Encryption solutions',
          'Offering comprehensive integration services for a wide variety of email security focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Email Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit email security solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'After deploying Proofpoint with their managed DMARC service, BEC attempts dropped to zero and we achieved full DMARC enforcement in 90 days.',
      author: 'Director of IT',
      company: 'Regional Law Firm',
    },
  },

  'incident-response': {
    title: 'Incident Response & Threat Intelligence',
    icon: 'bi-exclamation-triangle',
    tagline: 'EDR, NDR, forensics, and threat intelligence for rapid incident response.',
    heroHighlight: 'Response',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We deploy and integrate IR and threat intelligence technologies that enable rapid detection, containment, and recovery. From EDR and NDR to DFIR toolkits, we ensure you are prepared for any incident.',
    vendors: ['CrowdStrike', 'Palo Alto Unit 42', 'Mandiant', 'Recorded Future', 'Anomali', 'ThreatConnect'],
    stats: [
      { number: '280 days', label: 'average time to identify a breach without IR' },
      { number: '<4hr', label: 'our average containment time' },
      { number: '150+', label: 'IR engagements completed' },
    ],
    outcomesSection: {
      label: 'IR Outcomes',
      title: 'What You Get with Our IR & Threat Intelligence Solutions',
      titleHighlight: 'IR & Threat Intelligence',
    },
    outcomes: [
      { icon: 'bi-lightning-charge', title: 'Rapid Containment', description: 'Isolate threats in minutes with pre-deployed EDR and automated playbooks.' },
      { icon: 'bi-search', title: 'Digital Forensics', description: 'Deep-dive forensic analysis to determine root cause, scope, and impact.' },
      { icon: 'bi-binoculars', title: 'Threat Intelligence', description: 'Proactive threat hunting powered by curated intelligence feeds and IOC correlation.' },
      { icon: 'bi-file-earmark-text', title: 'IR Readiness', description: 'Retainer-based IR planning, tabletop exercises, and playbook development.' },
    ],
    split: {
      label: 'IR Technology Review Process',
      title: 'Determine The Right Incident Response Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'When a breach occurs, every minute counts. Do you have the right EDR, NDR, and forensic tools pre-deployed and integrated — or will your team be scrambling to gain visibility during a crisis?',
        'We evaluate incident response platforms, threat intelligence feeds, and DFIR toolkits to ensure your organization has the technology foundation for rapid detection, containment, and recovery before an incident strikes.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Incident Response & Threat Intelligence Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Incident Response consultants can help you evaluate the right solutions across EDR, NDR, DFIR, and threat intelligence tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus quis varius quam.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris.' },
      ],
      commitment: {
        label: 'Our Incident Response Commitment to You',
        title: 'We will help you navigate the Incident Response technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right incident response solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of incident response technologies including: Endpoint Detection & Response (EDR), Network Detection & Response (NDR), Digital Forensics & Incident Response (DFIR) and Threat Intelligence Platforms',
          'Offering comprehensive integration services for a wide variety of incident response focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'IR Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit incident response and threat intelligence solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'When we were hit with ransomware at 2 AM, their IR team was on the phone in 15 minutes and had us contained within 2 hours.',
      author: 'VP of Infrastructure',
      company: 'National Logistics Company',
    },
  },

  'vulnerability-management': {
    title: 'Vulnerability Management',
    icon: 'bi-activity',
    tagline: 'Continuous scanning, risk-based prioritization, and automated patching solutions.',
    heroHighlight: 'Vulnerability',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'We implement vulnerability management programs with the right scanning, prioritization, and remediation tools — giving you continuous visibility into your attack surface and a clear path to risk reduction.',
    vendors: ['Tenable', 'Qualys', 'Rapid7', 'CrowdStrike Spotlight', 'Tanium', 'Wiz'],
    stats: [
      { number: '18K+', label: 'new CVEs published annually' },
      { number: '85%', label: 'reduction in critical vulnerabilities' },
      { number: '24hr', label: 'average patch time for critical findings' },
    ],
    outcomesSection: {
      label: 'VM Outcomes',
      title: 'What You Get with Our Vulnerability Management Solutions',
      titleHighlight: 'Vulnerability Management',
    },
    outcomes: [
      { icon: 'bi-radar', title: 'Attack Surface Visibility', description: 'Continuous discovery and scanning across on-prem, cloud, and container assets.' },
      { icon: 'bi-sort-down', title: 'Risk-Based Prioritization', description: 'Focus on vulnerabilities that matter most using exploit intelligence and business context.' },
      { icon: 'bi-gear-wide-connected', title: 'Automated Remediation', description: 'Integrated patching and configuration management to close gaps faster.' },
      { icon: 'bi-graph-down', title: 'Risk Trend Reporting', description: 'Executive dashboards tracking vulnerability trends, SLA compliance, and risk reduction.' },
    ],
    split: {
      label: 'VM Technology Review Process',
      title: 'Determine The Right Vulnerability Management Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'With thousands of new CVEs published each year, traditional scan-and-patch approaches cannot keep up. Are you prioritizing vulnerabilities based on real exploit risk — or drowning in a sea of unactionable findings?',
        'We evaluate vulnerability scanning, risk-based prioritization, and automated patching solutions to build a continuous vulnerability management program that focuses remediation effort where it matters most.',
      ],
      image: '/overview-icon.png',
    },
    expertise: {
      label: 'Expertise on Vulnerability Management Technologies',
      title: 'Rely On A Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Vulnerability Management consultants can help you evaluate the right solutions across vulnerability scanning, risk prioritization, and automated patching tools and integrate them into your unique environment.',
      cards: [
        { title: 'Placeholder Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', expandedDescription: 'Volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus.' },
        { title: 'Placeholder Title 2', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', expandedDescription: 'Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim.' },
        { title: 'Placeholder Title 3', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', expandedDescription: 'Elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut.' },
        { title: 'Placeholder Title 4', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', expandedDescription: 'Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.' },
        { title: 'Placeholder Title 5', description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.', expandedDescription: 'Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget.' },
      ],
      commitment: {
        label: 'Our Vulnerability Management Commitment to You',
        title: 'We will help you navigate the Vulnerability Management technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right vulnerability management solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of vulnerability management technologies including: Vulnerability Scanning platforms, Risk-Based Prioritization tools and Automated Patching solutions',
          'Offering comprehensive integration services for a wide variety of vulnerability management focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'VM Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit vulnerability management solutions to meet your security requirements.',
        ],
        image: '/overview-icon.png',
      },
      cards: [
        { icon: 'bi-cursor', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { icon: 'bi-box-arrow-in-down', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { icon: 'bi-gear', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { icon: 'bi-tools', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    testimonial: {
      quote: 'They consolidated our three scanning tools into Tenable and built automated workflows — our remediation SLA compliance went from 45% to 92%.',
      author: 'Security Operations Manager',
      company: 'Fortune 1000 Energy Company',
    },
  },
};

// Flat list for navigation / listing pages
export const technologiesList = Object.entries(technologies).map(([slug, tech]) => ({
  slug,
  title: tech.title,
  icon: tech.icon,
  tagline: tech.tagline,
  vendors: tech.vendors,
}));

export default technologies;
