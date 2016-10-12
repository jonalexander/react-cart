import React, { Component } from 'react';
import InventoryContainer from './components/InventoryContainer'
import logo from './assets/logo.svg';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2> React Cart </h2>
        </div>

        <div className="App-body">
          <InventoryContainer />
        </div>

      </div>

    );
  }
}

export default App;
