let person = {
  nome: "Luke",
  job: "Farmer",
  parents: ["Anakin","Padme"]
}

let name = person.name


let {job, parents} = person
console.log(name, job, parents)

let [father, mother ] = parents
console.log(father, mother)

function createUser(person){
  let id = Math.floor(Math.random() * 9999)
  return {
    id,
    name: person.name,
    job: person.job,
    parents: person.parents    
  }
}
let luke = createUser(person)
console.log(luke)


// para criar este mesmo exemplo desestruturando o objeto:

function createUser1({name, job, parents}){
  let id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents    
  }
}
let jack = createUser(person)
console.log(jack)


