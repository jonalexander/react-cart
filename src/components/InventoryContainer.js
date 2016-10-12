import React, { Component } from 'react';
import Item from '../models/Item';
import InventoryRow from './InventoryRow'

class InventoryContainer extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [
        new Item(0, 'Milk', 3.99, 10),
        new Item(1, 'Eggs', 5.00, 20),
        new Item(2, 'Beer', 12.50, 25)
      ]
    }

    this.getTableHeaders = this.getTableHeaders.bind(this)
    this.getRows = this.getRows.bind(this)
  }

  getTableHeaders() {
    return (
      <div className="row">
        <div className="cell"> Item Name </div>
        <div className="cell"> Price </div>
        <div className="cell"> Quantity </div>
        <div className="cell">  </div>
      </div>
    )
  }

  getRows() {
    var uniqueId = 0

    return this.state.inventory.map((inventoryItem) => {
      return <InventoryRow key={ uniqueId++ }
                           name={ inventoryItem.name }
                           price={ inventoryItem.price }
                           quantity={ inventoryItem.quantity }
              />
    })
  }

  render() {
    return (
      <div id="container">
        <h2> Inventory </h2>
        { this.getTableHeaders() }
        { this.getRows()  }
      </div>
    );

  }
}

export default InventoryContainer;
