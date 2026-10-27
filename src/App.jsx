import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Gallery from './components/Gallery.jsx';
import Design from './components/Design.jsx';
import Specs from './components/Specs.jsx';
import Faq from './components/Faq.jsx';
import Reserve from './components/Reserve.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Highlights />
        <Gallery />
        <Design />
        <Specs />
        <Faq />
        <Reserve />
      </main>
      <Footer />
    </>
  );
}
