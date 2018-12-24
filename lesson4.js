// COERCION

let a = 7;

let b = "6";

let c = a + b;

console.log("Answer: " + c);

// coercion happening

// evil or just normal

// force '6' to number ?

// IntelliSense : start typing and have help : Better than notepad.
b = parseInt(b, 10);
c = a + b;
console.log("Answer: " + c);

// Evil much ?

let d = parseInt("bob", 10);
console.log("Answer: " + d);

let e = isNaN(d);
console.log("Answer: " + e);
