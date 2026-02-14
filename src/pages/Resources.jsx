import { useState } from 'react';
import Hero from '../components/sections/Hero';
import SectionHeader from '../components/sections/SectionHeader';
import ResourceCard from '../components/sections/ResourceCard';

const resourceTypes = [
  'All',
  'Report',
  'Whitepaper',
  'Webinar',
  'Event',
  'eBook',
  'Video',
  'Data Sheet',
  'Infographic',
];

const categories = [
  'All',
  'AI Security',
  'Application Security',
  'Cloud Security',
  'Data Security',
  'GRC',
  'IAM',
  'Incident Response',
  'OT Security',
  'SOC',
];

const allResources = [
  {
    image: '/placeholder-resource.jpg',
    badge: 'Report',
    title: 'GRIT 2026 Ransomware & Cyber Threat Report',
    date: 'Jan 15, 2026',
    link: '/resources/grit-report',
    ctaText: 'Download',
    type: 'Report',
    category: 'Incident Response',
  },
  {
    image: '/placeholder-resource.jpg',
    badge: 'Event',
    title: 'Premier Cybersecurity Conference 2026',
    date: 'March - November 2026',
    link: '/resources/conference',
    ctaText: 'Learn More',
    type: 'Event',
    category: 'All',
  },
  {
    image: '/placeholder-resource.jpg',
    badge: 'Webinar',
    title: 'GRIT 2026 Ransomware Report Presentation',
    date: 'January 22, 2026',
    link: '/resources/webinar-grit',
    ctaText: 'Watch Now',
    type: 'Webinar',
    category: 'Incident Response',
  },
  {
    image: '/placeholder-resource.jpg',
    badge: 'Whitepaper',
    title: 'Zero Trust Architecture Best Practices',
    date: 'Dec 10, 2025',
    link: '/resources/zero-trust',
    ctaText: 'Download',
    type: 'Whitepaper',
    category: 'IAM',
  },
  {
    image: '/placeholder-resource.jpg',
    badge: 'eBook',
    title: 'Cloud Security Playbook 2026',
    date: 'Feb 1, 2026',
    link: '/resources/cloud-playbook',
    ctaText: 'Download',
    type: 'eBook',
    category: 'Cloud Security',
  },
  {
    image: '/placeholder-resource.jpg',
    badge: 'Video',
    title: 'AI-Powered Threat Detection Demo',
    date: 'Jan 28, 2026',
    link: '/resources/ai-demo',
    ctaText: 'Watch Now',
    type: 'Video',
    category: 'AI Security',
  },
];

export default function Resources() {
  const [typeFilter, setTypeFilter] = useState('All');
  const [catFilter, setCatFilter] = useState('All');

  const filtered = allResources.filter((r) => {
    const matchType = typeFilter === 'All' || r.type === typeFilter;
    const matchCat = catFilter === 'All' || r.category === catFilter;
    return matchType && matchCat;
  });

  return (
    <>
      <Hero
        title="Resource Library"
        subtitle="Learn how to address common cybersecurity challenges with expert insights and reports."
        variant="page"
      />

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="filter-bar row g-3 mb-5">
            <div className="col-md-6">
              <label className="filter-bar__label d-block">Resource Type</label>
              <div className="d-flex flex-wrap gap-2">
                {resourceTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`btn btn-sm rounded-pill ${
                      typeFilter === t ? 'btn-primary' : 'btn-outline-secondary'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <label className="filter-bar__label d-block">Category</label>
              <select
                className="form-select form-select-sm"
                value={catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resource Grid */}
          <div className="row g-4">
            {filtered.length > 0 ? (
              filtered.map((r) => (
                <div className="col-md-6 col-lg-4" key={r.title}>
                  <ResourceCard {...r} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No resources found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
