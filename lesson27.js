// Lesson27 = null Type 5:28:41
// ===============================
// null

// a variable that points to nothing

/* let a;

console.log(a);
console.log(typeof a); */

let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);
console.log(typeof result);
// This is a known JS bug, null should be of primitive type null
console.log(typeof null);
if (result === null) {
    console.log('no match was found');
}

/* They are not the same object (null!==undefined).
undefined is a property of the global object ("window" in browsers),
but is a primitive type and not an object itself. It's the default
value for uninitialized variables and functions ending without a
return statement. null is an instance of Object. */

// null is when we expect an object but our reference is pointing to none.