import { useEffect, useRef } from "react";

import './styles/App.css';
import Home from "./components/Home";
// import Music from "./components/Music";
import JS from "./components/JS";
import Background from "./components/Background";
import VirtualDom from "./components/VirtualDom/VirtualDom";

import animateMainImage from "./scripts/animation";

const App = () => {

  useEffect(() => {
    animateMainImage();
  })

  const homeRef = useRef(null);
  // const musicRef = useRef(null);
  const JSRef = useRef(null);
  const VirtualDomRef = useRef(null);

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
          <div className="menu-item" onClick={() => scrollTo(JSRef)}>
            <h2 >JS</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(VirtualDomRef)}>
            <h2 >VirtualDom</h2>
          </div>
          {/* <div className="menu-item" onClick={() => scrollTo(musicRef)}>
            <h2 >Music</h2>
          </div> */}

        </div>

        <div className="page" ref={homeRef}>
          <Home />
        </div>
        <div className="page" ref={JSRef}>
          <JS />
        </div>
        <div className="page" ref={VirtualDomRef}>
          <VirtualDom />
        </div>
        {/* <div className="page" ref={musicRef}>
          <Music />
        </div> */}
      </div>
    </>
  );
}

export default App;
