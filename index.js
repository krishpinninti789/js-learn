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

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();

// document.getElementById("clickme").addEventListener("click", counter);

// console.log("start");

// function x() {
//   setTimeout(() => {
//     console.log("Set Timeout running");
//   }, 5000);
// }

// x();

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("After 10 seconds");

// const area = (radius) => {
//   return Math.PI * radius * radius;
// };

// const perimeter = (radius) => {
//   return Math.PI * 2 * radius;
// };

// const radius = [1, 2, 3, 4];

// const calculate = (logic, radius) => {
//   const result = [];
//   for (i = 0; i < radius.length; i++) {
//     result.push(logic(radius[i]));
//   }
//   return result;
// };

// console.log(calculate(area, radius));

// console.log(calculate(perimeter, radius));

// const nums = [1, 2, 3, 4, 100, 7];

// console.log(nums.map((num) => num.toString(2)));

// console.log(nums.filter((num) => num % 2 === 0));

// console.log(
//   nums.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
//   }, 0),
// );

// console.log(
//   nums.reduce((acc, curr) => {
//     if (curr > acc) {
//       acc = curr;
//     }
//     return acc;
//   }, -Infinity),
// );

// const result = fetch("https://api.github.com/users/krishpinninti789");

// result
//   .then((user) => {
//     user.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// function createOrder(cartData) {
//   return new Promise((resolve, reject) => {
//     if (cartData.length === 0) {
//       reject("No cart is empty");
//     } else {
//       resolve({
//         paymentid: "3321",
//         cartData,
//       });
//     }
//   });
// }

// function proceedToPayment(orderData) {
//   return new Promise((resolve, reject) => {
//     if (orderData.paymentid === "3321") {
//       resolve("Proceeding to payment");
//     } else {
//       reject(new Error("OrderID is invalid"));
//     }
//   });
// }

// const cart = ["shoe", "kurta", "pencil"];
// // const cart = [];

// const result = createOrder(cart);

// result
//   .then((data) => {
//     const res = proceedToPayment(data);
//     res.then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function p1() {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       resolve("Promise 1");
//     } else {
//       reject(new Error("Promise 1 rejected"));
//     }
//   });
// }

// function p2() {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       setTimeout(() => {
//         resolve("Promise 2");
//       }, 5000);
//     } else {
//       reject(new Error("Promise 2 rejected"));
//     }
//   });
// }

// function p3() {
//   return new Promise((resolve, reject) => {
//     if (false) {
//       resolve("Promise 3");
//     } else {
//       reject(new Error("Promise 3 rejected"));
//     }
//   });
// }
// const result1 = Promise.all([p1(), p2(), p3()]);
// const result2 = Promise.allSettled([p1(), p2(), p3()]);
// const result3 = Promise.race([p1(), p2(), p3()]);
// const result4 = Promise.any([p1(), p2(), p3()]);

// console.log(
//   result1
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     }),
// );

// console.log(
//   result2
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     }),
// );

// console.log(
//   result3
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     }),
// );

// console.log(
//   result4
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err.errors);
//     }),
// );

// async function getData() {
//   return "Hello";
// }
// getData().then((res) => console.log(res));

function promise1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello");
    }, 4000);
  });
}

async function exec() {
  const p1 = await promise1();
  console.log("Hello royyyy");

  const p2 = await promise1();
  console.log("Hello 2nd time");
}

exec();
