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
              <div className="cat-hero__ctas">
                <Link to={data.heroCtaLink} className="btn cat-hero__cta">
                  {data.heroCta}
                </Link>
                {data.heroSecondaryCta && (
                  <a href={data.heroSecondaryCtaLink} target="_blank" rel="noopener noreferrer" className="btn cat-hero__cta cat-hero__cta--outline">
                    {data.heroSecondaryCta}
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section section--dark cat-stats">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p className="section-header__label">{data.statsLabel}</p>
              {data.statsTitle && <h2 className="cat-stats__title">{data.statsTitle}</h2>}
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
                      <p className="cat-stat__source-name">{stat.sourceName}</p>
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
            <div className={data.practiceVideo ? 'row g-5 align-items-start' : ''}>
              <div className={data.practiceVideo ? 'col-lg-6' : ''}>
                <p className="cat-practice__label">{data.practiceLabel}</p>
                <h2 className="cat-practice__title">
                  <span className="cat-practice__highlight">{data.practiceTitleHighlight}</span>{' '}
                  {data.practiceTitle.slice(data.practiceTitleHighlight.length).trim()}
                </h2>
                {data.practiceDescription.map((para, i) => (
                  <p key={i} className="cat-practice__para">{para}</p>
                ))}
              </div>

              {/* Video thumbnail — only shown when practiceVideo is provided */}
              {data.practiceVideo && (
                <div className="col-lg-6">
                  <a
                    href={data.practiceVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cat-practice__video-wrap"
                  >
                    <img src={data.practiceVideo.thumbnail} alt="Overview video" className="cat-practice__video-thumb" />
                    <div className="cat-practice__video-play">
                      <i className="bi bi-play-circle"></i>
                    </div>
                  </a>
                  <a
                    href={data.practiceVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cat-practice__video-link"
                  >
                    Watch Overview Video &gt;
                  </a>
                </div>
              )}
            </div>

            {/* Expandable commitment — full width below the two columns */}
            {expanded && (
              <div className="cat-commitment mt-5">
                {data.commitmentLabel && (
                  <p className="cat-practice__label mb-2">{data.commitmentLabel}</p>
                )}
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
            {data.managedServices && (
              <button
                className={`cat-services__tab-btn${activeTab === 'managed' ? ' active' : ''}`}
                onClick={() => setActiveTab('managed')}
              >
                MANAGED SECURITY
              </button>
            )}
          </div>

          {/* Per-tab description */}
          {(activeTab === 'strategic' && data.strategicTabDesc) && (
            <p className="cat-services__tab-desc text-center">{data.strategicTabDesc}</p>
          )}
          {(activeTab === 'tactical' && data.tacticalTabDesc) && (
            <p className="cat-services__tab-desc text-center">{data.tacticalTabDesc}</p>
          )}
          {(activeTab === 'managed' && data.managedTabDesc) && (
            <p className="cat-services__tab-desc text-center">{data.managedTabDesc}</p>
          )}

          {/* Renders a tab's service cards + optional GPVUE card */}
          {['strategic', 'tactical', 'managed'].map((tab) => {
            if (activeTab !== tab) return null;
            const services = tab === 'strategic' ? data.strategicServices
                           : tab === 'tactical'  ? data.tacticalServices
                           : data.managedServices || [];
            const showGpvue = tab === 'strategic' && data.gpvueCard;
            return (
              <div key={tab} className="row g-4 mt-1 align-items-stretch">
                {services.map((svc, i) => (
                  <div key={i} className="col-md-6 col-lg-4">
                    <AnimatedSection animation="animate-on-scroll" className="h-100 d-flex flex-column">
                      <div className="card-gradient card-gradient--centered h-100 cat-svc-card">
                        <div className="card-gradient__icon">
                          <i className={`bi ${svc.icon}`}></i>
                        </div>
                        <h3 className="cat-svc-card__title">{svc.title}</h3>
                        <p className="cat-svc-card__desc">{svc.description}</p>
                        {svc.slug && (
                          <Link to={`/${data.slug}/${svc.slug}`} className="cat-svc-card__link">
                            Learn More &gt;
                          </Link>
                        )}
                      </div>
                    </AnimatedSection>
                  </div>
                ))}

                {/* GPVUE special card */}
                {showGpvue && (
                  <div className="col-md-6 col-lg-4">
                    <AnimatedSection animation="animate-on-scroll" className="h-100 d-flex flex-column">
                      <div className="card-gradient card-gradient--centered h-100 cat-svc-card cat-gpvue-card">
                        <img
                          src="https://www.guidepointsecurity.com/wp-content/uploads/2025/04/GPVUE_White_Text_Tag_RGB.png"
                          alt="GPVUE Security Program"
                          className="cat-gpvue-card__logo"
                        />
                        <p className="cat-gpvue-card__desc">{data.gpvueCard.description}</p>
                        <Link to={data.gpvueCard.link} className="btn cat-gpvue-card__btn">
                          Learn More
                        </Link>
                      </div>
                    </AnimatedSection>
                  </div>
                )}
              </div>
            );
          })}
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
                        : 'col-lg-3 col-md-6';
              return (
                <div key={i} className={col}>
                  <AnimatedSection animation="animate-on-scroll" className="h-100">
                    <div className="card-gradient card-gradient--accent-bottom h-100">
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

      <Certifications />
      <TrustedAdvisor testimonial={data.testimonial} />
      <BeInformed />
    </>
  );
}
