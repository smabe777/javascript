//const x = 7;
let x = 7; //var , const
let y = 3;
let z = x + y;
console.log("Answer: " + z);

// Variable = Area in memory for storing value

// let = keyword for creating a variable

// variable receives a name (reference or identifier to that memory area)
// naming conventions

// Other keyword : var ==> being deprecated
//redo with var
// we'll see why it could have some bad consequences ==> use let for now

// Other keyword : const
// I have no intention changing it

x = 6;
x = 4;

// we can change the values as much as we like
// declaration ONLY ONCE
//assignment as much as we like

//let x = 9;
//declaration without initialisation
let w;
console.log(w);
//=> undefined
//better to initialise immediately

//variables rules + naming conventions
// var start with _, letter, $
// no space, but numbers are OK
// cannot be a keyword

//let var = 5;

//case-sensistive

let X = 5;

// conventions :
// 1. descriptive names

let firstNumber = 4;
let firstName = "Jules";

// 2. camel-case

// 3. - Be consisteng
let FirstName = "Jon";
// unreadable
