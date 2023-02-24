function accelerate(){
  let pilotName = prompt("Informe o seu nome, piloto!")

  let spaceshipVelocity = 0

  let desireVelocity = prompt("A nave está parada, a quantos km/s gostaria de viajar?")
  let confirmVelocity = prompt(`Deseja realmente viajar a ${desireVelocity} km/s?`)
  
  if (confirmVelocity === "sim"){
    spaceshipVelocity += Number(desireVelocity)
  }else{
    do{
      desireVelocity = prompt("Informe a velocidade desejada:")
      confirmVelocity = prompt(`Deseja realmente viajar a ${desireVelocity} km/h km/s?`)
    }while(confirmVelocity !== "sim")
    spaceshipVelocity += Number(desireVelocity)
  }

  if(spaceshipVelocity <= 0){
    alert("A nave está parada. Considere partir e aumentar a velocidade!")
  }else if(spaceshipVelocity <= 40){
    alert("Você está devagar, podemos aumentar a velocidade!")
  }else if(spaceshipVelocity > 40 && spaceshipVelocity < 80){
    alert("Parece uma boa velocidade para mater!")
  }else if(spaceshipVelocity >= 80 && spaceshipVelocity <= 100){
    alert("Velocidade alta! Considere diminuir!")
  }else{
    alert("Velocidade perigosa! Controle automático forçado.")
  }

  alert(`Parando a nave! \nDados finais\nNome do piloto: ${pilotName}.\nVelocidade: ${spaceshipVelocity} km/s.`)
}
accelerate()