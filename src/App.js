import { useEffect, useRef } from "react";

import './styles/App.css';
import Home from "./components/Home";

import Async from "./components/Async";
import Generators from "./components/Generators";
import Callbacks from "./components/Callbacks";
import ArrayFuncs from "./components/ArrayFuncs";
import LetVsVar from "./components/LetVsVar";
import Hooks from "./components/Hooks";

import VirtualDom from "./components/VirtualDom/VirtualDom";

import Background from "./components/Background";

// Async async
// generators
// callbacks
// array fincs
// let vs var

// react hooks
// VD           DONE
// ci cd        DONE

// import animateMainImage from "./scripts/animation";

const App = () => {

  // useEffect(() => {
  //   animateMainImage();
  // })

  // const homeRef = useRef(null);
  const AsyncRef = useRef(null);
  const GeneratorsRef = useRef(null);
  const CallsbacksRef = useRef(null);
  const ArrayFuncsRef = useRef(null);
  const LetVsVarRef = useRef(null);
  const HooksRef = useRef(null);
  const VirtualDomRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* <Background /> */}
      <div className="content-container">
        <h1>chris kulwik</h1>
        <div className="menu-container">
          <div className="menu-item" onClick={() => scrollTo(AsyncRef)}>
            <h2 >Async</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(GeneratorsRef)}>
            <h2 >Generators</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(CallsbacksRef)}>
            <h2 >Callbacks</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(ArrayFuncsRef)}>
            <h2 >Array Funcs</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(LetVsVarRef)}>
            <h2 >Let vs Var</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(HooksRef)}>
            <h2 >Hooks</h2>
          </div>
          <div className="menu-item" onClick={() => scrollTo(VirtualDomRef)}>
            <h2 >VirtualDom</h2>
          </div>
        </div>

        <div className="page" />

        <div className="page" ref={AsyncRef}>
          <Async />
        </div>
        <div className="page" ref={GeneratorsRef}>
          <Generators />
        </div>
        <div className="page" ref={CallsbacksRef}>
          <Callbacks />
        </div>
        <div className="page" ref={ArrayFuncsRef}>
          <ArrayFuncs />
        </div>
        <div className="page" ref={LetVsVarRef}>
          <LetVsVar />
        </div>
        <div className="page" ref={HooksRef}>
          <Hooks />
        </div>
        <div className="page" ref={VirtualDomRef}>
          <VirtualDom />
        </div>

      </div>
    </>
  );
}

export default App;
