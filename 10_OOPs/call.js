function setUsername(username) {
  //complex DB call
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //   setUsername(username); // function is called but reference of execution context is deleted
  // setUsername.call(username); // here current context is deleted
  setUsername.call(this, username); // but here after passing this, it act as current context
  this.email = email;
  this.password = password;
}

const data = new createUser("ram", "ram@fb.com", "12345");
console.log(data);
