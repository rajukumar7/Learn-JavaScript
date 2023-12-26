const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

for (const key in myObject) {
  //console.log(key);
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["javascript", "C++", "Ruby", "Java", "python"];

for (const key in programming) {
  //console.log(key); // it give key only
  //console.log(programming[key]); // it gives vakue
}

// apply forin loop on map
const map = new Map();
map.set("IN", "India");
map.set("JP", "Japan");
map.set("R", "Rusia");

for (const key in map) {
  // not working because map is not iterable
  console.log(key); //
}
