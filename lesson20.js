// Lesson20 = Regular Expressions 4:07:22
//========================================

let pattern = /xyz/; // specific letters

console.log(pattern);

console.log(typeof pattern);

let value = 'This is xyz a test. Please xyz do this stuff;';

console.log(pattern.test(value)); // yes/no we find that pattern in value
console.log(value.replace(pattern, 'just')); // replace

console.log(value.match(pattern));

var match = value.match(pattern);

console.log(match.index);

let ibanPattern = /[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/g;

let sentence = 'My IBAN is PT50 0002 0123 1234 5678 9015 1 catch it';// with a regex and these one PT50000201231234567890151 too !';

console.log(sentence.match(ibanPattern));

//developer.mozilla.org -- Regular Expressions