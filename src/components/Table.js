import React, { Component } from 'react';
import InventoryRow from './InventoryRow'

class Table extends Component {
  constructor() {
    super()
    this.getRows = this.getRows.bind(this)
  }

  getRows(data) {
    // set unique key for each inventory row
    var uniqueId = 0

    // iterate through each item in inventory and generate an inventory row component & pass down data
    return data.map( (item) => {
      if (item.qty > 0) {
        return <InventoryRow key={ uniqueId++ }
                           name={ item.name }
                           price={ item.price }
                           qty={ item.qty }
                           type={ this.props.type }
                           />
      } // if
    })
  }

  render() {
    return(
      <div>
        {
          this.props.type == 'inventory'
          ? <h2>Inventory</h2>
          : <h2>Cart</h2>
        }
        {
          this.getRows(this.props.data)
        }
      </div>

    )
  }
}

export default Table
