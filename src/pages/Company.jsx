import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import AnimatedSection from '../components/sections/AnimatedSection';
import NetworkBackground from '../components/sections/NetworkBackground';
import LogoGrid from '../components/sections/LogoGrid';
import GPSUniversity from '../components/sections/GPSUniversity';
import BeInformed from '../components/sections/BeInformed';

function AnimatedStat({ number, label }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const numericValue = parseFloat(number.replace(/[^0-9.]/g, '')) || 0;
  const hasDecimal = number.replace(/[^0-9.]/g, '').includes('.');
  const suffix = number.replace(/[0-9.,]/g, '');

  return (
    <div className="text-center p-3" ref={ref}>
      <h2
        className="fw-bold mb-1"
        style={{ fontFamily: "'Exo 2', sans-serif", color: '#4b4fff' }}
      >
        {isVisible ? (
          <CountUp end={numericValue} duration={2.5} separator="," decimals={hasDecimal ? 1 : 0} suffix={suffix} />
        ) : '0'}
      </h2>
      <p className="text-white-50 mb-0">{label}</p>
    </div>
  );
}

const stats = [
  { number: '5,500+', label: 'Customers' },
  { number: '40%', label: 'of the Fortune 500' },
  { number: '50%', label: 'of Cabinet-level Agencies' },
];

const awards = [
  { src: '/placeholder-logo.svg', alt: 'CRN Fast Growth' },
  { src: '/placeholder-logo.svg', alt: 'Inc. Best Workplaces' },
  { src: '/placeholder-logo.svg', alt: 'MSP 500' },
  { src: '/placeholder-logo.svg', alt: 'Cybersecurity Excellence' },
  { src: '/placeholder-logo.svg', alt: 'Gartner Recognized' },
  { src: '/placeholder-logo.svg', alt: 'Top Workplace' },
];

export default function Company() {
  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        label="We are"
        title="Cyber Security"
        subtitle="We are highly skilled cybersecurity experts dedicated to helping you solve your toughest cybersecurity challenges. At our company, we know there's a better way."
        ctaText=""
        bgImage="/hero-customers.png"
        variant="page"
      />

      {/* ===== YOUR CYBERSECURITY IS OUR MISSION — Dark with bg image ===== */}
      <section className="section section--dark position-relative">
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="rounded-3 overflow-hidden">
                  <img
                    src="/placeholder-team.svg"
                    alt="Company team photo"
                    className="w-100"
                    style={{ height: 380, objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-header__title text-white mb-3">
                  Your Cybersecurity is Our Mission
                </h2>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  We combine deep relationships, proven expertise and advanced technologies
                  to deliver high-impact cybersecurity solutions. We serve over 5,500
                  organizations, including Fortune 500 companies and federal agencies.
                </p>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  Our clients rely on us to strengthen their defenses and reduce risk.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED ADVISOR & PARTNER — Indigo-light with stats ===== */}
      <section className="section section--indigo-light position-relative">
        <NetworkBackground variant="dark" nodeCount={20} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="section-header__title text-white">Trusted Advisor &amp; Partner</h2>
              <p className="text-white-50 mx-auto" style={{ maxWidth: 750, lineHeight: 1.8 }}>
                Founded in 2011, we have emerged as a trusted advisory and partner to more
                than 5,500 organizations — from mid-market enterprises to Fortune 500
                companies and 50% of cabinet-level agencies within the U.S. Federal Government.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4 justify-content-center mb-5">
            {stats.map((s) => (
              <div className="col-6 col-md-4" key={s.label}>
                <AnimatedStat {...s} />
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {[1, 2, 3, 4].map((i) => (
              <div className="col-6 col-lg-3" key={i}>
                <div className="rounded-3 overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <img
                    src="/placeholder-video.svg"
                    alt={`Customer success story ${i}`}
                    className="w-100"
                    style={{ height: 180, objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== STRATEGIC, RELATIONSHIP-POWERED APPROACH — Light blue ===== */}
      <section className="section section--light position-relative">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-2">
              <AnimatedSection animation="fade-in-left">
                <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: 120, height: 120, background: 'rgba(75, 79, 255, 0.1)' }}>
                  <i className="bi bi-people-fill" style={{ fontSize: '2.5rem', color: '#4b4fff' }}></i>
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-10">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-header__title mb-3">
                  Strategic, Relationship-Powered Approach
                </h2>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  We grew our business on a trusted relationship framework. We take a
                  regional approach, which means we're able to provide hands-on, white-glove
                  service from the people you know and trust — while also giving you access
                  to a national network of cybersecurity talent.
                </p>
                <Link to="/company/leadership" className="btn btn-accent btn-cta mt-2">
                  Meet Our Leadership <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORPORATE SOCIAL RESPONSIBILITY — Dark ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={15} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <AnimatedSection animation="fade-in-right">
                <div className="rounded-3 overflow-hidden">
                  <img
                    src="/placeholder-split.svg"
                    alt="Corporate Social Responsibility"
                    className="w-100"
                    style={{ height: 350, objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6 order-lg-1">
              <AnimatedSection animation="fade-in-left">
                <h2 className="section-header__title text-white mb-3">
                  Corporate Social Responsibility
                </h2>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  Our culture and ultimate goal is to foster sustainable business practices
                  that benefit our employees, communities and the environment. We believe in
                  giving back to the community and supporting causes that align with our
                  mission and values.
                </p>
                <Link to="/contact" className="btn btn-accent btn-cta mt-2">
                  Learn More <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GPSU + OUR PEOPLE (shared component) ===== */}
      <GPSUniversity />

      {/* ===== VETERANS — Light blue ===== */}
      <section className="section section--light position-relative">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="section-header__title text-center mb-3">
              Transferring Experience to Cyber Expertise
            </h2>
          </AnimatedSection>
          <div className="row g-5 align-items-center mt-2">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  Veterans play a vital role at our company. They represent more than 10%
                  of our workforce, a reflection of the deep respect we have for their
                  unique skills and perspectives — discipline, teamwork, attention to detail
                  and the ability to perform under pressure.
                </p>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  Veterans bring expertise that directly aligns with the demands of
                  cybersecurity. We provide mentorship, career development and programs
                  that support the transition from military to civilian roles.
                </p>
                <Link to="/contact" className="btn btn-accent btn-cta mt-2">
                  Download Veterans Info <i className="bi bi-download"></i>
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <div className="rounded-3 overflow-hidden">
                  <img
                    src="/placeholder-split.svg"
                    alt="Veterans"
                    className="w-100"
                    style={{ height: 350, objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AWARDS & ACCOLADES — Dark ===== */}
      <section className="section section--dark">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <SectionHeader title="Awards & Accolades" center />
          </AnimatedSection>
          <AnimatedSection animation="scale-in">
            <LogoGrid logos={awards} />
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
