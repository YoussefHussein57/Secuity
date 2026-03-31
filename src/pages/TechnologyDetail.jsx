import { useParams, Navigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import ExpertiseCards from '../components/sections/ExpertiseCards';
import LifecycleSection from '../components/sections/LifecycleSection';
import Certifications from '../components/sections/Certifications';
import Outcomes from '../components/sections/Outcomes';
import TrustedAdvisor from '../components/sections/TrustedAdvisor';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';
import technologies from '../data/technologies';


export default function TechnologyDetail() {
  const { slug } = useParams();
  const tech = technologies[slug];
  const [splitExpanded, setSplitExpanded] = useState(false);
  const expandRef = useRef(null);

  if (!tech) return <Navigate to="/404" replace />;

  const s = tech.split;
  const hasMoreParagraphs = s && s.paragraphs.length > 1;

  const toggleSplit = () => {
    const wrapper = expandRef.current?.parentElement;
    if (!wrapper || !expandRef.current) return;
    if (!splitExpanded) {
      wrapper.style.height = '0px';
      requestAnimationFrame(() => {
        wrapper.style.height = expandRef.current.scrollHeight + 'px';
      });
      const onEnd = () => {
        wrapper.style.height = 'auto';
        wrapper.removeEventListener('transitionend', onEnd);
      };
      wrapper.addEventListener('transitionend', onEnd);
    } else {
      wrapper.style.height = expandRef.current.scrollHeight + 'px';
      requestAnimationFrame(() => {
        wrapper.style.height = '0px';
      });
    }
    setSplitExpanded(!splitExpanded);
  };

  return (
    <>
      {/* 1. Hero */}
      <Hero
        label={tech.heroLabel || tech.title}
        title={tech.tagline}
        highlightWord={tech.heroHighlight}
        highlightStyle="box"
        subtitle={tech.description}
        ctaText={tech.heroCta || 'Talk to an Expert'}
        ctaLink="/contact"
        bgImage={tech.heroImage}
        variant="service"
        className="hero--tech"
        showNetwork={false}
      />

      {/* 2. Dark Split Section (image left, text right) */}
      {s && (
        <section className="section section--dark dark-split dark-split--tech">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 dark-split__img-col">
                <AnimatedSection animation="fade-in-left">
                  <div className="dark-split__image dark-split__image--left">
                    <img src={s.image} alt={s.title} />
                  </div>
                </AnimatedSection>
              </div>
              <div className="col-lg-6">
                <AnimatedSection animation="fade-in-right">
                  <div className="dark-split__text">
                    <p className="section-header__label mb-3">{s.label}</p>
                    <h2 className="use-cases__title text-start mb-4">
                      {s.titleHighlight ? (
                        <>
                          {s.title.split(s.titleHighlight)[0]}
                          <span className="text-accent-box">{s.titleHighlight}</span>
                          {s.title.split(s.titleHighlight)[1] || ''}
                        </>
                      ) : s.title}
                    </h2>
                    <p className="text-white mb-3" style={{ lineHeight: 1.7, fontSize: '16px' }}>
                      {s.paragraphs[0]}
                    </p>
                    {hasMoreParagraphs && (
                      <>
                        <div className="expertise-expand__content" style={{ height: 0 }} aria-hidden={!splitExpanded}>
                          <div ref={expandRef}>
                            {s.paragraphs.slice(1).map((p, i) => (
                              <p className="text-white mb-3" style={{ lineHeight: 1.7, fontSize: '16px' }} key={i}>
                                {p}
                              </p>
                            ))}
                          </div>
                        </div>
                        <button className="expertise-card__toggle mt-2" onClick={toggleSplit} aria-expanded={splitExpanded}>
                          {splitExpanded ? 'Read Less' : 'Read More'} <i className={`bi ${splitExpanded ? 'bi-dash' : 'bi-plus'}`}></i>
                        </button>
                      </>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Expertise Cards (accent bg) */}
      <ExpertiseCards expertise={tech.expertise} />

      {/* 4. Lifecycle Section (split + numbered cards) */}
      <LifecycleSection lifecycle={tech.lifecycle} />

      {/* 5. Certifications */}
      <Certifications certs={tech.certifications} certGroups={tech.certificationGroups} />

      {/* 6. Outcomes */}
      <Outcomes
        outcomesSection={tech.outcomesSection}
        outcomes={tech.outcomes}
        title={tech.title}
      />

      {/* 7. Trusted Advisor */}
      {tech.testimonial && <TrustedAdvisor testimonial={tech.testimonial} />}

      {/* 8. Additional Resources */}
      <AdditionalResources />

      {/* 9. Be Informed CTA */}
      <BeInformed />
    </>
  );
}
