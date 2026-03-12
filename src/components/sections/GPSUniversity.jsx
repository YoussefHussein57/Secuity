import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import NetworkBackground from './NetworkBackground';

export default function GPSUniversity() {
  return (
    <section className="section section--indigo-light position-relative">
      <NetworkBackground variant="dark" nodeCount={15} />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <AnimatedSection animation="fade-in-left">
              <h2 className="section-header__title text-white mb-3">
                Security University (GPSU)
              </h2>
              <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                Does your future ambition include a career in cybersecurity?
              </p>
              <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                Our Security University interns experience a supportive, tight-knit
                community of industry-leading practitioners with real-world experience
                serving as instructors and a broad range of courses tailored to meet your
                interests.
              </p>
              <p className="text-white-50 mb-4" style={{ lineHeight: 1.8 }}>
                Check us out if your idea of a campus is a lab in a sandbox environment.
              </p>
              <Link to="/contact" className="btn btn-accent btn-cta">
                Explore GPSU Opportunities <i className="bi bi-arrow-right"></i>
              </Link>
            </AnimatedSection>
          </div>
          <div className="col-lg-6">
            <AnimatedSection animation="fade-in-right">
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                <img
                  src="/placeholder-video.svg"
                  alt="GPS University Video"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Our People — second row inside GPSU section */}
        <div className="row g-5 align-items-center mt-5 pt-5">
          <div className="col-lg-6 order-lg-2">
            <AnimatedSection animation="fade-in-right">
              <h2 className="section-header__title text-white mb-3">
                Our People Make the Difference
              </h2>
              <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                Our employees are the lifeblood of our organization, using their creativity
                and talent to invent new solutions, meet new demands and offer the most
                effective results in the industry. We like to think of ourselves as a team
                of intelligent, passionate and innovative experts.
              </p>
              <p className="text-white-50 mb-4">Think you are a fit?</p>
              <Link to="/company/careers" className="btn btn-accent btn-cta">
                Join Our Team <i className="bi bi-arrow-right"></i>
              </Link>
            </AnimatedSection>
          </div>
          <div className="col-lg-6 order-lg-1">
            <AnimatedSection animation="fade-in-left">
              <div className="rounded-3 overflow-hidden">
                <img
                  src="/team-photo.jpeg"
                  alt="Our Team"
                  className="w-100"
                  style={{ height: 350, objectFit: 'contain' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
