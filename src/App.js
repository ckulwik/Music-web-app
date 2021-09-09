import { useRef } from "react";

import "./styles/App.css";
import Music from "./components/Music";
import About from "./components/About";
import HeaderItem from "./components/Header/HeaderItem";

const App = () => {
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

      <div className="page">
        <h1>Dope af logo</h1>
      </div>
      <div className="page" ref={MusicRef}>
        <Music />
      </div>
      <div className="page" ref={AboutRef}>
        <About />
      </div>
      <div className="page" ref={LinksRef}>
        <h1>Links</h1>
      </div>
    </>
  );
};

export default App;
