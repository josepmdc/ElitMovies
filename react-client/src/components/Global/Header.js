import React, { Component } from 'react';
import './css/Header.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import Search from './Search'

import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {

    const { title, items } = this.props;

    return (
      <nav className="header">
        <div className = "container">
          <img src={logo} alt="logo" id="logo" />
          <ul className="menu">
            {items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
          </ul>
          <Search id="search" />
        </div>
      </nav>
    )
  }
}

export default Header;