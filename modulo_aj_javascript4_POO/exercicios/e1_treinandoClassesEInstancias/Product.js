class Product{
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
    //calcular desconto e retornar o valor final
    this.discount = discount
    this.discountT = this.price * this.discount / 100
    this.total =  this.price - this.discountT
  }
}

let livro = new Product("Teteia", "um livro ai", 150)
console.log(livro.price)
livro.calculateDiscount(10)
console.log(livro.total)



// ESSE APARENTEMENTE FICOU CERTO TAMBÉM, SÓ CORRIGIR AGORA 
// PEGOU O DESCONTO, FALTA CONFERIR SE O DESCONTO TA SENDO APLICADO CORRETAMENTE
