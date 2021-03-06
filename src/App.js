import React, { Component } from 'react';
import Table from './components/Table'
import logo from './assets/logo.svg';
import './assets/App.css';

var update = require('react-addons-update');


class App extends Component {
  // house the state in App because the inventory container will need to communicate changes that will change the state of the cart container
  // inventory is only given knowledge of the inventory and the same can be said for the cart, they are bound together by the overarching App
  // do not want container components to change the state of each other, must pass through a 'controller' of sorts
  // create methods to change the state in App and pass down as props

  constructor() {
    super()
    this.state = {
      inventory: [
        {id: 0, name: 'Milk', price: 3.99, qty: 10},
        {id: 1, name: 'Eggs', price: 5.00, qty: 20},
        {id: 2, name: 'Beer', price: 12.50, qty: 25}
      ],
      cart: [
        {id: 0, name: 'Milk', price: 3.99, qty: 2},
        {id: 1, name: 'Eggs', price: 5.00, qty: 1},
        {id: 2, name: 'Beer', price: 12.50, qty: 1}
      ]
    }
  }



  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1> React Cart </h1>
        </div>

        <div className="App-body">
          <Table data={ this.state.inventory }
                 type={ 'inventory'}
                />
          <Table data={ this.state.cart }
                 type={ 'cart' }
                 />
        </div>

      </div>

    );
  }
}

export default App;
