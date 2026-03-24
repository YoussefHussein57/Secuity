import { useParams, Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import governmentPages from '../data/government';

export default function GovernmentDetail() {
  const { slug } = useParams();
  const page = governmentPages[slug];

  if (!page) {
    return (
      <div className="section section--dark text-center py-5">
        <h2 className="text-white">Page not found</h2>
        <Link to="/government" className="btn btn-accent mt-3">
          Back to Government Solutions
        </Link>
      </div>
    );
  }

  return (
    <div className="govt-detail">
      {/* 1. Hero */}
      <Hero
        title={page.title}
        subtitle={page.subtitle}
        highlightSubtitleWord={page.highlightSubtitle}
        ctaText=""
        variant="page"
      />

      {/* 2. Introduction Split — heading + bullets + image */}
      <section className="section govt-detail__intro">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="govt-detail__heading">
                  {page.intro.headingHighlight ? (
                    <>
                      {page.intro.heading.split(page.intro.headingHighlight)[0]}
                      <span className="text-accent-box">{page.intro.headingHighlight}</span>
                      {page.intro.heading.split(page.intro.headingHighlight)[1] || ''}
                    </>
                  ) : (
                    page.intro.heading
                  )}
                </h2>
                {page.intro.paragraphs.map((p, i) => (
                  <p key={i} className="govt-detail__text">{p}</p>
                ))}
                {page.intro.bulletPoints && (
                  <ul className="govt-detail__checklist">
                    {page.intro.bulletPoints.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {page.intro.closingText && (
                  <p className="govt-detail__text govt-detail__text--closing">
                    {page.intro.closingText}
                  </p>
                )}
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={page.intro.image}
                  alt={page.intro.imageAlt}
                  className="govt-detail__intro-image"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Info Sections — light blue bg, alternating text+image columns */}
      {page.infoSections && page.infoSections.length > 0 && (
        <section className="section govt-detail__info">
          <div className="container">
            {page.infoSections.map((info, idx) => (
              <AnimatedSection key={idx} animation="animate-on-scroll">
                {info.centered ? (
                  /* Centered layout — heading with gradient underline + centered text */
                  <div className={`govt-detail__info-centered  ${idx > 0 ? 'mt-5 pt-4' : ''}`}>
                    <h3 className="govt-detail__heading govt-detail__heading--sm govt-detail__heading--underline">
                      {info.headingHighlight ? (
                        <>
                          {info.heading.split(info.headingHighlight)[0]}
                          <span className="text-accent-box">{info.headingHighlight}</span>
                          {info.heading.split(info.headingHighlight)[1] || ''}
                        </>
                      ) : info.heading}
                    </h3>
                    {info.paragraphs &&
                      info.paragraphs.map((p, i) => (
                        <p key={i} className="govt-detail__text">{p}</p>
                      ))}
                  </div>
                ) : (
                  /* Two-column layout — text + image */
                  <div className={`row g-5 align-items-center ${idx > 0 ? 'mt-5 pt-4' : ''}`}>
                    <div className={`col-lg-6 ${idx % 2 === 1 ? 'order-lg-2' : ''}`}>
                      <h3 className="govt-detail__heading govt-detail__heading--sm">
                        {info.headingHighlight ? (
                          <>
                            {info.heading.split(info.headingHighlight)[0]}
                            <span className="text-accent-box">{info.headingHighlight}</span>
                            {info.heading.split(info.headingHighlight)[1] || ''}
                          </>
                        ) : info.heading}
                      </h3>
                      {info.paragraphs &&
                        info.paragraphs.map((p, i) => (
                          <p key={i} className="govt-detail__text">{p}</p>
                        ))}
                      {info.details && (
                        <ul className="govt-detail__details-list">
                          {info.details.map((d, i) => (
                            <li key={i}>
                              <i className="bi bi-check-circle"></i>
                              <span><strong>{d.label}:</strong> {d.value}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {info.subItems && (
                        <div className="govt-detail__sub-items">
                          <div className="govt-detail__sub-items-label">
                            <i className="bi bi-check-circle"></i>
                            <strong>{info.subItems.label}</strong>
                          </div>
                          <ul>
                            {info.subItems.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {info.ctaText && (
                        <Link
                          to={info.ctaLink || '/contact'}
                          className="govt-detail__cta-link"
                        >
                          <i className="bi bi-check-circle"></i>
                          {info.ctaText}
                        </Link>
                      )}
                    </div>
                    {info.image && (
                      <div className={`col-lg-6 text-center ${idx % 2 === 1 ? 'order-lg-1' : ''}`}>
                        <img
                          src={info.image}
                          alt={info.imageAlt}
                          className="govt-detail__info-image"
                        />
                      </div>
                    )}
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}

      {/* 4. Vendor Logos */}
      {page.vendors && (
        <section className="section govt-detail__vendors">
          <div className="container">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center mb-5">
                <h2 className="govt-detail__heading govt-detail__heading--underline">
                  {page.vendors.heading}
                </h2>
                <p className="govt-detail__text mx-auto" style={{ maxWidth: 820 }}>
                  {page.vendors.description}
                </p>
              </div>
              <div className="govt-detail__logo-grid">
                {page.vendors.logos.map((logo, i) => (
                  <div key={i} className="govt-detail__logo-item">
                    <img src={logo.image} alt={logo.name} />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 5. CTA Section */}
      {page.cta && (
        <section className="section govt-detail__cta">
          <div className="container">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center">
                <h2 className="govt-detail__cta-heading govt-detail__heading--underline">
                  {page.cta.headingHighlight ? (
                    <>
                      {page.cta.heading.split(page.cta.headingHighlight)[0]}
                      <span className="text-accent-box">{page.cta.headingHighlight}</span>
                      {page.cta.heading.split(page.cta.headingHighlight)[1] || ''}
                    </>
                  ) : (
                    page.cta.heading
                  )}
                </h2>
                <p className="govt-detail__cta-text">
                  {page.cta.descriptionParts
                    ? page.cta.descriptionParts.map((part, i) => {
                        if (part.highlight && part.link) {
                          return (
                            <Link key={i} to={part.link} className="govt-detail__cta-highlight">
                              {part.text}
                            </Link>
                          );
                        }
                        if (part.bold) {
                          return <strong key={i}>{part.text}</strong>;
                        }
                        return <span key={i}>{part.text}</span>;
                      })
                    : page.cta.description}
                </p>
                <Link to={page.cta.buttonLink} className="btn btn-accent btn-cta">
                  {page.cta.buttonText}
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 6. Be Informed CTA */}
      <BeInformed />
    </div>
  );
}
