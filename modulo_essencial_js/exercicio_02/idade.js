let nomePessoaMaisVelha = window.prompt('Qual é o nome da pessoa mais nova?')

let idadePessoaMaisVelha = window.prompt('Qual é a idade da pessoa mais velha?')

let nomePessoaMaisNova = window.prompt('Qual é o nome da pessoa mais nova?')

let idadePessoaMaisNova = window.prompt('Qual é a idade da pessoa mais nova?')

let diferencaIdade = idadePessoaMaisVelha - idadePessoaMaisNova

window.alert(`Dados da pessoa mais velha: \nNome: ${nomePessoaMaisVelha}. \nIdade: ${idadePessoaMaisVelha}.`)

window.alert(`Dados da pessoa mais nova: \nNome: ${nomePessoaMaisNova}. \nIdade: ${idadePessoaMaisNova} `)

window.alert(`A diferença de idade entre a pessoa mais velha e a pessoa mais nova é de ${diferencaIdade} anos.`)