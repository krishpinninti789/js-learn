// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// z();

function x() {
  let i = 0;
  setInterval(() => {
    i += 1;
    console.log(i);
  }, 1000);
}
x();
