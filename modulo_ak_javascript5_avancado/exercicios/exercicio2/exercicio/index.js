// formula do imc = peso / altura²   

function measureIMC(weight, height){
  return new Promise((resolve, reject)=>{
    console.log("Iniciando o calculo IMC")
    setTimeout(() => {
      let resultIMC = weight / (height * height)
      if(typeof weight === 'string' || typeof height === 'string'){
        reject(`O tipo de dado deve ser "Number"`)
      }
      if(resultIMC < 18.5){
        resolve(`O seu resultado foi de: ${resultIMC.toFixed(1)}, você está com o peso abaixo do normal.`)
        }else if(resultIMC > 18.5 && resultIMC < 24.9){
            resolve(`O seu resultado foi de: ${resultIMC.toFixed(1)}, você está com o peso normal.`)
          }else if(resultIMC > 25 && resultIMC < 29.9){
            resolve(`O seu resultado foi de: ${resultIMC.toFixed(1)}, você está com sobrepeso.`)
          }else if(resultIMC > 30 && resultIMC < 39.9){
            resolve(`O seu resultado foi de: ${resultIMC.toFixed(1)}, você está com obesidade.`)
          }else{
            resolve(`O seu IMC foi de: ${resultIMC.toFixed(1)}, você está com obesidade grave.`)
          }
        }, 1000 * 4)
        callAsync()
      })
}

measureIMC(50, 1.8).then((result)=>{
  console.log(`Resultado: ${result}`)
}).catch((err)=>{
  console.log(`Não foi possivel calcular o IMC, motivo: ${err}`)
}).finally(()=>{
  console.log(`Calculo finalizado!`)
})


function callAsync(){
  console.log("Realizando calculo...")
}