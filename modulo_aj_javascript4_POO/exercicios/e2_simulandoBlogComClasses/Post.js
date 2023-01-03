class Post{
  constructor(postAuthor, content){
    this.postAuthor = postAuthor
    this.content = content
    this.comments = []
  }
  addComment(comment){
    this.comments.push(comment)
  }
}
module.exports = Post
