function renderArticle(articleData){
  let article = document.createElement('article')
  article.classList.add('article')
  article.id = `article-${articleData.id}`

  let title = document.createElement('h3')
  title.classList.add('article-title')
  title.textContent = articleData.title

  let content = document.createElement('div')
  content.classList.add('article-content')
  content.innerHTML = articleData.content

  let author = document.createElement('div')
  author.classList.add('article-author')
  author.textContent = articleData.author

  article.append(title, author, content)
  document.querySelector('#articles').appendChild(article)
}


async function  fetchArticles(){
  let articles = await fetch('http://localhost:3000/articles').then(res => res.json())
  articles.forEach(renderArticle)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchArticles()
})


let form = document.querySelector('form')

form.addEventListener('submit', async (ev) =>{
  ev.preventDefault()

  let articleData = {
    title: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
    content: document.querySelector('#content').value
  }

  let response = await fetch('http://localhost:3000/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(articleData),
  })

  let savedArticle = await response.json()
  form.reset()
  renderArticle(savedArticle)
  console.log(savedArticle)
})
