export default function SectionHeader({ title, subtitle, center = false }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      <h2 className="section-header__title text-white">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}
