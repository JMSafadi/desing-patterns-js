// Product
class Vehicle {
  constructor() {
    this.parts = []
  }
  addPart(part) {
    this.parts.push(part)
  }
  show() {
    console.log(`Vehicle parts: ${this.parts.join(', ')}`)
  }
}

// Builder interface
class VehicleBuilder {
  reset() {
    throw new Error('Methods reset() must be implemented.')
  }
  setSeats() {
    throw new Error('Methods setSeats() must be implemented.')
  }
  setEngine() {
    throw new Error('Methods setEngine() must be implemented.')
  }
  setWheels() {
    throw new Error('Methods setWheels() must be implemented.')
  }
  getResult() {
    throw new Error('Methods getResult() must be implemented.')
  }
}

// Concrete builders
class CarBuilder extends VehicleBuilder {
  constructor() {
    super()
    this.vehicle = new Vehicle()
  }
  reset() {
    this.vehicle = new Vehicle()
  }
  setSeats() {
    this.vehicle.addPart("4 seats")
  }
  setEngine() {
    this.vehicle.addPart("Car engine")
  }
  setWheels() {
    this.vehicle.addPart("4 wheels")
  }
  getResult() {
    return this.vehicle
  }
}

class MotorcycleBuilder extends VehicleBuilder {
  constructor() {
    super()
    this.vehicle = new Vehicle()
  }
  reset() {
    this.vehicle = new Vehicle()
  }
  setSeats() {
    this.vehicle.addPart("2 seats")
  }
  setEngine() {
    this.vehicle.addPart("Motorcycle engine")
  }
  setWheels() {
    this.vehicle.addPart("2 wheels")
  }
  getResult() {
    return this.vehicle
  }
}

// Director (optional)
class Director {
  constructSportsCar(builder) {
    builder.reset()
    builder.setSeats()
    builder.setEngine()
    builder.setWheels()
  }
  constructMotorcycle(builder) {
    builder.reset()
    builder.setSeats()
    builder.setEngine()
    builder.setWheels()
  }
}

const director = new Director()


const carBuilder = new CarBuilder()
const motorcycleBuilder = new MotorcycleBuilder()

director.constructSportsCar(carBuilder)
director.constructMotorcycle(motorcycleBuilder)

const car = carBuilder.getResult()
const motorcycle = motorcycleBuilder.getResult()

console.log(car)
console.log(motorcycle)

car.show()
motorcycle.show()
