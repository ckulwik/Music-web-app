import { useEffect, useRef } from "react";

import './styles/App.css';
import Home from "./components/Home";
import Music from "./components/Music";
import Bio from "./components/Bio";
import Background from "./components/Background";
import animateMainImage from "./scripts/animation";

const App = () => {

  useEffect(() => {
    animateMainImage();
  })

  const homeRef = useRef(null);
  const musicRef = useRef(null);
  const bioRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Background />
      <div className="content-container">
        <h1>chris kulwik</h1>
        <div className="menu-container">
          <div className="menu-item" >
            <h2 >Home</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(musicRef)}>
            <h2 >Music</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(bioRef)}>
            <h2 >Bio</h2>
          </div>

        </div>

        <div className="page" ref={homeRef}>
          <Home />
        </div>
        <div className="page" ref={musicRef}>
          <Music />
        </div>
        <div className="page" ref={bioRef}>
          <Bio />
        </div>
      </div>
    </>
  );
}

export default App;
