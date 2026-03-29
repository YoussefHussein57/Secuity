import { useEffect, useState } from 'react';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import brickhouse from '../data/brickhouse';

const BH_IMAGE =
  'https://www.guidepointsecurity.com/wp-content/uploads/2024/06/BrickHouse_Microsite_Header.jpg';

export default function BrickHouse() {
  const { hero, upcoming, onDemand, host, exploreAllUrl } = brickhouse;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bh-hero">
        <div className="bh-hero__img-col">
          <img src={BH_IMAGE} alt="The Brick House" className="bh-hero__img" />
          <div className="bh-hero__img-fade" />
        </div>

        <div className="container bh-hero__container" >
          <div className="row align-items-center" style={{ minHeight: 'inherit',flexGrow:"1" }}>
            <div className="col-lg-7">
              <h1
                className="bh-hero__title"
                style={{
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                  opacity: loaded ? 1 : 0,
                }}
              >
                <span className="text-accent-box">The Brick House</span>
              </h1>
              <p
                className="bh-hero__subtitle"
                style={{
                  transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
                  transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: loaded ? 1 : 0,
                }}
              >
                {hero.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="bh-hero__tabs">
          <div className="container bh-hero__container" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <nav className="bh-hero__tabs-nav">
              <i className="bi bi-filter-left bh-hero__tabs-icon"></i>
              <a href="#upcoming" className="bh-hero__tab bh-hero__tab--active">
                Upcoming Events
              </a>
              <a href="#on-demand" className="bh-hero__tab">
                Past Events
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* ===== UPCOMING ROUNDTABLES ===== */}
      <section id="upcoming" className="bh-upcoming section--indigo">
        <div className="container">
          <AnimatedSection animation="fade-in-left">

            {/* Section heading with gradient underline */}
            <h2 className="text-white fw-bold mb-4 text-center" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}>
              <span className="gradient-underline-text">{upcoming.sectionHeading}</span>
            </h2>

            {/* Content + image — centered as a group */}
            <div className="row align-items-center justify-content-center g-5 mt-2">
              <div className="col-lg-auto">
                <div style={{ width: '510px', maxWidth: '100%' }}>
                  <span className="bh-upcoming__date">{upcoming.date}</span>
                  <h3 className="text-white fw-bold mb-3" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', lineHeight: 1.3 }}>
                    {upcoming.title}
                  </h3>
                  <p className="mb-4" style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.7 }}>
                    {upcoming.description}
                  </p>
                  <a
                    href={upcoming.ctaUrl}
                    className="btn btn-accent btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {upcoming.ctaText}
                  </a>
                </div>
              </div>
              <div className="col-lg-auto text-center">
                <img
                  src={upcoming.image}
                  alt={upcoming.title}
                  className="bh-upcoming__img"
                  style={{ width: '445px', height: '277px', maxWidth: '100%' }}
                />
              </div>
            </div>

            {/* Coming Soon schedule — centered */}
            <div className="bh-coming-soon text-center mt-5 pt-4">
              <p className="bh-coming-soon__label">Coming Soon</p>
              <ul className="bh-coming-soon__list">
                {upcoming.schedule.map((ep, i) => (
                  <li key={i}>
                    <strong>{ep.date}</strong> | {ep.title}
                  </li>
                ))}
              </ul>
              <p className="bh-upcoming__suggest mt-3">
                Have an idea for a topic you would like The Brick House to cover?{' '}
                <a href={`mailto:${upcoming.suggestTopicEmail}`}>Let us know here.</a>
              </p>
            </div>

          </AnimatedSection>
        </div>
      </section>

      {/* ===== ON-DEMAND EPISODES ===== */}
      <section id="on-demand" className="bh-on-demand">
        <div className="container">
          <AnimatedSection animation="fade-in-left">
            <h2 className="text-primary fw-bold text-center mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}>
              <span className="gradient-underline-text">The Brick House | On-Demand</span>
            </h2>
          </AnimatedSection>

          {/* 3-column card grid — reuses Bootstrap .card */}
          <AnimatedSection animation="stagger-children">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
              {onDemand.map((ep, i) => (
                <div key={i} className="col">
                  <div className="card bh-episode-card h-100">
                    <div className="bh-episode-card__img-wrap">
                      <img
                        src={ep.image}
                        alt={ep.title}
                        className="bh-episode-card__img"
                      />
                    </div>
                    <div className="card-body d-flex flex-column text-center">
                      <h5 className="card-title bh-episode-card__title">{ep.title}</h5>
                      <p className="card-text bh-episode-card__desc flex-grow-1">{ep.description}</p>
                      <div className="mt-3">
                        <a
                          href={ep.watchUrl}
                          className="btn btn-accent"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="text-center mt-5">
            <p style={{ fontSize: '1rem', color: '#333' }}>
              <a href={exploreAllUrl} className="bh-explore-link" style={{color:'#33f'}} target="_blank" rel="noopener noreferrer">
                Click here
              </a>
              {' '}to explore all of The Brick House On-Demand episodes!
            </p>
          </div>
        </div>
      </section>

      {/* ===== MEET THE HOST ===== */}
      <section className="bh-host section--indigo">
        <div className="container">
          <AnimatedSection animation="fade-in-left">
            <h2 className="text-white fw-bold text-center mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)' }}>
              <span className="gradient-underline-text">Meet the Brick House Host</span>
            </h2>

            <div className="row align-items-center g-4 mt-4">
              {/* Photo */}
              <div className="col-lg-3 col-md-4 text-center">
                <img
                  src={host.photo}
                  alt={host.name}
                  className="bh-host__photo"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://placehold.co/200x200/0f0f27/ffffff?text=GB';
                  }}
                />
              </div>

              {/* Bio */}
              <div className="col-lg-9 col-md-8">
                <p className="bh-host__namerow">
                  <strong>{host.name}</strong>, {host.role}
                  {' | '}
                  <a
                    href={host.linkedin}
                    className="bh-host__linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="bh-host__bio">{host.bio}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== RESOURCE CENTER CTA ===== */}
      <section className="bh-resource-cta">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-auto">
              <i className="bi bi-shield-check bh-resource-cta__icon"></i>
            </div>
            <div className="col">
              <p className="bh-resource-cta__text mb-0">
                For more educational content on a wide array of cybersecurity topics, challenges and
                recommendations, please visit our{' '}
                <a href="/resources" className="bh-resource-cta__link" style={{color:'#33f'}}>
                  Resource Center
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BE INFORMED ===== */}
      <BeInformed />
    </>
  );
}
