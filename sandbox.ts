const character = "dj florien";
console.log(character);
const inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
})
const circ =(diameter:number) => {
    return diameter *Math.PI;
}
console.log("the circle of dj flo:",circ(75));
// array 
let names= ['florien', 'yvette', 'mathias','moses'];
names.push('toad');
// names.push(30);
console.log(names);
names.push("toad pole");
let numbers = [10, 20, 30, 40, 50];

numbers.push(25);
console.log("the numbers are:",numbers)

// object 

let ninja = {
    name: 'mathias',
    belt: 'red',
    age: 30
};
ninja.name = 'dj flo';
console.log('the getting one file:',ninja.name, 'the age is: ',ninja.age)

// declaration
let char: string;
let ag: number;
let isloggedin: boolean;


let mixed :(string|number|boolean)[] = [];
mixed.push(60)
mixed.push('yubile')
mixed.push(true)
console.log(mixed)

