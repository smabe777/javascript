// Lesson22 = Constructor Function Calls with the new Keyword 4:30:50
//====================================================================

let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
};


function Car(make, model, year) { // new object 
    this.make = make;
    this.model = model;
    this.year = year;
}

let myCar = new Car('bmw', '745li', 2010);
// new keyword creates an empty object with the arguments
// and passes it to the function as this
// the functions themselves are not constructors,
// new does a 'constructor Call'

console.log(myCar);


function MyFunction() {
    console.log('I am a simple function');
}

let myFunction = new MyFunction();

console.log(typeof myFunction);

// it is not a function reference
// no properties
myFunction();


//naming functions : capital-start means I intend to call it with new
// This is behind the boxing mechanism -- adding properties
