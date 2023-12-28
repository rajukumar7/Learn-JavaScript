const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const body = document.querySelector(".body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === "red") {
    //   document.body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   document.body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case "green":
        document.body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        document.body.style.backgroundColor = e.target.id;
        break;
      case "white":
        document.body.style.backgroundColor = e.target.id;
        break;
      case "red":
        document.body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        document.body.style.backgroundColor = e.target.id;
        break;
      default:
        document.body.style.backgroundColor = "grey";
    }
  });
});
