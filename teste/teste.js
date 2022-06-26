// somente para fazer os exercícios das aulas conceituais dos tópicos de JS, os exercícios estarão em pastas separadas.

class SpacialStation {
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.engage = false
        this.doors = false
    }
    toEngage() {
        this.engage = true
        this.doors = true
    }
}

let ships = []
let newSpaceship = new SpacialStation("Schatten", 15)
console.log(newSpaceship) // sem engatar
console.log(newSpaceship.toEngage()) // chamei a função
console.log(newSpaceship) // aqui fiz um teste chamando a função e funcionou, ela alterou as portas  com o engate



ships.push(newSpaceship)// aqui joguei o objeto para dentro do array e funcionou também
console.log(ships[0])
//teste do exercício, amanha revisar os conceitos e tentar terminar.
