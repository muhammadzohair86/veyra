import Icon from './Icons.jsx';
import { HERO } from '../data/content.js';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            {HERO.title[0]} <em>{HERO.title[1]}</em>
          </h1>
          <p className="lede hero__body">{HERO.body}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
              <Icon name="arrow" />
            </a>
            <a className="btn btn--ghost" href={HERO.secondaryCta.href}>
              {HERO.secondaryCta.label}
            </a>
          </div>
          <ul className="hero__facts" aria-label="Key facts">
            {HERO.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="hero__stage">
          <div className="hero__disc" aria-hidden="true" />
          <img
            className="hero__image"
            src={HERO.image.src}
            width={HERO.image.width}
            height={HERO.image.height}
            alt={HERO.image.alt}
            fetchPriority="high"
            decoding="async"
          />
          <div className="hero__shadow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
