const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const User = require("./entities/User")
const Poster = require('./entities/Poster')
const Order = require("./entities/Order")

module.exports = class App{
  static #database = new Database()

  createUser(name, email, password){
    let user = new User(name, email, password)
    App.#database.saveUser(user)
  }

  getUsers(){
    return App.#database.find('users')
  }

  createAuthor(name, nationality, bio){
    let author = new Author(name, nationality, bio)
    App.#database.saveAuthor(author)
  }

  getAuthors(){
    return App.#database.find('authors')
  }


  createBook(title, synopsis, genre, pages, author, description, price, inStock){
    let book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
    App.#database.saveBook(book)
  }

  addBook(bookName, quantity){
    App.#database.addBooksToStock(bookName, quantity)
  }

  getBooks(){
    return App.#database.find('books')
  }

  createPoster(name, description, height, width, price, inStock){
    let poster = new Poster(name, description, height, width, price, inStock)
    App.#database.savePoster(poster)
  }

  addPoster(posterName, quantity){
    App.#database.addPosterToStock(posterName, quantity)
  }

  getPoster(){
    return App.#database.find('posters')
  }

  createOrder(items, user){
    let order = new Order(items, user)
    App.#database.saveOrder(order)
    order.data.items.forEach(({product, quantity}) => {
      if(product instanceof Book){
        App.#database.removeBooksFromStock(product.name, quantity)
      }else if (product instanceof Poster){
        App.#database.removePostersFromStock(product.name, quantity)
      }
    })
  }

  getOrders(){
    return App.#database.find('orders')
  }

  showDatabase(){
    App.#database.showStorage()
  }
}