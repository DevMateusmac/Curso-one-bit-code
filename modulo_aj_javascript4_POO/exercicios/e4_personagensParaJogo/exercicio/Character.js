
 class Character {
  constructor(name, lifePoints, attackPoints, defencePoints){
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defencePoints = defencePoints
  }

  attack(opponent){
    return opponent.lifePoints - (this.attackPoints - opponent.defencePoints)
  }
}
module.exports = Character