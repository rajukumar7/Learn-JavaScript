const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, Cryptography, Network

  setTimeout(function () {
    console.log("Async task is completed");
    resolve(); // resolved is a function that is called when promises is successful
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promises consumed");
});

// 2nd

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  // promiseTwo is not stored in any function so we have to use IIFE
  console.log("Async 2 resolved");
});

// 3rd

const promiseThiree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "rajukumar", email: "raju@gmail.com" }); // mostly we passed objects{} here, we can also pass array[] and function()
  }, 1000);
});

promiseThiree.then(function (user) {
  console.log(user); // { username: 'rajukumar', email: 'raju@gmail.com' }
  // console.log(user.username); // rajukumar
  // console.log(user.email); // raju@gmail.com
});

// 4th
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "rajukumar", password: "1475" });
    } else {
      reject("ERROR: 404 Page not pound");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    // here I used arrow function
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // this is called chaining
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promises is either resolved or rejected"));

// 5th promise with async and await
// async and await can not handle error directly
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", pass: "12345" });
    } else {
      reject("ERROR: Something went wrong!");
    }
  }, 1000);
});

// now using async and await -> here catch is not proper working with async
// async function consumePromiseFive() {
//   const response = await promiseFive;
//   console.log(response);
// }

// using try and catch
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// fetch data using API

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     // const data = response.json();
//     const data = await response.json(); // use await before response
//     console.log(data);
//   } catch (error) {
//     console.log("ERROR", +error);
//   }
// }

// getAllUsers();

// Now the same task performed with then()
fetch("https://api.github.com/users/rajukumar7")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//   The fetch() method takes one mandatory argument,
//   the path to the resource you want to fetch.
//   It returns a Promise that resolves to the Response to
//   that request — as soon as the server responds with
//   headers — even if the server response is an HTTP error status.
//   You can also optionally pass in an init options
//   object as the second argument (see Request).
