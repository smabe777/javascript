// Lesson16 = Closures 3:20:31
//=============================

// Associate data and funciton and use the function with that data already baked in

// Binding / creation of lexical environment

function sayHello(name) {
  return function () {
    console.log("hi " + name);
  };
}

let bob = sayHello("bob");
let conrad = sayHello("conrad");
let grant = sayHello("grant");
bob();
conrad();
grant();

// create a new version of a function with pre-defined values / environment
