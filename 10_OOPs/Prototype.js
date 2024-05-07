// let nam = "raju";
// let myName = "raju     ";
// console.log(nam.length); // 4
// console.log(myName.length); //9 after adding aspace myName
// console.log(myName.trim().length); //4

// console.log(myName.trueLength); //undefined

let myHeros = ["Dhoni", "Virat", "Rohit"];

let heroPower = {
  virat: "drive",
  rohit: "pull",

  getViratPower: function () {
    console.log(`Virat power is ${this.virat}`);
  },
};

// Object.create - this is called factory funtion

Object.prototype.raju = function () {
  console.log(`raju is present is all objects`);
};

Array.prototype.heyRaju = function () {
  console.log(`Raju says hello!`);
};
// heroPower.raju(); // raju is present is all objects
// myHeros.raju(); // raju is present is all objects

// myHeros.heyRaju(); // Raju says hello!
// heroPower.heyRaju(); // no acess

// Inheritance
const user = {
  name: "raju",
  email: "raju@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  iaAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport, // this is called inheritance, this is older syntax of inhritance
};

// outside inheritance, this is also older syntax of inheritace
Teacher.__proto__ = user;

// Modern syntax of inheritance
Object.setPrototypeOf(TeachingSupport, Teacher); // hert TeachingSupport inherit the property of Teacher obj

// Now time to solve the above proble

const myName = "Reven      ";

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`)
  console.log(`True length is: ${this.trim().length}`);
};

myName.trueLenght(); // 5
"raju".trueLenght(); // 4
"chai aur code ".trueLenght(); // 13
