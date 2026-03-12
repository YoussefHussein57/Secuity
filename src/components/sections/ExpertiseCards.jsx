import { useState, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import GradientCard from './GradientCard';

export default function ExpertiseCards({ expertise }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    if (!expanded && contentRef.current) {
      contentRef.current.parentElement.style.height = '0px';
      requestAnimationFrame(() => {
        contentRef.current.parentElement.style.height = contentRef.current.scrollHeight + 'px';
      });
    } else if (contentRef.current) {
      contentRef.current.parentElement.style.height = contentRef.current.scrollHeight + 'px';
      requestAnimationFrame(() => {
        contentRef.current.parentElement.style.height = '0px';
      });
    }
    setExpanded(!expanded);
  };

  if (!expertise) return null;

  return (
    <section className="section section--indigo-light expertise-cards">
      <div className="container text-center">
        <AnimatedSection animation="animate-on-scroll">
          <p className="section-header__label">{expertise.label}</p>
          <h2 className="use-cases__title">
            {expertise.titleHighlight ? (
              <>
                {expertise.title.split(expertise.titleHighlight)[0]}
                <span className="text-accent-box">{expertise.titleHighlight}</span>
                {expertise.title.split(expertise.titleHighlight)[1] || ''}
              </>
            ) : expertise.title}
          </h2>
          {expertise.subtitle && (
            <p className="expertise-cards__subtitle">{expertise.subtitle}</p>
          )}
        </AnimatedSection>

        <AnimatedSection animation="stagger-children" className="row g-4 mt-3">
          {expertise.cards.map((card) => (
            <div className="col-lg-4" key={card.title}>
              <GradientCard
                title={card.title}
                description={card.description}
                layout="centered"
                accent="bottom"
                titleLg
              />
            </div>
          ))}
        </AnimatedSection>

        {/* Read More toggle + Commitment section */}
        {expertise.commitment && (
          <div className="expertise-expand">
            <button
              className="expertise-card__toggle"
              onClick={toggle}
              aria-expanded={expanded}
            >
              {expanded ? 'Read Less' : 'Read More'} <i className={`bi ${expanded ? 'bi-dash' : 'bi-plus'}`}></i>
            </button>

            <div
              className="expertise-expand__content"
              style={{ height: 0 }}
              aria-hidden={!expanded}
            >
              <div ref={contentRef}>
                <div className="expertise-commitment">
                  <p className="expertise-commitment__label">{expertise.commitment.label}</p>
                  <h3 className="expertise-commitment__title">{expertise.commitment.title}</h3>
                  <div className="expertise-commitment__items">
                    {expertise.commitment.items.map((item, i) => (
                      <div className="expertise-commitment__item" key={i}>
                        <i className="bi bi-check-circle"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
