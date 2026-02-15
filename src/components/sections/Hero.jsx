import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NetworkBackground from './NetworkBackground';

export default function Hero({
  title,
  highlightWord,
  subtitle,
  ctaText = 'Talk to an Expert',
  ctaLink = '/contact',
  secondaryCta,
  secondaryCtaLink,
  bgImage = '/hero-bg.svg',
  variant = 'default',
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlightWord}</span>
        {parts[1] || ''}
      </>
    );
  };

  return (
    <section
      className={`hero text-white ${variant === 'page' ? 'hero--page' : ''}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <NetworkBackground />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1
              className={`hero__title mb-4 ${loaded ? '' : 'opacity-0'}`}
              style={{
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: loaded ? 1 : 0,
              }}
            >
              {renderTitle()}
            </h1>
            <p
              className={`hero__subtitle mb-5`}
              style={{
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: loaded ? 0.85 : 0,
              }}
            >
              {subtitle}
            </p>
            <div
              className="d-flex flex-wrap gap-3"
              style={{
                transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: loaded ? 1 : 0,
              }}
            >
              {ctaText && (
                <Link
                  to={ctaLink}
                  className="btn btn-accent btn-lg btn-cta px-4"
                >
                  {ctaText}
                  <i className="bi bi-arrow-right"></i>
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCtaLink}
                  className="btn btn-outline-light btn-lg btn-cta px-4"
                >
                  {secondaryCta}
                  <i className="bi bi-play-circle"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
