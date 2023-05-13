
module.exports = class Account {
  #balance
  constructor(user){
    this.accountOwner = user
    this.#balance = 0
    this.allDeposits = []
    this.allLoans = []
    this.allTransfers = []
  }

  addingNewDeposit(deposit){
    this.#balance += deposit.depositValue
    this.allDeposits.push(deposit)
  }

  addingNewLoan(loan){
    this.#balance += loan.loanValue
    this.allLoans.push(loan)
  }

  addingNewTransfer(transfer){
    if(transfer.userSender.email === this.accountOwner.email){
      this.#balance -= transfer.transferValue
      this.allTransfers.push(transfer)
    }else if(transfer.recipientUser.email === this.accountOwner.email){
      this.#balance += transfer.transferValue
      this.allTransfers.push(transfer)
    }
  }

  showBalance(){
    return this.#balance
  }
}