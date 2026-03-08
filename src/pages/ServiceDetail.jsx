import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import BeInformed from '../components/sections/BeInformed';
import services from '../data/services';


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

      {/* 7. Outcomes */}
      <section className="section section--dark">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="outcomes-header py-5">
              <p className="section-header__label">
                {service.outcomesSection?.label || `${service.title} Outcomes`}
              </p>
              <h2 className="use-cases__title text-start">
                {service.outcomesSection?.titleHighlight ? (
                  <>
                    {service.outcomesSection.title.split(service.outcomesSection.titleHighlight)[0]}
                    <span className="text-accent-box">{service.outcomesSection.titleHighlight}</span>
                    {service.outcomesSection.title.split(service.outcomesSection.titleHighlight)[1] || ''}
                  </>
                ) : (service.outcomesSection?.title || 'Expected Outcomes')}
              </h2>
              <p className="text-white-50" style={{ lineHeight: 1.7 }}>
                {service.outcomesSection?.subtitle || ''}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {service.outcomes.map((o) => (
              <div className="col-lg-6" key={o.title}>
                <div className="outcome-card">
                  <div className="outcome-card__icon">
                    <i className={`bi ${o.icon}`}></i>
                  </div>
                  <div className="outcome-card__content">
                    <h5 className="outcome-card__title">{o.title}</h5>
                    <p className="outcome-card__desc">{o.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 8. Trusted Advisor — Testimonial + Contact Form */}
      <section className="section section--indigo-light">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* Left — Title + Testimonial */}
            <div className="col-lg-7">
              <AnimatedSection animation="fade-in-left">
                <h2 className="trusted-advisor__title">
                  Your <span className="text-accent-box">Trusted Advisor</span>
                </h2>
                <p className="text-white-50 mb-5">
                  Our team works side-by-side with you as your cybersecurity partner.
                </p>

                <div className="testimonial-card">
                  <div className="testimonial-card__quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <div className="testimonial-card__body">
                    <p className="testimonial-card__text">
                      &ldquo;{service.testimonial.quote}&rdquo;
                    </p>
                    <div className="testimonial-card__author">
                      <div>
                        <p className="fw-bold mb-0">{service.testimonial.author}</p>
                        <small className="text-muted">{service.testimonial.company}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Contact Form */}
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-right">
                <div className="contact-form-card">
                  <div className="contact-form-card__header">
                    <i className="bi bi-chat-dots-fill"></i>
                    <span>GET IN TOUCH</span>
                  </div>
                  <div className="contact-form-card__body">
                    <h4 className="fw-bold mb-4">Contact Us</h4>
                    <form>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">First Name</label>
                        <input type="text" className="form-control" placeholder="First Name*" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name*" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Company Name</label>
                        <input type="text" className="form-control" placeholder="Company Name*" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Business Email</label>
                        <input type="email" className="form-control" placeholder="Business Email*" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">Phone Number</label>
                        <input type="tel" className="form-control" placeholder="*Phone Number" />
                      </div>
                      <div className="mb-4">
                        <label className="form-label small fw-bold">State</label>
                        <select className="form-select">
                          <option>Select...</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-accent btn-cta w-100">
                        CONTACT US
                      </button>
                    </form>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Additional Resources — Carousel */}
      <AdditionalResources />

      {/* 10. Be Informed CTA */}
      <BeInformed />

      </>
  );
}

/* ---- Additional Resources Carousel Component ---- */
function AdditionalResources() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const resources = [
    { type: 'VIDEO', color: '#e74c3c', icon: 'bi-play-circle-fill', action: 'Watch Now', title: 'On-Demand Webinar: Securing Your Applications in a Cloud-Native World' },
    { type: 'CUSTOMER SUCCESS', color: '#00ccff', icon: 'bi-person-check-fill', action: 'Download', title: 'How a Fortune 500 Company Transformed Their Security Posture' },
    { type: 'EBOOK', color: '#4b4fff', icon: 'bi-book-fill', action: 'Download', title: 'The Definitive Guide to Building a Mature Cybersecurity Program' },
    { type: 'WHITEPAPER', color: '#8b5cf6', icon: 'bi-file-earmark-text-fill', action: 'Download', title: 'Zero Trust Architecture: Implementation Strategies for Modern Enterprises' },
    { type: 'VIDEO', color: '#e74c3c', icon: 'bi-play-circle-fill', action: 'Watch Now', title: 'Panel Discussion: Threat Intelligence and Incident Response Best Practices' },
  ];

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: 'smooth' });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section className="section section--indigo additional-resources">
      <div className="container">
        <AnimatedSection animation="animate-on-scroll">
          <div className="additional-resources__header">
            <h2 className="additional-resources__title">
              Additional <span className="text-underline-accent">Resources</span>
            </h2>
            <Link to="/resources" className="additional-resources__view-all">
              View All <i className="bi bi-chevron-right"></i>
            </Link>
          </div>
        </AnimatedSection>

        <div className="additional-resources__carousel-wrap">
          {canScrollLeft && (
            <button className="carousel-arrow carousel-arrow--left" onClick={() => scroll(-1)} aria-label="Previous">
              <i className="bi bi-chevron-left"></i>
            </button>
          )}
          <div className="additional-resources__track" ref={scrollRef} onScroll={updateScrollState}>
            {resources.map((r, i) => (
              <div className="resource-slide" key={i}>
                <div className="resource-slide__badge" style={{ background: r.color }}>
                  {r.type}
                </div>
                <div className="resource-slide__icon">
                  <i className={`bi ${r.icon}`}></i>
                </div>
                <p className="resource-slide__action">{r.action} <i className="bi bi-chevron-right"></i></p>
                <p className="resource-slide__title">{r.title}</p>
              </div>
            ))}
          </div>
          {canScrollRight && (
            <button className="carousel-arrow carousel-arrow--right" onClick={() => scroll(1)} aria-label="Next">
              <i className="bi bi-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
