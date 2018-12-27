// Lesson23 = Objects and the Prototype Chain 4:40:20
//====================================================

// No class concept really
// JS has objects -- object-base
// kinda support classes or inheritance (prototype chain)


// I want to reuse stuff from an object
// JS links both objects 

// OLOO -- Objects Linking to Other Objects

let originalCar = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

originalCar.doors = 4;
console.log(newCar.doors); // 'inheritance'

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));
//JS looks for a definition for each method we call,
// and looks up the prototypal chain

newCar.make = 'audi';
console.log(newCar.make);
console.log(newCar.whatever); //inexistent, up to Object