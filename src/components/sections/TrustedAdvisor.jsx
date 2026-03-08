import AnimatedSection from './AnimatedSection';

export default function TrustedAdvisor({ testimonial }) {
  return (
    <section className="section section--indigo-light">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left — Title + Testimonial */}
          <div className="col-lg-7">
            <AnimatedSection animation="fade-in-left">
              <h2 className="trusted-advisor__title">
                Your <span className="text-accent-box">Trusted Advisor</span>
              </h2>
              <p className="text-white-50 mb-5">
                Our team works side-by-side with you as your cybersecurity partner.
              </p>

              {testimonial && (
                <div className="testimonial-card">
                  <div className="testimonial-card__quote-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <div className="testimonial-card__body">
                    <p className="testimonial-card__text">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="testimonial-card__author">
                      <div>
                        <p className="fw-bold mb-0">{testimonial.author}</p>
                        <small className="text-muted">{testimonial.company}</small>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>

          {/* Right — Contact Form */}
          <div className="col-lg-5">
            <AnimatedSection animation="fade-in-right">
              <div className="contact-form-card">
                <div className="contact-form-card__header">
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>GET IN TOUCH</span>
                </div>
                <div className="contact-form-card__body">
                  <h4 className="fw-bold mb-4">Contact Us</h4>
                  <form>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">First Name</label>
                      <input type="text" className="form-control" placeholder="First Name*" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name*" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Company Name</label>
                      <input type="text" className="form-control" placeholder="Company Name*" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Business Email</label>
                      <input type="email" className="form-control" placeholder="Business Email*" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label small fw-bold">Phone Number</label>
                      <input type="tel" className="form-control" placeholder="*Phone Number" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label small fw-bold">State</label>
                      <select className="form-select">
                        <option>Select...</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-accent btn-cta w-100">
                      CONTACT US
                    </button>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
