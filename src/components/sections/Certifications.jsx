import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const certGroups = [
  {
    category: 'Industry Certifications',
    certs: [
      { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
      { name: 'ISC2 CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/logo-isc2-ccsp-square.png' },
      { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line.png' },
      { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
      { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/OSCP_cert.png' },
    ],
  },
  {
    category: 'GIAC & Other Certifications',
    certs: [
      { name: 'GIAC GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GPEN-PenTester-Line.png' },
      { name: 'GIAC GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GWAPT-PenTester-Line.png' },
      { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/OSCE.png' },
      { name: 'O-TTPS', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/10/large-O-TTPS-Certification-e1731422680524.jpg' },
      { name: 'CMMC L2', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/03/CMMC-L2-Logo-1.png' },
    ],
  },
];

// Full list matching GuidePoint's certification badges
const allCertBadges = [
  { name: 'Okta Certified Administrator', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Okta-Certified-Admin.png' },
  { name: 'CRISC', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/CRISC.png' },
  { name: 'CISM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/CISM.png' },
  { name: 'CISA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/CISA.png' },
  { name: 'GPS Certified Cyber Guarding', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cyber-guarding.png' },
  { name: 'OSCE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/OSCE.png' },
  { name: 'OSCP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/OSCP_cert.png' },
  { name: 'CISSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2020/09/gps-cert-cissp.png' },
  { name: 'ISC2 CCSP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/logo-isc2-ccsp-square.png' },
  { name: 'HCISPP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/HCISPP-sq.png' },
  { name: 'AWS Cloud Practitioner', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AWS-Certified-Cloud-Practitioner-logo.png' },
  { name: 'Google Cloud Architect', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Google_CloudSecArchitect.png' },
  { name: 'Microsoft Azure Admin', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Microsoft-AzureAdmin.png' },
  { name: 'Tenable Guardian', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Tenable-TG_TenableGuardian.png' },
  { name: 'Palo Alto PCNSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/PaloAlto_PCNSE.png' },
  { name: 'CyberArk Guardian', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Cyberark-Guardian.png' },
  { name: 'Cisco CCNP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Cisco-CCNP_certified.png' },
  { name: 'F5 Cert Admin Big IP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/F5_CertAdmin-Big-IP.png' },
  { name: 'F5 Certified CTS', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/F5_Certified-CTS.png' },
  { name: 'GIAC GREM', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GREM-ReverseEnginMalware-Line.png' },
  { name: 'GIAC GCFE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GCFE-ForensicExaminer-Line.png' },
  { name: 'GIAC GSEC', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSEC-SecurityEssentials-line.png' },
  { name: 'GIAC GSE', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GSE-SecurityExpert-Line.png' },
  { name: 'GIAC GPCS', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GPCS-CloudSecurity-line.png' },
  { name: 'GIAC GWAPT', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GWAPT-PenTester-Line.png' },
  { name: 'GIAC GPEN', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/GIAC-GPEN-PenTester-Line.png' },
  { name: 'Splunk Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/splunk_cert_admin_thumb.png' },
  { name: 'PCI SSC QSA', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/pci_ssc_qsa.jpg' },
  { name: 'Gigamon Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Gigamon_Cert.png' },
  { name: 'Rapid7 Cert', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/Rapid7_advanced_certified.png' },
  { name: 'AIGP', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/10/AIGP_Seal_color.png' },
];

const trustStats = [
  { value: '4,200+', label: 'Enterprise-Level Customers' },
  { value: 'Fortune 400', label: 'Depended on by 1/2 of the Fortune 100' },
  { value: '40%', label: 'Relied on by 40% of the Fortune 500' },
];

export default function Certifications({ variant = 'default', certs: certsProp, certGroups: certGroupsProp }) {
  const [showAll, setShowAll] = useState(false);
  const isCentered = variant === 'centered';
  const isPage = variant === 'page';

  const allCerts = certGroups.flatMap((g) => g.certs);
  const visibleBadges = showAll ? allCertBadges : allCertBadges.slice(0, 10);

  const activeCertGroups = certGroupsProp
    || (certsProp ? [{ category: 'Industry Certifications', certs: certsProp }] : certGroups);

  const renderCertGrid = (centered = false) => (
    <div className={`certs-grid${centered ? ' mx-auto' : ''}`} style={centered ? { maxWidth: 700 } : undefined}>
      <h5 className="certs-grid__heading">Highly Trained, Highly Certified</h5>
      <p className="certs-grid__subheading">Examples Include:</p>
      {activeCertGroups.map((group) => (
        <div className="certs-grid__group" key={group.category}>
          <div className={`certs-grid__badges${centered ? ' justify-content-center' : ''}`}>
            {group.certs.map((cert) => (
              <img src={cert.image} alt={cert.name} className="cert-badge" key={cert.name} />
            ))}
          </div>
          <p className="certs-grid__category">{group.category}</p>
        </div>
      ))}
    </div>
  );

  // ---- Page variant: white bg, label, title, description, badge grid, View More ----
  if (isPage) {
    return (
      <section className="section certs-page-section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p style={{
                fontSize: 15,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.93px',
                color: '#0f0f27',
                marginBottom: '0.75rem',
              }}>
                Certifications
              </p>
              <h2 style={{
                fontSize: 50,
                fontWeight: 500,
                color: '#000',
                marginBottom: '1rem',
                paddingBottom: 32,
              }}>
                An Elite, Highly Skilled Team
              </h2>
              <p style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#5b5b6b',
                maxWidth: 800,
                margin: '0 auto',
              }}>
                We back your organization with a highly certified and trained team of
                cybersecurity engineers, architects and consultants who come from organizations
                of all sizes, including Fortune 100 companies, the Department of War and U.S.
                intelligence agencies. We are trained experts in the cybersecurity technologies
                we recommend to better safeguard your assets.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="row justify-content-center mb-4" style={{ margin: '0 120px' }}>
              {visibleBadges.map((cert, i) => (
                <div
                  key={`${cert.name}-${i}`}
                  className="text-center"
                  style={{ width: '20%', padding: '0 16px', marginBottom: '2rem' }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-2"
                    style={{ width: 100, height: 100 }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  {/* No name label — matching GP */}
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-outline-dark"
                onClick={() => setShowAll(!showAll)}
                style={{ borderRadius: 0, padding: '12px 32px', fontWeight: 500 }}
              >
                {showAll ? 'View Less -' : 'View More +'}
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  }

  return (
    <section className="section section--light">
      <div className="container">
        {isCentered ? (
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center">
              <p className="section-header__label">Cybersecurity Certifications</p>
              <h2 className="certs__title">
                Your <span className="text-accent-box">Elite</span>, Highly-trained Team
              </h2>
              <p className="text-muted mx-auto mb-4" style={{ maxWidth: 700, lineHeight: 1.8 }}>
                More than 65% of our workforce consists of tenured cybersecurity engineers, architects and consultants.
                We are also highly certified across the cybersecurity vendors and solutions that we have vetted.
              </p>
              <Link to="/company/why-us" className="btn btn-accent btn-cta mb-5">
                Why GuidePoint?
              </Link>

              <h4 className="fw-bold mb-4">Trusted by Government Organizations and Global Brands:</h4>
              <div className="certs-trust-stats">
                {trustStats.map((stat) => (
                  <div className="certs-trust-stats__item" key={stat.value}>
                    <span className="certs-trust-stats__value">{stat.value}</span>
                    <span className="certs-trust-stats__label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="certs-badges-row mt-5">
                {certGroups.map((group) => (
                  <div className="certs-badges-row__group" key={group.category}>
                    {group.certs.map((cert) => (
                      <img src={cert.image} alt={cert.name} className="cert-badge" key={cert.name} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <div className="row g-5 align-items-start">
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-left">
                <p className="section-header__label">Cybersecurity Certifications</p>
                <h2 className="certs__title">
                  Your <span className="text-accent-box">Elite</span>, Highly-trained Team
                </h2>
                <p style={{ lineHeight: '27px', fontSize: '18px', color: '#000' }}>
                  More than 65% of our workforce consists of tenured cybersecurity engineers, architects and consultants.
                  We are also highly certified across industry standards as well as hundreds of cybersecurity solutions.
                </p>
                <Link to="/company/why-us" className="btn btn-accent btn-cta mt-2">
                  Why GuidePoint?
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-7">
              <AnimatedSection animation="fade-in-right">
                {renderCertGrid()}
              </AnimatedSection>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
