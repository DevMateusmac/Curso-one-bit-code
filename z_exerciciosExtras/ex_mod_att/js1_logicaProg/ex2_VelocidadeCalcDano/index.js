function calcVelocity(){
  let carName1 = prompt('Qual é o modelo do primeiro veículo?')
  let carVelocity1 = Number(prompt('Qual é a velocidade do primeiro veículo?'))

  let carName2 = prompt('Qual é o modelo do segundo veículo?')
  let carVelocity2 = Number(prompt('Qual é a velocidade do segundo veículo?'))


  if(carVelocity1 > carVelocity2){
    alert(`O ${carName1} está mais rápido que o ${carName2}\nVelocidade do ${carName1}: ${carVelocity1}\nVelocidade do ${carName2}: ${carVelocity2} km/h`)
  }else if(carVelocity1 < carVelocity2){
    alert(`O ${carName2} está mais rápido que o ${carName1}\nVelocidade do ${carName1}: ${carVelocity1}\nVelocidade do ${carName2}: ${carVelocity2} km/h`)
  }else{
    alert(`Os dois vículos estão na mesma velocidade\nVelocidade do ${carName1}: ${carVelocity1}\nVelocidade do ${carName2}: ${carVelocity2} km/h`)
  }
}


// calcVelocity()



function calcDamage(){
  let attackPlayerName = prompt("Qual é o nome do jogador que está atacando?")
  let attackPlayerPower = Number(prompt(`Qual é o poder de ataque do jogador ${attackPlayerName}?`))

  let defendPlayerName = prompt("Qual é o nome do jogador que está defendendo?")
  let defendPlayerLife = Number(prompt(`Quantos pontos de vida tem o jogador ${defendPlayerName}?`))
  let defendDefencePoints = Number(prompt(`Quantos pontos de defesa tem o jogador ${defendPlayerName}?`))
  let defendPlayerShield = prompt(`O jogador ${defendPlayerName} possui escudo?\nSim/Não`)
  let damageTook

  if(defendPlayerShield == "não" && attackPlayerPower > defendDefencePoints){
    damageTook = attackPlayerPower - defendDefencePoints
    defendPlayerLife -= damageTook
  }else if(defendPlayerShield == "sim" && attackPlayerPower > defendDefencePoints){
    damageTook = (attackPlayerPower - defendDefencePoints) / 2
    defendPlayerLife -= damageTook
  }else{
    alert(`Dano causado igual a 0`)
  }

  alert(`O jogador ${defendPlayerName} sofreu ${damageTook} de dano e ficou com ${defendPlayerLife} pontos de vida.`)  
  alert(`Dados da partida\n\nJogador atacante:\nNome: ${attackPlayerName}.\nPoder de ataque${attackPlayerPower}.\n\nJogador defendendo:\nNome: ${defendPlayerName}\nPontos de vida: ${defendPlayerLife}\nPontos de defesa: ${defendDefencePoints}\nPossui escudo: ${defendPlayerShield}`)
}

// calcDamage()