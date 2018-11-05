// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {
    return (
      <div className="footer">
        <p>Hello world this is our Footer</p>
      </div>
    );
  }
}

export default Footer;