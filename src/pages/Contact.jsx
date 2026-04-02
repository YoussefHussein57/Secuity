import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import BeInformed from '../components/sections/BeInformed';
import Certifications from '../components/sections/Certifications';


const offices = [
  { city: 'Headquarters – Reston, VA', address: '1900 Reston Metro Plaza, Suite 701, Reston, VA 20190' },
  { city: 'Tampa, FL', address: '3030 N Rocky Point Dr W, Ste 600, Tampa, FL 33607' },
  { city: 'Hinsdale, IL', address: '330 West Chestnut Street, Unit 1E, Hinsdale, IL 60521' },
  { city: 'New York, NY', address: '250 West 34th Street, 3rd Floor, New York, NY 10119' },
  { city: 'Fishers, IN', address: '8701 East 116th Street, Suite 210, Fishers, IN 46038' },
  { city: 'Norwood, OH', address: '4600 Beech Street, Suite 200, Norwood, Ohio, 45212' },
  { city: 'Frisco, TX', address: '17 Cowboys Way, Suite 150 Frisco, TX 75034' },
];

export default function Contact() {
  return (
    <>
      <Hero
        title="Talk to an Expert"
        highlightWord="Talk"
        subtitle="Learn How We Can Help You Address Your Unique Cybersecurity Challenges"
        variant="page"
        ctaText=""
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2021/07/Website_Refresh_Services_MAIN_Cloud_Security.png"
        showNetwork={false}
      />

      {/* ===== FORM SECTION — Dark ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={30} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="fade-in-left">
            <div className="contact-form">
              <h2 className="contact-form__heading">Have a Question?</h2>
              <div className="gradient-underline" />

              <form>
                <div className="mb-3">
                  <label className="form-label">
                    <span className="required-mark">*</span>First Name
                  </label>
                  <input type="text" className="form-control form-control-lg" placeholder="First Name*" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <span className="required-mark">*</span>Last Name
                  </label>
                  <input type="text" className="form-control form-control-lg" placeholder="Last Name*" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <span className="required-mark">*</span>Company Name
                  </label>
                  <input type="text" className="form-control form-control-lg" placeholder="Company Name*" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <span className="required-mark">*</span>Business Email
                  </label>
                  <input type="email" className="form-control form-control-lg" placeholder="Business Email*" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control form-control-lg" placeholder="Phone Number" />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <span className="required-mark">*</span>How Can We Help?
                  </label>
                  <textarea className="form-control form-control-lg" rows="4" required placeholder="Tell us about your cybersecurity challenges..."></textarea>
                </div>
                <button type="submit" className="btn btn-accent w-100 btn-cta">
                  Submit <i className="bi bi-arrow-right"></i>
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== LOCATIONS SECTION — Indigo ===== */}
      <section className="section section--indigo position-relative">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="fade-in-left">
            <h2 className="section-header__title text-white mb-5">Locations</h2>

            <div className="locations-grid">
              <div className="row g-0">
                {offices.map((o) => (
                  <div className="col-md-6" key={o.city}>
                    <div className="locations-grid__item">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="locations-grid__city">{o.city}</h6>
                          <p className="locations-grid__address">{o.address}</p>
                        </div>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(o.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="locations-grid__link d-flex align-items-center gap-1"
                        >
                          <i className="bi bi-geo-alt"></i>
                          View Map
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== REPORT INCIDENT — Accent ===== */}
      <section className="section section--dark position-relative text-center">
        <div className="container position-relative pt-5" style={{ zIndex: 2 }}>
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="section-header__title text-white mb-4">
              Have an issue that needs{' '}
              <span className="text-highlight-gradient">immediate</span>{' '}
              attention?
            </h2>
            <Link to="/report-incident" className="btn btn-accent btn-cta">
              Report an Incident <i className="bi bi-arrow-right"></i>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Certifications variant="centered" />

      <BeInformed />
    </>
  );
}
