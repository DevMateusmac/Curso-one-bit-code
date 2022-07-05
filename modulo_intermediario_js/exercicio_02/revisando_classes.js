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


function menu1(){
    let option 
    while(option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("O que deseja fazer? \n1- cadastrar nave. \n2- Acelerar a nave. \n3- Trocar a nave. \n4- Imprimir e sair.")
    }
    return option
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

function changeShip(){
    alert("Trocando espaçonave!")
    let changeSpaceship = cadastroNovaNave()
    return changeSpaceship
}

let spaceshipsAdded = []

do{
    let chosenOption = menu1()
    switch(chosenOption){
        case "1":
            let spaceshipToAdd = cadastroNovaNave()
                spaceshipsAdded.push(spaceshipToAdd)
                break
        case "2":
            //acelerar nave
                break
        case "3":
            //trocar nave
                break
        case "4":
            //mostrar nave e sair
                break
        default: alert("Algo de errado interrompeu o funcionamento do sistema, tente novamente mais tarde!")
                break
    }
}while(chosenOption != "4")
