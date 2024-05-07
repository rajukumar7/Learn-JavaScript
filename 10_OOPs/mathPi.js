const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);
/* output
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
}
*/

// console.log(Math.PI); //3.141592653589793
// Math.PI = 5; // not changed
// console.log(Math.PI); // 3.141592653589793

// create you won object
// 1st way
const myObject = Object.create(null);

// 2nd way
const Books = {
  bookName: "Ramayan",
  author: "Valmiki",
  price: 1111,

  buyBook: function () {
    console.log("Book not bought");
  },
};

// console.log(Books); // { bookName: 'Ramayan', author: 'Valmiki', price: 1111 }

// console.log(Object.getOwnPropertyDescriptor(Books, "bookName"));
/* output
{
  value: 'Ramayan',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// Now change some proprety to descripter or not changable
Object.defineProperty(Books, "bookName", {
  writable: false,
  enumerable: false, // here bookName is false so that bookName is not iteratable and also we cant override it.
});

// console.log(Object.getOwnPropertyDescriptor(Books, "bookName"));
/* output
{
  value: 'Ramayan',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
// for (let [key, value] of Object.entries(Books)) {
//   console.log(`${key}: ${value}`);
// }

/*
Output
bookName: Ramayan
author: Valmiki
price: 1111
buyBook: function () {
    console.log("Book not bought");
  }

*/

for (let [key, value] of Object.entries(Books)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}

/*
bookName: Ramayan
author: Valmiki
price: 1111
*/

Books.bookName = "raju"; // not changed because it writable enumrable property is set false of Books object
console.log(Books.bookName);
