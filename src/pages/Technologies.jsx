import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import BeInformed from '../components/sections/BeInformed';

const techCategories = [
  {
    title: 'Cloud Security',
    icon: 'bi-cloud',
    description: 'Secure your cloud workloads across AWS, Azure, and GCP with best-of-breed solutions.',
    vendors: ['Palo Alto Prisma', 'Wiz', 'CrowdStrike', 'Zscaler'],
  },
  {
    title: 'Identity & Access',
    icon: 'bi-fingerprint',
    description: 'Manage identities, privileged access, and zero-trust network access.',
    vendors: ['CyberArk', 'SailPoint', 'Okta', 'BeyondTrust'],
  },
  {
    title: 'Endpoint Security',
    icon: 'bi-laptop',
    description: 'Next-gen endpoint protection, EDR, and extended detection and response.',
    vendors: ['CrowdStrike', 'SentinelOne', 'Microsoft Defender', 'Carbon Black'],
  },
  {
    title: 'Network Security',
    icon: 'bi-hdd-network',
    description: 'Firewalls, SASE, NDR, and network segmentation solutions.',
    vendors: ['Palo Alto Networks', 'Fortinet', 'Cisco', 'Zscaler'],
  },
  {
    title: 'Security Operations',
    icon: 'bi-globe2',
    description: 'SIEM, SOAR, and threat intelligence platforms for security operations.',
    vendors: ['Splunk', 'Microsoft Sentinel', 'Google Chronicle', 'IBM QRadar'],
  },
  {
    title: 'Data Security',
    icon: 'bi-database',
    description: 'Data loss prevention, encryption, and privacy management solutions.',
    vendors: ['Symantec DLP', 'Varonis', 'Thales', 'BigID'],
  },
];

export default function Technologies() {
  return (
    <>
      <Hero
        title="Technology Partners"
        highlightWord="Technology"
        subtitle="We are vendor-agnostic, partnering with 650+ cybersecurity technologies to deliver custom, best-fit solutions."
        variant="page"
      />

      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Our Technology Ecosystem"
              title="650+ Security Technologies"
              subtitle="As your single point of contact, we evaluate, recommend, and implement the right technologies for your unique environment."
              center
            />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {techCategories.map((cat) => (
              <div className="col-md-6 col-lg-4" key={cat.title}>
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    border: '1px solid #e2e8f0',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#4b4fff';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(75, 79, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className={`bi ${cat.icon} d-block mb-3`} style={{ fontSize: '2rem', color: '#4b4fff' }}></i>
                  <h5 className="fw-bold" style={{ fontFamily: "'Exo 2', sans-serif" }}>{cat.title}</h5>
                  <p className="text-muted small">{cat.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {cat.vendors.map((v) => (
                      <span
                        key={v}
                        className="badge"
                        style={{ background: 'rgba(75, 79, 255, 0.08)', color: '#4b4fff', fontWeight: 500 }}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--dark text-center">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="text-white fw-bold mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
              Need Help Choosing the Right Technology?
            </h2>
            <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 550 }}>
              Our vendor-agnostic approach means we recommend what's best for you — not what pays us the most.
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
              Talk to an Expert <i className="bi bi-arrow-right"></i>
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </>
  );
}
