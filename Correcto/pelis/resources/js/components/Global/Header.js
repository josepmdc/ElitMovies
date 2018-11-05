import React, { Component } from 'react';
import './css/Header.css';
import logo from './images/logo.png';
//import { Link } from 'react-router-dom';
//import Search from './Search'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {

  render() {

    const { title, items } = this.props;

    return (
      <Router>
        <nav className="header">
          <div className = "container">
            <img src={logo} alt="logo" id="logo" />
          </div>
          <ul className="menu">
              <a href={'/General/'}>Posts</a>
              <a href={'/General/'}>Posts</a>
              <a href={'/General/'}>Posts</a>
              <a href={'/General/'}>Posts</a>
          </ul>
          <div className="ContieneBuscador">
            <input type="text"/>
          </div>
        </nav>
      </Router>
    )
  }
}

export default Header;