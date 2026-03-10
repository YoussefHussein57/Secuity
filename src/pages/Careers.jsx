import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import GradientCard from '../components/sections/GradientCard';
import NetworkBackground from '../components/sections/NetworkBackground';
import BeInformed from '../components/sections/BeInformed';

const benefits = [
  {
    icon: 'bi-heart-pulse',
    title: 'Health & Wellness',
    description: 'Comprehensive medical, dental, and vision plans for you and your family, plus mental health support.',
  },
  {
    icon: 'bi-mortarboard',
    title: 'Learning & Growth',
    description: 'Annual training budgets, certification reimbursements, and access to our Security University program.',
  },
  {
    icon: 'bi-house-door',
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible schedules. We believe in results, not office hours.',
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Career Advancement',
    description: 'Clear career paths, mentorship programs, and opportunities to work on cutting-edge security challenges.',
  },
  {
    icon: 'bi-people',
    title: 'Team & Community',
    description: 'Regular team events, hackathons, and a collaborative culture that values every voice.',
  },
  {
    icon: 'bi-piggy-bank',
    title: 'Financial Benefits',
    description: '401(k) matching, competitive salaries, performance bonuses, and equity options.',
  },
];

const openings = [
  {
    title: 'Senior Penetration Tester',
    department: 'Offensive Security',
    location: 'Remote (US)',
    type: 'Full-Time',
  },
  {
    title: 'Cloud Security Architect',
    department: 'Cloud Security',
    location: 'Remote (US)',
    type: 'Full-Time',
  },
  {
    title: 'SOC Analyst - Tier 2',
    department: 'Managed Security',
    location: 'Reston, VA / Remote',
    type: 'Full-Time',
  },
  {
    title: 'GRC Consultant',
    department: 'Governance, Risk & Compliance',
    location: 'Remote (US)',
    type: 'Full-Time',
  },
  {
    title: 'Incident Response Engineer',
    department: 'Incident Response',
    location: 'Remote (US)',
    type: 'Full-Time',
  },
  {
    title: 'IAM Solutions Engineer',
    department: 'Identity & Access Management',
    location: 'Remote (US / UK)',
    type: 'Full-Time',
  },
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
      <Hero
        title="of Cybersecurity Practitioners"
        label="JOIN OUR TEAM"
        highlightSubtitleWord="informed"
        subtitle="Our mission is to help you navigate the complex threat and cybersecurity solution landscape – so you can make more informed risk decisions at the speed of business."
        ctaText="Apply"
        ctaLink="#openings"
        variant="page"
      />

  

      {/* ===== WE ARE A TEAM — Video + Text ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={20} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <img src="/placeholder-video.svg" alt="Team video" className="rounded-3 w-100" />
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <h2 className="section-header__title text-white mb-3">
                  We are a Team<br />of <span className="text-accent-box">Certified</span> Experts
                </h2>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  Our team of highly-certified security practitioners leverages its deep expertise to assess an organization's risk, align and optimize resources and recommend best-fit security technologies based on a rigorous vetting process. More than half of the cabinet-level agencies within the U.S. Federal Government and a third of Fortune 500 companies rely on us to deliver robust solutions.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES — Dark with value cards ===== */}
      <section className="section section--dark position-relative">
        <NetworkBackground variant="dark" nodeCount={15} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <AnimatedSection animation="fade-in-left">
            <h2 className="section-header__title text-white mb-1">Our Values</h2>
            <div className="gradient-underline mb-5" style={{ margin: 0 }} />
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {benefits.map((b) => (
              <div className="col-md-6" key={b.title}>
                <GradientCard
                  icon={b.icon}
                  title={b.title}
                  description={b.description}
                  layout="centered"
                  accent="bottom"
                />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== WHY JOIN US — Light section ===== */}
      <section className="section section--light position-relative">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h2 className="section-header__title mb-1">Why Join Us</h2>
                <div className="gradient-underline mb-4" style={{ margin: 0 }} />
                <p className="text-muted" style={{ lineHeight: 1.8 }}>
                  Our employees enjoy a vibrant workplace culture, deep engagement and outstanding benefits. All of this adds up to why we were named amongst the Best Workplaces by Inc Magazine and Washington Business Journal!
                </p>
                <Link to="/contact" className="btn btn-accent btn-cta">
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

      {/* ===== SECURITY UNIVERSITY — Indigo ===== */}
      <section className="section section--indigo position-relative">
        <NetworkBackground variant="dark" nodeCount={15} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-left">
                <h3 className="section-header__title text-white mb-3">Security University</h3>
                <p className="text-white-50" style={{ lineHeight: 1.8 }}>
                  Does your future ambition include a career in cybersecurity? As an intern at our Security University, you'll experience a supportive, tight knit community of industry-leading practitioners with real-world experience serving as your instructors and a broad range of courses tailored to meet your interests.
                </p>
                <Link to="/contact" className="btn btn-accent btn-cta">
                  Learn More <i className="bi bi-arrow-right"></i>
                </Link>
              </AnimatedSection>
            </div>
            <div className="col-lg-6">
              <AnimatedSection animation="fade-in-right">
                <img src="/placeholder-video.svg" alt="Security University" className="rounded-3 w-100" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OPEN POSITIONS — Light section ===== */}
      <section className="section section--light position-relative" id="openings">
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

          <div className="text-center mt-5">
            <p className="text-muted mb-3">
              Don't see a role that fits? We'd still love to hear from you.
            </p>
            <Link to="/contact" className="btn btn-accent btn-cta">
              Send Your Resume <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
          <BeInformed />
    </>
  );
}
