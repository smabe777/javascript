// Lesson28 = Date Objects 5:33:03
// ==================================

let today = new Date();

let bob = new Date('December 7, 1969 07:01:23');
/* let bob = new Date('1969-12-07T07:01:23');
let bob = new Date(1969, 11, 6);
let bob = new Date (1969, 11, 6, 7, 1, 23)
 */
var elapasedTime = today - bob;
console.log(elapasedTime);

console.log(bob.getDate());

console.log(bob.getTime());

/* getMonth()
    getDay()

    getHours()
    getMinutes()
    getSeconds()
    getMilliseconds()
    */

