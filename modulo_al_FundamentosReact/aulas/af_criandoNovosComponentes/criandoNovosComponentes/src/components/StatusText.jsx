const StatusText = () => {
  const status = true
  return <h2>Current status: {status ? "ON" : "OFF"}</h2>
}

export default StatusText

//A forma passada na aula foi assim:
// export default () => {
//   const status = true
//   return <h2>Current status: {status ? "ON" : "OFF"}</h2>
// }
// ele da um "erro", pois na versão atual do vite ele tem o eslint, que vai apontar uma forma diferente e atual de escrever esse código.