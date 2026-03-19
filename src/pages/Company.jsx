import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import BeInformed from '../components/sections/BeInformed';

const values = [
  {
    icon: 'bi-flag-fill',
    title: 'Take Ownership and Complete our Mission',
    description: 'We are only as great of a place to work as we make it. We hold ourselves accountable, become experts and take the initiative to get things done.',
  },
  {
    icon: 'bi-hand-thumbs-up-fill',
    title: '"WOW Them!"',
    description: 'We strive to be a long-term partner and make our customers\u2019 experience a success, enabling and securing their business. We realize that we all have customers, whether they\u2019re our clients, coworkers, vendors or others.',
  },
  {
    icon: 'bi-lightbulb-fill',
    title: 'Always Challenge Yourself & Have Fun',
    description: '\u201CYou miss 100% of the shots you don\u2019t take,\u201D so we always push ourselves to take calculated risks and exceed our own expectations. We do what\u2019s necessary to \u201CWow Them,\u201D and we have fun doing it.',
  },
  {
    icon: 'bi-chat-square-text-fill',
    title: 'No Jerks!',
    description: 'Life is too short to work with jerks, so we treat people with respect and dignity. When we have an issue, we pick up the phone and work constructively to address it. We know we need each other to succeed.',
  },
];

export default function Company() {
  return (
    <div className="csr-page">
      {/* ===== HERO ===== */}
      <Hero
        title="Corporate Social Responsibility (CSR)"
        subtitle="As a premier cybersecurity solution provider, we help commercial and government customers make more informed decisions that minimizes risk. Our goal is to foster sustainable business practices that benefit our customers, employees, partners and the different regions that we serve."
        label="Making the Cyber and Physical Worlds Safer"
        ctaText="Read our CSR Overview"
        ctaLink="/contact"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
        variant="page"
      />

      {/* ===== OUR CULTURE IS GROUNDED IN OUR VALUES ===== */}
      <section className="section section--dark csr-values">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-4">
              <h2 className="csr-section-title text-white">Our Culture Is Grounded in Our Values</h2>
              <div className="gradient-underline mx-auto mb-4" />
              <p className="text-white mx-auto" style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 900 }}>
                Our employees are the lifeblood of the organization, using their creativity and talent to invent new offerings, meet ever-changing demands and offer effective cybersecurity solutions to our customers. Our culture is borne from our corporate values:
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {values.map((v) => (
              <div className="col-md-6" key={v.title}>
                <GradientCard accent="bottom">
                  <div className="csr-value-card">
                    <div className="csr-value-card__header">
                      <i className={`bi ${v.icon} csr-value-card__icon`}></i>
                      <h3 className="csr-value-card__title">{v.title}</h3>
                    </div>
                    <p className="csr-value-card__desc">{v.description}</p>
                  </div>
                </GradientCard>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OUR PEOPLE: THE BUILDING BLOCKS OF OUR CULTURE ===== */}
      <section className="section section--dark csr-people">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="csr-section-title text-white">
                  <span className="text-accent-box">Our People</span>: The Building Blocks of Our Culture
                </h2>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  From our beginning, we created a peer-to-peer recognition program to celebrate our employee&apos;s achievements. We named it Pay-It-Forward. Our values aren&apos;t just hanging up on a wall. We demonstrate them every day&mdash;to each other and to our customers.
                </p>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2022/03/Ernest-Dunn-C78A7507.jpg"
                    alt="Our People"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ESG — REDUCING OUR ENVIRONMENTAL IMPACT ===== */}
      <section className="section section--indigo-light csr-esg">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h3 className="csr-esg__label">Environmental, Social, Governance (ESG)</h3>
            </div>
          </AnimatedSection>

          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="csr-section-title text-white">Reducing Our Environmental Impact</h2>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  We are committed to ensuring that our operations have a minimal impact on the environment by intentionally creating and maintaining the company&apos;s workforce to be more than 90% remote. Our team continues to assess our operational footprint, looking for effective ways of further reducing our environmental impact where possible.
                </p>
                <Link to="/contact" className="btn btn-accent mt-3">
                  Learn More
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2022/04/C78A7590.jpg"
                    alt="Environmental Impact"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEI — DIVERSITY, EQUITY AND INCLUSION ===== */}
      <section className="section section--dark csr-dei">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2026/03/CKO-2026-GuidePoint-Team-1024x856.jpeg"
                    alt="Diversity Equity Inclusion"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="csr-section-title text-white">Diversity, Equity and Inclusion (DEI)</h2>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Our DEI program champions and embodies the principles of Diversity, Equity and Inclusion at every level of our organization and in every facet of our interactions. We are committed to fostering a culture where every individual feels valued, respected and empowered to contribute their unique perspectives.
                </p>
                <Link to="/contact" className="btn btn-accent mt-3">
                  Learn More
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GIVES BACK ===== */}
      <section className="section section--indigo-light csr-gives-back">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="csr-section-title text-white">Cyber Security Gives Back</h2>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Core to our company&apos;s values is the concept of doing good. After all, we were founded to help organizations solve their most complex cybersecurity challenges.
                </p>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Our &ldquo;Gives Back&rdquo; program has included the support of many of our key partners. Together, we&apos;ve been able to provide substantial donations to hospitals for many causes, including care for burn victims and cancer-related treatments, children&apos;s charities and to patients and hospitals dealing with COVID-19 challenges.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2022/03/Brian-Brush-C78A7539.jpg"
                    alt="Gives Back"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OUR CULTURE — Video/Image Gallery ===== */}
      <section className="section section--dark csr-culture">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="csr-section-title text-white">Our Culture</h2>
              <div className="gradient-underline mx-auto" />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {[1, 2, 3, 4].map((i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', aspectRatio: '1' }}>
                  <img
                    src={`https://www.guidepointsecurity.com/wp-content/uploads/2022/0${i + 2}/C78A7${400 + i * 30}.jpg`}
                    alt={`Culture ${i}`}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
