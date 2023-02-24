function createSpaceship(shipName, tipo, maxVelocity){
 let spaceship = {
  shipName,
  tipo,
  maxVelocity,
  velocity: 0,

  accelerate(){
    let velToIncrease = Number(prompt("Em quantos km/s você deseja acelerar a nave?"))
    this.velocity += velToIncrease
    alert(`Velocidade aumentada para ${this.velocity} km/s`)

    if(this.velocity > this.maxVelocity){
      alert("A velocidade escolhida é maior do que a velocidade que nave é capaz de aguentar!")
      this.velocity = this.maxVelocity
      alert(`Velocidade alterada para ${this.velocity} km/s que é capacidade máxima em segurança da nave`)
    }
  },

  stopSpaceship(){
    this.velocity = 0
    alert(`Velocidade diminuindo para ${this.velocity} km/s`)
    alert(`Dados de bordo\nNome da nave: ${this.shipName}.\nTipo da nave: ${this.tipo}`)
  }
}
  return spaceship
}


function boardPanel(){
  let option
  let newSpacewship = createSpaceship(prompt("Qual é o nome da nave?"), prompt("Qual é o tipo da nave?\n- Batalha\n- Coleta\n-Transporte"), Number(prompt("Qual é a velocidade máxima que a nave aguenta?")))
  
  do{
    option = prompt("O que deseja fazer?\n1 - Acelerar a nave\n2 - Parar a nave")

    if(option === "1"){
      newSpacewship.accelerate()
    }else{
      newSpacewship.stopSpaceship()
    }

  }while(option !== "2")
}
boardPanel()


// ficou redondinho, funcionou certo
