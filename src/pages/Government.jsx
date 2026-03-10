import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import FeatureCard from '../components/sections/FeatureCard';
import GradientCard from '../components/sections/GradientCard';
import BeInformed from '../components/sections/BeInformed';

function AnimatedStat({ number, label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, '')) || 0;
  const hasDecimal = number.replace(/[^0-9.]/g, '').includes('.');
  const suffix = number.replace(/[0-9.,]/g, '');

  return (
    <div ref={ref} className="text-center">
      <h2 className="fw-bold text-white mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>
        {isVisible ? (
          <CountUp end={numericValue} duration={2.5} separator="," decimals={hasDecimal ? 1 : 0} suffix={suffix} />
        ) : '0'}
      </h2>
      <p className="text-white-50 mb-0">{label}</p>
    </div>
  );
}

const features = [
  {
    icon: 'bi-shield-check',
    title: 'FedRAMP Authorized',
    description: 'Our solutions meet the rigorous FedRAMP security standards required for federal cloud deployments.',
  },
  {
    icon: 'bi-award',
    title: 'CMMC Compliant',
    description: 'We help defense contractors achieve and maintain CMMC certification across all levels.',
  },
  {
    icon: 'bi-lock',
    title: 'Cleared Personnel',
    description: 'Our team includes cleared professionals who understand the unique requirements of classified environments.',
  },
];

const contractVehicles = [
  'GSA Schedule 70',
  'SEWP V',
  'CIO-SP3',
  'ITES-SW2',
  'STARS III',
  '8(a) STARS II',
];

export default function Government() {
  return (
    <>
      <Hero
        title="Government Solutions"
        highlightWord="Government"
        subtitle="Protecting the nation's most critical agencies with proven cybersecurity expertise and cleared personnel."
        variant="page"
      />

      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4 text-center">
            <div className="col-md-3">
              <AnimatedStat number="50%+" label="of Cabinet-Level Agencies" />
            </div>
            <div className="col-md-3">
              <AnimatedStat number="15+" label="Years Federal Experience" />
            </div>
            <div className="col-md-3">
              <AnimatedStat number="200+" label="Cleared Professionals" />
            </div>
            <div className="col-md-3">
              <AnimatedStat number="100+" label="Federal Contracts" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Why Government Trusts Us"
              title="Mission-Critical Cybersecurity"
              subtitle="We understand the unique regulatory, operational, and security requirements of federal, state, and local government agencies."
              center
            />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {features.map((f) => (
              <div className="col-md-4" key={f.title}>
                <FeatureCard {...f} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={35} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Procurement"
              title="Contract Vehicles"
              subtitle="Streamline procurement through our existing government contract vehicles."
              center
            />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-3 justify-content-center">
            {contractVehicles.map((cv) => (
              <div className="col-6 col-md-4 col-lg-2" key={cv}>
                <GradientCard text={cv} layout="text-only" accent="bottom" />
              </div>
            ))}
          </AnimatedSection>

          <div className="text-center mt-5">
            <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
              Contact Our Government Team <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
