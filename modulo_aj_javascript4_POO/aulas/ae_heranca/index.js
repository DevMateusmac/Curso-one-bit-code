class Property{
  constructor(area, price){
    this.area = area
    this.price = price
  }

  getPricePerSquareMeter(){
    return this.price / this.area
  }
}


class House extends Property{

}


let land = new Property(200, 50000)
let someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)
console.log(someHouse instanceof Property)
console.log(someHouse instanceof House)



class Apartment extends Property{
  constructor(number, area, price){
    //this.area = area -> vai dar erro
    //this.price = price -> vai gerar erro 
    super(area, price)
    this.number = number
  }

  getFloor(){
    return this.number.slice(0, -2)
  }
}

let apt = new Apartment("201", 100, 160000)
console.log(apt)
console.log(apt.getFloor())