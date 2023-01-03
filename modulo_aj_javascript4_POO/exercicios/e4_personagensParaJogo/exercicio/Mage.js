let Character = require('./Character.js')

class Mage extends Character{
  constructor(name, lifePoints, attackPoints, defencePoints, magicPoints){
    super(name, lifePoints, attackPoints, defencePoints)
    this.magicPoints = magicPoints
  }

  attack(opponent){
    return opponent.lifePoints - (opponent.defencePoints - (this.attackPoints + this.magicPoints))
  }

  healLifePoints(allie){
    return allie.lifePoints += (this.magicPoints * 2)
  }
}

module.exports = Mage