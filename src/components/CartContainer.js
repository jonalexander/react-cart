import React, { Component } from 'react';
import HeaderRow from './HeaderRow'


class CartContainer extends Component {

  render() {
    return(
      <div className="container">
        { this.props.type === 'inventory' : <h2>Inventory</h2> : <h2>Cart</h2> }
        <HeaderRow />
      </div>
    )
  }
}

export default CartContainer
