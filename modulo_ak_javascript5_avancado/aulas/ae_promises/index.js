// estados da promise
// pendente - pending 
//resolvida - resolved
// rejeitada - rejected

// let p = new Promise((resolve, reject) => {
//   console.log('A promise está sendo executada')
//   setTimeout(()=>{
//     if(true){
//       reject(false)
//     }
//     console.log("Resolvendo a promise...")
//     resolve(true)
//   }, 1000 * 2)
// })
// console.log(p)

// setTimeout(()=>{
//   console.log(p)
// }, 1000 * 2)


function execute(){

  return new Promise((resolve, reject)=>{ 
    console.log('A promise está sendo executada...')
    setTimeout(()=>{
      console.log('Resolvendo a promise...')
      resolve('Resultado')
    }, 1000)
  })  
}

let p = execute()

console.log(p)

setTimeout(()=>{
  console.log(p)
}, 2000)