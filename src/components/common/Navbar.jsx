import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.png';

const serviceColumns = [
  {
    heading: 'Offensive Security',
    items: [
      { icon: 'bi-diamond', label: 'Application Security', path: '/services/application-security' },
      { icon: 'bi-activity', label: 'Vulnerability Management', path: '/services/vulnerability-management' },
      { icon: 'bi-exclamation-triangle', label: 'Incident Response', path: '/services/incident-response' },
      { icon: 'bi-mortarboard', label: 'Security Awareness', path: '/services/security-awareness' },
    ],
  },
  {
    heading: 'Defensive Security',
    items: [
      { icon: 'bi-cloud', label: 'Cloud Security', path: '/services/cloud-security' },
      { icon: 'bi-pencil', label: 'Endpoint Security', path: '/services/endpoint-security' },
      { icon: 'bi-envelope-check', label: 'Email Security', path: '/services/email-security' },
      { icon: 'bi-hdd-network', label: 'Network Security', path: '/services/network-security' },
      { icon: 'bi-database', label: 'Data Security', path: '/services/data-security' },
    ],
  },
  {
    heading: 'Governance & Operations',
    items: [
      { icon: 'bi-check2-square', label: 'GRC', path: '/services/grc' },
      { icon: 'bi-fingerprint', label: 'IAM', path: '/services/iam' },
      { icon: 'bi-globe2', label: 'SOC Services', path: '/services/soc' },
      { icon: 'bi-shield-lock', label: 'Managed Security', path: '/services/managed-security' },
    ],
  },
  {
    heading: 'Specialized',
    items: [
      { icon: 'bi-cpu', label: 'AI Security', path: '/services/ai-security' },
      { icon: 'bi-gear-wide-connected', label: 'OT / IoT Security', path: '/services/ot-security' },
      { icon: 'bi-person-plus', label: 'Staff Augmentation', path: '/services/staff-augmentation' },
    ],
  },
];

const companyItems = [
  { icon: 'bi-building', label: 'About Us', path: '/company', desc: 'Our mission, values, and story' },
  { icon: 'bi-people', label: 'Leadership', path: '/company/leadership', desc: 'Meet our executive team' },
  { icon: 'bi-briefcase', label: 'Careers', path: '/company/careers', desc: 'Join our growing team' },
];

const resourceItems = [
  { icon: 'bi-journal-text', label: 'Resource Library', path: '/resources', desc: 'Reports, whitepapers & more' },
  { icon: 'bi-pencil-square', label: 'Blog', path: '/resources/blog', desc: 'Latest insights & analysis' },
  { icon: 'bi-calendar-event', label: 'Events', path: '/resources/events', desc: 'Conferences & meetups' },
  { icon: 'bi-camera-video', label: 'Webinars', path: '/resources/webinars', desc: 'On-demand & live sessions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on link click
  const closeMega = () => {
    document.querySelectorAll('.mega-dropdown.show').forEach((el) => {
      el.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach((el) => {
      el.setAttribute('aria-expanded', 'false');
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-main ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Cyber" height="40" />
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

            {/* ===== SERVICES MEGA MENU ===== */}
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu mega-menu mega-menu--services">
                <div className="container">
                  <div className="row">
                    {serviceColumns.map((col) => (
                      <div className="col-lg-3" key={col.heading}>
                        <h6 className="mega-menu__heading">{col.heading}</h6>
                        <ul className="list-unstyled">
                          {col.items.map((item) => (
                            <li key={item.path}>
                              <Link className="mega-menu__link" to={item.path} onClick={closeMega}>
                                <i className={`bi ${item.icon} mega-menu__icon`}></i>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mega-menu__footer">
                    <Link to="/services" className="mega-menu__view-all" onClick={closeMega}>
                      View All Services <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* ===== TECHNOLOGIES ===== */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/technologies">
                Technologies
              </NavLink>
            </li>

            {/* ===== GOVERNMENT ===== */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/government">
                Government
              </NavLink>
            </li>

            {/* ===== COMPANY MEGA MENU ===== */}
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company
              </a>
              <div className="dropdown-menu mega-menu mega-menu--compact">
                <div className="container">
                  <div className="row">
                    {companyItems.map((item) => (
                      <div className="col-lg-4" key={item.path}>
                        <Link className="mega-menu__card" to={item.path} onClick={closeMega}>
                          <i className={`bi ${item.icon} mega-menu__card-icon`}></i>
                          <div>
                            <span className="mega-menu__card-title">{item.label}</span>
                            <span className="mega-menu__card-desc">{item.desc}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* ===== RESOURCES MEGA MENU ===== */}
            <li className="nav-item dropdown mega-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <div className="dropdown-menu mega-menu mega-menu--compact">
                <div className="container">
                  <div className="row">
                    {resourceItems.map((item) => (
                      <div className="col-lg-3" key={item.path}>
                        <Link className="mega-menu__card" to={item.path} onClick={closeMega}>
                          <i className={`bi ${item.icon} mega-menu__card-icon`}></i>
                          <div>
                            <span className="mega-menu__card-title">{item.label}</span>
                            <span className="mega-menu__card-desc">{item.desc}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* ===== CTAs ===== */}
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
                className="btn btn-accent btn-sm px-3"
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
