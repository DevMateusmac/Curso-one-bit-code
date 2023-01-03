let Installment = require("./Installment");

module.exports = class Loan extends Installment {  
  static #interestRate 
  constructor(loanValue, numberOfInstallments, creationData) {
    super(creationData, numberOfInstallments)
    this.loanValue = loanValue 
  }
  
  
  static get readRate() {
    return this.#interestRate
  }

  static set setRate(newRate) {
    return this.#interestRate = newRate
  }
}

