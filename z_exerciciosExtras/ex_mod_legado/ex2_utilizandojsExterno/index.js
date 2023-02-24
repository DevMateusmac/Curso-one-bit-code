function compareAge(){
  alert("A seguir informe a idade de algumas pessoas.")
  let olderPersonName = prompt("Informe o nome da pessoa mais velha")
  let olderPersonAge = prompt("Informe a idade da pessoa mais velha")

  let youngerPersonName = prompt("Informe o nome da pessoa mais nova")
  let youngerPersonAge = prompt("Informe a idade da pessoa mais nova")

  let ageDiff = Number(olderPersonAge - youngerPersonAge)

  alert(`A pessoa mais velha tem ${olderPersonAge} anos e se chama ${olderPersonName}!`)
  alert(`A pessoa mais nova tem ${youngerPersonAge} anos e se chama ${youngerPersonName}!`)
  alert(`A diferença de idade entre as duas é de ${ageDiff} anos.`) 
}

compareAge()