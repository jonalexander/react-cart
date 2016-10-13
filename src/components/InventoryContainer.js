import React, { Component } from 'react';
import InventoryRow from './InventoryRow'

class InventoryContainer extends Component {
  constructor() {
    super()
    this.getTableHeaders = this.getTableHeaders.bind(this)
    this.getRows = this.getRows.bind(this)
  }

  getTableHeaders() {
    return (
      // generate static table column headers for inventory table
      <div className="row">
        <div className="cell"> Item Name </div>
        <div className="cell"> Price </div>
        <div className="cell"> Quantity </div>
        <div className="cell">  </div>
      </div>
    )
  }

  getRows() {
    // set unique key for each inventory row
    var uniqueId = 0

    // iterate through each item in inventory and generate an inventory row component & pass down data
    return this.props.inventory.map((inventoryItem) => {
      return <InventoryRow key={ uniqueId++ }
                           name={ inventoryItem.name }
                           price={ inventoryItem.price }
                           quantity={ inventoryItem.qty }
              />
    })
  }

  render() {
    return (
      <div id="container">
        { this.getTableHeaders() }
        { this.getRows()  }
      </div>
    );

  }
}

export default InventoryContainer;
