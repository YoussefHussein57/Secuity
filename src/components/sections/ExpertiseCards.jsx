import AnimatedSection from './AnimatedSection';
import GradientCard from './GradientCard';

export default function ExpertiseCards({ expertise }) {
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
      </div>
    </section>
  );
}
