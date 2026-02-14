import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import SplitSection from '../components/sections/SplitSection';
import StatCard from '../components/sections/StatCard';
import LogoGrid from '../components/sections/LogoGrid';

const stats = [
  { number: '4,200+', label: 'Enterprise Customers' },
  { number: '50%', label: 'of Fortune 50' },
  { number: '40%', label: 'of Fortune 500' },
  { number: '650+', label: 'Security Technologies' },
];

const leaders = [
  { name: 'John Doe', role: 'CEO', image: '/placeholder-person.jpg' },
  { name: 'Jane Smith', role: 'CTO', image: '/placeholder-person.jpg' },
  { name: 'Mike Wilson', role: 'CISO', image: '/placeholder-person.jpg' },
  { name: 'Sarah Brown', role: 'VP of Services', image: '/placeholder-person.jpg' },
];

const awards = [
  { src: '/placeholder-logo.svg', alt: 'CRN Fast Growth' },
  { src: '/placeholder-logo.svg', alt: 'Inc. Best Workplaces' },
  { src: '/placeholder-logo.svg', alt: 'MSP 500' },
  { src: '/placeholder-logo.svg', alt: 'Cybersecurity Excellence' },
  { src: '/placeholder-logo.svg', alt: 'Gartner Recognized' },
  { src: '/placeholder-logo.svg', alt: 'Top Workplace' },
];

export default function Company() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Cybersecurity practitioners who live and breathe security every day."
        variant="page"
      />

      {/* Mission */}
      <SplitSection
        image="/placeholder-split.jpg"
        title="Our Mission"
        description="We are veterans from DoD, Intelligence Communities, and Fortune 500 enterprises. We've become the trusted advisor for more than 50% of cabinet-level agencies in the U.S. Federal Government and a third of Fortune 500 companies."
        imageLeft={false}
      />

      {/* Stats */}
      <section className="section section--light">
        <div className="container">
          <SectionHeader title="By the Numbers" center />
          <div className="stats-row">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container">
          <SectionHeader title="Leadership Team" center />
          <div className="row g-4 leadership-grid">
            {leaders.map((l) => (
              <div className="col-6 col-lg-3" key={l.name}>
                <div className="card border-0 text-center">
                  <div className="overflow-hidden rounded-4">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="card-img-top"
                      style={{ height: '280px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="fw-bold mb-1">{l.name}</h6>
                    <small className="text-muted">{l.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <SplitSection
        image="/placeholder-split.jpg"
        title="Security University"
        description="Our training and career development program empowers the next generation of cybersecurity professionals with hands-on, real-world experience."
        ctaText="Learn More"
        ctaLink="/university"
        dark
      />

      {/* Awards */}
      <section className="section">
        <div className="container">
          <SectionHeader title="Awards & Recognition" center />
          <LogoGrid logos={awards} />
        </div>
      </section>
    </>
  );
}
