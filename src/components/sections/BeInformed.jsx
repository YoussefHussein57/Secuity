import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import NetworkBackground from './NetworkBackground';

export default function BeInformed() {
  return (
    <section className="section section--dark text-center">
      <NetworkBackground variant="dark" nodeCount={50} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection animation="animate-on-scroll">
          <h2
            className="fw-bold mb-3 text-white"
            style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Be Informed + Reduce Risk
          </h2>
          <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 600 }}>
            Better protect your organization with our unmatched expertise and proven approach to cybersecurity.
          </p>
          <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
            Talk to an Expert <i className="bi bi-arrow-right"></i>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
