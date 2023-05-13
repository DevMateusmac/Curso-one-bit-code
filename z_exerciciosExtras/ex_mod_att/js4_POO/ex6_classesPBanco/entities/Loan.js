const Installment = require("./Installment");

module.exports = class Loan {
  static #baseFee = 1.05

  constructor(loanValue, installments){
    this.loanValue = loanValue
    this.loanInstallments = [] 
    for(let i = 1; i <= installments; i++){
      this.loanInstallments.push(new Installment((loanValue * Loan.#baseFee) / installments, i))
    }
    this.loanCreationData = new Date()
  }

  static get baseFee(){
    return Loan.#baseFee
  }

  static set baseFee(newBaseFee){
    Loan.#baseFee = 1 + (newBaseFee / 100)
  }
}