function usingWhile(){
  let warpCount = 0
  let spaceshipName = prompt("Qual o nome da nave?")
  
  let askForWarp = prompt("Deseja entrar em dobra espacial?\n1 - sim\n2 - não\n\nSelecione pelo número da opção")  

  if(askForWarp === "Sim" || askForWarp === "sim" || askForWarp === "s" ){
    warpCount++

    let askForAnotherWarp = prompt("Deseja realizar a próxima dobra espacial?\n1 - sim\n2 - não\n\nSelecione pelo número da opção")
     warpCount++

    while(askForAnotherWarp !== "não" || askForAnotherWarp === "Não" || askForAnotherWarp === "n"){
      askForAnotherWarp = prompt("Deseja realizar a próxima dobra espacial?\n1 - sim\n2 - não\n\nSelecione pelo número da opção")
      warpCount++
    }
    alert(`Encerrando...\nNome da nave: ${spaceshipName} \nNúmero de dobras espaciais realizadas: ${warpCount}`)
  }else{
    alert(`Encerrando...\nNome da nave: ${spaceshipName} \nNúmero de dobras espaciais realizadas: ${warpCount}`)
  }


}
// usingWhile()

// como boa pratica o professor sobrescreve a mesma variável de pergunta sobre dobra espacial, no caso eu fiz a primeira, a  segunda e um if para confirmar, segue o cógigo baseado no do professor com o mesmo resultado

// let warpCount = 0
// let spaceshipName = prompt("Qual o nome da nave?")

// let askForWarp = prompt("Deseja entrar em dobra espacial?\n1 - sim\n2 - não\n\nSelecione pelo número da opção")  

//   while(askForWarp === "sim" || askForWarp === "Sim" || askForWarp === "s"){
//     warpCount++
//     askForWarp = prompt("Deseja realizar a próxima dobra espacial?\n1 - sim\n2 - não\n\nSelecione pelo número da opção")
//   }
//   alert(`Encerrando...\nNome da nave: ${spaceshipName} \nNúmero de dobras espaciais realizadas: ${warpCount}`)


//o mesmo resultado só que em menos linha de código
