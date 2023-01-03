module.exports = class Character {
  constructor(name, lifePts, attackPts, defensePts){
    this.name = name
    this.lifePts = lifePts
    this.attackPts = attackPts
    this.defensePts = defensePts
  }

  attack(targetCharacter){
    targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts
  }
}

// o commonjs também pode ser declarado no inicio da declaração da classe, igual o ESModules