function convertMeter(){
  let option = prompt(`Para qual unidade você deseja converter?\n1 - Milímetro (mm)\n2 - Centímetro (cm)\n3 - Decímetro (dm)\n4 - Decâmetro (dam)\n5 - Hectômetro (hm)\n6 - Quilômetro (km)\n\nDigite a abreviação das unidades!`)
  let meters = Number(prompt(`Quantos metros você deseja converter ${option}?`))
  let result

  switch(option){
    case "mm":
      result = meters * 1000
      break
    case "cm":
      result = meters * 100
      break
    case "dm":
      result = meters * 10
      break
    case "dam":
      result = meters / 10
      break
    case "hm":
      result = meters / 100
      break
    case "km":
      result = meters / 1000
      break
    default:
      alert(`Algo de errado aconteceu, recarregue a página e tente novamente!`)
  }
  alert(`${meters} metros é igual a ${result} ${option}.`)
}


// convertMeter()

// funcionou certinho