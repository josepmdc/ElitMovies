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
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} alt="logo" id="logo" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {items && items.map((item, key) => <li key={key} className="nav-item"><Link to={item.url} className="nav-link">{item.title}</Link></li>)}
          </ul>
          <Search id="search" />
        </div>
      </nav>
    )
  }
}

export default Header;