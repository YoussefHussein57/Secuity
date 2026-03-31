import AnimatedSection from './AnimatedSection';
import GradientCard from './GradientCard';

export default function Outcomes({ outcomesSection, outcomes, title }) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section className="section section--dark outcomes-section">
      <div className="container">
        <AnimatedSection animation="animate-on-scroll">
          <div className="outcomes-header d-flex flex-column gap-4">
            <p className="section-header__label" style={{ color: '#fff' }}>
              {outcomesSection?.label || `${title} Outcomes`}
            </p>
            <h2 className="use-cases__title text-start mx-0">
              {outcomesSection?.titleHighlight ? (
                <>
                  {outcomesSection.title.split(outcomesSection.titleHighlight)[0]}
                  <span className="text-accent-box">{outcomesSection.titleHighlight}</span>
                  {outcomesSection.title.split(outcomesSection.titleHighlight)[1] || ''}
                </>
              ) : (outcomesSection?.title || 'Expected Outcomes')}
            </h2>
            {outcomesSection?.subtitle && (
              <p className="text-white" style={{ lineHeight: 1.7, fontSize: '18px', maxWidth: 900 }}>
                {outcomesSection.subtitle}
              </p>
            )}
          </div>
        </AnimatedSection>
        <AnimatedSection animation="stagger-children" className="row g-4">
          {outcomes.map((o) => (
            <div className="col-lg-6" key={o.title}>
              <GradientCard
                icon={o.icon}
                iconImage={o.iconImage}
                iconWidth={o.iconImage ? 112 : undefined}
                iconHeight={o.iconImage ? 100 : undefined}
                iconCircle={!o.iconImage}
                title={o.title}
                description={o.description}
                layout="horizontal"
                accent="top"
              />
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
