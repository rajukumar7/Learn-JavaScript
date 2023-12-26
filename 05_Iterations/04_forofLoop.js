// forof loop -> this loop will know when condition is going to be false

// ["", "", "", ""]
// [{},{},{},{},{},{}]

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";

for (const i of greetings) {
  console.log(`Each char is ${i}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("JP", "Japan");
map.set("R", "Rusia");

console.log(map); //Map(3) { 'IN' => 'India', 'JP' => 'Japan', 'R' => 'Rusia' }
for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// Objects

const myObj = {
  game1: "BGMI",
  game2: "FreeFire",
  game3: "Poker",
};

for (const [key, value] of myObj) {
  console.log(key, ":-", value);
}

// here forof is not working for objects because myObj is not iterable
