import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
// Logo removed temporarily
import services from '../../data/services';
import serviceCategories from '../../data/serviceCategories';

// Build ordered service list from data
const serviceEntries = Object.entries(services)
  .filter(([, s]) => !s.parentService)
  .map(([slug, s]) => ({
  slug,
  icon: s.icon,
  title: s.title,
  tagline: s.tagline,
  path: serviceCategories[slug] ? `/${slug}` : `/services/${slug}`,
  strategic: s.strategic,
  strategicExtra: s.strategicExtra,
  tactical: s.tactical,
  tacticalExtra: s.tacticalExtra,
  managed: s.managed,
  training: s.training,
  megaMenuLayout: s.megaMenuLayout,
  megaMenuResource: s.megaMenuResource,
  megaMenuResources: s.megaMenuResources,
  gpvue: s.gpvue,
  managedExtra: s.managedExtra,
}));

const technologyItems = [
  // Col 1
  { icon: 'bi-diamond', title: 'Application Security', subtitle: 'SAST, DAST, RASP, SCA & WAF', path: '/technologies/application-security' },
  { icon: 'bi-pencil', title: 'Endpoint Security', subtitle: 'EPP, EDR, DLP & MDR', path: '/technologies/endpoint-security' },
  { icon: 'bi-hdd-network', title: 'Network & Infrastructure Security', subtitle: 'NGFW, SASE, SWG, NAC, Segmentation & More', path: '/technologies/network-security' },
  // Col 2
  { icon: 'bi-cloud', title: 'Cloud Security', subtitle: 'Containers, CASB, CSPM, IaC, CI/CD Tools', path: '/technologies/cloud-security' },
  { icon: 'bi-check2-square', title: 'Governance, Risk & Compliance (GRC)', subtitle: 'Data Security Governance, Business Resilience, TPRM, Compliance & More', path: '/technologies/grc' },
  { icon: 'bi-fingerprint', title: 'Identity & Access Management (IAM)', subtitle: 'Access Management, IGA, PAM, CIAM', path: '/technologies/iam' },
  // Col 3
  { icon: 'bi-database', title: 'Data Security', subtitle: 'Data Classification, SWG, SEG, DLP', path: '/technologies/data-security' },
  { icon: 'bi-exclamation-triangle', title: 'Incident Response (IR) & Threat Intelligence', subtitle: 'EDR, NDR, Logging, Malware Analysis, TIPs & More', path: '/technologies/incident-response' },
  { icon: 'bi-globe2', title: 'Security Operations Center (SOC)', subtitle: 'Machine Learning, SIEM, SOAR & More', path: '/technologies/soc' },
  // Col 4
  { icon: 'bi-envelope-check', title: 'Email Security', subtitle: 'SEG, DMARC, Encrypted Email, Machine Learning & More', path: '/technologies/email-security' },
  { icon: 'bi-mortarboard', title: 'Security Awareness & Education', subtitle: 'Phishing, Enterprise LMS, Attack-Focused & More', path: '/technologies/security-awareness' },
  { icon: 'bi-activity', title: 'Vulnerability Management', subtitle: 'Scanning, Patching, Secure Configuration Management & More', path: '/technologies/vulnerability-management' },
];

const governmentItems = {
  about: {
    title: 'Government Solutions',
    desc: 'Security solutions tailored to your specific mission',
    path: '/government',
    image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Government_Solutions.png',
  },
  contractsLeft: [
    { heading: 'GSA CONTRACT', title: 'GSA Contract', desc: 'Facilitate cybersecurity solutions procurement', path: '/government/gsa-contract', linkText: 'GSA MAS Contract >', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/GSA_Contract.png' },
    { heading: 'DOD ESI CONTRACT', title: 'DOD ESI Contract', desc: 'Achieve your mission with fast & efficient access to F5 solutions', path: '/government/dod-esi', linkText: 'DOD ESI Contract >', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/DOD_ESI_Contract.png' },
  ],
  contractsRight: [
    { heading: 'SEAPORT NEXT GENERATION (SEAPORT-NXG)', title: 'SeaPort-NxG', desc: 'The SeaPort Next Generation (SeaPort-NxG) contract is a key procurement vehicle.', path: '/government/seaport-nxg', linkText: 'SeaPort-NxG Contract >', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/01/Seaport-724x452_rad-3x2-1.webp' },
    { heading: 'OASIS+', title: 'OASIS+', desc: 'OASIS+ (One Acquisition Solution for Integrated Services Plus) is a suite of governmentwide multiple-award contracts that provides federal agencies with services-based solutions.', path: '/government/oasis-plus', linkText: 'OASIS+ Contract >', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/12/image.png' },
  ],
};

const companyItems = [
  { icon: 'bi-heart', label: 'Why GuidePoint', path: '/company/why-us', desc: 'Guiding you through the complex security maze' },
  { icon: 'bi-people', label: 'Leadership Team', path: '/company/leadership', desc: 'Our partners & leadership team' },
  { icon: 'bi-briefcase', label: 'Careers', path: '/company/careers', desc: 'Learn about our values, culture & open positions' },
  { icon: 'bi-megaphone', label: 'Newsroom', path: '/resources/blog', desc: 'Read the latest GuidePoint news & press releases' },
  { icon: 'bi-globe2', label: 'Corporate Social Responsibility (CSR)', path: '/company', desc: 'Our goal is to foster sustainable business practices' },
  { icon: 'bi-diagram-3', label: 'Vendor Partners', path: '/company/vendor-partners', desc: 'Learn more about our partner ecosystem.' },
];

const companyCustomers = [
  { alt: 'Premise Health', path: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Premise_Health.png', link: '/customer-success/premise-health' },
  { alt: 'Nuance', path: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Nuance.png', link: '/customer-success/nuance' },
  { alt: 'KHovnanian Homes', path: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/KHovnanian_Homes.png', link: '/customer-success/khovnanian' },
  { alt: 'Follett', path: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Follett.png', link: '/customer-success/follett' },
  { alt: 'Intelsat', path: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Intelsat.png', link: '/customer-success/intelsat' },
  { alt: 'Sisense', path: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Sisence.png', link: '/customer-success/sisense' },
];

const resourceLibrary = [
  { icon: 'bi-play-btn', label: 'On Demand Webinars', desc: 'Watch our monthly cybersecurity webinar series', path: '/resources?type=On-Demand+Webinar' },
  { icon: 'bi-play-circle', label: 'Videos', desc: 'Watch the latest educational cybersecurity videos', path: '/resources?type=Video' },
  { icon: 'bi-trophy', label: 'Customer Success', desc: 'Learn about the value of working with a trusted advisor', path: '/resources?type=Customer+Success' },
  { icon: 'bi-file-earmark-text', label: 'Datasheets', desc: 'Download GuidePoint services & solutions datasheets', path: '/resources?type=Datasheet' },
  { icon: 'bi-book', label: 'eBooks', desc: 'Download free eBooks on key cybersecurity topics', path: '/resources?type=eBook' },
  { icon: 'bi-file-text', label: 'Whitepapers', desc: 'Download cybersecurity solution whitepapers', path: '/resources?type=Whitepaper' },
  { icon: 'bi-shield-exclamation', label: 'Threat Advisories', desc: 'Research and intel from our experts', path: '/resources?type=Report' },
  { icon: 'bi-mortarboard', label: 'Education Center', desc: 'Learn about key cybersecurity terms & disciplines', path: '/resources' },
];

const blogPosts = [
  { title: 'How Mature is Your Identity and Access Management Program?', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Blog2_Menu-AdobeStock_270370862_470x432-300x276-1.jpg', path: '/blog/how-mature-is-your-identity-and-access-management-program' },
  { title: 'NIST CSF 2.0 Is Here: How Will You Adapt?', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/iStock-1467937769_Blog-image-menu.jpg', path: '/blog/nist-csf-2-0-is-here-how-will-you-adapt' },
];

const featuredResources = [
  { title: 'GRIT\u00AE 2026 Ransomware & Cyber Threat Report', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/GRIT_Ransomware_Report_menu_thumbnail_Updated-e1741029893179.png', path: '/resources/grit-2026-ransomware-cyber-threat-report' },
  { title: 'Establishing AI Governance as a Competitive Advantage', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2026/02/Whitepaper_Block-1.jpg', path: '/resources/establishing-ai-governance-competitive-advantage' },
  { title: 'Report: The State of Identity and Access Management (IAM) Maturity, 2025', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/05/REPORT_image_NAV.jpg', path: '/resources/state-of-iam-maturity-2025' },
  { title: 'View All the Upcoming Brick House Discussion Topics', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/03/The-Brick-House-image_Menu.png', path: '/thebrickhouse' },
  { title: 'GRIT\u00AE 2026 Ransomware & Cyber Threat Report Presentation', image: 'https://www.guidepointsecurity.com/wp-content/uploads/2025/03/GRIT_Webinar_Menu_Thumbnail_Updated.png', path: '/resources/grit-2026-annual-ransomware-cyber-threat-report-webinar' },
];

// Helper: render sub-service items for a column
function SubItems({ items, icon, closeMega }) {
  return items.map((item) => {
    const inner = (
      <>
        <i className={`bi ${icon} mega-services__sub-icon`}></i>
        <div>
          <span className="mega-services__sub-title">{item.title}</span>
          <span className="mega-services__sub-desc">{item.description}</span>
        </div>
      </>
    );
    return item.path
      ? <Link key={item.title} to={item.path} className="mega-services__sub-item" onClick={closeMega}>{inner}</Link>
      : <div key={item.title} className="mega-services__sub-item mega-services__sub-item--no-link">{inner}</div>;
  });
}

// Helper: render resource card
function ResourceCard({ resource, closeMega }) {
  if (!resource) return null;
  return (
    <Link to={resource.path || '/resources'} className="mega-services__resource-card" onClick={closeMega}>
      <img src={resource.image} alt="" className="mega-services__resource-img" />
      <span className="mega-services__resource-title">{resource.title}</span>
    </Link>
  );
}

// Render mega menu columns based on service layout type
function renderMegaColumns(service, closeMega) {
  const layout = service.megaMenuLayout;

  // Layout: Professional Services + Tactical + Training + Resources (AI)
  if (layout === 'ai') {
    const resources = service.megaMenuResources || (service.megaMenuResource ? [service.megaMenuResource] : []);
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          {service.strategic?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading">PROFESSIONAL SERVICES</h6>
              <SubItems items={service.strategic} icon="bi-shield-check" closeMega={closeMega} />
            </>
          )}
          {service.tactical?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading" style={{ marginTop: '1rem' }}>TACTICAL ASSESSMENTS</h6>
              <SubItems items={service.tactical} icon="bi-shield-check" closeMega={closeMega} />
            </>
          )}
        </div>
        {service.training?.length > 0 && (
          <div className="mega-services__col">
            <h6 className="mega-services__col-heading">TRAINING</h6>
            <SubItems items={service.training} icon="bi-mortarboard" closeMega={closeMega} />
          </div>
        )}
        {resources.length > 0 && (
          <div className="mega-services__col">
            <h6 className="mega-services__col-heading">RESOURCES</h6>
            <div className="mega-services__resources-grid">
              {resources.map((res, i) => (
                <ResourceCard key={i} resource={res} closeMega={closeMega} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Layout: Cloud Security (Services by Platform | Professional Services | Resources)
  if (layout === 'cloud') {
    const resources = service.megaMenuResources || (service.megaMenuResource ? [service.megaMenuResource] : []);
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">SERVICES BY PLATFORM</h6>
          <SubItems items={service.strategic || []} icon="bi-cloud" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">PROFESSIONAL SERVICES</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        {resources.length > 0 && (
          <div className="mega-services__col">
            <h6 className="mega-services__col-heading">RESOURCES</h6>
            <div className="mega-services__resources-grid">
              {resources.map((res, i) => (
                <ResourceCard key={i} resource={res} closeMega={closeMega} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Layout: Vuln Mgmt (Threat Emulation | Tactical Assessment | Vulnerability Management + Managed Security)
  if (layout === 'vuln') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">THREAT EMULATION</h6>
          <SubItems items={service.strategic || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">TACTICAL ASSESSMENT</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">VULNERABILITY MANAGEMENT</h6>
          <SubItems items={service.managed || []} icon="bi-shield-check" closeMega={closeMega} />
          {service.managedExtra?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading mt-4">MANAGED SECURITY</h6>
              <SubItems items={service.managedExtra} icon="bi-gear" closeMega={closeMega} />
            </>
          )}
        </div>
      </div>
    );
  }

  // Layout: Staff Augmentation (Robust Staffing Solutions | Managed Security)
  if (layout === 'staff') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">ROBUST STAFFING SOLUTIONS</h6>
          <SubItems items={service.strategic || []} icon="bi-person-plus" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">MANAGED SECURITY</h6>
          <SubItems items={service.managed || []} icon="bi-gear" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Layout: SOC (Professional Services | Platform-Specific Services | Managed Security)
  if (layout === 'soc') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">PROFESSIONAL SERVICES</h6>
          <SubItems items={service.strategic || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">PLATFORM-SPECIFIC SERVICES</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">MANAGED SECURITY</h6>
          <SubItems items={service.managed || []} icon="bi-gear" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Layout: OT (Strategic Solutions | Tactical Assessments | Threat Emulation)
  if (layout === 'ot') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">STRATEGIC SOLUTIONS</h6>
          <SubItems items={service.strategic || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">TACTICAL ASSESSMENTS</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">THREAT EMULATION</h6>
          <SubItems items={service.managed || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Layout: Network (Professional Services | Implementation & Administration | Managed Security)
  if (layout === 'network') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">PROFESSIONAL SERVICES</h6>
          <SubItems items={service.strategic || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">IMPLEMENTATION & ADMINISTRATION</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">MANAGED SECURITY</h6>
          <SubItems items={service.managed || []} icon="bi-gear" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Layout: Managed Security (GPVUE + Third-Party | "As a Service" col1 | "As a Service" col2)
  if (layout === 'managed') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">SECURITY PROGRAM MANAGEMENT</h6>
          {service.gpvue && (
            <div className="mega-services__gpvue">
              <div className="mega-services__gpvue-card">
                <img src={service.gpvue.image} alt="GPVUE" className="mega-services__gpvue-img" />
                <div className="mega-services__gpvue-text">
                  <strong>GPVUE</strong>
                  <span>{service.gpvue.description}</span>
                </div>
              </div>
              <Link to={service.gpvue.link} className="mega-services__gpvue-link" onClick={closeMega}>
                Read More about GPVUE <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          )}
          {service.strategic?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading mt-4">THIRD-PARTY MANAGED SERVICES</h6>
              <SubItems items={service.strategic} icon="bi-gear" closeMega={closeMega} />
            </>
          )}
        </div>
        <div className="mega-services__col mega-services__col--wide">
          <h6 className="mega-services__col-heading">"AS A SERVICE" OFFERINGS</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">&nbsp;</h6>
          <SubItems items={service.managed || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Layout: IR (Proactive Services | Reactive Services + Managed Security | Advisory Services)
  if (layout === 'ir') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">PROACTIVE SERVICES</h6>
          <SubItems items={service.strategic || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">REACTIVE SERVICES</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-exclamation" closeMega={closeMega} />
          {service.tacticalExtra?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading mt-4">MANAGED SECURITY</h6>
              <SubItems items={service.tacticalExtra} icon="bi-gear" closeMega={closeMega} />
            </>
          )}
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">ADVISORY SERVICES</h6>
          <SubItems items={service.managed || []} icon="bi-clipboard-check" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Layout: IAM (Professional Services | IAM Pillars | Managed Security | Resource)
  if (layout === 'iam') {
    const iamResource = service.megaMenuResource;
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">PROFESSIONAL SERVICES</h6>
          <SubItems items={service.strategic || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">IAM PILLARS</h6>
          <SubItems items={service.tactical || []} icon="bi-shield-check" closeMega={closeMega} />
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">MANAGED SECURITY</h6>
          <SubItems items={service.managed || []} icon="bi-gear" closeMega={closeMega} />
        </div>
        {iamResource && (
          <div className="mega-services__col">
            <h6 className="mega-services__col-heading">RESOURCES</h6>
            <div className="mega-services__resources-grid">
              <ResourceCard resource={iamResource} closeMega={closeMega} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Layout: GRC (Governance + Business Resiliency | Risk + Managed Security | Compliance)
  if (layout === 'grc') {
    return (
      <div className="mega-services__columns">
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">GOVERNANCE SERVICES</h6>
          <SubItems items={service.strategic || []} icon="bi-clipboard-check" closeMega={closeMega} />
          {service.strategicExtra?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading mt-4">BUSINESS RESILIENCY</h6>
              <SubItems items={service.strategicExtra} icon="bi-building-check" closeMega={closeMega} />
            </>
          )}
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">RISK SERVICES</h6>
          <SubItems items={service.tactical || []} icon="bi-exclamation-triangle" closeMega={closeMega} />
          {service.tacticalExtra?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading mt-4">MANAGED SECURITY</h6>
              <SubItems items={service.tacticalExtra} icon="bi-gear" closeMega={closeMega} />
            </>
          )}
        </div>
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">COMPLIANCE SERVICES</h6>
          <SubItems items={service.managed || []} icon="bi-check2-square" closeMega={closeMega} />
        </div>
      </div>
    );
  }

  // Default layout: Strategic Solutions + Managed | Tactical Assessment | Training
  return (
    <div className="mega-services__columns">
      {service.strategic?.length > 0 && (
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">STRATEGIC SOLUTIONS</h6>
          <SubItems items={service.strategic} icon="bi-shield-check" closeMega={closeMega} />
          {service.managed?.length > 0 && (
            <>
              <h6 className="mega-services__col-heading mt-4">MANAGED SECURITY</h6>
              <SubItems items={service.managed} icon="bi-gear" closeMega={closeMega} />
            </>
          )}
        </div>
      )}
      {service.tactical?.length > 0 && (
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">TACTICAL ASSESSMENT</h6>
          <SubItems items={service.tactical} icon="bi-bullseye" closeMega={closeMega} />
        </div>
      )}
      {service.training?.length > 0 && (
        <div className="mega-services__col">
          <h6 className="mega-services__col-heading">TRAINING</h6>
          <SubItems items={service.training} icon="bi-mortarboard" closeMega={closeMega} />
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [expandedMobileService, setExpandedMobileService] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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
    setMobileOpen(false);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    if (menu === 'services') setActiveService(0);
  };


  const currentService = serviceEntries[activeService];

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg navbar-dark sticky-top navbar-main ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMega}>
        </Link>
        
        <button
          className="navbar-toggler border-0 d-lg-none"
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`navbar-collapse-main${(!isMobile || mobileOpen) ? ' show' : ''}`}>
          {isMobile && (
            <div className="mobile-drawer-header">
              <button
                className="mobile-drawer-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          )}
          <ul className="navbar-nav align-items-lg-center gap-1">

            {/* ===== SERVICES ===== */}
            <li
              className="nav-item mega-dropdown"


            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'services' ? 'active' : ''}`}
                onClick={() => toggleMenu('services')}
              >
                Services
              </button>

              {openMenu === 'services' && (
                <div className="mega-panel">
                  {/* Header — two columns */}
                  <div className="mega-panel__header">
                    <div className="mega-panel__header-cols">
                      <div className="mega-panel__header-left">
                        <div className="mega-panel__header-inner">
                          <i className="bi bi-shield-lock mega-panel__header-icon"></i>
                          <div>
                            <Link to="/services" className="mega-panel__title-link" onClick={closeMega}>Services</Link>
                            <p className="mega-panel__desc">Tailored consulting, engineering and managed security services to meet your unique needs.</p>
                          </div>
                        </div>
                      </div>
                      <div className="mega-panel__header-right">
                        <Link to={currentService.path} className="mega-panel__header-inner text-decoration-none" onClick={closeMega}>
                          <i className={`bi ${currentService.icon} mega-panel__header-icon`}></i>
                          <div>
                            <h3 className="mega-panel__title">{currentService.title}</h3>
                            <p className="mega-panel__desc">{currentService.tagline}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  {/* Content */}
                  <div className="mega-panel__body">
                    {isMobile ? (
                      /* Mobile: accordion layout — sub-services expand beneath each service */
                      <div className="mega-services-mobile">
                        {serviceEntries.map((s, i) => (
                          <div key={s.slug} className="mega-services-mobile__item">
                            <button
                              className={`mega-services-mobile__header ${expandedMobileService === i ? 'mega-services-mobile__header--open' : ''}`}
                              onClick={() => {
                                const next = expandedMobileService === i ? null : i;
                                setExpandedMobileService(next);
                                if (next !== null) setActiveService(next);
                              }}
                            >
                              <i className={`bi ${s.icon} mega-services-mobile__icon`}></i>
                              <span className="mega-services-mobile__title">{s.title}</span>
                              <i className={`bi ${expandedMobileService === i ? 'bi-chevron-up' : 'bi-chevron-down'} mega-services-mobile__chevron`}></i>
                            </button>
                            {expandedMobileService === i && (
                              <div className="mega-services-mobile__body">
                                {renderMegaColumns(s, closeMega)}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Desktop: sidebar + detail panel */
                      <div className="mega-services">
                        <div className="mega-services__sidebar">
                          {serviceEntries.map((s, i) => (
                            <button
                              key={s.slug}
                              className={`mega-services__item ${activeService === i ? 'mega-services__item--active' : ''}`}
                              onClick={() => setActiveService(i)}
                            >
                              <i className={`bi ${s.icon} mega-services__item-icon`}></i>
                              <span>{s.title}</span>
                            </button>
                          ))}
                        </div>
                        <div className="mega-services__detail">
                          <Link to={currentService.path} className="mega-services__detail-header text-decoration-none" onClick={closeMega}>
                            <i className={`bi ${currentService.icon} mega-services__detail-icon`}></i>
                            <h4 className="mega-services__detail-title">{currentService.title}</h4>
                          </Link>
                          <p className="mega-services__detail-tagline">{currentService.tagline}</p>
                          <hr className="mega-services__divider" />
                          {renderMegaColumns(currentService, closeMega)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>

            {/* ===== TECHNOLOGIES ===== */}
            <li
              className="nav-item mega-dropdown"


            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'technologies' ? 'active' : ''}`}
                onClick={() => toggleMenu('technologies')}
              >
                Technologies
              </button>

              {openMenu === 'technologies' && (
                <div className="mega-panel">
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-gear mega-panel__header-icon"></i>
                        <div>
                          <Link to="/technologies" className="mega-panel__title-link" onClick={closeMega}>Technologies</Link>
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
                          View All Technologies &gt;
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


            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'government' ? 'active' : ''}`}
                onClick={() => toggleMenu('government')}
              >
                Government Solutions
              </button>

              {openMenu === 'government' && (
                <div className="mega-panel">
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-bank mega-panel__header-icon"></i>
                        <div>
                          <Link to="/government" className="mega-panel__title-link" onClick={closeMega}>Government Solutions</Link>
                          <p className="mega-panel__desc">Plan, build and run effective federal government cybersecurity programs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="container">
                      <div className="mega-gov">
                        {/* Col 1: About */}
                        <div className="mega-gov__col mega-gov__col--about">
                          <h6 className="mega-gov__heading">ABOUT GOVERNMENT SOLUTIONS</h6>
                          <Link to="/government" className="mega-gov__about" onClick={closeMega}>
                            <img src={governmentItems.about.image} alt="" className="mega-gov__about-img" />
                            <div>
                              <span className="mega-gov__about-title">{governmentItems.about.title}</span>
                              <span className="mega-gov__about-desc">{governmentItems.about.desc}</span>
                            </div>
                          </Link>
                        </div>

                        {/* Cols 2+3: Contract Vehicles */}
                        <div className="mega-gov__contracts">
                          <h6 className="mega-gov__heading">CONTRACT VEHICLES</h6>
                          <div className="mega-gov__contracts-cols">
                            <div className="mega-gov__col">
                              {governmentItems.contractsLeft.map((c) => (
                                <div className="mega-gov__vehicle" key={c.title}>
                                  <h6 className="mega-gov__vehicle-heading">{c.heading}</h6>
                                  <Link to={c.path} className="mega-gov__contract" onClick={closeMega}>
                                    <img src={c.image} alt={c.title} className="mega-gov__contract-img" />
                                    <div>
                                      <span className="mega-gov__contract-title">{c.title}</span>
                                      <span className="mega-gov__contract-desc">{c.desc}</span>
                                    </div>
                                  </Link>
                                  <Link to={c.path} className="mega-gov__contract-link" onClick={closeMega}>
                                    {c.linkText}
                                  </Link>
                                </div>
                              ))}
                            </div>

                            <div className="mega-gov__col">
                              {governmentItems.contractsRight.map((c) => (
                            <div className="mega-gov__vehicle" key={c.title}>
                              <h6 className="mega-gov__vehicle-heading">{c.heading}</h6>
                              <Link to={c.path} className="mega-gov__contract" onClick={closeMega}>
                                <img src={c.image} alt={c.title} className="mega-gov__contract-img" />
                                <div>
                                  <span className="mega-gov__contract-title">{c.title}</span>
                                  <span className="mega-gov__contract-desc">{c.desc}</span>
                                </div>
                              </Link>
                              <Link to={c.path} className="mega-gov__contract-link" onClick={closeMega}>
                                {c.linkText}
                              </Link>
                            </div>
                          ))}
                            </div>
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


            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'company' ? 'active' : ''}`}
                onClick={() => toggleMenu('company')}
              >
                Company
              </button>

              {openMenu === 'company' && (
                <div className="mega-panel">
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-building mega-panel__header-icon"></i>
                        <div>
                          <Link to="/company/why-us" className="mega-panel__title-link" onClick={closeMega}>Company</Link>
                          <p className="mega-panel__desc">We are your Trusted Advisor</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="row gx-0">
                      {/* About */}
                      <div className="col-lg-3 mega-company__col mega-company__col--border-right">
                        <h6 className="mega-company__heading">ABOUT GUIDEPOINT SECURITY</h6>
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
                      <div className="col-lg-3 mega-company__col mega-company__col--border-right">
                        <h6 className="mega-company__heading">CUSTOMERS</h6>
                        <div className="mega-company__logos">
                          {companyCustomers.map((c) => (
                            <Link to={c.link} className="mega-company__logo" key={c.alt} onClick={closeMega}>
                              <img src={c.path} alt={c.alt} />
                            </Link>
                          ))}
                        </div>
                        <Link to="/company/customers" className="mega-panel__view-all" onClick={closeMega}>
                          View All Case Studies &gt;
                        </Link>
                      </div>

                      {/* Programs */}
                      <div className="col-lg-3 mega-company__col mega-company__col--border-right">
                        <h6 className="mega-company__heading">GUIDEPOINT SECURITY FINANCIAL</h6>
                        <Link to="/company/gps-financial" className="mega-company__program-card" onClick={closeMega}>
                          <img
                            src="https://www.guidepointsecurity.com/wp-content/uploads/2024/03/GPS_Financial_Logo.svg"
                            alt="GuidePoint Security Financial"
                            width="175"
                            height="85"
                            style={{ objectFit: 'contain' }}
                          />
                          <p className="mega-company__program-desc">
                            Simplify Purchasing with Flexible Financing Options for Hardware, Software, Services &amp; Support
                          </p>
                        </Link>

                        <h6 className="mega-company__heading mt-4">GUIDEPOINT SECURITY UNIVERSITY</h6>
                        <Link to="/company/gpsu" className="mega-company__program-card" onClick={closeMega}>
                          <img
                            src="https://www.guidepointsecurity.com/wp-content/uploads/2024/03/GPS_Financial_Logo.svg"
                            alt="GuidePoint Security University"
                            width="175"
                            height="85"
                            style={{ objectFit: 'contain' }}
                          />
                          <p className="mega-company__program-desc">
                            Start or extend your cybersecurity career with our expert training program
                          </p>
                        </Link>

                        <h6 className="mega-company__heading mega-company__heading--grit">GUIDEPOINT RESEARCH AND INTELLIGENCE TEAM (GRIT&reg;)</h6>
                        <Link to="/company/grit" className="mega-company__program-card" onClick={closeMega}>
                          <img
                            src="https://www.guidepointsecurity.com/wp-content/uploads/2024/03/GRIT_Company_Header.png"
                            alt="GRIT"
                            width="175"
                            height="85"
                            style={{ objectFit: 'contain' }}
                          />
                          <p className="mega-company__program-desc">
                            Our team of expert threat researchers and incident response professionals
                          </p>
                        </Link>
                      </div>

                      {/* Contact */}
                      <div className="col-lg-3 mega-company__col">
                        <h6 className="mega-company__heading">CONTACT US</h6>
                        <div className="mega-company__contact">
                          <div className="mega-company__contact-item">
                            <img
                              src="https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Wayfinding_Map_60x60-1.svg"
                              alt="Location"
                              width="60"
                              height="60"
                            />
                            <div>
                              <strong>GuidePoint Security LLC</strong><br />
                              1900 Reston Metro Plaza<br />
                              Suite 701<br />
                              Reston, VA 20190
                            </div>
                          </div>
                          <div className="mega-company__contact-item">
                            <img
                              src="https://www.guidepointsecurity.com/wp-content/uploads/2024/03/Mobile_60x60-1.svg"
                              alt="Contact"
                              width="60"
                              height="60"
                            />
                            <div>
                              <a href="mailto:info@guidepointsecurity.com" className="mega-company__contact-link">info@guidepointsecurity.com</a><br />
                              <span>(877) 889-0132</span>
                            </div>
                          </div>
                          <Link to="/contact" className="btn btn-accent mt-3" onClick={closeMega}>
                            Contact Us
                          </Link>
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


            >
              <button
                className={`nav-link dropdown-toggle btn-reset ${openMenu === 'resources' ? 'active' : ''}`}
                onClick={() => toggleMenu('resources')}
              >
                Resources
              </button>

              {openMenu === 'resources' && (
                <div className="mega-panel">
                  <div className="mega-panel__header">
                    <div className="container">
                      <div className="mega-panel__header-inner">
                        <i className="bi bi-journal-richtext mega-panel__header-icon"></i>
                        <div>
                          <Link to="/resources" className="mega-panel__title-link" onClick={closeMega}>Resources</Link>
                          <p className="mega-panel__desc">Review educational cybersecurity content</p>
                        </div>
                      </div>
                    </div>
                    <div className="mega-panel__gradient-line"></div>
                  </div>

                  <div className="mega-panel__body">
                    <div className="row gx-0">
                        {/* Resource Library */}
                        <div className="col-lg-3 mega-resources__col mega-resources__col--border-right">
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
                          <Link to="/resources" className="mega-panel__view-all" onClick={closeMega}>
                            View All Resources &gt;
                          </Link>
                        </div>

                        {/* Events */}
                        <div className="col-lg-3 mega-resources__col mega-resources__col--border-right">
                          <h6 className="mega-resources__heading">EVENTS</h6>
                          <Link to="/resources/events" className="mega-resources__event-card" onClick={closeMega}>
                            <img
                              src="https://www.guidepointsecurity.com/wp-content/uploads/2024/03/iStock-1467937769_Blog-image-menu.jpg"
                              alt="GPSEC Conference"
                              className="mega-resources__event-img"
                            />
                            <span className="mega-resources__event-caption">Premier Cybersecurity Conference</span>
                          </Link>
                          <Link to="/resources/events" className="mega-panel__view-all mt-3" onClick={closeMega}>
                            View All Events and Upcoming Webinars &gt;
                          </Link>
                        </div>

                        {/* Blog */}
                        <div className="col-lg-3 mega-resources__col mega-resources__col--border-right">
                          <h6 className="mega-resources__heading">BLOG</h6>
                          {/* First blog — large image on top */}
                          <Link to={blogPosts[0].path} className="mega-resources__blog-primary" onClick={closeMega}>
                            <img src={blogPosts[0].image} alt={blogPosts[0].title} className="mega-resources__blog-primary-img" />
                            <span className="mega-resources__blog-title">{blogPosts[0].title}</span>
                          </Link>
                          {/* Second blog — thumbnail + title side by side */}
                          <Link to={blogPosts[1].path} className="mega-resources__blog-item" onClick={closeMega}>
                            <img src={blogPosts[1].image} alt={blogPosts[1].title} className="mega-resources__blog-img" />
                            <span className="mega-resources__blog-title">{blogPosts[1].title}</span>
                          </Link>
                          <Link to="/resources/blog" className="mega-panel__view-all mt-3" onClick={closeMega}>
                            View All Blog Articles &gt;
                          </Link>
                        </div>

                        {/* Featured */}
                        <div className="col-lg-3 mega-resources__col">
                          <h6 className="mega-resources__heading">FEATURED RESOURCES</h6>
                          {featuredResources.map((item) => (
                            <Link to={item.path} className="mega-resources__featured-item" onClick={closeMega} key={item.title}>
                              <img src={item.image} alt={item.title} className="mega-resources__featured-thumb" />
                              <span className="mega-resources__featured-title">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                  </div>
                </div>
              )}
            </li>

          </ul>

          {/* ===== RIGHT SIDE: Search + CTAs ===== */}
          <div className="d-flex align-items-center gap-3 ms-auto nav-right">
            {/* Desktop: search icon button */}
            <button
              className="btn-reset nav-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <i className="bi bi-search"></i>
            </button>

            {/* Mobile: inline search input */}
            {isMobile && (
              <div className="mobile-search-row">
                <input
                  type="text"
                  placeholder="Search..."
                  className="mobile-search-input"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.target.value.trim()) {
                      setMobileOpen(false);
                      window.location.href = `/search?q=${encodeURIComponent(e.target.value.trim())}`;
                    }
                  }}
                />
                <button
                  className="mobile-search-btn"
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            )}

            <div className="mobile-cta-row">
              <Link
                to="/report-incident"
                className="btn btn-outline-light nav-cta-btn"
                onClick={closeMega}
              >
                <i className="bi bi-shield-exclamation nav-cta-icon"></i>
                Report an Incident
              </Link>
              <Link
                to="/contact"
                className="btn btn-accent nav-cta-btn"
                onClick={closeMega}
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop behind sidebar on medium screens (click outside to close) */}
      {isMobile && mobileOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ===== SEARCH MODAL ===== */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-overlay__inner" onClick={(e) => e.stopPropagation()}>
            <input
              ref={searchInputRef}
              type="text"
              className="search-overlay__input"
              placeholder="Search..."
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                  setSearchOpen(false);
                  closeMega();
                  window.location.href = `/search?q=${encodeURIComponent(e.target.value.trim())}`;
                }
                if (e.key === 'Escape') setSearchOpen(false);
              }}
            />
            <button
              className="search-overlay__close"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
