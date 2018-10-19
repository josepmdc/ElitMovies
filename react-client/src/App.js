import React, { Component } from 'react';
import './App.css';


//Components
import Buscador from '../src/components/Buscador';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buscador/>
      </div>
    );
  }
}

export default App;