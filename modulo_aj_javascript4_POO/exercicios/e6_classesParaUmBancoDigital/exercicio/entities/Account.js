let Deposit = require('./Deposit')
let Loan = require('./Loan')
let Transfer = require('./Transfer')
let User = require('./User')
module.exports = class Account{
  #balance = 0
  constructor(){
    this.allDeposits = [] 
    this.allLoans = []
    this.allTransfers = []
  }

  newDeposit(valueToDeposit){
    let deposit = new Deposit(valueToDeposit)
    this.allDeposits.push(deposit)
    this.#balance += deposit.depositValue
  }

  newLoan(loanValue, numberOfInstallments){
    let loan = new Loan(loanValue, numberOfInstallments)
    this.allLoans.push(loan)
    this.#balance += loan.loanValue
  }
 
  newTransfer(valueToTransfer, userSender, recipientUser){
    let transfer = new Transfer(valueToTransfer, userSender, recipientUser)
    if(userSender == this.fullName){
      userSender.#balance -= transfer.transferValue
      recipientUser.allTransfers.push(transfer)
      recipientUser.#balance += transfer.transferValue
    }else{
      this.allTransfers.push(transfer)
      this.#balance += transfer.transferValue
    }
  }


  showBalance(){
    let balance = this.#balance.toString()    
    if(balance === '0'){
      return `${balance}`
    }else if(balance.length === 3){
      return `R$: ${balance},00`
    }else if(balance.length === 4){
      return `R$: ${balance[0]}.${balance[1]}${balance[2]}${balance[3]},00`
    }else{
      return `R$: ${balance[0]}${balance[1]}.${balance[2]}${balance[3]}${balance[4]},00`
    }
  }
}

