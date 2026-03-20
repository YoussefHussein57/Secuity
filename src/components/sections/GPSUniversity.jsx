import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import NetworkBackground from './NetworkBackground';

export default function GPSUniversity({ showOurPeople = true }) {
  return (
    <section className="section section--indigo-light position-relative">
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <AnimatedSection animation="fade-in-left">
              <img
                src="https://www.guidepointsecurity.com/wp-content/uploads/2022/04/GuidePoint-University_horizontal-gradient-tag-white-text_1164x326-RGB-1024x287.png"
                alt="GuidePoint Security University"
                className="mb-4"
                style={{ maxWidth: 380, width: '100%' }}
              />
              <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                Does your future ambition include a career in cybersecurity? As an
                intern at Security University, you&apos;ll experience a supportive, tight knit
                community of industry-leading practitioners with real-world experience
                serving as your instructors, a broad range of courses tailored to meet
                your interests and a flexible course schedule. If your idea of a campus
                is a lab in a sandbox environment, <Link to="/contact" style={{ color: '#10FBEA', textDecoration: 'none' }}>check us out</Link>.
              </p>
            </AnimatedSection>
          </div>
          <div className="col-lg-6">
            <AnimatedSection animation="fade-in-right">
              <div className="ratio ratio-16x9 overflow-hidden">
                <img
                  src="https://embed-ssl.wistia.com/deliveries/a7d1493e17a7de0952f037070dd8375c.webp?image_crop_resized=1920x1080"
                  alt="GPSU Video"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {showOurPeople && (
          <div className="row g-5 align-items-center mt-5 pt-5">
            <div className="col-lg-6 order-lg-2">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-header__title text-white mb-3">
                  Our People Make the Difference
                </h2>
                <p className="text-white mb-4" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Our employees are the lifeblood of our organization, using their creativity
                  and talent to invent new offerings, meet ever-changing demands and offer
                  effective cybersecurity solutions to our customers. We&apos;re always looking
                  to add to our team.
                </p>
                <p className="text-white mb-4" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Think you are a fit?
                </p>
                <Link to="/company/careers" className="btn btn-accent btn-lg">
                  Join Our Team
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 order-lg-1">
              <AnimatedSection animation="fade-in-left">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2026/03/CKO-2026-GuidePoint-Team-1024x856.jpeg"
                    alt="Our Team"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
