class Product {
  constructor(name, description, price){
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity){
    this.inStock += quantity
  }

  calculateDiscount(discount){
    this.price -= (discount * this.price) / 100
  }
}

let book = new Product("Livro", "livro de matematica", 100)
console.log(book)
book.addToStock(2)
book.calculateDiscount(20)
console.log(book)