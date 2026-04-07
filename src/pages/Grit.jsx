import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import { gritResources, gritInsights, gritLeader, gritCertifications } from '../data/grit';
import BeInformed from '../components/sections/BeInformed';

export default function Grit() {
  const [activeTab, setActiveTab] = useState('Threat Research');
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gritResources.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (i) => {
    setActiveSlide(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gritResources.length);
    }, 5000);
  };

  const filteredInsights = activeTab === 'All'
    ? gritInsights
    : gritInsights.filter((item) =>
        activeTab === 'Threat Research'
          ? item.tag === 'GRIT Blog'
          : item.tag === 'In the News'
      );

  const visibleInsights = filteredInsights.slice(0, visibleCount);

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        title="GuidePoint Research and Intelligence Team (GRIT)"
        subtitle="GRIT brings together GuidePoint Security's expert threat researchers and incident response professionals to build a coalition with one goal: to shield our customers from cyber-attacks by arming them with the information and strategies they need."
        ctaText="Threat Intelligence Services"
        ctaLink="/incident-response/incident-response-threat-intelligence"
        secondaryCta="Talk to a GRIT Expert"
        secondaryCtaLink="/contact"
        variant="page"
        showNetwork={false}
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Incident_Response_and_Threat_Intelligence.png"
        className="grit-hero"
      />

      {/* ===== GRIT RESOURCES CAROUSEL ===== */}
      <section className="section section--dark grit-resources">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="grit-resources__heading">
              GRIT Resources
              <span className="grit-resources__underline"></span>
            </h2>
          </AnimatedSection>

          <div className="grit-resources__carousel">
            <div className="grit-resources__slide" key={activeSlide}>
              <div className="grit-resources__slide-content">
                <h3 className="grit-resources__slide-title">
                  {gritResources[activeSlide].title}
                </h3>
                <p className="grit-resources__slide-desc">
                  {gritResources[activeSlide].description}
                </p>
                <Link to={gritResources[activeSlide].actionLink} className="btn btn-accent">
                  {gritResources[activeSlide].action}
                </Link>
              </div>
              <div
                className="grit-resources__slide-image"
                style={{ backgroundImage: `url(${gritResources[activeSlide].image})` }}
              />
            </div>

            <div className="grit-resources__dots">
              {gritResources.map((_, i) => (
                <button
                  key={i}
                  className={`grit-resources__dot${i === activeSlide ? ' grit-resources__dot--active' : ''}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRIT INSIGHTS ===== */}
      <section className="section section--dark grit-insights">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="grit-insights__heading">
              GRIT INSIGHTS
              <span className="grit-resources__underline"></span>
            </h2>
          </AnimatedSection>

          <div className="grit-insights__tabs">
            <button
              className={`grit-insights__tab${activeTab === 'Threat Research' ? ' grit-insights__tab--active' : ''}`}
              onClick={() => { setActiveTab('Threat Research'); setVisibleCount(4); }}
            >
              Threat Research
            </button>
            <button
              className={`grit-insights__tab${activeTab === 'In the News' ? ' grit-insights__tab--active' : ''}`}
              onClick={() => { setActiveTab('In the News'); setVisibleCount(4); }}
            >
              In the News
            </button>
          </div>

          <div className="row g-4">
            {visibleInsights.map((post, i) => (
              <div className="col-lg-4 col-md-6" key={`${activeTab}-${i}`}>
              <AnimatedSection animation="animate-on-scroll">
                <Link to={post.link} className="grit-card">
                  <div
                    className="grit-card__image"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="grit-card__content">
                    <span className="grit-card__tag">{post.tag}</span>
                    <h3 className="grit-card__title">{post.title}</h3>
                    <p className="grit-card__author">Posted by: {post.author}</p>
                    <p className="grit-card__date">Published {post.date}</p>
                    <div className="grit-card__footer">
                      <span className="grit-card__read-more">Read More</span>
                      <span className="grit-card__read-time">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
              </div>
            ))}
          </div>

          {visibleCount < filteredInsights.length && (
            <div className="text-center mt-5">
              <button
                className="btn btn-accent"
                onClick={() => setVisibleCount((prev) => prev + 4)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ===== TEAM LEADERSHIP ===== */}
      <section className="grit-leadership">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="grit-leadership__heading">
              Team Leadership
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="animate-on-scroll">
            <div className="grit-leadership__profile">
              <div className="grit-leadership__avatar">
                <img src={gritLeader.image} alt={gritLeader.name} />
              </div>
              <div className="grit-leadership__info">
                <p className="grit-leadership__name">
                  <strong>{gritLeader.name}, {gritLeader.title} |</strong>
                  {' '}
                  <a href={gritLeader.twitter} target="_blank" rel="noopener noreferrer" className="grit-leadership__social">Twitter</a>
                  {' | '}
                  <a href={gritLeader.linkedin} target="_blank" rel="noopener noreferrer" className="grit-leadership__social">LinkedIn</a>
                </p>
                <p className="grit-leadership__bio">{gritLeader.bio}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="grit-certifications">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <p className="grit-certifications__label">CERTIFICATIONS</p>
            <h2 className="grit-certifications__heading">
              Your <span className="grit-certifications__highlight">Elite</span>, Highly-trained Team
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children">
            <div className="grit-certifications__grid">
              {gritCertifications.map((cert) => (
                <div className="grit-certifications__item" key={cert.name}>
                  <img src={cert.image} alt={cert.alt || cert.name} />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BE INFORMED ===== */}
      <BeInformed />
    </>
  );
}
