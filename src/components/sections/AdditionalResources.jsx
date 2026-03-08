import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const DEFAULT_RESOURCES = [
  { type: 'VIDEO', color: '#e74c3c', icon: 'bi-play-circle-fill', action: 'Watch Now', title: 'On-Demand Webinar: Securing Your Applications in a Cloud-Native World' },
  { type: 'CUSTOMER SUCCESS', color: '#00ccff', icon: 'bi-person-check-fill', action: 'Download', title: 'How a Fortune 500 Company Transformed Their Security Posture' },
  { type: 'EBOOK', color: '#4b4fff', icon: 'bi-book-fill', action: 'Download', title: 'The Definitive Guide to Building a Mature Cybersecurity Program' },
  { type: 'WHITEPAPER', color: '#8b5cf6', icon: 'bi-file-earmark-text-fill', action: 'Download', title: 'Zero Trust Architecture: Implementation Strategies for Modern Enterprises' },
  { type: 'VIDEO', color: '#e74c3c', icon: 'bi-play-circle-fill', action: 'Watch Now', title: 'Panel Discussion: Threat Intelligence and Incident Response Best Practices' },
];

export default function AdditionalResources({ resources = DEFAULT_RESOURCES }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: 'smooth' });
    setTimeout(updateScrollState, 400);
  };

  return (
    <section className="section section--indigo additional-resources">
      <div className="container">
        <AnimatedSection animation="animate-on-scroll">
          <div className="additional-resources__header">
            <h2 className="additional-resources__title">
              Additional <span className="text-underline-accent">Resources</span>
            </h2>
            <Link to="/resources" className="additional-resources__view-all">
              View All <i className="bi bi-chevron-right"></i>
            </Link>
          </div>
        </AnimatedSection>

        <div className="additional-resources__carousel-wrap">
          {canScrollLeft && (
            <button className="carousel-arrow carousel-arrow--left" onClick={() => scroll(-1)} aria-label="Previous">
              <i className="bi bi-chevron-left"></i>
            </button>
          )}
          <div className="additional-resources__track" ref={scrollRef} onScroll={updateScrollState}>
            {resources.map((r, i) => (
              <div className="resource-slide" key={i}>
                <div className="resource-slide__badge" style={{ background: r.color }}>
                  {r.type}
                </div>
                <div className="resource-slide__icon">
                  <i className={`bi ${r.icon}`}></i>
                </div>
                <p className="resource-slide__action">{r.action} <i className="bi bi-chevron-right"></i></p>
                <p className="resource-slide__title">{r.title}</p>
              </div>
            ))}
          </div>
          {canScrollRight && (
            <button className="carousel-arrow carousel-arrow--right" onClick={() => scroll(1)} aria-label="Next">
              <i className="bi bi-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
