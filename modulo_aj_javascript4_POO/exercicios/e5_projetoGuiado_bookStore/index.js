let App = require('./App')

let app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', '...' )
app.createAuthor('Rick Riordan', 'American', '...' )

let authors = app.getAuthors()

app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

let books = app.getBooks()

app.createUser('Isaac', 'isaac@gmail.com', '123456')

let users = app.getUsers()

let items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]
app.createOrder(items, users[0])

app.showDatabase()