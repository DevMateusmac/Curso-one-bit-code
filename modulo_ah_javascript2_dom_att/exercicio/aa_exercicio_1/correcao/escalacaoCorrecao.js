function addPlayer(){
  let position = document.getElementById('position').value
  let name = document.getElementById('name').value
  let number = document.getElementById('number').value
  //nesta parte eu coloquei o value na parte de exibição, usando somente a variavel -> name.value, na hora de exibir os dados na lista, mas a forma acima foi a que o professor fez, a minha é válida também, funciona, mas nessa de cima poupa mais espaço com código desnecessário. 

  // um ponto interessante, é que se colocar as variáveis acima dentro de chaves, e der um console.log, o js vai me devolver esses dados em forma de objeto.. desta forma console.log({position, name, number})
  let confirmation = confirm("Escalar " + name + " como " + position + "?")

  if(confirmation){
    let teamList = document.getElementById('teamList')
    let playerItem = document.createElement('li')
    playerItem.id = 'player-' + number
    playerItem.innerText = position + ": " + name + "(" + number + ")"
    teamList.appendChild(playerItem)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer(){
  let number = document.getElementById('numberToRemove').value
  let playerToRemove = document.getElementById('player-' + number) //

  // aqui embaixo é usado o innerText para ele mostrar o que está escrito na variável  como um todo, se eu tirar ele vai exibir o elemento em código do objeto, se eu colocar value ele vai retornar somente o número, com o inner ele retornar o que está escrito na variável

  let confirmation = confirm('Remover o jogador ' + playerToRemove.innerText + "?")
  if(confirmation){
    document.getElementById('teamList').removeChild(playerToRemove) // um elemento também pode ser removido se referenciarmos o próprio elemento, desta forma: playerToRemove.remove(), na forma acima, é colocado o elemento pai, e tirado no remove o elemento filho.
    document.getElementById('numberToRemove').value = ''
  }
}