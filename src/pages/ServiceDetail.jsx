import { Fragment, useState, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import StatsBanner from '../components/sections/StatsBanner';
import TierCompare from '../components/sections/TierCompare';
import ServiceTabs from '../components/sections/ServiceTabs';
import Certifications from '../components/sections/Certifications';
import Outcomes from '../components/sections/Outcomes';
import TrustedAdvisor from '../components/sections/TrustedAdvisor';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';
import services from '../data/services';


export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services[slug];
  const [expandedSplits, setExpandedSplits] = useState({});
  const expandRefs = useRef({});

  const toggleSplit = (idx) => {
    setExpandedSplits((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (!service) return <Navigate to="/404" replace />;

  return (
    <>
      {/* 1. Hero */}
      <Hero
        label={service.heroLabel || service.title}
        title={service.tagline}
        highlightWord={service.heroHighlight}
        highlightStyle="box"
        subtitle={service.description}
        ctaText={service.heroCta || `Secure Your ${service.title.split(' ')[0]}`}
        ctaLink="/contact"
        bgImage={service.heroImage}
        variant="service"
      />

      {/* 1b. Stats Banner (conditional) */}
      <StatsBanner stats={service.statsBanner} />

      {/* 2. Use Cases */}
      {service.useCases && (
        <section className="section section--indigo service-use-cases">
          <div className="container">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center mb-5">
                <p className="section-header__label">{service.useCases.label}</p>
                <h2 className="use-cases__title">
                  {service.useCases.titleHighlight ? (
                    <>
                      {service.useCases.title.split(service.useCases.titleHighlight)[0]}
                      <span className="text-accent-box">{service.useCases.titleHighlight}</span>
                      {service.useCases.title.split(service.useCases.titleHighlight)[1] || ''}
                    </>
                  ) : service.useCases.title}
                </h2>
                <p className="use-cases__subtitle mx-auto" >
                  {service.useCases.subtitle}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="stagger-children" className="row g-4">
              {service.useCases.items.map((item) => (
                <div className="col-lg-4 col-md-6" key={item}>
                  <GradientCard text={item} layout="text-only" accent="top" />
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 3. Dark Split Sections — fully data-driven from service.splits */}
      {service.splits && service.splits.map((s, idx) => {

        // ── Variant A: Full-width cards grid (no image) ──────────────────────
        if (s.cards && s.cards.length > 0) {
          return (
            <Fragment key={idx}>
              <section className="section section--dark dark-split">
                <div className="container py-5 py-lg-3">
                  <AnimatedSection animation="animate-on-scroll">
                    <div className="dark-split__text mb-5">
                      <p className="section-header__label">{s.label}</p>
                      <h2 className="use-cases__title text-start">
                        {s.titleHighlight ? (
                          <>
                            {s.title.split(s.titleHighlight)[0]}
                            <span className="text-accent-box">{s.titleHighlight}</span>
                            {s.title.split(s.titleHighlight)[1] || ''}
                          </>
                        ) : s.title}
                      </h2>
                      {s.paragraphs?.[0] && (
                        <p className="text-white mb-0" style={{ lineHeight: 1.5, fontSize: '16px' }}>
                          {s.paragraphs[0]}
                        </p>
                      )}
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="stagger-children" className="row g-4">
                    {s.cards.map((card) => (
                      <div className="col-lg-4 col-md-6" key={card.title}>
                        <GradientCard
                          title={card.title}
                          description={card.description}
                          layout="centered"
                          accent="top"
                        />
                      </div>
                    ))}
                  </AnimatedSection>
                </div>
              </section>
            </Fragment>
          );
        }

        // ── Variant B: Normal image + text split ─────────────────────────────
        const imageLeft = s.imageLeft ?? (idx % 2 !== 0);
        const isExpanded = !!expandedSplits[idx];
        const hasMore = !s.splitCards && !s.showAll && (s.paragraphs.length > 1 || (s.checklist && s.checklist.length > 0));

        const textCol = (
          <div className={`col-lg-6${imageLeft ? ' order-lg-2 order-1' : ''}`} key="text">
            <AnimatedSection animation={imageLeft ? 'fade-in-right' : 'fade-in-left'}>
              <div className="dark-split__text">
                <p className="section-header__label">{s.label}</p>
                <h2 className="use-cases__title text-start">
                  {s.titleHighlight ? (
                    <>
                      {s.title.split(s.titleHighlight)[0]}
                      <span className="text-accent-box">{s.titleHighlight}</span>
                      {s.title.split(s.titleHighlight)[1] || ''}
                    </>
                  ) : s.title}
                </h2>
                <p className="text-white mb-3" style={{ lineHeight: 1.5, fontSize: '16px' }}>
                  {s.paragraphs[0]}
                </p>

                {/* Always-visible extra content (showAll flag or splitCards) */}
                {(s.showAll || s.splitCards) && (
                  <>
                    {s.paragraphs.slice(1).map((p, pi) => (
                      <p className="text-white mb-3" style={{ lineHeight: 1.5, fontSize: '16px' }} key={pi}>{p}</p>
                    ))}
                    {s.checklist && (
                      <div className="mt-3">
                        {s.checklist.map((item) => (
                          <div className="card-gradient__checklist-item" key={item}>
                            <i className="bi bi-check-circle"></i>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Collapsible extra content (default) */}
                {hasMore && (
                  <>
                    <div
                      ref={(el) => { expandRefs.current[idx] = el; }}
                      className="expertise-expand__content"
                      style={{ height: isExpanded ? (expandRefs.current[idx]?.scrollHeight ?? 'auto') : 0 }}
                    >
                      {s.paragraphs.slice(1).map((p, pi) => (
                        <p className="text-white mb-3" style={{ lineHeight: 1.5, fontSize: '16px' }} key={pi}>
                          {p}
                        </p>
                      ))}
                      {s.checklist && (
                        <div className="mt-3">
                          {s.checklist.map((item) => (
                            <div className="card-gradient__checklist-item" key={item}>
                              <i className="bi bi-check-circle"></i>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <button className="expertise-card__toggle mt-3" onClick={() => toggleSplit(idx)}>
                      {isExpanded ? 'Read Less' : 'Read More'}
                      <i className={`bi bi-${isExpanded ? 'dash' : 'plus'}`}></i>
                    </button>
                  </>
                )}
              </div>
            </AnimatedSection>
          </div>
        );

        const imageCol = (
          <div className={`col-lg-6${imageLeft ? ' order-lg-1 order-2' : ''}`} key="image">
            <AnimatedSection animation={imageLeft ? 'fade-in-left' : 'fade-in-right'}>
              <div className={`dark-split__image dark-split__image--${imageLeft ? 'left' : 'right'}`}>
                <img src={s.image} alt={s.imageAlt} />
              </div>
            </AnimatedSection>
          </div>
        );

        return (
          <Fragment key={idx}>
            <section className="section section--dark dark-split">
              <div className="container py-4">
                <div className="row g-5 align-items-center">
                  {imageLeft ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
                </div>
              </div>
            </section>

            {/* Optional 2-col checklist cards below the split */}
            {s.splitCards && s.splitCards.length > 0 && (
              <section className="section section--dark" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
                <div className="container">
                  <AnimatedSection animation="stagger-children" className="row g-4">
                    {s.splitCards.map((card, ci) => (
                      <div className="col-lg-6" key={ci}>
                        <GradientCard layout="centered" accent="bottom">
                          <div>
                            {card.items.map((item) => (
                              <div className="card-gradient__checklist-item" key={item}>
                                <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: '1.1rem', flexShrink: 0 }}></i>
                                <span style={{ fontSize: '15px', fontWeight: 600 }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </GradientCard>
                      </div>
                    ))}
                  </AnimatedSection>
                </div>
              </section>
            )}

            {/* Optional tier cards below the split */}
            {s.tierCards && s.tierCards.length > 0 && (
              <section className="section section--dark" style={{ paddingTop: 0, paddingBottom: '4rem' }}>
                <div className="container">
                  <AnimatedSection animation="stagger-children" className="row g-4">
                    {s.tierCards.map((tier) => (
                      <div className="col-lg-4" key={tier.title}>
                        <GradientCard layout="centered" accent="top">
                          <h5 style={{ textTransform: 'uppercase', fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                            {tier.title}
                          </h5>
                          <div>
                            {tier.items.map((item) => (
                              <div className="card-gradient__checklist-item" key={item}>
                                <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: '1.1rem', flexShrink: 0 }}></i>
                                <span style={{ fontSize: '15px', fontWeight: 400, textAlign: 'left' }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </GradientCard>
                      </div>
                    ))}
                  </AnimatedSection>
                </div>
              </section>
            )}
          </Fragment>
        );
      })}

      {/* 3b. Service Tabs (conditional) */}
      <ServiceTabs tabsSection={service.tabsSection} />

      {/* 3c. Tier Compare (conditional) */}
      <TierCompare tierSection={service.tierSection} />

      {/* 4. Certifications */}
      <Certifications certGroups={service.certGroups} />

      {/* 5. Outcomes */}
      <Outcomes
        outcomesSection={service.outcomesSection}
        outcomes={service.outcomes}
        title={service.title}
      />

      {/* 6. Trusted Advisor + Contact Form */}
      <TrustedAdvisor testimonial={service.testimonial} />

      {/* 7. Additional Resources */}
      <AdditionalResources />

      {/* 8. Be Informed CTA */}
      <BeInformed />
    </>
  );
}
