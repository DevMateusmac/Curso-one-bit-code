let seconds = 0

let intervalId = setInterval(()=>{
  seconds += 3
  console.log(`Se passaram ${seconds} segundos`)
  if(seconds >= 9){
    clearInterval(intervalId)
    console.log("Tempo esgotado! Encerrando...")
  }
}, 1000 * 3)