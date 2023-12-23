// console.log("R");
// console.log("A");
// console.log("J");
// console.log("U");
// console.log("K");
// console.log("U");
// console.log("M");
// console.log("A");
// console.log("R");

function printName() {
  console.log("R");
  console.log("A");
  console.log("J");
  console.log("U");
  console.log("K");
  console.log("U");
  console.log("M");
  console.log("A");
  console.log("R");
}

// printName; // this is called function reference,
// printName(); // this is called function execute

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function call
// addTwoNumbers(); //NaN
// addTwoNumbers(12, 5); // 17
// addTwoNumbers(1, "5"); // 15 (string)

// const result = addTwoNumbers(12, 5);

// console.log("Result = ", result); //Result =  undefined, because function addTwoNumbers nothing returns

function addTwoNumbers(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const result = addTwoNumbers(12, 5);
//console.log("Result = ", result); // Result =  17

// function loginUserMessage(username) {
//   return `${username} just logged in`;
// }

//console.log(loginUserMessage("Raju")); //Raju just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in

function loginUserMessage(username) {
  if (!username) {
    //if(username === undefined)
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

//console.log(loginUserMessage()); //Please enter a username
//undefined

function loginUserMessage(username = "sam") {
  if (!username) {
    //if(username === undefined)
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage()); // print default valur -> sam just logged in
// console.log(loginUserMessage("Raju")); // Raju just logged in

/// shopping cart

// function calculateCartPrice(amount) {
//   return amount;
// }

//console.log(calculateCartPrice(200)); // 200
//console.log(calculateCartPrice(200, 400)); // 200

// now fix this multiple argument problem with rest (...) operator

// function calculateCartPrice(...amount) {
//   return amount;
// }

// console.log(calculateCartPrice(200, 400)); // [ 200, 400 ]
// console.log(calculateCartPrice(200, 400, 500, 600)); // [ 200, 400, 500, 600 ]

// some times used like this
function calculateCartPrice(val1, val2, ...amount) {
  return amount;
}

// console.log(calculateCartPrice(200, 300, 400, 500)); //[ 400, 500 ]

// passing objects in functions
const user = {
  username: "raju",
  email: "raju@gmail.com",
};

function handleUserObject(anyObj) {
  console.log(`Username is ${anyObj.username} and email is ${anyObj.email}`);
}

handleUserObject(user); //Username is raju and email is raju@gmail.com

// const users = {
//   username: "raju",
//   emails: "raju@gmail.com",
// };

// handleUserObject(users); // Username is raju and email is undefined
// here directly passing the objects to the function  as an argument
handleUserObject({
  username: "sam",
  email: "sam@gmail.com",
}); // Username is sam and email is sam@gmail.com

// Passing the array in function
const arrNumber = [100, 200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(arrNumber)); // 200
console.log(returnSecondValue([100, 400, 300, 500])); // 400
