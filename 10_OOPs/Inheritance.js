class User {
  constructor(username) {
    this.username = username;
  }

  logIn() {
    console.log(`USERNAME: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const raju = new Teacher("Raju Kumar", "rajukumar@gmail.com", "1234");
raju.addCourse(); // A new course was added by Raju Kumar
raju.logIn(); // Raju Kumar

const userObj = new User("Virat");
//userObj.addCourse(); // Not accesible
userObj.logIn(); // USERNAME: Virat

console.log(raju === userObj); // false
console.log(raju === User); // false

console.log(raju instanceof Teacher); // true
console.log(raju === User); // false
