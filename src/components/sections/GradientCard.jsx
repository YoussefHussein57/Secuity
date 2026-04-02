import { Link } from 'react-router-dom';

export default function GradientCard({
  icon,
  iconImage,
  iconWidth,
  iconHeight,
  iconCircle = false,
  title,
  description,
  text,
  accent = 'bottom',
  layout = 'centered',
  titleLg = false,
  titleWhite = false,
  link,
  linkText,
  children,
}) {
  const cls = [
    'card-gradient',
    `card-gradient--${layout}`,
    accent !== 'none' ? `card-gradient--accent-${accent}` : '',
  ].filter(Boolean).join(' ');

  // If children are provided, render them directly inside the gradient wrapper
  if (children) {
    return <div className={cls}>{children}</div>;
  }

  const renderIcon = () => {
    if (iconImage) {
      return (
        <div className="card-gradient__icon">
          <img src={iconImage} alt="" style={(iconWidth || iconHeight) ? { width: iconWidth, height: iconHeight } : undefined} />
        </div>
      );
    }
    if (iconCircle && icon) {
      return (
        <div className="card-gradient__icon-circle">
          <i className={`bi ${icon}`}></i>
        </div>
      );
    }
    if (icon) {
      return (
        <div className="card-gradient__icon">
          <i className={`bi ${icon}`}></i>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={cls}>
      {renderIcon()}
      {layout === 'horizontal' ? (
        <div className="card-gradient__content">
          <h5 className={`card-gradient__title${titleLg ? ' card-gradient__title--lg' : ''}`} style={{}}>{title}</h5>
          <p className="card-gradient__desc">{description}</p>
        </div>
      ) : text ? (
        <p className="card-gradient__text">{text}</p>
      ) : (
        <>
          <h5 className={`card-gradient__title${titleLg ? ' card-gradient__title--lg' : ''}`} style={titleWhite ? { color: '#fff' } : undefined}>{title}</h5>
          <p className="card-gradient__desc">{description}</p>
          {link && (
            <Link to={link} className="card-gradient__link">
              {linkText || 'Learn More'} &gt;
            </Link>
          )}
        </>
      )}
    </div>
  );
}
