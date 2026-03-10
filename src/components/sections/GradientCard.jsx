export default function GradientCard({
  icon,
  iconCircle = false,
  title,
  description,
  text,
  accent = 'bottom',
  layout = 'centered',
  titleLg = false,
  children,
}) {
  const cls = [
    'card-gradient',
    `card-gradient--${layout}`,
    `card-gradient--accent-${accent}`,
  ].join(' ');

  // If children are provided, render them directly inside the gradient wrapper
  if (children) {
    return <div className={cls}>{children}</div>;
  }

  return (
    <div className={cls}>
      {iconCircle && icon && (
        <div className="card-gradient__icon-circle">
          <i className={`bi ${icon}`}></i>
        </div>
      )}
      {!iconCircle && icon && (
        <div className="card-gradient__icon">
          <i className={`bi ${icon}`}></i>
        </div>
      )}
      {layout === 'horizontal' ? (
        <div className="card-gradient__content">
          <h5 className={`card-gradient__title${titleLg ? ' card-gradient__title--lg' : ''}`}>{title}</h5>
          <p className="card-gradient__desc">{description}</p>
        </div>
      ) : text ? (
        <p className="card-gradient__text">{text}</p>
      ) : (
        <>
          <h5 className={`card-gradient__title${titleLg ? ' card-gradient__title--lg' : ''}`}>{title}</h5>
          <p className="card-gradient__desc">{description}</p>
        </>
      )}
    </div>
  );
}
