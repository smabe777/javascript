// Deal with lists , groups of related values

// ARRAYS

// a variable with multiple values

let array = [4, 8, 15, 16, 23, 42];

let otherArray = ["david", "eddie", "bob"];

// index to get an element insisde the array
// 0-based

console.log(array[0]);
console.log(otherArray);

// change or set a value?

otherArray[0] = "Jennie";
console.log(otherArray);

// what is their datatype ? OBJECT datatype
console.log(typeof otherArray);

// Array is not a datatype on its own : OBJECT

// mixed arrays

let mixed = [4, "alex", true];
console.log(mixed);

//out-of-bound

console.log(mixed[4]);
//=> undefined

// Arrays are objects => Method Length

console.log(mixed.length);

//STRANGE THINGS
// Create new element

mixed[5] = 33;

console.log(mixed);
console.log(mixed.length);

//safer way to add without risk of creating blanks
// push & pop

mixed.pop();
mixed.pop();
mixed.pop();
console.log(mixed.length);
console.log(mixed.length);
