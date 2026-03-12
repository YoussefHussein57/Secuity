import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const DEFAULT_RESOURCES = [
  { type: 'Data Sheet', color: '#4b4fff', icon: 'bi-file-earmark-text-fill', action: 'Download', title: 'Corporate Overview Data Sheet' },
  { type: 'Blog', color: '#00ccff', icon: 'bi-journal-richtext', action: 'Read More', title: 'Cybersecurity Insights and Best Practices' },
  { type: 'Blog', color: '#00ccff', icon: 'bi-journal-richtext', action: 'Read More', title: 'Securing Your Enterprise Against Modern Threats' },
  { type: 'Report', color: '#8b5cf6', icon: 'bi-bar-chart-fill', action: 'Download', title: 'GRIT Ransomware Taxonomy and Lifecycle' },
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
              <div className={`resource-slide${r.image ? ' resource-slide--has-image' : ''}`} key={i}>
                <div className="resource-slide__badge" style={{ background: r.color }}>
                  {r.type}
                </div>
                {r.image ? (
                  <div className="resource-slide__image">
                    <img src={r.image} alt={r.title} />
                  </div>
                ) : (
                  <div className="resource-slide__icon">
                    <i className={`bi ${r.icon}`}></i>
                  </div>
                )}
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
