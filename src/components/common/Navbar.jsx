import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import services from '../../data/services';

// Build ordered service list from data
const serviceEntries = Object.entries(services).map(([slug, s]) => ({
  slug,
  icon: s.icon,
  title: s.title,
  tagline: s.tagline,
  path: `/services/${slug}`,
  strategic: s.strategic,
  tactical: s.tactical,
  managed: s.managed,
}));

const technologyItems = [
  { icon: 'bi-diamond', title: 'Application Security', subtitle: 'SAST, DAST, RASP, SCA & WAF', path: '/services/application-security' },
  { icon: 'bi-pencil', title: 'Endpoint Security', subtitle: 'EPP, EDR, DLP & MDR', path: '/services/endpoint-security' },
  { icon: 'bi-hdd-network', title: 'Network & Infrastructure Security', subtitle: 'NGFW, SASE, SWG, NAC & More', path: '/services/network-security' },
  { icon: 'bi-cloud', title: 'Cloud Security', subtitle: 'Containers, CASB, CSPM, IaC, CI/CD Tools', path: '/services/cloud-security' },
  { icon: 'bi-check2-square', title: 'Governance, Risk & Compliance (GRC)', subtitle: 'Business Resilience, TPRM & More', path: '/services/grc' },
  { icon: 'bi-mortarboard', title: 'Security Awareness & Education', subtitle: 'Phishing, Enterprise LMS & More', path: '/services/security-awareness' },
  { icon: 'bi-database', title: 'Data Security', subtitle: 'Data Classification, SWG, SEG, DLP', path: '/services/data-security' },
  { icon: 'bi-fingerprint', title: 'Identity & Access Management (IAM)', subtitle: 'Access Management, IGA, PAM, CIAM', path: '/services/iam' },
  { icon: 'bi-globe2', title: 'Security Operations Center (SOC)', subtitle: 'Machine Learning, SIEM, SOAR & More', path: '/services/soc' },
  { icon: 'bi-envelope-check', title: 'Email Security', subtitle: 'SEG, DMARC, Encrypted Email & More', path: '/services/email-security' },
  { icon: 'bi-exclamation-triangle', title: 'Incident Response (IR) & Threat Intelligence', subtitle: 'EDR, NDR, Logging, Malware Analysis & More', path: '/services/incident-response' },
  { icon: 'bi-activity', title: 'Vulnerability Management', subtitle: 'Scanning, Patching & More', path: '/services/vulnerability-management' },
];

const governmentItems = {
  about: {
    title: 'Government Solutions',
    desc: 'Security solutions tailored to your specific mission',
    path: '/government',
  },
  contracts: [
    { title: 'GSA Contract', desc: 'Facilitate cybersecurity solutions procurement', path: '/government' },
    { title: 'DOD ESI Contract', desc: 'Achieve your mission with fast & efficient access to solutions', path: '/government' },
    { title: 'SeaPort-NxG', desc: 'SeaPort Next Generation procurement vehicle', path: '/government' },
    { title: 'OASIS+', desc: 'Governmentwide multiple-award contracts for federal agencies', path: '/government' },
  ],
};

const companyItems = [
  { icon: 'bi-heart', label: 'Why Cyber', path: '/company', desc: 'Guiding you through the complex security maze' },
  { icon: 'bi-people', label: 'Leadership Team', path: '/company/leadership', desc: 'Our partners and leadership team' },
  { icon: 'bi-briefcase', label: 'Careers', path: '/company/careers', desc: 'Learn about our values, culture & open positions' },
  { icon: 'bi-megaphone', label: 'Newsroom', path: '/resources/blog', desc: 'Read the latest news & press releases' },
  { icon: 'bi-globe2', label: 'Corporate Social Responsibility', path: '/company', desc: 'Our goal is to foster sustainable business practices' },
  { icon: 'bi-diagram-3', label: 'Vendor Partners', path: '/company', desc: 'Learn more about our partner ecosystem' },
];

const companyCustomers = [
  { alt: 'Premise Health', path: '/logos/premise-health.svg' },
  { alt: 'Nuance', path: '/logos/nuance.svg' },
  { alt: 'KHovnanian Homes', path: '/logos/khovnanian.svg' },
  { alt: 'Follett', path: '/logos/follett.svg' },
  { alt: 'Intelsat', path: '/logos/intelsat.svg' },
  { alt: 'Sisense', path: '/logos/sisense.svg' },
];

const resourceLibrary = [
  { icon: 'bi-play-btn', label: 'On Demand Webinars', desc: 'Watch our monthly cybersecurity webinar series', path: '/resources/webinars' },
  { icon: 'bi-play-circle', label: 'Videos', desc: 'Watch the latest educational cybersecurity videos', path: '/resources/webinars' },
  { icon: 'bi-trophy', label: 'Customer Success', desc: 'Learn about the value of working with a trusted advisor', path: '/resources' },
  { icon: 'bi-file-earmark-text', label: 'Datasheets', desc: 'Download Cyber services & solutions datasheets', path: '/resources' },
  { icon: 'bi-book', label: 'eBooks', desc: 'Download free eBooks on key cybersecurity topics', path: '/resources' },
  { icon: 'bi-file-text', label: 'Whitepapers', desc: 'Download cybersecurity solution whitepapers', path: '/resources' },
  { icon: 'bi-shield-exclamation', label: 'Threat Advisories', desc: 'Research and intel from our experts', path: '/resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const closeMega = () => {
    setOpenMenu(null);
    setActiveService(0);
    // Also close bootstrap collapse on mobile
    const collapse = document.getElementById('mainNav');
    if (collapse?.classList.contains('show')) {
      collapse.classList.remove('show');
    }
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    if (menu === 'services') setActiveService(0);
  };

  const handleMenuEnter = (menu) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(menu);
    if (menu === 'services') setActiveService(0);
  };

  const handleMenuLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  const handleDropdownEnter = () => {
    clearTimeout(closeTimer.current);
  };

  const currentService = serviceEntries[activeService];

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-main ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMega}>
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

            {/* ===== SERVICES ===== */}
            <li
              className="nav-item mega-dropdown"
              onMouseEnter={() => handleMenuEnter('services')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'services' ? 'active' : ''}`}
                onClick={() => toggleMenu('services')}
              >
                Services
              </button>

              {openMenu === 'services' && (
                <div className="mega-panel" onMouseEnter={handleDropdownEnter} onMouseLeave={handleMenuLeave}>
                  {/* Header */}
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-shield-lock mega-panel__header-icon"></i>
                        <div>
                          <h3 className="mega-panel__title">Services</h3>
                          <p className="mega-panel__desc">Tailored consulting, engineering and managed security services to meet your unique needs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  {/* Content */}
                  <div className="mega-panel__body">
                    <div className="container">
                      <div className="mega-services">
                        {/* Left sidebar */}
                        <div className="mega-services__sidebar">
                          {serviceEntries.map((s, i) => (
                            <button
                              key={s.slug}
                              className={`mega-services__item ${activeService === i ? 'mega-services__item--active' : ''}`}
                              onMouseEnter={() => setActiveService(i)}
                              onClick={() => { setActiveService(i); }}
                            >
                              <i className={`bi ${s.icon} mega-services__item-icon`}></i>
                              <span>{s.title}</span>
                            </button>
                          ))}
                        </div>

                        {/* Right detail panel */}
                        <div className="mega-services__detail">
                          <div className="mega-services__detail-header">
                            <i className={`bi ${currentService.icon} mega-services__detail-icon`}></i>
                            <h4 className="mega-services__detail-title">{currentService.title}</h4>
                          </div>
                          <p className="mega-services__detail-tagline">{currentService.tagline}</p>
                          <hr className="mega-services__divider" />

                          <div className="mega-services__columns">
                            {currentService.strategic?.length > 0 && (
                              <div className="mega-services__col">
                                <h6 className="mega-services__col-heading">STRATEGIC SOLUTIONS</h6>
                                {currentService.strategic.map((item) => (
                                  <Link key={item.title} to={currentService.path} className="mega-services__sub-item" onClick={closeMega}>
                                    <i className="bi bi-layers mega-services__sub-icon"></i>
                                    <div>
                                      <span className="mega-services__sub-title">{item.title}</span>
                                      <span className="mega-services__sub-desc">{item.description}</span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}

                            {currentService.tactical?.length > 0 && (
                              <div className="mega-services__col">
                                <h6 className="mega-services__col-heading">TACTICAL ASSESSMENT</h6>
                                {currentService.tactical.map((item) => (
                                  <Link key={item.title} to={currentService.path} className="mega-services__sub-item" onClick={closeMega}>
                                    <i className="bi bi-crosshair mega-services__sub-icon"></i>
                                    <div>
                                      <span className="mega-services__sub-title">{item.title}</span>
                                      <span className="mega-services__sub-desc">{item.description}</span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}

                            {currentService.managed?.length > 0 && (
                              <div className="mega-services__col">
                                <h6 className="mega-services__col-heading">MANAGED SECURITY</h6>
                                {currentService.managed.map((item) => (
                                  <Link key={item.title} to={currentService.path} className="mega-services__sub-item" onClick={closeMega}>
                                    <i className="bi bi-gear mega-services__sub-icon"></i>
                                    <div>
                                      <span className="mega-services__sub-title">{item.title}</span>
                                      <span className="mega-services__sub-desc">{item.description}</span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* ===== TECHNOLOGIES ===== */}
            <li
              className="nav-item mega-dropdown"
              onMouseEnter={() => handleMenuEnter('technologies')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'technologies' ? 'active' : ''}`}
                onClick={() => toggleMenu('technologies')}
              >
                Technologies
              </button>

              {openMenu === 'technologies' && (
                <div className="mega-panel" onMouseEnter={handleDropdownEnter} onMouseLeave={handleMenuLeave}>
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-gear mega-panel__header-icon"></i>
                        <div>
                          <h3 className="mega-panel__title">Technologies</h3>
                          <p className="mega-panel__desc">Leverage our expertise and access to hundreds of cybersecurity solutions. We take a vendor-agnostic approach to reviewing, analyzing, comparing and vetting current and emerging technologies.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="container">
                      <h6 className="mega-tech__heading">TECHNOLOGY SOLUTIONS</h6>
                      <div className="mega-tech__grid">
                        {technologyItems.map((item) => (
                          <Link key={item.title} to={item.path} className="mega-tech__item" onClick={closeMega}>
                            <i className={`bi ${item.icon} mega-tech__icon`}></i>
                            <div>
                              <span className="mega-tech__title">{item.title}</span>
                              <span className="mega-tech__subtitle">{item.subtitle}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mega-panel__footer">
                        <Link to="/technologies" className="mega-panel__view-all" onClick={closeMega}>
                          View All Technologies <i className="bi bi-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* ===== GOVERNMENT ===== */}
            <li
              className="nav-item mega-dropdown"
              onMouseEnter={() => handleMenuEnter('government')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'government' ? 'active' : ''}`}
                onClick={() => toggleMenu('government')}
              >
                Government Solutions
              </button>

              {openMenu === 'government' && (
                <div className="mega-panel" onMouseEnter={handleDropdownEnter} onMouseLeave={handleMenuLeave}>
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-bank mega-panel__header-icon"></i>
                        <div>
                          <h3 className="mega-panel__title">Government Solutions</h3>
                          <p className="mega-panel__desc">Plan, build and run effective federal government cybersecurity programs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <h6 className="mega-gov__heading">ABOUT GOVERNMENT SOLUTIONS</h6>
                          <Link to="/government" className="mega-gov__about" onClick={closeMega}>
                            <div className="mega-gov__about-icon">
                              <i className="bi bi-shield-check"></i>
                            </div>
                            <div>
                              <span className="mega-gov__about-title">{governmentItems.about.title}</span>
                              <span className="mega-gov__about-desc">{governmentItems.about.desc}</span>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-8">
                          <h6 className="mega-gov__heading">CONTRACT VEHICLES</h6>
                          <div className="row">
                            {governmentItems.contracts.map((c) => (
                              <div className="col-md-6 mb-3" key={c.title}>
                                <Link to={c.path} className="mega-gov__contract" onClick={closeMega}>
                                  <span className="mega-gov__contract-title">{c.title}</span>
                                  <span className="mega-gov__contract-desc">{c.desc}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* ===== COMPANY ===== */}
            <li
              className="nav-item mega-dropdown"
              onMouseEnter={() => handleMenuEnter('company')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'company' ? 'active' : ''}`}
                onClick={() => toggleMenu('company')}
              >
                Company
              </button>

              {openMenu === 'company' && (
                <div className="mega-panel" onMouseEnter={handleDropdownEnter} onMouseLeave={handleMenuLeave}>
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-building mega-panel__header-icon"></i>
                        <div>
                          <h3 className="mega-panel__title">Company</h3>
                          <p className="mega-panel__desc">We are your Trusted Advisor</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="container">
                      <div className="row">
                        {/* About */}
                        <div className="col-lg-3">
                          <h6 className="mega-company__heading">ABOUT CYBER SECURITY</h6>
                          <ul className="mega-company__list">
                            {companyItems.map((item) => (
                              <li key={item.path + item.label}>
                                <Link to={item.path} className="mega-company__link" onClick={closeMega}>
                                  <i className={`bi ${item.icon} mega-company__link-icon`}></i>
                                  <div>
                                    <span className="mega-company__link-title">{item.label}</span>
                                    <span className="mega-company__link-desc">{item.desc}</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Customers */}
                        <div className="col-lg-3">
                          <h6 className="mega-company__heading">CUSTOMERS</h6>
                          <div className="mega-company__logos">
                            {companyCustomers.map((c) => (
                              <div className="mega-company__logo" key={c.alt}>
                                <img src={c.path} alt={c.alt} />
                              </div>
                            ))}
                          </div>
                          <Link to="/company" className="mega-panel__view-all" onClick={closeMega}>
                            View All Case Studies <i className="bi bi-chevron-right"></i>
                          </Link>
                        </div>

                        {/* Programs */}
                        <div className="col-lg-3">
                          <h6 className="mega-company__heading">CYBER SECURITY PROGRAMS</h6>
                          <Link to="/company" className="mega-company__program" onClick={closeMega}>
                            <span className="mega-company__program-title">Cyber Security Financial</span>
                            <span className="mega-company__program-desc">Simplify Purchasing with Flexible Financing Options</span>
                          </Link>
                          <Link to="/company" className="mega-company__program" onClick={closeMega}>
                            <span className="mega-company__program-title">Cyber Security University</span>
                            <span className="mega-company__program-desc">Start or extend your cybersecurity career with our expert training program</span>
                          </Link>
                        </div>

                        {/* Contact */}
                        <div className="col-lg-3">
                          <h6 className="mega-company__heading">CONTACT US</h6>
                          <div className="mega-company__contact">
                            <div className="mega-company__contact-item">
                              <i className="bi bi-geo-alt"></i>
                              <div>
                                <strong>Cyber Security LLC</strong><br />
                                1900 Reston Metro Plaza<br />
                                Suite 701<br />
                                Reston, VA 20190
                              </div>
                            </div>
                            <div className="mega-company__contact-item">
                              <i className="bi bi-envelope"></i>
                              <span>info@cybersecurity.com</span>
                            </div>
                            <div className="mega-company__contact-item">
                              <i className="bi bi-telephone"></i>
                              <span>(877) 889-0132</span>
                            </div>
                            <Link to="/contact" className="btn btn-accent btn-sm mt-3" onClick={closeMega}>
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* ===== RESOURCES ===== */}
            <li
              className="nav-item mega-dropdown"
              onMouseEnter={() => handleMenuEnter('resources')}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'resources' ? 'active' : ''}`}
                onClick={() => toggleMenu('resources')}
              >
                Resources
              </button>

              {openMenu === 'resources' && (
                <div className="mega-panel" onMouseEnter={handleDropdownEnter} onMouseLeave={handleMenuLeave}>
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-journal-richtext mega-panel__header-icon"></i>
                        <div>
                          <h3 className="mega-panel__title">Resources</h3>
                          <p className="mega-panel__desc">Review educational cybersecurity content</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="container">
                      <div className="row">
                        {/* Resource Library */}
                        <div className="col-lg-3">
                          <h6 className="mega-resources__heading">RESOURCE LIBRARY</h6>
                          <ul className="mega-resources__list">
                            {resourceLibrary.map((item) => (
                              <li key={item.label}>
                                <Link to={item.path} className="mega-resources__link" onClick={closeMega}>
                                  <i className={`bi ${item.icon} mega-resources__link-icon`}></i>
                                  <div>
                                    <span className="mega-resources__link-title">{item.label}</span>
                                    <span className="mega-resources__link-desc">{item.desc}</span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Events */}
                        <div className="col-lg-3">
                          <h6 className="mega-resources__heading">EVENTS</h6>
                          <Link to="/resources/events" className="mega-resources__featured" onClick={closeMega}>
                            <div className="mega-resources__featured-img">
                              <i className="bi bi-calendar-event"></i>
                              <span>Premier Cybersecurity Conference</span>
                            </div>
                          </Link>
                          <Link to="/resources/events" className="mega-panel__view-all mt-3" onClick={closeMega}>
                            View All Events <i className="bi bi-chevron-right"></i>
                          </Link>
                        </div>

                        {/* Blog */}
                        <div className="col-lg-3">
                          <h6 className="mega-resources__heading">BLOG</h6>
                          <Link to="/resources/blog" className="mega-resources__blog-item" onClick={closeMega}>
                            <span>How Mature is Your Identity and Access Management Program?</span>
                          </Link>
                          <Link to="/resources/blog" className="mega-resources__blog-item" onClick={closeMega}>
                            <span>NIST CSF 2.0 Is Here: How Will You Adapt?</span>
                          </Link>
                          <Link to="/resources/blog" className="mega-panel__view-all mt-3" onClick={closeMega}>
                            View All Blog Articles <i className="bi bi-chevron-right"></i>
                          </Link>
                        </div>

                        {/* Featured */}
                        <div className="col-lg-3">
                          <h6 className="mega-resources__heading">FEATURED RESOURCES</h6>
                          <Link to="/resources" className="mega-resources__featured-item" onClick={closeMega}>
                            <div className="mega-resources__featured-thumb">
                              <i className="bi bi-file-earmark-bar-graph"></i>
                            </div>
                            <span>GRIT 2026 Ransomware & Cyber Threat Report</span>
                          </Link>
                          <Link to="/resources" className="mega-resources__featured-item" onClick={closeMega}>
                            <div className="mega-resources__featured-thumb">
                              <i className="bi bi-file-text"></i>
                            </div>
                            <span>Establishing AI Governance as a Competitive Advantage</span>
                          </Link>
                          <Link to="/resources" className="mega-resources__featured-item" onClick={closeMega}>
                            <div className="mega-resources__featured-thumb">
                              <i className="bi bi-bar-chart"></i>
                            </div>
                            <span>The State of Identity and Access Management (IAM) Maturity</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* ===== CTAs ===== */}
            <li className="nav-item ms-lg-3">
              <Link
                to="/report-incident"
                className="nav-link nav-link--incident"
                onClick={closeMega}
              >
                <i className="bi bi-shield-exclamation me-1"></i>
                Report an Incident
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link
                to="/contact"
                className="btn btn-accent btn-sm px-3"
                onClick={closeMega}
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
