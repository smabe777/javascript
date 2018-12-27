//Lesson7 = Function Declaration 1:34:54
//=======================================

// log is a function
// function = block of code we want to execute over and over
// primary construct in the language

// function declaration
// keyword function, name of the function, parentheses, curly braces, content
function sayHello() {
  console.log("-------------");
  console.log("HEllo");
  console.log("-------------------");
}

// This block is callable

sayHello();

// assign to variable

let f = sayHello;

// I get a reference ot the function

f();

// Pass argument

function sayHello2(name) {
  console.log("-------------");
  console.log("HEllo " + name);
  console.log("-------------------");
}

sayHello2("Bob");

//---------------------------
// return keyword

function calculateTax(amount) {
  let result = amount * 0.21;
  return result;
}

let tax = calculateTax(100);
console.log(tax);
