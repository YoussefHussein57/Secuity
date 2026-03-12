import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import BeInformed from '../components/sections/BeInformed';

const leaders = [
  { name: 'John Doe', role: 'Chief Executive Officer', bio: 'John brings over 25 years of cybersecurity leadership experience from the DoD and Fortune 500 enterprises.', image: '/placeholder-person.svg' },
  { name: 'Jane Smith', role: 'Chief Technology Officer', bio: 'Jane leads our technology strategy and innovation, with deep expertise in cloud security and AI.', image: '/placeholder-person.svg' },
  { name: 'Mike Wilson', role: 'Chief Information Security Officer', bio: 'Mike oversees our internal security and advises clients on enterprise security strategy.', image: '/placeholder-person.svg' },
  { name: 'Sarah Brown', role: 'VP of Services', bio: 'Sarah manages our service delivery team of 500+ cybersecurity professionals.', image: '/placeholder-person.svg' },
  { name: 'David Chen', role: 'VP of Engineering', bio: 'David leads our engineering teams building managed security platforms and tools.', image: '/placeholder-person.svg' },
  { name: 'Lisa Johnson', role: 'VP of Federal Services', bio: 'Lisa directs our government practice serving federal, state, and local agencies.', image: '/placeholder-person.svg' },
  { name: 'Robert Taylor', role: 'VP of Sales', bio: 'Robert drives strategic partnerships and revenue growth across all regions.', image: '/placeholder-person.svg' },
  { name: 'Maria Garcia', role: 'VP of Marketing', bio: 'Maria leads brand strategy, demand generation, and our events program.', image: '/placeholder-person.svg' },
];

export default function Leadership() {
  return (
    <>
      {/* ===== HERO — Short page hero ===== */}
      <Hero
        label="Leadership"
        title="Our Leadership Team"
        subtitle=""
        ctaText=""
        variant="page"
      />

      {/* ===== LEADERSHIP GRID — Dark navy, matches GuidePoint ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={20} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="section-header__title text-white">Security Partners</h2>
              <div className="gradient-underline" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4 leadership-grid">
            {leaders.map((l) => (
              <div className="col-md-6 col-lg-3" key={l.name}>
                <div className="leader-card text-center">
                  <div className="leader-card__image-wrap">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="leader-card__image"
                    />
                  </div>
                  <h5 className="leader-card__name">{l.name}</h5>
                  <p className="leader-card__role">{l.role}</p>
                  <p className="leader-card__bio">{l.bio}</p>
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
