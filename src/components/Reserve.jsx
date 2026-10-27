import { useId, useState } from 'react';
import Reveal from './Reveal.jsx';
import { RESERVE } from '../data/content.js';
import '../styles/reserve.css';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Reserve() {
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const value = email.trim();
    setDone(false);
    if (!value) {
      setError(RESERVE.errors.empty);
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError(RESERVE.errors.invalid);
      return;
    }
    // Frontend-only demo: nothing is transmitted or stored.
    setError('');
    setEmail('');
    setDone(true);
  };

  return (
    <section className="reserve" id="reserve" aria-labelledby="reserve-title">
      <div className="container reserve__inner">
        <Reveal className="reserve__copy">
          <p className="eyebrow eyebrow--on-accent">{RESERVE.eyebrow}</p>
          <h2 id="reserve-title" className="section-title reserve__title">
            {RESERVE.title}
          </h2>
          <p className="lede reserve__body">{RESERVE.body}</p>
        </Reveal>

        <Reveal delay={90}>
          <form className="reserve__form" onSubmit={onSubmit} noValidate>
            <label className="reserve__label" htmlFor={inputId}>
              {RESERVE.label}
            </label>
            <div className="reserve__row">
              <input
                id={inputId}
                className="reserve__input"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                placeholder={RESERVE.placeholder}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? errorId : undefined}
              />
              <button type="submit" className="btn btn--dark">
                {RESERVE.button}
              </button>
            </div>
            <p id={errorId} className="reserve__error" role="alert">
              {error}
            </p>
            <p className="reserve__success" role="status">
              {done ? RESERVE.success : ''}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
