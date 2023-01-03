
module.exports = class Transfer {
  constructor(transferValue, userSender, recipientUser, creationData = new Date()){
    this.transferValue = transferValue
    this.userSender = userSender
    this.recipientUser = recipientUser
    this.creationData = creationData
  }
}

