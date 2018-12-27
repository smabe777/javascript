// the revealing module pattern

// Do the same, but use funciton definitions

let counter = (function() {
  //private stuff
  let count = 0;

  function print(message) {
    console.log(message + "...." + count);
  }
  function getCount() {
    return count;
  }
  function setCount(value) {
    count = value;
  }
  function incrementCount() {
    count += 1;
    print("After increment :");
  }
  function resetCount() {
    print("Before reset :");
    count = 0;
    print("After reset: ");
  }
  //return an object
  //  "REVEALS" the public functions through the properties
  // + clarity
  // - overwrite possible because PROPERTIES !!!
  return {
    get: getCount, // publically accessible
    set: setCount,
    increment: incrementCount,
    reset: resetCount
  };
})();

counter.increment();
counter.increment();
counter.increment();
counter.set = 7; // breaking the pattern
console.log(counter.get());
//counter.reset();

counter2 = counter;

console.log(counter2.get());
