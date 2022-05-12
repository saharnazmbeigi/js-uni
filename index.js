const clock = () => {
  var newText = document.createElement("h2");
  var newText2 = (newText.textContent = "if part");
  var newText3 = (newText.textContent = " else part");
  var newText4 = (newText.textContent = " else if part");
  var x = 7;

  if (x > 10) {
    document.getElementById("clock").innerHTML = newText2;
  } else if ((x = 8)) {
    document.getElementById("clock").innerHTML = newText3;
  } else {
    document.getElementById("clock").innerHTML = newText4;
  }
};

z = 8;
y = 9;
d = 3;
// if (z == 8 || y == 9) {
//   alert("hellloooooo!");
// }

// if (z == 8 && y == 9) {
//   alert("hellloooooo!");
//  }

// if ((z == 8 && y == 10) || d == 3) {
//   alert("hellloooooo!");
// }

// z == 8 ? alert("hiiiiii") : alert("byeeeeeeeeeeeeeeee");

///switch

// var u = 10;

// switch (u) {
//   case 1: {
//     alert("1");
//     break;
//   }
//   case 2: {
//     alert("2");
//     break;
//   }
//   case 3: {
//     alert("3");
//     break;
//   }
//   case 4: {
//     alert("4");
//     break;
//   }
//   //default
//   default: {
//     alert("Not Found");
//     break;
//   }
// }

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// document.getElementById("demo").innerHTML = "Today is " + day;

// ///for in

// const scores = [17, 19, 20, 18, 15, 14];
// for (const item in scores) {
//   console.log(item);
// }
// /* output :
// 0
// 1
// 2
// 3
// 4
// 5
// */

// // for of
// for (const item of scores) {
//   console.log(item);
// }
// /* output :
// 17
// 19
// 20
// 18
// 15
// 14
// */

// const iterable = "sahar";

// for (const value of iterable) {
//   console.log(value);
// }
// // "s"
// // "a"
// // "h"
// // "a"
// // "r"
// for (const val in iterable) {
//   console.log(val);
// }
