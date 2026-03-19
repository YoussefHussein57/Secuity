import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import GPSUniversity from '../components/sections/GPSUniversity';
import AdditionalResources from '../components/sections/AdditionalResources';
import BeInformed from '../components/sections/BeInformed';

const values = [
  {
    icon: 'bi-flag-fill',
    title: 'Take Ownership and Complete our Mission',
    description: 'We are only as great of a place to work as we make it. We hold ourselves accountable, become experts and take the initiative to get things done.',
  },
  {
    icon: 'bi-lightbulb-fill',
    title: 'Always Challenge Yourself & Have Fun',
    description: '\u201CYou miss 100% of the shots you don\u2019t take,\u201D so we always push ourselves to take calculated risks and exceed our own expectations. We do what\u2019s necessary to \u201CWow Them,\u201D and we have fun doing it. We realize that only we can control whether or not we\u2019re going to have a great day, so we choose to make it one.',
  },
  {
    icon: 'bi-hand-thumbs-up-fill',
    title: '"WOW Them!"',
    description: 'We strive to be a long-term partner and make our customers\u2019 experience a success, enabling and securing their business. We realize that we all have customers, whether they\u2019re our clients, coworkers, vendors or others.',
  },
  {
    icon: 'bi-chat-square-text-fill',
    title: 'No Jerks!',
    description: 'Life is too short to work with jerks, so we treat people with respect and dignity. When we have an issue, we pick up the phone and work constructively to address it. We know we need each other to succeed.',
  },
];

const openings = [
  { title: 'Account Executive (Connecticut)', department: 'Sales', region: 'Northeast' },
  { title: 'Account Executive (Heartland) - Wichita', department: 'Sales', region: 'Heartland' },
  { title: 'Account Executive (North Carolina)', department: 'Sales', region: 'Southeast' },
  { title: 'Account Executive (Northwest - Boise)', department: 'Sales', region: 'Northwest' },
  { title: 'Account Executive (Northwest - Seattle)', department: 'Sales', region: 'Northwest' },
  { title: 'Account Executive (Southeast / Florida)', department: 'Sales', region: 'Southeast' },
  { title: 'Account Executive - Velocity (Mid-Atlantic)', department: 'Sales', region: 'Mid-Atlantic' },
  { title: 'Account Manager (Mid-Atlantic)', department: 'Sales', region: 'Mid-Atlantic' },
  { title: 'Senior Penetration Tester', department: 'Offensive Security', region: 'Remote' },
  { title: 'Cloud Security Architect', department: 'Cloud Security', region: 'Remote' },
  { title: 'SOC Analyst - Tier 2', department: 'Managed Security', region: 'Remote' },
  { title: 'GRC Consultant', department: 'GRC', region: 'Remote' },
  { title: 'Incident Response Engineer', department: 'Incident Response', region: 'Remote' },
  { title: 'IAM Solutions Engineer', department: 'IAM', region: 'Remote' },
];

const departments = ['All', ...new Set(openings.map((j) => j.department))];
const regions = ['All', ...new Set(openings.map((j) => j.region))];

export default function Careers() {
  const [deptFilter, setDeptFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = openings.filter(
    (j) =>
      (deptFilter === 'All' || j.department === deptFilter) &&
      (regionFilter === 'All' || j.region === regionFilter),
  );

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <div className="careers-page">
      {/* ===== HERO ===== */}
      <Hero
        label="JOIN OUR TEAM"
        title="of Cybersecurity Practitioners"
        highlightSubtitleWord="informed"
        subtitle="Our mission is to help you navigate the complex threat and cybersecurity solution landscape – so you can make more informed risk decisions at the speed of business."
        ctaText="Apply"
        ctaLink="#openings"
        variant="page"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
      />

      {/* ===== WE ARE A TEAM — Photo left, Text right (Dark) ===== */}
      <section className="section section--dark">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <div className="ratio ratio-16x9 overflow-hidden">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2022/04/C78A7590.jpg"
                    alt="Team"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="careers-section-title text-white">
                  We are a Team<br />of <span className="text-accent-box">Certified</span> Experts
                </h2>
                <p className="text-white" style={{ fontSize: 18, lineHeight: 1.5 }}>
                  Our team of highly-certified security practitioners leverages its deep expertise
                  to assess an organization&apos;s risk, align and optimize resources and recommend
                  best-fit security technologies based on a rigorous vetting process. More than
                  half of the cabinet-level agencies within the U.S. Federal Government and a
                  third of Fortune 500 companies rely on us to deliver robust solutions.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES — 2x2 GradientCards, no heading above ===== */}
      <section className="section section--dark careers-values">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4">
            {values.map((v) => (
              <div className="col-md-6" key={v.title}>
                <GradientCard accent="bottom">
                  <div className="careers-value-card">
                    <div className="careers-value-card__header">
                      <i className={`bi ${v.icon} careers-value-card__icon`}></i>
                      <h3 className="careers-value-card__title">{v.title}</h3>
                    </div>
                    <p className="careers-value-card__desc">{v.description}</p>
                  </div>
                </GradientCard>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY JOIN US — Light blue bg, text left, award badges right ===== */}
      <section className="section section--light careers-why-join">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <AnimatedSection animation="fade-in-left">
                <h2 className="careers-section-title mb-1">Why Join Us</h2>
                <div className="gradient-underline mb-4" />
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#5b5b6b' }}>
                  Our employees enjoy a vibrant workplace culture,
                  deep engagement and outstanding benefits. All of this adds up to
                  why we were named amongst the Best Workplaces by Inc Magazine
                  and Washington Business Journal!
                </p>
                <Link to="/company/why-us" className="btn btn-accent">
                  Read More
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-7">
              <AnimatedSection animation="fade-in-right">
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/08/inc-5000-logo.png"
                    alt="Inc. 5000"
                    style={{ height: 140, objectFit: 'contain' }}
                  />
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/08/Inc-Best-Workplaces-2024.png"
                    alt="Inc. Best Workplaces"
                    style={{ height: 140, objectFit: 'contain' }}
                  />
                  <img
                    src="https://www.guidepointsecurity.com/wp-content/uploads/2024/08/USA-Today-Top-Workplaces.png"
                    alt="USA Today Top Workplaces"
                    style={{ height: 140, objectFit: 'contain' }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR PEOPLE — Photo left, text right (Light blue bg) ===== */}
      <section className="section section--light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
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
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="careers-section-title">
                  <span className="text-accent-box">Our People</span>: The Building Blocks of Our Culture
                </h2>
                <p style={{ fontSize: 18, lineHeight: 1.5, color: '#5b5b6b' }}>
                  From our beginning, we created a peer-to-peer recognition program to
                  celebrate our employee&apos;s achievements and contributions. Paying it forward
                  is part of our DNA.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERKS — White bg, centered text with highlighted words ===== */}
      <section className="section careers-perks">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center">
              <h2 className="careers-section-title mb-4">Perks</h2>
              <p className="careers-perks__text">
                We fully cover <span className="text-accent-box">employee premiums</span> on our base plan and offer generous support for dependents —
                with options to choose what fits best. Generous mobile phone and home <span className="text-accent-box">internet allowance.</span>
              </p>
              <p className="careers-perks__text">
                Excellent <span className="text-accent-box">work-life balance</span> via telework and flextime. Access to competitive <span className="text-accent-box">401k</span> retirement plans.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== GPSU + OUR PEOPLE (shared component) ===== */}
      <GPSUniversity />

      {/* ===== OPEN POSITIONS — White bg ===== */}
      <section className="section careers-openings" id="openings">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-4">
              <h2 className="careers-section-title mb-1">Open Positions</h2>
              <div className="gradient-underline mx-auto" />
            </div>
          </AnimatedSection>

          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mb-5">
            <div className="d-flex align-items-center gap-2">
              <label className="fw-bold" style={{ fontSize: 16 }} htmlFor="dept-filter">Browse by Dept:</label>
              <select
                id="dept-filter"
                className="form-select careers-filter-select"
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div className="d-flex align-items-center gap-2">
              <label className="fw-bold" style={{ fontSize: 16 }} htmlFor="region-filter">Browse by Region:</label>
              <select
                id="region-filter"
                className="form-select careers-filter-select"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          <AnimatedSection animation="stagger-children">
            <div className="row g-3">
              {visible.length > 0 ? (
                visible.map((job) => (
                  <div className="col-md-6" key={job.title}>
                    <Link
                      to="/contact"
                      className="careers-job-card"
                    >
                      <span className="careers-job-card__title">{job.title}</span>
                      <i className="bi bi-chevron-right careers-job-card__chevron"></i>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-4">
                  <p className="text-muted mb-0">No positions match your filters.</p>
                </div>
              )}
            </div>

            {!showAll && filtered.length > 8 && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setShowAll(true)}
                  style={{ borderRadius: 0 }}
                >
                  View More +
                </button>
              </div>
            )}
          </AnimatedSection>

          <div className="text-center mt-5" style={{ fontSize: 14, color: '#5b5b6b' }}>
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

      <BeInformed />
    </div>
  );
}
