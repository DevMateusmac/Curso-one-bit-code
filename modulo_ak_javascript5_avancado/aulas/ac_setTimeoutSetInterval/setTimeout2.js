console.log("Programa iniciado!")


let timeoutId = setTimeout(()=>{
  console.log("3 segundos se passaram desde que o programa foi iniciado!")
}, 1000 * 3)

clearTimeout(timeoutId)
