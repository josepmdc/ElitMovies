import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Parte from './Parte'
import Buscador from './Buscador'
import $ from 'jquery'




export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <Buscador/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
