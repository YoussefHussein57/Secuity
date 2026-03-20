import { useState } from 'react';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import LeaderModal from '../components/sections/LeaderModal';
import { partners, corporateLeaders } from '../data/leadership';

function LeaderCard({ leader, onClick }) {
  return (
    <div className="leader-card" onClick={() => onClick(leader)}>
      <div className="leader-card__header">
        <div>
          <h3 className="leader-card__name">{leader.name}</h3>
          <p className="leader-card__role">{leader.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div className="leadership-page">
      <Hero
        title="Cyber Security Leadership"
        highlightWord="Leadership"
        highlightStyle="box"
        ctaText=""
        variant="page"
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Identity_and_Access_Management_IAM.png"
        showNetwork={false}
        className="d-flex align-items-center justify-content-center p-0"
      />

      <section className="section section--dark leadership-section">
        <div className="container pt-lg-5">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="leadership-section__title">
                <span className="gradient-underline-text">Security Partners</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {partners.map((l) => (
              <div className="col-lg-6" key={l.name}>
                <LeaderCard leader={l} onClick={setSelectedLeader} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--dark leadership-section">
        <div className="container ">
          <AnimatedSection animation="animate-on-scroll">
            <div className="text-center mb-5">
              <h2 className="leadership-section__title">
                <span className="gradient-underline-text">Corporate Leadership Team</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="stagger-children" className="row g-4">
            {corporateLeaders.map((l) => (
              <div className="col-lg-6" key={l.name}>
                <LeaderCard leader={l} onClick={setSelectedLeader} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />

      {selectedLeader && (
        <LeaderModal leader={selectedLeader} onClose={() => setSelectedLeader(null)} />
      )}
    </div>
  );
}
