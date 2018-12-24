// RETURNING
// GLOBAL SCOPE : DO NOT

// in the browser : top-most = Global Scope

// declaring variables in the global scope is bad

var myVariable = "I am at the global scope";

var myFunction = function() {
  console.log("me too");
};

// We'll see why bad

// Funcitons can return functions

function one() {
  return "one";
}
let value = one();
console.log(value);

//inline
console.log(one());

//ttypeof
console.log(typeof one);

let value2 = one;

//execute through a variable
console.log(value2());

// return function

function two() {
  return function() {
    //function expression
    console.log("two");
  };
}
let myFunction2 = two(); // the returned function
myFunction2();

// directly invocating the returned function
function three() {
  return function() {
    return "three";
  };
}
console.log(three()());
// You will not see it

// THIS WILL HELP MOVING OUT OF GLOBAL SCOPE
