const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
  ]

  let test = hitchedSpaceships.filter(spaceship => { return spaceship[1] > 9 }) .map(spaceship =>{ return spaceship[0]})

  let pendingpark = hitchedSpaceships.findIndex(spaceship => {return spaceship[2] == false}) 

  let upcasedname = hitchedSpaceships.map(spaceship => {return spaceship[0].toUpperCase()})


  console.log(test)

  console.log(pendingpark)

  console.log(upcasedname)

  alert(`Naves com mais de 9 tripulantes: ${test.join(", ")}. \n Número da plataforma que está a nave com engate pendente: ${pendingpark + 1}. \nNome das naves em caixa alta: ${upcasedname.join(", ")}.`)

  