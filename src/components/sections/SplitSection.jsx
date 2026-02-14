import { Link } from 'react-router-dom';

export default function SplitSection({
  image,
  title,
  description,
  ctaText,
  ctaLink,
  imageLeft = true,
  dark = false,
}) {
  const content = (
    <div className="col-lg-6 d-flex flex-column justify-content-center">
      <h2 className="fw-bold mb-3">{title}</h2>
      <p className={dark ? 'text-white-50' : 'text-muted'}>{description}</p>
      {ctaText && ctaLink && (
        <div>
          <Link
            to={ctaLink}
            className={`btn ${dark ? 'btn-outline-light' : 'btn-primary'} rounded-pill btn-cta`}
          >
            {ctaText} <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      )}
    </div>
  );

  const img = (
    <div className="col-lg-6">
      <div className="section-split__image">
        <img src={image} alt={title} className="rounded-4" />
      </div>
    </div>
  );

  return (
    <section className={`section section-split ${dark ? 'section--dark' : ''}`}>
      <div className="container">
        <div className="row g-5 align-items-center">
          {imageLeft ? (
            <>
              {img}
              {content}
            </>
          ) : (
            <>
              {content}
              {img}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
