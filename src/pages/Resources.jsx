import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import BeInformed from '../components/sections/BeInformed';

const resourceTypes = ['All Resource Types', 'On-Demand Webinar', 'Video', 'Customer Success', 'Datasheet', 'eBook', 'Infographic', 'Report', 'Whitepaper', 'Blog', 'Event'];
const categories = ['All Categories', 'AI Security', 'Application Security', 'Cloud Security', 'Data Security', 'Email Security', 'Endpoint Security', 'GRC', 'IAM', 'Incident Response', 'Managed Security', 'Network Security', 'OT Security', 'Security Awareness', 'SOC', 'Staff Augmentation', 'Vulnerability Management'];

const allResources = [
  { image: 'https://picsum.photos/seed/res1/600/400', type: 'Report', title: 'GRIT 2026 Ransomware & Cyber Threat Report', date: 'Jan 15, 2026', cta: 'Download', category: 'Incident Response' },
  { image: 'https://picsum.photos/seed/res2/600/400', type: 'On-Demand Webinar', title: 'GRIT 2026 Ransomware Report Presentation', date: 'January 22, 2026', cta: 'Watch Now', category: 'Incident Response' },
  { image: 'https://picsum.photos/seed/res3/600/400', type: 'Whitepaper', title: 'Zero Trust Architecture Best Practices', date: 'Dec 10, 2025', cta: 'Download', category: 'IAM' },
  { image: 'https://picsum.photos/seed/res4/600/400', type: 'eBook', title: 'Cloud Security Playbook 2026', date: 'Feb 1, 2026', cta: 'Download', category: 'Cloud Security' },
  { image: 'https://picsum.photos/seed/res5/600/400', type: 'Video', title: 'AI-Powered Threat Detection Demo', date: 'Jan 28, 2026', cta: 'Watch Now', category: 'AI Security' },
  { image: 'https://picsum.photos/seed/res6/600/400', type: 'Datasheet', title: 'Application Security as a Service Overview', date: 'Nov 5, 2025', cta: 'Download', category: 'Application Security' },
  { image: 'https://picsum.photos/seed/res7/600/400', type: 'Event', title: 'Premier Cybersecurity Conference 2026', date: 'March - November 2026', cta: 'Register', category: 'All Categories' },
  { image: 'https://picsum.photos/seed/res8/600/400', type: 'Blog', title: 'Understanding the Latest Ransomware Trends', date: 'Feb 14, 2026', cta: 'Read More', category: 'Incident Response' },
  { image: 'https://picsum.photos/seed/res9/600/400', type: 'Infographic', title: 'Cybersecurity by the Numbers 2026', date: 'Jan 5, 2026', cta: 'View', category: 'GRC' },
  { image: 'https://picsum.photos/seed/res10/600/400', type: 'On-Demand Webinar', title: 'Securing Cloud-Native Applications', date: 'Feb 20, 2026', cta: 'Watch Now', category: 'Cloud Security' },
  { image: 'https://picsum.photos/seed/res11/600/400', type: 'Datasheet', title: 'Managed Detection & Response Service Brief', date: 'Dec 1, 2025', cta: 'Download', category: 'Managed Security' },
  { image: 'https://picsum.photos/seed/res12/600/400', type: 'Blog', title: 'Top 10 Cloud Misconfigurations to Avoid', date: 'Feb 8, 2026', cta: 'Read More', category: 'Cloud Security' },
  { image: 'https://picsum.photos/seed/res13/600/400', type: 'Customer Success', title: 'How Genuine Parts Company Secured Their Cloud', date: 'Feb 5, 2026', cta: 'Read Story', category: 'Cloud Security' },
  { image: 'https://picsum.photos/seed/res14/600/400', type: 'Customer Success', title: 'K. Hovnanian Homes: Building a Security Program', date: 'Jan 20, 2026', cta: 'Read Story', category: 'Managed Security' },
];

const ITEMS_PER_PAGE = 8;

const typeIcons = {
  'On-Demand Webinar': 'bi-play-btn',
  Video: 'bi-play-circle',
  'Customer Success': 'bi-trophy',
  Datasheet: 'bi-file-earmark-text',
  eBook: 'bi-book',
  Infographic: 'bi-bar-chart-line',
  Report: 'bi-file-earmark-bar-graph',
  Whitepaper: 'bi-file-earmark-pdf',
  Blog: 'bi-journal-text',
  Event: 'bi-calendar-event',
};

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialType = searchParams.get('type') || 'All Resource Types';
  const initialCat = searchParams.get('category') || 'All Categories';

  const [typeFilter, setTypeFilter] = useState(initialType);
  const [catFilter, setCatFilter] = useState(initialCat);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return allResources.filter((r) => {
      const matchType = typeFilter === 'All Resource Types' || r.type === typeFilter;
      const matchCat = catFilter === 'All Categories' || r.category === catFilter;
      const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase());
      return matchType && matchCat && matchSearch;
    });
  }, [typeFilter, catFilter, search]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleTypeChange = (val) => {
    setTypeFilter(val);
    setPage(1);
    if (val !== 'All Resource Types') {
      searchParams.set('type', val);
    } else {
      searchParams.delete('type');
    }
    setSearchParams(searchParams);
  };

  const handleCatChange = (val) => {
    setCatFilter(val);
    setPage(1);
    if (val !== 'All Categories') {
      searchParams.set('category', val);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const clearFilter = (which) => {
    if (which === 'type') handleTypeChange('All Resource Types');
    if (which === 'category') handleCatChange('All Categories');
  };

  const activeFilters = [];
  if (typeFilter !== 'All Resource Types') activeFilters.push({ key: 'type', label: typeFilter });
  if (catFilter !== 'All Categories') activeFilters.push({ key: 'category', label: catFilter });

  return (
    <div className="resources-page">
      {/* Hero */}
      <Hero
        title="Resource Library"
        subtitle="Learn how to address common cybersecurity challenges with expert insights and reports."
        variant="page"
        ctaText=""
        bgImage="https://www.guidepointsecurity.com/wp-content/uploads/2025/03/Website_Refresh_Services_MAIN_Page_Security_And_Education.png"
      />

      {/* Featured Slider */}
      {allResources.length > 0 && (
        <section className="resources-featured">
          <div className="container">
            <div className="resources-featured__card">
              <div className="resources-featured__type-bar">
                <i className={`bi ${typeIcons[allResources[0].type]}`}></i>
                <span>{allResources[0].type}</span>
              </div>
              <div className="resources-featured__body">
                <div className="resources-featured__image">
                  <img src={allResources[0].image} alt={allResources[0].title} />
                </div>
                <div className="resources-featured__content">
                  <h3 className="resources-featured__title">{allResources[0].title}</h3>
                  <p className="resources-featured__date">{allResources[0].date}</p>
                  <Link to="#" className="btn btn-accent">{allResources[0].cta}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Resource Grid */}
      <section className="resources-grid">
        <div className="container">
          {/* Heading */}
          <h2 className="resources-grid__heading">Resources</h2>

          {/* Filters */}
          <div className="resources-grid__filters">
            <select
              className="resources-grid__select"
              value={typeFilter}
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              {resourceTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <select
              className="resources-grid__select"
              value={catFilter}
              onChange={(e) => handleCatChange(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <div className="resources-grid__search-wrap">
              <input
                type="text"
                className="resources-grid__search-input"
                placeholder="Search..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              />
              <button className="resources-grid__search-btn" aria-label="Search">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* Active filter tags */}
          {activeFilters.length > 0 && (
            <div className="resources-grid__active-filters">
              {activeFilters.map((f) => (
                <button
                  key={f.key}
                  className="resources-grid__filter-tag"
                  onClick={() => clearFilter(f.key)}
                >
                  <span>{f.label}</span>
                  <i className="bi bi-x"></i>
                </button>
              ))}
            </div>
          )}

          {/* Cards */}
          <div className="resources-grid__list">
            {paged.length > 0 ? (
              paged.map((r, i) => (
                <div className="resources-grid__item" key={i}>
                  <Link to="#" className="resources-grid__card">
                    <div className="resources-grid__card-header">
                      <i className={`bi ${typeIcons[r.type] || 'bi-file-earmark'}`}></i>
                      <span>{r.type}</span>
                    </div>
                    <div
                      className="resources-grid__card-image"
                      style={{ backgroundImage: `url(${r.image})` }}
                    />
                    <div className="resources-grid__card-body">
                      <p className="resources-grid__card-title">{r.title}</p>
                      <span className="btn btn-accent resources-grid__card-cta">{r.cta}</span>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="resources-grid__empty">
                <p>No resources found matching your filters.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="resources-grid__pagination">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="resources-grid__page-btn"
              >
                &lsaquo;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  className={`resources-grid__page-btn${page === i + 1 ? ' resources-grid__page-btn--active' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="resources-grid__page-btn"
              >
                &rsaquo;
              </button>
            </div>
          )}
        </div>
      </section>

      <BeInformed />
    </div>
  );
}
