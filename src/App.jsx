import { useRef, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import CircularProgress from "@mui/material/CircularProgress"; 
import React from "react";

const Music = lazy(() => import("./components/Music"));
const About = lazy(() => import("./components/About"));
const Links = lazy(() => import("./components/Links"));
const Header = lazy(() => import("./components/Header"));
const Logo = lazy(() => import("./components/Logo"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  useEffect(() => {
    AOS.init();
  }, [isDesktop]);

  const MusicRef = useRef(null);
  const AboutRef = useRef(null);
  const LinksRef = useRef(null);

  function GradientCircularProgress() {
    return (
      <React.Fragment>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#a90b1b" />
              <stop offset="100%" stopColor="#03697a" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} size={100} />
      </React.Fragment>
    );
  }

  return (
    <div className="app-container">
      <Suspense fallback={<div className="loader-container"><GradientCircularProgress /></div>}>
        <Header MusicRef={MusicRef} AboutRef={AboutRef} LinksRef={LinksRef} />
        <Logo isDesktop={isDesktop} />
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
      </Suspense>
    </div>
  );
};

export default App;
