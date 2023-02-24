// aqui fiz das duas formas, com a função e sem

function changingLetter(word, letterToChange, letterToApply){

  let wordChanged = ""

  for(let i = 0; i < word.length; i++){
    if(word[i] === letterToChange){
      wordChanged += letterToApply
    }else{
      wordChanged +=word[i]
    }
  }
  console.log(`A palavra normal era: ${word}, agora é ${wordChanged}`)
}
changingLetter("Suzana", "a", "i")

/*
 let word = "Suzana"
  let letterToApply = "o"
  let letterToChange = "a"
  let wordChanged = ""

  for(let i = 0; i < word.length; i++){
    if(word[i] === letterToChange){
      wordChanged += letterToApply
    }else{
      wordChanged +=word[i]
    }
  }
  console.log(`A palavra normal era: ${word}, agora é ${wordChanged}`)

*/