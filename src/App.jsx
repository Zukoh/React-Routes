import React from 'react';
import Inicio from './components/Inicio'
import About from './components/About'
import Contacto from './components/Contacto'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"


function App() {
  return (
    <Router>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">ROUTES</a>
        <div className="btn-group">
          <Link to="/" className="btn btn-dark rounded mt-1 mb-1 ml-2">Inicio</Link>
          <Link to="/About" className="btn btn-dark rounded mt-1 mb-1 ml-2">About</Link>
          <NavLink to="/Contacto" className="btn btn-dark rounded mt-1 mb-1 ml-2" activeClassName="active">Contacto</NavLink>
        </div>
      </nav>
      <Switch> 
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      
    </Router>

  );
}

export default App;
