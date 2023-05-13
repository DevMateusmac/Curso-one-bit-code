const Character = require("./Character");

module.exports = class Warrior extends Character{
  constructor(name, lifePoints, attackPoints, defencePoints, shield){
    super(name, lifePoints, attackPoints, defencePoints)
    this.shield = shield
    this.combatPosition = 'defence'
    this.checkPosition()
  }

  attack(enemy){
    if(this.combatPosition == 'attack'){
      super.attack(enemy)
    }else{
      console.log(`you can't start an attack because this character has a defence position, set the attack position to attack a target!`)
    }
  }

  checkPosition(){
    if(this.combatPosition == 'defence'){
      this.defencePoints += this.shield
    }else{
      this.defencePoints -= this.shield
    }
  }

  changePosition(){
    this.combatPosition === 'defence' ? this.combatPosition = 'attack' : this.combatPosition = 'defence'
    this.checkPosition()
  }
}    