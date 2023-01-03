let Address = require('./Address')
let Person = require('./Person')

let addr= new Address('7 de setembro', 92, 'centro', 'São Fidélis', 'RJ')
let john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())