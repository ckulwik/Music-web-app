import { useRef, useEffect } from "react";

import Music from "./components/Music.jsx";
import About from "./components/About";
import Links from "./components/Links";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Footer from './components/Footer'

import AOS from "aos";
import "aos/dist/aos.css";
import animateMainImage from "./scripts/animation.js";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  useEffect(() => {
    AOS.init();

    isDesktop && animateMainImage();
  }, [isDesktop]);

  const MusicRef = useRef(null);
  const AboutRef = useRef(null);
  const LinksRef = useRef(null);

  return (
    <div className="app-container">
      <Header MusicRef={MusicRef} AboutRef={AboutRef} LinksRef={LinksRef} />
      <Logo />
      <div className="page" ref={MusicRef}>
        <Music />
      </div>
      <div className="page" ref={AboutRef}>
        <About />
      </div>
      <div className="page links" ref={LinksRef}>
        <Links />
      </div>
      <Footer />
    </div>
  );
};

export default App;
