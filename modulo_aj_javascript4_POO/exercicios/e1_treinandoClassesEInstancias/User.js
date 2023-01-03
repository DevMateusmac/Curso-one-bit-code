class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }
  login(email, password){
    this.confirmEmail = email
    this.ConfirmPassword = password
    if(this.email != this.confirmEmail || this.password != this.ConfirmPassword){
      console.log("Email ou senha não coincidem!")
    }else{
      console.log("Tudo certo!")
    }
  }
}

let tata = new User("Mateus Maciulevicius Oliveira", "Mateus.macius@outlook.com", "emigrate272705")
tata.login("mateus27tata@gmail.com", "tataco")
tata.login("Mateus.macius@outlook.com", "emigrate272705")
console.log(tata.confirmEmail)
console.log(tata.ConfirmPassword)
console.log(tata.email)



// ESSE AQUI FICO BAO HEM
