import { useState, useRef, useEffect } from 'react';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import gpsecData from '../data/gpsec';

export default function Gpsec() {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  // Auto-advance testimonial carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gpsecData.testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToSlide = (i) => {
    setActiveSlide(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gpsecData.testimonials.length);
    }, 5000);
  };

  const { intro } = gpsecData;

  return (
    <>
      {/* ===== 1. HERO BANNER ===== */}
      <section className="gpsec-hero">
        <img
          src="/images/gpsec/gpsec-logo-white.png"
          alt="GPSEC By GuidePoint Security"
          className="gpsec-hero__logo"
        />
      </section>

      {/* ===== 2. INTRO — Premier Cybersecurity Conference ===== */}
      <section className="gpsec-intro">
        <div className="container">
          {/* Top row: text left, video right */}
          <div className="row gx-5 align-items-center pt-4">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h1 className="gpsec-intro__title text-white">
                  <em>{intro.highlightWord}</em> {intro.title.replace(intro.highlightWord, '').trim()}
                </h1>
                <p className="gpsec-intro__desc text-white">
                  {intro.description1}
                </p>
                <p className="gpsec-intro__desc gpsec-intro__desc--last text-white">
                  {intro.description2}
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <AnimatedSection animation="fade-in-right">
                <div className="gpsec-intro__video-wrapper">
                  <a
                    href="https://fast.wistia.net/embed/iframe/obtfpekifr?autoPlay=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gpsec-intro__video-link"
                  >
                    <img
                      src="/images/gpsec/gpsec-video-thumb.webp"
                      alt="GPSEC Conference Video"
                      className="gpsec-intro__video-thumb"
                    />
                    <span className="gpsec-intro__play-btn">
                      <i className="bi bi-play-fill"></i>
                    </span>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Agenda topics — centered below */}
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center py-4">
              <h4 className="gpsec-intro__agenda-heading">
                <strong>{intro.agendaHeading}</strong>
              </h4>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-on-scroll">
            <div className="row pt-4">
              <div className="col-lg-6">
                <ul className="gpsec-intro__topics text-white">
                  {intro.topicsCol1.map((t) => (
                    <li key={t}>
                      <i className="bi bi-check-circle"></i>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="gpsec-intro__topics text-white">
                  {intro.topicsCol2.map((t) => (
                    <li key={t}>
                      <i className="bi bi-check-circle"></i>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 3. EVENTS GRID ===== */}
      <section className="gpsec-events">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h4 className="gpsec-gradient-heading">
                <strong>Find GPSEC&reg; Cybersecurity Events Near You!</strong>
              </h4>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children">
            <div className="gpsec-events__grid">
              {gpsecData.events.map((event) => (
                <div className="gpsec-events__card" key={event.city}>
                  <img
                    src={event.image}
                    alt={event.city}
                    className="gpsec-events__card-image"
                  />
                  <h2 className="gpsec-events__city">{event.city}</h2>
                  <p className="gpsec-events__date">{event.date}</p>
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    Request to Register
                  </a>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== 4. KEYNOTE SPEAKERS ===== */}
      <section className="gpsec-speakers">
        <div className="gpsec-speakers__inner">
          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsec-speakers__heading-wrap text-center">
              <h4 className="gpsec-gradient-heading">
                <strong>Examples of Keynote Speakers</strong>
              </h4>
            </div>
          </AnimatedSection>
          {gpsecData.keynoteSpeakers.map((speaker) => (
            <AnimatedSection animation="animate-on-scroll" key={speaker.name}>
              <div className="d-flex gpsec-speakers__row">
                <div className="gpsec-speakers__img-col">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="gpsec-speakers__avatar"
                  />
                </div>
                <div className="gpsec-speakers__text-col">
                  <p className="gpsec-speakers__name text-white">
                    <strong>{speaker.name}</strong>
                    {'  |  '}
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gpsec-speakers__linkedin"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p className="gpsec-speakers__bio text-white">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== 5. FEATURED SPEAKERS ===== */}
      <section className="gpsec-featured">
        <div className="gpsec-featured__inner">
          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsec-featured__heading-wrap text-center">
              <h4 className="gpsec-gradient-heading gpsec-gradient-heading--dark">
                <strong>Featured Speakers</strong>
              </h4>
            </div>
          </AnimatedSection>
          {gpsecData.featuredSpeakers.map((speaker) => (
            <AnimatedSection animation="animate-on-scroll" key={speaker.name}>
              <div className="d-flex gpsec-featured__row">
                <div className="gpsec-featured__img-col">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="gpsec-featured__avatar"
                  />
                </div>
                <div className="gpsec-featured__text-col">
                  <p className="gpsec-featured__name">
                    <strong>{speaker.name}</strong>
                    {'  |  '}
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gpsec-featured__linkedin"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p className="gpsec-featured__bio">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== 6. WHAT WE'LL COVER ===== */}
      <section className="gpsec-topics">
        <div className="gpsec-topics__inner text-center">
          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsec-topics__heading-wrap">
              <h4 className="gpsec-gradient-heading">
                <strong>What We&rsquo;ll Cover</strong>
              </h4>
            </div>
          </AnimatedSection>
          {gpsecData.topics.map((topic) => (
            <AnimatedSection animation="animate-on-scroll" key={topic.heading}>
              <h3 className="gpsec-topics__title">{topic.heading}</h3>
              <p className="gpsec-topics__body">{topic.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== 7. TESTIMONIALS CAROUSEL ===== */}
      <section className="gpsec-testimonials">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsec-testimonials__heading-wrap text-center">
              <h4 className="gpsec-gradient-heading">
                <strong>What Attendees Say about GPSEC&reg;</strong>
              </h4>
            </div>
          </AnimatedSection>

          <div className="gpsec-carousel">
            <button
              className="gpsec-carousel__arrow gpsec-carousel__arrow--prev"
              onClick={() => goToSlide((activeSlide - 1 + gpsecData.testimonials.length) % gpsecData.testimonials.length)}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="gpsec-carousel__slide" key={activeSlide}>
              <div
                className="gpsec-carousel__image"
                style={{ backgroundImage: `url(${gpsecData.testimonials[activeSlide].image})` }}
              />
              <div className="gpsec-carousel__content">
                <p className="gpsec-carousel__quote">
                  {gpsecData.testimonials[activeSlide].quote}
                </p>
                <p className="gpsec-carousel__author">
                  {gpsecData.testimonials[activeSlide].author}
                  <br />
                  {gpsecData.testimonials[activeSlide].role}
                </p>
                <span className="gpsec-carousel__count">
                  {activeSlide + 1}/{gpsecData.testimonials.length}
                </span>
              </div>
            </div>

            <button
              className="gpsec-carousel__arrow gpsec-carousel__arrow--next"
              onClick={() => goToSlide((activeSlide + 1) % gpsecData.testimonials.length)}
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* ===== 8. EVENT PHOTOS ===== */}
      <section className="gpsec-photos">
        <div className="container">
          <div className="gpsec-photos__grid">
            {gpsecData.eventPhotos.map((photo, i) => (
              <img key={i} src={photo} alt={`GPSEC Event ${i + 1}`} className="gpsec-photos__item" />
            ))}
          </div>
          <img
            src={gpsecData.stadiumBanner}
            alt="GPSEC at Gillette Stadium"
            className="gpsec-photos__banner"
          />
        </div>
      </section>

      {/* ===== 8. BE INFORMED CTA ===== */}
      <BeInformed />
    </>
  );
}
