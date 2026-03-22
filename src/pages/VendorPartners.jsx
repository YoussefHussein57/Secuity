import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import ServiceAccordion from '../components/sections/ServiceAccordion';
import Certifications from '../components/sections/Certifications';
import BeInformed from '../components/sections/BeInformed';
import { servicesList } from '../data/services';

const advisorCards = [
  {
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png',
    title: 'Tailored Solution-Agnostic Approach',
    description: 'Our agnostic approach ensures that we provide the right cybersecurity recommendations and services, tailored specifically to a customer\u2019s environment and business goals.',
  },
  {
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png',
    title: 'Leverage Our Deep Relationships',
    description: 'We have deep relationships with multiple stakeholders across 4,200+ accounts because we focus on solving customer problems as their trusted partner.',
  },
  {
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png',
    title: 'Ensure Maximum Solution Value',
    description: 'Our highly-certified cybersecurity practitioners leverage their real-world expertise to implement, integrate, optimize and manage solutions \u2013 ensuring customers receive maximum value from your solution.',
  },
  {
    iconImage: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png',
    title: 'Simplify Procurement',
    description: 'We provide quick turnaround on complex pricing and quotes and also offer flexible financing options to simplify the cybersecurity solution and services procurement process.',
  },
];

export default function VendorPartners() {
  return (
    <div className="vendor-partners-page">
      {/* ===== HERO ===== */}
      <Hero
        label="Why Partner with GuidePoint Security?"
        title="We're Not Your Typical VAR"
        highlightWord="Not"
        highlightStyle="box"
        subtitle="Deep Customer Relationships and Hands-on Cybersecurity Expertise to Maximize the Value of Your Solution"
        highlightSubtitleWord="Hands-on"
        ctaText="Partner with Us"
        ctaLink="/contact"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Data_Security_and_Privacy.png"
        variant="page"
        showNetwork={false}
      />

      {/* ===== WHEN IT COMES TO PARTNERSHIPS ===== */}
      <section className="section section--dark vp-partnerships">
        <div className="container pt-lg-5">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row justify-content-between align-items-start">
              <div className="col-lg-5">
                <h2 className="vp-section-title text-white">
                  When it Comes to <span className="text-accent-box">Partnerships</span>, One Size Does Not Fit All
                </h2>
              </div>
              <div className="col-lg-6">
                <p className="text-white vp-text">
                  Our unique culture, expertise and business model help us stand out from your typical cybersecurity product and services provider.
                </p>
                <p className="text-white vp-text">
                  With more than 50% of our team being technical, we evaluate and work with the best technology solutions and platforms that solve real cybersecurity problems for our customers.
                </p>
                <p className="text-white vp-text">
                  And with our financing arm, we offer flexible options to simplify the cybersecurity solution and services procurement process.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== YOUR CUSTOMER'S TRUSTED ADVISOR — 4 cards in 1 row ===== */}
      <section className="section section--indigo vp-advisor" style={{ padding: '48px 40px 120px' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="vp-section-title text-white"><span className="gradient-underline-text">Your Customer&rsquo;s Trusted Advisor</span></h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {advisorCards.map((card) => (
              <div className="col-md-6 col-lg-3" key={card.title}>
                <GradientCard
                  iconImage={card.iconImage}
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

      {/* ===== FEATURED PARTNERS ===== */}
      <section className="section vp-partners" style={{ padding: '48px 40px 120px', background: 'linear-gradient(180deg, #D9E6FC 100%, #F2295B00 0%)' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="vp-section-title" style={{ color: '#0f0f27', fontSize: 50 }}>
                <span className="gradient-underline-text">Featured Partners</span>
              </h2>
            </div>
            <div className="text-center">
              <img
                src="https://www.guidepointsecurity.com/wp-content/uploads/2024/07/Why_GuidePoint_Partners.svg"
                alt="Featured Partners"
                className="w-100"
                style={{ maxWidth: 1000 }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== COMPREHENSIVE SOLUTIONS — Services Accordion (white bg) ===== */}
      <section className="section vp-services" style={{ background: '#fff', padding: '48px 40px 80px' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <p className="vp-services__label">Comprehensive Solutions</p>
              <h2 className="vp-section-title" style={{ color: '#0f0f27', fontSize: 50, maxWidth: 900, margin: '0 auto' }}>
                Your Customer&rsquo;s Single Point of Contact for a <span className="text-accent-box-dark">Wide Range</span> of Cybersecurity Services and Technologies
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

      {/* ===== CERTIFICATIONS ===== */}
      <Certifications variant="page" />

      <BeInformed />
    </div>
  );
}
