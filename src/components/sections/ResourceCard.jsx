import { Link } from 'react-router-dom';

export default function ResourceCard({ image, badge, title, date, link, ctaText = 'Read More' }) {
  return (
    <div className="resource-card">
      {badge && (
        <div className="resource-card__badge">
          <h3>{badge}</h3>
        </div>
      )}
      {image && <img src={image} className="resource-card__image" alt={title} />}
      <div className="resource-card__body">
        <h4 className="resource-card__title">{title}</h4>
        <Link to={link} className="resource-card__btn">
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
