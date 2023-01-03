let Character = require('./Character.js')

class Warrior extends Character{
  constructor(name, lifePoints, attackPoints, defencePoints, shieldPoints, combatPosition){
    super(name, lifePoints, attackPoints, defencePoints)
    this.shieldPoints = shieldPoints
    this.combatPosition = combatPosition
  }

  changeCombatPosition(){
    this.combatPosition == "ataque" ? this.combatPosition = "defesa" : this.combatPosition = "ataque"
    console.log(`A posição de combate deste jogador no momento é de ${this.combatPosition}`)
  }

  attack(opponent){
    if(this.combatPosition == "defesa"){
      return console.log("Este jogador não pode atacar, pois está em posição de defesa")
    }else {
      return opponent.lifePoints - (opponent.defencePoints - this.attackPoints)
    }
  }
}

module.exports = Warrior