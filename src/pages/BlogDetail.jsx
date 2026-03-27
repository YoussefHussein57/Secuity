import { useParams, Navigate, Link } from 'react-router-dom';
import AnimatedSection from '../components/sections/AnimatedSection';
import BeInformed from '../components/sections/BeInformed';
import blogPosts from '../data/blogPosts';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) return <Navigate to="/404" replace />;

  const renderContent = (block, i) => {
    switch (block.type) {
      case 'p':
        return (
          <p className="blog-post__text" key={i}>
            {block.link ? (
              <>
                {block.text.split(block.link.text)[0]}
                <a href={block.link.href} className="blog-post__link">{block.link.text}</a>
                {block.text.split(block.link.text)[1] || ''}
              </>
            ) : block.text}
          </p>
        );
      case 'h3':
        return <h3 className="blog-post__heading" key={i}>{block.text}</h3>;
      case 'ul':
        return (
          <ul className="blog-post__list" key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                {typeof item === 'string' ? item : (
                  <><strong>{item.label}:</strong> {item.text}</>
                )}
              </li>
            ))}
          </ul>
        );
      case 'comparison_table':
        return (
          <table className="blog-post__table" key={i}>
            <thead>
              <tr>
                <th></th>
                <th>CSF 1.0</th>
                <th>CSF 2.0</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j}>
                  <td><strong>{row.metric}</strong></td>
                  <td>{row.csf1}</td>
                  <td>{row.csf2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  const ShareIcons = ({ className }) => (
    <div className={className}>
      <span className="blog-share__label">Share</span>
      <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="blog-share__icon" aria-label="Share on Twitter">
        <i className="bi bi-twitter-x"></i>
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="blog-share__icon" aria-label="Share on Facebook">
        <i className="bi bi-facebook"></i>
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="blog-share__icon" aria-label="Share on LinkedIn">
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  );

  return (
    <>
      {/* L-shaped hero — image extends behind post header */}
      <div className="blog-hero-wrapper">
        <div
          className="blog-hero"
          style={{ backgroundImage: `url(${post.heroImage})` }}
        />
      </div>

      {/* Post layout — two columns */}
      <div className="container blog-layout">
        {/* Main content column */}
        <div className="blog-post">
          {/* Post header — overlaps hero */}
          <div className="blog-post__header">
            <h1 className="blog-post__title">{post.title}</h1>
            <div className="blog-post__meta">
              <span className="blog-post__author">
                Posted by: <Link to="/resources" className="blog-post__link">{post.author}</Link>
              </span>
              <span className="blog-post__read-time">
                <i className="bi bi-clock"></i> {post.readTime}
              </span>
            </div>
            <div className="blog-post__date">{post.date}</div>
          </div>

          {/* Post body */}
          <div className="blog-post__body">
            {post.content.map(renderContent)}
          </div>

          {/* Post footer — categories + share */}
          <div className="blog-post__footer">
            <div className="blog-post__categories">
              <span className="blog-post__categories-label">Categories:</span>
              {post.categories.map((cat) => (
                <Link key={cat} to={`/resources?type=${encodeURIComponent(cat)}`} className="blog-post__cat-badge">
                  {cat.toUpperCase()}
                </Link>
              ))}
            </div>
            <ShareIcons className="blog-share" />
          </div>

          {/* Tags */}
          {post.tags && (
            <div className="blog-post__tags">
              <span className="blog-post__tags-label">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="blog-post__tag-badge">{tag.toUpperCase()}</span>
              ))}
            </div>
          )}

          {/* Author bio */}
          {post.authorBio && (
            <div className="blog-author">
              <div className="blog-author__content">
                <h4 className="blog-author__name">{post.author.toUpperCase()}</h4>
                <p className="blog-author__role">{post.authorBio.role}</p>
                <p className="blog-author__bio">{post.authorBio.bio}</p>
              </div>
              {post.authorBio.image && (
                <div className="blog-author__photo">
                  <img src={post.authorBio.image} alt={post.author} />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <ShareIcons className="blog-share blog-share--sidebar" />

          {post.sidebar?.resourceCard && (
            <Link to={post.sidebar.resourceCard.ctaLink} className="blog-sidebar__card">
              <div
                className="blog-sidebar__card-image"
                style={{ backgroundImage: `url(${post.sidebar.resourceCard.image})` }}
              />
              <div className="blog-sidebar__card-content">
                <div className="blog-sidebar__card-title">
                  {post.sidebar.resourceCard.title}
                </div>
                <div className="blog-sidebar__card-desc">
                  {post.sidebar.resourceCard.description}
                </div>
                <div className="blog-sidebar__card-cta">
                  {post.sidebar.resourceCard.ctaText} <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </Link>
          )}
        </aside>
      </div>

      {/* Related Articles */}
      {post.relatedArticles && post.relatedArticles.length > 0 && (
        <section className="blog-related">
          <div className="container">
            <div className="blog-related__header">
              <h2 className="blog-related__title">Related Articles</h2>
              <Link to="/resources" className="blog-post__link">View All</Link>
            </div>
            <div className="row g-4">
              {post.relatedArticles.map((article, i) => (
                <div className="col-lg-4" key={i}>
                  <AnimatedSection animation="animate-on-scroll">
                    <Link to={article.link || '/resources'} className="blog-related__card">
                      <div
                        className="blog-related__card-image"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      <div className="blog-related__card-body">
                        <span className="blog-related__card-badge">{article.category}</span>
                        <h3 className="blog-related__card-title">{article.title}</h3>
                        <div className="blog-related__card-footer">
                          <span className="blog-related__card-read-more">Read More</span>
                          <span className="blog-related__card-read-time">
                            <i className="bi bi-clock"></i> {article.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <BeInformed />
    </>
  );
}
