class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createID() {
    return `123`;
  }
}

const userObj = new User("Raju");
// console.log(userObj.createID()); // not accessible because it is static
console.log(userObj.logMe());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

let techerObj = new Teacher("rajukumar", "rajukumar@gmail.com");
techerObj.logMe(); // Username: rajukumar
console.log(techerObj.createID()); // chile class also not able to access the parent class static method
console.log(techerObj); //
