import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import NetworkBackground from './NetworkBackground';

export default function BeInformed() {
  return (
    <section className="section section--dark be-informed text-center">
      <NetworkBackground variant="dark" nodeCount={50} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection animation="animate-on-scroll">
          <h2 className="be-informed__title text-white">
            Stronger Together.<br />
            Protecting What&rsquo;s Next.
          </h2>
          <p className="be-informed__subtitle text-white">
            Our unrivaled cybersecurity expertise and relationship-based
            approach combine to deliver tailored solutions that keep your people, data
            and operations safe.
          </p>
          <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
            Talk to an Expert
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
