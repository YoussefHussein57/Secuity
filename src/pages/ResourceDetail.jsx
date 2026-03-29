import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AnimatedSection from '../components/sections/AnimatedSection';
import resourceDetails from '../data/resourceDetails';

const US_STATES = [
  'AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','HI','ID','IL','IN',
  'IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH',
  'NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
  'VT','VA','WA','WV','WI','WY','International',
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
        <div
          className="rd-hero__bg"
          style={{ backgroundImage: `url(${resource.heroImage})` }}
        >
          <div className="rd-hero__overlay" />

        <div className="rd-hero__content">
          {/* Left: Category + Title */}
          <div className="rd-hero__text-col">
            <AnimatedSection animation="fade-in-left">
              <span className="rd-hero__category">{resource.category}</span>
              <h1 className="rd-hero__title">{resource.title}</h1>
            </AnimatedSection>
          </div>

          {/* Right: Form Card — overflows past hero into white section */}
          <div className="rd-hero__form-col">
            <AnimatedSection animation="fade-in-right">
              <div className="rd-threat-bar">
                <i className="bi bi-file-earmark-text"></i>
                <span>{resource.resourceType}</span>
              </div>
              <div className="rd-form-card">
                <div className="rd-form-card__title-wrap">
                  <h3 className="rd-form-card__title">{resource.formTitle}</h3>
                  {resource.formSubtitle && (
                    <p className="rd-form-card__subtitle">{resource.formSubtitle}</p>
                  )}
                </div>

                {submitted ? (
                  <div className="text-center py-4">
                    <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '3rem' }}></i>
                    <p className="text-white mt-3 mb-0">Thank you! Your request has been submitted.</p>
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
                        *I agree to CyberPoint Security&apos;s{' '}
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
        </div>{/* end __content */}
        </div>{/* end __bg */}
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="rd-content bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <AnimatedSection animation="fade-in-left">
                {/* Subtitle — 24px/400/black matching GuidePoint */}
                {resource.subtitle && (
                  <h2 className="fw-normal mb-4" style={{ fontSize: '24px', lineHeight: '35px', color: '#000' }}>
                    {resource.subtitle}
                  </h2>
                )}

                {/* Body — supports inline HTML bold via dangerouslySetInnerHTML */}
                {resource.bodyParagraphs
                  ? resource.bodyParagraphs.map((p, i) => (
                      <p key={i}
                        style={{ fontSize: '18px', lineHeight: '27px', color: '#000', marginBottom: '20px' }}
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))
                  : resource.body && (
                      <p style={{ fontSize: '18px', lineHeight: '27px', color: '#000', marginBottom: '20px' }}>
                        {resource.body}
                      </p>
                    )
                }

                {/* "In this session, you'll learn:" heading before bullets */}
                {resource.insightsHeading && (
                  <p style={{ fontSize: '18px', lineHeight: '27px', color: '#000', marginBottom: '16px' }}>
                    {resource.insightsHeading}
                  </p>
                )}

                {/* Insights list */}
                <ul className="list-unstyled mt-0">
                  {resource.insights.map((item, i) => (
                    <li key={i} className="d-flex align-items-start gap-3 mb-4">
                      <span className="rd-check flex-shrink-0">
                        <i className="bi bi-check-circle"></i>
                      </span>
                      <span style={{ fontSize: '18px', lineHeight: '27px', color: '#000' }}>
                        {item.bold && <strong>{item.bold}</strong>}
                        {item.bold ? ' ' : ''}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Closing */}
                {resource.closing && (
                  <p style={{ fontSize: '18px', lineHeight: '27px', color: '#000', marginBottom: '20px' }}>
                    {resource.closing}
                  </p>
                )}

                {/* GRIT Presenters list (webinar only) */}
                {resource.presentersList && (
                  <div className="mt-2">
                    <p style={{ fontSize: '18px', lineHeight: '27px', color: '#000', marginBottom: '16px' }}>
                      GRIT Presenters:
                    </p>
                    <ul className="list-unstyled">
                      {resource.presentersList.map((p, i) => (
                        <li key={i} className="d-flex align-items-start gap-3 mb-3">
                          <span className="rd-check flex-shrink-0">
                            <i className="bi bi-check-circle"></i>
                          </span>
                          <span style={{ fontSize: '18px', lineHeight: '27px', color: '#000' }}>
                            <strong>{p.name}</strong> &ndash; {p.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Social share icons — after all content */}
                <div className="d-flex gap-1 mt-4">
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
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MEET OUR PRESENTERS (webinar only) ===== */}
      {resource.presenters && (
        <section className="rd-meet-presenters">
          <div className="container">
            <AnimatedSection animation="fade-in-left">
              <div className="rd-meet-presenters__heading-wrap text-center mb-5">
                <h2 className="rd-meet-presenters__heading">Meet Our Presenters</h2>
              </div>
              <div className="row justify-content-center g-4">
                {resource.presenters.map((p, i) => (
                  <div key={i} className="col-12 col-md-6 col-lg-3">
                    <div className="rd-presenter-card text-center">
                      <div className="rd-presenter-card__photo-wrap">
                        <img
                          src={p.photo}
                          alt={p.name}
                          className="rd-presenter-card__photo"
                        />
                      </div>
                      <p className="rd-presenter-card__name mb-0">{p.name}</p>
                      <p className="rd-presenter-card__role mb-0">{p.role}</p>
                      <p className="rd-presenter-card__company mb-0">{p.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
}
