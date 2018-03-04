//definte an abstract calss because we donot want to have any car(donot instantiate from car) but just we want to extends from car class
abstract class Car{
    description : string;
    
    getDescription():string{
        return this.description;
    }
    abstract cost():number;
}
class ModelS extends Car{
    description : string = "Model S";
    cost():number{
        return 75000;
    }
}

class ModelX extends Car{
    description : string ="Model X";
    cost():number{
        return 80000;
    }
}

abstract class CarOptions extends Car{
    decoratedCar: Car;
    abstract getDescription():string;
    abstract cost():number;
}

class EnhancedAutoPilot extends CarOptions {
    decoratedCar : Car;
    
    constructor(car : Car) {
        super();
        this.decoratedCar = car;
    }
    getDescription(): string {
        return this.decoratedCar.getDescription()+", Enhanced with AutoPilot.";
    }
    cost(): number {
        return this.decoratedCar.cost() + 5180;
    }
}

class EnhancedRearSeat extends CarOptions {
    decoratedCar : Car;
    
    constructor(car : Car) {
        super();
        this.decoratedCar = car;
    }
    getDescription(): string {
        return this.decoratedCar.getDescription() + ", Enhanced with Rear Seat."
    }
    cost(): number {
        return this.decoratedCar.cost()+2250;
    }
}

let myTesla = new ModelS();
myTesla = new EnhancedRearSeat(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.cost());

myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.cost());