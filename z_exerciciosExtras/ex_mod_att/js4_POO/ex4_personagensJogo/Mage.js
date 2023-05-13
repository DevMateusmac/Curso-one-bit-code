const Character = require("./Character");

module.exports = class Mage extends Character{
  constructor(name, lifePoints, attackPoints, defencePoints, spellPoints){
    super(name, lifePoints, attackPoints, defencePoints)
    this.spellPoints = spellPoints
  }

  attack(enemy){
    enemy.lifePoints -= (this.attackPoints + this.spellPoints) - enemy.defencePoints
  }

  healTarget(allie){
    allie.lifePoints += this.spellPoints * 2  
  }
}