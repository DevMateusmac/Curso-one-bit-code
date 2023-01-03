module.exports = class Deposit{
  constructor(depositValue, creationData = new Date()){
    this.depositValue = depositValue
    this.creationData = creationData
  }
}

