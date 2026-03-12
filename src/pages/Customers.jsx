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
        label="Our Customers"
        title="Working with Cyber Security"
        highlightWord="Cyber Security"
        highlightStyle="gradient"
        subtitle="Learn from your peers about the value of working with a trusted advisor."
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        bgImage="/hero-customers.png"
        variant="page"
      />

      {/* ===== CUSTOMER CARDS ===== */}
      <section className="section section--dark customers-section">
        <div className="container">
          {/* Row chunks of 3 */}
          {Array.from({ length: Math.ceil(customers.length / 3) }).map((_, rowIdx) => (
            <AnimatedSection
              animation="stagger-children"
              className="row g-4 mb-5"
              key={rowIdx}
            >
              {customers.slice(rowIdx * 3, rowIdx * 3 + 3).map((customer) => (
                <div className="col-lg-4 col-md-6" key={customer.id}>
                  <div className="customer-card">
                    {/* Logo or Title */}
                    <div className="customer-card__logo-area">
                      {customer.logo ? (
                        <img
                          src={customer.logo}
                          alt={customer.logoAlt}
                          className="customer-card__logo"
                        />
                      ) : (
                        <h4 className="customer-card__title">{customer.title}</h4>
                      )}
                    </div>

                    {/* Description */}
                    <p className="customer-card__desc">{customer.description}</p>

                    {/* Buttons */}
                    <div className="customer-card__actions">
                      {customer.hasVideo && (
                        <button className="btn btn-customer-video" type="button">
                          <i className="bi bi-play-fill me-1"></i>
                          Watch Video
                        </button>
                      )}
                      {customer.hasCaseStudy && (
                        <Link
                          to={customer.caseStudyUrl || '/resources'}
                          className="btn btn-customer-study"
                        >
                          <i className="bi bi-file-earmark-text me-1"></i>
                          View Case Study
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIAL SLIDER ===== */}
      <section className="section customers-testimonials">
        <div className="container">
          <div className="testimonial-slider">
            <button
              className="testimonial-slider__arrow testimonial-slider__arrow--prev"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <div className="testimonial-slider__content">
              <AnimatedSection animation="animate-on-scroll" key={activeSlide}>
                <blockquote className="testimonial-slider__quote">
                  &ldquo;{testimonials[activeSlide].quote}&rdquo;
                </blockquote>
                <p className="testimonial-slider__author">
                  {testimonials[activeSlide].author} &mdash;{' '}
                  {testimonials[activeSlide].title}
                </p>
                <span className="testimonial-slider__count">
                  {activeSlide + 1}/{testimonials.length}
                </span>
              </AnimatedSection>
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
