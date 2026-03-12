import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServiceAccordion({ services }) {
  const [openIndex, setOpenIndex] = useState(null);
  const half = Math.ceil(services.length / 2);
  const leftCol = services.slice(0, half);
  const rightCol = services.slice(half);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const renderItem = (s, i) => {
    const isOpen = openIndex === i;
    return (
      <div className={`service-accordion__item ${isOpen ? 'service-accordion__item--open' : ''}`} key={s.title}>
        <button className="service-accordion__header" onClick={() => toggle(i)}>
          <span className="service-accordion__icon">
            <i className={`bi ${s.icon}`}></i>
          </span>
          <span className="service-accordion__title">{s.title}</span>
          <span className="service-accordion__toggle">
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-plus'}`}></i>
          </span>
        </button>
        <div className={`service-accordion__body ${isOpen ? 'service-accordion__body--open' : ''}`}>
          <p>{s.description}</p>
          <Link to={s.path} className="btn btn-outline-light btn-sm">
            Read More
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="row g-4">
      <div className="col-lg-6">
        {leftCol.map((s, i) => renderItem(s, i))}
      </div>
      <div className="col-lg-6">
        {rightCol.map((s, i) => renderItem(s, i + half))}
      </div>
    </div>
  );
}
