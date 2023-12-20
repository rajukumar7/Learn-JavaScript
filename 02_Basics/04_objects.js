// Object singleton

//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// nested object
const regularUser = {
  email: "sammy@example.com",
  fullName: {
    userFullName: {
      firstName: "raju",
      lastName: "kumar",
    },
  },
};

// console.log(regularUser);
//console.log(regularUser.fullName); //{ userFullName: { firstName: 'raju', lastName: 'kumar' } }
//console.log(regularUser.fullName.userFullName); //{ firstName: 'raju', lastName: 'kumar' }
//console.log(regularUser.fullName.userFullName.firstName); // raju

// Merge two objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "c", 6: "d" };
//const obj3 = { obj1, obj2 };
//console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'c', '2': 'd' } } same as array

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj5 = Object.assign({}, obj1, obj2);
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// using spread operator
const obj3 = { ...obj1, ...obj2 };
//console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// when value come from databse , or array of object

const users = [
  {
    id: 1,
    email: "user@example.com",
  },
  {
    id: 2,
    email: "user@example.com",
  },
  {
    id: 3,
    email: "user@example.com",
  },
  {
    id: 4,
    email: "user@example.com",
  },
];

users[1].email;
// console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true
// console.log(tinderUser.hasOwnProperty("isLogged")); //false

// --------------------- dstructure----------------

const course = {
  courseName: "JavaScript",
  price: "499",
  courseTeacher: "Raju",
};

// course.courseTeacher // for avoiding to write many times
// console.log(course.courseTeacher); // Raju
// console.log(course.courseName); // JavaScript
// user dstructure
const { courseTeacher, courseName } = course;
// console.log(courseTeacher); // Raju
// console.log(courseName); // JavaScript

// we can change the name also

const { courseTeacher: teacher } = course;
console.log(teacher); //Raju

// APIs in JSON format

// Thsi is JSON Objects
// {
//     "name": "Raju",
//     "email": "raju@gmail.com",,
//     "city": "bettiah"
// }

// Thsi is Array of Objects
// [
//     {},
//     {},
//     {}
// ]
