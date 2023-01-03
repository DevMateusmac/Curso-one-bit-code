// let book = {
//   title: "Eragon",
//   pages: 468,
//   published: true,
//   inStok: 20,
//   tags: ["fantasy", "adventure", "medieval"],
//   author: {
//     name: "Christopher Paolini"
//   },
//   addOnStock(quantity){
//     this.inStok += quantity
//   },
//   save: function (){
//     // salva no banco de dados (simulação)
//   }
// }

// console.log(book)
// book.addOnStock(50)
// console.log(book.inStok)
// console.log(book)



function Book(title, pages, tags, author){
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity){
    this.inStock += quantity
  }
  this.save = function(){
    // salva no banco de dados (simulação)
  }
}

let author = {name:"Christopher Paolini"}
let tags = ["fantasy", "adventure"]

let eragon = new Book("Eragon", 468, tags, author)
console.log(eragon)

let eldest = new Book("Eldest", 644, tags, author)
console.log(eldest)
