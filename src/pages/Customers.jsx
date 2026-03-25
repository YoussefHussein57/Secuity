import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import { customers, testimonials } from '../data/customers';

export default function Customers() {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        label="OUR CUSTOMERS"
        title="Working with Cyber Security"
        highlightWord="Cyber Security"
        highlightStyle="gradient"
        subtitle="Learn from your peers about the value of working with a trusted advisor."
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        variant="page"
        showNetwork={false}
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Endpoint_Security.png"
        className="customers-hero"
      />

      {/* ===== CUSTOMER CARDS ===== */}
      <section className="section section--dark customers-section">
        <div className="container">
          <div className="customers-grid">
            {customers.map((customer) => (
              <AnimatedSection animation="animate-on-scroll" key={customer.id}>
                <div className="customer-card">
                  <div className="customer-card__logo-area">
                    {customer.logo ? (
                      <img
                        src={customer.logo}
                        alt={customer.logoAlt}
                        className="customer-card__logo"
                      />
                    ) : (
                      <h3 className="customer-card__title">{customer.title}</h3>
                    )}
                  </div>

                  <p className="customer-card__desc">{customer.description}</p>

                  <div className="customer-card__actions">
                    {customer.hasVideo && (
                      <Link
                        to={customer.caseStudyUrl || '/company/customers'}
                        className="btn btn-accent"
                      >
                        Watch Video
                      </Link>
                    )}
                    {customer.hasCaseStudy && customer.caseStudyPdf && (
                      <a
                        href={customer.caseStudyPdf}
                        className="btn btn-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Case Study
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL SLIDER ===== */}
      <section className="customers-testimonials">
        <div className="container">
          <div className="testimonial-slider">
            <button
              className="testimonial-slider__arrow testimonial-slider__arrow--prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="testimonial-slider__content" key={activeSlide}>
              <blockquote className="testimonial-slider__quote">
                &ldquo;{testimonials[activeSlide].quote}&rdquo;
              </blockquote>
              <span className="testimonial-slider__tag">
                {testimonials[activeSlide].author} &ndash; {testimonials[activeSlide].title}
              </span>
              <span className="testimonial-slider__count">
                {activeSlide + 1}/{testimonials.length}
              </span>
            </div>

            <button
              className="testimonial-slider__arrow testimonial-slider__arrow--next"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
