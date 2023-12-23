// let email = "test@example";
// if (email) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy values are

//false, 0, -0, BigInteger 0n, "", null,undefined, NaN

// truthy values are
// "0", 'false'," ",[], {}, function(){}

// const userEmail = [];
// if (userEmail.length === 0) {
//   console.log("Array is empty ");
// }

// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//   console.log("Object is empty");
// }

// Nullish collection opeators (??): null undefined

let val1;
// val1 = 5 ?? 10;
// console.log(val1); //5
// val1 = null ?? 10;
// console.log(val1); // 10

// val1 = undefined ?? 15;
// console.log(val1); // 15

val1 = null ?? 5 ?? 30;
console.log(val1); //5

// Ternary operator

// condition ? true : false

let age = 17;
age >= 18
  ? console.log("you are eligible for vote")
  : console.log("you are not eligible for vote");
