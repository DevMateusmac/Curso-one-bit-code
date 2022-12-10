function playerToPick(){
  let sect = document.getElementById('section')
  let playerPosi = document.getElementById('playerPosition')
  let playerName = document.getElementById('playerName')
  let shirtNumb = document.getElementById('shirtNumber')
  
   
  let confirmOption = confirm("Deseja salvar informações e escalar este jogador?")

  if(confirmOption){
    
  let title = document.createElement('h3')
  title.innerText = 'Jogador ' 
  
  let ul = document.createElement('ul')

  let posiLi = document.createElement('li')
  posiLi.innerText = 'Posição: ' + playerPosi.value
  ul.appendChild(posiLi)
  

  let nameLi = document.createElement('li')
  nameLi.innerText = 'Nome: ' + playerName.value
  ul.appendChild(nameLi)
  
  let numberLi = document.createElement('li')
  numberLi.innerHTML = "Número da camisa: " + shirtNumb.value
  ul.appendChild(numberLi) 
  

  sect.append(title, ul)

  playerPosi.value = ''
  playerName.value = ''
  shirtNumb.value = ''
}else{
  return alert("Voltando para a criação de perfil do jogador")
}

}

function removePlayer(){
  let confirmat = confirm("Deseja remover o último jogador escalado?")
  
  if(confirmat){
  let sect = document.getElementById('section')

  let title = document.getElementsByTagName('h3')
  let player = document.getElementsByTagName('ul')

  sect.removeChild(title[title.length -1])
  sect.removeChild(player[player.length -1])
}else{
  return alert("Remoção cancelada, voltando para a escalação de jogador")
}

}
// ANOTAR SOBRE A REMOÇÃO DOS VALORES DEPOIS DE ADICIONADOS,  QUE ESTÁ ALI COM A STRNG VAZIA