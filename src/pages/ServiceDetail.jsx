import { useParams, Link, Navigate } from 'react-router-dom';
// import { useState } from 'react';
import Hero from '../components/sections/Hero';
// import SectionHeader from '../components/sections/SectionHeader';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
// import FeatureCard from '../components/sections/FeatureCard';
import services from '../data/services';
// import BeInformed from '../components/sections/BeInformed';


export default function ServiceDetail() {
  const { slug } = useParams();
  // const [activeTab, setActiveTab] = useState('Strategic');
  const service = services[slug];

  if (!service) return <Navigate to="/404" replace />;

  // const tabData = {
  //   Strategic: service.strategic,
  //   Tactical: service.tactical,
  //   Managed: service.managed,
  // };

  return (
    <>
      {/* 1. Hero */}
      <Hero
        label={service.title}
        title={service.tagline}
        highlightWord={service.heroHighlight}
        highlightStyle="box"
        subtitle={service.description}
        ctaText={`Secure Your ${service.title.split(' ')[0]}`}
        ctaLink="/contact"
        bgImage={service.heroImage}
        variant="service"
      />

      {/* 2. Use Cases */}
      {service.useCases && (
        <section className="section section--indigo">
          <div className="container">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center mb-5">
                <p className="section-header__label">{service.useCases.label}</p>
                <h2 className="use-cases__title">
                  {service.useCases.titleHighlight ? (
                    <>
                      {service.useCases.title.split(service.useCases.titleHighlight)[0]}
                      <span className="text-accent-box">{service.useCases.titleHighlight}</span>
                      {service.useCases.title.split(service.useCases.titleHighlight)[1] || ''}
                    </>
                  ) : service.useCases.title}
                </h2>
                <p className="text-white-50 mx-auto" style={{ maxWidth: 700, lineHeight: 1.7 }}>
                  {service.useCases.subtitle}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="stagger-children" className="row g-4 justify-content-center">
              {service.useCases.items.map((item) => (
                <div className="col-lg-4 col-md-6" key={item}>
                  <div className="use-case-card">
                    <p className="use-case-card__text">{item}</p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 3. Overview — text left, image right */}
      <section className="section section--dark dark-split">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <p className="section-header__label">
                    {service.processSection?.label || `${service.title} Overview`}
                  </p>
                  <h2 className="use-cases__title text-start">
                    {service.processSection?.titleHighlight ? (
                      <>
                        {service.processSection.title.split(service.processSection.titleHighlight)[0]}
                        <span className="text-accent-box">{service.processSection.titleHighlight}</span>
                        {service.processSection.title.split(service.processSection.titleHighlight)[1] || ''}
                      </>
                    ) : (service.processSection?.title || service.title)}
                  </h2>
                  <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                    {service.description}
                  </p>
                  <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                    {service.overview}
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__image">
                  <img src="/overview-icon.png" alt={`${service.title} overview`} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Process — image left, text right */}
      <section className="section section--dark dark-split">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__image">
                  <img src="/overview-icon-left.png" alt={`${service.title} process`} />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__text">
                  <p className="section-header__label">
                    {service.processSection?.label || `${service.title} Process`}
                  </p>
                  <h2 className="use-cases__title text-start">
                    {service.processSection?.titleHighlight ? (
                      <>
                        {service.processSection.title.split(service.processSection.titleHighlight)[0]}
                        <span className="text-accent-box">{service.processSection.titleHighlight}</span>
                        {service.processSection.title.split(service.processSection.titleHighlight)[1] || ''}
                      </>
                    ) : (service.processSection?.title || service.title)}
                  </h2>
                  <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                    {service.processSection?.description || service.description}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3c. Checklist Cards */}
      {service.processSection?.checklist && (
        <section className="section section--dark" style={{ paddingTop: '2rem' }}>
          <div className="container">
            <AnimatedSection animation="stagger-children" className="row g-4 justify-content-center">
              {[0, 1].map((colIdx) => (
                <div className="col-lg-6" key={colIdx}>
                  <div className="checklist-card">
                    {service.processSection.checklist
                      .filter((_, i) => (colIdx === 0 ? i < Math.ceil(service.processSection.checklist.length / 2) : i >= Math.ceil(service.processSection.checklist.length / 2)))
                      .map((item) => (
                        <div className="checklist-card__item" key={item}>
                          <i className="bi bi-check-circle-fill"></i>
                          <span>{item}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 3d. Experience — text left, image right */}
      <section className="section section--dark dark-split">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <p className="section-header__label">
                    {service.experienceSection?.label || `${service.title} Experience`}
                  </p>
                  <h2 className="use-cases__title text-start">
                    {service.experienceSection?.titleHighlight ? (
                      <>
                        {service.experienceSection.title.split(service.experienceSection.titleHighlight)[0]}
                        <span className="text-accent-box">{service.experienceSection.titleHighlight}</span>
                        {service.experienceSection.title.split(service.experienceSection.titleHighlight)[1] || ''}
                      </>
                    ) : (service.experienceSection?.title || service.title)}
                  </h2>
                  <p className="text-white-50 mb-4" style={{ lineHeight: 1.8 }}>
                    {service.experienceSection?.description || service.overview}
                  </p>
                  {service.experienceSection?.description2 && (
                    <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                      {service.experienceSection.description2}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__image">
                  <img src="/overview-icon-right.png" alt={`${service.title} experience`} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>


      {/* 6. Certifications */}
      <section className="section section--light">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-left">
                <p className="section-header__label">Cybersecurity Certifications</p>
                <h2 className="certs__title">
                  Your <span className="text-accent-box">Elite</span>, Highly-trained Team
                </h2>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  More than 50% of our workforce consists of tenured cybersecurity engineers, architects and consultants.
                  We are also highly certified across industry standards as well as hundreds of cybersecurity solutions.
                </p>
                <Link to="/company" className="btn btn-accent btn-cta mt-2">
                  Why CyberPoint? <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-7">
              <AnimatedSection animation="fade-in-right">
                <div className="certs-grid">
                  <h5 className="certs-grid__heading">Highly Trained, Highly Certified</h5>
                  <p className="certs-grid__subheading">Examples Include:</p>
                  <div className="certs-grid__group">
                    <div className="certs-grid__badges">
                      {['CYSA+', 'CISSP', 'OSCP', 'OSCE'].map((cert) => (
                        <div className="cert-badge" key={cert}>
                          <span className="cert-badge__label">{cert}</span>
                        </div>
                      ))}
                    </div>
                    <p className="certs-grid__category">SANS & ISC2 / Offensive Security</p>
                  </div>
                  <div className="certs-grid__group">
                    <div className="certs-grid__badges">
                      {['GSE', 'GPEN', 'GWAPT'].map((cert) => (
                        <div className="cert-badge" key={cert}>
                          <span className="cert-badge__label">{cert}</span>
                        </div>
                      ))}
                    </div>
                    <p className="certs-grid__category">Global Information Assurance</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonial */}
      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="scale-in">
            <div
              className="p-5 rounded-4 text-center mx-auto"
              style={{ maxWidth: 700, borderLeft: '4px solid #4b4fff' }}
            >
              <i
                className="bi bi-quote"
                style={{ fontSize: '3rem', color: '#4b4fff', lineHeight: 1 }}
              ></i>
              <p className="fs-5 fst-italic mb-3" style={{ lineHeight: 1.7 }}>
                &ldquo;{service.testimonial.quote}&rdquo;
              </p>
              <p className="fw-bold mb-0">{service.testimonial.author}</p>
              <small className="text-muted">{service.testimonial.company}</small>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. Contact Form CTA */}
      <section className="section section--dark text-center">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <h2
              className="text-white fw-bold mb-3"
              style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Ready to Strengthen Your {service.title}?
            </h2>
            <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 550 }}>
              Talk to one of our {service.title.toLowerCase()} experts to discuss your challenges and learn how we can help.
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
              Talk to an Expert <i className="bi bi-arrow-right"></i>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      </>
  );
}
