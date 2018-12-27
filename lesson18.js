//Lesson18 = Destructuring 3:52:52
//==================================

// UNPACKING - DESTRUCTURING

let a, b, c, d, e;

let names = ["david", "eddie", "alex", "michael", "sammy"];
/* 
[a, b, c, e, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */


/* let others;

[a, b, ...others] = names;

console.log(a);
console.log(b);
console.log(others); */


// sort of projection

let year, model;
({ year, model } = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);

let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    value: 5000
};

({ year, model } = car);

console.log(year);
console.log(model);

let interface = {
    func: function () { console.log('func'); },
    foo: function () { console.log('foo'); },
    bar: function () { console.log('bar'); }
}

let f;

({ f } = interface);

console.log(f);

