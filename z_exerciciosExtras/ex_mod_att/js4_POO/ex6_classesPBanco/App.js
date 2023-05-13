const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
  static #userList = [] 

  static findUser(emailToFind){
    let user = this.#userList.find(user => user.email === emailToFind)
    return user ?? null
  }

  static newUser(fullname, email){
    let userFound = App.findUser(email)
    if(!userFound){
      this.#userList.push(new User(fullname, email))
    }else{
      console.log(`User already registered!`)
    }
  }

  static newDeposit(email, value){
    let user = App.findUser(email)
    if(user){
      let depositToAdd = new Deposit(value)
      user.account.addingNewDeposit(depositToAdd)
    }else{
      console.log('error')
    }
  }

  static newTransfer(userSenderEmail, recipientUserEmail, valueToTransfer){
    let userSenderToFind =  App.findUser(userSenderEmail)
    let recipientUserToFind = App.findUser(recipientUserEmail)

    if(userSenderToFind && recipientUserToFind){
      let transferToAdd = new Transfer(userSenderToFind, recipientUserToFind, valueToTransfer)
      userSenderToFind.account.addingNewTransfer(transferToAdd)
      recipientUserToFind.account.addingNewTransfer(transferToAdd)
    }else{ 
      console.log('error')
    }

  }

  static newLoan(email, loanValueAdd, installmentNumber){
    let user = App.findUser(email)
    if(user){
      let loanToAdd = new Loan(loanValueAdd, installmentNumber)
      user.account.addingNewLoan(loanToAdd)
    }
  }

  static changeBaseFee(newPercentage){
    Loan.baseFee = newPercentage
  }

  static showList(){
    this.#userList.forEach(user => console.log(user))
    // console.log('oi')
  }
}