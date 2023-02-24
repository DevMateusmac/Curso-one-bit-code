let spaceshipVelocity = 150


function slowdown(velocity, showvel){
  let newVelocity
  console.log(`Reduzindo velocidade..`)
  for(let i = 30; velocity >= i; velocity - i){
    velocity -= i
    showvel(velocity)
    // newVelocity = velocity
  } 
  return newVelocity
}

function showVelocity(velocity){
  console.log(`estamos a ${velocity}`)
  if(velocity === 0){
    console.log("A nave parou, abrindo as comportas já podem ser abertas!")
  }
}

/*

A maneira que fiz mas corrigida

function slowdown(velocity, showvel){
  let newVelocity
  console.log(`Reduzindo velocidade..`)
  for(let i = 30; velocity >= i; velocity - i){
    showvel(velocity)
    velocity -= i
    // newVelocity = velocity
  } 
  console.log("A nave parou, abrindo as comportas já podem ser abertas!")
  return newVelocity
}

function showVelocity(velocity){
  console.log(`estamos a ${velocity}`)
  //if(velocity === 0){
  //}
}
*/

slowdown(spaceshipVelocity, showVelocity)


// a maneira semelhante de como o professor fez e mais certa, a minha ficou comendo o primeiro console log que mostra a velocidade.
// let spaceshipVelocity = 150
// function slowdown(velocity, showvel){
//   for(let i = 20; velocity > i; velocity -i){
//     showvel(velocity)
//     velocity -= i
//   }
//   console.log("Nave parada, as comportas já podem ser abertas")
// }

// // function attVelocity(velocity){
// //   console.log("Estamos a " + velocity + "km/s")
// // }
// // slowdown(spaceshipVelocity, attVelocity)

// // ou da maneira exata que ele fez, com uma função anonima direto como parâmetro

// slowdown(spaceshipVelocity, function (velocity){
//   console.log("Estamos a " + velocity + "km/s")
// })
