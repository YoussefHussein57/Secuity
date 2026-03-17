import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const lifecycleSteps = [
  {
    number: '1',
    title: 'Evaluation & Selection',
    icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/evaluation-selection.png',
    description:
      "Our team of engineers takes a consultative approach to understanding the unique nature of your environment and identifying the solutions that meet your needs. From defining selection criteria to assisting with RFP creation to building a vendor comparison matrix and developing a proof of concept, we help you quickly identify the best solutions for your requirements.",
  },
  {
    number: '2',
    title: 'Implementation',
    icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/implementation.png',
    description:
      'Our staff has decades of cybersecurity knowledge and hands-on experience from working in large commercial and government organizations. We work with you to properly install and configure solutions in your environment.',
  },
  {
    number: '3',
    title: 'Optimization',
    icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/optimization.png',
    description:
      'Once a security solution is installed and running, we make sure your team is properly trained on the technology and that it is optimized to run efficiently and effectively in your environment.',
  },
  {
    number: '4',
    title: 'Management',
    icon: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/05/management.png',
    description:
      'Our team stays involved post-deployment to provide system management and analysis. We can also provide "as a service" offerings to manage your security platforms as well as industry-leading Managed Detection and Response solutions.',
  },
];

const outcomeCards = [
  {
    icon: 'bi-gem',
    title: 'White Glove Service',
    description:
      'From our technology acquisition to service offerings, our solutions are tailored specifically to your business and your unique, complex challenges. Our experts are with you each step of the way.',
  },
  {
    icon: 'bi-people',
    title: 'Relationship-Focused',
    description:
      'We have local ownership at a national scale. You get that personal touch along with access to a wider team of practitioners and expertise across different security disciplines and technologies. We are your champions and take the complexity away from dealing with potentially tens to hundreds of vendors and service providers.',
  },

];

export default function Technologies() {
  return (
    <>
      {/* 1. Hero — centered, page variant with bg image + icon */}
      <Hero
        title="Technologies"
        subtitle="Your Single Point of Contact for all Cybersecurity Technology Needs"
        ctaText="Talk to an Expert"
        ctaLink="/contact"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Application_Security-1.png"
        variant="page"
        showNetwork={false}
        iconImage="https://www.guidepointsecurity.com/wp-content/uploads/elementor/thumbs/app-sec-icon-light-blue-qnao7t706zq6z2r91fn1ettvnmo1pve4o4j9rg9sk0.png"
      />

      {/* 2. Challenges — Vendor-Agnostic section with blue orb bg */}
      <section
        className="section section--dark text-center tech-challenges"
        style={{ padding: '80px 0 120px', position: 'relative', overflow: 'hidden' }}
      >
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <p className="section-header__label" style={{ color: '#fff' }}>Services & Technologies Challenges</p>
            <h2 className="text-white mb-4" style={{ fontSize: '50px', fontWeight: 500, lineHeight: '60px' }}>
              Vendor-Agnostic Approach To Help You Acquire And Use Best-Fit Solutions
            </h2>
            <p className="text-white mx-auto" style={{ fontSize: '20px', lineHeight: '30px', maxWidth: 990 }}>
              The reality is that every organization's cybersecurity ecosystem is different and requires a tailored approach to address cyber risks and threats. That's why we take a vendor-agnostic approach when it comes to analyzing, comparing and recommending best-fit security solutions specific to your environment and business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Dark Split — Access and Buying Power */}
      <section className="section section--dark dark-split-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2 order-1">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__text">
                  <p className="section-header__label">Services & Technologies Review Process</p>
                  <h2 className="use-cases__title text-start">
                    <span className="text-accent-box">Access And Buying Power</span> For Hundreds Of Vetted Security Technologies
                  </h2>
                  <p className="text-white" style={{ lineHeight: 1.5, fontSize: '16px' }}>
                    Since we have a large variety of partners and aren't aligned to specific manufacturers, we can work with you to identify and deploy the right technology. We are highly-certified in the technologies that we recommend, with hands-on experience implementing, managing and optimizing these tools. With CyberPoint Security, you can be assured that you're gaining the solutions to address your unique needs within the budget parameters.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 order-lg-1 order-2">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__image dark-split__image--left">
                  <img src="/overview-icon-left.png" alt="Security Technologies" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Solution Lifecycle — split (text + image) then 4 cards */}
      <section className="section section--dark">
        <div className="container">
          {/* Split: text left, image right */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="dark-split__text">
                  <p className="section-header__label" style={{ color: '#fff' }}>Services & Technologies</p>
                  <h2 className="use-cases__title text-start mb-3">
                    <span className="text-accent-box">Solution</span> Lifecycle
                  </h2>
                  <p className="text-white mb-4" style={{ lineHeight: 1.5, fontSize: '16px' }}>
                    We review, compare, recommend and help you source the best-fit solutions for your unique environment.
                  </p>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="dark-split__image dark-split__image--right">
                  <img src="/overview-icon.png" alt="Solution Lifecycle" />
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* 4 lifecycle cards in a row */}
          <AnimatedSection animation="stagger-children">
            <div className="row g-4">
              {lifecycleSteps.map((step) => (
                <div className="col-lg-3 col-md-6" key={step.number}>
                  <div className="tech-lifecycle-card">
                    <div className="tech-lifecycle-card__icon">
                      <img src={step.icon} alt={step.title} />
                    </div>
                    <h4 className="tech-lifecycle-card__title">
                      {step.number}. {step.title}
                    </h4>
                    <p className="tech-lifecycle-card__desc">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. Outcomes — "We're Not Your Typical VAR" */}
      <section className="section section--indigo" style={{ padding: '48px 0 120px' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <p className="section-header__label" style={{ color: '#fff' }}>Services & Technologies Outcomes</p>
            <h2 className="text-white mb-3" style={{ fontSize: '50px', fontWeight: 500, lineHeight: '60px' }}>
              We're Not Your Typical VAR
            </h2>
            <p className="text-white mb-5" style={{ lineHeight: 1.6, fontSize: '18px', maxWidth: 900 }}>
              Our unique culture, expertise and business model help us stand out from your typical cybersecurity product and services provider. And with CyberPoint Security Financial, our financing arm, we offer flexible options to simplify the cybersecurity solution and services procurement process.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children">
            <div className="row g-4">
              {outcomeCards.map((card) => (
                <div className="col-lg-6" key={card.title}>
                  <div className="tech-outcome-card">
                    <h4 className="tech-outcome-card__title">{card.title}</h4>
                    <p className="tech-outcome-card__desc">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. Be Informed CTA */}
      <BeInformed />
    </>
  );
}
