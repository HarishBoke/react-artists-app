class Car {
    constructor(){
        this.wheels = 4;
        this.speed = 0;
    }
    getSpeed(){
        return this.speed;
    }
    setSpeed(speed){
        this.speed = speed;
    }
}

class Ford extends Car{
    constructor(){
        super();
    }
}

var car = new Car();
var ford = new Ford();

ford.setSpeed(10);
console.log('wheels ' + car.wheels + ' and the speed of car is ' + car.getSpeed());
console.log('wheels ' + ford.wheels + ' and speed of car is ' + ford.getSpeed());