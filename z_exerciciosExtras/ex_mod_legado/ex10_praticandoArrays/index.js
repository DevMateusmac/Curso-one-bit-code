const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let moreThanNine = hitchedSpaceships.filter( crew => {
  return crew[1] > 9
}).map(crewName => {
  return crewName[0]
})

// console.log(`${moreThanNine}`)

let indexOfPendingHitch = hitchedSpaceships.findIndex(pendingHitch => {
  let index = pendingHitch[2] == false 
  return index 
})
// console.log({indexOfPendingHitch + 1})


let upCasedNames = hitchedSpaceships.map( spaceshipName => {
  return spaceshipName[0]
}).join(", ").toUpperCase()

// console.log(upCasedNames)


console.log(`Nome das naves com mais de 9 tripulantes: ${moreThanNine}.\nA nave que está com engate pendente é: ${indexOfPendingHitch + 1}.\nO nome das naves em caixa alta fica: ${upCasedNames}`)


// ficou redondo, funcionou certinho e semelhante ao que o professor fez