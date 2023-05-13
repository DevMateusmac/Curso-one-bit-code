const Comment = require('./Comment')

module.exports = class Post {
  constructor(author, content){
    this.author = author
    this.content = content
    this.comments = []
  }

  addNewComment(authorComment, comment){
    let commentToadd = new Comment(authorComment, comment)
    this.comments.push(commentToadd)
  }
  
  showPost(){
    let commentsOnPost = ''

    this.comments.forEach((comment) => {
      commentsOnPost += `${comment.authorComment}: \n${comment.commentary} \n\n`
    })

    console.log(`${this.author}: \n${this.content}\n\nComentários \n\n${commentsOnPost}`)
  }
}