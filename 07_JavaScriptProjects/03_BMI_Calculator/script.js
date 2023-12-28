const form = document.querySelector("form");
//console.log(form);
// this usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const message = document.querySelector("#message");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a height${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      message.innerHTML = "You are under weigt";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message.innerHTML = "You have normal weight";
    } else {
      message.innerHTML = "You are over weigt";
    }
  }
});
