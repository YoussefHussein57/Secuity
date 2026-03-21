import { useState, useEffect, useCallback } from 'react';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import GPSUniversity from '../components/sections/GPSUniversity';
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
    description: '\u201CYou miss 100% of the shots you don\u2019t take,\u201D so we always push ourselves to take calculated risks and exceed our own expectations. We do what\u2019s necessary to \u201CWow Them,\u201D and we have fun doing it. We realize that only we can control whether or not we\u2019re going to have a great day, so we choose to make it one.',
  },
  {
    icon: 'bi-chat-square-text-fill',
    title: 'No Jerks!',
    description: 'Life is too short to work with jerks, so we treat people with respect and dignity. When we have an issue, we pick up the phone and work constructively to address it. We know we need each other to succeed.',
  },
];

const testimonials = [
  {
    image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/08/242106-Guidepoint-Group_Photo-002-e1722821429290.jpg',
    quote: 'What do I love about working at GuidePoint? The people! I get to work with some of the smartest and most talented people in our industry and I have fun doing it. The people are like family and we have one goal in mind, helping our customers become more secure. The people at GuidePoint are passionate, professional and always willing to lend a hand. Getting to work with people that work this way and uphold the companies values on daily basis is refreshing.',
  },
  {
    image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/08/CKO2024-photo1.jpg',
    quote: 'I am proud to be a member of the GuidePoint Security Family. I have been working here for over 2 years now and have found this company to be supportive, autonomous and flexible. I have always felt encouraged to express my ideas, identify opportunities to improve efficiencies and define a plan for implementation. I feel like my voice is heard and that I am able to make an impact within my region and across the organization.',
  },
  {
    image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/08/CKO2024-photo1.jpg',
    quote: 'I can confidently say that I have never worked for a better company. There is never a day that I dread going to work \u2013 every day is an amazing adventure! Every person, from the partners to my co-workers that I interact with everyday, treats you as an equal. If I have questions, it feels as if they drop everything to help \u2013 even the partners! This is the first company I have worked for that I feel support and daily encouragement for goals that I have.',
  },
];

export default function Company() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="csr-page">
      {/* ===== HERO ===== */}
      <Hero
        title="Corporate Social Responsibility (CSR)"
        subtitle="As North America's premier cybersecurity solution provider, GuidePoint Security helps commercial and government customers make more informed decisions that minimizes risk. Our goal is to foster sustainable business practices that benefit our customers, employees, partners and the different regions that we serve."
        label="Making the Cyber and Physical Worlds Safer"
        labelAfterTitle
        ctaText="Read our CSR Overview"
        ctaLink="/contact"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
        variant="page"
        showNetwork={false}
        className="csr-hero"
      />

      {/* ===== OUR CULTURE IS GROUNDED IN OUR VALUES ===== */}
      <section className="section section--dark csr-values">
        <div className="container pt-lg-5">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-4">
              <h2 className="csr-section-title text-white"><span className="gradient-underline-text">Our Culture Is Grounded in Our Values</span></h2>
              <p className="text-white mx-auto" style={{ fontSize: 20, lineHeight: 1.5, maxWidth: 900 }}>
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
      <section className="section section--light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="ratio ratio-16x9 overflow-hidden">
                  <img
                    src="https://embed-ssl.wistia.com/deliveries/cbaad780a4d684a28388924a68c3dd2b.webp?image_crop_resized=1920x1080"
                    alt="Our People"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="csr-section-title" style={{ color: '#0f0f27', fontSize: 50 }}>
                  <span className="text-accent-box-dark">Our People:</span> The Building Blocks of Our Culture
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#000' }}>
                  From our beginning, we created a peer-to-peer recognition program
                  to celebrate our employee&apos;s achievements. We named it Pay-It-Forward.
                  Our values aren&apos;t just hanging up on a wall. We demonstrate them every
                  day—to each other and to our customers.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ESG — Environmental, Social, Governance ===== */}
      <section className="section section--indigo csr-esg" style={{ padding: '48px 40px 120px' }}>
        <div className="container pt-lg-0 pt-5">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/09/ESG-report-thumbnail-sept-2024.png"
                    alt="ESG Report"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="csr-section-title text-white" style={{ fontSize: 40 }}>
                  Environmental, Social, Governance (ESG)
                </h2>
                <p className="text-white" style={{ fontSize: 20, lineHeight: 1.5 }}>
                  Our ESG program is designed with the goal of continuously enhancing our policies and procedures to effectively govern the company, guide decision-making, comply with applicable laws and regulations and ultimately meet the needs of our internal and external stakeholders. We strive to provide a vibrant, inclusive workplace culture, meaningful engagement and competitive benefits where our team can continue to thrive and innovate.
                </p>
                <a href="https://www.guidepointsecurity.com/wp-content/uploads/2021/07/GPS_2024-ESG-Report-1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-3">
                  Learn More
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== REDUCING OUR ENVIRONMENTAL IMPACT ===== */}
      <section className="section section--indigo" style={{ padding: '48px 40px 120px' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <h2 className="csr-section-title text-white" style={{ fontSize: 50 }}>
                  Reducing Our Environmental Impact
                </h2>
                <p className="text-white" style={{ fontSize: 20, lineHeight: 1.5 }}>
                  We are committed to ensuring that our operations have a minimal impact on the environment by intentionally creating and maintaining the company&apos;s workforce to be more than 90% remote. Our team continues to assess our operational footprint, looking for effective ways of further reducing our environmental impact where possible.
                </p>
                <a href="https://www.guidepointsecurity.com/wp-content/uploads/2024/08/GuidePoint-2024-Carbon-Emmission-Report-.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-3">
                  Learn More
                </a>
              </div>
              <div className="col-lg-5">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/08/Carbon-footprint-report.jpg"
                    alt="Carbon Footprint Report"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== DEI — DIVERSITY, EQUITY AND INCLUSION ===== */}
      <section className="section section--indigo" style={{ padding: '48px 40px 120px' }}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-left">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/08/Guardian-Groups.jpg"
                    alt="Diversity Equity Inclusion"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="csr-section-title text-white" style={{ fontSize: 50 }}>
                  Diversity, Equity and Inclusion (DEI)
                </h2>
                <p className="text-white" style={{ fontSize: 20, lineHeight: 1.5 }}>
                  Our DEI program champions and embodies the principles of Diversity, Equity and Inclusion at every level of our organization and in every facet of our interactions. We encourage the formation and ongoing engagement of Employee Resource Groups to support a vibrant and inclusive workplace culture for all employees.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUPPLIER DIVERSITY ===== */}
      <section className="section section--indigo" style={{ padding: '48px 40px 120px' }}>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="csr-section-title text-white" style={{ fontSize: 50 }}>
                  Supplier Diversity
                </h2>
                <p className="text-white" style={{ fontSize: 20, lineHeight: 1.5 }}>
                  Our Supplier Diversity Program works to create competitive, profitable, ethical, sustainable and long-term partnerships with diverse, underrepresented and disadvantaged businesses to design and deliver high-quality, value-added products and innovative solutions to our customers. These groups include, but are not limited to:
                </p>
                <ul className="list-unstyled mt-4">
                  {[
                    'Disadvantaged-Owned Businesses',
                    'LGBT-Owned Businesses',
                    'Minority-Owned Businesses',
                    'Small Businesses',
                    'Veteran-Owned Businesses',
                  ].map((item) => (
                    <li key={item} className="d-flex align-items-center gap-2 mb-3">
                      <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: 20 }}></i>
                      <span className="text-white" style={{ fontSize: 18 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-right">
                <div className="overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/07/Brick_House_Into_the_Breach.jpg"
                    alt="Supplier Diversity"
                    className="w-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GPSU + OUR PEOPLE (shared component) ===== */}
      <GPSUniversity showOurPeople={false} darkLogo />

      {/* ===== GUIDEPOINT GIVES BACK ===== */}
      <section className="section section--dark" style={{ padding: '48px 40px 0' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-4">
              <h2 className="csr-section-title text-white" style={{ fontSize: 50 }}>
                GuidePoint <span className="text-accent-box">Gives</span> Back
              </h2>
            </div>
            <p className="text-white mx-auto" style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 1100 }}>
              Core to our company&apos;s values is the concept of doing good. After all, we were founded to help organizations solve their most complex cybersecurity challenges.
            </p>
            <p className="text-white mx-auto mb-5" style={{ fontSize: 18, lineHeight: 1.5, maxWidth: 1100 }}>
              Our &ldquo;GuidePoint Gives Back&rdquo; program has included the support of many of our key partners. Together, we&apos;ve been able to provide substantial donations to hospitals for many causes, including care for burn victims and cancer-related treatments, children&apos;s charities and to patients and hospitals dealing with COVID-19 challenges.
            </p>
            <div className="bg-white p-4 p-lg-5">
              <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '2rem 0' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div key={i} className="text-center" style={{ width: '20%' }}>
                    <img
                      src={`https://www.guidepointsecurity.com/wp-content/uploads/2023/11/Logo_${i}_GGB.png`}
                      alt={`Charity partner ${i}`}
                      style={{ maxWidth: 194, height: 58, width: '100%', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== OUR CULTURE — Testimonial Carousel ===== */}
      <section className="section section--dark" style={{ padding: '48px 40px 120px' }}>
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="csr-section-title text-white"><span className="gradient-underline-text" style={{ fontSize: 50 }}>Our Culture</span></h2>
            </div>
          </AnimatedSection>
          <div className="position-relative">
            <button
              onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length); }}
              className="csr-carousel-arrow csr-carousel-arrow--left"
              aria-label="Previous"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="overflow-hidden">
              <div style={{ display: 'flex', transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.6s ease' }}>
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white"
                    style={{ minWidth: '100%', display: 'grid', gridTemplateColumns: '5fr 7fr' }}
                  >
                    <img
                      src={t.image}
                      alt={`Culture ${i + 1}`}
                      className="w-100"
                      style={{ objectFit: 'cover', height: 480, display: 'block' }}
                    />
                    <div className="d-flex align-items-center">
                      <div className="px-4 px-lg-5 text-center w-100">
                        <p className="mb-0" style={{ fontSize: 22, lineHeight: 1.6, color: '#5b5b6b' }}>
                          {t.quote}
                        </p>
                        <p className="text-end mb-0 mt-4" style={{ color: '#999', fontSize: 14 }}>
                          {i + 1}/{testimonials.length}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="csr-carousel-arrow csr-carousel-arrow--right"
              aria-label="Next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
