import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';

const posts = [
  { title: 'Understanding Zero Trust Architecture in 2026', date: 'March 1, 2026', category: 'Cloud Security', excerpt: 'Zero trust is no longer optional. Learn how organizations are implementing zero trust principles across hybrid environments.' },
  { title: 'GRIT Ransomware Report: Key Findings', date: 'February 15, 2026', category: 'Threat Intelligence', excerpt: 'Our GRIT team analyzes the latest ransomware trends, attack patterns, and defense strategies from the past year.' },
  { title: 'Top 5 IAM Mistakes That Lead to Breaches', date: 'February 8, 2026', category: 'IAM', excerpt: 'Identity misconfigurations remain a leading cause of breaches. Here are the five most common mistakes and how to fix them.' },
  { title: 'AI in Cybersecurity: Opportunities and Risks', date: 'January 28, 2026', category: 'AI Security', excerpt: 'As AI transforms security operations, it also introduces new attack surfaces. Balancing the benefits with the risks.' },
  { title: 'Building an Effective SOC: People, Process, Technology', date: 'January 20, 2026', category: 'SOC', excerpt: 'A SOC is only as good as its weakest link. Learn how to build and mature your security operations center.' },
  { title: 'The State of OT Security in Critical Infrastructure', date: 'January 10, 2026', category: 'OT Security', excerpt: 'OT environments face increasing threats. We examine the current state and recommended strategies for industrial security.' },
];

export default function Blog() {
  return (
    <>
      <Hero
        title="Blog"
        subtitle="Expert insights, threat analysis, and cybersecurity best practices from our team."
        variant="page"
        ctaText=""
      />

      <section className="section section--light">
        <div className="container">
          <AnimatedSection animation="stagger-children" className="row g-4">
            {posts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.title}>
                <div
                  className="p-4 rounded-4 h-100 d-flex flex-column"
                  style={{ border: '1px solid #e2e8f0', transition: 'border-color 0.3s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#4b4fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  <span className="badge mb-2" style={{ background: 'rgba(75, 79, 255, 0.08)', color: '#4b4fff', alignSelf: 'flex-start' }}>
                    {post.category}
                  </span>
                  <h6 className="fw-bold">{post.title}</h6>
                  <p className="text-muted small flex-grow-1">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <small className="text-muted">{post.date}</small>
                    <Link to="/resources" className="text-decoration-none" style={{ color: '#4b4fff', fontSize: '0.85rem', fontWeight: 600 }}>
                      Read More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <BeInformed />
    </>
  );
}
