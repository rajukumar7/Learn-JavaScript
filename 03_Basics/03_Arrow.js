const user = {
  username: "raju",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

//user.welcomeMessage(); // raju, welcome to website
/* otuput after this inside function
raju, welcome to website
{
  username: 'raju',
  price: '999',
  welcomeMessage: [Function: welcomeMessage]
}
*/
//user.username = "sam"; // here contaxt is changed

/* otuput after this inside function
sam, welcome to website
{
  username: 'sam',
  price: '999',
  welcomeMessage: [Function: welcomeMessage]
}
*/
//user.welcomeMessage(); //sam, welcome to website

//console.log(this); // {} empty object

// function love() {
//   let username = "beauty";
//   console.log(this.username); // this is not work inside the function but it is working inside the object
// }
//love(); // undefined

// const love = function () {
//   let username = "beauty";
//   console.log(this.username); //
// };

// love(); // undefined

/**** Arrow Function******/
// const love = () => {
//   let username = "beauty";
//   comsole.login(this); // {} empty object
//   console.log(this.username); //
// };

// love(); // undefined

// const addNum = (num1, num2) => {
//   return num1 + num2; // explicit return
// };

// console.log(addNum(4, 3)); // 7

// implicit return
// const addNum = (num1, num2) => num1 + num2; // implicit return
// console.log(addNum(3, 5)); //8

// const addNums = (num1, num2, num3) => num1 + num2 + num3; // implicit return
// console.log(addNums(7, 5, 8)); //20

const addNums = (num1, num2, num3) => ({ username: "raju" });
console.log(addNums(7, 5, 8)); // { username: 'raju' }

// NOTE :- When we used curly brackets {} then we would have to explicitly return
//         When we used parentheses () then function return the implicitly returned
