//Lesson14 = Module Pattern and Revealing Module Pattern 3:02:26
//===============================================================

// Beware of Global scope -- spaghetti
// WHY ?
// Webbrowser (window object) : Each variable is in memory until new page
//      when using other files, clash is possible.
//      difficult bugs.
// Solutions :
//        - let instead of var
//          - modules (but not clear how this applies in the browser)

//  ==> ENCAPSULATION PATTERNS
//----------------------------------
// Create an IIFE that returns an object is a technique
// to make some stuff private
// removes variables from global scope
// separates between private stuff and public stuff (in the return)

let counter = (function () {
  //private stuff
  let count = 0;

  function print(message) {
    console.log(message + "...." + count);
  }
  //return an object
  return {
    value: count,
    increment: function () {
      count += 1;
      print("After increment :");
    },
    reset: function () {
      print("Before reset :");
      count = 0;
      print("After reset: ");
    }
  };
})();

// immediately called, meaning counter is available
// can we read count? no because it is not returned
//console.log(counter.count);

counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);
counter.reset();
// Encapsulation, make properties privates

// value property is 0 instead of 3
// Accidentally created  a CLOSURE

// do differently
let counter2 = (function () {
  //private stuff
  let count = 0;

  function print(message) {
    console.log(message + "...." + count);
  }
  //return an object
  return {
    get: function () {
      return count;
    },
    set: function (value) {
      count = value;
    },
    increment: function () {
      count += 1;
      print("After increment :");
    },
    reset: function () {
      print("Before reset :");
      count = 0;
      print("After reset: ");
    }
  };
})();

counter2.increment();
counter2.increment();
counter2.increment();
counter2.set(7);
console.log(counter2.get());
counter2.reset();

// count; print, get, set ... are not defined in the global scope
// less chance of namespace collision

// That was the MODULE PATTERN
