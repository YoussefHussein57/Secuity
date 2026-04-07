const technologies = {
  'application-security': {
    title: 'Application Security',
    icon: 'bi-diamond',
    heroLabel: 'Application Security Technologies',
    tagline: 'Embed Security Into Your Software',
    heroHighlight: 'Embed',
    heroCta: 'Safeguard Your Cloud',
    heroImage: '/images/services/tech-hero-placeholder.png',
    description:
      'Our team has extensive, real-world, hands-on experience recommending which AppSec technologies work best based on your future goals and current environment.',
    vendors: ['Checkmarx', 'Snyk', 'Veracode', 'Fortify', 'Imperva', 'Akamai'],
    stats: [
      { number: '90%', label: 'of breaches involve application vulnerabilities' },
      { number: '650+', label: 'technology partnerships' },
      { number: '48hr', label: 'average time to critical finding' },
    ],
    outcomesSection: {
      label: 'Application Security Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our AppSec engineering team can guide you through a holistic approach to address your unique application security needs and improve the maturity of your AppSec program.',
    },
    outcomes: [
      { iconImage: '/images/icons/save-spending.png', title: 'Save on Security Spending', description: 'Streamline AppSec processes to increase efficiency and reduce security costs.' },
      { iconImage: '/images/icons/scale-appsec.png', title: 'Scale AppSec Programs', description: 'Empower software developers to shift security left in their SDLC and CI/CD tools.' },
      { iconImage: '/images/icons/expand-testing.png', title: 'Expand Testing Coverage', description: 'Prevent software vulnerabilities from being pushed into production codebases.' },
      { iconImage: '/images/icons/improve-compliance.png', title: 'Improve Compliance', description: 'Demonstrate compliance with industry regulations and audit requirements.' },
    ],
    split: {
      label: 'Application Security Technology Review Process',
      title: 'Determine the Right AppSec Technology',
      titleHighlight: 'Determine',
      paragraphs: [
        'There are lots of available AppSec solutions in the market. But how do you know which technologies provide the right amount of security throughout your software development lifecycle? Our trusted application security experts help organizations like yours evaluate proven solutions, technologies and tools that identify security risks, optimize resources and reduce expenses.',
      ],
      image: '/overview-icon-left.png',
    },
    expertise: {
      label: 'Expertise on Multiple AppSec Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our AppSec engineering team helps you navigate the Application Security technology landscape to identify the right technology and integrate it into your unique environment.',
      tabs: [
        {
          name: 'AppSec Technologies',
          cards: [
            { title: 'SAST: Static Application Security Testing', description: 'Reduce risk in your SDLC by remediating issues in your source code before deploying apps into production through your CI/CD tools.' },
            { title: 'SCA: Software Composition Analysis', description: 'Monitor third-party & open-source libraries and versions to prevent known vulnerabilities and exploits in your software applications.' },
            { title: 'DAST: Dynamic Application Security Testing', description: 'Detect conditions that indicate if vulnerabilities can be manipulated or actively exploited in your live, running applications.' },
            { title: 'RASP: Runtime Application Self-Protection', description: 'Provides a layer of back-end protection to enable your applications to defend themselves against known and zero-day attacks.' },
            { title: 'WAF: Web Application Firewall', description: 'Monitor, filter and block signature-based traffic of known attack types against the front-end application layer (vs. the back-end).' },
          ],
        },
        {
          name: 'Managed Security',
          cards: [
            { title: 'Application Security as a Service', description: 'Reduce risk in your SDLC by remediating issues in your source code before deploying apps into production through your CI/CD tools.', link: '/application-security' },
          ],
        },
      ],
      commitment: {
        label: 'Our Commitment to You',
        title: 'We will help you navigate the AppSec technology journey by:',
        items: [
          'Offering comprehensive integration services for a wide variety of application security focused technologies tailored to your unique use cases',
          'Providing knowledgeable and experienced AppSec professionals who are available to install, configure and run various Application Security technologies',
          'Ensuring that your AppSec technologies perform and govern your application portfolio as intended, providing your organization with proactive risk reduction and cost-savings metrics that support the progress and overall maturation of secure development',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Application Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of engineers has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit solutions to meet your security requirements.',
        ],
        image: '/overview-icon-right.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
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
    icon: 'bi-laptop',
    heroLabel: 'Endpoint Security Technologies',
    tagline: 'Ensure Visibility & Control of Your Endpoints',
    heroHighlight: 'Visibility',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Services_SUB_Pages_Endpoint_Security_Services.png',
    description:
      'Our team has extensive, real-world, hands-on experience recommending which Endpoint Security technologies and features work best for your organization\'s protection.',
    outcomesSection: {
      label: 'Endpoint Security Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our engineering team can guide you through a holistic approach to address your unique endpoint security needs and improve the maturity of your program.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Social_Engineering.png', title: 'Identify the Best-Fit Solution', description: 'Our experts can guide you through POCs to ensure the right solution is selected for your environment and needs.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/MDR.png', title: 'Ensure Proper Configuration', description: 'We can help you implement and tune the endpoint security technology and also train your staff to be self-sufficient.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Splunk_Services.png', title: 'Architect a Solution that Scales', description: 'We can help you future-proof your endpoint security program and solutions to meet your needs today and tomorrow.' },
      { iconImage: '/images/icons/improve-compliance.png', title: 'MDR and Managed EDR', description: 'We can help recommend the right managed service provider and solution based on your organization\'s unique requirements.' },
    ],
    split: {
      label: 'Endpoint Security Technology Review Process',
      title: 'Determine the Right Endpoint Security Technology',
      titleHighlight: 'Determine',
      paragraphs: [
        'Endpoint security is critical for ensuring that your endpoints and the networks and data that they connect to, are secured from internal and external threats. With the shift to a more mobile and remote workforce, how are you addressing malware protection and visibility on your endpoints?',
        'We have the subject matter expertise to understand the unique demands of your network and can work with you to select, design and implement a solution to ensure that your endpoints are protected.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Endpoint-Security_Left.png',
    },
    expertise: {
      label: 'Expertise on Endpoint Security Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified engineering team helps you navigate the landscape to identify the right Endpoint Security technology and integrate it into your unique environment.',
      cards: [
        { title: 'Endpoint Protection Platform: EPP', description: 'Provides the first level of defense by blocking malware, deploying personal firewall rules and protecting data via removable device policies, encryption and more.' },
        { title: 'Endpoint Detection & Response: EDR', description: 'Offers more advanced capabilities, providing real-time and historical visibility and the ability to investigate the data produced by endpoints.' },
        { title: 'Managed Detection & Response: MDR', description: 'Provides 24x7x365 full management of endpoint security solutions with analyst eyes on glass and performs response and remediation to events.' },
        { title: 'Data Loss Prevention: DLP', description: 'Protects sensitive data on endpoints by preventing data from being accidentally or maliciously leaked, lost, misused or destroyed.' },
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
        label: 'Endpoint Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of engineers has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit endpoint security solutions to meet your security requirements.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Endpoint-Security_Left.png',
        flipImage: true,
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certifications: [
      { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
      { name: 'ISC2 CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/logo-isc2-ccsp-square.png' },
      { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line.png' },
      { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
    ],
  },

  'network-security': {
    title: 'Network & Infrastructure Security',
    icon: 'bi-hdd-network',
    heroLabel: 'Network & Infrastructure Security Technologies',
    tagline: 'Secure Browsing Activity and Your Network from Unauthorized Access, Data Exfiltration, Anomalous Activity and More',
    heroHighlight: 'Secure',
    heroCta: 'Secure Your Network',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/02/Services_SUB_Pages_Network_Security_Platform_Specific_Services.jpg',
    description:
      'Our team has extensive, real-world, hands-on experience recommending which Web and Network Security technologies and features work best for your organization and environment.',
    vendors: ['Palo Alto Networks', 'Fortinet', 'Cisco', 'Zscaler', 'Netskope', 'Darktrace'],
    outcomesSection: {
      label: 'Network Security Technology Outcomes',
      title: 'We Serve as Your Trusted Advisors',
      titleHighlight: 'Trusted Advisors',
      subtitle: 'Our Network and Web Security engineers can guide you through not only the technology and solution options, but also help implement and tune the capabilities that work best for your needs and environment.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Protect Against Attacks', description: 'Defend against threats by implementing, managing and optimizing innovative network and web security technologies and monitoring those systems.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/scale-appsec-programs-sdlc.png', title: 'Facilitate Zero Trust Adoption', description: 'Develop and build a Zero Trust strategy with achievable goals and iteratively drive the adoption of critical capabilities.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/expand-testing-coverage-codebases.png', title: 'Scalable Network Security', description: 'Integrate new or existing network security solutions into your environment to ensure visibility and overall security posture over time.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/improve-compliance-audit-requirements.png', title: 'Improve Compliance', description: 'Ensure your network security meets regulatory and industry requirements and that data traversing the network is protected.' },
    ],
    split: {
      label: 'Network Security Technology Review Process',
      title: 'Determine the Proper Web & Network Security Controls to Safeguard Your Organization',
      titleHighlight: 'Determine',
      paragraphs: [
        'Building the foundation of network security in order to ensure a secure environment is imperative for a smooth, secure and scalable infrastructure. On-prem, cloud or SaaS solutions all have their place, but how can you determine which network security technologies and solutions best fit your needs?',
        'Our network security experts leverage a requirements-based approach to facilitate determining the proper controls needed to secure your business. There are a host of solutions that are components of a network security infrastructure—from Next Generation Firewalls, Network Segmentation, Network Access Control and Sandboxing, to Secure Web Gateways, Cloud Access Security Brokers, Secure Access Service Edge (SASE) Solutions and more—that when configured properly can deliver strong network security.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Network_Security_Left.png',
    },
    expertise: {
      label: 'Expertise on Network & Infrastructure Security Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Network Security engineers can help you evaluate the right solutions and integrate them into your unique environment.',
      tabs: [
        {
          name: 'NETWORK SECURITY TECHNOLOGIES',
          cards: [
            { title: 'Next Generation Firewall: NGFW', description: 'Protects your network perimeter, data center and critical network segments on prem or in the cloud by identifying applications and controlling access through standard and non-standard ports and protocols.' },
            { title: 'Network Detection & Response: NDR', description: 'Leverages signature-based attacks and software-based behavior modeling to identify anomalous network or user behavior once it bypasses the perimeter firewall.' },
            { title: 'Network Segmentation Solutions', description: 'Whether perimeter-based security and traditional network segmentation to software-defined networks and micro-segmentation, these solutions enable for partitioning of the network.' },
            { title: 'Network Access Control', description: 'Controls the who, what, when, where, why and how of network access, protecting and segmenting wired, wireless, remote access and IoT/OT environments.' },
            { title: 'Network Security Management & Change Control', description: 'Tracks your existing security configurations and model changes before they are implemented from the data center to the cloud.' },
          ],
        },
        {
          name: 'WEB SECURITY TECHNOLOGIES',
          cards: [
            { title: 'Secure Web Gateways (SWG)', description: 'Filter web traffic and enforce acceptable use policies to protect users from web-based threats and malicious content.' },
            { title: 'Cloud Access Security Brokers (CASB)', description: 'Extend enterprise security policies to cloud applications and services, giving visibility and control over data in the cloud.' },
            { title: 'Secure Access Service Edge (SASE)', description: 'Converge wide area networking and network security into a single, cloud-delivered service model for secure access anywhere.' },
            { title: 'Secure DNS Server Solutions', description: 'Prevent DNS-based attacks and enforce content filtering at the DNS layer to block malicious domains before connections are made.' },
            { title: 'Secure Browser Isolation', description: 'Protect end users from malicious web content by isolating browser sessions in a remote environment away from the endpoint.' },
          ],
        },
      ],
      commitment: {
        label: 'Our Network Security Commitment to You',
        title: 'We will help you navigate the Network Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right Network and Web Security technologies and capabilities to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of Network Security technologies including: Next-Generation Firewalls, Network Segmentation Solutions, Sandboxing, Network Access Control, Network Security Management and Change Control Solutions',
          'Implementing, optimizing and managing a wide range of Web Security technologies including: Secure Web Gateways, Cloud Access Security Brokers, Secure Access Service Edge providers, Secure DNS Server Solutions and Secure Browser Isolation',
          'Providing a managed "as a Service" offering for Next Generation Firewalls tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Network Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit cybersecurity solutions to meet your requirements.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Network_Security_Right.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certificationGroups: [
      {
        category: 'Industry Certifications',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gse-gold.png' },
        ],
      },
      {
        category: 'Product Certifications',
        certs: [
          { name: 'Zscaler Certification', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/Zscaler_Certification.png' },
          { name: 'Network Security Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/NetSec_Cert_1.png' },
          { name: 'Network Security Cert 2', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/NetSec_Cert_2.png' },
          { name: 'CCNP Security', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/CCNP_security_100x120px.png' },
          { name: 'CCNP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/CCNP_cert_100x120px.png' },
        ],
      },
    ],
    testimonial: {
      quote: 'They redesigned our entire network security stack with Palo Alto and Zscaler — 40% cost reduction with better protection.',
      author: 'Network Security Manager',
      company: 'Global Manufacturing Company',
    },
  },

  'cloud-security': {
    title: 'Cloud Security',
    icon: 'bi-cloud',
    heroLabel: 'Cloud Security Technologies',
    tagline: 'Ensure the Security of Your Cloud Computing Environment',
    heroHighlight: 'Ensure the Security',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Website_Refresh_Services_SUB_Pages_Cloud_Security_Assessments.png',
    description:
      'Our team has extensive, real-world, hands-on experience recommending which Cloud Security technologies work best with your environment to ensure your data and infrastructure are protected.',
    outcomesSection: {
      label: 'Cloud Security Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our cybersecurity engineering team can guide you through a holistic approach to address your unique cloud security needs and improve the maturity of your program.',
    },
    outcomes: [
      { iconImage: '/images/icons/save-spending.png', title: 'Gain a "Security First" Cloud Strategy', description: 'Empower your stakeholders, define your cloud strategy and security controls and enforce them.' },
      { iconImage: '/images/icons/scale-appsec.png', title: 'Future Proof Your Cloud Security Architecture', description: 'Ensure the right foundation is in place to address challenges regardless of the cloud environment.' },
      { iconImage: '/images/icons/expand-testing.png', title: 'Ensure the Right Visibility', description: 'Be able to access information to correlate activity and have proper change control.' },
      { iconImage: '/images/icons/improve-compliance.png', title: 'Improve Compliance', description: 'Demonstrate compliance with industry regulations and audit requirements.' },
    ],
    split: {
      label: 'Cloud Security Technology Review Process',
      title: 'Determine the Right Cloud Security Technology',
      titleHighlight: 'Determine',
      paragraphs: [
        'As more organizations leverage the cloud, traditional security solutions are not designed for cloud environments. And your organization has its unique cloud environment with its own set of requirements and needs. How can you ensure which technologies provide the right amount of security to address new and evolving challenges with protecting your cloud environment? Our trusted Cloud Security experts help organizations like yours evaluate proven solutions, technologies and tools that identify security risks, optimize resources and reduce expenses.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
    },
    expertise: {
      label: 'Expertise on Cloud Security Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified engineering team helps you navigate the Cloud Security technology landscape to identify the right technology and integrate it into your unique environment.',
      cards: [
        { title: 'Container Security', description: 'Scale large clusters of your applications and manage the various security capabilities and configurations that match their speed and resiliency.' },
        { title: 'Cloud Access Security Brokers (CASB)', description: 'Provide a layer of security between cloud providers and your organization, allowing you to monitor and secure access to ensure that data is secure and in compliance.' },
        { title: 'Cloud Security Posture Management (CSPM)', description: 'Continuously monitor your cloud environments, identify gaps between your security policy and security posture and ensure adherence to your cloud security baseline.' },
        { title: 'Infrastructure as Code (IaC)', description: 'Create a stronger cloud security program through role-based security policies, validation of approved infrastructure designs and much more.' },
        { title: 'CI/CD Tools & Frameworks', description: 'Gain full control of cloud infrastructure and applications by reviewing code for vulnerabilities and compliance issues before it makes it into production.' },
      ],
      commitment: {
        label: 'Our Cloud Security Commitment to You',
        title: 'We will help you navigate the Cloud Security technology journey by:',
        items: [
          'Implementing, optimizing and managing a wide range of cloud security technologies',
          'Offering comprehensive integration services for a wide variety of cloud security focused technologies tailored to your unique use cases',
          'Providing knowledgeable and experienced cybersecurity professionals who are available to install, configure and run various Cloud Security technologies',
          'Helping you create a proper CASB strategy and select one that best fits your organization and goals',
          'Helping you understand container security technologies, such as Kubernetes and managed environments, to take advantage of the various security capabilities and configurations',
          'Working with you to develop the process structure and tools integration around IaC processes',
          'Creating the right strategy and selecting the best-fit technologies for your CI/CD security program',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Cloud Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of engineers has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit solutions to meet your security requirements.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Cloud_left.png',
        flipImage: true,
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certificationGroups: [
      {
        category: 'Industry Certifications',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'ISC2 CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/logo-isc2-ccsp-square.png' },
          { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line.png' },
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
        ],
      },
      {
        category: 'CSPM Certifications',
        certs: [
          { name: 'AWS Solutions Architect Professional', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/11/AWS-Solution-Architect-Professional-Certificaiotn-free-courses-e1636322717899.png' },
          { name: 'Microsoft Cybersecurity Architect Expert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/Azure-Cybersecurity-Architect-Expert_100x120px.png' },
          { name: 'Google Cloud Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-google-cloud-architect.png' },
          { name: 'AWS Security Specialty', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-aws-security-speciality.png' },
          { name: 'Microsoft Azure Solutions Architect Expert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/04/azure-solutions-architect-expert-600x600_100x120px.png' },
        ],
      },
    ],
  },

  'grc': {
    title: 'Governance, Risk & Compliance',
    icon: 'bi-check2-square',
    heroLabel: 'Governance, Risk & Compliance Technologies',
    tagline: 'Drive Your GRC Program Maturity Forward With The Right Solutions',
    heroHighlight: 'GRC Program',
    heroCta: 'Manage Your Risk',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Services_SUB_Pages_Business_Continuity__Disaster_Recovery.png',
    description: 'Our governance, risk and compliance team has extensive, real-world, hands-on experience recommending which GRC technologies and features work best for your organization.',
    outcomesSection: {
      label: 'GRC Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our GRC consulting team can guide you through a holistic approach to address your unique governance, risk & compliance needs and improve the maturity of your Infosec program.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Education_support.png', title: 'Understand Your Risk', description: 'Ensure you have the right information to make risk-informed decisions.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/scale-appsec-programs-sdlc.png', title: 'Measure Risk & Compliance', description: 'Leverage the right tools to monitor risk and compliance and provide insights.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Checkmark-Half.png', title: 'Ensure Resilience', description: 'Proactively address risk, security gaps and business resilience issues.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/improve-compliance-audit-requirements.png', title: 'Improve Compliance', description: 'Demonstrate compliance with industry regulations and audit requirements.' },
    ],
    split: {
      label: 'GRC Technology Review Process',
      title: 'Determine the Right GRC Technology Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'The GRC technology landscape is large, encompassing just about every aspect of your program. How are you running your GRC program today? Through manual processes and spreadsheets? There are a host of governance, risk and compliance solutions—from risk management to control alignment to data classification and more—that can really add value to your organization, providing insights, metrics and reporting for your program and giving you better insight for decision making.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Governance_Risk_Compliance_Right.png',
    },
    expertise: {
      label: 'Expertise on GRC Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Governance, Risk & Compliance consultants can help you evaluate the right solutions across GRC, niche and data governance tools and integrate them into your unique environment.',
      cards: [
        { title: 'Traditional GRC Tools', description: 'Robust solutions that typically are a primary tool focused on risk management, compliance, business continuity, audit and more, with add-on modules that cover other aspects of your program.' },
        { title: 'Niche Tools', description: 'Often considered "best-of-breed", these solutions are purpose-built to address specific functions like risk analysis, third-party risk, data privacy and more.' },
        { title: 'Data Governance Tools', description: 'Identify sensitive data throughout your environment to provide visibility into areas including user access, data flow and storage areas and the data controls in place.' },
      ],
      commitment: {
        label: 'Our GRC Commitment to You',
        title: 'We will help you navigate the GRC technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right GRC technologies and capabilities to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of GRC technologies including: Risk management, compliance, business continuity, audit, risk analysis, third-party risk, data privacy, data governance and much more',
          'Offering comprehensive integration services for a wide variety of governance, risk and compliance focused technologies tailored to your unique use cases',
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
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Governance_Risk_Compliance_Left.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certifications: [
      { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
      { name: 'HCISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-hcispp.png' },
      { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
      { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
      { name: 'PCI QSA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/02/logo-pci-qualified-security-assessor-e1761764701369.png' },
      { name: 'CISM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/gps-cert-cism.png' },
      { name: 'CRISC', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/CRISC_cert-e1752767713961.png' },
      { name: 'CISA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/07/gps-cert-cisa.png' },
    ],
  },

  'security-awareness': {
    title: 'Security Awareness & Education',
    icon: 'bi-mortarboard',
    heroLabel: 'Security Awareness & Education Technologies',
    tagline: 'Enable and Educate Your Users to be Security Aware',
    heroHighlight: 'Enable and Educate',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/02/Services_SUB_Pages_Security_Awareness_Services.png',
    description:
      'Our team has extensive, real-world, hands-on experience recommending which Security Awareness technologies and features work best for driving content, consistency, automation and accountability throughout your organization.',
    outcomesSection: {
      label: 'Security Awareness Technology Outcomes',
      title: 'We Serve as Your Trusted Advisors',
      titleHighlight: 'Trusted Advisors',
      subtitle: 'Our Security engineers and consultants can guide you through not only the Security and Awareness technology and solution options, but also help implement and tune the capabilities that work best for your needs and environment.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Help Protect Against the Top Initial Attack Vector', description: 'Phishing continues to be the most common initial attack vector and training your employees to think before clicking will help reduce your risk.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/scale-appsec-programs-sdlc.png', title: 'Arm Your Defenders', description: "Improve and validate your team's cybersecurity skills with attack-focused education and with realistic lab environments." },
    ],
    split: {
      label: 'Security Awareness Technology Review Process',
      title: 'Ease the Demand on Your Security Awareness Program',
      titleHighlight: 'Security Awareness',
      paragraphs: [
        'While the concept of security awareness programs is simple, the reality is that it\'s quite challenging to keep up with the demand for updated and fresh content, centrally track and manage learning outcomes, automate messaging and reminders and more.',
        'Leveraging security awareness solutions can help address the challenges and position your program for success. Our team of security experts can help you determine what technologies make sense for your organization to help build, strengthen and mature your culture of security.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Security_Awareness_and_Education_Left.png',
    },
    expertise: {
      label: 'Expertise on Security Awareness & Education Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified security engineers can help you evaluate the right security awareness technologies and effectively implement them across your organization and its employees.',
      cards: [
        { title: 'General Security Awareness', description: 'Typically designed for larger appeal, covering a wide range of information security topics, including general awareness, compliance, privacy, acceptable use and more.' },
        { title: 'Phishing Solution', description: 'Specifically designed to provide knowledge on the various types of phishing attacks and teach users how to identify such an attack, which is the most common initial attack method.' },
        { title: 'Attack-Focused Solution', description: 'Provides insight into attacker techniques and educates how users can recognize and respond to them.' },
        { title: 'Enterprise Learning Management Systems', description: 'Geared for the entire company with training offerings outside of just infosec. Offers the ability to centralize security and non-security awareness training for the organization.' },
      ],
      commitment: {
        label: 'Our Security Awareness Commitment to You',
        title: 'We will help you navigate the Security Awareness technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right Security Awareness technologies and capabilities to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing Security Awareness technologies including: Phishing, Attack-focused systems, Enterprise Learning Management Systems and General Security Awareness solutions',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Security Awareness Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit Security Awareness solutions to meet your requirements.',
        ],
        stats: [
          { value: '650+', label: 'Vetted Solutions' },
          { value: '400+', label: 'in Yearly Savings' },
          { value: '95+', label: 'Reduction in Security Spend' },
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Security_Awareness_and_Education_Right_Revised.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certificationGroups: [
      {
        category: 'Industry Certifications',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-ccsp.png' },
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gse-gold.png' },
        ],
      },
    ],
  },

  'data-security': {
    title: 'Data Security',
    icon: 'bi-database',
    heroLabel: 'Data Security Technologies',
    tagline: 'Maximize the Value of Your Data Security Solutions',
    heroHighlight: 'Maximize the Value',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Website_Refresh_Services_SUB_Pages_Data_Security__Protection_Services.png',
    description:
      'Our team has extensive, real-world, hands-on experience recommending which Data Security technologies and features work best for your organization.',
    outcomesSection: {
      label: 'Data Security Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our engineering team can guide you through a holistic approach to address your unique data security needs and improve the maturity of your program.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Data_Security_Privacy.png', title: 'Ensure Data Governance', description: 'Identify, document and secure the people, processes and solutions involved in handling sensitive data.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/scale-appsec-programs-sdlc.png', title: 'Protect Data in Motion, At Rest & on the Endpoint', description: 'Minimize insider threats and external attacks on your information infrastructure.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/expand-testing-coverage-codebases.png', title: 'See Your Data', description: 'Gain visibility into metadata and user behavior to identify potential security risks.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/improve-compliance-audit-requirements.png', title: 'Improve Compliance', description: 'Demonstrate compliance with industry regulations and audit requirements.' },
    ],
    split: {
      label: 'Data Security Technology Review Process',
      title: 'Determine the Right Data Security Technology',
      titleHighlight: 'Determine',
      paragraphs: [
        'Data security solutions are purchased with the best intentions, but oftentimes only a small subset of features are utilized. How can you ensure you fully implement and use data security technologies without obstacles such as access permissions, data cleanup, data owner management, alert tuning and more? Our trusted Data Security experts help organizations like yours evaluate proven solutions, technologies and tools that identify security risks, optimize resources and reduce expenses.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Data-Security_Left.png',
    },
    expertise: {
      label: 'Expertise on Data Security Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified engineering team helps you navigate the Data Security technology landscape to identify the right solution and integrate it into your unique environment.',
      cards: [
        { title: 'Data Classification Tools', description: 'Categorize data based on custom or predefined policies to ensure the security of sensitive information.' },
        { title: 'Secure Web Gateways (SWGs)', description: 'Filter unwanted software and malware from web traffic and enforce compliance with regulations and corporate policies.' },
        { title: 'Secure Email Gateways (SEGs)', description: 'Prevent unwanted/malicious email, analyze email to prevent sensitive data from leaving the organization and encrypt emails with sensitive information.' },
        { title: 'Data Loss Prevention (DLP)', description: 'Protect sensitive data traversing the network and on endpoints due to the proliferation of SaaS/cloud applications and the increase of remote workers.' },
        { title: 'Data Governance Tools', description: 'Define, build and manage data security policies that discover and classify sensitive data, identify risk and remediate issues.' },
      ],
      commitment: {
        label: 'Our Data Security Commitment to You',
        title: 'We will help you navigate the Data Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right data security solutions to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of data security technologies',
          'Offering comprehensive integration services for a wide variety of data security focused technologies tailored to your unique use cases',
          'Helping you examine your organization\'s appetite for data security technology, explore issues and solutions around accurate classification and deliver an approach that drives the right policies and controls around data classification',
          'Integrating and leveraging the data security features within existing Secure Web Gateways and Secure Email Gateways and conduct data-driven penetration tests against your existing configurations',
          'Protecting sensitive data traversing the network and on endpoints due to the proliferation of SaaS/cloud applications and the increase of mobile or remote workers',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Data Security Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of engineers has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit Data Security solutions to meet your security requirements.',
        ],
        image: '/overview-icon-right.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certifications: [
      { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
      { name: 'ISC2 CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/logo-isc2-ccsp-square.png' },
      { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line.png' },
      { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
    ],
    testimonial: {
      quote: 'GuidePoint Security is basically family. They\'re always there when I need them. At the end of the day GuidePoint is always there to help and that\'s how they add value.',
      author: 'Security Manager',
      company: 'Nuance',
      personImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/mark-gilman.png',
      companyLogo: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Nuance.png',
    },
  },

  'iam': {
    title: 'Identity & Access Management',
    icon: 'bi-fingerprint',
    heroLabel: 'IAM Technologies',
    tagline: 'Manage Identities and Access to Your Systems and Data with the Right IAM Technologies',
    heroHighlight: 'Manage',
    heroCta: 'Strengthen Your IAM Program',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Website_Refresh_Services_SUB_Pages_IAM_Advisory_Services.jpg',
    description: 'Our team has extensive, real-world, hands-on experience recommending which Identity & Access Management technologies and features work best for your organization and environment.',
    outcomesSection: {
      label: 'IAM Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our certified Identity & Access Management engineering team can guide you through not only the technology and solution options, but also help ensure the right stakeholders are involved across different groups and implementing processes that work for your stakeholders and overall business.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/CISO_asA_Service.png', title: 'Ensure the Right Access', description: 'Rely on access policies to make sure, for example, your junior analysts don\'t have the same full administrative access that your CISO does for a network firewall.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/CMMC_Compliance.png', title: 'Reduce Risk', description: 'Leverage extra layers of authentication and authorization like SSO, MFA and risk-based authentication that enforce permissions and lead to a reduced-risk platform.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Breach_Attack_Simulation_asA_Service.png', title: 'Empower Business Agility', description: 'Share information and improve collaboration among applications, devices and business units.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/improve-compliance-audit-requirements.png', title: 'Ensure Compliance', description: 'Identity governance processes can help use your activity data to ensure policies comply with regulations like PCI-DSS or GDPR.' },
    ],
    split: {
      label: 'IAM Technology Review Process',
      title: 'Determine the Right IAM Technology Solutions',
      titleHighlight: 'Determine',
      paragraphs: [
        'Identity and Access Management (IAM) technologies focus on defining and managing roles and the associated access privileges of users. How are you managing this today that is seamless for users, but also ensures the right levels of security and access are in place?',
        'There are a host of solutions that are involved in managing the user\'s access lifecycle—from Access Management to Customer Identity & Access Management, Identity Governance & Administration and Privileged Access Management—that will help automate and enforce identity processes, enabling more agile and secure business operations.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Identity_Access_Management_Left.png',
    },
    expertise: {
      label: 'Expertise on IAM Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified IAM engineers can help you evaluate the right solutions and integrate them into your unique environment.',
      cards: [
        { title: 'Identity Governance & Administration: IGA', description: 'Enables organizations to secure their user access, manage user and administrator permissions and enforce requisite compliance policies.' },
        { title: 'Access Management: AM', description: 'Provides authentication and authorization capabilities through single sign-on, multi-factor authentication and federated single sign-on.' },
        { title: 'Customer Identity & Access Management: CIAM', description: 'Manages and controls external identity use cases including access, authentication and authorization to business applications and digital properties.' },
        { title: 'Privileged Access Management: PAM', description: 'Mitigates privileged access risks and ensures employees have the necessary access levels to complete their work.' },
      ],
      commitment: {
        label: 'Our IAM Commitment to You',
        title: 'We will help you navigate the IAM technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right Identity & Access Management technologies and capabilities to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of IAM technologies including: Access Management, Identity Governance & Administration, Customer Identity & Access Management and Privileged Access Management',
          'Offering managed services for a wide variety of IAM technologies tailored to your unique use cases',
          'Helping design and build integrations, automating provisioning to various targets and configuring your IGA solution for access certification and closed-loop remediation',
          'Deploying various access management solutions to meet your unique needs, including access to on-premise and cloud-based applications',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'IAM Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of consultants has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit IAM solutions to meet your security requirements.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Identity_Access_Management_Right.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certifications: [
      { name: 'Okta Certified Administrator', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/Badge-Certified-Administrator_100x120px.png' },
      { name: 'Okta Certified Professional', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/Badge-Certified-Professional_100x120px.png' },
      { name: 'Okta Certified Consultant', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/Okta-Certified-Consultant_100x120px.png' },
      { name: 'Okta Certified Developer', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/Okta-Certified-Developer_100x120px.png' },
      { name: 'Okta Apex Delivery Partner', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/Apex_delivery_partner_Okta_cert.png' },
      { name: 'Saviynt IGA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/Saviynt-IGA_100x120px.png' },
      { name: 'SailPoint IDN Engineer', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/SailPoint-IDN-Engineer_100x120px.png' },
      { name: 'SailPoint IDN Professional', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2023/02/SailPoint-IDN-Professional_100x120px.png' },
    ],
  },

  'soc': {
    title: 'Security Operations Center (SOC)',
    icon: 'bi-activity',
    heroLabel: 'Security Operations Center (SOC) Technologies',
    tagline: 'Gain the Telemetry You Need to Identify Breach Activity and Hunt for Intrusions',
    heroHighlight: 'Breach Activity',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/02/Website_Refresh_Services_SUB_Pages_SOC_Optimization.png',
    description: 'Our team has extensive, real-world, hands-on experience recommending which Security Analytics technologies and features work best for your organization.',
    outcomesSection: {
      label: 'Security Analytics Technology Outcomes',
      title: 'We Serve as Your Trusted Advisors',
      titleHighlight: 'Trusted Advisors',
      subtitle: 'Our SOC engineering experts can help ensure you are maximizing the value of your Security Analytics telemetry to reduce noise and gain more signal from your alerts.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Quickly Resolve Incidents', description: 'Tune your SOC tools to have better visibility of security events and reduce the time to remediate incidents.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Automate More Tasks', description: 'Optimize SOAR and ML capabilities to maximize the value of your investment as well as your SOC team.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Hunt for Threats & Find Anomalies', description: 'Leverage threat intelligence and ML to identify anomalous behavior and potential threats.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Improve Your SOC Maturity', description: 'Integrate SOC tools to gain the advantage of actionable alerts with context to speed decision making and resolution.' },
    ],
    split: {
      label: 'Security Analytics Technology Review Process',
      title: 'Determine the Proper Security Analytics Technologies for Your Organization',
      titleHighlight: 'Determine',
      paragraphs: [
        'Security analytics are a foundational component of every security operation. Our security experts help you determine the auditing and data analytics solution needed to secure your business. While on-prem, cloud or SaaS solutions all have their place, how can you determine which solution best fits your needs? We take a requirements-based approach that streamlines the decision-making process, maximizing your effectiveness while minimizing operational overhead.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_SOC_Left_Revised.png',
    },
    expertise: {
      label: 'Expertise on Security Analytics Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified SOC and Security Analytics experts can help you identify the right technology and integrate it into your unique environment and processes.',
      cards: [
        { title: 'Audit Collection', description: 'Our experts can help by writing audit governance policies, determining audit configurations and architecting enterprise-level solutions to support mandated audit requirements, as well as the SOC\'s need for information.' },
        { title: 'Security Information & Event Management System: SIEM', description: 'We provide assistance with capability selection based on your needs and environment, as well as what SOC processes to automate. We can create content that is flexible and adapt to the way your employees work and also help with platform implementation, custom integrations and tuning.' },
        { title: 'Machine Learning: ML', description: 'Our team is adept at utilizing common machine learning platforms to help review your security data. We create content that is flexible and adapts to the way your employees or groups work on a day-to-day basis and highlights when something is abnormal.' },
        { title: 'Security Orchestration, Automation & Response: SOAR', description: 'We provide assistance with SOAR platform selection based on your needs and environment, as well as what SOC processes to automate via a SOAR. We also help with platform implementation and custom integrations.' },
      ],
      commitment: {
        label: 'Our Security Analytics Commitment to You',
        title: 'We will help you navigate the Security Analytics technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right security analytics and SOC solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of SOC technologies such as SIEM, SOAR and Machine Learning',
          'Offering comprehensive integration services for a wide variety of SOAR and security analytics focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Security Analytics Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of engineers and operators has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit solutions to meet your security requirements.',
        ],
        stats: [
          { value: '650+', label: 'Vetted Solutions' },
          { value: '400+', label: 'in Yearly Savings' },
          { value: '95+', label: 'Reduction in Security Spend' },
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_SOC_Right_Revised.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certificationGroups: [
      {
        category: 'Industry Certifications',
        certs: [
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'GSOM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_gsom.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_gpen.png' },
          { name: 'GSNA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_gsna.png' },
          { name: 'GCIH', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_gcih.png' },
        ],
      },
      {
        category: 'MITRE ATT&CK Certifications',
        certs: [
          { name: 'MITRE SOC', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_mitre_soc.png' },
          { name: 'GX-IA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_gx-ia.png' },
          { name: 'GCWN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/cert_gcwn.png' },
        ],
      },
    ],
  },

  'email-security': {
    title: 'Email Security',
    icon: 'bi-envelope-check',
    heroLabel: 'Email Security Technologies',
    tagline: 'Protect Your Information with the Right Email Security Solutions',
    heroHighlight: 'Protect',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Website_Refresh_Services_SUB_Pages_Phishing_Services.png',
    description:
      'Our team has hands-on, real-world experience recommending which Email Security technologies and solutions will work best for your organization.',
    outcomesSection: {
      label: 'Email Security Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our Email Security engineering team can guide you through a holistic approach to address your unique email security needs and improve the maturity of your program.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Incident_Response_Threat_Intelligence-1.png', title: 'Minimize Risk', description: 'Protect your email from being leveraged by adversaries as their most common initial threat vector.' },
      { iconImage: '/images/icons/scale-appsec.png', title: 'Increase Security Awareness', description: 'Test and educate your users to ensure they are more aware of threats targeting them through email.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Managed_Security_Services.png', title: 'Protect Your Data', description: 'Prevent sensitive data from leaving the organization through email.' },
      { iconImage: '/images/icons/improve-compliance.png', title: 'Improve Compliance', description: 'Demonstrate compliance with industry regulations and audit requirements.' },
    ],
    split: {
      label: 'Email Security Technology Review Process',
      title: 'Determine the Right Email Security Technology',
      titleHighlight: 'Determine',
      paragraphs: [
        'Email is core to a functioning business, which is why most attacks rely on email as the initial attack vector. It is imperative that you have the right security tools in place to protect your sensitive information. How can you benefit from email without the inherent risk? Our team of email security experts can help you identify email security features and requirements for your unique environment and help you evaluate proven solutions, technologies and tools that identify security risks, optimize resources and reduce expenses.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Email_Icon_Left.png',
    },
    expertise: {
      label: 'Expertise on Email Security Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our certified engineering team helps you navigate the Email Security landscape to identify the right technologies and integrate them into your unique environment.',
      cards: [
        { title: 'Email Threat Intelligence', description: 'Gain reputation information for URLs and files, URL filtering and access to on-demand intel analysts who can provide insights on threat actors.' },
        { title: 'Email Sandboxing', description: 'Detonate or analyze suspicious email for malware, links and links in files.' },
        { title: 'DMARC', description: 'Keep the extended infrastructure functioning properly, while still preventing fraudulent attempts to spoof the organization\'s email to your clients and users.' },
        { title: 'Secure Encrypted Email', description: 'Enable seamless secure communications between the client and the organization, also allowing for revocation and expiration of communications.' },
        { title: 'Email Security Awareness Platform', description: 'A critical component of defense against social engineering attacks, this platform tests your employees and provides results for further education.' },
        { title: 'Secure Email Gateways (SEGs)', description: 'Prevent unwanted/malicious email, analyze email to prevent sensitive data from leaving the organization and encrypt emails with sensitive information.' },
        { title: 'Link Defense', description: 'Check if a link is malicious before delivery and "on-click" using URL-rewriting in the email can protect users now and weeks, months or even years later.' },
        { title: 'Email Machine Learning for Security', description: 'Leverage machine learning to detect and stop sophisticated email-based threats that evade traditional rule-based defenses.' },
        { title: 'Email Data Loss Prevention', description: 'Identify and prevent the unauthorized transmission of sensitive data through outbound email channels.' },
      ],
      commitment: {
        label: 'Our Email Security Commitment to You',
        title: 'We will help you navigate the Email Security technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right email security solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of email security technologies including: Email Threat Intelligence, Email Sandboxing, DMARC, Secure Encrypted Email, Email Security Awareness Platforms, Secure Email Gateways, Link Defense, Machine Learning and Email Data Loss Prevention',
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
          'Our team of engineers has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit Email Security solutions to meet your security requirements.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Email_Icon_Left.png',
        flipImage: true,
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certifications: [
      { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
      { name: 'ISC2 CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/logo-isc2-ccsp-square.png' },
      { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line.png' },
      { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
    ],
  },

  'incident-response': {
    title: 'IR, Forensics & Threat Intelligence',
    icon: 'bi-exclamation-triangle',
    heroLabel: 'IR, Forensics & Threat Intelligence Technologies',
    tagline: 'Quickly and Effectively Detect and Respond to Incidents',
    heroHighlight: 'Detect and Respond',
    heroCta: 'Talk to an Expert',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/02/Services_SUB_Pages_Incident_Response.jpg',
    description: 'Our team has extensive, real-world, hands-on experience recommending which Incident Response (IR), Threat Intelligence and Digital Forensics technologies and features work best for your organization.',
    outcomesSection: {
      label: 'IR & Threat Intelligence Technology Outcomes',
      title: 'We Serve as Your Trusted Advisor',
      titleHighlight: 'Trusted Advisor',
      subtitle: 'Our incident response and threat intelligence teams can help ensure you are prepared for and can respond and recover from an incident, by leveraging the right skills, processes and technologies.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Blast_Off.png', title: 'Enable Faster Response and Recovery', description: 'Our experts can ensure the right solutions are in place to speed response when an incident occurs.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/scale-appsec-programs-sdlc.png', title: 'Empower Your Threat Intel Program', description: 'We can help you implement and operationalize threat intelligence technology.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/12/Data_Security_Protection.png', title: 'Ensure Visibility and Data Collection', description: 'Our team can help deploy and configure data collection and aggregation tools to speed incident investigation.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/improve-compliance-audit-requirements.png', title: 'MDR and Managed EDR', description: 'We can help recommend the right managed service provider and solution based on your organization\'s unique requirements.' },
    ],
    split: {
      label: 'IR & Threat Intelligence Technology Review Process',
      title: 'Determine the Right IR, Digital Forensics & Threat Intelligence Technologies',
      titleHighlight: 'Determine',
      paragraphs: [
        'Breaches happen all too often. However, there are tools that can help you better prepare for, respond to and recover from an incident. Conducting a successful incident response investigation is largely contingent on how quickly an incident is identified.',
        'In addition, the investigation depends on the security solutions that are in place at the time of the incident and whether or not they can help collect data or artifacts to perform a historical investigation.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Incident_Response_Left.png',
    },
    expertise: {
      label: 'Expertise on IR & Threat Intelligence Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified IR and Threat Intelligence experts can help you identify the right technology and integrate it into your unique environment and processes.',
      cardIconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/04/app-sec-icon-light-blue.png',
      tabs: [
        {
          name: 'INCIDENT RESPONSE TECHNOLOGIES',
          cards: [
            { title: 'Endpoint Detection & Response: EDR', description: 'Offers more advanced capabilities, providing real-time and historical visibility and the ability to investigate the data produced by endpoints.' },
            { title: 'Network Detection & Response: NDR', description: 'Leverages signature-based attacks and software-based behavior modeling to identify anomalous network or user behavior once it bypasses the perimeter firewall.' },
            { title: 'Centralized Log Collection & Aggregation', description: 'Ensures availability and retention of logs via a centralized repository to assist with analysis.' },
          ],
        },
        {
          name: 'DIGITAL FORENSICS TECHNOLOGIES',
          cards: [
            { title: 'Cross-Platform Acquisition Hardware & Software', description: 'Acquires forensically sound disk and memory images across various operating systems.' },
            { title: 'Case Management, Indexing and Preliminary Analysis', description: 'Provides capabilities to capture case-related data and tracking information, perform analysis and gather results during the investigative process.' },
            { title: 'Cloud-Based Acquisition Solutions', description: 'Collects data from third-party services like AWS, M365, Google, iCloud, Facebook, Instagram, X and performs analysis.' },
            { title: 'Mobile Acquisition Hardware', description: 'Acquires forensic images from mobile devices and performs analysis to support an investigation.' },
            { title: 'Remote Collection Capabilities', description: 'Remotely pulls artifacts, system information and forensic images without local access.' },
          ],
        },
        {
          name: 'THREAT INTELLIGENCE TECHNOLOGIES',
          cards: [
            { title: 'Threat Intelligence Platforms', description: 'Aggregates and correlates threat data from multiple sources to provide actionable intelligence for your security operations.' },
            { title: 'Brand Intelligence & Dark Web Monitoring', description: 'Monitors the dark web and open-source intelligence channels for threats targeting your brand, credentials and sensitive data.' },
            { title: 'Attack Surface Monitoring', description: 'Continuously discovers and monitors your external attack surface to identify exposures before adversaries can exploit them.' },
            { title: 'Sandboxing & Malware Analysis', description: 'Detonates and analyzes suspicious files and URLs in an isolated environment to detect and understand malware behavior.' },
          ],
        },
      ],
      commitment: {
        label: 'Our IR and Threat Intelligence Commitment to You',
        title: 'We will help you navigate the IR & Threat Intelligence technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right incident response, threat intelligence and digital forensics technologies, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing incident response technologies such as endpoint detection and response, network detection and response and centralized log collection and aggregation',
          'Implementing digital forensics technologies, including hardware and software-based digital forensic tools to address practitioners\' forensic acquisition, case management, analysis, evidence storage and data archival needs',
          'Implementing threat intelligence technologies such as threat intelligence platforms, feeds, brand intelligence monitoring, dark web monitoring, attack surface monitoring, sandboxing, malware analysis and reverse engineering',
          'Offering comprehensive integration services for a wide variety of incident response, digital forensics and threat intelligence focused technologies tailored to your unique use cases',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'IR & Threat Intelligence Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of incident responders and threat intelligence analysts has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit solutions to meet your security requirements.',
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Incident_Response_Right.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certifications: [
      { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
      { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
      { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
      { name: 'GCFA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/Template_GCFA-2-e1601312512145.png' },
      { name: 'GCFE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gcfe.png' },
      { name: 'GCIH', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gcih.png' },
      { name: 'GREM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-grem-removebg-preview.png' },
      { name: 'GCIA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gcia.png' },
    ],
  },

  'vulnerability-management': {
    title: 'Vulnerability Management',
    icon: 'bi-activity',
    heroLabel: 'Vulnerability Management Technologies',
    tagline: 'Gain the Expertise You Need to Implement, Optimize and Manage Your Vulnerability Management Technologies',
    heroHighlight: 'Expertise',
    heroCta: 'Evaluate Your Security',
    heroImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Website_Refresh_Services_SUB_Pages_Vulnerability_Management_Services.png',
    description: 'Our team has extensive, real-world, hands-on experience recommending which Vulnerability Management technologies and features work best for your organization.',
    outcomesSection: {
      label: 'Vulnerability Management Technology Outcomes',
      title: 'We Serve as Your Trusted Advisors',
      titleHighlight: 'Trusted Advisors',
      subtitle: 'Our vulnerability management experts take pride in our proven track record of success in identifying and remediating security vulnerabilities for customers operating across multiple industries, including regulated environments with security postures that are subject to high levels of scrutiny.',
    },
    outcomes: [
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/save-security-spending.png', title: 'Prioritize Security Risks', description: 'Address immediate risks and your existing processes to categorize, prioritize, mitigate and remediate security vulnerabilities.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/scale-appsec-programs-sdlc.png', title: 'Successfully Deploy Solutions', description: 'Ensure your vulnerability management solutions are running effectively and optimized for maximum results.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/expand-testing-coverage-codebases.png', title: 'Defend Containerized Applications', description: 'Protect your containerized, cloud-based workloads from security risks through proven policies and technologies.' },
      { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/improve-compliance-audit-requirements.png', title: 'Improve Your Security Posture', description: 'Gain realistic, actionable recommendations to shore up prioritized vulnerabilities and weak security configurations.' },
    ],
    split: {
      label: 'Vulnerability Management Technology Review Process',
      title: 'Go Beyond Vulnerability Scanning and Patch Management',
      titleHighlight: 'Go Beyond',
      paragraphs: [
        'Vulnerability Management (VM) is a holistic risk-based program that helps your enterprise identify, detect and manage potential threats. How are you addressing the challenges of building a vulnerability management program which can include internal cultural problems, toolset nightmares and a never-ending uphill climb? We help you tackle vulnerabilities at their source, providing the right combination of real-world experience, technology depth and continuous education.',
      ],
      image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Pentensting_Left.png',
    },
    expertise: {
      label: 'Expertise on Vulnerability Management Technologies',
      title: 'Rely on a Vendor-Agnostic Partner',
      titleHighlight: 'Vendor-Agnostic',
      subtitle: 'Our highly-certified Vulnerability Management consultants can help you evaluate the right solutions across scanning, patch management, configuration management and integration tools and integrate them into your unique environment.',
      cards: [
        { title: 'Vulnerability Scanning', description: 'We provide end-to-end, cross-module support across all major scanning platforms and solutions to identify internal and external risks to your network that threat actors can exploit.' },
        { title: 'Patch Management', description: 'Our team can facilitate effective patch management by automating the analysis and deployment of patches and establishing a well-thought-out approach to patch management.' },
        { title: 'Security Configuration Management', description: 'We ensure the configuration settings of your network\'s production servers are standardized before patches are deployed.' },
        { title: 'Web Applications', description: 'SAST scans will identify risky code that has the potential to introduce security threats, while DAST tests will simulate the perspective of hypothetical threat actors.' },
        { title: 'Cloud & Container Expertise', description: 'We help you effectively defend your containerized applications from security risks through the combination of proven policies, security technologies and vulnerability management tools.' },
        { title: 'Integration Solutions', description: 'Automation tools, custom workflows and custom-designed applications and integrations all contribute to a stronger cybersecurity posture that is well-positioned for positive evaluation during cybersecurity audits and compliance assessments.' },
      ],
      commitment: {
        label: 'Our Vulnerability Management Commitment to You',
        title: 'We will help you navigate the Vulnerability Management technology journey by:',
        items: [
          'Understanding the unique nature of your environment and identifying the right vulnerability scanning, patch management, security configuration management and web application solutions, capabilities and configurations to meet your needs—from defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept',
          'Implementing, optimizing and managing a wide range of vulnerability management technologies such as vulnerability scanning, patch management, security configuration management and web application solutions',
          'Offering comprehensive integration services for a wide variety of vulnerability management focused technologies tailored to your unique use cases, including integrations, cloud and containers',
        ],
      },
    },
    lifecycle: {
      split: {
        label: 'Vulnerability Management Solution Acquisition Lifecycle',
        title: 'Gain Unparalleled Access & Buying Power',
        titleHighlight: 'Unparalleled',
        paragraphs: [
          'Our team of vulnerability management experts has decades of hands-on cybersecurity experience working in large commercial and government organizations to review, compare, recommend, negotiate and source best-fit solutions to meet your security requirements.',
        ],
        stats: [
          { value: '650+', label: 'Vetted Solutions' },
          { value: '400+', label: 'in Yearly Savings' },
          { value: '95+', label: 'Reduction in Security Spend' },
        ],
        image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/Large_triangle_icon_Pentensting_Right.png',
      },
      cards: [
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png', title: '1. Evaluation & Selection', description: 'We help you define selection criteria, build a vendor comparison matrix and develop a proof of concept.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png', title: '2. Implementation', description: 'We work with you to properly install and configure solutions in your environment.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png', title: '3. Optimization', description: 'We train your team and ensure your technology runs efficiently and effectively.' },
        { iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png', title: '4. Management', description: 'Our team stays involved post-deployment to provide system management & analysis.' },
      ],
    },
    certificationGroups: [
      {
        category: 'Industry Certifications',
        certs: [
          { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
          { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
          { name: 'CEH', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/10/ceh_cert_100px.png' },
          { name: 'CREST', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2021/10/CREST-Cert_100px.png' },
        ],
      },
      {
        category: 'GIAC & Offensive Security Certifications',
        certs: [
          { name: 'GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/07/gps-cert-gse-gold.png' },
          { name: 'GREM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/gps-cert-grem-removebg-preview.png' },
          { name: 'GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-gpen.png' },
          { name: 'GNFA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/02/GNFA-e1749237100682.png' },
        ],
      },
    ],
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
