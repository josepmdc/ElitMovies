
import React, { Component }                     from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BaseSimple                               from './BaseSimple';
//import PanelUser                                from './Usuario/PanelUser';
import Buscador                                 from './ComponentsBaseSimple/Buscador';

 
class Menu extends Component {

  constructor(props) {
        super(props);
        //Hasta aqui los datos pasados eran en string, los pasamos a array a variable datos
        //<Route path="/"             component={() => <BaseSimple />} />
        
    }

  render()
  {
    return(
        <Router>
          <div>
            <nav className = "header">
              <ul>
                <li>
                  <Link to="/"><img src="/images/logo.png"  className="logo" /></Link>
                </li>
                <li>
                  <Link to="/about/">Series</Link>
                </li>
                <li>
                  <Link to="/perfil/">Peliculas</Link>
                </li>
                <li>
                  <a href="/login">Descubrir</a>
                </li>
                
                  
                
              </ul>
              
              <Buscador/>
              
            </nav>

            <Route path="/perfil"            component={() => <h2>users</h2>} />
            <Route path="/about/"            component={() => <h2>about</h2>} />
            <Route path="/"         exact    component={() => <BaseSimple />} />
            <Route path="/usuario"         exact    component={() => <BaseSimple />} />
            
          </div>
        </Router>

      )
  }
  
}

export default Menu;