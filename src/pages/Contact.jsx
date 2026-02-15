import Hero from '../components/sections/Hero';

export default function Contact() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Talk to a cybersecurity expert today."
        variant="page"
        ctaText=""
      />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-7">
              <h3 className="fw-bold mb-4">Talk to an Expert</h3>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last Name *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Business Email *</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Company *</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Area of Interest</label>
                    <select className="form-select">
                      <option value="">Select...</option>
                      <option>Cloud Security</option>
                      <option>Managed Security</option>
                      <option>Incident Response</option>
                      <option>GRC</option>
                      <option>IAM</option>
                      <option>Vulnerability Management</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg btn-cta">
                      Submit <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="col-lg-5">
              <div className="bg-light rounded-4 p-4 p-lg-5">
                <h5 className="fw-bold mb-4">Get in Touch</h5>
                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-geo-alt text-primary me-2"></i>Office
                  </h6>
                  <p className="text-muted mb-0">
                    1900 Reston Metro Plaza, Suite 701
                    <br />
                    Reston, VA 20190
                  </p>
                </div>
                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-telephone text-primary me-2"></i>Phone
                  </h6>
                  <p className="text-muted mb-0">(877) 889-0132</p>
                </div>
                <div className="mb-4">
                  <h6 className="fw-bold">
                    <i className="bi bi-envelope text-primary me-2"></i>Email
                  </h6>
                  <p className="text-muted mb-0">info@company.com</p>
                </div>
                <hr />
                <div>
                  <h6 className="fw-bold text-danger">
                    <i className="bi bi-shield-exclamation me-2"></i>Report an Incident
                  </h6>
                  <p className="text-muted small">
                    Need immediate help with a security incident? Our response team is available 24/7.
                  </p>
                  <a href="tel:8778890132" className="btn btn-outline-danger btn-sm">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
