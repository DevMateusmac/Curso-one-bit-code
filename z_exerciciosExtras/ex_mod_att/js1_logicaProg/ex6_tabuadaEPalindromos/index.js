//tabuada

function tables(){
  let numberToTable = Number(prompt(`Qual número você deseja fazer a tabuada?`))
  let result = ""
  for(let i = 0; i <= 20; i++){
    result += `${numberToTable} x ${i} = ${numberToTable * i}\n`
  }
  alert(result)
}
// tables()

// aqui funcionou corretamente




// palindromos

function palindromeFinder(){
  let word = prompt(`Qual palavra você deseja verificar se é um palíndromo?`)
  let findPalindrome = "" 

  for(let i = word.length -1; i >= 0; i--){
    findPalindrome += word[i]
  }

  if(word === findPalindrome){
    alert(`A palavra ${word} é um palíndromo, resultado: ${findPalindrome}`)
  }else{
    alert(`A palavra ${word} não é um palíndromo, resultado: ${findPalindrome}`)
  }
}
// palindromeFinder()

// os dois exercícios funcionaram corretamente e da maneira que deveriam ser escritos