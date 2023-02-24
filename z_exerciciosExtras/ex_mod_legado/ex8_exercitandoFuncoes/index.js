function spaceship(){
  let spaceshipName = prompt("Qual é o nome da nave?")
  let spaceshipVelocity = 0

  let chosenOption

  do{
    chosenOption = showMenu()
    switch(chosenOption){
      case "1":
        spaceshipVelocity = accelerateSpaceship(spaceshipVelocity)
        break
      case "2":
        spaceshipVelocity = disaccelerateSpaceship(spaceshipVelocity)
        break
      case "3":
        showBoard(spaceshipName, spaceshipVelocity)
        break
      case "4":
        alert("Encerrando painel de bordo")
        break
      default: alert("Algo deu errado, tente novamente mais tarde!")
    }
  }while(chosenOption != "4")
}

function showMenu(){
  let option
  do{
    option = prompt("O que deseja fazer?\n1 - Acelerar a nave em 5 km/s\n2 - Desacelerar em 5 km/s\n3 - Imprimir os dados de bordo\n4 - Sair do programa\n\nEscolha o número das opções!")
  }while(option !== "1" && option !== "2" && option !== "3" && option !== "4")
  return option
}

function accelerateSpaceship(velocity){
  // acelerar a nave em 5km/s
  let newVelocity = velocity + 5 
  alert("Velocidade da nave aumentada em 5km/s")
  return newVelocity
}

function disaccelerateSpaceship(velocity){
  //desacelerar a nave em 5km/s, se a velocidade for 0 deve ser exibida uma mensagem para acelerar
  let newVelocity
  if(velocity === 0 ){
    alert("A nave está parada, considere acelerar a nave!")
  }else{
    alert("Velocidade da nave diminuida em 5km/s")
    newVelocity = velocity - 5
    return newVelocity
  }
}

function showBoard(name, velocity){
  //mostrar os dados da nave
  alert(`Dados da nave\nNome da nave: ${name}\nVelocidade atual da nave: ${velocity} km/s`)
}

spaceship()


// errei na parte de aumentar e diminuir a velocidade, estava passando parâmetro errado, estava passando a própria velocidade como parâmetro e retornando ela mesma, sendo que não era do escopo de nenhuma das funções. A maneira certa é a que está ali em cima, usar ela como parâmetro, depois atribuir na variável velocidade da nave a nova velocidade gerada na função 