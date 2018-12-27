// Lesson17 = this Keyword 3:28:38
//===================================
// this : the way a function is called determines the meaning of this

/* let car = {
  make: "bmw",
  model: "741li",
  year: 2010,
  getPrice: function() {
    return 5000;
  },
  printDescription: function() {
    console.log(this.getPrice() + "," + this.make + " " + this.model);
  }
};

// access : .
car.printDescription(); */

// this can be bound to something else

function first() {
  return this;
}
//console.log(first());
// global is the Node's outermost object
console.log(first() === global);

// true because first is called from global

function second() {
  "use strict"; // changes binding
  return this;
}
console.log(second() === global);
console.log(second() === undefined);

let myObject = { value: "My Object" };

// new property on the global object // in browser = window
global.value = "Global object";

function third(name, name2) {
  //returns something different depending how the function is called.
  return this.value + " " + name + ", " + name2;
}

console.log(third());

// functions have a built-in method call
// both call and apply allow to explicitly set
// what we want 'this' to represent. The difference
// is in how additional arguments to the function are
// sent
console.log(third.call(myObject, "bob"));
console.log(third.apply(myObject, ["bob", "anja"]));

// "this" depends on how a function is called .

// An object can be passed as the first argument to call
// or apply and "this" will be bound to it

// See in an object Car, this is the object

function fifth() {
  console.log(this.firstName + "," + this.lastName);
}

let customer1 = {
  firstName: "Bob",
  lastName: "Tabor",
  print: fifth
};

let customer2 = {
  firstName: "Richard",
  lastName: "Boughton",
  print: fifth
};

fifth();
customer2.print();
customer1.print();

// this becomes a way to pass parameters to function fifth without
// defining long parameter lists

let f = (function () {
  let x = { firstName: "zoba", lastName: " Cona", fifth: fifth };
  console.log(this.firstName);
  x.fifth();
})();
