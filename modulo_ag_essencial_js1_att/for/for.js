

//EXERCÍCIO 1
let tabuada = Number(prompt("Informe um número para calcular na tabuada"));
let resultado = ""
for (let i = 0; i <= 20; i++) {
  
  resultado += tabuada + " x " + i + " é = " + tabuada * i + "\n"
}
alert(resultado);


// EXERCÍCIO 2
// let word = "arara" //prompt("Escreva uma palavra:")
// let res = ""
// for(let i = 0; i < word.length; i++){
//   console.log(word[i])
//   res += word[i]
// }
// console.log(res)




let word = prompt("Escreva uma palavra:")
let res1 = ""

for(let i = word.length -1; i >= 0  ; i--){
  res1 += word[i] 
}
if(res1 == word){
  alert("Esta palavra é um palindromo \n" +  res1 + "\n" + word)
}else{
  alert("Esta palavra não é um palindromo \n" +  res1 + "\n" + word)
}
