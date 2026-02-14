import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import ServiceCard from '../components/sections/ServiceCard';

const serviceCategories = [
  {
    category: 'Offensive Security',
    services: [
      { icon: 'bi-code-slash', title: 'Application Security', path: '/services/application-security' },
      { icon: 'bi-bug', title: 'Vulnerability Management & Pen Testing', path: '/services/vulnerability-management' },
      { icon: 'bi-exclamation-triangle', title: 'Incident Response & Threat Intelligence', path: '/services/incident-response' },
    ],
  },
  {
    category: 'Defensive Security',
    services: [
      { icon: 'bi-cloud', title: 'Cloud Security', path: '/services/cloud-security' },
      { icon: 'bi-laptop', title: 'Endpoint Security', path: '/services/endpoint-security' },
      { icon: 'bi-envelope-check', title: 'Email Security', path: '/services/email-security' },
      { icon: 'bi-hdd-network', title: 'Network & Infrastructure Security', path: '/services/network-security' },
      { icon: 'bi-database-lock', title: 'Data Security & Privacy', path: '/services/data-security' },
    ],
  },
  {
    category: 'Governance & Operations',
    services: [
      { icon: 'bi-clipboard-check', title: 'Governance, Risk & Compliance', path: '/services/grc' },
      { icon: 'bi-person-badge', title: 'Identity & Access Management', path: '/services/iam' },
      { icon: 'bi-display', title: 'SOC Services', path: '/services/soc' },
      { icon: 'bi-shield-lock', title: 'Managed Security Services', path: '/services/managed-security' },
    ],
  },
  {
    category: 'Specialized',
    services: [
      { icon: 'bi-robot', title: 'AI Security', path: '/services/ai-security' },
      { icon: 'bi-gear-wide-connected', title: 'OT / IoT Security', path: '/services/ot-security' },
      { icon: 'bi-mortarboard', title: 'Security Awareness & Education', path: '/services/security-awareness' },
      { icon: 'bi-people', title: 'Staff Augmentation', path: '/services/staff-augmentation' },
    ],
  },
];

export default function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive cybersecurity services tailored to your organization's unique challenges."
        variant="page"
      />

      {serviceCategories.map((cat) => (
        <section
          key={cat.category}
          className={`section ${serviceCategories.indexOf(cat) % 2 === 1 ? 'section--light' : ''}`}
        >
          <div className="container">
            <SectionHeader title={cat.category} />
            <div className="services-grid">
              {cat.services.map((s) => (
                <ServiceCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
