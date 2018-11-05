import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Content.css';

class Content extends Component {
  

  render() {
    const { body } = this.props;

    return (
      <div className="Content">
        {body}
      </div>
    );
  }
}

export default Content;