import { useEffect, useRef, useState } from 'react';
import Logo from './Logo.jsx';
import Icon from './Icons.jsx';
import { NAV_LINKS } from '../data/content.js';
import '../styles/header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    // Close the menu if the viewport grows to the desktop layout.
    const query = window.matchMedia('(min-width: 56rem)');
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled || open ? ' is-solid' : ''}`}>
      <div className="container site-header__bar">
        <a className="site-header__brand" href="#top" aria-label="Veyra, back to top" onClick={close}>
          <Logo />
        </a>

        <nav id="primary-nav" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link" href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--small site-nav__cta" href="#reserve" onClick={close}>
            Reserve interest
          </a>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
