import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export default function ServiceTabs({ tabsSection }) {
  if (!tabsSection) return null;

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section section--dark service-tabs-section">
      <div className="container">
        <AnimatedSection animation="animate-on-scroll">
          <div className="text-center mb-5">
            {tabsSection.label && (
              <p className="section-header__label">{tabsSection.label}</p>
            )}
            <h2 className="use-cases__title">
              {tabsSection.titleHighlight ? (
                <>
                  {tabsSection.title.split(tabsSection.titleHighlight)[0]}
                  <span className="text-accent-box">{tabsSection.titleHighlight}</span>
                  {tabsSection.title.split(tabsSection.titleHighlight)[1] || ''}
                </>
              ) : tabsSection.title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Tab buttons */}
        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          {tabsSection.tabs.map((tab, i) => (
            <button
              key={tab.name}
              className={`btn ${activeTab === i ? 'btn-accent' : 'btn-outline-light'}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatedSection animation="stagger-children" className="row g-4">
          {tabsSection.tabs[activeTab].items.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.title}>
              <Link
                to={item.path || '#'}
                className="service-tabs__card d-block text-decoration-none"
              >
                {item.icon && <i className={`bi ${item.icon} service-tabs__icon`}></i>}
                <h4 className="service-tabs__title">{item.title}</h4>
                {item.description && (
                  <p className="service-tabs__desc">{item.description}</p>
                )}
              </Link>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
