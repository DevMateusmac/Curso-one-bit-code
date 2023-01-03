
module.exports = class Installment{
  constructor(installmentValue, numberOfInstallments, installmentSituation, creationData = new Date()){
    this.installmentValue = installmentValue
    this.numberOfInstallments = numberOfInstallments
    this.installmentSituation = installmentSituation
    this.creationData = creationData
  }

  installmentsCalculator(numberOfInstallments){
    return this.installmentValue / numberOfInstallments
  }
}

