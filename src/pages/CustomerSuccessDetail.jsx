import { useParams, Navigate } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import { customerSuccessStories } from '../data/customers';

function Style1({ story }) {
  return (
    <div className="cs-article__layout">
      <div className="cs-article__text">
        {story.paragraphs.map((p, i) => (
          <p key={i} className="cs-article__paragraph">{p}</p>
        ))}

        {story.bulletItems && story.bulletItems.length > 0 && (
          <ul className="cs-article__bullets">
            {story.bulletItems.map((item, i) => (
              <li key={i} className="cs-article__bullet-item">
                <i className="bi bi-check-circle cs-article__bullet-icon"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {story.quoteIntro && (
          <p className="cs-article__paragraph">{story.quoteIntro}</p>
        )}

        {story.quote && (
          <blockquote className="cs-article__quote">
            {story.quote.text.split('\n\n').map((para, i) => (
              <p key={i} className="cs-article__quote-text">
                {i === 0 ? <>&ldquo;{para}</> : para}
                {i === story.quote.text.split('\n\n').length - 1 ? <>&rdquo;</> : ''}
              </p>
            ))}
          </blockquote>
        )}
      </div>

      <div className="cs-article__media">
        <div className="cs-article__video-wrap">
          <img src={story.videoThumbnail} alt="Video thumbnail" className="cs-article__video-thumb" />
          <div className="cs-article__play-overlay">
            <i className="bi bi-play-circle-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

function Style2({ story }) {
  return (
    <div className="cs-article__layout cs-article__layout--style2">
      {/* Left: intro text + video + rest of text */}
      <div className="cs-article__text">
        {story.paragraphs.map((p, i) => (
          <p key={i} className="cs-article__paragraph">{p}</p>
        ))}

        <div className="cs-article__video-wrap cs-article__video-wrap--inline">
          <img src={story.videoThumbnail} alt="Video thumbnail" className="cs-article__video-thumb" />
          <div className="cs-article__play-overlay">
            <i className="bi bi-play-circle-fill"></i>
          </div>
        </div>

        {story.bulletItems && story.bulletItems.length > 0 && (
          <ul className="cs-article__bullets">
            {story.bulletItems.map((item, i) => (
              <li key={i} className="cs-article__bullet-item">
                <i className="bi bi-check-circle cs-article__bullet-icon"></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {story.quoteIntro && (
          <p className="cs-article__paragraph">{story.quoteIntro}</p>
        )}

        {story.quote && (
          <blockquote className="cs-article__quote">
            {story.quote.text.split('\n\n').map((para, i) => (
              <p key={i} className="cs-article__quote-text">
                {i === 0 ? <>&ldquo;{para}</> : para}
                {i === story.quote.text.split('\n\n').length - 1 ? <>&rdquo;</> : ''}
              </p>
            ))}
          </blockquote>
        )}
      </div>

      {/* Right: Transcript */}
      {story.transcript && (
        <div className="cs-transcript">
          <h3 className="cs-transcript__heading">Read the transcript</h3>
          <div className="cs-transcript__body">
            <p className="cs-transcript__title">{story.transcript.title}</p>
            {story.transcript.text.split('\n\n').map((para, i) => (
              <p key={i} className="cs-transcript__text">{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function CustomerSuccessDetail() {
  const { slug } = useParams();
  const story = customerSuccessStories[slug];

  if (!story) return <Navigate to="/company/customers" replace />;

  return (
    <div className="customer-success-page">
      <Hero
        label={story.category}
        title={story.title}
        variant="service"
        ctaText=""
        bgImage={story.heroImage}
        showNetwork={false}
      />

      <section className="cs-article">
        <div className="container">
          {story.style === 2 ? <Style2 story={story} /> : <Style1 story={story} />}

          <div className="cs-article__social">
            <a href="#" className="cs-article__social-btn" aria-label="Share on LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="cs-article__social-btn" aria-label="Share on X">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="cs-article__social-btn" aria-label="Share on Facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
