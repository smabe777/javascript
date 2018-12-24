// Decision

// IF
//-----
let count = 3;

if (/*expression */ count == 4) {
  console.log("count is 4");
}
// alternative -- Do the else before
else if (count > 4) {
  console.log("count is greater than 4");
} else if (count < 4) {
  console.log("count is greater than 4");
} else {
  console.log("count is not 4");
}

// switch
//-------

let hero = "superman";
switch (hero) {
  case "superman":
    console.log("strength");
    console.log("flight");
  case "batman":
    console.log("intelligence");
    console.log("batmobile");
  default:
    console.log("abnormal");
}

// flows throufh, unless use of break.
// try with Spiderman
//try with different case

// Always use toLowerCase on strings

// hero.toLowerCase

// ternary operator
//-------------------

let a = 1,
  b = "1";

let result = a == b ? "equal" : "inequal";

console.log(result);

// inline without variable
console.log(a == b ? "equal" : "inequal");

//===
//-----

// checks the datatype
console.log(a === b ? "equal" : "inequal");

// !=
///

result = a != b ? "not equal" : "not inequal";

console.log(result);
