import React, { Component } from 'react';

class HeaderRow extends Component {
  render() {
    return(
      <div className="row">
        <div className="cell"> Item Name </div>
        <div className="cell"> Price </div>
        <div className="cell"> Quantity </div>
        <div className="cell">  </div>
      </div>
    )
  }
}

export default HeaderRow
