
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

function menu(){
    let option 
    while (option != "1" && option != "2" && option != "3"){
        option = prompt("O que deseja fazer? \n\n1-Cadastrar uma nave. \n2-Imprimir lista de naves cadastradas. \n3-Sair do programa.")
    }
    return option
}

let newSpaceship 
let confirmEngage
let spaceships = []

function cadastro(){ // opção 1


    newSpaceship = new SpacialStation(newName = prompt("Qual o nome da nave?"), crewQuantity = prompt("Quantos tripulantes tem na nave?"))

    confirmEngage = confirm("Você deseja engatar a nave?")
    if(confirmEngage == true){
        newSpaceship.toEngage()
    }
  
    return newSpaceship 
    // ver o metodo foreach, ele nao ta mostrando todo o objeto, mas ali de um em um mostrou, 
}


function dadosDeBordo(spaceships){ // opção 2
    let spaceshipList = ""
    spaceships.forEach(function(spaceship){
        spaceshipList += alert(`Nave: ${spaceship.name} \nTripulantes: ${spaceship.crewQuantity}`)
    }) // aqui do jeito que está, a callback me retorna um alert para cada nave, se eu colocar o alert para me mostrar o spaceshiplist ele vai mostrar todas as naves registradas
}


let chosenOption

do{
    chosenOption = menu()
    switch(chosenOption){
        case "1":
            let addSpaceship = cadastro()
            spaceships.push(addSpaceship)

            break
        case "2":
            dadosDeBordo(spaceships)
            break
        case "3":
            alert("Saindo do painel e encerrando aplicativo!")
            break
        default: alert("Algo deu errado, atualize a página ou tente novamente  mais tarde!")
    }
} while (chosenOption != "3")


// consegui finalizar o exercício, o final do exercício tive que rever a aula para terminar, vou rever a aula de interação em array, e a aula de resolução novamente. a passagem de parâmetro também precisa ser revisada.


