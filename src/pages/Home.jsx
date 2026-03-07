import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import FeatureCard from '../components/sections/FeatureCard';
import ResourceCard from '../components/sections/ResourceCard';
import LogoGrid from '../components/sections/LogoGrid';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import BeInformed from '../components/sections/BeInformed';
import { servicesList } from '../data/services';
import heroImage from '../assets/images/hero.jpeg';

const features = [
  {
    icon: 'bi-person-badge',
    title: 'Extensive, Unrivaled Expertise',
    description: 'Our highly trained experts empower you with the insight, access, guidance and support to make more informed decisions and strengthen your security posture. We help set security strategy, and with product evaluation and selection, implementation, optimization and management to maximize the value of your technology investments.',
  },
  {
    icon: 'bi-bullseye',
    title: 'Comprehensive, Adaptable Solutions',
    description: 'We put 800+ technology vendors (best-in-class and emerging) through a rigorous vetting process to ensure we know how they solve real customer challenges for you. As your trusted advisor, we take a vendor-objective approach to ensure you have the best-fit solution for your unique requirements.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Strategic, Relationship-Powered Approach',
    description: 'We grew our business on a trusted relationship framework. We provide personalized, local touch and support backed by national strength. We stand by our clients no matter where you are in your cyber journey and deliver objective strategies shaped by what you need vs. what\'s easy.',
  },
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
    badge: 'Datasheet',
    title: 'Cyber Security Overview',
    link: '/resources/overview',
    ctaText: 'Download',
    viewAllText: 'View All Datasheets',
    viewAllLink: '/resources/datasheets',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'Whitepaper',
    title: 'Breaking the Tool Acquisition Cycle: How to Escape Security Tool Sprawl Through Strategic Consolidation',
    link: '/resources/tool-acquisition',
    ctaText: 'Download',
    viewAllText: 'View All Whitepapers',
    viewAllLink: '/resources/whitepapers',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'eBook',
    title: 'A Day in the Life of Operational Technology Security',
    link: '/resources/ot-ebook',
    ctaText: 'Download',
    viewAllText: 'View All eBooks',
    viewAllLink: '/resources/ebooks',
  },
  {
    image: '/placeholder-resource.svg',
    badge: 'Video',
    title: 'A Day in the Life: Threat Actor Communications',
    link: '/resources/threat-actor-video',
    ctaText: 'Watch Now',
    viewAllText: 'View All Videos',
    viewAllLink: '/resources/videos',
  },
];

function ServiceAccordion({ services }) {
  const [openIndex, setOpenIndex] = useState(null);
  const half = Math.ceil(services.length / 2);
  const leftCol = services.slice(0, half);
  const rightCol = services.slice(half);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const renderItem = (s, i) => {
    const isOpen = openIndex === i;
    return (
      <div className={`service-accordion__item ${isOpen ? 'service-accordion__item--open' : ''}`} key={s.title}>
        <button className="service-accordion__header" onClick={() => toggle(i)}>
          <span className="service-accordion__icon">
            <i className={`bi ${s.icon}`}></i>
          </span>
          <span className="service-accordion__title">{s.title}</span>
          <span className="service-accordion__toggle">
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-plus'}`}></i>
          </span>
        </button>
        <div className={`service-accordion__body ${isOpen ? 'service-accordion__body--open' : ''}`}>
          <p>{s.description}</p>
          <Link to={s.path} className="btn btn-outline-light btn-sm">
            Read More
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="row g-4">
      <div className="col-lg-6">
        {leftCol.map((s, i) => renderItem(s, i))}
      </div>
      <div className="col-lg-6">
        {rightCol.map((s, i) => renderItem(s, i + half))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        title="Stronger Together. Protecting What's Next."
        highlightWord="Stronger Together."
        highlightStyle="gradient"
        subtitle="When you're responsible for keeping your organization's people, data and operations safe, you need a partner you can count on. We bring together strategic partnerships, deep expertise and smart technology to protect what matters most."
        ctaText="Talk with an Expert"
        ctaLink="/contact"
        bgImage={heroImage}
      />

      {/* ===== WHY US ===== */}
      <section className="section section--dark">
        <NetworkBackground variant="dark" nodeCount={40} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Why Cyber"
              title="Your Cybersecurity is Our Mission"
              subtitle="Our team guides you through the complex cybersecurity landscape to help you make more informed risk decisions at the speed of business."
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
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mt-5">
              <Link to="/company" className="btn btn-accent btn-lg btn-cta px-4">
                Why Cyber
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SERVICES LIST ===== */}
      <section className="section section--dark home-services-list">
                <NetworkBackground variant="dark" nodeCount={40} />

        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader
              label="Services & Technologies"
              title="Your Single Point of Contact for Cybersecurity Expertise"
              center
            />
          </AnimatedSection>
          <AnimatedSection animation="animate-on-scroll">
            <ServiceAccordion services={servicesList} />
          </AnimatedSection>
        </div>
      </section>
            {/* ===== TRUSTED BY ===== */}
      <section className="section section--indigo">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="trusted-title">
                Trusted by 5,500+ Businesses &amp; Government Agencies
              </h2>
              <p className="trusted-subtitle">
                Since 2011, we&rsquo;ve helped organizations like yours stay ahead of advanced
                threats, reduce risk and protect what matters most. Our customers span
                small and mid-sized businesses, global enterprises and government
                agencies across nearly every major industry.
              </p>
              <p className="trusted-explore">Explore their stories.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" className="mb-5">
            <LogoGrid logos={clientLogos} />
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <div className="testimonial-video">
              <img
                src={heroImage}
                alt="Joey Johnson testimonial"
                className="testimonial-video__image"
              />
              <div className="testimonial-video__overlay">
                <div className="testimonial-video__play">
                  <i className="bi bi-play-circle"></i>
                </div>
                <div className="testimonial-video__content">
                  <p className="testimonial-video__quote">
                    &ldquo;I have a lot of personal trust in Cyber Security.&rdquo;
                  </p>
                  <p className="testimonial-video__watch">Watch the Video &gt;</p>
                  <p className="testimonial-video__author">Joey Johnson, CISO, Premise Health</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mt-5">
              <Link to="/company" className="btn btn-accent btn-lg btn-cta px-4">
                Meet Our Customers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section className="section section--indigo home-resources">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <h2 className="trusted-title mb-0">Additional Resources</h2>
              </div>
              <Link to="/resources" className="text-white text-decoration-none fw-600">
                View All &gt;
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {resources.map((r) => (
              <div className="col-lg-3 col-md-6 mt-5" key={r.title}>
                <ResourceCard {...r} />
                <Link to={r.viewAllLink} className="d-block mt-3 text-white text-decoration-underline small fw-600">
                  {r.viewAllText} &gt;
                </Link>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
