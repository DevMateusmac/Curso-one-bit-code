let distanceInLY = prompt('Digite a distância em anos-luz')

let chosenOption = prompt('Para qual unidade deseja converter? \n1. Parsec(pc) \n2. Unidade Astronômica(AU) \n3.Quilômetros(km) \n\n(Digite o número da opção desejada)')

// aqui o professor cria variáveis (nesse caso 2) para podermos trabalhar no switch atribuindo os valores escolhidos pelo usuário nessas variáveis vazias.

let chosenUnity
let convertedDistance

switch(chosenOption){
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceInLY * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}
alert(`Distância em Anos-luz: ${distanceInLY} \n${chosenUnity}: ${convertedDistance}`)

// REVER ESSA AULA COM ANOTAÇÕES





/*
essa foi a forma que eu tentei fazer, está errado e incompleto, confundi alguns conceitos, acertei em alguns parâmetros apenas.

alert('Conversor de L.y.')

let distancyLY = prompt('Coloque a distância em anos-luz.')

let chosenOption = prompt('Selecione a unidade que quer converter. \n1-Parsec(pc). \n2-Unidade astronômica(AU). \n3-Quilômetros(km). ')

switch(chosenOption){
    case "1":
        let parsec = (distancyLY * 0,306601)
            alert(`${parsec} pc.`)
            break
    case "2":
        let astronomicalUnit = (distancyLY * 63241,0)
            alert(`${astronomicalUnit} AU.`)
            break
    case "3":
        let kilometers = (distancyLY * 9,5 * Math.pow(10,12))
        
}
*/