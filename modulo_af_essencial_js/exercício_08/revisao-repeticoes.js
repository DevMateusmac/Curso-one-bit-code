// Aqui está o jeito que o professor fez:
// na verdade, a única coisa que faltou foi o -1, que eu não sabia que tinha que colocar quando precisa percorrer a string do final para o início, nas anotações da aula tem a explicação do porque, então eu peguei o meu exercício e só adicionei o -1 ali depois de .length 

let nameSpaceship = prompt(`Qual é o nome que deseja dar para a sua nave?`)

let newNameSpaceShip = ""

for(let i = nameSpaceship.length -1; i >= 0; i--){
    if(nameSpaceship[i] == "e"){
        break
    } else{
        newNameSpaceShip += nameSpaceship[i]
    }
}
alert(`Este é o novo nome da nave: ${newNameSpaceShip} \nEste é o nome original da nave: ${nameSpaceship}.`)

/*
Aqui foi o jeito que fiz, funcionou parcialmente.

let nameSpaceship = prompt(`Qual é o nome que deseja dar para a sua nave?`)

let newNameSpaceShip = ""

for(let i = nameSpaceship.length; i >= 0; i--){
    if(nameSpaceship[i] == "e"){
        break
    } else{
        newNameSpaceShip += nameSpaceship[i]
    }
}
alert(`Este é o novo nome da nave: ${newNameSpaceShip} \nEste é o nome original da nave: ${nameSpaceship}.`)

*/