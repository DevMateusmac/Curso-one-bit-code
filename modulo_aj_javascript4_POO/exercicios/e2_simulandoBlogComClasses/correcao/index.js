let Author = require('./Author')

let john = new Author("John Doe")

let post = john.writePost("Título di Post", "Loren ipsum dolor sic met")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante")

console.log(john)
console.log(post)