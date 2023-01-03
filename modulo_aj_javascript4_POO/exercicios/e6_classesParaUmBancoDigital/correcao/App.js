const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App{
  static #users = []

  static findUser(email){
    let user = this.#users.find(user => user.email === email)
    return user ?? null
  }

  static createUser(email, fullname){
    let userExists = App.findUser(email)
    if(!userExists){
      this.#users.push(new User(email, fullname))
    }
  }

  static deposit(email, value){
    let user = App.findUser(email)
    if(user){
      let newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(fromUserEmail, toUserEmail, value){
    let fromUser = App.findUser(fromUserEmail)
    let toUser = App.findUser(toUserEmail)

    if(fromUser && toUser){
      let newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer)
      toUser.account.addTransfer(newTransfer)
    }
  }

  static takeLoan(email, value, numberOfInstallments){
    let user = App.findUser(email)
    if(user){
      let newLoan = new Loan(value, numberOfInstallments)
      user.account.addLoan(newLoan)
    }
  }

  static changeLoanFee(newFeePercentage){
    Loan.fee = newFeePercentage
  }
}