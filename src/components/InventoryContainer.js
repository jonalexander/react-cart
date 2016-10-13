import React, { Component } from 'react';
import InventoryRow from './InventoryRow'
import HeaderRow from './HeaderRow'

class InventoryContainer extends Component {
  constructor() {
    super()
    this.getRows = this.getRows.bind(this)
  }

  getRows() {
    // set unique key for each inventory row
    var uniqueId = 0

    // iterate through each item in inventory and generate an inventory row component & pass down data
    return this.props.data.map((inventoryItem) => {
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
        <HeaderRow />
        { this.getRows()  }
      </div>
    );

  }
}

export default InventoryContainer;
