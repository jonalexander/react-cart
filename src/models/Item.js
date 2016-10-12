class Item {

  constructor(id, name, price, quantity) {
    // faking a db id number
    this.id = id
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  updateName(newName) {
    this.name = newName
  }

  updatePrice(newPrice) {
    this.price = newPrice
  }

  updateQuantity(newQuantity) {
    this.quantity = newQuantity
  }
}

export default Item
