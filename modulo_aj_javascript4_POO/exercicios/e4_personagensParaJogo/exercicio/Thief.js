let Character = require('./Character.js')


class Thief extends Character{
  constructor(name, lifePoints, attackPoints, defencePoints){
    super(name, lifePoints, attackPoints, defencePoints)
  }

  attack(opponent){
    return opponent.lifePoints - (2 * (opponent.defencePoints - this.attackPoints))
  }
}


module.exports = Thief