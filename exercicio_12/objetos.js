let spaceship = {
    name: prompt(`Qual é o nome da nave?`),
    type: prompt(`Qual é o tipo da sua nave? \n1-Nave de infantaria. \n2-Nave de Reconhecimento. \n3-Nave de Intendência. \n4-Nave de Material bélico `),
    maxVelocity: prompt(`Qual é a velocidade máxima que deseja configurar para a nave em km/s?`)
}

switch(spaceship.type){
    case "1":
        spaceship.type = "Nave de Infantaria"
        break
    case "2":
        spaceship.type = "Nave de Reconhecimento"
        break
    case "3":
        spaceship.type = "Nave de Intendência"
        break
    case "4":
        spaceship.type = "Nave de Material bélico"
        break
    default:
        spaceship.type = "Nave comum"
}

