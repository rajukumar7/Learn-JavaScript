// singleton
// object.create

// object literals
const mySym = Symbol("key1");

const jsUser = {
  name: "raju",
  "full Name": "Raju Kumar",
  [mySym]: "myKey1", //without [] brackets it is string
  age: 23,
  city: "Bettiah",
  email: "rajukumar@gmail.com",
  isLoggedIn: false,
  lastLogin: ["Monday", "Tuesday", "Wednesday", "Thursday"],
};

// access the objectd elements
// console.log(jsUser.email); // rajukumar@gmail.com
// console.log(jsUser["email"]); // rajukumar@gmail.com
//console.log(jsUser.full Name); // error
// console.log(jsUser["full Name"]); // rajukumar@gmail.com
// console.log(jsUser.mySym); // myKey1
// console.log(typeof jsUser.mySym); // myKey1 (string) not a symbol
// console.log(jsUser[mySym]); // myKey1

jsUser.email = "raju.kumar@workline.hr";
//Object.freeze(jsUser); // it avoids the achanges in objects JsUser
jsUser.email = "rajukumar@google.com";
//console.log(jsUser); // rajukumar@google.

// jsUser.greeting = function () {
//   console.log("Hello Js User");
// };

jsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};

jsUser.greetingTwoTwo = function () {
  console.log(`${this.name}`);
};

//console.log(jsUser.greeting); //undefined
//console.log(jsUser.greeting()); // TypeError: jsUser.greeting is not a function
