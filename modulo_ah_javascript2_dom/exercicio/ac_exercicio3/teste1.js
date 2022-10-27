
// esse aqui n esta dando certo, caso o outro de errado eu volto nesse



let shift = 0
let buttons = document.querySelectorAll('.tttBtn')
let confirmPlayer = document.getElementById('confirmPlayer')
let showPlayer = document.getElementById('showPlayer')
confirmPlayer.addEventListener('click', confirmPlayerToscreen)


function confirmPlayerToscreen(){
  let firstPlayer = document.getElementById('firstPlayer')
  let secondPlayer = document.getElementById('secondPlayer')
  return firstPlayer, secondPlayer
}

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
let combinations = [] 

// manipular este array adicionando os valores dos clicks dos botoes, e tentar mesclar eles para ver se as combinações são válidas, esse array esta sendo manipulado noevento abaixo

// fazer o teste pelo indice dos botoes com ifs  


buttons.forEach(shiftCount)
function shiftCount(btn){
    if(firstPlayer == "" && secondPlayer == ""){
      alert("Coloque o nome dos jogadores!")
    }else{
    btn.addEventListener('click', function(){    
    
    if(btn.value !== "X" && btn.value !== "O"){
      shift++      
      if(shift % 2 == 0){
        btn.innerText = "O"
        btn.value = "O"
        showPlayer.innerText = "Jogador da vez: " + secondPlayer.value
        console.log(secondPlayer.value)
        console.log(btn.value)
        combinations.push(btn.value)
        console.log(combinations)
      }else{
        btn.innerText = "X"
        btn.value = "X"
        showPlayer.innerText = "Jogador da vez: " + firstPlayer.value
        console.log(firstPlayer.value)
        console.log(btn.value)
        combinations.push(btn.value)
        console.log(combinations)
      }    
    }
  })
  }
}











