import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const leaders = [
  { name: 'John Doe', role: 'Chief Executive Officer', bio: 'John brings over 25 years of cybersecurity leadership experience from the DoD and Fortune 500 enterprises.', image: '/placeholder-person.svg' },
  { name: 'Jane Smith', role: 'Chief Technology Officer', bio: 'Jane leads our technology strategy and innovation, with deep expertise in cloud security and AI.', image: '/placeholder-person.svg' },
  { name: 'Mike Wilson', role: 'Chief Information Security Officer', bio: 'Mike oversees our internal security and advises clients on enterprise security strategy.', image: '/placeholder-person.svg' },
  { name: 'Sarah Brown', role: 'VP of Services', bio: 'Sarah manages our service delivery team of 500+ cybersecurity professionals.', image: '/placeholder-person.svg' },
  { name: 'David Chen', role: 'VP of Engineering', bio: 'David leads our engineering teams building managed security platforms and tools.', image: '/placeholder-person.svg' },
  { name: 'Lisa Johnson', role: 'VP of Federal Services', bio: 'Lisa directs our government practice serving federal, state, and local agencies.', image: '/placeholder-person.svg' },
];

export default function Leadership() {
  return (
    <>
      <Hero
        title="Leadership Team"
        subtitle="Meet the experienced leaders driving our mission to make cybersecurity better for everyone."
        variant="page"
        ctaText=""
      />

      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4">
            {leaders.map((l) => (
              <div className="col-md-6 col-lg-4" key={l.name}>
                <div className="text-center">
                  <div className="overflow-hidden rounded-4 mb-3">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-100"
                      style={{ height: '300px', objectFit: 'cover' }}
                    />
                  </div>
                  <h5 className="fw-bold mb-1" style={{ fontFamily: "'Exo 2', sans-serif" }}>{l.name}</h5>
                  <p className="mb-2" style={{ color: '#4b4fff', fontSize: '0.9rem', fontWeight: 600 }}>{l.role}</p>
                  <p className="text-muted small">{l.bio}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
