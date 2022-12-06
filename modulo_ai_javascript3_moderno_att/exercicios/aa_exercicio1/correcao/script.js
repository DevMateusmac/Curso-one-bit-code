// média simples 
let average = (...numbers) => {
  let sum = numbers.reduce((accum, num) => accum + num, 0)
  return sum / numbers.length
}
//console.log(average(5, 7))

// media ponderada 
let weightedAverage = (...entries) => {
  let sum = entries.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)), 0)
  let weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
  return sum / weightSum
}
// console.log(weightedAverage(
//   {number: 9, weight: 3},
//   {number: 7},
//   {number: 10, weight: 1}
// ))

//mediana 
let median = (...numbers) => {
  let orderedNumbers = [...numbers].sort((a, b) => a - b)
  let middle = Math.floor(orderedNumbers.length / 2)
  if(orderedNumbers.length % 2 !== 0){
    return orderedNumbers[middle]
  }
  let firstMedian = orderedNumbers[middle - 1]
  let secondMedian = orderedNumbers[middle]
  return average(firstMedian, secondMedian) 
}
//console.log(median(2, 5, 99, 4, 42, 7))
//console.log(median(15, 14, 8, 7, 3))

// moda 
let mode = (...numbers) => {
  let quantities = numbers.map(num => [
    num,
    numbers.filter(n => num === n).length
  ])
  quantities.sort((a, b) => b[1] - a[1])
  return quantities[0][0]
}
console.log(mode(1, 2, 4, 2, 2, 6, 2, 7, 2))