let transactions = []


function createTransactionContainer(id){
  let container = document.createElement('div')
  container.classList.add('transaction')
  container.id = `transaction-${id}`
  return container
}

function createTransactionTitle(name){
  let title = document.createElement('span')
  title.classList.add('transaction-title')
  title.textContent = name
  return title
}

function createTransactionAmount(amount){
  let span = document.createElement('span')

  let formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  let formatedAmount = formater.format(amount)

  if(amount > 0){
    span.textContent = `${formatedAmount} C`
    span.classList.add('transaction-amount', 'credit')
  }else{
    span.textContent = `${formatedAmount} D`
    span.classList.add('transaction-amount', 'debit')
  }
  return span
}


function createEditTransactionBtn(transaction){
  let editBtn = document.createElement('button')
  editBtn.classList.add('edit-btn')
  editBtn.textContent = 'Editar'
  editBtn.addEventListener('click', () => {
    document.querySelector('#id').value = transaction.id
    document.querySelector('#name').value = transaction.name
    document.querySelector('#amount').value = transaction.amount
  })
  return editBtn
}

function createDeleteTransictionBtn(id){
  let deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'Excluir'
  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {method: 'DELETE'})   
    deleteBtn.parentElement.remove()
    let indexToRemove = transactions.findIndex((t) => t.id ===id)
    transactions.splice(indexToRemove, 1)
    updateBalance()
  })
  return deleteBtn
}


function renderTransaction(transaction){
  let container = createTransactionContainer(transaction.id)
  let title = createTransactionTitle(transaction.name)
  let amount = createTransactionAmount(transaction.amount)
  let editBtn = createEditTransactionBtn(transaction)
  let deleteBtn = createDeleteTransictionBtn(transaction.id)

  container.append(title, amount, editBtn, deleteBtn)
  document.querySelector('#transactions').append(container)
}


async function saveTransaction(ev){
  ev.preventDefault()


  let id = document.querySelector('#id').value
  let name = document.querySelector('#name').value
  let amount = parseFloat(document.querySelector('#amount').value)

  if(id){
    let response = await fetch(`http://localhost:3000/transactions/${id}`,{
      method: 'PUT',
      body: JSON.stringify({name, amount}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    let transaction = await response.json()
    let indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1, transaction)
    document.querySelector(`#transaction-${id}`).remove()
    renderTransaction(transaction)

  }else{
    let response = await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    body: JSON.stringify({name, amount}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  let transaction = await response.json()
  transactions.push(transaction)
  renderTransaction(transaction)
  }

  

  ev.target.reset()
  updateBalance()
}


async function fetchTransactions(){
  return await fetch('http://localhost:3000/transactions').then(res => res.json())
}


function updateBalance(){
  let balanceSpan = document.querySelector('#balance')
  let balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  let formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  balanceSpan.textContent = formater.format(balance)
}


async function setup(){
  let results = await fetchTransactions()
  transactions.push(...results)
  transactions.forEach(renderTransaction)
  updateBalance()
}

document.addEventListener('DOMContentLoaded', setup)
document.querySelector('form').addEventListener('submit', saveTransaction)


/*
minha tentativa:
function renderData(data){
  let transfers = document.getElementById('transfers')
  
  let br = document.createElement('br')
  let br2 = document.createElement('br')
  let br3 = document.createElement('br')
  let br4 = document.createElement('br')
  
  let labelId = document.createElement('label')
  labelId.id = `label-${data.id}`
  labelId.innerText = `Id:${data.id}`
  
  let name = document.createElement('label')
  name.innerText = `Nome: ${data.user}`
  
  let transferValue = document.createElement('label')
  if(data.transactionValue.length == 1 || data.transactionValue.length == 2 || data.transactionValue.length == 3){
    transferValue.innerHTML = `Valor da transferência: R$ ${data.transactionValue},00`
  }else if (data.transactionValue.length == 4){
    transferValue.innerHTML = `Valor da transferência: R$ ${data.transactionValue[0]}.${data.transactionValue[1]}${data.transactionValue[2]}${data.transactionValue[3]},00`
  }
  
  transfers.append(labelId, br, name, br2,  transferValue, br3, br4)
}

async function fetchData(){
  let data = await fetch("http://localhost:3000/transactions").then(res => res.json())
  data.forEach(renderData)
  
  let asideContent = document.getElementById('asideContent')

  //fazer aparecer o saldo aqui
  // let saldo = 0
  // for(let i = 0; i < data.length; i++){
  //   saldo += Number(data[i].transactionValue)
  // }

  // let saldo = data.reduce((acum, element) => 
  //   acum += Number(element.transactionValue), 0
  // )

  // let saldoString = saldo.toString()
  // let labelSaldo = document.createElement('label')
  // if(saldoString.length == 1 || saldoString.toString.length == 2 ||saldoString.toString.length == 3){
  //   labelSaldo.innerText = `Saldo: R$ ${saldoString},00`
  // }else if(saldoString.length == 4){
  //   labelSaldo.innerText = `Saldo: R$ ${saldoString[0]}.${saldoString[1]}${saldoString[2]}${saldoString[3]},00`
  // }


  // let br = document.createElement('br')
  // let br2 = document.createElement('br')

  let delet = document.createElement('input')
  delet.type = 'button'
  delet.value = 'Deletar' 

  delet.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    let response = await fetch('http://localhost:3000/transactions', {
      method: 'Delete'
    })
  })

 
  let change = document.createElement('input')
  change.type = 'button'
  change.value = 'alterar'

  asideContent.append(delet, change)
}

document.addEventListener('DOMContentLoaded', () =>{
  fetchData()
})


let form = document.querySelector('form')

form.addEventListener('submit', async (ev) =>{
  ev.preventDefault()

  let transferData = {
    user: document.getElementById('user').value,
    transactionValue: document.getElementById('transferValue').value
  }
  
  if(transferData.user && transferData.transactionValue){
  let response = await fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(transferData)
  })

  let savedTrasferData = await response.json()
  form.reset()
  renderData(savedTrasferData)
  console.log(savedTrasferData) 
}
})
*/
