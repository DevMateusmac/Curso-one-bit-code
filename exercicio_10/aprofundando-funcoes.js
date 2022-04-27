// correção da aula:

function slowDown(velocity, printer){
    let deceleration = 20

    while(velocity > 0){
        printer(velocity)
        velocity -= deceleration
    }
    alert(`Nave parada. As comportas podem ser abertas.`)
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity) {
    alert(`Velocidade atual: ${velocity}`)
})







/*
Essa foi a forma que eu fiz, funcionou porém acho que deixei algo passar batido.

alert(`Exercício de função`)


function reduceVelocity(boardPrint, velocity = 150){
    alert(`Estamos a ${velocity}km/s`)
    alert(`Diminuindo a velocidade!`)
    for(vel = velocity; vel > 0; vel -=20){
      //  alert(`Estamos a ${vel}km/s.`)
        if(vel == 10){
            vel -= 10
        }
        alert(`Estamos a ${vel}km/s.`)
    }
    //boardPrint(vel) esse aqui tava dando erro, de 0 ia para -20 
    return vel
}

let attVelocity = velocity => {
    alert(`Estamos a ${vel}km/s.`)
}

let activeFunction = reduceVelocity(attVelocity)
alert(`A nave esta parada! \nAs comportas já podem ser abertas!`)


*/





/*
Para não me perder caso de erro

function reduceVelocity(velocity = 150, boardPrint){
    alert(`Estamos a ${velocity}km/s`)
    alert(`Diminuindo a velocidade!`)
    for(vel = velocity; vel > 0; vel -=20){
        alert(`Estamos a ${vel}km/s.`)
        if(vel == 10){
            vel -= 10
        }
        alert(`Estamos a ${vel}km/s.`)
    }
    alert(`A nave esta parada! \nAs comportas já podem ser abertas!`)
    return velocity
}




*/

