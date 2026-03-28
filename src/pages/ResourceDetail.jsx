import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import resourceDetails from '../data/resourceDetails';

const US_STATES = [
  'AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN',
  'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH',
  'NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
  'VT','VA','WA','WV','WI','WY',
];

export default function ResourceDetail() {
  const { slug } = useParams();
  const resource = resourceDetails[slug];
  const [submitted, setSubmitted] = useState(false);

  if (!resource) return <Navigate to="/resources" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="rd-hero">
        {/* Background layer with overlay + divider */}
        <div
          className="rd-hero__bg"
          style={{ backgroundImage: `url(${resource.heroImage})` }}
        >
          <div className="rd-hero__overlay" />
        </div>

        {/* Content row: positioned over the bg, form overflows past it */}
        <div className="rd-hero__content">
          {/* Left: Category + Title */}
          <div className="rd-hero__text-col">
            <AnimatedSection animation="fade-in-left">
              <span className="rd-hero__category">{resource.category}</span>
              <h1 className="rd-hero__title">{resource.title}</h1>
            </AnimatedSection>
          </div>

          {/* Right: Download Form Card — overflows past hero */}
          <div className="rd-hero__form-col">
            <AnimatedSection animation="fade-in-right">
              <div className="rd-threat-bar">
                <i className="bi bi-file-earmark-text"></i>
                <span>{resource.resourceType}</span>
              </div>
              <div className="rd-form-card">
                <div className="rd-form-card__title-wrap">
                  <h3 className="rd-form-card__title">{resource.formTitle}</h3>
                </div>

                {submitted ? (
                  <div className="text-center py-4">
                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
                    <p className="text-white mt-3 mb-0">Thank you! Your download will begin shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="rd-form-group">
                      <label className="rd-form-label"><span className="rd-req">*</span>First Name</label>
                      <input type="text" className="rd-form-input" placeholder="First Name*" required />
                    </div>
                    <div className="rd-form-group">
                      <label className="rd-form-label"><span className="rd-req">*</span>Last Name</label>
                      <input type="text" className="rd-form-input" placeholder="Last Name*" required />
                    </div>
                    <div className="rd-form-group">
                      <label className="rd-form-label"><span className="rd-req">*</span>Company Name</label>
                      <input type="text" className="rd-form-input" placeholder="Company Name*" required />
                    </div>
                    <div className="rd-form-group">
                      <label className="rd-form-label"><span className="rd-req">*</span>Business Email</label>
                      <input type="email" className="rd-form-input" placeholder="Business Email*" required />
                    </div>
                    <div className="rd-form-group">
                      <label className="rd-form-label"><span className="rd-req">*</span>Job Title</label>
                      <input type="text" className="rd-form-input" placeholder="Job Title*" required />
                    </div>
                    <div className="rd-form-group">
                      <label className="rd-form-label"><span className="rd-req">*</span>State</label>
                      <select className="rd-form-input rd-form-select" required>
                        <option value="">Select...</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="rd-checkbox-row">
                      <input type="checkbox" id="agreeCheck" required />
                      <label htmlFor="agreeCheck">
                        *I agree to CyberPoint Security's{' '}
                        <a href="/terms">Terms of Service</a> and{' '}
                        <a href="/privacy">Privacy Policy</a>
                      </label>
                    </div>
                    <button type="submit" className="rd-btn-download">
                      {resource.submitText}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="rd-content bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <AnimatedSection animation="fade-in-left">
                {/* Social share icons */}
                <div className="d-flex gap-1 mb-4">
                  {resource.socialLinks.linkedin && (
                    <a href={resource.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="rd-social" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                  {resource.socialLinks.twitter && (
                    <a href={resource.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="rd-social" aria-label="X (Twitter)">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  )}
                  {resource.socialLinks.facebook && (
                    <a href={resource.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="rd-social" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                  )}
                </div>

                {/* Subtitle */}
                <h2 className="fw-normal mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#000' }}>
                  {resource.subtitle}
                </h2>

                {/* Body */}
                <p style={{ fontSize: '18px', lineHeight: '27px', color: '#000' }}>
                  {resource.body}
                </p>

                {/* Insights list */}
                <ul className="list-unstyled mt-4">
                  {resource.insights.map((item, i) => (
                    <li key={i} className="d-flex align-items-start gap-3 mb-4">
                      <span className="rd-check flex-shrink-0">
                        <i className="bi bi-shield-check"></i>
                      </span>
                      <span style={{ fontSize: '18px', lineHeight: '27px', color: '#000' }}>
                        <strong>{item.bold}</strong> {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Closing */}
                {resource.closing && (
                  <p className="mt-4" style={{ fontSize: '18px', lineHeight: '27px', color: '#000' }}>
                    {resource.closing}
                  </p>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
