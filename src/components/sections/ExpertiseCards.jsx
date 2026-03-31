import { useState, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import GradientCard from './GradientCard';

export default function ExpertiseCards({ expertise }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);

  const toggle = () => {
    const wrapper = contentRef.current?.parentElement;
    if (!wrapper || !contentRef.current) return;

    if (!expanded) {
      wrapper.style.height = '0px';
      requestAnimationFrame(() => {
        wrapper.style.height = contentRef.current.scrollHeight + 'px';
      });
      // After transition, set to auto so content isn't clipped
      const onEnd = () => {
        wrapper.style.height = 'auto';
        wrapper.removeEventListener('transitionend', onEnd);
      };
      wrapper.addEventListener('transitionend', onEnd);
    } else {
      wrapper.style.height = contentRef.current.scrollHeight + 'px';
      requestAnimationFrame(() => {
        wrapper.style.height = '0px';
      });
    }
    setExpanded(!expanded);
  };

  if (!expertise) return null;

  const hasTabs = expertise.tabs && expertise.tabs.length > 0;
  const currentCards = hasTabs ? expertise.tabs[activeTab].cards : expertise.cards;

  return (
    <section className="section section--indigo-light expertise-cards">
      <div className="container text-center">
        <AnimatedSection animation="animate-on-scroll">
          <p className="section-header__label" style={{ color: '#fff' }}>{expertise.label}</p>
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

        {/* Tabs */}
        {hasTabs && (
          <div className="expertise-tabs">
            {expertise.tabs.map((tab, i) => (
              <button
                key={tab.name}
                className={`expertise-tabs__btn ${activeTab === i ? 'expertise-tabs__btn--active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        {/* Cards */}
        <AnimatedSection animation="stagger-children" className="row g-4 mt-3" key={activeTab}>
          {currentCards.map((card) => (
            <div className="col-lg-4" key={card.title}>
              <GradientCard
                title={card.title}
                description={card.description}
                iconImage={card.iconImage || expertise.cardIconImage}
                layout="centered"
                accent="bottom"
                titleLg
                link={card.link}
                linkText={card.linkText}
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
