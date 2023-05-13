const Post = require('./Post')

module.exports = class Author {
  constructor(name){
    this.name = name
    this.posts = []
  }

  addNewPost(subject){
    let postToAdd = new Post(this.name, subject)
    this.posts.push(postToAdd)
    return postToAdd
  }
}