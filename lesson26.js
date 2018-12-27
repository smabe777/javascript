// Lesson26 = Truthy and Falsy Values 5:23:32
// ===========================================

if (null) {} else {console.log('null is falsy')};
// false
// null
// undefined
// 0
// NaN
// ''
// ""

// Truthy : Not Falsy

// true
// {}
//[]
//'bob'
// new RegExp() -- new instance of an object
// any nonzero number, +-Infinity
if (Infinity) {console.log('infinity is truthy')};