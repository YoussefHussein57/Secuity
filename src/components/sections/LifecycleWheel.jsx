import { useState, useCallback } from 'react';
import { assetUrl } from '../../utils/assetUrl';
import GradientCard from './GradientCard';

// ── SVG Pie Wheel — supports any number of stages ─────────────────────────────
const CX = 210, CY = 210, R_OUT = 192, R_IN = 52;

function toXY(r, angleDeg) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return [+(CX + r * Math.cos(rad)).toFixed(2), +(CY + r * Math.sin(rad)).toFixed(2)];
}

function slicePath(startDeg, endDeg, gap = 0) {
  const s = startDeg + gap, e = endDeg - gap;
  const [ox1, oy1] = toXY(R_OUT, s), [ox2, oy2] = toXY(R_OUT, e);
  const [ix1, iy1] = toXY(R_IN, s),  [ix2, iy2] = toXY(R_IN, e);
  const la = (e - s) > 180 ? 1 : 0;
  return `M${ix1} ${iy1} L${ox1} ${oy1} A${R_OUT} ${R_OUT} 0 ${la} 1 ${ox2} ${oy2} L${ix2} ${iy2} A${R_IN} ${R_IN} 0 ${la} 0 ${ix1} ${iy1}Z`;
}

export default function LifecycleWheel({ data }) {
  const n       = data.stages.length;
  const segDeg  = 360 / n;
  // Center first segment at the top (12 o'clock)
  const offset  = -(segDeg / 2);

  const [activeIdx, setActiveIdx]     = useState(0);
  const [contentIdx, setContentIdx]   = useState(0);
  const [contentVisible, setVisible]  = useState(true);
  const [spinKey, setSpinKey]         = useState(0);

  const active = data.stages[contentIdx];

  const handleActivate = useCallback((i) => {
    if (i === activeIdx) return;
    setActiveIdx(i);
    setSpinKey((k) => k + 1);
    setVisible(false);
    setTimeout(() => { setContentIdx(i); setVisible(true); }, 200);
  }, [activeIdx]);

  return (
    <>
      {/* Wheel section */}
      <section
        className={`section section--dark lifecycle-section${data.bgImage ? ' lifecycle-section--has-bg' : ''}${data.className ? ' ' + data.className : ''}`}
        style={data.bgImage ? { backgroundImage: `url(${data.bgImage})` } : undefined}
      >
        <div className="container pt-5">

          {/* Header */}
          <div className="text-center mb-5">
            <p className="section-header__label text-white">{data.label}</p>
            <h2 className="use-cases__title text-white">
              {data.titleHighlight ? (
                <>
                  {data.title.split(data.titleHighlight)[0]}
                  <span className="text-accent-box">{data.titleHighlight}</span>
                  {data.title.split(data.titleHighlight)[1] || ''}
                </>
              ) : data.title}
            </h2>
            {(data.paragraphs ?? (data.subtitle ? [data.subtitle] : [])).map((p, i) => (
              <p key={i} className="use-cases__subtitle mx-auto mt-2" style={{ textAlign: 'left', maxWidth: 820 }}>{p}</p>
            ))}
          </div>

          {/* Wheel + Content */}
          <div className="row align-items-center g-5 justify-content-center">

            {/* SVG Wheel */}
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="lifecycle-wheel-wrap" style={{ aspectRatio: '1 / 1' }}>

                {/* SVG segments */}
                <svg viewBox="0 0 420 420" style={{ width: '100%', height: '100%', display: 'block' }}>
                  {/* dark ring background */}
                  <circle cx={CX} cy={CY} r={R_OUT + 4} fill="#0f0f27" />

                  {data.stages.map((stage, i) => {
                    const s = offset + i * segDeg;
                    const e = offset + (i + 1) * segDeg;
                    return (
                      <path
                        key={stage.id}
                        d={slicePath(s, e)}
                        fill={activeIdx === i ? '#3730ff' : '#dde1f5'}
                        style={{ cursor: 'pointer', transition: 'fill 0.2s ease' }}
                        onMouseEnter={() => handleActivate(i)}
                        onClick={() => handleActivate(i)}
                      />
                    );
                  })}

                  {/* Center hole */}
                  <circle cx={CX} cy={CY} r={R_IN - 2} fill="#0f0f27" />

                  {/* Center image (non-GPVUE variant) */}
                  {!data.gpvueCenter && (
                    <image
                      key={spinKey}
                      href={assetUrl(data.centerImage || '/aws-lifecycle-center.svg')}
                      x={CX - 38}
                      y={CY - 38}
                      width={76}
                      height={76}
                      className="lifecycle-wheel__center-spin"
                    />
                  )}
                </svg>

                {/* GPVUE center overlay — HTML so CSS hover/animation works */}
                {data.gpvueCenter && (
                  <div className="gpvue-center-overlay" aria-hidden="true">
                    <i className="bi bi-arrow-repeat gpvue-center-arrows"></i>
                    <span className="gpvue-center-text">
                      <span className="gpvue-center-gp">GP</span>
                      <em className="gpvue-center-vue">VUE</em>
                    </span>
                  </div>
                )}

                {/* Icon + label HTML overlays (pointerEvents:none so SVG hover works) */}
                {data.stages.map((stage, i) => {
                  const midDeg  = offset + i * segDeg + segDeg / 2;
                  const [x, y]  = toXY(128, midDeg);
                  const isActive = activeIdx === i;
                  return (
                    <div
                      key={`ov-${stage.id}`}
                      className="lifecycle-wheel__label-overlay"
                      style={{
                        position: 'absolute',
                        left: `${(x / 420 * 100).toFixed(2)}%`,
                        top:  `${(y / 420 * 100).toFixed(2)}%`,
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        pointerEvents: 'none',
                        lineHeight: 1.2,
                        width: '22%',
                      }}
                    >
                      {stage.biIcon ? (
                        <i
                          className={`bi ${stage.biIcon}`}
                          style={{ fontSize: '1.1rem', color: isActive ? '#fff' : '#19186e', display: 'block', transition: 'color 0.2s' }}
                        />
                      ) : stage.iconImage ? (
                        <img
                          src={assetUrl(stage.iconImage)}
                          alt=""
                          style={{ width: 32, height: 32, objectFit: 'contain', display: 'block', margin: '0 auto', filter: isActive ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.2s' }}
                        />
                      ) : null}
                      <span style={{ fontSize: '10px', fontWeight: 700, color: isActive ? '#fff' : '#19186e', display: 'block', marginTop: 3, whiteSpace: 'normal', transition: 'color 0.2s', lineHeight: 1.3 }}>
                        {stage.name}
                      </span>
                    </div>
                  );
                })}


              </div>
            </div>

            {/* Content panel */}
            <div className="col-lg-5">
              <div className={`lifecycle-content${contentVisible ? ' lifecycle-content--visible' : ''}`}>
                <div className="lifecycle-content__heading">
                  <div className="lifecycle-content__icon-wrap">
                    {active.biIcon ? (
                      <i className={`bi ${active.biIcon}`} style={{ fontSize: '1.3rem', color: '#fff' }} />
                    ) : active.iconImage ? (
                      <img src={assetUrl(active.iconImage)} alt={active.name} />
                    ) : null}
                  </div>
                  <h3 className="lifecycle-content__title">{active.name.toUpperCase()}</h3>
                </div>
                {active.description && (
                  <p className="lifecycle-content__desc">{active.description}</p>
                )}
                {active.items && active.items.length > 0 && (
                  <ul className="lifecycle-content__list">
                    {active.items.map((item) => (
                      <li key={item.title} className="lifecycle-content__item">
                        <i className="bi bi-check-circle lifecycle-content__check" />
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Per-stage card sections (used by AWS lifecycle) */}
      {data.stages.map((stage) =>
        stage.cards && stage.cards.length > 0 ? (
          <section key={stage.id} className="section section--indigo">
            <div className="container">
              <div className="text-center mb-5">
                <p className="section-header__label" style={{ color: 'rgba(255,255,255,0.7)' }}>{stage.sectionLabel}</p>
                <h2 className="use-cases__title text-white">
                  {stage.sectionTitleHighlight ? (
                    <>
                      {stage.sectionTitle.split(stage.sectionTitleHighlight)[0]}
                      <span className="text-accent-box">{stage.sectionTitleHighlight}</span>
                      {stage.sectionTitle.split(stage.sectionTitleHighlight)[1] || ''}
                    </>
                  ) : stage.sectionTitle}
                </h2>
              </div>
              <div className={`row g-4 row-cols-1 ${stage.cards.length === 3 ? 'row-cols-md-3' : stage.cards.length === 4 ? 'row-cols-md-2' : 'row-cols-md-2 row-cols-lg-3'}`}>
                {stage.cards.map((card) => (
                  <div key={card.title} className="col">
                    {card.checklist ? (
                      <GradientCard layout="left" accent="top">
                        <h5 className="card-gradient__title">{card.title}</h5>
                        <p className="card-gradient__desc">{card.description}</p>
                        <ul className="list-unstyled mt-2 mb-0">
                          {card.checklist.map((item) => (
                            <li key={item} className="d-flex align-items-start gap-2 mb-1" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
                              <i className="bi bi-check-circle" style={{ color: '#00ccff', fontSize: '0.85rem', flexShrink: 0, marginTop: '2px' }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </GradientCard>
                    ) : (
                      <GradientCard layout="left" accent="top" title={card.title} description={card.description} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null
      )}
    </>
  );
}
