class Wallet {
  #amount
  #username
  constructor(){
    this.#amount = 100.99 * 100 //10099
  }

  get amount(){
    return this.#amount / 100
  }

  // amount(){
  //   return this.#amount / 100  -> tem a mesma função do get acima
  // }



  set username(newUsername){
    if(typeof newUsername === 'string'){
      this.#username = newUsername
    }else{
      console.log("Username must be of type string")
    }
  }

  get username(){
    return this.#username
  }
}

let myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = "Isaac"
console.log(myWallet.username)

myWallet.username += " Pontes"
console.log(myWallet.username)

myWallet.username = 52002
console.log(myWallet.username)