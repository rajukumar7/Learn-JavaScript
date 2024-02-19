//  5th Promise using async and await

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "JavaScript", password: "1234567" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 2000);
});

// now using async and await

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive(); // async function call

// fetch data using API with async function
async function getMyData() {
  try {
    const response = await fetch("https://api.github.com/users/rajukumar7");
    // const data = response.json();
    const data = await response.json(); // use await before response
    console.log(data);
  } catch (error) {
    console.log("Err:", +error);
  }
}

//getMyData();

fetch("https://api.github.com/users/rajukumar7")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
