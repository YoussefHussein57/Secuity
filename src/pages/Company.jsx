import CountUp from 'react-countup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import SplitSection from '../components/sections/SplitSection';
import AnimatedSection from '../components/sections/AnimatedSection';
import LogoGrid from '../components/sections/LogoGrid';
import BeInformed from '../components/sections/BeInformed';

function AnimatedStat({ number, label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, '')) || 0;
  const hasDecimal = number.replace(/[^0-9.]/g, '').includes('.');
  const suffix = number.replace(/[0-9.,]/g, '');

  return (
    <div className="text-center p-3" ref={ref}>
      <h2
        className="fw-bold mb-1"
        style={{ fontFamily: "'Exo 2', sans-serif", color: '#4b4fff' }}
      >
        {isVisible ? (
          <CountUp end={numericValue} duration={2.5} separator="," decimals={hasDecimal ? 1 : 0} suffix={suffix} />
        ) : '0'}
      </h2>
      <p className="text-muted mb-0">{label}</p>
    </div>
  );
}

const stats = [
  { number: '4,200+', label: 'Enterprise Customers' },
  { number: '50%', label: 'of Fortune 50' },
  { number: '40%', label: 'of Fortune 500' },
  { number: '650+', label: 'Security Technologies' },
];

const leaders = [
  { name: 'John Doe', role: 'CEO', image: '/placeholder-person.svg' },
  { name: 'Jane Smith', role: 'CTO', image: '/placeholder-person.svg' },
  { name: 'Mike Wilson', role: 'CISO', image: '/placeholder-person.svg' },
  { name: 'Sarah Brown', role: 'VP of Services', image: '/placeholder-person.svg' },
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
        image="/placeholder-split.svg"
        title="Our Mission"
        description="We are veterans from DoD, Intelligence Communities, and Fortune 500 enterprises. We've become the trusted advisor for more than 50% of cabinet-level agencies in the U.S. Federal Government and a third of Fortune 500 companies."
        imageLeft={false}
      />

      {/* Stats */}
      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader title="By the Numbers" center />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {stats.map((s) => (
              <div className="col-6 col-md-3" key={s.label}>
                <AnimatedStat {...s} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--dark">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader title="Leadership Team" center />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4 leadership-grid">
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
                    <h6 className="fw-bold mb-1 text-white">{l.name}</h6>
                    <small className="text-white-50">{l.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <SplitSection
        image="/placeholder-split.svg"
        title="Security University"
        description="Our training and career development program empowers the next generation of cybersecurity professionals with hands-on, real-world experience."
        ctaText="Learn More"
        ctaLink="/university"
        dark
      />

      {/* Awards */}
      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader title="Awards & Recognition" center />
          </AnimatedSection>
          <AnimatedSection animation="scale-in">
            <LogoGrid logos={awards} />
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
