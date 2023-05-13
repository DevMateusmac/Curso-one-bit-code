module.exports = class Deposit {
  constructor(depositValue){
    this.depositValue = depositValue
    this.depositCreationDate = new Date()
  }
}