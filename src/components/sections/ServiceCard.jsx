import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, path }) {
  return (
    <Link to={path} className="card-service text-decoration-none">
      <div className="card-service__icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <h6 className="card-service__title mb-0">{title}</h6>
    </Link>
  );
}
