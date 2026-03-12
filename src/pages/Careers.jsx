import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import NetworkBackground from '../components/sections/NetworkBackground';
import GPSUniversity from '../components/sections/GPSUniversity';
import AdditionalResources from '../components/sections/AdditionalResources';

const values = [
  {
    icon: 'bi-shield-check',
    title: 'Ownership',
    description: 'We hold ourselves accountable, become the best versions of ourselves and make it a great place to work. We own our outcomes.',
  },
  {
    icon: 'bi-rocket-takeoff',
    title: 'Fearlessness',
    description: 'We always push ourselves to take calculated risks and swing big because you miss 100% of the shots you don\'t take.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Customer-First',
    description: 'We strive to be a long-term partner and make our customers\' experience a success, enabling and securing their businesses.',
  },
  {
    icon: 'bi-emoji-smile',
    title: 'No Jerks',
    description: 'Life is too short to work with jerks, so we treat people with respect and dignity. When we have an issue, we work through it professionally.',
  },
];

const perks = [
  { icon: 'bi-heart-pulse', title: 'Health Coverage', desc: 'We fully cover employee premiums on our base plan and offer generous support for dependents.' },
  { icon: 'bi-wifi', title: 'Internet Allowance', desc: 'Monthly internet stipend to support your remote workspace and stay connected.' },
  { icon: 'bi-house-door', title: 'Work-Life Balance', desc: 'Excellent work-life balance via telework and flextime to fit your schedule.' },
  { icon: 'bi-piggy-bank', title: '401k', desc: 'Access to competitive retirement plans with matching contributions.' },
];

const openings = [
  { title: 'Senior Penetration Tester', department: 'Offensive Security', location: 'Remote (US)', type: 'Full-Time' },
  { title: 'Cloud Security Architect', department: 'Cloud Security', location: 'Remote (US)', type: 'Full-Time' },
  { title: 'SOC Analyst - Tier 2', department: 'Managed Security', location: 'Reston, VA / Remote', type: 'Full-Time' },
  { title: 'GRC Consultant', department: 'Governance, Risk & Compliance', location: 'Remote (US)', type: 'Full-Time' },
  { title: 'Incident Response Engineer', department: 'Incident Response', location: 'Remote (US)', type: 'Full-Time' },
  { title: 'IAM Solutions Engineer', department: 'Identity & Access Management', location: 'Remote (US / UK)', type: 'Full-Time' },
  { title: 'Account Executive (Northeast)', department: 'Sales', location: 'Remote (US)', type: 'Full-Time' },
  { title: 'Security Architect (Federal)', department: 'Federal', location: 'Washington, DC', type: 'Full-Time' },
];

const departments = ['All', ...new Set(openings.map((j) => j.department))];
const locations = ['All', ...new Set(openings.map((j) => j.location))];

export default function Careers() {
  const [deptFilter, setDeptFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  const filtered = openings.filter(
    (j) =>
      (deptFilter === 'All' || j.department === deptFilter) &&
      (locationFilter === 'All' || j.location === locationFilter),
  );

  return (
    <>
      {/* ===== HERO ===== */}
      <Hero
        label="JOIN OUR TEAM"
        title="of Cybersecurity Practitioners"
        highlightSubtitleWord="informed"
        subtitle="Our mission is to help you navigate the complex threat and cybersecurity solution landscape – so you can make more informed risk decisions at the speed of business."
        ctaText="Apply"
        ctaLink="#openings"
        variant="page"
      />

      {/* ===== WE ARE A TEAM — Video + Text (Dark) ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={20} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                  <img src="/placeholder-video.svg" alt="Team video" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-header__title text-white mb-3">
                  We are a Team<br />of <span className="text-accent-box">Certified</span> Experts
                </h2>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  Our team of highly-certified security practitioners leverages its deep expertise
                  to assess an organization's risk, align and optimize resources and recommend
                  best-fit security technologies based on a rigorous vetting process. More than
                  half of the cabinet-level agencies within the U.S. Federal Government and a
                  third of Fortune 500 companies rely on us to deliver robust solutions.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES — Dark with bg pattern, 2x2 grid ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={15} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="fade-in-left">
            <h2 className="section-header__title text-white mb-1">Our Values</h2>
            <div className="gradient-underline mb-5" style={{ margin: 0 }} />
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {values.map((v) => (
              <div className="col-md-6" key={v.title}>
                <GradientCard
                  icon={v.icon}
                  title={v.title}
                  description={v.description}
                  layout="centered"
                  accent="bottom"
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY JOIN US — White section ===== */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="section-header__title mb-1">Why Join Us</h2>
                <div className="gradient-underline mb-4" style={{ margin: 0 }} />
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  Our employees enjoy a vibrant workplace culture, deep engagement and
                  outstanding benefits. All of this adds up to why we were named amongst
                  the Best Workplaces by Inc Magazine and Washington Business Journal!
                </p>
                <Link to="/company/why-us" className="btn btn-accent btn-cta">
                  Read More <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="stagger-children">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  {['Inc. 5000', 'Best Workplaces', 'Top Work Places'].map((badge) => (
                    <div
                      key={badge}
                      className="d-flex align-items-center justify-content-center rounded-3"
                      style={{
                        width: 140,
                        height: 140,
                        background: 'rgba(75, 79, 255, 0.06)',
                        border: '1px solid rgba(75, 79, 255, 0.15)',
                      }}
                    >
                      <span className="fw-bold text-center" style={{ color: '#4b4fff', fontSize: '0.85rem' }}>{badge}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR PEOPLE — Light blue (#c3d9ff) ===== */}
      <section className="section section--light position-relative">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
                  <img src="/placeholder-video.svg" alt="Pay-It-Forward program" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-header__title mb-3">
                  <span style={{ color: '#4b4fff' }}>Our People</span>: The Building Blocks of Our Culture
                </h2>
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  From our beginning, we created a peer-to-peer recognition program to
                  celebrate our employee's achievements and contributions. Paying it forward
                  is part of our DNA.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERKS — Dark ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={10} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="section-header__title text-white">Perks</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="stagger-children" className="row g-4">
            {perks.map((p) => (
              <div className="col-md-6 col-lg-3" key={p.title}>
                <div className="text-center text-white">
                  <i className={`bi ${p.icon} mb-3`} style={{ fontSize: '2.5rem', color: '#4b4fff' }}></i>
                  <h5 className="fw-bold mb-2">{p.title}</h5>
                  <p className="text-white-50 small">{p.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GPSU + OUR PEOPLE (shared) ===== */}
      <GPSUniversity />

      {/* ===== OPEN POSITIONS ===== */}
      <section className="section" style={{ backgroundColor: '#fff' }} id="openings">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="section-header__title mb-1">Open Positions</h2>
              <div className="gradient-underline" />
            </div>
          </AnimatedSection>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-4">
            <div className="d-flex align-items-center gap-2">
              <label className="fw-bold small mb-0" htmlFor="dept-filter">Browse by Dept:</label>
              <select
                id="dept-filter"
                className="form-select form-select-sm job-filter-select"
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="d-flex align-items-center gap-2">
              <label className="fw-bold small mb-0" htmlFor="location-filter">Browse by Region:</label>
              <select
                id="location-filter"
                className="form-select form-select-sm job-filter-select"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          <AnimatedSection animation="stagger-children">
            <div className="row g-3">
              {filtered.length > 0 ? (
                filtered.map((job) => (
                  <div className="col-md-6" key={job.title}>
                    <Link
                      to="/contact"
                      className="job-card d-flex align-items-center justify-content-between p-4 rounded-3 text-decoration-none"
                    >
                      <span className="fw-bold" style={{ color: '#0f0f27' }}>{job.title}</span>
                      <i className="bi bi-chevron-right" style={{ color: '#4b4fff' }}></i>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4">
                  <p className="text-muted mb-0">No positions match your filters.</p>
                </div>
              )}
            </div>
          </AnimatedSection>

          <div className="text-muted text-center mt-5 small">
            <p>
              In compliance with federal law, all persons hired must verify their identity
              and eligibility to work in the United States.
            </p>
            <p>
              We are an equal opportunity employer. All qualified applicants will receive
              consideration for employment without regard to race, color, religion, sex,
              national origin, disability or protected veteran status.
            </p>
          </div>
        </div>
      </section>

      {/* ===== ADDITIONAL RESOURCES ===== */}
      <AdditionalResources />
    </>
  );
}
