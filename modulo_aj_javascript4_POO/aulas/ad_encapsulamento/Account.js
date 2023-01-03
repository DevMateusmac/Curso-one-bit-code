//Aqui os atributos estão públicos

// class Account {
//   constructor(user){
//     this.email = user.email
//     this.password = user.password
//     this.balance = 0
//   } 
// }

// let user = {
//   email: "mateus@email.com",
//   password: "12345"
// }

// let myAccount = new Account(user)
// console.log(myAccount)

// myAccount.password = "888888"
// myAccount.balance = 9999999

// console.log(myAccount)



//aqui estarão privados

class Account{
  #password
  #balance

  constructor(user){
    this.email = user.email
    this.#password = user.password
    this.#balance = 0
  }

  getBalance(email, password){
    if(this.#authenticate(email, password)){
      return this.#balance
    }else{
      return null
    }
  }

  #authenticate(email, password){
    return this.email === email && this.#password === password
  }
}

let user = {
  email: "user@email.com",
  password: "123456"
}

let userAccount = new Account(user)

console.log(userAccount)
//console.log(userAccount.#password) => vai gerar erro
//console.log(userAccount.#balance)  => vai gerar erro
//console.log(userAccount.#authenticate()) => vai gerar erro
console.log(userAccount.getBalance("user@email.com", "123456"))
console.log(userAccount.getBalance("user@email.com", "00000"))
