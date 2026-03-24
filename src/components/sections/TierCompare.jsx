import AnimatedSection from './AnimatedSection';

export default function TierCompare({ tierSection }) {
  if (!tierSection) return null;

  return (
    <section className="section section--dark tier-compare">
      <div className="container">
        <AnimatedSection animation="animate-on-scroll">
          <div className="text-center mb-5">
            {tierSection.label && (
              <p className="section-header__label">{tierSection.label}</p>
            )}
            <h2 className="use-cases__title">
              {tierSection.titleHighlight ? (
                <>
                  {tierSection.title.split(tierSection.titleHighlight)[0]}
                  <span className="text-accent-box">{tierSection.titleHighlight}</span>
                  {tierSection.title.split(tierSection.titleHighlight)[1] || ''}
                </>
              ) : tierSection.title}
            </h2>
            {tierSection.subtitle && (
              <p className="use-cases__subtitle mx-auto">{tierSection.subtitle}</p>
            )}
          </div>
        </AnimatedSection>
        <AnimatedSection animation="stagger-children" className="row g-4">
          {tierSection.tiers.map((tier) => (
            <div className={`col-lg-${Math.floor(12 / tierSection.tiers.length)}`} key={tier.name}>
              <div className="tier-compare__card">
                <h3 className="tier-compare__name">{tier.name}</h3>
                <ul className="tier-compare__list list-unstyled">
                  {tier.items.map((item) => (
                    <li key={item} className="tier-compare__item">
                      <i className="bi bi-check-circle"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
