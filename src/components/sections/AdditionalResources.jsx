import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const DEFAULT_RESOURCES = [
  { type: 'Video', icon: 'bi-play-btn-fill', action: 'Watch Now', title: 'Customer Success Story: Wyndham Hotels & Resorts' },
  { type: 'Customer Success', icon: 'bi-globe2', action: 'Download', title: 'Customer Success Story: Wyndham Hotels' },
  { type: 'Ebook', icon: 'bi-file-earmark-text-fill', action: 'Download', title: 'Is Your Cloud Security Up to the Task? Secure Your Remote Workforce in the AWS Cloud.' },
  { type: 'Datasheet', icon: 'bi-file-earmark-bar-graph-fill', action: 'Download', title: 'Cyber Security Overview' },
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
            <h2 className="additional-resources__title text-underline-accent">
              Additional Resources
            </h2>
            <Link to="/resources" className="additional-resources__view-all">
              View All &gt;
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
                <div className="resource-slide__badge">
                  <i className={`bi ${r.icon}`}></i>
                  {r.type}
                </div>
                {r.image && (
                  <div className="resource-slide__image">
                    <img src={r.image} alt={r.title} />
                  </div>
                )}
                <div className="resource-slide__body">
                  <div className="resource-slide__icon-circle">
                    <i className={`bi ${r.icon}`}></i>
                  </div>
                  <div className="resource-slide__content">
                    <p className="resource-slide__action">{r.action}</p>
                    <p className="resource-slide__title">{r.title}</p>
                  </div>
                </div>
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
