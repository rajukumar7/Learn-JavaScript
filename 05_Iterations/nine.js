const myNums = [1, 2, 3, 4, 5];
// const myTotal = myNums.reduce(function (accumaltor, currentValue) {
//   return accumaltor + currentValue;
// }, 0);

// console.log(myTotal); //15
// normal functions
// const myTotal = myNums.reduce(function (accumaltor, currentValue) {
//   console.log(`accumaltor: ${accumaltor} and currentValue: ${currentValue}`);
//   return accumaltor + currentValue;
// }, 0);

//console.log(myTotal); //15

// Arrow functions
const myTotal = myNums.reduce(
  (accumaltor, currentValue) => accumaltor + currentValue,
  0
);
console.log(myTotal); //15

const initialVal = 0;

const shoppingCart = [
  {
    itemName: "javascript course",
    price: 999,
  },
  {
    itemName: "Python course",
    price: 1999,
  },
  {
    itemName: "Java course",
    price: 3999,
  },
  {
    itemName: "Mobile dev course",
    price: 5999,
  },
  {
    itemName: "Data Science course",
    price: 9999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice); //22995
