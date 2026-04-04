import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/sections/AnimatedSection';
import Certifications from '../components/sections/Certifications';
import TrustedAdvisor from '../components/sections/TrustedAdvisor';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';

export default function ServiceCategoryPage({ data }) {
  const [activeTab, setActiveTab] = useState('strategic');
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="cat-hero"
        style={data.heroBgImage ? { backgroundImage: `url(${data.heroBgImage})` } : undefined}
      >
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="cat-hero__inner">
              {data.iconImage
                ? <img src={data.iconImage} alt="" className="cat-hero__icon-img" />
                : <i className={`bi ${data.icon} cat-hero__icon`}></i>
              }
              <h1 className="cat-hero__title">{data.heroTitle}</h1>
              <p className="cat-hero__subtitle">{data.heroSubtitle}</p>
              <Link to={data.heroCtaLink} className="btn cat-hero__cta">
                {data.heroCta}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section section--dark cat-stats">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="cat-stats__label">{data.statsLabel}</h2>
              <p className="cat-stats__intro">{data.statsIntro}</p>
            </div>
            <div className="row justify-content-center g-4">
              {data.stats.map((stat, i) => (
                <div key={i} className="col-md-4">
                  <div className="cat-stat-card">
                    <img
                      src={stat.circleImage}
                      alt={stat.value}
                      className="cat-stat-card__circle"
                    />
                    <div className="card-gradient card-gradient--centered card-gradient--accent-bottom cat-stat-card__inner">
                      <div className="cat-stat__value">{stat.value}</div>
                      <p className="cat-stat__label">{stat.label}</p>
                      <a
                        href={stat.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cat-stat__source-name"
                      >
                        {stat.sourceName}
                      </a>
                      <p className="cat-stat__source-context">({stat.sourceContext})</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Practice Overview ── */}
      <section className="section cat-practice">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <p className="cat-practice__label">{data.practiceLabel}</p>
            <h2 className="cat-practice__title">
              <span className="cat-practice__highlight">{data.practiceTitleHighlight}</span>{' '}
              {data.practiceTitle.slice(data.practiceTitleHighlight.length).trim()}
            </h2>
            <p className="cat-practice__para">
              <strong>{data.practiceDescription[0]}</strong>{' '}
              {data.practiceDescription[1]}{' '}
              {data.practiceDescription[2]}
            </p>

            {/* Expandable commitment list */}
            {expanded && (
              <div className="cat-commitment mt-4">
                <h3 className="cat-commitment__title">{data.commitmentSubtitle}</h3>
                <ul className="cat-commitment__list">
                  {data.commitmentItems.map((item, i) => (
                    <li key={i} className="cat-commitment__item">
                      <i className="bi bi-check-circle cat-commitment__check"></i>
                      <div className="cat-commitment__item-body">
                        <span>{item.text}</span>
                        {item.children && item.children.length > 0 && (
                          <ul className="cat-commitment__sublist">
                            {item.children.map((child, j) => (
                              <li key={j} className="cat-commitment__subitem">
                                <i className="bi bi-check-circle cat-commitment__check cat-commitment__check--sm"></i>
                                <span>
                                  {child.bold && <em>{child.bold} </em>}
                                  {child.text}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="expertise-card__toggle mt-4"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Read Less' : 'Read More'}
              <i className={`bi bi-${expanded ? 'dash' : 'plus'}`}></i>
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="section section--indigo cat-outcomes">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <p className="section-header__label text-white">{data.outcomesLabel}</p>
            <h2 className="cat-outcomes__title">
              <span className="text-accent-box">{data.outcomesTitleHighlight}</span>{' '}
              {data.outcomesTitle.slice(data.outcomesTitleHighlight.length).trim()}
            </h2>
            <p className="cat-outcomes__subtitle text-white">{data.outcomesSubtitle}</p>
          </AnimatedSection>
          <div className="row g-4 mt-3 align-items-stretch">
            {data.outcomes.map((outcome, i) => {
              const count = data.outcomes.length;
              const col = count === 3 ? 'col-lg-4 col-md-6'
                        : count === 2 ? 'col-lg-6'
                        : count === 1 ? 'col-12'
                        : 'col-lg-3 col-md-6'; // 4 or more
              return (
                <div key={i} className={col}>
                  <AnimatedSection animation="animate-on-scroll" className="h-100">
                    <div className="card-gradient card-gradient--centered card-gradient--accent-bottom h-100">
                      <h3 className="cat-outcome-card__title">{outcome.title}</h3>
                      <p className="cat-outcome-card__desc">{outcome.description}</p>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services Tabs ── */}
      <section className="section section--dark cat-services">
        <div className="container pt-5">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center">
              <p className="cat-services__label text-white">{data.servicesLabel}</p>
              <h2 className="cat-services__title">
                <span className="text-accent-box">{data.servicesTitleHighlight}</span>{' '}
                {data.servicesTitle.slice(data.servicesTitleHighlight.length).trim()}
              </h2>
              <p className="cat-services__subtitle text-white">{data.servicesSubtitle}</p>
            </div>
          </AnimatedSection>

          {/* Tab buttons */}
          <div className="cat-services__tabs justify-content-center">
            <button
              className={`cat-services__tab-btn${activeTab === 'strategic' ? ' active' : ''}`}
              onClick={() => setActiveTab('strategic')}
            >
              STRATEGIC SERVICES
            </button>
            <button
              className={`cat-services__tab-btn${activeTab === 'tactical' ? ' active' : ''}`}
              onClick={() => setActiveTab('tactical')}
            >
              TACTICAL SERVICES
            </button>
          </div>

          {/* Strategic */}
          {activeTab === 'strategic' && (
            <div className="row g-4 mt-3 align-items-stretch">
              {data.strategicServices.map((svc, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <AnimatedSection animation="animate-on-scroll" className="h-100 d-flex flex-column">
                    <div className="card-gradient card-gradient--centered h-100 cat-svc-card">
                      <div className="card-gradient__icon">
                        <i className={`bi ${svc.icon}`}></i>
                      </div>
                      <h3 className="cat-svc-card__title">{svc.title}</h3>
                      <p className="cat-svc-card__desc">{svc.description}</p>
                      {svc.slug && (
                        <Link
                          to={`/services/${data.slug}/${svc.slug}`}
                          className="cat-svc-card__link"
                        >
                          Learn More <i className="bi bi-chevron-right"></i>
                        </Link>
                      )}
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          )}

          {/* Tactical */}
          {activeTab === 'tactical' && (
            <div className="row g-4 mt-3 align-items-stretch justify-content-center">
              {data.tacticalServices.map((svc, i) => (
                <div key={i} className="col-md-6 col-lg-4">
                  <AnimatedSection animation="animate-on-scroll" className="h-100 d-flex flex-column">
                    <div className="card-gradient card-gradient--centered h-100 cat-svc-card">
                      <div className="card-gradient__icon">
                        <i className={`bi ${svc.icon}`}></i>
                      </div>
                      <h3 className="cat-svc-card__title">{svc.title}</h3>
                      <p className="cat-svc-card__desc">{svc.description}</p>
                      {svc.slug && (
                        <Link
                          to={`/services/${data.slug}/${svc.slug}`}
                          className="cat-svc-card__link"
                        >
                          Learn More <i className="bi bi-chevron-right"></i>
                        </Link>
                      )}
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Certifications />
      <TrustedAdvisor testimonial={data.testimonial} />
      <AdditionalResources />
      <BeInformed />
    </>
  );
}
