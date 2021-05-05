import { useRef, useState } from "react";

import './styles/App.css';
import Background from "./components/Background";
// import animateMainImage from "./scripts/animation";

import Music from "./components/Music";
import About from "./components/About";

const App = () => {

  // useEffect(() => {
  //   animateMainImage();
  // })

 
  const [isShrunk, setShrunk] = useState(false);

  const MusicRef = useRef(null);

  const AboutRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
   {!isShrunk ?
       <Background />
    
    : 

      <div className="content-container">
        
        <h1>Chris Kulwik</h1>
        <div className="menu-container">
        <div className="menu-item" onClick={() => scrollTo(MusicRef)}>
            <h2 >Music</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(AboutRef)}>
            <h2 >About</h2>
          </div>  
        </div>
      
        <div className="page" ref={MusicRef}>
          <Music />
        </div>
        <div className="page" ref={AboutRef}>
          <About />
        </div>

      </div>
      }
    </>
  );
}

export default App;
