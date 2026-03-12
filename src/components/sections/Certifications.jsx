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

export default function Certifications({ variant = 'default' }) {
  const isCentered = variant === 'centered';

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
                We are also highly certified across industry standards as well as hundreds of cybersecurity solutions.
              </p>
              <Link to="/company" className="btn btn-accent btn-cta mb-5">
                Why CyberPoint? <i className="bi bi-arrow-right"></i>
              </Link>
              {renderCertGrid(true)}
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
