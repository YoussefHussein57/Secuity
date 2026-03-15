import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const companyLinks = [
  { label: 'Why Cyber', path: '/company', bold: true },
  { label: 'University', path: '/university', bold: true },
  { label: 'Careers', path: '/company/careers', bold: true },
  { label: 'Contact Us', path: '/contact', bold: true },
];

const servicesCol1 = [
  { label: 'Artificial Intelligence (AI)', path: '/services/ai-security' },
  { label: 'Application Security', path: '/services/application-security' },
  { label: 'Cloud Security Services', path: '/services/cloud-security' },
  { label: 'Data Security & Privacy', path: '/services/data-security' },
  { label: 'Email Security', path: '/services/email-security' },
  { label: 'Endpoint Security', path: '/services/endpoint-security' },
  { label: 'Governance, Risk & Compliance', path: '/services/grc' },
  { label: 'Identity & Access Management (IAM)', path: '/services/iam' },
];

const servicesCol2 = [
  { label: 'Incident Response & Threat Intelligence', path: '/services/incident-response' },
  { label: 'Managed Security Services', path: '/services/managed-security' },
  { label: 'Network & Infrastructure Security', path: '/services/network-security' },
  { label: 'Security Awareness & Education', path: '/services/security-awareness' },
  { label: 'Security Operations Center (SOC)', path: '/services/soc' },
  { label: 'Staff Augmentation', path: '/services/staff-augmentation' },
  { label: 'Vulnerability Management & Pen Testing', path: '/services/vulnerability-management' },
];

const resourceLinks = [
  { label: 'Resource Center', path: '/resources' },
  { label: 'Events', path: '/resources/events' },
  { label: 'Blog', path: '/resources/blog' },
  { label: 'Education Center', path: '/resources/education' },
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
      {/* Links Section */}
      <div className="footer__links-section">
        <div className="container">
          <div className="row">
            {/* Column 1: Company */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <ul className="footer__links footer__links--bold">
                {companyLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path}>{l.label}</Link>
                  </li>
                ))}
              </ul>

              <div className="footer__contact">
                <p>
                  Cyber Security LLC
                  <br />
                  1900 Reston Metro Plaza
                  <br />
                  Suite 701
                  <br />
                  Reston, VA 20190
                </p>
                <p className="footer__phone">(877) 889-0132</p>
              </div>

              <div className="footer__social">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.url} aria-label={s.label}>
                    <i className={`bi ${s.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2-3: Services & Technologies */}
            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
              <h6 className="footer__heading footer__heading--underline">
                <Link to="/services">Services & Technologies</Link>
              </h6>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="footer__links">
                    {servicesCol1.map((l) => (
                      <li key={l.path}>
                        <Link to={l.path}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="footer__links">
                    {servicesCol2.map((l) => (
                      <li key={l.path}>
                        <Link to={l.path}>{l.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 4: Resources + Subscribe */}
            <div className="col-lg-3 col-md-6">
              <h6 className="footer__heading">
                <Link to="/resources">Resources</Link>
              </h6>
              <ul className="footer__links mb-4">
                {resourceLinks.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path}>{l.label}</Link>
                  </li>
                ))}
              </ul>

              <p className="footer__subscribe-title">Subscribe to Blog</p>
              <form className="footer__subscribe-form" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Business Email*"
                  className="footer__subscribe-input"
                />
                <button type="submit" className="btn btn-accent" style={{padding:"16px 12px" , width:"fit-content", fontSize:'16px'}}>
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <div className="footer__bottom-left">
              <Link to="/" className="footer__bottom-logo">
                <img src={logo} alt="Logo" />
              </Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <button type="button" className="footer__cookie-btn">Cookie Settings</button>
            </div>
            <p className="footer__copyright">
              Copyright &copy; {new Date().getFullYear()} Cyber Security LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
