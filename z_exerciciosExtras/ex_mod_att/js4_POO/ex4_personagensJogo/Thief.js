const Character = require('./Character')

module.exports = class Thief extends Character {
  constructor(name, lifePoints, attackPoints, defencePoints){
    super(name, lifePoints, attackPoints, defencePoints)
  }

  attack(enemy){
    enemy.lifePoints -= (this.attackPoints - enemy.defencePoins) * 2
  }
}