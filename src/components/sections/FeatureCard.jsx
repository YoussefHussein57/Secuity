export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="card-feature">
      <div className="card-feature__icon">
        <i className={`bi ${icon}`}></i>
      </div>
      <h5 className="fw-bold mb-2">{title}</h5>
      <p className="text-muted mb-0">{description}</p>
    </div>
  );
}
