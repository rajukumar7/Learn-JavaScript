class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  // getter
  // note gettre and setter work togather, otherwise it is throw error
  // getter and setter name should be the same as property name

  get email() {
    return this._email.toUpperCase();
  }

  set email(val) {
    this._email = val.toUpperCase(); // this is no to be returned satatament
  }
  get password() {
    return `${this._password.toUpperCase()}raju`;
  }

  set password(value) {
    // this._password = value;
    this._password = value.toUpperCase(); // here variable should be different from constructor parameter
  }
}

const obj = new User("rk@gmail.com", "kumar");
console.log(obj.password);
console.log(obj.email);
