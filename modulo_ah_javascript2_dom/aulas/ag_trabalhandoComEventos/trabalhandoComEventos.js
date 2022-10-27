function register(ev){
  console.log(ev)
  let sectionElement = ev.currentTarget.parentNode
  let username = sectionElement.children.username.value
  let password = sectionElement.children.password.value
  let passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if(password === passwordConfirmation){
    alert('Usuário ' + username + ' registrado!')
  }else{
    alert('As senhas não conferem!')
  }
}

let button = document.getElementById('register-button')

button.addEventListener('click', register)

function removerListener(){
  button.removeEventListener('click', register)
  alert('Event removed')
}

button.addEventListener('mouseover', function(ev){
  console.log(ev.currentTarget)
})



