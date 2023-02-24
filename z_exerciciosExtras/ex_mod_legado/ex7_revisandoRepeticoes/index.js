
function changingLetter(){
  let word = prompt("Qual palavra você deseja inverter?")
  
  let wordChanged = ""

  for(let i = word.length -1; i >= 0; i--){
    wordChanged += word[i]
    if(word[i] === "e"){
      break
    }
  }
  alert(`A palavra normal era: ${word}, agora é ${wordChanged}`)
}
changingLetter()

//A MANEIRA CERTA É A DE BAIXO

// segue a maneira semelhante a que o professor fez
/*

1- EU PRECISAVA COLOCAR wordChanged += word[i] DEPOIS DA CONDICIONAL, POIS SE A ÚLTIMA LETRA DA PALAVRA FOR 'E' ELA AINDA VAI SAIR NA TELA, E ISSO NAO PODERIA ACONTECER

function changingLetter(){
  let word = prompt("Qual palavra você deseja inverter?")
  
  let wordChanged = ""

  for(let i = word.length -1; i >= 0; i--){
    if(word[i] === "e"){
      break
    }
    wordChanged += word[i]
  }
  alert(`A palavra normal era: ${word}, agora é ${wordChanged}`)
}
changingLetter()
*/