import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom"
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Things from "./components/Things";

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/things">Things</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/stuff" component={Stuff} />
          <Route path="/things" component={Things} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
