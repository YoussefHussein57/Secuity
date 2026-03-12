import { Fragment } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import Certifications from '../components/sections/Certifications';
import Outcomes from '../components/sections/Outcomes';
import TrustedAdvisor from '../components/sections/TrustedAdvisor';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';
import services from '../data/services';


export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) return <Navigate to="/404" replace />;

  return (
    <>
      {/* 1. Hero */}
      <Hero
        label={service.title}
        title={service.tagline}
        highlightWord={service.heroHighlight}
        highlightStyle="box"
        subtitle={service.description}
        ctaText={`Secure Your ${service.title.split(' ')[0]}`}
        ctaLink="/contact"
        bgImage={service.heroImage}
        variant="service"
      />

      {/* 2. Use Cases */}
      {service.useCases && (
        <section className="section section--indigo">
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
                <p className="text-white-50 mx-auto" style={{ maxWidth: 700, lineHeight: 1.7 }}>
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
        const imageLeft = idx % 2 !== 0;

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
                {s.paragraphs.map((p, pi) => (
                  <p className={`text-white-50${pi < s.paragraphs.length - 1 ? ' mb-4' : ''}`} style={{ lineHeight: 1.8 }} key={pi}>
                    {p}
                  </p>
                ))}
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
              <div className="container">
                <div className="row g-5 align-items-center">
                  {imageLeft ? <>{imageCol}{textCol}</> : <>{textCol}{imageCol}</>}
                </div>
              </div>
            </section>

            {s.checklist && (
              <section className="section section--dark" style={{ paddingTop: '2rem' }}>
                <div className="container">
                  <AnimatedSection animation="stagger-children" className="row g-4 justify-content-center">
                    {[0, 1].map((colIdx) => (
                      <div className="col-lg-6" key={colIdx}>
                        <GradientCard accent="bottom">
                          {s.checklist
                            .filter((_, i) => (colIdx === 0 ? i < Math.ceil(s.checklist.length / 2) : i >= Math.ceil(s.checklist.length / 2)))
                            .map((item) => (
                              <div className="card-gradient__checklist-item" key={item}>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>{item}</span>
                              </div>
                            ))}
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

      {/* 4. Certifications */}
      <Certifications />

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
