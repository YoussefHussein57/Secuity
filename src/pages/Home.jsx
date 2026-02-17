import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';

function StatListItem({ number, label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, '')) || 0;
  const hasDecimal = number.replace(/[^0-9.]/g, '').includes('.');
  const suffix = number.replace(/[0-9.,]/g, '');

  return (
    <div className="stat-list__item" ref={ref}>
      <span className="stat-list__number">
        {isVisible ? (
          <CountUp end={numericValue} duration={2.5} separator="," decimals={hasDecimal ? 1 : 0} suffix={suffix} />
        ) : '0'}
      </span>
      <span className="stat-list__label">{label}</span>
    </div>
  );
}
import FeatureCard from '../components/sections/FeatureCard';
import ServiceCard from '../components/sections/ServiceCard';
import ResourceCard from '../components/sections/ResourceCard';
import LogoGrid from '../components/sections/LogoGrid';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import heroImage from '../assets/images/hero.jpeg';
import managedSecImage from '../assets/images/managed_Sec.jpeg';

const features = [
  {
    icon: 'bi-people',
    title: 'Highly-Trained',
    description: 'More than 50% of our workforce are tenured cybersecurity engineers, architects and consultants.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Deep Expertise',
    description: 'Our experts undergo a rigorous vetting process and have earned hundreds of industry and product certifications.',
  },
  {
    icon: 'bi-search',
    title: 'Vendor Agnostic',
    description: 'We serve as your single point of contact for 650+ cybersecurity technologies to deliver custom, best-fit solutions.',
  },
];

const services = [
  { icon: 'bi-diamond', title: 'Application Security', path: '/services/application-security' },
  { icon: 'bi-cpu', title: 'Artificial Intelligence (AI)', path: '/services/ai-security' },
  { icon: 'bi-cloud', title: 'Cloud Security', path: '/services/cloud-security' },
  { icon: 'bi-database', title: 'Data Security', path: '/services/data-security' },
  { icon: 'bi-envelope-check', title: 'Email Security', path: '/services/email-security' },
  { icon: 'bi-pencil', title: 'Endpoint Security', path: '/services/endpoint-security' },
  { icon: 'bi-check2-square', title: 'Governance, Risk & Compliance', path: '/services/grc' },
  { icon: 'bi-fingerprint', title: 'Identity & Access Management (IAM)', path: '/services/iam' },
  { icon: 'bi-exclamation-triangle', title: 'Incident Response & Threat Intelligence', path: '/services/incident-response' },
  { icon: 'bi-shield-lock', title: 'Managed Security', path: '/services/managed-security' },
  { icon: 'bi-hdd-network', title: 'Network & Infrastructure Security', path: '/services/network-security' },
  { icon: 'bi-gear-wide-connected', title: 'OT Security Services', path: '/services/ot-security' },
  { icon: 'bi-mortarboard', title: 'Security Awareness & Education', path: '/services/security-awareness' },
  { icon: 'bi-globe2', title: 'Security Operations Center (SOC)', path: '/services/soc' },
  { icon: 'bi-person-plus', title: 'Staff Augmentation', path: '/services/staff-augmentation' },
  { icon: 'bi-activity', title: 'Vulnerability Management & Penetration Testing', path: '/services/vulnerability-management' },
];

const stats = [
  { number: '4,200+', label: 'Customers' },
  { number: '50%', label: 'of the Fortune 50' },
  { number: '40%', label: 'of the Fortune 500' },
];

const clientLogos = [
  { src: '/logos/premise-health.svg', alt: 'Premise Health' },
  { src: '/logos/khovnanian.svg', alt: 'KHovnanian Homes' },
  { src: '/logos/follett.svg', alt: 'Follett' },
  { src: '/logos/intelsat.svg', alt: 'Intelsat' },
  { src: '/logos/sisense.svg', alt: 'Sisense' },
  { src: '/logos/nuance.svg', alt: 'Nuance' },
];

const resources = [
  {
    image: '/placeholder-resource.svg',
    badge: 'Downloads',
    title: 'GRIT® 2026 Ransomware & Cyber Threat Report',
    date: 'January 15, 2026',
    link: '/resources/grit-report',
    ctaText: 'Download',
    viewAllText: 'View All Downloads',
    viewAllLink: '/resources/downloads',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'Events',
    title: 'Premier Cybersecurity Conference',
    date: 'March - November 2026',
    link: '/resources/conference',
    ctaText: 'Learn More',
    viewAllText: 'View All Events',
    viewAllLink: '/resources/events',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'Events',
    title: 'GRIT® 2026 Ransomware & Cyber Threat Report Presentation',
    date: 'January 22, 2026',
    link: '/resources/webinar-grit',
    ctaText: 'Download',
    viewAllText: 'View All Events',
    viewAllLink: '/resources/events',
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        title="Trusted Cybersecurity Expertise"
        highlightWord="Trusted"
        subtitle="We provide organizations with proven expertise, tailored solutions and services to help make better cybersecurity decisions that minimize risk."
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        bgImage={heroImage}
      />

      {/* ===== WHY US ===== */}
      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Why GuidePoint?"
              title="We Are Your Trusted Advisor"
              subtitle="Our team guides you through the complex security maze to help you make more informed risk decisions at the speed of business."
              ctaText="Why GuidePoint?"
              ctaLink="/about"
              center
            />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {features.map((f) => (
              <div className="col-md-4" key={f.title}>
                <FeatureCard {...f} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="section section--accent home-services">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Services"
              title="Expertise Based on Reality - Not Theory"
              subtitle="Explore our cybersecurity services and solutions across a wide range of vetted technologies:"
            />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SPLIT - MANAGED SECURITY ===== */}
      <section className="section section--light">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-left">
                <p className="section-header__label">Managed Security Services</p>
                <h2
                  className="fw-bold mb-3"
                  style={{ fontFamily: "'Exo 2', sans-serif", color: '#0f0f27' }}
                >
                  Ensure a Stronger Cybersecurity Posture at all Times
                </h2>
                <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                  GPVUE provides you with an integrated program that leverages our
                  expertise across a wide range of cybersecurity disciplines and is
                  designed specifically to meet your unique needs over the course of a
                  year.
                </p>
                <Link
                  to="/services/managed-security"
                  className="btn btn-accent btn-cta"
                >
                  Learn about GPVUE <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="section-split__image">
                  <img
                    src={managedSecImage}
                    alt="Managed Security Program"
                    className="rounded-4 w-100"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST, STATS & TESTIMONIAL ===== */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              title="Trusted by Government and Commercial Organizations"
              subtitle="From security technologies to services, we provide insights and solutions to create an optimized environment that reduces cyber risk."
              center
            />
          </AnimatedSection>

          <AnimatedSection animation="scale-in" className="mb-5">
            <LogoGrid logos={clientLogos} />
          </AnimatedSection>

          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <AnimatedSection animation="fade-in-left">
                <div className="stat-list">
                  {stats.map((s) => (
                    <StatListItem key={s.label} {...s} />
                  ))}
                </div>
                <Link to="/customers" className="btn btn-accent btn-cta">
                  View Customers <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-8">
              <AnimatedSection animation="fade-in-right">
                <div className="testimonial-featured">
                  <img
                    src={heroImage}
                    alt="Client testimonial"
                    className="testimonial-featured__image"
                  />
                  <div className="testimonial-featured__overlay">
                    <p className="testimonial-featured__quote">
                      &ldquo;I have a lot of personal trust in GuidePoint Security.&rdquo;
                    </p>
                    <p className="testimonial-featured__author">Joey Johnson, CISO, Premise Health</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="scale-in">
            <div className="cta-banner cta-banner--decorated">
              <div className="cta-banner__overlay">
                <h2 className="cta-banner__title">Be Informed &amp;<br />Reduce Your Risk</h2>
                <p className="cta-banner__text">
                  Better protect your organization with our unmatched expertise and proven approach to cybersecurity.
                </p>
                <Link to="/contact" className="btn btn-accent btn-cta">
                  Talk to an Expert <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-header__title mb-0">Additional Resources</h2>
              <Link to="/resources" className="text-white text-decoration-none fw-500">
                View All <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
            <div className="accent-line"></div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {resources.map((r) => (
              <div className="col-md-4" key={r.title}>
                <ResourceCard {...r} />
                <Link to={r.viewAllLink} className="d-block mt-3 text-white-50 text-decoration-none small">
                  {r.viewAllText} <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section section--dark text-center">
        <NetworkBackground variant="dark" nodeCount={50} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <h2
              className="fw-bold mb-3 text-white"
              style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Be Informed + Reduce Risk
            </h2>
            <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 600 }}>
              Better protect your organization with our unmatched expertise and proven approach to cybersecurity.
            </p>
            <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
              Talk to an Expert <i className="bi bi-arrow-right"></i>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
