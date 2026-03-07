import { Link } from 'react-router-dom';
import NetworkBackground from '../components/sections/NetworkBackground';

export default function NotFound() {
  return (
    <section className="section section--dark text-center" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <NetworkBackground variant="dark" nodeCount={30} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1
          className="fw-bold mb-3"
          style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: 'clamp(5rem, 10vw, 10rem)',
            background: 'linear-gradient(135deg, #4b4fff, #00ccff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2 className="text-white fw-bold mb-3" style={{ fontFamily: "'Exo 2', sans-serif" }}>
          Page Not Found
        </h2>
        <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 500 }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-accent btn-lg btn-cta px-4">
            Back to Home <i className="bi bi-arrow-right"></i>
          </Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg btn-cta px-4">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
