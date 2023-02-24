function greet(){
  alert("Bem-vindo! A seguir pediremos que informe alguns dados.")
  let username = prompt("Qual é o seu nome?") 
  let age = prompt("Qual é a sua idade?")
  let confirmAge = prompt("Confirme a sua idade")
 
  if(age !== confirmAge){

    do{
      alert("A idade não coincidem! Confirme novamente a sua idade")
      age = prompt("Qual é a sua idade?")
      confirmAge = prompt("Confirme a sua idade")
    }while(age !== confirmAge)
    alert(`Sucesso! \nO nome do usuário é: ${username} e tem ${age} anos.`)    
  }else{
    alert(`Sucesso! \nO nome do usuário é: ${username} e tem ${age} anos.`)
  }
}
greet()