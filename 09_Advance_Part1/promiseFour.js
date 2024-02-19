const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "rajukumar", password: "1475" });
    } else {
      reject("ERROR: 404 Page not found");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    // here I used arrow function
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // this is called chainig
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promises is either resolved or rejected"));
