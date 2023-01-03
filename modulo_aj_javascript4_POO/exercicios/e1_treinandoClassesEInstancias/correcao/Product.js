class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.stock = 0
  }
  addToStock(quantity){
    this.stock += quantity
  }
  calculateDiscount(discount){
    return this.price * ((100 - discount) / 100)
  }
}

let watch = new Product("Relógio de pulso", "uma descrição", 80)

watch.addToStock(99)
console.log(watch)
console.log(watch.calculateDiscount(15))
console.log(watch.calculateDiscount(10))