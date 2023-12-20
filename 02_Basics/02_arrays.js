const marval_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//marval_heros.push(dc_heros);
// console.log(marval_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marval_heros[3][1]);

//const allHeros = marval_heros.concat(dc_heros);
//console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spreade operator (...)
// const all_new_heros = [...marval_heros, ...dc_heros];

//console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//console.log(newArray); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

// const modifiedArray = newArray.flat(Infinity);
// console.log(modifiedArray); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

// console.log(Array.isArray("Rajukumar")); // false
// console.log(Array.from("Raju")); // [ 'R', 'a', 'j', 'u' ]
console.log(Array.from({ name: "raju" })); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
