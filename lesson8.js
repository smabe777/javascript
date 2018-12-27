//Lesson8 = Function Expressions 1:44:41
//========================================
// Function Expression
// unnamed function ?
// use code to be run later, after a certain calculation or response from a server

// handler is a function : created on the fly
// after a timeout, a function will be called
setTimeout(function () {
  console.log("waited 2 seconds");
}, 2000);

// Mix function declaration and funcitons expression

let counter = 0;

function timeout() {
  setTimeout(function () {
    console.log("hi " + counter++);
    timeout();
  }, 2000);
}
timeout();
console.log("after timeout");

//Ctrl-C

//  Immediately invoked

(function () {
  console.log("IIFE");
})();
