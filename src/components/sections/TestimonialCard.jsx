export default function TestimonialCard({ quote, author, role, company }) {
  return (
    <div className="card-testimonial">
      <p className="card-testimonial__quote">"{quote}"</p>
      <div>
        <span className="card-testimonial__author">{author}</span>
        {role && (
          <span className="card-testimonial__role">
            , {role}
            {company && `, ${company}`}
          </span>
        )}
      </div>
    </div>
  );
}
