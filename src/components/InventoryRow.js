import React, { Component } from 'react';

class InventoryRow extends Component {
  render() {
    return (
      <div className="row">
        <div className="cell"> { this.props.name } </div>
        <div className="cell"> { this.props.price } </div>
        <div className="cell"> { this.props.quantity } </div>
        <div className="cell"> Add </div>
      </div>
    )
  }
}


export default InventoryRow
