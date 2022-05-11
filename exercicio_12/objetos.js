let spaceship = {
    name: prompt(`Qual é o nome da nave?`),
    type: prompt(`Qual é o tipo da sua nave? \n1-Nave de infantaria. \n2-Nave de Reconhecimento. \n3-Nave de Intendência. \n4-Nave de Material bélico `),
    velocity: 0,
    maxVelocity: prompt(`Qual é a velocidade máxima que deseja configurar para a nave em km/s?`),
    menu: function(){
        let option 
       option = prompt(`O que deseja fazer agora? \n1 - Acelerar a nave. \n2 - Parar a nave.` )
                   
        return option
    }
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


spaceship.speedUp = function (velocity, maxVelocity){
    spaceship.otherVelocity = prompt(`Quanto você quer acelerar a nave?`)
    
    if(otherVelocity > spaceship.maxVelocity){
        otherVelocity = maxVelocity
       
        alert(`Velocidade escolhida ultrapassa o valor máximo escolhido para a nave!`) 
        velocity += spaceship.otherVelocity
        alert(`A velocidade atual da nave é ${spaceship.velocity}`)
    }else {
        velocity += spaceship.otherVelocity
        alert(`Velocidade aumentada para ${spaceship.velocity}.`)
    }
}

do{
    chosenOption = spaceship.menu()
    switch(chosenOption){
        case "1":
            spaceship.speedUp()
            break
        case "2":
            alert(`Parando a nave! \nNome da nave: ${spaceship.name}. \nTipo da nave: ${spaceship.type} \nVelocidade alcançada: ${spaceship.velocity}.`)
    }
} while(chosenOption != "2")

