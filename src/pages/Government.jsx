import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import ServiceAccordion from '../components/sections/ServiceAccordion';
import Certifications from '../components/sections/Certifications';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';
import { servicesList } from '../data/services';

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
    title: 'Expose any Potential Risk',
    description:
      'We hold ourselves accountable, become experts and take the initiative to identify threats and vulnerabilities across your environment before adversaries can exploit them.',
  },
  {
    title: 'Align & Optimize Resources',
    description:
      'We push ourselves to take calculated risks and exceed expectations. We do what\'s necessary and align your security investments with your mission-critical priorities.',
  },
  {
    title: 'Integrate Best-Fit Solutions',
    description:
      'We strive to be a long-term partner and make our customers\' experience a success, enabling and securing their business with tailored, best-fit security solutions.',
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
      <section className="section section--dark dark-split govt-gradient">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <h2 className="use-cases__title text-start">
                    Security Solutions <span className="text-accent-box">Tailored</span> to Your Specific Mission
                  </h2>
                  <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                    Our highly-certified team of practitioners has decades of expertise helping federal government organizations plan, build and run effective cybersecurity programs. Our white-glove approach helps us understand your agency's unique challenges and requirements, evaluate your environment and recommend tailored solutions that drive your mission.
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
        <div className="container" style={{ paddingTop: '6rem' }}>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="use-cases__title">
                Your <span className="text-accent-box">Partner</span> in the Cybersecurity Battle
              </h2>
              <p className="text-white-50 mx-auto" style={{ maxWidth: 800, lineHeight: 1.8 }}>
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
                  layout="centered"
                  accent="bottom"
                  titleLg
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 4. Contract Vehicles — text left, image right (edge-bleed) */}
      <section className="section section--dark dark-split govt-gradient">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <h2 className="use-cases__title text-start">
                    <span className="text-accent-box">Facilitate</span> Security Procurement with Our Contract Vehicles
                  </h2>
                  <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                    Our team has decades of experience and understands the need for fast and flexible contract vehicles. We have access to a wide range of programs, can satisfy small business requirements and offer solutions through teaming agreements on virtually any contract vehicle.
                  </p>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <Link to="/government/gsa-contract" className="btn btn-accent btn-cta">
                      GSA Contract <i className="bi bi-arrow-right"></i>
                    </Link>
                    <Link to="/government/dod-esi" className="btn btn-accent btn-cta">
                      DoD ESI <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__image dark-split__image--right">
                  <img src="/placeholder-split.svg" alt="Contract vehicles" />
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
              <p className="section-header__label">Services & Technologies</p>
              <h2 className="use-cases__title">
                <span className="text-accent-box">Expertise</span> Based on Reality — Not Theory
              </h2>
              <p className="text-white-50 mx-auto" style={{ maxWidth: 800, lineHeight: 1.8 }}>
                The reality is that every organization's cybersecurity ecosystem requires a custom approach to the threat landscape. That's why we analyze, compare and recommend best-fit security solutions on a tailored basis.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-on-scroll">
            <div className="service-accordion-wrap">
              <ServiceAccordion services={servicesList} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Certifications */}
      <Certifications variant="centered" />

      {/* 7. Our Approach as Your Trusted Advisor */}
      <section className="section section--dark govt-gradient">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="use-cases__title">
                Our Approach as Your Trusted Advisor
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {approachBlocks.map((b) => (
              <div className="col-lg-4" key={b.title}>
                <GradientCard
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
              <h3 className="use-cases__title" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
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
