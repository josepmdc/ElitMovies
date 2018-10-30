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
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;