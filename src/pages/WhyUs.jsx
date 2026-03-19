import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import SectionHeader from '../components/sections/SectionHeader';
import NetworkBackground from '../components/sections/NetworkBackground';
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
      'We put 800+ technology vendors (best-in-class and emerging) through a rigorous vetting process to ensure we know how they solve real customer challenges. We help clients with everything from product evaluation and selection, to implementation, optimization and management \u2013 to maximize the value of their technology investments.',
  },
  {
    title: 'Personal Touch, National Scale',
    description:
      'We offer localized, white-glove service at a national scale. That gives our clients that personal touch plus access to a wider team of practitioners and expertise that span all cybersecurity disciplines and technologies. Our goal isn\'t to sell you products, but to become your long-term partner, remove complexity, reduce your cyber risk and ensure your ultimate success.',
  },
];

export default function WhyUs() {
  const [activeDiff, setActiveDiff] = useState(0);

  return (
    <div className="why-us-page">
      {/* ===== HERO ===== */}
      <Hero
        label="Who Is Cyber Security"
        title="Your Trusted Advisor & Partner"
        subtitle="Organizations rely on us to help protect, enable and lead their cybersecurity efforts. We are solely focused on cybersecurity so we can help secure your organization today while preparing it for what may happen tomorrow."
        ctaText=""
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
        variant="page"
        showNetwork={false}
      />

      {/* ===== CYBERSECURITY TAILORED FOR YOU — Dark, 2-col layout ===== */}
      <section className="section section--dark why-us-tailored">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 align-items-start">
              <div className="col-lg-6">
                <h2 className="why-us-tailored__title">
                  Cybersecurity Tailored for You
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="why-us-tailored__text">
                  We help organizations solve their most complex security challenges,
                  align security with business objectives, mature their security posture,
                  minimize risk and ensure compliance.
                </p>
                <p className="why-us-tailored__text">
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

      {/* ===== WHY US — "We help you" Cards (Indigo bg) ===== */}
      <section className="section section--indigo-light why-us-cards">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5" style={{ width: 'fit-content', margin: '0 auto' }}>
              <p className="why-us-cards__label">
                Why Cyber Security
              </p>
              <h2 className="why-us-cards__title">
                Stronger Together. Protecting What&rsquo;s Next.
              </h2>
              <div className="why-us-cards__underline mb-4" />
              <p className="why-us-cards__subtitle">
                We empower clients with the insight, access, guidance and support to make
                smarter, more strategic decisions and strengthen their security posture as
                environments and threats evolve.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {helpSections.map((section) => (
              <div className="col-lg-4" key={section.title}>
                <GradientCard accent="bottom">
                  <p className="why-us-card__help-label">
                    We help you
                  </p>
                  <h3 className="why-us-card__help-title">{section.title}</h3>
                  <ul className="list-unstyled mb-0">
                    {section.items.map((item, j) => (
                      <li key={j} className="why-us-card__check-item">
                        <i className="bi bi-check-circle"></i>
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

      {/* ===== HOW WE'RE DIFFERENT — Dark bg, accordion style ===== */}
      <section className="section section--dark why-us-different">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 py-lg-5">
              <div className="col-lg-5">
                <p className="why-us-different__label">
                  How We Are Different
                </p>
                <h2 className="why-us-different__title">
                  Stronger, Smarter Cybersecurity
                </h2>
                <p className="why-us-different__subtitle">
                  We help secure your people, data and operations.
                </p>
                <Link to="/company" className="btn btn-accent btn-lg">
                  Learn More
                </Link>
              </div>
              <div className="col-lg-7">
                <div className="why-us-accordion">
                  {differentiators.map((d, i) => (
                    <div
                      key={d.title}
                      className={`why-us-accordion__item ${activeDiff === i ? 'why-us-accordion__item--active' : ''}`}
                    >
                      <button
                        className="why-us-accordion__header"
                        onClick={() => setActiveDiff(activeDiff === i ? -1 : i)}
                      >
                        <i className={`bi ${activeDiff === i ? 'bi-dash' : 'bi-plus'}`}></i>
                        <span>{d.title}</span>
                      </button>
                      <div className="why-us-accordion__body" style={{
                        maxHeight: activeDiff === i ? '500px' : '0',
                      }}>
                        <div className="why-us-accordion__content">
                          {d.description.split('\n\n').map((para, pi) => (
                            <p key={pi}>{para}</p>
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

      {/* ===== SERVICES & TECHNOLOGIES — Same as Home page ===== */}
      <section className="section section--dark home-services-list">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll pt-lg-5">
            <SectionHeader
              label="Services & Technologies"
              title="Your Single Point of Contact for Cybersecurity Expertise"
              center
              titleMaxWidth="730px"
            />
          </AnimatedSection>
          <AnimatedSection animation="animate-on-scroll">
            <ServiceAccordion services={servicesList} />
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
