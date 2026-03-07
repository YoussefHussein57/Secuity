import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const events = [
  { title: 'Premier Cybersecurity Conference 2026', date: 'March 15-17, 2026', location: 'Washington, D.C.', type: 'Conference', description: 'Our flagship annual conference bringing together security leaders, practitioners, and technology vendors.' },
  { title: 'Cloud Security Summit', date: 'April 8, 2026', location: 'Virtual', type: 'Virtual Summit', description: 'A deep dive into cloud security strategy, multi-cloud architectures, and CSPM best practices.' },
  { title: 'CISO Roundtable: AI & Cybersecurity', date: 'May 5, 2026', location: 'New York, NY', type: 'Roundtable', description: 'An exclusive discussion for CISOs on securing AI systems and leveraging AI for defense.' },
  { title: 'Federal Cybersecurity Workshop', date: 'June 12, 2026', location: 'Reston, VA', type: 'Workshop', description: 'Hands-on workshop for federal security teams on CMMC compliance and zero trust implementation.' },
];

export default function Events() {
  return (
    <>
      <Hero
        title="Events"
        subtitle="Join us at conferences, workshops, and summits around the world."
        variant="page"
        ctaText=""
      />

      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4">
            {events.map((event) => (
              <div className="col-md-6" key={event.title}>
                <div
                  className="p-4 rounded-4 h-100"
                  style={{ border: '1px solid #e2e8f0', transition: 'border-color 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4b4fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  <div className="d-flex gap-2 mb-2">
                    <span className="badge" style={{ background: 'rgba(75, 79, 255, 0.08)', color: '#4b4fff' }}>{event.type}</span>
                  </div>
                  <h5 className="fw-bold" style={{ fontFamily: "'Exo 2', sans-serif" }}>{event.title}</h5>
                  <p className="text-muted small mb-3">{event.description}</p>
                  <div className="d-flex gap-3 text-muted small">
                    <span><i className="bi bi-calendar me-1"></i>{event.date}</span>
                    <span><i className="bi bi-geo-alt me-1"></i>{event.location}</span>
                  </div>
                  <Link to="/contact" className="btn btn-accent btn-sm btn-cta mt-3">
                    Register <i className="bi bi-arrow-right"></i>
                  </Link>
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
