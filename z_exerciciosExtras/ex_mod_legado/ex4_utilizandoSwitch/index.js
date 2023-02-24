function conversionUnity(){
  let lightY = prompt("Quantos anos-luz deseja calcular?")
  let unity = prompt(`Para qual unidade deseja converter? \n1 - Parsec(pc)\n2 - Unidade astronômica(au)\n3 - Quilômetros\n\nSelecione o número das opções!`)
  let convertedUnity 
 
  switch(unity){
    case "1": 
      convertedUnity = Number(lightY * 0.306601)
      alert(`Distancia em ano-luz: ${lightY}\nConversão para PC: ${convertedUnity} pc`)
      break
    case "2":
      convertedUnity = Number(lightY * 63241.1)
      alert(`Distancia em ano-luz: ${lightY}\nConversão para AU: ${convertedUnity} au`)
      break
    case "3":
      convertedUnity = Number(lightY * 9.5 * Math.pow(10, 12))   
      alert(`Distancia em ano-luz: ${lightY}\nConversão para km: ${convertedUnity} km`)   
      break
    default: alert("Algo deu errado, tente novamente!")
  }
}
conversionUnity()
// a boa prática que percebi na correção é que o professor coloca um alert só, no final do código, diferente de mim que coloquei o mesmo alert em todos os cases, sendo assim fica muito repetitivo. código baseado no do professor:

// let convertedUnity
// let unityChosed

// switch(unity){
//   case "1":
//     unityChosed = "Parsec"
//     convertedUnity = Number(lightY * 0.306601)
//     break
//   case "2":
//     unityChosed = "Unidade astronômica"
//     convertedUnity = Number(lightY * 63241.1)
//     break
//   case "3":
//     unityChosed = "Quilômetro"
//     convertedUnity = Number(lightY * 9.5 * Math.pow(10, 12))
//     break
//   default:
//     unityChosed = "Unidade não identificada"
//     convertedUnity = "Conversão fora do escopo"
// }
// alert(`Distância em anos-luz: ${lightY}\nUnidade escolhida: ${unityChosed}\nResultado: ${convertedUnity}`)