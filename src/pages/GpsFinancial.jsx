import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';

const benefits = [
  'Work with your Trusted GuidePoint Partner throughout the lifecycle of the transaction',
  'Secure multi-year discounts without having to pay upfront, resulting in a lower cost of acquisition',
  'Competitive financing with 0% interest on certain purchases (ask your Account Executive for qualifying purchases)',
  'Invoicing from GPSF throughout the life of the loan with flexible payment options available',
];

export default function GpsFinancial() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        label="OVERVIEW"
        title="GuidePoint Security Financial"
        ctaText=""
        variant="service"
        showNetwork={false}
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2021/09/GPS_Financial_FEATURED_Image_2000x675.jpg"
        className="gpsf-hero"
      />

      {/* ===== MAIN CONTENT ===== */}
      <section className="gpsf-content">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="gpsf-content__body">
              <h2 className="gpsf-content__heading">
                Simplify Purchasing with Flexible Financing Options for Hardware, Software, Services & Support
              </h2>

              <p className="gpsf-content__text">
                GPSF is GuidePoint Security's in-house financing subsidiary that is an integral part of a total solution for acquiring, implementing and paying for your trusted cybersecurity products and services.
              </p>

              <p className="gpsf-content__text">
                Flexible financing options are available and designed to provide you with the lowest total acquisition price, based on your underlying budgetary, accounting and operational requirements. Financing is available for multi-year software deals, equipment purchases or leases, maintenance and support and vendor delivered services.
              </p>

              <h4 className="gpsf-content__subheading">Benefits:</h4>

              <ul className="gpsf-content__benefits">
                {benefits.map((item, i) => (
                  <li className="gpsf-content__benefit-item" key={i}>
                    <i className="bi bi-check-circle gpsf-content__check-icon"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.guidepointsecurity.com/wp-content/uploads/2021/09/GuidePoint-Security-Financial_GPSF_DS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Download Data Sheet
              </a>

              <div className="gpsf-content__social">
                <a href="https://www.linkedin.com/company/guidepointsec" target="_blank" rel="noopener noreferrer" className="gpsf-content__social-btn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com/GuidePointSec" target="_blank" rel="noopener noreferrer" className="gpsf-content__social-btn">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://www.facebook.com/GuidePointSec" target="_blank" rel="noopener noreferrer" className="gpsf-content__social-btn">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
