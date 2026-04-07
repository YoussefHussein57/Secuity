import { useState, useCallback } from 'react';
import { assetUrl } from '../../utils/assetUrl';
import GradientCard from './GradientCard';

const gridAreas = ['1 / 1', '1 / 2', '2 / 2', '2 / 1'];

export default function LifecycleWheel({ data }) {
  const [activeIdx, setActiveIdx]       = useState(1); // controls wheel highlight — updates immediately
  const [contentIdx, setContentIdx]     = useState(1); // controls right-side content — updates after fade
  const [spinKey, setSpinKey]           = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  const active = data.stages[contentIdx];

  const handleHover = useCallback((i) => {
    if (i === activeIdx) return;
    // Highlight new quadrant immediately — smooth instant swap
    setActiveIdx(i);
    setSpinKey((k) => k + 1);
    // Fade content out, swap text, fade back in
    setContentVisible(false);
    setTimeout(() => {
      setContentIdx(i);
      setContentVisible(true);
    }, 200);
  }, [activeIdx]);

  return (
    <>
      {/* Wheel section — dark background */}
      <section className="section section--dark lifecycle-section">
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
            <p className="use-cases__subtitle mx-auto mt-3">{data.subtitle}</p>
          </div>

          {/* Wheel + Content */}
          <div className="row align-items-center g-5">
            {/* Wheel */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="lifecycle-wheel-wrap">
                <div className="lifecycle-wheel">
                  {data.stages.map((stage, i) => (
                    <div
                      key={stage.id}
                      className={`lifecycle-wheel__quadrant${activeIdx === i ? ' lifecycle-wheel__quadrant--active' : ''}`}
                      style={{ gridArea: gridAreas[i] }}
                      onMouseEnter={() => handleHover(i)}
                    >
                      <img
                        src={assetUrl(stage.iconImage)}
                        alt={stage.name}
                        className="lifecycle-wheel__icon"
                      />
                      <span className="lifecycle-wheel__label">{stage.name}</span>
                    </div>
                  ))}
                </div>

                {/* Centre circle — key change restarts the spin animation */}
                <div className="lifecycle-wheel__center" key={spinKey}>
                  <img
                    src={assetUrl('/aws-lifecycle-center.svg')}
                    alt=""
                    className="lifecycle-wheel__center-svg"
                  />
                </div>
              </div>
            </div>

            {/* Content panel */}
            <div className="col-lg-6">
              <div className={`lifecycle-content${contentVisible ? ' lifecycle-content--visible' : ''}`}>
                <div className="lifecycle-content__heading">
                  <div className="lifecycle-content__icon-wrap">
                    <img src={assetUrl(active.iconImage)} alt={active.name} />
                  </div>
                  <h3 className="lifecycle-content__title">{active.name.toUpperCase()}</h3>
                </div>
                {active.description && (
                  <p className="lifecycle-content__desc">{active.description}</p>
                )}
                <ul className="lifecycle-content__list">
                  {active.items.map((item) => (
                    <li key={item.title} className="lifecycle-content__item">
                      <i className="bi bi-check-circle lifecycle-content__check" />
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage card sections — separate indigo sections for correct bg + dividers */}
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
