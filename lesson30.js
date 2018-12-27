// Lesson30 = Array Methods 5:47:42
// =================================


let names = ['david', 'eddie', 'alex', 'michael'];
let others = ['sammy', 'gary', 'wolfgang', 'mark'];
let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 31, 55];


const combine = lost.concat(fibonacci);
//console.log(combine);

//console.log(fibonacci.join('~'));

// push, pop

/* console.log(lost.pop());

console.log(lost.shift());
console.log(lost);

lost.unshift(1, 2, 3, 4);
console.log(lost); */

//console.log(names.reverse());

//console.log(names.sort());


//console.log(others.indexOf('mark'));

//console.log(combine);
//console.log(combine.lastIndexOf(1));

// map

const filtered = combine.filter((x) => { if (x <= 15) return x; });
//console.log(filtered);

//names.forEach((x) => console.log(`hi ${x}`));

console.log(filtered.every((num) => num < 10));

console.log(filtered.every((num) => num < 16));


console.log(filtered.some((num) => num < 10));

let course = `Setting Up the Development Environment 11:38
Basic JavaScript Syntax 23:53
Variables 37:14
Data Types 51:49
Type Coercion and Conversion 57:34
Expressions and Operators 1:06:25
Arrays 1:23:40
Function Declaration 1:34:54
Function Expressions 1:44:41
Decision Statements 1:56:44
Iteration Statements 2:11:29
Basics of Scope 2:23:54
Returning Functions from Functions 2:31:41
Object Literals 2:41:58
Module Pattern and Revealing Module Pattern 3:02:26
Closures 3:20:31
this Keyword 3:28:38
Destructuring 3:52:52
String Template Literals 4:00:31
Regular Expressions 4:07:22
Built-In Natives 4:17:56
Constructor Function Calls with the new Keyword 4:30:50
Objects and the Prototype Chain 4:40:20
JavaScript Classes 4:58:27
Arrow Functions 5:12:21
Truthy and Falsy Values 5:23:32
null Type 5:28:41
Date Objects 5:33:03
String Methods 5:38:53
Array Methods 5:47:42
Error Handling with Try Catch 6:00:30
Understanding the Document Object Model 6:17:34
Working with DOM Nodes 6:38:56
Course Conclusion 6:52:39`;

console.log(course.split('\n'));

course.split('\n').map((x, i) => console.log('Lesson' + i + ' = ' + x));