let srt = "Olá, mundo!"
let arr = [4,2, 8, 3, 1]

console.log(...srt) // Vai separar as letras O l á , m u n d o !
console.log(...arr) // vai separar os números 4 2 8 3 1 


let towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns) // vai retornar todas as strings presentes no array juntas, com espaço -> Prontera Izlude Payon Alberta Geffen Morroc 
console.log(...towns[0]) // vai retornar o primeiro elemento -> P r o n t e r a 

let townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

let townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})

let townsObj = {...towns}
let townsObjClone = {...townsObj}

townsClone.test = "test"

console.log({townsObj, townsObjClone})