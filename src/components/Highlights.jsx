import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { HIGHLIGHTS } from '../data/content.js';
import '../styles/highlights.css';

export default function Highlights() {
  return (
    <section className="section highlights" id="highlights" aria-labelledby="highlights-title">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">{HIGHLIGHTS.eyebrow}</p>
          <h2 id="highlights-title" className="section-title">
            {HIGHLIGHTS.title}
          </h2>
          <p className="lede">{HIGHLIGHTS.intro}</p>
        </Reveal>

        <ul className="highlights__grid">
          {HIGHLIGHTS.items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={index * 70} className="highlight-card">
              <span className="highlight-card__icon">
                <Icon name={item.icon} />
              </span>
              <span className="highlight-card__index" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__text">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
