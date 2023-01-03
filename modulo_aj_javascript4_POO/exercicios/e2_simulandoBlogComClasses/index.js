let Author = require('./Author')
let Post = require('./Post')
let Comment = require('./Comment')


//Authors
let mateus = new Author("Mateus Maciulevicius", "@polacao")
let junin = new Author("Junin Doe", "@juninD")
let isadora = new Author("Isadora Doe", "@dorinha")


//posts
// let exercice = new Post(junin.username) test
let newPostOfJunin = junin.createNewPost(junin.username, "Já fizeram o exercício?")


//comments
let mateusComment = new Comment(mateus.username, "Terminando este exercício!")
let isaComment = new Comment(isadora.username, "Ainda nem comecei!")
newPostOfJunin.addComment(mateusComment)
newPostOfJunin.addComment(isaComment)


//tests
// console.log(`\n\n${mateus.username}:\n  ${mateusComment.comment}\n\n\n`)
console.log(newPostOfJunin)
console.log(junin)

