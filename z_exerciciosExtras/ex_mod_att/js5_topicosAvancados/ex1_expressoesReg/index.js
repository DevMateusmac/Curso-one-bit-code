document.getElementById('check-btn').addEventListener('click', ev => {
  ev.preventDefault()


  let inputItems = {
   name: document.getElementById('name-input'),
   email: document.getElementById('email-input'),
   password: document.getElementById('password-input')
  }
  
  inputItems.name.classList.remove('right', 'wrong')
  inputItems.email.classList.remove('right', 'wrong')
  inputItems.password.classList.remove('right', 'wrong')

 try{
  checkName(inputItems.name)
  inputItems.name.classList.add('right')
  checkEmail(inputItems.email)
  inputItems.email.classList.add('right')
  checkPassword(inputItems.password)
  inputItems.password.classList.add('right')
 } catch (error){
  inputItems[error.input].classList.add('wrong')
 }
})




function checkName(name){
  if(name.value === ''){
    let error = new Error('Nome de usuário inválido!')
    error.input = 'name'
    throw error
  }
}


function checkEmail(email){
  let emailPattern = /\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/
  if(!email.value.match(emailPattern)){
    let error = new Error('E-mail inválido!')
    error.input = "email"
    throw error
  }
}

function checkPassword(password){
  if(
    !password.value.match(/\d/)    ||
    !password.value.match(/[a-z]/) ||
    !password.value.match(/[A-Z]/) ||
    !password.value.match(/\W/)    ||
     password.value < 8
  ){
    let error = new Error('Senha inválida!')
    error.input = 'password'
    throw error
  }
}


//funcionou como deveria 