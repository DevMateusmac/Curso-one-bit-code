let a1 = 0 

let b2 = null
 
let c3 = "teste"

console.log(a1 || b2 || c3) // com isso ele vai retornar o a como false, o b como false e o c como true 
console.log(a1 ?? b2 ?? c3) // com isso ele vai retornar somente o A, pois como ele não é nulo nem undefined ele é retornado primeiro, pois o js lê o código da esquerda para a direita 



// exemplo sem e com o operador de coalescência nula
let a = 0

let b = a || 42

console.log({a, b}) // vai me retornar o a = 0 e b = 42 

b = a ?? 42 

console.log({a, b}) // vai me retornar o a = 0 e b = 0 pois ele não dá esse curto-circuito por causa do 0, pois ele com esse operador é considerado como valor, e não null e nem undefined.
