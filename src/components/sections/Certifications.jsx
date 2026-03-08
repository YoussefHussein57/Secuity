import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function Certifications() {
  return (
    <section className="section section--light">
      <div className="container">
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
              <div className="certs-grid">
                <h5 className="certs-grid__heading">Highly Trained, Highly Certified</h5>
                <p className="certs-grid__subheading">Examples Include:</p>
                <div className="certs-grid__group">
                  <div className="certs-grid__badges">
                    {['CYSA+', 'CISSP', 'OSCP', 'OSCE'].map((cert) => (
                      <div className="cert-badge" key={cert}>
                        <span className="cert-badge__label">{cert}</span>
                      </div>
                    ))}
                  </div>
                  <p className="certs-grid__category">SANS & ISC2 / Offensive Security</p>
                </div>
                <div className="certs-grid__group">
                  <div className="certs-grid__badges">
                    {['GSE', 'GPEN', 'GWAPT'].map((cert) => (
                      <div className="cert-badge" key={cert}>
                        <span className="cert-badge__label">{cert}</span>
                      </div>
                    ))}
                  </div>
                  <p className="certs-grid__category">Global Information Assurance</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
