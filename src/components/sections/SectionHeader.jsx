import { Link } from 'react-router-dom';

export default function SectionHeader({ label, title, subtitle, center = false, ctaText, ctaLink }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      {label && <p className="section-header__label">{label}</p>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
      {ctaText && ctaLink && (
        <Link to={ctaLink} className="btn btn-accent btn-cta mt-3">
          {ctaText} <i className="bi bi-arrow-right"></i>
        </Link>
      )}
    </div>
  );
}
