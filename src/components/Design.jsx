import Reveal from './Reveal.jsx';
import { DESIGN } from '../data/content.js';
import '../styles/design.css';

export default function Design() {
  const { image } = DESIGN;
  return (
    <section className="section design" id="design" aria-labelledby="design-title">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">{DESIGN.eyebrow}</p>
          <h2 id="design-title" className="section-title">
            {DESIGN.title}
          </h2>
          <p className="lede">{DESIGN.intro}</p>
        </Reveal>

        <ul className="design__grid">
          {DESIGN.details.map((detail, index) => (
            <Reveal as="li" key={detail.id} delay={index * 80} className="detail">
              <figure className="detail__figure">
                <div className="detail__crop">
                  <img
                    className="detail__img"
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={`Close-up of the ${detail.title.toLowerCase()} on the Veyra headset.`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: `${detail.crop.zoom * 100}%`,
                      transform: `translate(-${detail.crop.x}%, -${detail.crop.y}%)`,
                    }}
                  />
                </div>
              </figure>
              <h3 className="detail__title">{detail.title}</h3>
              <p className="detail__text">{detail.text}</p>
            </Reveal>
          ))}
        </ul>

        <p className="design__note">{DESIGN.note}</p>
      </div>
    </section>
  );
}
