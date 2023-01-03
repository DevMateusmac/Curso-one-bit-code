let Post = require('./Post')

class Author{
  constructor(name, username){
    this.name = name
    this.username = username
    this.posts = []
  }
  createNewPost(postAuthor, content){
    let newPostFromCurrentAuthor = new Post(postAuthor, content)
    this.posts.push(newPostFromCurrentAuthor)
    return newPostFromCurrentAuthor
  }
}
module.exports = Author