// imc => peso / (altura * altura)
function calcIMC(weight, height){
  return new Promise((resolve, reject) => {
    console.log('Calculando o IMC...')
    setTimeout(() => {
    if(typeof weight !== 'number' || typeof height !== 'number'){      
      reject('Os dados fornecidos devem ser do tipo "number".')      
    }else{
      resolve(weight / (height * height))
    }
  }, 1000 * 2)
  })
}

function initializeCalc(weight, height){
  calcIMC(weight, height).then((result) => {
    console.log('IMC calculado!')
    if(result < 18.5 ){
      console.log(`O resultado foi de: ${result}, o usuário está em situação de magreza!`)
    }else if(result > 18.5 && result < 24.9){
      console.log(`O resultado foi de: ${result}, o usuário está em situação normal de peso!`)
    }else if(result > 25 && result < 29.9){
      console.log(`O resultado foi de: ${result}, o usuário está em situação de sobrepeso!`)
    }else if(result > 30 && result < 39.9){
      console.log(`O resultado foi de: ${result}, o usuário está em situação de obesidade!`)
    }else if(result > 40){
      console.log(`O resultado foi de: ${result}, o usuário está em situação de obesidade grave!`)
    }
  }).catch(err => {
    console.log(`ERRO: ${err}`)
  }).finally(
    setTimeout(() => {
      console.log('Operação finalizada!')
    }, 1000 * 3)
  )
}

initializeCalc(90, 1.80)

/*
- Abaixo de 18,5: magreza
- Entre 18,5 e 24,9: normal
- Entre 25 e 29,9: sobrepeso
- Entre 30 e 39,9: obesidade
- Acima de 40: obesidade grave

*/

// funcionou como deveria