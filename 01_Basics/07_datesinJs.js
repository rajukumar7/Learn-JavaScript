// Dates

let myDate = new Date();
// console.log(myDate.toString()); //Thu Nov 09 2023 16:04:19 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Thu Nov 09 2023
// console.log(myDate.toLocaleString()); //9/11/2023, 4:04:19 pm
// console.log(myDate.toLocaleDateString()); // 9/11/2023

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// let myCreatedDateTime = new Date(2023, 0, 23, 5, 30);
// console.log(myCreatedDateTime.toLocaleString()); // 23/1/2023, 5:30:00 am

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString()); // 14/1/2023, 5:30:00 am

let myCreatedDate = new Date("05-15-2023");
//console.log(myCreatedDate.toLocaleString()); //15/5/2023, 12:00:00 am

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1699526864935
// console.log(myCreatedDate.getTime()); // 1684089000000
// console.log(Math.floor(Date.now() / 1000)); // 1699527018

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`;

newDate.toLocaleString("default", {
  weekday: "long", //
});
