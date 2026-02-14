import { Link } from 'react-router-dom';

export default function ResourceCard({ image, badge, title, date, link, ctaText = 'Read More' }) {
  return (
    <div className="card card-resource shadow-sm h-100">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        {badge && (
          <span className="badge bg-primary-subtle text-primary card-resource__badge mb-2">
            {badge}
          </span>
        )}
        <h6 className="fw-bold mb-2">{title}</h6>
        {date && <small className="text-muted mb-3">{date}</small>}
        <Link to={link} className="btn btn-outline-primary btn-sm rounded-pill mt-auto btn-cta">
          {ctaText} <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
