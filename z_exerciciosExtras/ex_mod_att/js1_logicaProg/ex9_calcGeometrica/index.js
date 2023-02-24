function practicingFunctions(){

function userMenu(){
  let option 

  do{
    option = prompt(`Qual forma geométrica você deseja calcular?\n\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n6 - Sair\n\nDigite o número das opções!`)

    switch(option){
      case "1":
        triangleArea()
        break
      case "2":
        rectangleArea()
        break
      case "3":
        squareArea()
        break
      case "4":
        trapezeArea()
        break
      case "5":
        circleArea()
        break
      case "6":
        alert(`Encerrando aplicativo...`)
        break
      default: 
        alert(`Algo deu errado, tente novamente!`)
    }

  }while(option !== "6")
}

function triangleArea(){
  let base = Number(prompt(`Qual é o comprimento da base do triângulo?`))
  let height = Number(prompt(`Qual é a altura do triângulo?`))
  let result = (base * height) / 2
  return alert(`A área do triângulo com os dados que você passou é: ${result}`)
}

function rectangleArea(){
  let base = Number(prompt(`Qual é o comprimento da base do retângulo?`))
  let height = Number(prompt(`Qual é a altura do retângulo?`))
  let result = base * height 
  return alert(`A área do retângulo com os dados que você passou é: ${result}`)
}

function squareArea(){
  let side = Number(prompt(`Qual é o comprimento do lado do quadrado?`))
  let result = side * side 
  return alert(`A área do quadrado com os dados que você passou é: ${result}`)
}

function trapezeArea(){
  let higherBase = Number(prompt(`Qual é o comprimento da base maior do trapézio?`))
  let lowerBase = Number(prompt(`Qual é o comprimento da base menor do trapézio?`))
  let height = Number(prompt(`Qual é o comprimento da altura do trapézio?`))
  let result = (higherBase + lowerBase) * height / 2
  return alert(`A área do trapézio com os dados que você passou é: ${result}`)
}

function circleArea(){
  let radius = Number(prompt(`Qual é o comprimento do raio do círculo?`))
  let result = 3.14 * radius * radius
  return alert(`A área do círculo com os dados que você passou é: ${result}`)
}
userMenu()
}
// practicingFunctions()

// até aqui funcionou direito tudo o que pedia.