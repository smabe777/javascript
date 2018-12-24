// ITERATIONS

for (i = 0; i < 10; i++) {
  console.log(i);
}

// what do you think
// start with declaration + initialisation
//run block
// after block incremetn that value

let a = [4, 8, 16, 23, 42];

for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}
//proper way to iterate through an array

// use intellisense
for (let b = 0; b < a.length; b++) {
  const c = a[b];
  console.log(c);
}

// while loop

let x = 1;

while (x < 10) {
  console.log(x++);
}
// less rigid for the control of the iteration number

x = 1;
while (x < 10) {
  console.log(x++);
  if (x == 7) {
    break;
  }
}
// split lines , or 1 line for the break

//while snippet
