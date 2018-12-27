//Lesson19 = String Template Literals 4:00:31
//============================================
//template literals

let name = 'bob';

console.log(`hi ${name}`)

// multiple lines
let sentence = `This is really a convenience.
    You probably will never want to do something
    quite like this. You might choose to put
    long passages of text into an external file
    and load it somehow`;

console.log(sentence);

//preserves indentation and linefeeds

// interpolation

function getReasonCount() { return 1; }

let interpolation = `Give me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this. `;

console.log(interpolation);