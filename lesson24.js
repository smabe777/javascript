// Lesson24 = JavaScript Classes 4:58:27
// ======================================
// classes -- try to mimic other languages ...syntactic sugar
// Better to go through TypeScript
//class declaration

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model  = model;
        this.year = year;
    }
    print(){
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

//class expression

let myCar = new Car ('bmw','745li', 2010);

console.log(myCar);

myCar.print();

class SportsCar extends Car{
    revEngine(){
        console.log('Vrrrooom goes the ' + this.model);
    }
}
let mySportsCar = new SportsCar('Dodge', 'Viper', 2011);
mySportsCar.print();
mySportsCar.revEngine();
//myCar.revEngine();