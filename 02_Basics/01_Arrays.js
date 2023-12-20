// Arrays

const myArray = [1, 2, 3, 4, 5];
//const myHeros = ["shaktiman", "naagraj"];

const myArray2 = new Array(1, 2, 3, 4);
//console.log(myArray[1]); // 2

// Arrays method
// myArray.push(6);
// myArray.push(7);
// myArray.pop();
// myArray.unshift(9);
// myArray.shift();

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(9)); // -1
// console.log(myArray.indexOf(4)); // 3

const newArray = myArray.join();

// console.log(myArray); //
// console.log(typeof newArray); // string

// slice, splice

console.log("A ", myArray); //
const myArr = myArray.slice(1, 3);
console.log(myArr);
console.log("B ", myArr); //

const myArr2 = myArray.splice(1, 3);
console.log("C ", myArray2); //
console.log(myArr2);
