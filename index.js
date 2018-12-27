/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
} //object literal syntax

// access members

circle.draw();

// See in IE because server with hot reloading

// literal syntax is not a good way to create objects if behaviour

// => Factory function
//----------------------

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
}

const circle2 = createCircle(3);
circle2.draw();

// Constructor Function
//----------------------

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
    // no explicit return this.
}
const another = new Circle(1);
// check if you delete new =>
// YOu are defining properties on global scope == TO the global or window object

// in the console type : another.constructor */

//let x = {} // JS does let x = new Object();

//built-in constructors and literals
// new String() =>> we use ''
// new Boolean() =>> we use true/false
// new Number() =>> we use 1, 3.2
/*
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
    // no explicit return this.
}*/
// JS : Functions are objects : check with intellisense
// check in browser Circle.name, Circle.length (number of args)
//  Circle.constructor

// function as a Object Function
/* const Circle1 = new Function('radius', `this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }`);

const circle3 = new Circle1(1);
 */
//Circle1.call({}, 1); // this shows how JS calls the constructor
// create an empty object, and pass it the args 
// without new, this refers to global object,
// as if call was called with window


//Circle1.apply({}, [1, 2]); // practical if arrays


// Value Types : Number, String, Boolean, Symbol, undefined, null
// Reference Types : Object, Function, Array

/* let x = 10;
let y = x;
x = 20; */

// If objects 
/* 
let x = { value: 10 };
let y = x;
x.value = 20; */

// same value
// object is not store in the variable, but adress in the memory
// X and Y point to the same location

// => primitives are copied by value,
// => reference type are copied by reference

/* let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number); */

/* let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj); */

//-----------------------------------------------
// Adding/Removing Properties

// objects are dynamic

/* function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
    // no explicit return this.
}
 */
// we can add properties when we need them

/* const circle = new Circle(10);
circle.location = { x: 1 };
 */
// other way : bracket notation

//circle['location'] = { x: 1 };

// UC1 : useful to dynamically access a property name

//const propertyName = 'location';

// not known at the time of writing the code

// circle[propertyName] = { x: 1 };

// UC2 : also when not valid identifier

// const propertyName = 'center-location';
//circle['center-location'] = { x: 1 };

// Delete property (password, credit card)

//delete circle['location'];

//circle['draw'](); // a method is a property

//------------------------------------------------------
// ITERATE THROUGH PROPERTIES
/* 
const circle = new Circle(10);

for (let key in circle) { // object treated as hash in ruby

    console.log(key, circle[key]);
    console.log(typeof circle[key]);
}

for (let key in circle) { // object treated as hash in ruby
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// from Object
const keys = Object.keys(circle);
console.log(keys);

// see if a property exists

if ('radius' in circle)
    console.log('Circle has a radius.');
 */
// -----------------------------------------------------------------
// ABSTRACTION
// ------------------

/* function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function () {

    }
    this.draw = function () {
        this.computeOptimumLocation();
        console.log('draw');
    }
} */

//const circle = new Circle(10);
// Not all properties should be accessible, as people can do bad things

//circle.defaultLocation = false; // WRONG, but will be accepted by JS

// what if compute should only be called inside draw, otherwise bad state?

// circle.computeOptimumLocation(); // should be hidden

// Abstraction

// many different places in the code might have to be changed.
// e.g. add parameter to computeOptimumLocation

//-----------------------------------------------------------
// PRIVATE PROPERTIES -- GETTERS / SETTERS


/* function Circle(radius) {
    let color = 'red'; // not a property yet! should be defined through 'this'
    //this.color = color; // now a property ==> PUBLIC
    // To make private, remove the this
    this.radius = radius;
    let defaultLocation = { x: 10, y: 10 };
    let scalarLocation = 10;
    let myFuncs = [];
    let computeOptimumLocation = function (arg) {
        // in this function, I can use variable from the outer function
        const x = defaultLocation.x * 10;
        const y = defaultLocation.y * 10;
        let myloc = { x, scalarLocation };
        console.log('myloc', myloc);
        console.log('defaultLocation', defaultLocation);
        return function () { return myloc; };
    }
    this.draw = function () { // can access external scope ==> closure
        console.log('draw');
        let x, y; // scioe is temporary
        myFuncs.push(computeOptimumLocation(0));
        console.log(myFuncs);
        console.log(myFuncs[0]()); // when the function is called
        // all the variable are bound;
        //this.radius
        defaultLocation.x -= 10;
        defaultLocation.y -= 10;
        scalarLocation -= 1;

    }
} */

//-------------------------------------------------------------
// GETTERS / SETTERS

/* function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 10, y: 10 };
    this.draw = function () { // can access external scope ==> closure
        console.log('draw');
    }
    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    Object.defineProperty(this, 'defaultLocation',
        {
            get: function () { return defaultLocation; },
            set: function (value) {
                // we can add validation, as we have a method
                if (!value.x || !value.y)
                    throw new Error('invalid location');

                defaultLocation = value;
            }
        })

}
const circle = new Circle(20);
circle.defaultLocation = 1;

// If we  still want to modify defaultLocation,
// we can create a getter

// if we don't want a method call, we can use Object



circle.draw(); // only draw and radius are accessible
circle.draw();
circle.draw();
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    }
} */
/////////////////////////////////////////////////////


function StopWatch() {
    let started = false;
    let starttime = 0, endtime = 0;
    this.start = function () {
        if (started)
            throw new Error('Already started.');
        started = true;
        starttime = Date.now();
    };
    this.stop = function () {
        if (!started)
            throw new Error('Not started');
        started = false;
        endtime = Date.now();
    };
    let durationCalc = function () {
        if (started)
            throw new Error('Not stopped');
        console.log((endtime - starttime) / 1000);
        return (endtime - starttime) / 1000;
    };
    this.reset = function () {
        starttime = 0;
        endtime = 0;
        started = false;
    }
    Object.defineProperty(this, 'duration', {
        get: durationCalc
    })
}

let s = new StopWatch();