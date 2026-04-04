import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import ServiceAccordion from '../components/sections/ServiceAccordion';
import { servicesList } from '../data/services';

export default function Services() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero
        title="Services & Technologies"
        variant="page"
        ctaText=""
        bgImage="https://www.guidepointsecurity.com/wp-content/themes/guidepointsecurity/assets/dist/images/example-background.jpg"
        className="hero--banner"
      />

      {/* ── Expertise split section ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="display-5 fw-bold mb-4" style={{ color: '#0f0f27', lineHeight: 1.2 }}>
                  <span style={{ background: '#0f0f27', color: '#fff', padding: '0.05em 0.25em', display: 'inline' }}>Expertise</span> based on<br />
                  reality — not theory
                </h2>
                <p style={{ fontSize: '18px', color: '#444', lineHeight: 1.7 }}>
                  The reality is that every organization's cybersecurity ecosystem requires a
                  custom approach to the threat landscape. That's why we analyze, compare
                  and recommend best-fit security solutions on a tailored basis.
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 text-center">
              <AnimatedSection animation="fade-in-right">
                <img
                  src="/images/services-expertise.svg"
                  alt="Expertise"
                  style={{ maxWidth: '420px', width: '100%' }}
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security Consulting Practices video ── */}
      <section className="services-consulting">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="services-consulting__title mb-4">
                <span className="gradient-underline-text">Security Consulting Practices</span>
              </h2>
              <p className="services-consulting__subtitle">
                Bryan Orme, Principal and Partner at GuidePoint Security, presents an overview of our Consulting Practices.
              </p>
            </div>

            <div
              className="services-consulting__video-wrap"
              onClick={() => window.open('https://guidepointsecurity.wistia.com/medias/cc2fc40022', '_blank', 'noopener,noreferrer')}
            >
              <img
                src="https://embed-ssl.wistia.com/deliveries/cc2fc40022fb491cac14d48780240d2f.webp?image_crop_resized=1920x1080"
                alt="Security Consulting Practices"
              />
              <div className="services-consulting__play-overlay">
                <div className="services-consulting__play-btn">
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── We Cover All of Your Cybersecurity Needs — Accordion ── */}
      <section className="section bg-white services-cover-section">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-4">
              <h2 className="services-cover-section__title">
                <span className="gradient-underline-text">We Cover All of Your Cybersecurity Needs</span>
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="animate-on-scroll">
            <div className="service-accordion-wrap">
              <p className="services-cover-section__subtitle fw-bold">
                Explore our cybersecurity services and solutions across a wide range of vetted technologies:
              </p>
              <ServiceAccordion services={servicesList} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
