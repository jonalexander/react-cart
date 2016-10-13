import React, { Component } from 'react';

class InventoryRow extends Component {
  render() {
    return (
      <div className="row">
        <div className="cell"> { this.props.name } </div>
        <div className="cell"> { this.props.price } </div>
        <div className="cell"> { this.props.qty} </div>
        <div className="cell"> { this.props.type === 'inventory' ? 'Add' : 'Rmv 1' } </div>
      </div>
    )
  }
}


export default InventoryRow
