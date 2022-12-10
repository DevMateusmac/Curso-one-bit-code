/* a seguir a resolução do ex no curso, com alguns pontos a serem considerados.

1- ele colocou a confirmação de idade dentro de uma variável também.
2- na hora de exibir os dados no final ele usa a contra barra + n para quebrar linha em js: \n

*/
window.alert('Bem-vindo! A seguir pediremos que informe alguns dados.');

let nome = window.prompt("Qual é o seu nome?");
let idade = window.prompt(`Quantos anos você tem, ${nome}?`)
let idadeConfirmada = window.confirm("você confirma que tem " + idade + " anos de idade?")
window.alert(`A seguir os dados que você nos passou:  Nome: ${nome} \nidade: ${idade} \nConfirmação de idade: ${idadeConfirmada}.`)



/*
Esse foi o jeito que eu fiz

window.alert('Bem-vindo! A seguir pediremos que informe alguns dados.');

let nome = window.prompt("Qual é o seu nome?");
let idade = window.prompt(`Quantos anos você tem, ${nome}?`)
window.confirm("você comfirma que tem " + idade + " anos de idade?")
window.alert(`A seguir os dados que você nos passou: seu nome é ${nome} e você tem ${idade} anos de idade.`)
*/