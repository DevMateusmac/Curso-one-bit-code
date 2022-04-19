// essa foi a forma que eu fiz, deu tudo certo e funcionou. agora vou ver a explicação do professor e ver se tem alguma coisa diferente do meu, vou colocar a forma que ele fez como comentário la embaixo.

let nameShip = prompt("Digite aqui o nome da sua nave!")

let whichLetter = prompt(`Qual caractere você deseja mudar do nome da sua nave? \nNave: ${nameShip}`)
let newLetter = prompt(`Por qual caracactere você deseja substituir?`)
let newNameShip = ""


for( let n = 0; n < nameShip.length; n++){
    if(nameShip[n] == whichLetter){
        newNameShip += newLetter
    } else{
       newNameShip += nameShip[n]
    }
}
alert(`O novo nome da sua nave é: ${newNameShip}`)

/*
forma que o professor fez (se for necessário anotar aqui)

Na anotação da aula 26 eu tinha anotado que não sabia o porque de parecer que precisava do else para o exercício funcionar por inteiro

no resultado final, ele vai colocar o if (para as letras que corresponderem à condição) e o else (ele vai colocar as letras padrão da string também) se não o resultado final seria apenas a letra escolhida para substituir. Sendo assim ele vai colocar a string do jeito que era + substituir as letras desejadas.


*/