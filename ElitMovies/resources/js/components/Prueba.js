
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BaseSimple           from './BaseSimple';


class Prueba extends Component {

  constructor(props) {
        super(props);
        //Hasta aqui los datos pasados eran en string, los pasamos a array a variable datos
        
    }

  render()
  {
    return(
        <Router>
          <div>
            <nav className = "header">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/users"             component={() => <h2>Home</h2>} />
            <Route path="/about/"             component={() => <h2>about</h2>} />
            <Route path="/"            exact component={() => <BaseSimple data={this.props.data} />} />
          </div>
        </Router>

      )
  }
  
}

export default Prueba;