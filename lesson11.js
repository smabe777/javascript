// Scope

// Variable has a lifetime and a citizenship

let a = "first";

function scopeTest() {
  console.log(a);
  let b = "second";
}

scopeTest(); // can see outside variables in the funciton
//console.log(b); // cannot see var decalred within the funciton

/* function scopeTest2() {
  console.log(a);
  if (a != "") {
    console.log(a);
    let c = "third";
  }
  console.log(c); // declared within the function in an inner block
  // c is no longer available
}
scopeTest2(); */

// change value of var from outside

function scopeTest3() {
  console.log(a);
  a = "changed";
}
scopeTest3();
console.log(a);

// call within inner block to outer block

function scopeTest4() {
  console.log(a);
  let b = "second";
  if (a != "") {
    console.log(a);
    console.log("inside, b = " + b);
  }
}
scopeTest4();
