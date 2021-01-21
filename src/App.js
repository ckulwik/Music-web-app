import { Route, NavLink, HashRouter } from "react-router-dom"
import { useEffect } from "react";

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

  return (
    <HashRouter>
      <Background />
      <div className="content-container">
        <h1>Simple SPA</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Music">Music</NavLink></li>
          <li><NavLink to="/Bio">Bio</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/Music" component={Music} />
          <Route path="/Bio" component={Bio} />
        </div>
        {/* <script src="../animation.js"></script> */}
      </div>
    </HashRouter>
  );
}

export default App;
