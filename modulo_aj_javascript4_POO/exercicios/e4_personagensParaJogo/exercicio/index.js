let Character = require('./Character.js')
let Thief = require('./Thief.js')
let Mage = require('./Mage.js')
let Warrior = require('./Warrior.js')

let draktar = new Mage("Draktar", 100, 150, 100, 50)
let drako = new Warrior("Drako", 300, 100, 200, 100, "defesa")
let enemyMage = new Mage("Shaft", 100, 150, 100, 50)
console.log(draktar)
console.log(drako)
console.log(enemyMage)
//draktar.healLifePoints(drako)
//console.log(drako.lifePoints)