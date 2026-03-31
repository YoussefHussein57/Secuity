import AnimatedSection from './AnimatedSection';
import GradientCard from './GradientCard';

export default function LifecycleSection({ lifecycle }) {
  if (!lifecycle) return null;

  const s = lifecycle.split;
  const cards = lifecycle.cards;

  return (
    <>
      {/* Split: text left, image right */}
      {s && (
        <section className="section section--dark dark-split pt-5 pt-lg-2" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="row g-5 align-items-center pt-lg-2 pt-5">
              <div className="col-lg-6">
                <AnimatedSection animation="fade-in-left">
                  <div className="dark-split__text">
                    <p className="section-header__label" style={{ color: '#fff' }}>{s.label}</p>
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
                      <p className={`text-white${i < s.paragraphs.length - 1 ? ' mb-4' : ''}`} style={{ lineHeight: 1.5, fontSize: '16px' }} key={i}>
                        {p}
                      </p>
                    ))}
                    {s.stats && s.stats.length > 0 && (
                      <div className="lifecycle-stats mt-4">
                        {s.stats.map((stat, i) => (
                          <div className="lifecycle-stats__item" key={i}>
                            <span className="lifecycle-stats__value">{stat.value}</span>
                            <span className="lifecycle-stats__label">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              </div>
              <div className="col-lg-6">
                <AnimatedSection animation="fade-in-right">
                  <div className="dark-split__image dark-split__image--right">
                    <img src={s.image} alt={s.title} style={s.flipImage ? { transform: 'scaleX(-1)' } : undefined} />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Numbered lifecycle cards */}
      {cards && cards.length > 0 && (
        <section className="section section--dark lifecycle-cards">
          <div className="container">
            <AnimatedSection animation="stagger-children" className="row g-4">
              {cards.map((card) => (
                <div className="col-lg-3" key={card.title}>
                  <GradientCard
                    icon={card.icon}
                    iconImage={card.iconImage}
                    title={card.title}
                    description={card.description}
                    layout="centered"
                    accent="bottom"
                  />
                </div>
              ))}
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
}
