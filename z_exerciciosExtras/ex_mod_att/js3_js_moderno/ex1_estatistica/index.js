// média aritmética simples
let simpleArithmeticAverage = (...numbers) => {
  let average = numbers.reduce((accum, number) => accum + number, 0)
  return console.log(average / numbers.length)
}
// simpleArithmeticAverage(1, 3, 5, 6, 7, 8, 9)
//funcionou 

//media aritmetica ponderada
let weightedArithmeticAverage = (...numbers) => {
  // aqui eu poderia ter usado a desestruturação e feito assim: let sum = numbers.reduce((accum, {n, p}) => accum + (n * p), 0) que ficaria certo também
  let sumOfMultiplication = 0
  let plummet = 0
  numbers.forEach(number => {
    sumOfMultiplication += number.n * number.p  
    plummet += number.p
  })
  console.log(plummet)
  console.log(sumOfMultiplication)
  console.log((sumOfMultiplication / plummet).toFixed(2))
}
// weightedArithmeticAverage({n: 3, p: 2}, {n: 5, p: 3}, {n: 6, p: 4}, {n: 10, p: 5})
//funcionou 


//mediana
let medianAverage = (...numbers) => {
  let numbersOrdered = [...numbers].sort((a, b) => a - b)  
  if(numbersOrdered.length % 2 === 0){
    let average = 0
    let firstNumberAtCenter = numbersOrdered[Math.round(numbersOrdered.length / 2) - 1]
    let secondNumberAtCenter = numbersOrdered[Math.round(numbersOrdered.length / 2)]
    average = (firstNumberAtCenter + secondNumberAtCenter) / 2
    console.log(`A mediana é ${average}`)
  }else{
    let median = numbersOrdered[Math.round(numbersOrdered.length / 2) - 1]
    console.log(`A mediana é ${median}`)
  }
}
// medianAverage(5, 6, 7, 3, 4, 2)
// medianAverage(5, 6, 7, 9, 4, 2, 8)
//funcionou


//moda
let modeAverage = (...numbers) => {
  let appearances = []
  let numberOfAppearances = 0
  
  for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length; j++){
      if(numbers[i] === numbers[j]){
        numberOfAppearances++
      }
    }
    if(appearances.length === 0){
      appearances.push({number: numbers[i], numberOfAppearances})
    }else if(appearances[0].numberOfAppearances < numberOfAppearances){
      appearances.shift()
      appearances.push({number: numbers[i], numberOfAppearances})
    }
    numberOfAppearances = 0
  }
  console.log(`A moda é o número ${appearances[0].number} pois aparece ${appearances[0].numberOfAppearances} vezes.`)
  
  {
    // de uma forma mais simples:
    let quantities = numbers.map(num => [
      num,
      numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return console.log(`${quantities[0][0]}`)
  }
}
// modeAverage(1, 2, 3, 4, 4, 5, 4, 6, 7, 8, 6, 6, 7, 8, 6)
// funcionou!
// aqui se eu usar só o appearances.push({number: numbers[i], numberOfAppearances}) e verificar se ele já existe no array, consigo fazer para cada número 





                           
