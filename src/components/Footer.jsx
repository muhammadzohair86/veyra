import Logo from './Logo.jsx';
import { BRAND, FOOTER, NAV_LINKS } from '../data/content.js';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p>{FOOTER.blurb}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#reserve">Reserve interest</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <p className="site-footer__credit">{BRAND.credit}</p>
        <p className="site-footer__legal">
          &copy; {new Date().getFullYear()} {BRAND.name}. {FOOTER.legal}
        </p>
      </div>
    </footer>
  );
}
