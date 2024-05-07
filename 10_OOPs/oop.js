const user = {
  username: "raju",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Get user details from databese");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username); //raju
// console.log(user.getUserDetails()); // function call
// console.log(this); // {}

// Constructor
// const promiseOne = new Promise() // here new is the constructor function
// const date = new Date() // here new is the constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  // we can also write method or function
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this; // if here return this is not written then that case it return this implecitely
}

// const userOne = User("raju", 7, true);
// const userTwo = User("Abc", 3, false); // its override the userOne value

// Now solve the overriding problem using new keyword
const userOne = new User("raju", 7, true);
const userTwo = new User("Abc", 3, false);
// console.log(userOne); // User { username: 'raju', loginCount: 7, isLoggedIn: true }
// console.log(userTwo); // User { username: 'Abc', loginCount: 3, isLoggedIn: false }

// 1. Note:- When we use new keyword then firstly one empty object {} created, that is called instance
// 2. Note:- Cunstructor function is called due to new keyword
// 3. Note:- All arguments which is written in function or object that is injected inside this keyword
// 4. Note:- All the value got in function

console.log(userOne.constructor);
