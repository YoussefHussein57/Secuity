import { useState } from 'react';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

export default function ReportIncident() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section
        className="section position-relative"
        style={{
          paddingTop: '8rem',
          backgroundImage: 'url(/bg-dot-map.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row g-5 justify-content-center">
            {/* Left — Title + Description */}
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-left">
                <h1 className="section-header__title mb-4" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
                  <span className="text-accent-box">Report</span> an Incident
                </h1>

                <p className="fw-bold text-uppercase mb-4" style={{ lineHeight: 1.6, fontSize: '0.85rem', letterSpacing: '0.02em' }}>
                  We can help you quickly respond to an incident, help understand the full scope of attacker activities, develop and execute a recovery plan.
                </p>

                <p className="text-muted mb-3" style={{ lineHeight: 1.8 }}>
                  Our expert forensic analysts, incident responders, and threat hunters have decades of expertise helping organizations respond and successfully recover from security incidents.
                </p>

                <p className="text-muted mb-0" style={{ lineHeight: 1.8 }}>
                  Our Incident Response capabilities are product-agnostic, meaning we can use your current tools during an IR engagement, or we can bring our own. With our IR services, you can be assured that no matter the security incident we will minimize your risk and exposure as much as possible.
                </p>
              </AnimatedSection>
            </div>

            {/* Right — Form Card */}
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-right">
                {submitted ? (
                  <div className="incident-form-card text-center py-5">
                    <i className="bi bi-shield-check" style={{ fontSize: '4rem', color: '#4b4fff' }}></i>
                    <h3 className="fw-bold mt-3 mb-2">Report Received</h3>
                    <p className="text-muted">
                      Our incident response team has been notified and will contact you shortly.
                      For immediate assistance, call <strong>(877) 889-0132</strong>.
                    </p>
                  </div>
                ) : (
                  <div className="incident-form-card">
                    <div className="text-center mb-4">
                      <i className="bi bi-exclamation-triangle incident-form-card__icon"></i>
                    </div>
                    <p className="text-muted mb-4 text-center">
                      We are available 24&times;7 if you suspect you have a security incident and require immediate information or assistance.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-12">
                          <label className="form-label fw-bold small">
                            <span className="required-mark">*</span>First Name
                          </label>
                          <input type="text" className="form-control incident-input" placeholder="First Name*" required />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-bold small">
                            <span className="required-mark">*</span>Last Name
                          </label>
                          <input type="text" className="form-control incident-input" placeholder="Last Name*" required />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-bold small">
                            <span className="required-mark">*</span>Company Name
                          </label>
                          <input type="text" className="form-control incident-input" placeholder="Company Name*" required />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-bold small">
                            <span className="required-mark">*</span>Business Email
                          </label>
                          <input type="email" className="form-control incident-input" placeholder="Business Email*" required />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-bold small">
                            <span className="required-mark">*</span>Phone Number
                          </label>
                          <input type="tel" className="form-control incident-input" placeholder="*Phone Number" required />
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-bold small">
                            <span className="required-mark">*</span>State
                          </label>
                          <select className="form-select incident-input" required>
                            <option value="">Select...</option>
                            <option>Alabama</option>
                            <option>Alaska</option>
                            <option>Arizona</option>
                            <option>Arkansas</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Connecticut</option>
                            <option>Delaware</option>
                            <option>Florida</option>
                            <option>Georgia</option>
                            <option>Hawaii</option>
                            <option>Idaho</option>
                            <option>Illinois</option>
                            <option>Indiana</option>
                            <option>Iowa</option>
                            <option>Kansas</option>
                            <option>Kentucky</option>
                            <option>Louisiana</option>
                            <option>Maine</option>
                            <option>Maryland</option>
                            <option>Massachusetts</option>
                            <option>Michigan</option>
                            <option>Minnesota</option>
                            <option>Mississippi</option>
                            <option>Missouri</option>
                            <option>Montana</option>
                            <option>Nebraska</option>
                            <option>Nevada</option>
                            <option>New Hampshire</option>
                            <option>New Jersey</option>
                            <option>New Mexico</option>
                            <option>New York</option>
                            <option>North Carolina</option>
                            <option>North Dakota</option>
                            <option>Ohio</option>
                            <option>Oklahoma</option>
                            <option>Oregon</option>
                            <option>Pennsylvania</option>
                            <option>Rhode Island</option>
                            <option>South Carolina</option>
                            <option>South Dakota</option>
                            <option>Tennessee</option>
                            <option>Texas</option>
                            <option>Utah</option>
                            <option>Vermont</option>
                            <option>Virginia</option>
                            <option>Washington</option>
                            <option>West Virginia</option>
                            <option>Wisconsin</option>
                            <option>Wyoming</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label fw-bold small">Describe the Incident</label>
                          <textarea
                            className="form-control incident-input"
                            rows="4"
                            placeholder="Describe what happened..."
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-accent btn-cta">
                            Submit Report <i className="bi bi-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ELITE TRUST SECTION ===== */}
      <section
        className="section section--dark position-relative overflow-hidden"
        style={{
          backgroundImage: 'url(/bg-abstract-lines.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="section-header__title text-white" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' , maxWidth:'1080px' , margin:'0 auto' }}>
                Put an <span className="text-accent-box">ELITE</span> Team of Cybersecurity Practitioners on Your Side
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="trust-card">
              <div className="row g-4 align-items-center">
                <div className="col-lg-3">
                  <h4 className="trust-card__label">
                    Trusted by Government Organizations and Global Brands:
                  </h4>
                </div>
                <div className="col-lg-3">
                  <div className="trust-card__stat">
                    <div className="trust-card__stat-icon">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p className="trust-card__stat-text">Trusted by More than 50% of U.S. Government Cabinet-Level Agencies</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="trust-card__stat">
                    <div className="trust-card__stat-icon">
                      <i className="bi bi-star-fill "></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p className="trust-card__stat-text">Depended on by 40 of the Fortune 100</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="trust-card__stat">
                    <div className="trust-card__stat-icon">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p className="trust-card__stat-text">Relied on by a Third of the Fortune 500</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
