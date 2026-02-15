import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quickLinks = [
  { label: 'Why Us', path: '/company' },
  { label: 'University', path: '/university' },
  { label: 'Careers', path: '/company/careers' },
  { label: 'Contact Us', path: '/contact' },
];

const serviceLinks = [
  { label: 'Cloud Security', path: '/services/cloud-security' },
  { label: 'Managed Security', path: '/services/managed-security' },
  { label: 'Incident Response', path: '/services/incident-response' },
  { label: 'GRC', path: '/services/grc' },
  { label: 'IAM', path: '/services/iam' },
  { label: 'All Services', path: '/services' },
];

const socialLinks = [
  { icon: 'bi-linkedin', url: '#', label: 'LinkedIn' },
  { icon: 'bi-twitter-x', url: '#', label: 'X / Twitter' },
  { icon: 'bi-facebook', url: '#', label: 'Facebook' },
  { icon: 'bi-youtube', url: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Brand + Contact */}
          <div className="col-lg-4">
            <div className="footer__brand">
              <img src={logo} alt="Logo" />
            </div>
            <p className="small mb-2">
              1900 Reston Metro Plaza, Suite 701
              <br />
              Reston, VA 20190
            </p>
            <p className="small mb-3">
              <i className="bi bi-telephone me-2"></i>(877) 889-0132
            </p>
            <div className="footer__social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.url} aria-label={s.label}>
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-lg-2">
            <h6 className="footer__heading">Company</h6>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-3">
            <h6 className="footer__heading">Services</h6>
            <ul className="footer__links">
              {serviceLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3">
            <h6 className="footer__heading">Stay Updated</h6>
            <p className="small">Get the latest cybersecurity insights.</p>
            <form className="d-flex gap-2">
              <input
                type="email"
                className="form-control form-control-sm bg-transparent text-white border-secondary"
                placeholder="Your email"
              />
              <button type="submit" className="btn btn-primary btn-sm px-3">
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom mt-5 d-flex flex-wrap justify-content-between align-items-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
          <div className="d-flex gap-3">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
