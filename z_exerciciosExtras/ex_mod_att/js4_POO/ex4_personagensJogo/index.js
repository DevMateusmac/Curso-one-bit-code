const Mage = require('./Mage') 
const Warrior = require('./Warrior')
const Thief = require('./Thief')


let warrior1 = new Warrior('warrior1', 100, 85, 75, 50)
let mage1 = new Mage('mage', 75, 70, 50, 50)
console.table(mage1)
// console.table(warrior1)
// warrior1.changePosition()
warrior1.attack(mage1)
console.table(mage1)
// console.table(warrior1)


//aparentemente esta funcionando

