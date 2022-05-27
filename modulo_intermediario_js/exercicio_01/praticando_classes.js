class SpacialStation {
    constructor(name, crewQuantity, engage, doors){
        this.name = name
        this.crewQuantity = crewQuantity
        this.engage = engage
        this.doors = doors
    }
    toEngage() {

    }
}


let schatten = new SpacialStation("Schatten", 12, true, true)

console.log(schatten)
