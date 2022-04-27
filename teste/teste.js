// somente para fazer os exercícios das aulas conceituais dos tópicos de JS, os exercícios estarão em pastas separadas.

function reduceVelocity(){
    let velocity = 150
    console.log(`Estamos a ${velocity}km/s`)
    for(vel = velocity; vel >= 0; vel -=20){
        console.log(`Diminuido a velocidade em ${vel}km/s.`)
    }

}
reduceVelocity()
