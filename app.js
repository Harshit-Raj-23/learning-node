require('./xyz.js');

// const {x, calculateSum} = require('./calculate/sum.js');
// const {calculateMultiply} = require('./calculate/multiply.js');

const util = require("node:util")

const { calculateSum, calculateMultiply } = require('./calculate');

const data = require('./data.json');

var name = "Harshit Raj"

var a = 10;

var b = 20;

console.log(name);

// console.log(a+b);

// console.log(global);

// console.log(this); // empty object

// console.log(globalThis);

calculateSum(a,b)

calculateMultiply(a,b)

// console.log(x);

console.log(data);
