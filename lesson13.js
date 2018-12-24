//typeof = object

// Array : contains many elements
// Object : 1 data element with many properties

// Car : with array, just a list of brands
// Object : many properties
// encapsulation : keep properties and methods protected from global S
// no risk of clashing with same properties for another car

// use a code block
// object literal syntax
// :
// ,

let car = {
  make: "bmw",
  model: "741li",
  year: 2010,
  getPrice: function() {
    return 5000;
  },
  printDescription: function() {
    console.log(this.make + " " + this.model);
  }
};

// access : .
car.printDescription();
console.log(car.year);

// other way => dictionary

console.log(car["year"]);
//console.log(car[1]); new property
// keep on the .

var anotherCar = {};
anotherCar.whatever = "bob";
console.log(car.whatever);
// add properties on the fly

//chaining object -- Solving Global scope issues
var a = {
  myProperty: { b: "hi" }
};
console.log(a.myProperty.b);

var c = {
  myProperty: [{ d: "hi d" }, { e: "hi e" }, { f: "hi f" }]
};
console.log(c.myProperty[2].f);

let carlot = [
  { year: 2017, make: "Toyota", model: "4Runner" },
  { year: 2015, make: "BMW", model: "528i" },
  { year: 1982, make: "Buick", model: "Skylark" }
];

let contacts = {
  customers: [
    {
      firstName: "Bob",
      lastName: "Tabor",
      phoneNumber: ["012 225 225", "0478 25 25 25"]
    },
    {
      firstName: "Richard",
      lastName: "Boughton",
      phoneNumber: ["012 123 421", "0479 78 12 15"]
    }
  ],
  employees: [
    {
      firstName: "Emile",
      lastName: "Dupain",
      phoneNumber: ["03 558 587", "0495 02 42 41"]
    },
    { firstName: "Georges", lastName: "Soil", phoneNumber: ["02 258 45 65"] },
    {
      firstName: "Bill",
      lastName: "Tess",
      phoneNumber: ["02 225 45 45", "0497 41 55 78"]
    }
  ]
};

// Similar to JSON
// But there are differences
