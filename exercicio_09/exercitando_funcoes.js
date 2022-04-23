// Aqui esta a correção:









//Essa foi a minha tentativa :

/*

let nameShip = prompt(`Insira aqui o nome da nave!`)
let velocity = 0
let newVelocity 

function menu() {
   chosenOption = prompt(`Menu de bordo: \n1- Acelerar a nave em 5km/s. \n2- Desacelerar a nave em 5km/s. \n3- Imprimir dados de bordo. \n4- Encerrar viagem e sair do programa.`)
   return chosenOption
}
menu()


function acelerar(){
    newVelocity = velocity + 5
    alert(`Velocidade aumentada para ${newVelocity}km/s.`)

}


function desacelerar(){
    newVelocity = velocity - 5
    if(velocity == 0){
        newVelocity = 0
        alert(`A nave ainda está parada!`)
    }else {
        alert(`Velocidade reduzida para ${newVelocity}`)
    }
}


function dados() {
        if(newVelocity == undefined){
        newVelocity = "A nave ainda está parada"
    } 
    alert(`Dados de bordo \n\nNome da Nave: ${nameShip}. \nVelocidade atual: ${newVelocity}km/s. \nBoa viagem!`)
    
}


while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3" && chosenOption != "4"){
    chosenOption = prompt(`Menu de bordo: \n1- Acelerar a nave em 5km/s. \n2- Desacelerar a nave em 5km/s. \n3- Imprimir dados de bordo. \n4- Encerrar viagem e sair do programa.`)
    
}

do{
    chosenOption = prompt(`Menu de bordo: \n1- Acelerar a nave em 5km/s. \n2- Desacelerar a nave em 5km/s. \n3- Imprimir dados de bordo. \n4- Encerrar viagem e sair do programa.`)
    
    switch(chosenOption){
    case "1":
        acelerar(newVelocity)
        break
    case "2":
        desacelerar()
        break
    case "3":
        dados()
        break
    case "4":
        alert(`Estabilizando a nave`)
        alert(`Encerrando viagem`)
        alert(`Saindo do programa de bordo!`)
        break
    default:
        alert(`Algo deu errado, tente novamente!`)
        

}


 } while(chosenOption == "1" || chosenOption == "2" || chosenOption == "3")
 */