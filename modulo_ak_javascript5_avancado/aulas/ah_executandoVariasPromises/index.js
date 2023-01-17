// function asyncSum(a, b){
//   return new Promise((resolve, reject) => {
//     if(typeof a !=='number' || typeof b !== 'number'){
//       reject('arguments must be of type "Number"')
//     }else{
//       resolve(a + b)
//     }
//   })
// }

// function asyncSubtract(a, b){
//   return new Promise((resolve, reject)=>{
//     if(typeof a !=='number' || typeof b !== 'number'){
//       reject('arguments must be of type "Number"')
//     }else{
//       resolve(a - b)
//     }
//   })
// }


// let sumResult = asyncSum(50, 33)
// let subtractResult = asyncSubtract(50, 33) 

// Promise.all([sumResult, subtractResult]).then(results => {
//   console.log(results)
// }).catch(err => {
//   console.log(err)
// })




let numbers = [4, 9, 5, 13, 77, null]

function asyncSquare(x){
  return new Promise((resolve, reject) => {
    if(typeof x != 'number'){
      reject('Type of value must be "Number"')
    }else{
      resolve(x * x)
    }
  })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log(squares)
}).catch((err)=>{
  console.log(err)
})