// var a = 10;
// let b = 20;
// const c = 30;
// all the above variavle called glable variable or global scoped variable

if (true) {
  // {} is called as scope
  // inside {} braces all the variable called block scope or local variable
  let x = 10;
  const y = 20;
  var a = 30;
}

// console.log(x); // not accessible
// console.log(y); // not accessible
console.log(a); // 30

// Nested scope
function one() {
  const username = "raju";

  function two() {
    const website = "YouTube";
    //console.log(username);
  }

  //console.log(website); // not accessible
  two(); // raju
}

//one(); //

if (true) {
  const username = "raju";
  if (username === "raju") {
    const website = " YouTube";
    //console.log(username + website);
  }
  //console.log(website); // not accessible
}

//console.log(username); //

// ********* Hoisting ********************************

// console.log(addOne(6)); // 7 hoisting is worked here

// function addOne(num) {
//   return num + 1;
// }

console.log(addTwo(5)); // Cannot access 'addTwo' before initialization, here hoisting is not work because function is assigned into variable.
const addTwo = function (num) {
  return num + 2;
};
