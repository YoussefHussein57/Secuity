import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import ServiceAccordion from '../components/sections/ServiceAccordion';
import Certifications from '../components/sections/Certifications';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';
import { servicesList } from '../data/services';

// Government-specific accordion descriptions (from GuidePoint gov page)
const govDescriptions = {
  'Application Security': 'The convergence of responsibility for any organization defining their application security should result in an operational state where every task or test ensures that all software releases are secure.',
  'Artificial Intelligence (AI)': 'Safely harness the power and potential of AI. GuidePoint Security helps organizations build secure AI strategies and safely adopt and optimize AI solutions to protect what matters.',
  'Cloud Security': 'IT workloads are moving to the cloud faster than ever and in order to lead your organization to a secure cloud, your security practices must be ready to address this shift.',
  'Data Security & Privacy': 'Introducing more data security controls without affecting business productivity is challenging. We can help you improve data protection in a way that best fits your needs and environment.',
  'Email Security': 'Email is one of the most commonly used communication tools and one of the most targeted attack vectors. Our team can help you ensure the protection of email content and accounts from unauthorized access, loss or compromise.',
  'Endpoint Security': 'As endpoints continue to evolve, you need to identify and manage the right endpoint security technologies to protect your organization.',
  'Governance, Risk & Compliance (GRC)': 'We help you build and maintain a cybersecurity program that is aligned with industry best practices, regulations and compliance requirements.',
  'Identity & Access Management (IAM)': 'Our team helps you evaluate and implement IAM services that best fit your business to protect your users, applications and data.',
  'Incident Response (IR) & Threat Intelligence (TI)': 'Our team helps you effectively identify and respond to incidents early, minimizing their impact and reducing the cost of recovery.',
  'Managed Security Services': 'We provide skilled resources to manage your environment so you can focus on your mission.',
  'Network & Infrastructure Security': 'We help you ensure the integrity and security of your physical and virtual networks.',
  'OT, IoT, and IIoT Security': 'Secure your critical infrastructure and connected devices from threats while validating your security compliance.',
  'Security Awareness & Education': 'Instructor-led security services provide access to key technologies, specifically customized to address your organization\'s needs.',
  'Security Operations Center (SOC) Services': 'Unlock the power of the tools within your SOC to gain greater visibility into information security events, reduce the time to remediate incidents and improve your overall security posture.',
  'Staff Augmentation': 'Our team of industry-leading consultants, engineers and analysts are ready to support your current staff and address your cybersecurity requirements.',
  'Vulnerability Management & Penetration Testing': 'Identify and prioritize vulnerabilities across your environment to reduce risk and strengthen your security posture.',
};

const govServicesList = servicesList.map(s => ({
  ...s,
  description: govDescriptions[s.title] || s.description,
}));

const partnerBlocks = [
  {
    title: 'Solution Provider',
    description:
      'Our information assurance practices include: Application Security, Cloud Security, Governance, Risk & Compliance (GRC), Digital Forensics & Incident Response and Threat & Attack Simulation.',
  },
  {
    title: 'Consulting Services',
    description:
      'Our team of practitioners has vast experience evaluating, implementing and optimizing security solutions and architectures. Additionally we provide staff augmentation services to support your mission.',
  },
  {
    title: 'Federal Systems Integrator',
    description:
      'Our team of practitioners has vast experience evaluating, implementing and optimizing security solutions and architectures. Additionally we provide staff augmentation services to support your mission.',
  },
  {
    title: 'Managed Service Offerings',
    description:
      'For 24×7 support, we partner with the leading Managed Security providers for MDR, EDR and more. Alternatively we can manage specific security platforms and products so you can focus on your mission.',
  },
];

const approachBlocks = [
  {
    icon: 'bi-search',
    title: 'Expose any Potential Risk',
    description:
      'GuidePoint is only as great of a place to work as we make it. We hold ourselves accountable, become experts and take the initiative to get things done.',
  },
  {
    icon: 'bi-list-task',
    title: 'Align & Optimize Resources',
    description:
      '\u201CYou miss 100% of the shots you don\u2019t take,\u201D so we always push ourselves to take calculated risks and exceed our own expectations. We do what\u2019s necessary to \u201CWow Them,\u201D and we have fun doing it. We realize that only we can control whether or not we\u2019re going to have a great day, so we choose to make it one.',
  },
  {
    icon: 'bi-infinity',
    title: 'Integrate Best-Fit Solutions',
    description:
      'We strive to be a long-term partner and make our customers\u2019 experience a success, enabling and securing their business. We realize that we all have customers, whether they\u2019re our clients, coworkers, vendors or others.',
  },
];

export default function Government() {
  return (
    <div className="government-page">
      {/* 1. Hero */}
      <Hero
        title="Government Solutions"
        subtitle="Our team of elite cybersecurity practitioners provides DoD, IC and Civilian agencies with trusted expertise, tailored solutions and services so you can complete your mission with better cybersecurity decisions that minimize risk."
        highlightSubtitleWord="elite cybersecurity practitioners"
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
        variant="page"
        showNetwork={false}
      />


      {/* 2–3. Dark Split + Partner — single section, no separator */}
      <section className="section section--dark dark-split govt-gradient govt-partner">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <h2 className="use-cases__title text-start">
                    Security Solutions <span className="text-accent-box">Tailored</span> to Your Specific Mission
                  </h2>
                  <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                    GuidePoint Security Government Solutions is a wholly-owned subsidiary of GuidePoint Security LLC. Our highly-certified team of practitioners has decades of expertise helping federal government organizations plan, build and run effective cybersecurity programs. Our white-glove approach helps us understand your agency&apos;s unique challenges and requirements, evaluate your environment and recommend tailored solutions that drive your mission.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__video-thumb">
                  <img src="https://embed-ssl.wistia.com/deliveries/a412624a33c1b7d8b5ab9945554a8adf.webp?image_crop_resized=1280x720" alt="Government Solutions video" />
                  <button className="dark-split__play-btn" aria-label="Play video">
                    <i className="bi bi-play-fill"></i>
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Partner in the Cybersecurity Battle — 4 GradientCards */}
        <div className="container" style={{ paddingTop: '4rem' }}>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="use-cases__title" style={{ maxWidth: 1000 }}>
                Your <span className="text-accent-box">Partner</span> in the Cybersecurity Battle
              </h2>
              <p className="text-white mx-auto" style={{ maxWidth: 1110, fontSize: 20, lineHeight: 1.5 }}>
                We know that when it comes to cybersecurity there is no one-size-fits-all approach. We work side-by-side with you to solve your most complex security challenges and provide a multitude of service and solution offerings to fit your specific needs.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {partnerBlocks.map((b) => (
              <div className="col-lg-6" key={b.title}>
                <GradientCard
                  title={b.title}
                  description={b.description}
                  accent="bottom"
                  titleLg
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Contract Vehicles — text left, image right */}
      <section className="section section--dark dark-split govt-gradient">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <h2 className="use-cases__title text-start">
                    <span className="text-accent-box">Facilitate</span> Security Procurement with Our Contract Vehicles
                  </h2>
                  <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                    The GuidePoint Security Government Solutions team has decades of experience and understands the need for fast and flexible contract vehicles. We have access to a wide range of programs, can satisfy small business requirements and offer solutions through teaming agreements on virtually any contract vehicle. Our goal is to make the procurement process as simple as possible for you with one-stop-shopping for all your cybersecurity solution needs.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <Link to="/government/gsa-contract" className="btn btn-accent btn-cta">
                      GSA Contract
                    </Link>
                    <Link to="/government/dod-esi" className="btn btn-accent btn-cta">
                      DoD ESI
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__image dark-split__image--right">
                  <img src="/overview-icon.png" alt="Contract vehicles" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services & Technologies — Accordion */}
      <section className="section section--dark govt-gradient p-4">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p className="section-header__label pb-3">Services &amp; Technologies</p>
              <h2 className="use-cases__title">
                <span className="text-accent-box">Expertise</span> Based on Reality — Not Theory
              </h2>
              <p className="text-white mx-auto" style={{ maxWidth: 800, fontSize: 20, lineHeight: 1.5 }}>
                The reality is that every organization&apos;s cybersecurity ecosystem requires a custom approach to the threat landscape. That&apos;s why we analyze, compare and recommend best-fit security solutions on a tailored basis.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-on-scroll">
            <div className="service-accordion-wrap">
              <ServiceAccordion services={govServicesList} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Certifications */}
      <Certifications variant="centered" />

      {/* 7. Our Approach as Your Trusted Advisor */}
      <section className="section section--dark govt-gradient govt-approach-section">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="use-cases__title govt-approach__title">
                Our Approach as Your Trusted Advisor
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {approachBlocks.map((b) => (
              <div className="col-lg-4" key={b.title}>
                <GradientCard
                  icon={b.icon}
                  title={b.title}
                  description={b.description}
                  layout="centered"
                  accent="bottom"
                  titleLg
                />
              </div>
            ))}
          </AnimatedSection>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mt-5 govt-approach__tagline">
              <h3 className="use-cases__title" style={{ fontSize: 50 }}>
                We Take That Approach with <span className="text-accent-box">Every</span> Service We Provide
              </h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. Additional Resources */}
      <AdditionalResources />

      {/* 9. Be Informed CTA */}
      <BeInformed />
    </div>
  );
}
