import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import ServiceAccordion from '../components/sections/ServiceAccordion';
import BeInformed from '../components/sections/BeInformed';
import { servicesList } from '../data/services';

const advisorCards = [
  {
    title: 'Tailored Solution-Agnostic Approach',
    description: 'Our agnostic approach ensures that we provide the right cybersecurity recommendations and services, tailored specifically to a customer\u2019s environment and business goals.',
  },
  {
    title: 'Leverage Our Deep Relationships',
    description: 'We have deep relationships with multiple stakeholders across 4,200+ accounts because we focus on solving customer problems as their trusted partner.',
  },
  {
    title: 'Ensure Maximum Solution Value',
    description: 'Our highly-certified cybersecurity practitioners leverage their real-world expertise to implement, integrate, optimize and manage solutions \u2013 ensuring customers receive maximum value from your solution.',
  },
  {
    title: 'Simplify Procurement',
    description: 'We provide quick turnaround on complex pricing and quotes and also offer flexible financing options to simplify the cybersecurity solution and services procurement process.',
  },
];

export default function VendorPartners() {
  return (
    <div className="vendor-partners-page">
      {/* ===== HERO ===== */}
      <Hero
        label="Why Partner with Cyber Security?"
        title="We're Not Your Typical VAR"
        highlightWord="Not"
        highlightStyle="box"
        subtitle="Deep Customer Relationships and Hands-on Cybersecurity Expertise to Maximize the Value of Your Solution"
        highlightSubtitleWord="Hands-on"
        ctaText="Partner with Us"
        ctaLink="/contact"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
        variant="page"
      />

      {/* ===== WHEN IT COMES TO PARTNERSHIPS ===== */}
      <section className="section section--dark vp-partnerships">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <h2 className="vp-section-title text-white">
                  When it Comes to <span className="text-accent-box">Partnerships</span>, One Size Does Not Fit All
                </h2>
              </div>
              <div className="col-lg-7">
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Our unique culture, expertise and business model help us stand out from your typical cybersecurity product and services provider.
                </p>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  With more than 50% of our team being technical, we evaluate and work with the best technology solutions and platforms that solve real cybersecurity problems for our customers.
                </p>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  And with our financing arm, we offer flexible options to simplify the cybersecurity solution and services procurement process.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== YOUR CUSTOMER'S TRUSTED ADVISOR — 2x2 cards ===== */}
      <section className="section section--dark vp-advisor">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="vp-section-title text-white">Your Customer&rsquo;s Trusted Advisor</h2>
              <div className="gradient-underline mx-auto" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {advisorCards.map((card) => (
              <div className="col-md-6" key={card.title}>
                <GradientCard
                  title={card.title}
                  description={card.description}
                  accent="bottom"
                  titleLg
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FEATURED PARTNERS — Logo grid ===== */}
      <section className="section section--light vp-partners">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="vp-section-title" style={{ color: '#0f0f27' }}>Featured Partners</h2>
              <div className="gradient-underline mx-auto" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4 justify-content-center">
            {['CrowdStrike', 'Palo Alto Networks', 'Splunk', 'Okta', 'Zscaler', 'SentinelOne', 'Proofpoint', 'CyberArk', 'Tenable', 'Rapid7', 'Fortinet', 'F5'].map((name) => (
              <div className="col-6 col-md-4 col-lg-2" key={name}>
                <div className="vp-partner-logo">
                  <span>{name}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== COMPREHENSIVE SOLUTIONS — Services Accordion ===== */}
      <section className="section section--dark vp-services">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p className="vp-services__label">Comprehensive Solutions</p>
              <h2 className="vp-section-title text-white" style={{ maxWidth: 800, margin: '0 auto' }}>
                Your Customer&rsquo;s Single Point of Contact for a <span className="text-accent-box">Wide Range</span> of Cybersecurity Services and Technologies
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="animate-on-scroll">
            <div className="service-accordion-wrap">
              <ServiceAccordion services={servicesList} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
