class Vehicle{
  move(){
    console.log("O veículo está se movendo.")
  }
}

class Car extends Vehicle{
  move(){
    console.log("O carro está se movendo.")
  }
}

class Ship extends Vehicle{
  move(){
    console.log("O navio está navegando.")
  }
}

class Aircraft extends Vehicle{
  move(speed){
    console.log(`A aeronave está voando a ${speed} km/h.`)
  }
}



let delorian = new Car()
let blackPearl = new Ship()
let epoch = new Aircraft()

delorian.move() // saída: O carro está se movendo
blackPearl.move() // saída: O navio está navegando
epoch.move(75) // saída: A aeronave está voando a 75 km/h


function start(vehicle){
  console.log("\nIniciando um veículo")
  vehicle.move(75)
}

start(delorian)
start(blackPearl)
start(epoch)