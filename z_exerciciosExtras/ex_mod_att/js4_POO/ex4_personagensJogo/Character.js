module.exports = class Character {
  constructor(name, lifePoints, attackPoints, defencePoints){
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defencePoints = defencePoints
  }

  attack(enemy){
    enemy.lifePoints -= this.attackPoints - enemy.defencePoints
  }
}