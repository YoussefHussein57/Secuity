import AnimatedSection from './AnimatedSection';

export default function StatsBanner({ stats }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="section section--indigo stats-banner">
      <div className="container">
        <AnimatedSection animation="stagger-children" className="row g-4 justify-content-center">
          {stats.map((stat) => (
            <div className={`col-md-${Math.floor(12 / stats.length)} col-sm-6`} key={stat.label}>
              <div className="stats-banner__card text-center">
                <h3 className="stats-banner__number">{stat.number}</h3>
                <p className="stats-banner__label">{stat.label}</p>
                {stat.source && (
                  <span className="stats-banner__source">{stat.source}</span>
                )}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
