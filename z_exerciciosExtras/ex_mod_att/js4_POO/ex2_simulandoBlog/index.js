const Author = require('./Author')

let mateus = new Author('Mateus')

mateus.addNewPost("O que acham sobre o source 2 do csgo?")
mateus.addNewPost("Como iterar um array?")
mateus.posts[0].addNewComment('Gabriela', 'Gostei!')
mateus.posts[0].addNewComment('Vinicius', 'Valve trollando demais!')
mateus.posts[0].addNewComment('Carol', 'Só vai servir para dropar fps!')
mateus.posts[0].addNewComment('Bruno', 'Depois de anos prometendo...')


// console.log(mateus.posts[0])
// console.log(mateus.posts[0].comments)
// console.log(mateus)

mateus.posts[0].showPost()

// funcionou como deveria
// a funcionalidade que eu nao use foi o "return postToAdd, pois nao fiz nenhuma interação direta com o post, mas sim interagindo pelo array"