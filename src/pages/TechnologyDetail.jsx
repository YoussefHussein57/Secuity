import { useParams, Navigate } from 'react-router-dom';
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

  if (!tech) return <Navigate to="/404" replace />;

  const s = tech.split;

  return (
    <>
      {/* 1. Hero */}
      <Hero
        label={tech.title}
        title={tech.tagline}
        highlightWord={tech.heroHighlight}
        highlightStyle="box"
        subtitle={tech.description}
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        bgImage={tech.heroImage}
        variant="service"
        showNetwork={false}
      />

      {/* 2. Dark Split Section (image left, text right) */}
      {s && (
        <section className="section section--dark dark-split dark-split--tech">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <AnimatedSection animation="fade-in-left">
                  <div className="dark-split__image dark-split__image--left">
                    <img src={s.image} alt={s.title} />
                  </div>
                </AnimatedSection>
              </div>
              <div className="col-lg-6">
                <AnimatedSection animation="fade-in-right">
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
                    {s.paragraphs.map((p, i) => (
                      <p className={`text-white-50${i < s.paragraphs.length - 1 ? ' mb-4' : ''}`} style={{ lineHeight: 1.8 }} key={i}>
                        {p}
                      </p>
                    ))}
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
      <Certifications />

      {/* 6. Outcomes */}
      <Outcomes
        outcomesSection={tech.outcomesSection}
        outcomes={tech.outcomes}
        title={tech.title}
      />

      {/* 8. Additional Resources */}
      <AdditionalResources />

      {/* 9. Be Informed CTA */}
      <BeInformed />
    </>
  );
}
