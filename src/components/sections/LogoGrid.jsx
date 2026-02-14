export default function LogoGrid({ logos }) {
  return (
    <div className="logo-grid">
      {logos.map((logo, i) => (
        <div className="card-logo" key={i}>
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
}
