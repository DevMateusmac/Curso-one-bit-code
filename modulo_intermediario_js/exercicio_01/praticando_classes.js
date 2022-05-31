
class SpacialStation {
    constructor(name, crewQuantity){
        this.name = name
        this.crewQuantity = crewQuantity
        this.engage = false
        this.doors = false
    }
    toEngage() {
        this.engage = true
        this.doors = true
    }
}



