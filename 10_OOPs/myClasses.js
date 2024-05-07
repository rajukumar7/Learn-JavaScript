ES6;
class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}xyz`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const pass = new user("raju", "raju@gmail.com", 1475);
console.log(pass.encryptPassword());
console.log(pass.changeUsername());

// behind the scene

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

user.prototype.encryptPassword = function () {
  return `${this.password}xyz`;
};

const myData = new user("kumar", "kumar@gmail.com", 1475);
console.log(myData.encryptPassword());
console.log(myData.changeUsername());
