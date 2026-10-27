import { useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { GALLERY } from '../data/content.js';
import '../styles/gallery.css';

export default function Gallery() {
  const [activeId, setActiveId] = useState(GALLERY.views[0].id);
  const tabRefs = useRef({});
  const active = GALLERY.views.find((view) => view.id === activeId) ?? GALLERY.views[0];

  const select = (id, { focus = false } = {}) => {
    setActiveId(id);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (event) => {
    const ids = GALLERY.views.map((view) => view.id);
    const current = ids.indexOf(activeId);
    let next = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % ids.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + ids.length) % ids.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = ids.length - 1;
    if (next === null) return;
    event.preventDefault();
    select(ids[next], { focus: true });
  };

  return (
    <section className="section gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <Reveal className="section__head section__head--light">
          <p className="eyebrow">{GALLERY.eyebrow}</p>
          <h2 id="gallery-title" className="section-title">
            {GALLERY.title}
          </h2>
          <p className="lede">{GALLERY.intro}</p>
        </Reveal>

        <Reveal className="gallery__layout">
          <div className="gallery__tabs" role="tablist" aria-label="Product views" onKeyDown={onKeyDown}>
            {GALLERY.views.map((view, index) => {
              const selected = view.id === activeId;
              return (
                <button
                  key={view.id}
                  ref={(node) => {
                    tabRefs.current[view.id] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`gallery-tab-${view.id}`}
                  aria-selected={selected}
                  aria-controls="gallery-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`gallery__tab${selected ? ' is-active' : ''}`}
                  onClick={() => select(view.id)}
                >
                  <span className="gallery__tab-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <span className="gallery__tab-label">{view.tab}</span>
                </button>
              );
            })}
          </div>

          <div
            className="gallery__panel"
            role="tabpanel"
            id="gallery-panel"
            aria-labelledby={`gallery-tab-${active.id}`}
            tabIndex={0}
          >
            <figure className="gallery__figure">
              <div className={`gallery__stage gallery__stage--${active.fit}`}>
                <img
                  key={active.id}
                  className="gallery__image"
                  src={active.src}
                  width={active.width}
                  height={active.height}
                  alt={active.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="gallery__caption">{active.caption}</figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
