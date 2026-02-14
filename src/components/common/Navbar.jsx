import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const navItems = [
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Application Security', path: '/services/application-security' },
      { label: 'AI Security', path: '/services/ai-security' },
      { label: 'Cloud Security', path: '/services/cloud-security' },
      { label: 'Data Security & Privacy', path: '/services/data-security' },
      { label: 'Email Security', path: '/services/email-security' },
      { label: 'Endpoint Security', path: '/services/endpoint-security' },
      { label: 'GRC', path: '/services/grc' },
      { label: 'Identity & Access Management', path: '/services/iam' },
      { label: 'Incident Response', path: '/services/incident-response' },
      { label: 'Managed Security', path: '/services/managed-security' },
      { label: 'Network Security', path: '/services/network-security' },
      { label: 'OT / IoT Security', path: '/services/ot-security' },
      { label: 'Security Awareness', path: '/services/security-awareness' },
      { label: 'SOC Services', path: '/services/soc' },
      { label: 'Staff Augmentation', path: '/services/staff-augmentation' },
      { label: 'Vulnerability Management', path: '/services/vulnerability-management' },
    ],
  },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Government', path: '/government' },
  {
    label: 'Company',
    path: '/company',
    dropdown: [
      { label: 'About Us', path: '/company' },
      { label: 'Leadership', path: '/company/leadership' },
      { label: 'Careers', path: '/company/careers' },
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    dropdown: [
      { label: 'Resource Library', path: '/resources' },
      { label: 'Blog', path: '/resources/blog' },
      { label: 'Events', path: '/resources/events' },
      { label: 'Webinars', path: '/resources/webinars' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-main ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo-white.svg" alt="Cyber" height="40" />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <li className="nav-item dropdown" key={item.label}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu">
                    {item.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <Link className="dropdown-item" to={sub.path}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={item.label}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}

            <li className="nav-item ms-lg-3">
              <Link
                to="/report-incident"
                className="nav-link"
                style={{ color: '#f87171' }}
              >
                <i className="bi bi-shield-exclamation me-1"></i>
                Report Incident
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link
                to="/contact"
                className="btn btn-accent btn-sm rounded-pill px-3"
              >
                Talk to an Expert
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
