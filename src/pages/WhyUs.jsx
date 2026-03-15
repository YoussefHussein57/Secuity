import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import Certifications from '../components/sections/Certifications';
import GPSUniversity from '../components/sections/GPSUniversity';
import BeInformed from '../components/sections/BeInformed';
import { servicesList } from '../data/services';
import ServiceAccordion from '../components/sections/ServiceAccordion';

const helpSections = [
  {
    title: 'Align Business & Cybersecurity Goals',
    items: [
      'Operationalize security requirements',
      'Identify, quantify and prioritize enterprise risk',
      'Validate regulatory compliance and cybersecurity best practices',
      'Develop priority-aligned cybersecurity maturity strategies',
      'Continuously validate and fine-tune security posture',
    ],
  },
  {
    title: 'Optimize Cybersecurity Resources',
    items: [
      'Conduct health checks, penetration tests and gap analyses to bullet-proof your environment',
      'Align cybersecurity solutions to your internal capacity',
      'Build comprehensive cybersecurity strategies to protect data and mitigate risk',
      'Create expertise and efficiencies with expertise on demand',
    ],
  },
  {
    title: 'Integrate Best-fit Solutions',
    items: [
      'Navigate the cybersecurity landscape',
      'Review, analyze, compare and vet current and emerging technologies',
      'Select the right products, tools and controls for your environment to minimize risk',
      'Integrate, optimize and automate security architectures',
    ],
  },
];

const differentiators = [
  {
    title: 'Cybersecurity Built Around You',
    description:
      'Rooted in a culture committed to doing what\'s right, we meet customers where they are, listen, adapt and act with purpose. We deliver vendor-objective strategies shaped by what\'s needed, not what\'s easy.\n\nOur financing arm offers flexible options to simplify the cybersecurity solution and services procurement process.',
  },
  {
    title: 'Deep Technology Expertise',
    description:
      'We put 800+ technology vendors (best-in-class and emerging) through a rigorous vetting process to ensure every recommendation is a fit for your specific environment, goals and budget.',
  },
  {
    title: 'Personal Touch, National Scale',
    description:
      'We offer localized, white-glove service at a national scale. That gives our clients that personal touch from someone they know and trust — while also accessing a deep bench of talent and resources.',
  },
];

export default function WhyUs() {
  const [activeDiff, setActiveDiff] = useState(0);

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        label="Who Is Cyber Security"
        title="Your Trusted Advisor & Partner"
        subtitle="Organizations rely on us to help protect, enable and lead their cybersecurity efforts. Our approach is fueled by a relentless commitment to being your trusted advisor."
        ctaText=""
        bgImage="/hero-why-us.png"
        variant="page"
      />

      {/* ===== CYBERSECURITY TAILORED FOR YOU — Dark, 2-col layout ===== */}
      <section className="section section--dark">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <h2 className="section-header__title text-white">
                  Cybersecurity Tailored for You
                </h2>
              </div>
              <div className="col-lg-7">
                <p className="text-white-50 mb-3" style={{ lineHeight: 1.8 }}>
                  We help organizations solve their most complex security challenges,
                  align security with business objectives, mature their security posture,
                  minimize risk and ensure compliance.
                </p>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  Backed by deep expertise, strong partnerships and the best
                  technologies, we deliver scalable, adaptive solutions that evolve with
                  the threat landscape to safeguard critical assets today and enable you
                  to move forward with confidence.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY US — "We help you" Cards (Indigo-light, no network bg) ===== */}
      <section className="section section--indigo-light">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p
                className="small fw-bold text-white mb-2"
                style={{ textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.6 }}
              >
                Why Cyber Security
              </p>
              <h2 className="section-header__title text-white mb-3">
                Stronger Together. Protecting What&rsquo;s Next.
              </h2>
              <p className="text-white-50 mx-auto" style={{ maxWidth: 750, lineHeight: 1.8 }}>
                We empower clients with the insight, access, guidance and support to make
                smarter, more strategic decisions and strengthen their security posture as
                environments and threats evolve.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {helpSections.map((section) => (
              <div className="col-lg-4" key={section.title}>
                <GradientCard accent="top">
                  <p
                    className="text-white-50 small mb-2"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}
                  >
                    We help you
                  </p>
                  <h5 className="text-white fw-bold mb-3 text-center">{section.title}</h5>
                  <ul className="list-unstyled mb-0">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-white-50 mb-3 d-flex align-items-start gap-2">
                        <i
                          className="bi bi-check-circle"
                          style={{ color: '#00ccff', flexShrink: 0, marginTop: 3, fontSize: '1rem' }}
                        ></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GradientCard>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== HOW WE'RE DIFFERENT — Dark, accordion style, no network bg ===== */}
      <section className="section section--dark">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5">
              <div className="col-lg-5">
                <p
                  className="small fw-bold text-white mb-2"
                  style={{ textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.6 }}
                >
                  How We Are Different
                </p>
                <h2 className="section-header__title text-white mb-3">
                  Stronger, Smarter Cybersecurity
                </h2>
                <p className="text-white-50 mb-4">
                  We help secure your people, data and operations.
                </p>
                <Link to="/company" className="btn btn-accent btn-cta">
                  Learn More <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="col-lg-7">
                <div className="why-accordion">
                  {differentiators.map((d, i) => (
                    <div
                      key={d.title}
                      className="why-accordion__item"
                      style={{
                        borderTop: '1px solid rgba(255,255,255,0.15)',
                        borderBottom: i === differentiators.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                      }}
                    >
                      <button
                        className="why-accordion__header"
                        onClick={() => setActiveDiff(activeDiff === i ? -1 : i)}
                        style={{
                          background: 'none',
                          border: 'none',
                          width: '100%',
                          textAlign: 'left',
                          padding: '1.25rem 0',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          color: '#fff',
                        }}
                      >
                        <i
                          className={`bi ${activeDiff === i ? 'bi-dash' : 'bi-plus'}`}
                          style={{ fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}
                        ></i>
                        <span className="fw-bold" style={{ fontSize: '1.1rem' }}>{d.title}</span>
                      </button>
                      <div
                        style={{
                          maxHeight: activeDiff === i ? '300px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.35s ease',
                        }}
                      >
                        <div className="pb-4 ps-4" style={{ paddingLeft: '2.5rem' }}>
                          {d.description.split('\n\n').map((para, pi) => (
                            <p key={pi} className="text-white-50" style={{ lineHeight: 1.8 }}>
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CERTIFICATIONS (shared component — light bg) ===== */}
      <Certifications variant="page" />

      {/* ===== GPSU + OUR PEOPLE (shared) ===== */}
      <GPSUniversity />

      {/* ===== SERVICES & TECHNOLOGIES — Dark, ServiceAccordion ===== */}
      <section className="section section--dark">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p className="section-header__label">Services &amp; Technologies</p>
              <h2 className="section-header__title text-white" style={{maxWidth:"730px" , margin:"0 auto"}}>
                Your Single Point of Contact for Cybersecurity Expertise
              </h2>
            </div>
          </AnimatedSection>

          <ServiceAccordion services={servicesList} />
        </div>
      </section>

      <BeInformed />
    </>
  );
}
