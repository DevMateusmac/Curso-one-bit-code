async function asyncSum(a, b){
  if(typeof a !== 'number'|| typeof b !== 'number'){
    return Promise.reject('Arguments must be of type "Number"')
  }
  return a + b
}

async function asyncSubtract(a, b){
  if(typeof a !== 'number'|| typeof b !== 'number'){
    return Promise.reject('Arguments must be of type "Number"')
  }
  return a - b
}

// forma separada 
// asyncSum(50, null).then(result =>{
//   console.log(result)
// }).catch(err => {
//   console.log(err)
// })

// asyncSubtract(50, 25).then(result =>{
//   console.log(result)
// }).catch(err => {
//   console.log(err)
// })


// executando varias promises
let asyncSumResult = asyncSum(50, 50)
let asyncSubResult = asyncSubtract(50, 50)


Promise.all([asyncSumResult, asyncSubResult]).then(results => {
  console.log(results)
}).catch(err =>{
  console.log(err)
})