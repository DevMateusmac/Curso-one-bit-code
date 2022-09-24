function addInput(){
  let ul = document.getElementById('inputs')
  let newLi = document.createElement('li')
  newLi.className = 'list-item'
  newLi.innerText = 'Novo input:'

  let newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'input'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)
}