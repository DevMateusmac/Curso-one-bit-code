
// função normal
function normalSum (a, b){
  return a + b
}
console.log(`Soma normal: ${normalSum(5, 6)}`)


//função anônima 
let anonymousSum = function (a, b){
  return a + b
}
console.log(`Soma anônima: ${anonymousSum(2, 2)}`)


let arrowSum = (a, b) =>{
  return a + b
}
console.log(`Soma arrow function: ${arrowSum(4, 4)}`)


let subtract1 = (a, b) => a - b 
console.log(`${subtract1(4, 2)}`)

//ou

let subtract = (a, b) => `${a} menos ${b} é : ${a - b}`  
console.log(subtract(4, 2))



// quando a função possui um parâmetro apenas, não precisa colocar parênteses
let double = n => `O dobro de ${n} é ${n * 2}`
let number = 21
console.log(double(number))



const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)



//outro teste que fiz há um tempo atras com arrow function que achei válido colocar aqui também
// arrow function
{
  // função comum 
function alo (){
  console.log('Alo, mundo!1')
}
alo()

// função com parâmetro
let nameTeste = 'Mateus1'
function aloComParametro (name){
  console.log('Alo, ' + name + '!')
}
aloComParametro(nameTeste)

// função anônima
let funcAnonima = function(){
  console.log('Alo, mundo!2')
}
funcAnonima()

// função anônima com parametro
let nameTeste2 = 'Mateus2'
let funcAnonima2 = function(name){
  console.log('Alo, ' + name + '!')
}
funcAnonima2(nameTeste2)

//arrow function
let funcAnonima3 = () => {
  console.log('Alo, mundo!3')
}
funcAnonima3()

// arrow function com parametro
let nameTest3 = 'Mateus3'
let arrowFunc = (name) => {
  console.log('Alo, ' + name + '!')
}
arrowFunc(nameTest3)

// a mesma arrow function com parametro pode ser passada sem o parenteses
let nameTest4 = 'Mateus4'
let arrowFunc4 = name => {
  console.log('Alo, ' + name + '!')
}
arrowFunc(nameTest4)

// e também pode ser passada direto com o return
let nameTest5 = 'Mateus5'
let arrowFunc5 = (name) =>  console.log('Alo, ' + name + '!') // ou assim: let arrowFunc5 = (name) =>  {return console.log('Alo, ' + name + '!')}
arrowFunc5(nameTest5)

// mais um teste com função anonima
let nameTest6 = 'Ma'
let arrFunc6 = name => console.log('Alo, ' + name + '!')
arrFunc6(nameTest6)
}
