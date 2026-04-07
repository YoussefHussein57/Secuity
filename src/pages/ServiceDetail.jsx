import { Fragment, useState, useRef } from 'react';
import { assetUrl } from '../utils/assetUrl';
import { useParams, Navigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import LifecycleWheel from '../components/sections/LifecycleWheel';
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
                <h2 className="use-cases__title text-white">
                  {service.useCases.titleHighlight ? (
                    <>
                      {service.useCases.title.split(service.useCases.titleHighlight)[0]}
                      <span className="text-accent-box">{service.useCases.titleHighlight}</span>
                      {service.useCases.title.split(service.useCases.titleHighlight)[1] || ''}
                    </>
                  ) : service.useCases.title}
                </h2>
                <p className="use-cases__subtitle mx-auto">
                  {service.useCases.subtitle}
                </p>
                {service.useCases.subtitle2 && (
                  <p className="use-cases__subtitle mx-auto mt-3">
                    {service.useCases.subtitle2}
                  </p>
                )}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="stagger-children" className="row g-4">
              {service.useCases.cards
                ? service.useCases.cards.map((card) => (
                    <div className={`col-lg-${service.useCases.cards.length === 2 ? '6' : '4'} col-md-6`} key={card.title}>
                      <GradientCard title={card.title} description={card.description} layout="centered" accent="top" />
                    </div>
                  ))
                : service.useCases.items.map((item) => (
                    <div className={`col-md-6 col-lg-${service.useCases.items.length >= 4 ? '3' : '4'}`} key={item}>
                      <GradientCard text={item} layout="text-only" accent="top" />
                    </div>
                  ))
              }
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 2b. Hero Split — indigo section (replaces use cases when set) */}
      {service.heroSplit && !service.useCases && (
        <section className="section section--indigo service-use-cases">
          <div className="container">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center mb-5">
                <p className="section-header__label">{service.heroSplit.label}</p>
                <h2 className="use-cases__title text-white">
                  {service.heroSplit.titleHighlight ? (
                    <>
                      {service.heroSplit.title.split(service.heroSplit.titleHighlight)[0]}
                      <span className="text-accent-box">{service.heroSplit.titleHighlight}</span>
                      {service.heroSplit.title.split(service.heroSplit.titleHighlight)[1] || ''}
                    </>
                  ) : service.heroSplit.title}
                </h2>
                {service.heroSplit.subtitle && (
                  <p className="use-cases__subtitle mx-auto mt-3">{service.heroSplit.subtitle}</p>
                )}
              </div>
            </AnimatedSection>

            {/* Cards variant — no image */}
            {service.heroSplit.cards ? (
              <AnimatedSection animation="animate-on-scroll">
                <div className={`row g-4 row-cols-1 row-cols-md-${service.heroSplit.cards.length <= 3 ? service.heroSplit.cards.length : 3}`}>
                  {service.heroSplit.cards.map((card) => (
                    <div key={card.title} className="col">
                      <GradientCard layout="centered" accent="top" title={card.title} description={card.description || undefined} />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ) : (
              /* Image + paragraphs variant */
              <div className="row g-5 align-items-center">
                <div className={`col-lg-5 d-flex justify-content-center ${service.heroSplit.imageLeft ? 'order-lg-1' : 'order-lg-2'}`}>
                  <AnimatedSection animation={service.heroSplit.imageLeft ? 'fade-in-left' : 'fade-in-right'}>
                    <img
                      src={assetUrl(service.heroSplit.image)}
                      alt={service.heroSplit.imageAlt || ''}
                      style={service.heroSplit.imageStyle || undefined}
                    />
                  </AnimatedSection>
                </div>
                <div className={`col-lg-7 ${service.heroSplit.imageLeft ? 'order-lg-2' : 'order-lg-1'}`}>
                  <AnimatedSection animation={service.heroSplit.imageLeft ? 'fade-in-right' : 'fade-in-left'}>
                    <div style={{ maxWidth: '590px' }}>
                      {service.heroSplit.paragraphs.map((p, i) => (
                        <p key={i} className="text-white mb-3" style={{ lineHeight: 1.6, fontSize: '16px' }}>{p}</p>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            )}
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
        const hasMore = !s.showAll && !s.inlineItems && (
          (s.sections ? (s.sectionsAllHidden ? s.sections.length > 0 : s.sections.length > 1) : false) ||
          (!s.sections && (s.paragraphs.length > 1 || (s.checklist && s.checklist.length > 0)))
        );

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
                {s.showAll && (
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

                {/* Interleaved paragraph + checklist sections — first section always visible (unless sectionsAllHidden) */}
                {s.sections && !s.sectionsAllHidden && s.sections.slice(0, 1).map((sec, si) => (
                  <div key={si}>
                    {sec.paragraph && (
                      <p className="text-white mb-2" style={{ lineHeight: 1.5, fontSize: '16px' }}>{sec.paragraph}</p>
                    )}
                    {sec.items && sec.items.map((item) => (
                      <div className="card-gradient__checklist-item" key={item}>
                        <i className="bi bi-check-circle"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Inline structured items (title + description + why bullet) */}
                {s.inlineItems && s.inlineItems.map((item, ii) => (
                  <div key={ii} className="mt-4">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: '1rem', flexShrink: 0 }}></i>
                      <p style={{ fontWeight: 700, color: '#fff', fontSize: '15px', marginBottom: 0 }}>{item.title}</p>
                    </div>
                    <p className="text-white mb-2" style={{ lineHeight: 1.5, fontSize: '15px', paddingLeft: '1.6rem' }}>{item.description}</p>
                    {item.why && (
                      <div className="card-gradient__checklist-item">
                        <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: '1rem', flexShrink: 0, marginTop: '2px' }}></i>
                        <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{item.why}</span>
                      </div>
                    )}
                  </div>
                ))}

                {/* Collapsible extra content (default) */}
                {hasMore && (
                  <>
                    <div
                      ref={(el) => { expandRefs.current[idx] = el; }}
                      className="expertise-expand__content"
                      style={{ height: isExpanded ? (expandRefs.current[idx]?.scrollHeight ?? 'auto') : 0 }}
                    >
                      {s.sections ? (s.sectionsAllHidden ? s.sections : s.sections.slice(1)).map((sec, si) => (
                        <div key={si} style={{ marginTop: '1rem' }}>
                          {sec.paragraph && (
                            <p className="text-white mb-2" style={{ lineHeight: 1.5, fontSize: '16px' }}>{sec.paragraph}</p>
                          )}
                          {sec.items && sec.items.map((item) => (
                            <div className="card-gradient__checklist-item" key={item}>
                              <i className="bi bi-check-circle"></i>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )) : (
                        <>
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
                        </>
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
              {s.imageContain ? (
                <div className="d-flex justify-content-center align-items-center h-100 py-4 py-lg-0">
                  <img src={assetUrl(s.image)} alt={s.imageAlt || ''} style={s.imageStyle || undefined} />
                </div>
              ) : (
                <div className={`dark-split__image dark-split__image--${imageLeft ? 'left' : 'right'}`}>
                  <img src={assetUrl(s.image)} alt={s.imageAlt} style={s.imageStyle || undefined} />
                </div>
              )}
            </AnimatedSection>
          </div>
        );

        return (
          <Fragment key={idx}>
            <section className={`section section--dark dark-split${!s.image ? ' dark-split--flush pt-5' : ''}`}>
              <div className="container pt-5">
                {s.image ? (
                  <div className="row g-5 align-items-center">
                    {imageLeft ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
                  </div>
                ) : (
                  <div className="row">
                    <div className="col-lg-10">
                      <AnimatedSection animation="animate-on-scroll">
                        <div className="dark-split__text" style={{ maxWidth: '100%' }}>
                          <p className="section-header__label">{s.label}</p>
                          <h2 className="use-cases__title text-start text-white">
                            {s.titleHighlight ? (
                              <>
                                {s.title.split(s.titleHighlight)[0]}
                                <span className="text-accent-box">{s.titleHighlight}</span>
                                {s.title.split(s.titleHighlight)[1] || ''}
                              </>
                            ) : s.title}
                          </h2>
                          <p className="text-white mb-3" style={{ lineHeight: 1.5, fontSize: '16px' }}>{s.paragraphs[0]}</p>
                        </div>
                      </AnimatedSection>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Optional checklist/stat cards below the split */}
            {s.splitCards && s.splitCards.length > 0 && (
              <section className="section section--dark" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
                <div className="container">
                  {s.splitCardsHeader && (
                    <AnimatedSection animation="animate-on-scroll">
                      <div className="dark-split__text mb-5" style={{ maxWidth: '100%' }}>
                        {s.splitCardsHeader.label && <p className="section-header__label">{s.splitCardsHeader.label}</p>}
                        <h2 className="use-cases__title text-start">
                          {s.splitCardsHeader.titleHighlight ? (
                            <>
                              {s.splitCardsHeader.title.split(s.splitCardsHeader.titleHighlight)[0]}
                              <span className="text-accent-box">{s.splitCardsHeader.titleHighlight}</span>
                              {s.splitCardsHeader.title.split(s.splitCardsHeader.titleHighlight)[1] || ''}
                            </>
                          ) : s.splitCardsHeader.title}
                        </h2>
                        {s.splitCardsHeader.description && (
                          <p className="text-white mb-0" style={{ lineHeight: 1.5, fontSize: '16px', maxWidth: '80%' }}>
                            {s.splitCardsHeader.description}
                          </p>
                        )}
                      </div>
                    </AnimatedSection>
                  )}
                  <AnimatedSection animation="stagger-children" className="row g-4">
                    {s.splitCards.map((card, ci) => {
                      const colClass = s.splitCards.length >= 3 ? 'col-lg-4' : 'col-lg-6';
                      if (card.biIcon) {
                        return (
                          <div className={colClass} key={ci}>
                            <GradientCard layout="centered" accent="bottom" icon={card.biIcon} iconCircle title={card.title} description={card.description} />
                          </div>
                        );
                      }
                      if (card.stat) {
                        return (
                          <div className={colClass} key={ci}>
                            <GradientCard layout="centered" accent="bottom">
                              <div className="text-center">
                                <div style={{ fontSize: '3rem', fontWeight: 700, color: '#00ccff', lineHeight: 1.1, marginBottom: '0.75rem' }}>
                                  {card.stat}
                                </div>
                                <p style={{ fontSize: '15px', color: '#fff', marginBottom: card.link ? '1rem' : 0 }}>
                                  {card.statText}
                                </p>
                                {card.link && (
                                  <a href={card.link.href} style={{ color: '#00ccff', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
                                    {card.link.text} &gt;
                                  </a>
                                )}
                              </div>
                            </GradientCard>
                          </div>
                        );
                      }
                      return (
                        <div className={colClass} key={ci}>
                          <GradientCard layout="left" accent="bottom">
                            <div className={card.icon ? 'd-flex gap-4 align-items-start' : ''}>
                              {card.icon && (
                                <img src={assetUrl(card.icon)} alt="" style={{ width: 64, height: 64, objectFit: 'contain', flexShrink: 0, marginTop: '4px' }} />
                              )}
                              <div style={{ flex: 1 }}>
                                {card.title && (
                                  <p style={{ fontSize: '18px', fontWeight: 700, color: '#00ccff', marginBottom: '1rem' }}>{card.title}</p>
                                )}
                                {card.items.map((item) => (
                                  <div className="card-gradient__checklist-item" key={item}>
                                    <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}></i>
                                    <span style={{ fontSize: '15px', fontWeight: 600 }}>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </GradientCard>
                        </div>
                      );
                    })}
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

      {/* 3b. Lifecycle Wheel (conditional — e.g. AWS) */}
      {service.lifecycleStages && <LifecycleWheel data={service.lifecycleStages} />}

      {/* 3c. Service Tabs (conditional) */}
      <ServiceTabs tabsSection={service.tabsSection} />

      {/* 3c. Tier Compare (conditional) */}
      <TierCompare tierSection={service.tierSection} />

      {/* Outcomes early (right after splits, before certs) */}
      {service.outcomesEarly && !service.hideOutcomes && (
        <Outcomes
          outcomesSection={service.outcomesSection}
          outcomes={service.outcomes}
          title={service.title}
          variant={service.outcomesVariant}
        />
      )}

      {/* 4. Certifications */}
      <Certifications certGroups={service.certGroups} description={service.certsDescription} title={service.certsTitle} />

      {/* 4b. Industry Section (conditional) */}
      {service.industrySection && (
        <section className="section section--dark ">
          <div className="container pt-5">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center mb-5">
                <p className="section-header__label" style={{ color: '#fff' }}>{service.industrySection.label}</p>
                <h2 className="use-cases__title text-white">{service.industrySection.title}</h2>
                <p className="use-cases__subtitle mx-auto mt-3">{service.industrySection.subtitle}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="stagger-children" className="row g-4">
              {service.industrySection.industries.map((ind, ii) => {
                const total = service.industrySection.industries.length;
                const isLast = ii === total - 1;
                const isOddTotal = total % 2 !== 0;
                const colClass = isLast && isOddTotal ? 'col-12' : 'col-lg-6';
                return (
                  <div className={colClass} key={ind.title}>
                    <GradientCard
                      iconImage={ind.icon}
                      iconWidth={56}
                      iconHeight={56}
                      title={ind.title}
                      titleWhite
                      description={ind.description}
                      layout="centered"
                      accent="top"
                    />
                  </div>
                );
              })}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 5. Outcomes (default position, skip if already rendered early or hidden) */}
      {!service.outcomesEarly && !service.hideOutcomes && (
        <Outcomes
          outcomesSection={service.outcomesSection}
          outcomes={service.outcomes}
          title={service.title}
          variant={service.outcomesVariant}
        />
      )}

      {/* 5b. Engagement Section (optional — SaaS, etc.) */}
      {service.engagementSection && (
        <section className="section section--indigo-light">
          <div className="container">
            <AnimatedSection animation="animate-on-scroll">
              <div className="text-center mb-5">
                <p className="section-header__label" style={{ color: 'rgba(255,255,255,0.7)' }}>{service.engagementSection.label}</p>
                <h2 className="use-cases__title text-white">
                  {service.engagementSection.titleHighlight ? (
                    <>
                      {service.engagementSection.title.split(service.engagementSection.titleHighlight)[0]}
                      <span className="text-accent-box">{service.engagementSection.titleHighlight}</span>
                      {service.engagementSection.title.split(service.engagementSection.titleHighlight)[1] || ''}
                    </>
                  ) : service.engagementSection.title}
                </h2>
                {service.engagementSection.subtitle && (
                  <p className="use-cases__subtitle mx-auto mt-3">{service.engagementSection.subtitle}</p>
                )}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="stagger-children" className="row g-4">
              {service.engagementSection.cards.map((card) => (
                <div className="col-lg-6" key={card.title}>
                  <GradientCard layout="centered" accent="top" title={card.title} description={card.description} />
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* 6. Trusted Advisor + Contact Form */}
      <TrustedAdvisor testimonial={service.testimonial} />

      {/* 7. Additional Resources */}
      <AdditionalResources />

      {/* 8. Be Informed CTA */}
      <BeInformed />
    </>
  );
}
