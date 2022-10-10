let a = 10;

// setTimeout(() => {
//   a = 34;
//   console.log(a);
// }, 5000);

// console.log(a);

// let example = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((a = 34));
//   }, 2000);
// });
// // console.log(a);

// example.then(() => console.log(a));

const randNum = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a > 0.5) {
    resolve(a);
  } else {
    reject(a);
  }
});

randNum.then(
  (value) => console.log(`${value} >= 0.5`),
  (value) => console.log(`${value} < 0.5`)
);
