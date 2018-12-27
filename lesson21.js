// Lesson21 = Built-In Natives 4:17:56
//=====================================

// On Regexp, we called a method on the string. How?


// string , boolean, number are primitive types 
// They have a native object encapsulating them
// JS coerces 

// Naming convention : Class starts with uppercase
//BOXING : into a native to be able to call methods
// UNBOXING : back into a promotive

let myString = new String('howdy');
console.log(myString.toString()); // conversion to a promitive

console.log(typeof myString);

//List of natives :

/* 
String()
Number()
Boolean()
Object()
Function()
Symbol()
*/

/*
Built-in natives without primitive versions
---------------------------
Array()
RegExp()
*/

/*
Foundational datatypes
-----------------------
Date()
Error()
*/

let myPrimitive = 'THIS IS CRAZY'; //this is a primitive 
console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLowerCase();//JS does the boxing to be able to call the method
console.log(typeof myPrimitive);//already unboxed

// You can let the boxing / unboxing business to the compiler
// Start with built-in native and extract the primitive

let myNumber = new Number(7);
console.log(typeof myNumber);

let myPrimitiveN = myNumber.valueOf(); // retrieves the prim value of the boxed prim

console.log(typeof myPrimitiveN);