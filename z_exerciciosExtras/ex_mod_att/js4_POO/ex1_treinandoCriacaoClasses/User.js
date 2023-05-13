 class User {
  constructor(fullname, email, password){
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(confirmEmail, confirmPassword){
    if(confirmEmail === this.email && confirmPassword === this.password){
      console.log(`Login realizado com sucesso!`)
    }else{
      console.log(`Usuário ou senha incorretos!`)
    }
  }
}

let mateus = new User("Mateus Maciulevicius", "dev.mateusmac@gmail.com", "123123")
console.log(mateus)
mateus.login('dev.mateusmac@gmail.com', '1231233')
