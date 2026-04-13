import { useState } from 'react';
import { Link } from 'react-router-dom';
import NetworkBackground from '../components/sections/NetworkBackground';
import AnimatedSection from '../components/sections/AnimatedSection';
import LifecycleWheel from '../components/sections/LifecycleWheel';

const gpvueLifecycle = {
  title: 'How We Build Your Strategic Cybersecurity Program',
  titleHighlight: 'Strategic',
  gpvueCenter: true,
  className: 'gpvue-lifecycle',
  bgImage: 'https://www.guidepointsecurity.com/wp-content/themes/guidepointsecurity/assets/src/images/lifecycle-bg.svg',
  stages: [
    {
      id: 'establish',
      name: '1. Establish GPVUE Program',
      biIcon: 'bi-infinity',
      description: 'The GPVUE program delivers a strategic, programmatic approach to cybersecurity by leveraging capabilities in Cloud Security, Digital Forensics & Incident Response, Governance Risk and Compliance, Identity & Access Management, Threat & Attack Simulation and Technology Services that are best for your organization. Each program is customized to meet your unique business requirements.',
    },
    {
      id: 'analyze',
      name: '2. Analyze Current Profile',
      biIcon: 'bi-person-circle',
      description: 'The first step is to establish the current profile (baseline) of your organization, which identifies your organization\'s as-is state and current risk profile.',
    },
    {
      id: 'identify',
      name: '3. Identify Target Profile',
      biIcon: 'bi-bullseye',
      description: 'Select a target profile that is your organization\'s desired outcome to achieve the most effective risk management goals.',
    },
    {
      id: 'prioritize',
      name: '4. Prioritize Security Gaps',
      biIcon: 'bi-sort-down-alt',
      description: 'In this phase, we identify the gaps between your current and target profile and prioritize the gaps based on the business risks. We then review the prioritized gaps with you to validate the risks.',
    },
    {
      id: 'roadmap',
      name: '5. Roadmap & Remediation',
      biIcon: 'bi-signpost-split',
      description: 'We will develop a roadmap to address prioritized security gaps and provide a plan to the executive team for achieving the desired business goals. Throughout the year, we will continue to identify gaps and make recommendations, including implementing and optimizing best-fit solutions. We will also remediate discovered vulnerabilities. We will continuously evaluate your business risks and advance your cybersecurity maturity level.',
    },
    {
      id: 'reporting',
      name: '6. Reporting',
      biIcon: 'bi-pie-chart',
      description: 'To ensure the GPVUE program is running smoothly, quarterly business reviews are conducted with the executive team to review what tasks were performed the past quarter, what areas are doing well and what opportunities exist to reduce risks.',
    },
  ],
};

const BASE = 'https://www.guidepointsecurity.com/wp-content/uploads/2021/04/';

const tailorCategories = [
  {
    id: 'app-security',
    name: 'Application Security',
    tabIcon: BASE + 'icon-application.svg',
    panelIcon: BASE + 'Icon-Application-Security-Large.svg',
    description: 'We offer tactical assessment and strategy solutions to assist with all of your proactive and reactive application security efforts.',
    servicesLabel: 'Application Security services include:',
    services: [
      { text: 'Application Security Program Assessment', href: '/services/application-security' },
      { text: 'Application Security Assessment', href: '/services/application-security' },
      { text: 'Mobile Application Security Assessment', href: '/services/application-security' },
      { text: 'Application Threat Modeling', href: '/services/application-security' },
      { text: 'Application Security Architecture Review', href: '/services/application-security' },
      { text: 'Secure Code Review', href: '/services/application-security' },
      { text: 'Secure Development Training', href: '/services/application-security' },
      { text: 'Application Security as a Service', href: '/services/application-security' },
      { text: 'Application Vulnerability Scan', href: '/services/application-security' },
    ],
  },
  {
    id: 'cloud-security',
    name: 'Cloud Security',
    tabIcon: BASE + 'icon-cloud.svg',
    panelIcon: BASE + 'Icon-Cloud-Security-Large.svg',
    description: 'Our cloud security professional services help your organization gain control of your AWS, Azure, Google, Oracle, SaaS or Multi-Cloud environment with a "Security First" strategy. Our services cover all aspects of cloud security and help you with your digital transformation.',
    servicesLabel: 'Cloud Security services include:',
    services: [
      { text: 'Cloud Security Health Check', href: '/cloud-security' },
      { text: 'Cloud Security Assessment', href: '/cloud-security' },
      { text: 'Cloud Security Engineering', href: '/cloud-security' },
      { text: 'Cloud Security Strategy & Architecture', href: '/cloud-security' },
      { text: 'Container Security', href: '/cloud-security' },
    ],
  },
  {
    id: 'dfir',
    name: 'Digital Forensics & Incident Response',
    tabIcon: BASE + 'icon-digital.svg',
    panelIcon: BASE + 'Icon-Security-Response-Large.svg',
    description: 'Our DFIR team helps you prepare for, respond to and efficiently resolve security incidents to minimize business impact.',
    servicesLabel: 'Digital Forensics & Incident Response services include:',
    services: [
      { text: 'Incident Response Retainer', href: '/incident-response' },
      { text: 'Incident Response Services', href: '/incident-response' },
      { text: 'Ransomware Investigation and Response', href: '/incident-response' },
      { text: 'Threat Hunting and Discovery Services', href: '/incident-response' },
      { text: 'Tabletop Exercises', href: '/incident-response' },
      { text: 'Incident Response Enablement', href: '/incident-response' },
      { text: 'Incident Response Plan Development', href: '/incident-response' },
      { text: 'IR Playbook & Runbook Creation', href: '/incident-response' },
      { text: 'Digital Forensics Services', href: '/incident-response' },
    ],
  },
  {
    id: 'grc',
    name: 'Governance, Risk & Compliance',
    tabIcon: BASE + 'icon-governance.svg',
    panelIcon: BASE + 'Icon-Compliance-Large.svg',
    description: 'Our team of GRC practitioners and consultants can provide you with guidance to develop or enhance your information security program.',
    servicesLabel: 'Governance, Risk & Compliance services include:',
    services: [
      { text: 'Business Resilience', href: '/grc' },
      { text: 'CISO as a Service', href: '/grc' },
      { text: 'Compliance Assessment and Advisory Services', href: '/grc' },
      { text: 'M&A Security Services', href: '/grc' },
      { text: 'Ransomware Readiness', href: '/grc' },
      { text: 'Risk Assessments', href: '/grc' },
      { text: 'Security Program Review and Strategy', href: '/grc' },
      { text: 'Third Party Risk Management', href: '/grc' },
    ],
  },
  {
    id: 'iam',
    name: 'Identity & Access Management',
    tabIcon: BASE + 'icon-identity.svg',
    panelIcon: BASE + 'Icon-Identity-Management-Large.svg',
    description: 'Our team of IAM practitioners can help you develop an Identity strategy and roadmap that is best for your business.',
    servicesLabel: 'Strategic assessments and implementation services are available for:',
    services: [
      { text: 'Identity Governance & Administration (IGA)', href: '/iam' },
      { text: 'Access Management (AM)', href: '/iam' },
      { text: 'Privileged Access Management (PAM)', href: '/iam' },
      { text: 'PAM as a Service', href: '/iam' },
    ],
  },
  {
    id: 'threat',
    name: 'Threat & Attack Simulation',
    tabIcon: BASE + 'icon-threat.svg',
    panelIcon: BASE + 'Icon-Penetration-Test-Large.svg',
    description: 'Our team of white hat hackers mimics real-world attacks to help identify exploitable attack vectors in your organization\'s IT infrastructure, security control implementations, and human behavior.',
    servicesLabel: 'Threat & Attack Simulation services include:',
    services: [
      { text: 'Active Directory Security Review', href: '/vulnerability-management' },
      { text: 'IoT Assessments', href: '/vulnerability-management' },
      { text: 'Penetration Testing', href: '/vulnerability-management' },
      { text: 'Penetration Testing as a Service', href: '/vulnerability-management' },
      { text: 'Cloud Penetration Testing', href: '/vulnerability-management' },
      { text: 'Purple Teaming', href: '/vulnerability-management' },
      { text: 'Red Teaming', href: '/vulnerability-management' },
      { text: 'Social Engineering', href: '/vulnerability-management' },
      { text: 'Vulnerability Management', href: '/vulnerability-management' },
      { text: 'Vulnerability Management as a Service', href: '/vulnerability-management' },
      { text: 'Wireless Security Assessment', href: '/vulnerability-management' },
    ],
  },
  {
    id: 'tech',
    name: 'Technology Solutions',
    tabIcon: BASE + 'icon-network.svg',
    panelIcon: BASE + 'Icon-Network-Security-Large.svg',
    description: 'Our team of security architecture professionals provide you with an in-depth assessment that gives senior leadership a comprehensive technical review. We focus on numerous areas of your network security, email and the option to validate security technologies deployed on the endpoint.',
    servicesLabel: 'Technology Solutions include:',
    services: [
      { text: 'Security Architecture Review', href: '/services/network-security' },
      { text: 'Firewall Assessment', href: '/services/network-security' },
      { text: 'NGFW as a Service', href: '/services/network-security' },
      { text: 'Data Security', href: '/data-security' },
      { text: 'Security Analytics as a Service', href: '/managed-security' },
      { text: 'Zero Trust Workshops', href: '/services/network-security' },
    ],
  },
];

export default function Gpvue() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (id) => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  const activeCategory = tailorCategories.find((c) => c.id === activeTab);

  return (
    <>
      {/* ── Hero ── */}
      <section className="gpvue-hero">
        <NetworkBackground className="gpvue-hero__network" nodeCount={70} connectDist={150} />
        <div className="container gpvue-hero__inner">
          <AnimatedSection animation="animate-on-scroll">
            <img
              src="https://www.guidepointsecurity.com/wp-content/uploads/2025/04/GPVUE_White_Text_Tag_RGB.png"
              alt="GPVUE Security Program"
              className="gpvue-hero__logo"
            />
            <h1 className="gpvue-hero__title">
              <span className="text-accent-box">Strategic</span>{' '}
              Approach to Building Your Cybersecurity Program
            </h1>
            <p className="gpvue-hero__subtitle">
              Gain a strategic, programmatic cybersecurity approach that goes beyond individual
              solutions and services to give you a more mature security program and posture.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Change the Game ── */}
      <section className="gpvue-intro">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="gpvue-intro__title">
              To Ensure a Better Defense, You Must{' '}
              <span className="text-accent-box">Change the Game</span>
            </h2>
            <p className="gpvue-intro__text">
              It's clear that the traditional approach to cybersecurity is fragmented and too focused
              on point-in-time snapshots, resulting in visibility gaps and risks that attackers look
              to exploit.
            </p>
            <p className="gpvue-intro__text">
              GPVUE leverages our expertise across a wide range of cybersecurity disciplines to
              provide an integrated security program that is designed specifically to meet your unique
              needs over the course of a year.
            </p>
            <Link to="/contact" className="btn btn-accent">
              Talk to an Expert
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Gain an Effective Program ── */}
      <section className="gpvue-effective">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <h2 className="gpvue-effective__title">
              Gain an{' '}
              <span className="text-accent-box">Effective Cybersecurity Program</span>
              {' '}that Scales to Your Needs
            </h2>
            <p className="gpvue-effective__text">
              Our cybersecurity experts work with you to understand your unique environment,
              challenges, and requirements, as well as any new initiatives. We then tailor a program
              that continuously reviews and analyzes your environment over the course of a year,
              identifying security gaps, providing recommendations, implementing remediations and
              delivering actionable reporting for your security team, executives and board. With
              GPVUE, you gain:
            </p>
            <ul className="gpvue-effective__list">
              {[
                'A Continuous Risk Management Lifecycle',
                'Visibility Across Your Enterprise',
                'Industry Experts Acting as an Extension of Your Team',
                'Confidence in Adhering to Compliance & Regulatory Requirements',
                'Roadmap & Action Plan to Address Gaps & New Initiatives',
                'A More Mature Cybersecurity Program & Posture',
              ].map((item, i) => (
                <li key={i} className="gpvue-effective__list-item">
                  <i className="bi bi-check-circle gpvue-effective__check"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Lifecycle Wheel ── */}
      <LifecycleWheel data={gpvueLifecycle} />

      {/* ── Tailor a Security Program ── */}
      <section className="gpvue-tailor">
        <div className="gpvue-tailor__inner">

          {/* Heading */}
          <div className="text-center gpvue-tailor__heading-wrap">
            <h2 className="gpvue-tailor__title">
              <span className="text-accent-box">Tailor a Security Program</span> to Meet Your Goals and Objectives
            </h2>
          </div>

          {/* Intro paragraph */}
          <div className="text-center gpvue-tailor__intro-wrap">
            <p className="gpvue-tailor__intro">
              GPVUE customers can select from a wide range of cybersecurity consulting services that
              include, but are not limited to:
            </p>
          </div>

          {/* Tabs + panel share one wrapper so they align */}
          <div className="gpvue-tailor__tabbed">

            <div className="gpvue-tailor__tabs-outer">
              <div className="gpvue-tailor__tabs">
                {tailorCategories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`gpvue-tailor__tab${activeTab === cat.id ? ' gpvue-tailor__tab--active' : ''}`}
                    onClick={() => handleTabClick(cat.id)}
                    type="button"
                  >
                    <img src={cat.tabIcon} alt={cat.name} className="gpvue-tailor__tab-icon" />
                    <span className="gpvue-tailor__tab-name">{cat.name}</span>
                    <i className="bi bi-chevron-down gpvue-tailor__tab-chevron"></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Panel — white bg, CSS max-height transition */}
            <div className={`gpvue-tailor__panels-wrap${activeCategory ? ' gpvue-tailor__panels-wrap--open' : ''}`}>
              {activeCategory && (
                <div className="gpvue-tailor__panel">
                  <div className="gpvue-tailor__panel-columns">
                    {/* Left */}
                    <div className="gpvue-tailor__panel-left">
                      <img
                        src={activeCategory.panelIcon}
                        alt={activeCategory.name}
                        className="gpvue-tailor__panel-large-icon"
                      />
                      <h2 className="gpvue-tailor__panel-heading">{activeCategory.name}</h2>
                      <p className="gpvue-tailor__panel-desc">{activeCategory.description}</p>
                    </div>
                    {/* Right */}
                    <div className="gpvue-tailor__panel-right">
                      <p className="gpvue-tailor__services-label">{activeCategory.servicesLabel}</p>
                      <ul className="gpvue-tailor__services-list">
                        {activeCategory.services.map((svc) => (
                          <li key={svc.text}>
                            <Link to={svc.href} className="gpvue-tailor__service-link">{svc.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Program Management card — always visible inside the border */}
          <div className="gpvue-tailor__program-card">
            <div className="gpvue-tailor__program-body">
              <p className="gpvue-tailor__program-label">Program Management</p>
              <p className="gpvue-tailor__program-text">
                Includes quarterly and annual activities (based on your unique program) and business
                reviews with your dedicated GPVUE team lead to ensure continuous improvement and
                sustained security posture over time.
              </p>
            </div>
            <div className="gpvue-tailor__program-img-wrap">
              <img
                src="https://www.guidepointsecurity.com/wp-content/uploads/2021/04/gps-service-banner-crop.jpeg"
                alt="Program Management"
                className="gpvue-tailor__program-img"
              />
            </div>
          </div>

          {/* See Why GPVUE CTA — inside the border */}
          <div className="gpvue-tailor__cta text-center">
            <h2 className="gpvue-tailor__cta-title">
              See why <span className="gpvue-tailor__cta-brand">GPVUE<sup>®</sup></span> is right for you
            </h2>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href="https://www.guidepointsecurity.com/wp-content/uploads/2021/04/2021_GPVUE_DS_FINAL.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-accent">Learn More</a>
              <Link to="/contact" className="btn btn-accent">Talk to an Expert</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── GPVUE Datasheet download section ── */}
      <section className="gpvue-dl">
        {/* envelope-shaped dark overlay */}
        <div className="gpvue-dl__overlay" />
        <div className="container gpvue-dl__inner">

          {/* Left — floating label */}
          <div className="gpvue-dl__left">
            <i className="bi bi-file-earmark-text gpvue-dl__file-icon"></i>
            <span className="gpvue-dl__label">Cybersecurity Datasheet</span>
          </div>

          {/* Right — white card */}
          <div className="gpvue-dl__card">
            <div className="gpvue-dl__card-body">
              <p className="gpvue-dl__card-label">CYBERSECURITY DATASHEET</p>
              <h3 className="gpvue-dl__title">GPVUE: Security Program Management</h3>
              <p className="gpvue-dl__desc">
                Download the GPVUE Security Program Management datasheet to learn how we build a
                tailored, continuous cybersecurity program for your organization.
              </p>
              <a
                href="https://www.guidepointsecurity.com/wp-content/uploads/2021/04/2021_GPVUE_DS_FINAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                Download
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
