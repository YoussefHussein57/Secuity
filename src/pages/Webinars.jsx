import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const webinars = [
  { title: 'GRIT 2026 Ransomware Report Presentation', date: 'January 22, 2026', duration: '60 min', status: 'On-Demand', description: 'Our GRIT team presents key findings from the annual ransomware and cyber threat report.' },
  { title: 'Zero Trust in Practice: Lessons from the Field', date: 'February 12, 2026', duration: '45 min', status: 'On-Demand', description: 'Real-world case studies of zero trust implementation across enterprise environments.' },
  { title: 'Securing AI/ML Pipelines', date: 'March 20, 2026', duration: '45 min', status: 'Upcoming', description: 'Learn how to secure your AI and machine learning infrastructure from emerging threats.' },
  { title: 'Cloud Misconfigurations: Top 10 Mistakes', date: 'April 3, 2026', duration: '45 min', status: 'Upcoming', description: 'The most common cloud security misconfigurations and how to detect and remediate them.' },
  { title: 'Building a Threat-Informed Defense', date: 'April 18, 2026', duration: '60 min', status: 'Upcoming', description: 'How to use threat intelligence to prioritize defenses and improve your security posture.' },
  { title: 'SOC Automation: From Alert to Response', date: 'May 8, 2026', duration: '45 min', status: 'Upcoming', description: 'Automating SOC workflows with SOAR to reduce MTTD and MTTR.' },
];

export default function Webinars() {
  return (
    <>
      <Hero
        title="Webinars"
        subtitle="On-demand and live webinars from our cybersecurity experts."
        variant="page"
        ctaText=""
      />

      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4">
            {webinars.map((w) => (
              <div className="col-md-6 col-lg-4" key={w.title}>
                <div
                  className="p-4 rounded-4 h-100 d-flex flex-column"
                  style={{ border: '1px solid #e2e8f0', transition: 'border-color 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4b4fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  <div className="d-flex gap-2 mb-2">
                    <span
                      className="badge"
                      style={{
                        background: w.status === 'On-Demand' ? 'rgba(0, 204, 255, 0.1)' : 'rgba(75, 79, 255, 0.08)',
                        color: w.status === 'On-Demand' ? '#00ccff' : '#4b4fff',
                      }}
                    >
                      {w.status}
                    </span>
                    <span className="badge" style={{ background: '#f1f5f9', color: '#475569' }}>
                      {w.duration}
                    </span>
                  </div>
                  <h6 className="fw-bold">{w.title}</h6>
                  <p className="text-muted small flex-grow-1">{w.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <small className="text-muted">{w.date}</small>
                    <Link to="/contact" className="text-decoration-none" style={{ color: '#4b4fff', fontSize: '0.85rem', fontWeight: 600 }}>
                      {w.status === 'On-Demand' ? 'Watch Now' : 'Register'} <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
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
