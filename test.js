let ferrari = [ {driver : 'vettel', speed : 110, nervosity:11},
{driver : 'leclerc', speed : 113, nervosity:3}];
let vettel = ferrari[0];
let leclerc = ferrari[1];
console.log('%c test','color:orange;font-weight:bold')
console.log (vettel);
console.table ([vettel, leclerc])
console.table ([1, 3])
console.time('start');
for(i = 0 ; i< 1000000; i++){

}
console.timeEnd('start');

// you have 2 dice. Create all the possibilities without permutations and show them as couples
// (4,3) , (6,6) etc
// use console.table to display the result

let diceResult=[];
for (dice = 1; dice <= 6; dice++){
    for (dice2 = dice; dice2 <= 6; dice2++){
            diceResult = [...diceResult, [dice, dice2]];
    }
   
}
console.table(diceResult);

// sort an array of numbers in decreasing order

let arr = [23,222,34,1,256];

console.log(arr.sort((x, y) => y - x));

console.log(`This is the array : ${arr}`);

console.log(function() { console.log([this]);});
function test(){
    return this;
}
//console.log(test());
let squad = { 
    name:"AML-TOM",
    members : ["Michel", "Georges", "Vandross", "Riccardo"]
}
console.log(squad.name);
squad.scrum = "Georges";
squad.getCapacity= (days) => {
    return days * squad.members.length;
}

squad.getCapacity2= function(days) {
    return days * this.members.length;
}
console.log(squad.getCapacity(25));

console.log(test.call(squad));

function test2(){
    console.log(`${this.firstname}, ${this.lastname}`);
}

let testObj={
    firstname : "Yo",
    lastname : "Nde",
    test : test2
}

testObj.test();
