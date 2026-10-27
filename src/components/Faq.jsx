import { useState } from 'react';
import Icon from './Icons.jsx';
import Reveal from './Reveal.jsx';
import { FAQ } from '../data/content.js';
import '../styles/faq.css';

export default function Faq() {
  const [openId, setOpenId] = useState(FAQ.items[0].id);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <Reveal className="section__head faq__head">
          <p className="eyebrow">{FAQ.eyebrow}</p>
          <h2 id="faq-title" className="section-title">
            {FAQ.title}
          </h2>
        </Reveal>

        <Reveal className="faq__list" delay={80}>
          {FAQ.items.map((item) => {
            const open = item.id === openId;
            return (
              <div className={`faq-item${open ? ' is-open' : ''}`} key={item.id}>
                <h3 className="faq-item__heading">
                  <button
                    type="button"
                    className="faq-item__button"
                    id={`faq-button-${item.id}`}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-item__icon" aria-hidden="true">
                      <Icon name="plus" />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-item__panel"
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                >
                  <div className="faq-item__inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
