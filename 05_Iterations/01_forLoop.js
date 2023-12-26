// for

for (let i = 1; i <= 10; i++) {
  const element = i;
  //console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop: ${j} and inner loop: ${i}`);
    //console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["a", "b", "c", "d", "e"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  console.log(`${element}`);
}

//break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 7) {
    console.log("7 detected");
    //break;
    continue;
  }
  console.log(`value of i is ${i}`);
}
