
// média aritmética simples
let simpleArithmeticAverage = (...numbersToAverage) => {
  let average = numbersToAverage.reduce((accum, num) => accum + num, 0)
  //console.log(...numbersToAverage)
  //console.log(numbersToAverage.length)
  return console.log(average / numbersToAverage.length) 
}
//simpleArithmeticAverage(1, 2, 3, 4, 5, 5, 5, 5)


// média aritmética ponderada
let ponderArithmeticAverage = (...numberAndCogency) => {
  let numbersToCalculate = []
  let cogency = []
  let currentNumber 
  let currentCogency 
  for(i = 0; i < numberAndCogency.length; i++){
    // console.log(numberAndCogency[i].n * numberAndCogency[i].p)
    currentNumber = numberAndCogency[i].n * numberAndCogency[i].p
    currentCogency = numberAndCogency[i].p
    cogency.push(currentCogency)
    numbersToCalculate.push(currentNumber)
  }
  let calculationResult = numbersToCalculate.reduce((accum, num) => accum + num, 0)
  let cogencyResult = cogency.reduce((accum, num) => accum + num, 0)
  let average = calculationResult / cogencyResult
  console.log(average)
  // console.log(calculationResult)
  // console.log(cogencyResult)
  // console.log(numbersToCalculate)
  // console.log(cogency)
}
//ponderArithmeticAverage({n: 2, p: 4}, {n:3, p:5}, {n:4, p:7})

// mediana 
let medianAverage = (...medianNumbers) => {
   if(medianNumbers.length % 2 == 0){
    let indexOfNumberOne = (medianNumbers.length / 2) -1
    let indexOfNumberTwo = indexOfNumberOne + 1
    // console.log(indexOfNumberOne)
    // console.log(indexOfNumberTwo)
    // console.log(medianNumbers[indexOfNumberOne])
    // console.log(medianNumbers[indexOfNumberTwo])
    let numberToFindMedianOne = medianNumbers[indexOfNumberOne]
    let numberToFindMedianTwo = medianNumbers[indexOfNumberTwo]
    let medianAverageEvenNumber = (numberToFindMedianOne + numberToFindMedianTwo) / 2
    console.log(medianAverageEvenNumber)
  }else{
    let indexTofind = Math.floor(medianNumbers.length / 2) 
    let indexToSum = medianNumbers.length % 2
    let foundIndex = indexToSum + indexTofind
    let medianAverageOddNumber = medianNumbers[foundIndex - 1] 
     console.log(medianAverageOddNumber)
  //   console.log(indexTofind)
  //   console.log(indexToSum)
  //   console.log(foundIndex)
  }
}
// fazer o teste com o indice, dividir por 2, armazenar o resto, e usar a sobra da divisão para somar com o índice para chegar na medade do array (número que está na metade do array) 
//ATUALIZAÇÃO, a primeira parte deu certo, com o total de numeros impares estou conceguindo achar a mediana, agora falta com o total quando dá numero par, é a mesma pegada dos indices como está abaixo, só que dois números a menos 
// anotação do exercício: Math.floor() arredonda para baixo, Math.ceil() arredonda para cima
medianAverage(2, 3, 4)

//mode average
let modeAverage = (...modeNumbers) => {
 
}
modeAverage(2, 4, 2, 6, 2, 9, 2)


{
  /*

  Um dos testes que fiz

  let modeAverage = (...modeNumbers) => {
  // testar pelo indice, armazenar por "turno" o indice e ir aumentando pela estrutura de repetição, para ele varrer o array e testar um por um 
  let numberToFindInIndex = -1
  for(i = 0; i < modeNumbers.length; i++){
    numberToFindInIndex++
    console.log(numberToFindInIndex)
    for(j = 0; j < 1; j++){
      console.log(`teste ${numberToFindInIndex}`)
    }
  } 
}
modeAverage(2, 4, 5, 6, 2, 9, 2, 7, 2, 10)
  */
}
