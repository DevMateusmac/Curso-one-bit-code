async function asyncSum(a, b){
  if(typeof a !== 'number'|| typeof b !== 'number'){
    return Promise.reject('Arguments must be of type "Number"')
  }
  return a + b
}

// async function execute(){
//   asyncSum(50, 33).then(result => {
//     console.log(result)
//   })
// }


// async function execute(){
//   let result = await asyncSum(50, 33)
//   console.log(result)
// }


// usando o mesmo exemplo mas com tratamento de erro 
async function execute(){
  try{
    let result = await asyncSum(50, null)
    console.log(result)
  }catch(err){
    console.log(err)
  }
}

 execute()