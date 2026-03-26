import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NetworkBackground from './NetworkBackground';

export default function Hero({
  title,
  highlightWord,
  highlightStyle = 'box',
  subtitle,
  highlightSubtitleWord,
  label,
  labelAfterTitle = false,
  ctaText = 'Talk to an Expert',
  ctaLink = '/contact',
  secondaryCta,
  secondaryCtaLink,
  bgImage = '/hero-bg.svg',
  variant = 'default',
  showNetwork = true,
  iconImage,
  className: extraClass = '',
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderTitle = () => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    const className = highlightStyle === 'gradient' ? 'text-accent-gradient' : 'text-accent-box';
    return (
      <>
        {parts[0]}
        <span className={className}>{highlightWord}</span>
        {parts[1] || ''}
      </>
    );
  };

  const isPage = variant === 'page';
  const isService = variant === 'service';
  const variantClass = isPage ? 'hero--page' : isService ? 'hero--service' : '';

  return (
    <section
      className={`hero text-white ${variantClass} ${extraClass}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {showNetwork && <NetworkBackground />}
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={`row ${isPage ? 'justify-content-center' : 'align-items-center'}`}>
          <div className={isPage ? 'col-lg-10' : 'col-lg-7'}>
            {iconImage && (
              <div
                className={isPage ? 'text-center mb-4' : 'mb-4'}
                style={{
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: loaded ? 1 : 0,
                }}
              >
                <img src={iconImage} alt="" style={{ height: 80 }} />
              </div>
            )}
            {label && !labelAfterTitle && (
              <p
                className="hero__label"
                style={{
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: loaded ? 1 : 0,
                }}
              >
                {label}
              </p>
            )}
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
            {label && labelAfterTitle && (
              <p
                className="hero__label"
                style={{
                  transition: 'opacity 0.8s ease, transform 0.8s ease',
                  transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: loaded ? 1 : 0,
                }}
              >
                {label}
              </p>
            )}
            {subtitle && (
              <p
                className="hero__subtitle mb-5 text-white"
                style={{
                  transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
                  transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                  opacity: loaded ? 1 : 0,
                }}
              >
                {highlightSubtitleWord ? (
                  <>
                    {subtitle.split(highlightSubtitleWord)[0]}
                    <span className="text-accent-box">{highlightSubtitleWord}</span>
                    {subtitle.split(highlightSubtitleWord)[1] || ''}
                  </>
                ) : subtitle}
              </p>
            )}
            <div
              className={`d-flex flex-wrap gap-3 ${isPage ? 'justify-content-center' : ''}`}
              style={{
                transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
                transform: loaded ? 'translateY(0)' : 'translateY(20px)',
                opacity: loaded ? 1 : 0,
              }}
            >
              {ctaText && (
                <Link
                  to={ctaLink}
                  className="btn btn-accent"
                >
                  {ctaText}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCtaLink}
                  className="btn btn-outline-light"
                >
                  {secondaryCta}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
