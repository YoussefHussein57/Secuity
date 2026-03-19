import { useState } from 'react';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const partners = [
  { name: 'Ahmed Al-Rashid', role: 'Chairman and CEO', bio: 'Ahmed brings over 25 years of sales, financial management and operational experience spanning both the public and private sectors. He currently serves as the Chairman and CEO and is responsible for the overall company strategy, vision, growth and profitability. Along with the other partners and principles, Ahmed ensures the operational efficiency and execution of the company\'s strategic plan.' },
  { name: 'Omar Hassan', role: 'Partner and CFO', bio: 'Omar has more than 15 years of experience building and leading finance teams for high-growth private equity-backed tech companies. As CFO, Omar oversees the accounting, financial planning and analysis, treasury, tax and business operations functions to continuously optimize the company\'s financial performance.' },
  { name: 'Khalid Mansour', role: 'Principal and Partner', bio: 'Khalid leads the information assurance consulting organization, which includes application security, cloud security, governance, risk and compliance services, threat and attack simulation and incident response and forensics. Additionally, Khalid leads the internal IT and information security teams as well as the project management office and services operations.' },
  { name: 'Tariq Al-Farsi', role: 'Regional Partner – Gulf', bio: 'Tariq is the Gulf Regional Partner with more than 15 years of experience in IT and information security. Tariq began his IT career as an engineer, earning a reputation for excellence in customer relationship management that established him as a leader in IT and information security sales.' },
  { name: 'Nasser Al-Dossary', role: 'Regional Partner – Central', bio: 'Nasser is a Central Regional Partner with responsibility for federal contract strategies, major account building and penetration of the key government and enterprise markets. A respected alumnus of the cybersecurity community with extensive experience in building strategic partnerships.' },
  { name: 'Faisal Ibrahim', role: 'Regional Partner – Eastern', bio: 'Faisal is the Eastern Region Partner with over 20 years of experience in information security and networking. Over the course of his career, Faisal has focused on network and security technologies and has extensive cybersecurity experience building strategies, performing assessments and delivering solutions for medium and large organizations.' },
  { name: 'Majed Al-Qahtani', role: 'Regional Partner – Western', bio: 'Majed is the Western Region Partner with 15 years of information security experience that covers a variety of responsibilities, including security operations, risk management, security program management, security integration and security compliance.' },
  { name: 'Youssef Bakr', role: 'Regional Partner – Northern', bio: 'Youssef is the Northern Region Partner. He brings over 18 years of computer security, engineering, consulting, sales and executive management experience to the mission of driving company growth in the region through strategic relationships with customers.' },
];

const corporateLeaders = [
  { name: 'Sami Al-Harbi', role: 'CISO', bio: 'As CISO, Sami leads the company\'s information security strategy, risk management and cybersecurity initiatives. He is responsible for developing and maintaining the security architecture and controls while ensuring resilience against evolving threats. With deep expertise in both internal operational security programs and client services, Sami brings a unique perspective that bridges customer needs with real-world security challenges.' },
  { name: 'Layla Al-Mutairi', role: 'Chief Marketing Officer', bio: 'Layla has over 15 years of experience and is a seasoned marketing leader who drives forward-thinking, data-driven marketing strategies with high-performing teams across diverse channels, spanning partner and vendor landscapes. She leads the marketing organization and practices while cultivating relationships to propel success in cybersecurity solutions.' },
  { name: 'Rami Nasser', role: 'Chief Legal Officer', bio: 'Rami brings over 15 years of legal experience working with high-growth technology companies. His previous experience includes leading enterprise risk for companies with significant annual revenue, with responsibility for the contracts and internal audit functions.' },
  { name: 'Dana Al-Salem', role: 'SVP of Vendor Relations', bio: 'Dana is Senior Vice President of Vendor Relations Management. She leads the VRM team to collaborate with vendors and accelerate their overall go-to-market partnerships across the organization. Her diverse experience at cutting-edge cybersecurity companies enables her to bring a unique approach to working with vendors of all shapes and sizes.' },
  { name: 'Hana Qureshi', role: 'SVP of Human Resources', bio: 'Hana has over 14 years of leading through change in fast-paced growth organizations. She is responsible for all HR initiatives including talent acquisition, organizational development, culture and people operations. She firmly believes the key to success is to remain focused on the organization\'s most valuable asset: its people.' },
  { name: 'Zainab Al-Rashidi', role: 'SVP, Operations', bio: 'Zainab leads the Financial Planning and Analysis and Process Optimization functions. She maintains a process-driven mindset and works closely with the Information Technology group. She oversees budgeting, reporting and analytics, offers data-driven insights and recommendations and drives operational excellence through developing continuous process improvements.' },
];

function LeaderCard({ leader }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="leader-card" onClick={() => setExpanded(!expanded)}>
      <div className="leader-card__header">
        <div>
          <h3 className="leader-card__name">{leader.name}</h3>
          <p className="leader-card__role">{leader.role}</p>
        </div>
        <i className={`bi ${expanded ? 'bi-dash' : 'bi-plus'} leader-card__toggle`}></i>
      </div>
      <div className={`leader-card__body ${expanded ? 'leader-card__body--open' : ''}`}>
        <div className="leader-card__bio">
          <p>{leader.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <div className="leadership-page">
      {/* ===== HERO ===== */}
      <Hero
        title="Cyber Security Leadership"
        highlightWord="Leadership"
        highlightStyle="box"
        ctaText=""
        variant="page"
      />

      {/* ===== SECURITY PARTNERS ===== */}
      <section className="section section--dark leadership-section">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="leadership-section__title">Security Partners</h2>
              <div className="gradient-underline mx-auto" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {partners.map((l) => (
              <div className="col-lg-6" key={l.name}>
                <LeaderCard leader={l} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CORPORATE LEADERSHIP TEAM ===== */}
      <section className="section section--dark leadership-section">
        <div className="container">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="leadership-section__title">Corporate Leadership Team</h2>
              <div className="gradient-underline mx-auto" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {corporateLeaders.map((l) => (
              <div className="col-lg-6" key={l.name}>
                <LeaderCard leader={l} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
