async function asyncSum(a, b){
  return a + b
}

asyncSum(1, 1).then(result => {
  console.log(`O resultado é igual a ${result}`)
})

async function asyncSubtract(a, b){
  return a - b
}

let sumResult = asyncSum(50, 33)
let subtractResult = asyncSubtract(50, 33) 

Promise.all([sumResult, subtractResult]).then(results => {
  console.log(results)
})




let numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x){
  return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log(squares)
})