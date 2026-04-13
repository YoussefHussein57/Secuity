import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';

export default function DatasheetPage({ data }) {
  return (
    <>
      <Hero
        label={data.heroLabel}
        title={data.heroTitle}
        ctaText=""
        variant="service"
        showNetwork={false}
        bgImage={data.heroBgImage}
        className="gpsf-hero gpsf-hero--compact"
      />

      <section className="gpsf-content">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsf-content__body">
              {data.heading && (
                <h2 className="gpsf-content__heading">{data.heading}</h2>
              )}

              {data.paragraphs.map((para, i) => (
                <p key={i} className="gpsf-content__text">{para}</p>
              ))}

              {data.benefitsLabel && (
                <h4 className="gpsf-content__subheading">{data.benefitsLabel}</h4>
              )}

              {data.benefits && data.benefits.length > 0 && (
                <ul className="gpsf-content__benefits">
                  {data.benefits.map((item, i) => (
                    <li className="gpsf-content__benefit-item" key={i}>
                      <i className="bi bi-check-circle gpsf-content__check-icon"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={data.datasheetLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Download Data Sheet
              </a>

              <div className="gpsf-content__social">
                <a href="https://www.linkedin.com/company/guidepointsec" target="_blank" rel="noopener noreferrer" className="gpsf-content__social-btn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com/GuidePointSec" target="_blank" rel="noopener noreferrer" className="gpsf-content__social-btn">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com/GuidePointSec" target="_blank" rel="noopener noreferrer" className="gpsf-content__social-btn">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
