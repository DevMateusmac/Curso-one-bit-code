function waitFor(seconds){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    }, seconds * 1000)
  })
}

let numbers = [4, 5, 9, 13, 77]

// let squares  = numbers.map(async (number) =>{
//   await waitFor(2)
//   return number * number
// })

// console.log(squares)

// Promise.all(squares).then(results => {
//   console.log(results)
// })

async function execute(){
  console.time('map')
  let squares  = await Promise.all(numbers.map(async (number) =>{
    await waitFor(2)
    return number * number
  }))
  console.log(squares)
  console.timeEnd('map')
}
execute()