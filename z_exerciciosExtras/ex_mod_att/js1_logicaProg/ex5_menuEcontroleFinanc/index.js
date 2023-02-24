// menu interativo
function interactiveMenu(){
  let option
  do{
    option = prompt(`Selecione uma das opções abaixo:\n\n1 - Opção 1\n2 - Opção 2\n3 - Opção 3\n4 - Opção 4\n5 - Encerrar\n\nSelecione o número das opções!`)

    switch(option){
      case "1":
        alert(`Você selecionou a opção 1 :D`)
        break
      case "2":
        alert(`Você selecionou a opção 2 :D`)
        break
      case "3":
        alert(`Você selecionou a opção 3 :D`)
        break
      case "4":
        alert(`Você selecionou a opção 4 :D`)
        break
      case "5":
        alert(`Encerrando aplicativo...`)
        break
      default:
        alert(`Algo deu errado, tente novamente!`)
    }
  }while(option !== "5")
}
// interactiveMenu()
// funcionou corretamente




//app de controle financeiro

function spreadsheet(){
  let amount = Number(prompt(`Qual é o seu saldo inicial?`))
  let option
  do{
    option = prompt(`Controle financeiro\n\nSaldo atual: R$ ${amount} .\nO que deseja fazer agora?\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair`)

    switch(option){
      case "1":
        let amountToAdd = Number(prompt(`Qual o valor do depósito?`))
        amount += amountToAdd
        break
      case "2":
        let amountToRemove = Number(prompt(`Qual o valor do saque?`))
        amount -= amountToRemove
        break
      case "3":
        alert(`Encerrando...\nSaldo da conta: R$ ${amount} `)
        break
      default:
        alert(`Algo deu errado, tente novamente!`)  
    }

  }while(option !== "3")
}


// spreadsheet()
//funcionou corretamente
// a única coisa que que poderia ser alterado (por enquanto) seria a maneira de como é somado ou subtraido, desda forma:

// case "1":
//   amount += Number(prompt(`Qual o valor do depósito?`))
//   break

// aqui ele somaria direto sem precisar da variável que eu criei ali em cima
