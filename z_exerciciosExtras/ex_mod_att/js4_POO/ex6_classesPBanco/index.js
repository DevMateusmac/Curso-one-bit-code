const App = require("./App")

App.newUser("Isaac Pontes", "isaac@email.com")
// App.newUser("Lucas Queiroga", "lucas@email.com")
App.newUser("Juliana Conde", "juliana@email.com")

// App.newDeposit("isaac@email.com", 100)

// App.newTransfer("isaac@email.com", "lucas@email.com", 20)

// App.changeBaseFee(10)
App.newLoan("juliana@email.com", 2000, 24)
App.newLoan("juliana@email.com", 1000, 15)

// console.log(App.findUser("isaac@email.com"))
// console.log(App.findUser("isaac@email.com").account)
// console.log(App.findUser("lucas@email.com"))
// console.log(App.findUser("lucas@email.com").account)
// console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.allLoans[0])
console.log(App.findUser("juliana@email.com").account.allLoans[1])
console.log(App.findUser("juliana@email.com").account.showBalance())



// App.newUser('Mateus Maciulevicius', 'mateus@email.com')
// App.newUser('Vagner Maciulevicius', 'vagner@email.com')
// // App.showList()
// App.newTransfer('mateus@email.com', 'vagner@email.com')
// console.log(App.findUser('mateus@email.com').account.allTransfers)