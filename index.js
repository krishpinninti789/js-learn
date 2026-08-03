// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// z();

// function x() {
//   let i = 0;
//   setInterval(() => {
//     i += 1;
//     console.log(i);
//   }, 1000);
// }
// x();

// function x() {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

// function x() {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i);
//   }
//   console.log("hi js");
// }

// x();

// function outer(b) {
//   var a = 10;
//   function inner() {
//     var a = 30;
//     console.log(a, b);
//   }
//   inner();
// }

// var a = 20;

// outer("Hello");

// console.log(a);

// setTimeout(() => {
//   console.log("Hello");
// }, 5000);

// function x() {
//   console.log("x");
//   y();
// }

// function y() {
//   console.log("y");
// }

// x();

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

document.getElementById("clickme").addEventListener("click", counter);
