import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const categories = [
  'AI Security', 'Application Security', 'Awards', 'Blog', 'Cloud Security',
  'Continuous Threat Exposure Management (CTEM)', 'Cybersecurity', 'Cybersecurity Technology',
  'Data Security', 'Email Security', 'Endpoint Security', 'Expert Spotlight',
  'Federal', 'Giving Back', 'Governance, Risk & Compliance', 'GRIT Blog',
  'Identity & Access Management', 'Incident Response & Threat Intelligence',
  'Managed Security Services', 'Network & Infrastructure Security', 'News',
  'OT Security Services', 'Overview', 'Security Analytics',
  'Security Awareness & Education', 'Security Operations', 'Technical',
  'Threat & Attack Simulation', 'Threat Advisory',
  'Vulnerability Management & Penetration Testing',
];
const newsTypes = ['News', 'Press Release'];

const articles = [
  {
    title: 'Named the Palo Alto Networks 2025 North America Growth Partner of the Year',
    category: 'Awards',
    newsType: 'Company News',
    readTime: '2 min read',
    image: 'https://www.guidepointsecurity.com/wp-content/uploads/2022/03/Ernest-Dunn-C78A7507.jpg',
  },
  {
    title: 'Appoints Shawn Harrs as Chief Information Officer',
    category: 'News',
    newsType: 'Company News',
    readTime: '2 min read',
    image: '',
  },
  {
    title: 'Ransomware Hammers Manufacturing Sector',
    category: 'In the Media',
    newsType: 'Threat Intelligence',
    readTime: '3 min read',
    image: '',
  },
  {
    title: 'Nation-State Hackers Hit Businesses for Commercial Edge',
    category: 'In the Media',
    newsType: 'Industry News',
    readTime: '4 min read',
    image: '',
  },
  {
    title: 'GRIT Ransomware Report: Q4 2025 Key Findings and Analysis',
    category: 'Research',
    newsType: 'Threat Intelligence',
    readTime: '5 min read',
    image: 'https://www.guidepointsecurity.com/wp-content/uploads/2024/08/inc-5000-logo.png',
  },
  {
    title: 'Recognized as a CRN Tech Elite 250 Solution Provider for 2025',
    category: 'Awards',
    newsType: 'Company News',
    readTime: '2 min read',
    image: '',
  },
  {
    title: 'Top 5 IAM Mistakes That Lead to Breaches',
    category: 'Research',
    newsType: 'Threat Intelligence',
    readTime: '4 min read',
    image: '',
  },
  {
    title: 'AI in Cybersecurity: Opportunities and Risks',
    category: 'In the Media',
    newsType: 'Industry News',
    readTime: '3 min read',
    image: '',
  },
  {
    title: 'Building an Effective SOC: People, Process, Technology',
    category: 'Research',
    newsType: 'Industry News',
    readTime: '5 min read',
    image: '',
  },
  {
    title: 'Named to Inc. 5000 List of Fastest-Growing Private Companies',
    category: 'Awards',
    newsType: 'Company News',
    readTime: '2 min read',
    image: '',
  },
  {
    title: 'The State of OT Security in Critical Infrastructure',
    category: 'Research',
    newsType: 'Threat Intelligence',
    readTime: '4 min read',
    image: '',
  },
  {
    title: 'Expands Federal Practice with New Government Solutions Office',
    category: 'Press Releases',
    newsType: 'Company News',
    readTime: '3 min read',
    image: '',
  },
];

export default function Blog() {
  const [catFilter, setCatFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const filtered = articles.filter((a) => {
    const matchesCat = catFilter === 'All' || a.category === catFilter;
    const matchesType = typeFilter === 'All' || a.newsType === typeFilter;
    const matchesSearch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesType && matchesSearch;
  });

  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <div className="newsroom-page">
      {/* ===== HERO — Simple dark bg with centered title ===== */}
      <section className="newsroom-hero">
        <h1 className="newsroom-hero__title">Newsroom</h1>
      </section>

      {/* ===== FILTER BAR ===== */}
      <section className="newsroom-filters">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center gap-3">
            <i className="bi bi-sliders newsroom-filters__icon"></i>

            <div className="newsroom-filters__dropdown">
              <button
                className="newsroom-filters__toggle"
                onClick={() => { setCatOpen(!catOpen); setTypeOpen(false); }}
              >
                Category <i className={`bi bi-chevron-${catOpen ? 'up' : 'down'}`}></i>
              </button>
            </div>

            <div className="newsroom-filters__dropdown">
              <button
                className="newsroom-filters__toggle"
                onClick={() => { setTypeOpen(!typeOpen); setCatOpen(false); }}
              >
                News Type <i className={`bi bi-chevron-${typeOpen ? 'up' : 'down'}`}></i>
              </button>
            </div>

            <Link to="/contact" className="btn btn-accent newsroom-filters__media-btn">
              Media Kit
            </Link>

            <div className="ms-auto newsroom-filters__search">
              <input
                type="text"
                placeholder="Search Articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="newsroom-filters__search-input"
              />
              <i className="bi bi-search newsroom-filters__search-icon"></i>
            </div>
          </div>

          {/* Category panel */}
          {catOpen && (
            <div className="newsroom-filters__panel">
              <button
                className={`newsroom-filters__panel-item ${catFilter === 'All' ? 'active' : ''}`}
                onClick={() => { setCatFilter('All'); setCatOpen(false); }}
              >
                ALL
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  className={`newsroom-filters__panel-item ${catFilter === c ? 'active' : ''}`}
                  onClick={() => { setCatFilter(c); setCatOpen(false); }}
                >
                  {c.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          {/* News Type panel */}
          {typeOpen && (
            <div className="newsroom-filters__panel newsroom-filters__panel--small">
              <button
                className={`newsroom-filters__panel-item ${typeFilter === 'All' ? 'active' : ''}`}
                onClick={() => { setTypeFilter('All'); setTypeOpen(false); }}
              >
                ALL
              </button>
              {newsTypes.map((t) => (
                <button
                  key={t}
                  className={`newsroom-filters__panel-item ${typeFilter === t ? 'active' : ''}`}
                  onClick={() => { setTypeFilter(t); setTypeOpen(false); }}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== ARTICLES GRID ===== */}
      <section className="newsroom-articles">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4">
            {visible.map((article, i) => (
              <div className="col-md-6 col-lg-4" key={`${article.title}-${i}`}>
                <Link to="/resources" className="newsroom-card">
                  <div className="newsroom-card__image">
                    {article.image ? (
                      <img src={article.image} alt={article.title} />
                    ) : (
                      <div className="newsroom-card__logo">
                        <span className="newsroom-card__logo-text">CYBER<br />SECURITY</span>
                      </div>
                    )}
                  </div>
                  <div className="newsroom-card__body">
                    <span className="newsroom-card__badge">{article.category.toUpperCase()}</span>
                    <h3 className="newsroom-card__title">{article.title}</h3>
                    <div className="newsroom-card__footer">
                      <span className="newsroom-card__read-more">Read More</span>
                      <span className="newsroom-card__read-time">
                        <i className="bi bi-clock"></i> {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </AnimatedSection>

          {!showAll && filtered.length > 8 && (
            <div className="text-center mt-5">
              <button
                className="btn btn-outline-dark"
                onClick={() => setShowAll(true)}
                style={{ borderRadius: 0 }}
              >
                View More +
              </button>
            </div>
          )}
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
