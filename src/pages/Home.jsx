import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import FeatureCard from '../components/sections/FeatureCard';
import ServiceCard from '../components/sections/ServiceCard';
import StatCard from '../components/sections/StatCard';
import TestimonialCard from '../components/sections/TestimonialCard';
import ResourceCard from '../components/sections/ResourceCard';
import LogoGrid from '../components/sections/LogoGrid';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import heroImage from '../assets/images/hero.jpeg';
import managedSecImage from '../assets/images/managed_Sec.jpeg';

const features = [
  {
    icon: 'bi-shield-check',
    title: 'Highly-Trained',
    description: '50%+ tenured engineers, architects, and consultants with deep domain expertise.',
  },
  {
    icon: 'bi-award',
    title: 'Deep Expertise',
    description: 'Industry-leading certifications and battle-tested knowledge across all security domains.',
  },
  {
    icon: 'bi-globe',
    title: 'Vendor Agnostic',
    description: 'Access to 650+ security technologies — we recommend what fits, not what pays.',
  },
];

const services = [
  { icon: 'bi-code-slash', title: 'Application Security', path: '/services/application-security' },
  { icon: 'bi-robot', title: 'AI Security', path: '/services/ai-security' },
  { icon: 'bi-cloud', title: 'Cloud Security', path: '/services/cloud-security' },
  { icon: 'bi-database-lock', title: 'Data Security', path: '/services/data-security' },
  { icon: 'bi-envelope-check', title: 'Email Security', path: '/services/email-security' },
  { icon: 'bi-laptop', title: 'Endpoint Security', path: '/services/endpoint-security' },
  { icon: 'bi-clipboard-check', title: 'GRC', path: '/services/grc' },
  { icon: 'bi-person-badge', title: 'IAM', path: '/services/iam' },
  { icon: 'bi-exclamation-triangle', title: 'Incident Response', path: '/services/incident-response' },
  { icon: 'bi-shield-lock', title: 'Managed Security', path: '/services/managed-security' },
  { icon: 'bi-hdd-network', title: 'Network Security', path: '/services/network-security' },
  { icon: 'bi-gear-wide-connected', title: 'OT / IoT Security', path: '/services/ot-security' },
  { icon: 'bi-mortarboard', title: 'Security Awareness', path: '/services/security-awareness' },
  { icon: 'bi-display', title: 'SOC Services', path: '/services/soc' },
  { icon: 'bi-people', title: 'Staff Augmentation', path: '/services/staff-augmentation' },
  { icon: 'bi-bug', title: 'Pen Testing', path: '/services/vulnerability-management' },
];

const stats = [
  { number: '4,200+', label: 'Customers Protected' },
  { number: '50%', label: 'of Fortune 50' },
  { number: '40%', label: 'of Fortune 500' },
  { number: '650+', label: 'Security Technologies' },
];

const clientLogos = [
  { src: '/placeholder-resource.svg', alt: 'Client 1' },
  { src: '/placeholder-resource.svg', alt: 'Client 2' },
  { src: '/placeholder-resource.svg', alt: 'Client 3' },
  { src: '/placeholder-resource.svg', alt: 'Client 4' },
  { src: '/placeholder-resource.svg', alt: 'Client 5' },
  { src: '/placeholder-resource.svg', alt: 'Client 6' },
];

const resources = [
  {
    image: '/placeholder-resource.svg',
    badge: 'Report',
    title: 'GRIT 2026 Ransomware & Cyber Threat Report',
    date: 'Jan 15, 2026',
    link: '/resources/grit-report',
    ctaText: 'Download',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'Event',
    title: 'Premier Cybersecurity Conference 2026',
    date: 'March - November 2026',
    link: '/resources/conference',
    ctaText: 'Learn More',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'Webinar',
    title: 'GRIT 2026 Ransomware Report Webinar',
    date: 'January 22, 2026',
    link: '/resources/webinar-grit',
    ctaText: 'Watch Now',
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        title="Trusted Cybersecurity Expertise"
        highlightWord="Cybersecurity"
        subtitle="We guide your organization through today's complex threat landscape with proven expertise and vendor-agnostic solutions."
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        secondaryCta="Watch Overview"
        secondaryCtaLink="/resources"
        bgImage={heroImage}
      />

      {/* ===== WHY US ===== */}
      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              title="Why Choose Us"
              subtitle="Dedicated cybersecurity practitioners who live and breathe security every day."
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
            <SectionHeader title="Our Services" center />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SPLIT - MANAGED SECURITY ===== */}
      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={35} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="section-split__image">
                  <img
                    src={managedSecImage}
                    alt="Managed Security Program"
                    className="rounded-4 w-100"
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="accent-line"></div>
                <h2
                  className="fw-bold mb-3 text-white"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  Integrated Managed Security Program
                </h2>
                <p className="text-white-50 mb-4" style={{ lineHeight: 1.8 }}>
                  A comprehensive annual security program that combines expert guidance,
                  cutting-edge technology, and quarterly business reviews to keep your
                  organization ahead of evolving threats.
                </p>
                <Link
                  to="/services/managed-security"
                  className="btn btn-accent btn-cta"
                >
                  Learn More <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader title="Trusted by Industry Leaders" center />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="stats-row mb-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <StatCard {...s} />
              </div>
            ))}
          </AnimatedSection>
          <AnimatedSection animation="scale-in">
            <LogoGrid logos={clientLogos} />
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="section section--light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <AnimatedSection animation="scale-in">
                <TestimonialCard
                  quote="I have a lot of personal trust in this team. Their expertise and responsiveness have been invaluable to our security posture."
                  author="Joey Johnson"
                  role="CISO"
                  company="Premise Health"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader title="Latest Resources" center />
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {resources.map((r) => (
              <div className="col-md-4" key={r.title}>
                <ResourceCard {...r} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section section--dark text-center">
        <NetworkBackground variant="dark" nodeCount={50} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <h2
              className="fw-bold mb-3 text-white"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Ready to Secure Your Organization?
            </h2>
            <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: 500 }}>
              Connect with our cybersecurity experts today and discover how we can strengthen your defenses.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-accent btn-lg btn-cta px-4">
                Talk to an Expert <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-4">
                Explore Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
