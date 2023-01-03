let User = require('./entities/User')
let Account = require('./entities/Account')
let Installment = require('./entities/Installment')
let Loan = require('./entities/Loan')
let Transfer = require('./entities/Transfer')
let Deposit = require('./entities/Deposit')

module.exports = class App{
  static #usersList = []

   createNewUser(fullName, email){ 
    let account = new Account()
    let newUser = new User(fullName, email, account)
    let emailToVerify = newUser.email
    let emailExists
    App.#usersList.forEach(users => {
      if(users.email === emailToVerify){
        return emailExists = users.email
      }else{
        return emailExists
      }
    })

    if(emailExists === emailToVerify){
      console.log("Este email já está cadastrado em um usuário!")
    }else{
      return App.#usersList.push(newUser)
    }
  }

  static findUserByEmail(email){

  }

  static deposit(user, depositValue){
    user.account.newDeposit(depositValue)
  }

  static transfer(){

  }

  static loan(){

  }

  changeInterestRate(){

  }

  showUsers(){
    return App.#usersList
  }
}

