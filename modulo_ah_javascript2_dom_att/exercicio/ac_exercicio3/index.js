
let confirmPlayerName = document.getElementById('confirmPlayer')
let firstPlayer = document.getElementById('firstPlayer')
let secondPlayer = document.getElementById('secondPlayer')
let showPlayer = document.getElementById('showPlayer')
let restartSection = document.getElementById('restart')
let tttButtons = document.querySelectorAll('.tttBtn')

let firstPlayerMove = "X"
let secondPlayerMove = "O"
let playerShiftMove = 0

let restartButton = document.createElement('button')
restartButton.id = "restartBtn"
restartButton.innerText = "Jogar novamente"

restartButton.addEventListener('click', function(){
  tttButtons.forEach(function(eacBtn){
    eacBtn.innerText = ""
    eacBtn.value = ""
  })
  //tttButtons.forEach(addindEvents) // anotação la embaixo no documento

  firstPlayer.value = ""
  secondPlayer.value = ""
  showPlayer.innerText = ""
  playerShiftMove = 0 // testar o contador de turnos, ele ta bugando minha aplicação
  restartSection.removeChild(restartButton)
  console.log(playerShiftMove)
})

// confirmPlayerName.addEventListener('click', gettingPlayersName)

// function gettingPlayersName(){
//   if(firstPlayer.value == '' || secondPlayer.value == ''){
//     alert("Insira o nome dos jogadores!")
//   }else{
//     // console.log(firstPlayer.value)
//     // console.log(secondPlayer.value)
//     showPlayer.innerText = "O jogador " + firstPlayer.value + " começa!" + " (" + firstPlayerMove + ")"
//     return firstPlayer, secondPlayer
//   }
// }


tttButtons.forEach(addindEvents)
function addindEvents(eacBtn){
  eacBtn.addEventListener('click', function eachPlayerMove(){
    // if(firstPlayer.value == '' || secondPlayer.value == ''){
    //   return alert("Insira o nome dos jogadores!")
    // }

    // firstPlayer.value = ''
    // secondPlayer.value = ''
    if(eacBtn.value !== "X" && eacBtn.value !== "O"){
    playerShiftMove++
    if(playerShiftMove % 2 == 0){
      eacBtn.innerText = secondPlayerMove
      eacBtn.value = secondPlayerMove
      showPlayer.innerText = "Vez do jogador: " + firstPlayer.value  + " (" + firstPlayerMove + ")"
      console.log(playerShiftMove)
    }else{
      eacBtn.innerText = firstPlayerMove 
      eacBtn.value = firstPlayerMove
      showPlayer.innerText = "Vez do jogador: " + secondPlayer.value + " (" + secondPlayerMove + ")"
      console.log(playerShiftMove)
    }
  }
   // eacBtn.removeEventListener('click', eachPlayerMove)

    if( tttButtons[0].value == "X" && tttButtons[1].value == "X" && tttButtons[2].value == "X" ||
        tttButtons[3].value == "X" && tttButtons[4].value == "X" && tttButtons[5].value == "X" ||
        tttButtons[6].value == "X" && tttButtons[7].value == "X" && tttButtons[8].value == "X" ||
        tttButtons[0].value == "X" && tttButtons[3].value == "X" && tttButtons[6].value == "X" ||
        tttButtons[1].value == "X" && tttButtons[4].value == "X" && tttButtons[7].value == "X" ||
        tttButtons[2].value == "X" && tttButtons[5].value == "X" && tttButtons[8].value == "X" ||
        tttButtons[0].value == "X" && tttButtons[4].value == "X" && tttButtons[8].value == "X" ||
        tttButtons[2].value == "X" && tttButtons[4].value == "X" && tttButtons[6].value == "X" 
    ){
      showPlayer.innerText = "Jogador vencedor: " + firstPlayer.value + " (" + firstPlayerMove + ")"
      restartSection.appendChild(restartButton)
    } else if(
        tttButtons[0].value == "O" && tttButtons[1].value == "O" && tttButtons[2].value == "O" ||
        tttButtons[3].value == "O" && tttButtons[4].value == "O" && tttButtons[5].value == "O" ||
        tttButtons[6].value == "O" && tttButtons[7].value == "O" && tttButtons[8].value == "O" ||
        tttButtons[0].value == "O" && tttButtons[3].value == "O" && tttButtons[6].value == "O" ||
        tttButtons[1].value == "O" && tttButtons[4].value == "O" && tttButtons[7].value == "O" ||
        tttButtons[2].value == "O" && tttButtons[5].value == "O" && tttButtons[8].value == "O" ||
        tttButtons[0].value == "O" && tttButtons[4].value == "O" && tttButtons[8].value == "O" ||
        tttButtons[2].value == "O" && tttButtons[4].value == "O" && tttButtons[6].value == "O" 
    ){
      showPlayer.innerText = "Jogador vencedor: " + secondPlayer.value + " (" + secondPlayerMove + ")"
      restartSection.appendChild(restartButton)
    }else if(playerShiftMove == 9){
      showPlayer.innerText = "Deu velha!"
      restartSection.appendChild(restartButton)
    }
  })
}


// ele ta bugando sempre que o bolinha ganha o jogo na hora que reinicia o game pela forma do evento, com a forma sem tirar o evento dos botoes ele nao esta bugando (forma que está rodando agora)



//falta tirar o evento dos clicks apos o vencedor ()
//falta limpar o input depois de armazenar os nomes
//falta fazer o botao de reiniciar (feito) porem tive que usar o if da outra forma que fiz para conferir se o valor do botao é igual a undefined, assim quando é reiniciado só é limpado o campo, na forma de retirar o evento ele nao estava adicionando depois... o código que usei no outro documento é o da linha 52

// dos dois jeitos funcionou, desse que está agora, com a função principal criada separada deu certo, consigo chamar ela la em cima novamente, da maneira que criei antes, com a função direta no foreach n conseguia chamar, só deu certo com o if do outro document, da linha 52
