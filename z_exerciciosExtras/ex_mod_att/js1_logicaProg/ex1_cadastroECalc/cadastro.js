function register(){
  let firstName = prompt("Qual é o seu nome?")
  let lastName= prompt("Qual é o seu sobrenome?")
  let studyField = prompt("Qual é o seu campo de estudo?")
  let yearBorn = Number(prompt("Em que ano você nasceu?"))

  let age = 2023 - yearBorn

  alert(`O nome do candidato é ${firstName +' ' + lastName}, tem ${age} anos e sua área de atuação é ${studyField}.`)
}

// register()


function calc(){
  let number1 = Number(prompt("Informe o primeiro número para calcular"))
  let number2 = Number(prompt("Informe o segundo número para calcular"))

  let sum = number1 + number2
  let sub = number1 - number2
  let mult = number1 * number2
  let div = number1 / number2

  alert(`Os números excolhidos foram ${number1} e ${number2}.\n1 - Soma: ${number1} + ${number2} é ${sum}.\n2 - Subtração: ${number1} - ${number2} é ${sub}.\n3 - Multiplicação: ${number1} x ${number2} é ${mult}. \n4 - Divisão: ${number1} % ${number2} é ${div}.`)
}

// calc()

 