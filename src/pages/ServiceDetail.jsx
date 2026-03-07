import { useParams, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import CountUp from 'react-countup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import FeatureCard from '../components/sections/FeatureCard';
import services from '../data/services';
import BeInformed from '../components/sections/BeInformed';

function AnimatedStat({ number, label, color = 'text-white' }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, '')) || 0;
  const hasDecimal = number.replace(/[^0-9.]/g, '').includes('.');
  const suffix = number.replace(/[0-9.,]/g, '');

  return (
    <div ref={ref}>
      <h2
        className={`fw-bold ${color} mb-1`}
        style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {isVisible ? (
          <CountUp end={numericValue} duration={2.5} separator="," decimals={hasDecimal ? 1 : 0} suffix={suffix} />
        ) : '0'}
      </h2>
      <p className="text-white-50 mb-0">{label}</p>
    </div>
  );
}

const tabs = ['Strategic', 'Tactical', 'Managed'];

export default function ServiceDetail() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('Strategic');
  const service = services[slug];

  if (!service) return <Navigate to="/404" replace />;

  const tabData = {
    Strategic: service.strategic,
    Tactical: service.tactical,
    Managed: service.managed,
  };

  return (
    <>
      {/* 1. Hero */}
      <Hero
        title={service.title}
        subtitle={service.tagline}
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        variant="page"
      />

      {/* 2. Problem Stats */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4 text-center">
            {service.stats.map((s) => (
              <div className="col-md-4" key={s.label}>
                <AnimatedStat number={s.number} label={s.label} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Overview */}
      <section className="section section--light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <p className="section-header__label">Overview</p>
                <h2
                  className="fw-bold mb-3"
                  style={{ fontFamily: "'Exo 2', sans-serif", color: '#0f0f27' }}
                >
                  {service.title}
                </h2>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  {service.description}
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  {service.overview}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Tabs — Strategic | Tactical | Managed */}
      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={35} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="What We Deliver"
              title="Our Approach"
              subtitle="Comprehensive services across strategic, tactical, and managed engagements."
              center
            />
          </AnimatedSection>

          <div className="d-flex justify-content-center gap-2 mb-5">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn btn-sm px-4 ${
                  activeTab === tab
                    ? 'btn-accent'
                    : 'btn-outline-light'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatedSection animation="stagger-children" className="row g-4" key={activeTab}>
            {tabData[activeTab]?.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <FeatureCard
                  icon="bi-check2-circle"
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Outcomes */}
      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              title="Expected Outcomes"
              subtitle="Our structured approach delivers measurable results at every stage."
              center
            />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {service.outcomes.map((o) => (
              <div className="col-md-6 col-lg-3" key={o.title}>
                <div className="text-center p-4">
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'rgba(75, 79, 255, 0.1)',
                      border: '1px solid rgba(75, 79, 255, 0.15)',
                    }}
                  >
                    <i className={`bi ${o.icon}`} style={{ fontSize: '1.75rem', color: '#4b4fff' }}></i>
                  </div>
                  <h6 className="fw-bold">{o.title}</h6>
                  <p className="text-muted small mb-0">{o.description}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Why Us */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <p className="section-header__label">Why GuidePoint?</p>
                <h2 className="text-white fw-bold mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
                  Trusted by 4,200+ Organizations
                </h2>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  More than 50% of our workforce are tenured cybersecurity engineers, architects, and consultants.
                  We serve as your single point of contact for 650+ cybersecurity technologies, delivering custom, best-fit solutions.
                </p>
                <Link to="/company" className="btn btn-accent btn-cta mt-2">
                  Learn About Us <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
              <div className="col-lg-6">
                <AnimatedSection animation="stagger-children" className="row g-3 text-center">
                  {[
                    { number: '50%+', label: 'Tenured Engineers' },
                    { number: '650+', label: 'Security Technologies' },
                    { number: '4,200+', label: 'Enterprise Customers' },
                    { number: '40%', label: 'of Fortune 500' },
                  ].map((s) => (
                    <div className="col-6" key={s.label}>
                      <AnimatedStat number={s.number} label={s.label} />
                    </div>
                  ))}
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
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
