const name = "raju";
const repoCount = 50;

// console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("RajuKumar-rk-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(2)); //J
// console.log(gameName.indexOf("K")); // 4

// const newString = gameName.substring(0, 6);
// console.log(newString); // RajuK

const anotherString = gameName.slice(-10, 4);
console.log(anotherString); //

const newStringOne = "     RajuK    ";
console.log(newStringOne); //      RajuK
console.log(newStringOne.trim()); // RajuK -> without spaces

const url = "https://rajukumar.com/rk%20kumar";
console.log(url); // https://rajukumar.com/rk%20kumar
console.log(url.replace("%20", "-")); //https://rajukumar.com/rk-kumar

console.log(url.includes("raju")); // true
console.log(url.includes("sam")); // false

console.log(gameName.split("-")); // [ 'RajuKumar', 'rk', 'com' ]
