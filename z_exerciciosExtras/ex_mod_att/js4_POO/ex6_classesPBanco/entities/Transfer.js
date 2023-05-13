module.exports = class Transfer {
  constructor(userSender, recipientUser, transferValue){
    this.userSender = userSender
    this.recipientUser = recipientUser
    this.transferValue = transferValue
    this.transferCreationDate = new Date() 
  }
}