import { useRef, useEffect } from "react";

import "./styles/App.css";
import Music from "./components/Music.jsx";
import About from "./components/About";
import Links from "./components/Links";
import HeaderItem from "./components/HeaderItem";
import AOS from "aos";
import "aos/dist/aos.css";
import animateMainImage from "./scripts/animation.js";

const App = () => {
  useEffect(() => {
    AOS.init();
    animateMainImage();
  }, []);

  const MusicRef = useRef(null);
  const AboutRef = useRef(null);
  const LinksRef = useRef(null);

  return (
    <>
      <header>
        <HeaderItem title="Music" ref={MusicRef} order={1} />
        <HeaderItem title="About" ref={AboutRef} order={2} />
        <HeaderItem title="Links" ref={LinksRef} order={3} />
      </header>

      <div
        className="image-container"
        data-aos="flip-right"
        data-aos-duration="800"
        data-aos-delay="100"
        data-aos-once
      >
        <img
          className="main-img"
          alt="chris kulwik music main logo, in colorful retro font"
          src="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ChrisKulwikLogoSmaller.png"
        ></img>
      </div>
      <div className="page" ref={MusicRef}>
        <Music />
      </div>
      <div className="page" ref={AboutRef}>
        <About />
      </div>
      <div className="page links" ref={LinksRef}>
        <Links />
      </div>
    </>
  );
};

export default App;
