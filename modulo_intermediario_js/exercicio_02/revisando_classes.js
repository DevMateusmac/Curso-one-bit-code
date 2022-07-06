                                            /*
                                            ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⢿⣿⡛⡛⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                                            ⣿⣿⣿⣿⣿⠋⠉⠉⠄⠄⠄⠄⠄⠄⠄⠈⠄⠌⢙⣻⣿⣿⣿⣿⣿⣿ 
                                            ⣿⣿⣿⣿⠟⠄⠄⣀⣀⣀⣠⣀⣾⣾⣶⣦⡀⠄⠄⠄⠄⠈⢿⣿⣿⣿ 
                                            ⣿⣿⣿⠟⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠄⠄⠄⠄⠄⠸⣿⣿⣿ 
                                            ⣿⣿⡏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⠄⠄⠄⠄⠄⢾⣿⣿
                                            ⣿⣿⡇⢫⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡄⠄⠄⠄⠈⢻⣿⣿ 
                                            ⣿⠿⠃⠘⠉⠁⠈⠉⠁⠄⠄⠁⠄⠄⠈⠙⠛⠛⠃⠄⠄⠄⣠⡼⣿⣿ 
                                            ⣿⡀⠄⠄⠄⠄⢀⣶⡄⠄⠄⠄⠄⠄⠄⠄⣻⣶⣿⣷⠄⣾⣿⣷⢩⣿ 
                                            ⣿⣿⡄⠄⠄⢀⣼⣿⣿⣤⠄⣠⣤⣤⣿⣿⣿⣿⣿⣿⢰⣿⡤⡹⣼⣿ 
                                            ⣿⣿⡏⠄⠄⠸⢿⡿⠿⠻⠂⠈⠛⠻⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿
                                            ⣿⣿⡇⠄⠄⠄⠄⠈⠁⠠⠴⠄⠄⠄⣽⣿⣿⣿⡿⡿⢱⣾⣿⣿⣿⣿ 
                                            ⣿⣿⣇⠄⠄⠄⣀⣀⣠⣤⣤⣴⡆⠄⠃⠌⢸⡫⠇⢀⣾⣿⣿⣿⣿⣿
                                            ⣿⣿⣿⡄⠐⡇⢀⣀⣈⣿⣿⡿⠇⡀⠄⠄⠄⠄⢁⣼⣿⣿⣿⣿⣿⣿
                                            ⣿⣿⣿⣿⡀⠈⠁⠉⠉⠉⠋⠃⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿ 
                                            ⣿⣿⣿⣿⣷⣄⢀⠄⠄⠄⠄⠄⠄⠄⣀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿ 
                                            */

class Spaceship{
    static get decelerationRate(){
        return 0.17
    }
    constructor(name, crew){
        this.name = name
        this.crew = crew
        this.currentVelocity = 0
    }
    speedUp(acceleration){
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}


class BattleSpaceship extends Spaceship{
    constructor(name, crew, numberOfGuns){
        super(name, crew)
        this.numberOfGuns = numberOfGuns
    }
}

class TransportSpaceship extends Spaceship{
  constructor(name, crew, numberOfSits){
    super(name, crew)
    this.numberOfSits = numberOfSits
    }
}


function menu1(){
    let option 
    while(option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer? \n1- cadastrar nave. \n2- Acelerar a nave. \n3- Trocar a nave. \n4- Imprimir e sair.")
    }
    return option
}

function cadastroNaveDeBatalha(){
    let spaceshipName = prompt("Qual é o nome da sua nave de batalha?")
    let crewQuantity = prompt("Quantos tripulantes tem na sua nave?")
    let numberOfGuns = prompt("Quantas armas acopladas tem disponível na sua nave?")

    let otherBattleSpaceship = new BattleSpaceship(spaceshipName, crewQuantity, numberOfGuns)
        return otherBattleSpaceship
}

function cadastroNaveDeTransporte(){
    let spaceshipName = prompt("Qual é o nome da sua nave de transporte?")
    let crewQuantity = prompt("Quantos tripulantes tem na sua nave?")
    let numberOfSits = prompt("Quantos acentos tem em sua nave para transporte da tripulação?")

    let otherTransportSpaceship = new TransportSpaceship(spaceshipName, crewQuantity, numberOfSits)
        return otherTransportSpaceship
}


function cadastroNovaNave(){
    let novaNave 
    let newShip
        while(novaNave != "1" && novaNave != "2"){
            novaNave = prompt("Qual o tipo de nave você deseja para cadastrar \n1- Nave de batalha. \n2- Nave e transporte.")
            if(novaNave == "1"){
                newShip = cadastroNaveDeBatalha()
            }else{
                newShip = cadastroNaveDeTransporte()
            }
        }
    return newShip
}

function boardPanelAndExit(spaceshipsAdded){
    spaceshipsAdded.forEach(function(currentspaceship){
        alert(`Nome da nave: ${currentspaceship.name} \nTripulantes: ${currentspaceship.crew} \nVelocidade atual: ${currentspaceship.currentVelocity}`)
    })
    alert("Encerrando painel de bordo, até a próxima!")
}

let spaceshipsAdded = []


function changeShip(){
    alert("Trocando espaçonave!")
    let changeSpaceship = cadastroNovaNave()
    return changeSpaceship
}

let chosenOption
do{
    chosenOption = menu1()
    switch(chosenOption){
        case "1":
            if(spaceshipsAdded[0] != undefined){
                alert("Você já cadastrou uma nave! considere mudar a nave para refazer o processo")
                break
            }                
            let spaceshipToAdd = cadastroNovaNave()
                spaceshipsAdded.push(spaceshipToAdd)
                break
        case "2":
                let acceleration = prompt("Quantos km/s você quer acelerar a nave?")
                spaceshipsAdded[0].speedUp(acceleration)
                alert(`Velocidade atualizada para ${spaceshipsAdded[0].currentVelocity} com a redução de segurança!`)

                break
        case "3":
            spaceshipsAdded = []
                let changingShip = changeShip()
                spaceshipsAdded.push(changingShip)
                break
        case "4":
            boardPanelAndExit(spaceshipsAdded)
                break
        default: alert("Algo de errado interrompeu o funcionamento do sistema, tente novamente mais tarde!")
                break
    }
}while(chosenOption != "4")
