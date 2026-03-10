import AnimatedSection from './AnimatedSection';
import GradientCard from './GradientCard';

export default function Outcomes({ outcomesSection, outcomes, title }) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section className="section section--dark">
      <div className="container">
        <AnimatedSection animation="animate-on-scroll">
          <div className="outcomes-header py-5">
            <p className="section-header__label">
              {outcomesSection?.label || `${title} Outcomes`}
            </p>
            <h2 className="use-cases__title text-start">
              {outcomesSection?.titleHighlight ? (
                <>
                  {outcomesSection.title.split(outcomesSection.titleHighlight)[0]}
                  <span className="text-accent-box">{outcomesSection.titleHighlight}</span>
                  {outcomesSection.title.split(outcomesSection.titleHighlight)[1] || ''}
                </>
              ) : (outcomesSection?.title || 'Expected Outcomes')}
            </h2>
            <p className="text-white-50" style={{ lineHeight: 1.7 }}>
              {outcomesSection?.subtitle || ''}
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="stagger-children" className="row g-4">
          {outcomes.map((o) => (
            <div className="col-lg-6" key={o.title}>
              <GradientCard
                icon={o.icon}
                iconCircle
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
