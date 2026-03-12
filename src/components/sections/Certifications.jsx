import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const certGroups = [
  {
    category: 'SANS & ISC2 / Offensive Security',
    certs: [
      { name: 'CySA+', image: '/images/certs/cysa.png' },
      { name: 'CISSP', image: '/images/certs/cissp.png' },
      { name: 'OSCP', image: '/images/certs/oscp.png' },
      { name: 'OSCE', image: '/images/certs/osce.png' },
    ],
  },
  {
    category: 'Global Information Assurance',
    certs: [
      { name: 'GSE', image: '/images/certs/gse.png' },
      { name: 'GPEN', image: '/images/certs/gpen.png' },
      { name: 'GWAPT', image: '/images/certs/gwapt.png' },
    ],
  },
];

// Full list matching GuidePoint's certification badges
const allCertBadges = [
  { name: 'Okta Certified Administrator', image: '/images/certs/cysa.png' },
  { name: 'CRISC', image: '/images/certs/cissp.png' },
  { name: 'CISM', image: '/images/certs/oscp.png' },
  { name: 'CISA', image: '/images/certs/osce.png' },
  { name: 'GPS Certified Cyber Guarding', image: '/images/certs/gse.png' },
  { name: 'OSCE', image: '/images/certs/cysa.png' },
  { name: 'OSCP', image: '/images/certs/oscp.png' },
  { name: 'CISSP', image: '/images/certs/cissp.png' },
  { name: 'ISC2 CCSP', image: '/images/certs/gpen.png' },
  { name: 'HCISPP', image: '/images/certs/gwapt.png' },
];

const trustStats = [
  { value: '4,200+', label: 'Enterprise-Level Customers' },
  { value: '400+', label: 'Depended on by 1/2 of the Fortune 100' },
  { value: '40%', label: 'Relied on by 40% of the Fortune 500' },
];

export default function Certifications({ variant = 'default' }) {
  const [showAll, setShowAll] = useState(false);
  const isCentered = variant === 'centered';
  const isPage = variant === 'page';

  const allCerts = certGroups.flatMap((g) => g.certs);
  const visibleBadges = showAll ? allCertBadges : allCertBadges.slice(0, 10);

  const renderCertGrid = (centered = false) => (
    <div className={`certs-grid${centered ? ' mx-auto' : ''}`} style={centered ? { maxWidth: 700 } : undefined}>
      <h5 className="certs-grid__heading">Highly Trained, Highly Certified</h5>
      <p className="certs-grid__subheading">Examples Include:</p>
      {certGroups.map((group) => (
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
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p
                className="small fw-bold mb-2"
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#0f0f27',
                }}
              >
                Certifications
              </p>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 500,
                  color: '#0f0f27',
                }}
              >
                An Elite, Highly Skilled Team
              </h2>
              <p className="text-muted mx-auto" style={{ maxWidth: 700, lineHeight: 1.8 }}>
                We back your organization with a highly certified and trained team of
                cybersecurity engineers, architects and consultants who come from organizations
                of all sizes, including Fortune 100 companies, the Department of War and U.S.
                intelligence agencies. We are trained experts in the cybersecurity technologies
                we recommend to better safeguard your assets.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
              {visibleBadges.map((cert, i) => (
                <div
                  key={`${cert.name}-${i}`}
                  className="text-center"
                  style={{ width: 120 }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-2"
                    style={{ width: 90, height: 90 }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <small className="text-muted" style={{ fontSize: '0.7rem' }}>{cert.name}</small>
                </div>
              ))}
            </div>

            {!showAll && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-dark btn-sm px-4"
                  onClick={() => setShowAll(true)}
                  style={{ borderRadius: '0.25rem' }}
                >
                  View More +
                </button>
              </div>
            )}
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
                More than 50% of our workforce consists of tenured cybersecurity engineers, architects and consultants.
                We are also highly certified across the cybersecurity vendors and solutions that we have vetted.
              </p>
              <Link to="/company" className="btn btn-accent btn-cta mb-5">
                Why CyberPoint? <i className="bi bi-arrow-right"></i>
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
                {allCerts.map((cert) => (
                  <img src={cert.image} alt={cert.name} className="cert-badge" key={cert.name} />
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
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  More than 50% of our workforce consists of tenured cybersecurity engineers, architects and consultants.
                  We are also highly certified across industry standards as well as hundreds of cybersecurity solutions.
                </p>
                <Link to="/company" className="btn btn-accent btn-cta mt-2">
                  Why CyberPoint? <i className="bi bi-arrow-right"></i>
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
