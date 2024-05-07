const User = {
  _email: "rk@g,mail.com",
  _password: "123abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._password = value;
  },
};

const obj = Object.create(User);
console.log(obj.email);
