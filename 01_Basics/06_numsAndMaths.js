const score = 400;
console.log(score);
400;

const balance = new Number(75);
// console.log(balance); // [Number: 75]

// console.log(balance.toString().length); // 2
// console.log(balance.toFixed(2)); // 75.00
// console.log(balance.toFixed(3)); // 75.000

// const otherNum = 23.8759;

// console.log(otherNum.toPrecision(3)); // 23.9

// const otherNumber = 123.8759;
// console.log(otherNumber.toPrecision(3)); // 124

// console.log(otherNumber.toPrecision(4)); // 123.9

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-US")); //1,000,000
// console.log(hundreds.toLocaleString("en-IN")); //10,00,000

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// ********************Maths******************
// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.6)); // 5
// console.log(Math.floor(4.6)); // 4
// console.log(Math.min(4, 5, 2, 5, 8, 0)); // 0
// console.log(Math.max(4, 5, 2, 5, 8, 0)); // 8

console.log(Math.random()); //
console.log(Math.random() * 10); //
console.log(Math.random() * 10 + 1); //
console.log(Math.floor(Math.random() * 10) + 1); //

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //
