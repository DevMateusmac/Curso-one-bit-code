// somente para fazer os exercícios das aulas conceituais dos tópicos de JS, os exercícios estarão em pastas separadas.

let diaDaSemana 
let chosenOption

function semana(){
    let permission = prompt("Deseja inserir um número para ver o dia da semana? \n1- Sim! \n2- Não!" )    

    if(permission == "não"){
        alert("Encerrando o aplicativo, atualize a página para reiniciá-lo")
    }
    return permission
}

function escolherDia(){
do{
    
    diaDaSemana = prompt("Digite um número")

    switch(diaDaSemana){
        case "1": alert("Domingo!")
            break
        case "2": alert("Segunfa-feira!")
            break
        case "3": alert("Terça-feira!")
            break
        case "4": alert("Quarta-feira!")
            break
        case "5": alert("Quinta-feira!")
            break
        case "6": alert("Sexta-feira!")
            break
        case "7": alert("Sábado!")
            break
        case "sair": alert("Encerrando Aplicativo!")
            break
        default: alert("Digite um número válido!")
            break
    }
    }while (diaDaSemana != "sair")
}

chosenOption = semana()
switch(chosenOption){
        case "sim": escolherDia()
        break
}

