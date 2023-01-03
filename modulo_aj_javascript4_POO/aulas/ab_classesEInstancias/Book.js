class Book {
  constructor(title){
    this.title = title
    this.published = false
  }
  publish(){
    this.published = true
  }
}

let eragon = new Book("Eragon")
let eldest = new Book("Eldest")
eldest.publish()
console.log(eragon)
console.log(eldest)

console.log(eragon instanceof Book)