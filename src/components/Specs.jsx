import Reveal from './Reveal.jsx';
import { SPECS } from '../data/content.js';
import '../styles/specs.css';

export default function Specs() {
  return (
    <section className="section specs" id="specs" aria-labelledby="specs-title">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">{SPECS.eyebrow}</p>
          <h2 id="specs-title" className="section-title">
            {SPECS.title}
          </h2>
          <p className="lede">{SPECS.intro}</p>
        </Reveal>

        <div className="specs__layout">
          <Reveal className="specs__group">
            <h3 className="specs__heading">{SPECS.confirmed.title}</h3>
            <dl className="specs__list">
              {SPECS.confirmed.rows.map(([term, value]) => (
                <div className="specs__row" key={term}>
                  <dt>{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal className="specs__group specs__group--muted" delay={90}>
            <h3 className="specs__heading">{SPECS.unspecified.title}</h3>
            <dl className="specs__list">
              {SPECS.unspecified.rows.map((term) => (
                <div className="specs__row" key={term}>
                  <dt>{term}</dt>
                  <dd className="specs__unspecified">Unspecified</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
