// function getLength(string) {
//   return string.length;
// }

// console.log(getLength("hello1"));

// let length = string => string.length;

// console.log(length("hello1"));

// function returnNumberPower(a, b = 2) {
//   return Math.pow(a, b);
// }
// console.log(returnNumberPower(10));

// let getExp = (a, b = 2) => Math.pow(a, b);

// console.log(getExp(5));

// function returnMathMax(a, b) {
//   return Math.max(a, b);
// }

// console.log(returnMathMax(9, 7));

// function returnMathMax1(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(returnMathMax1(7, 7));

// let mathMax = (a, b) => Math.max(a, b);

// console.log(mathMax(36, 9));

// let mathMax1 = (a, b) => {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// };
// console.log(mathMax1(97, 111));

// function sortNumber(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > a && b > c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// console.log(sortNumber(509, 117, 99));

// let sortNumber1 = (a, b, c) => {

//   if (a > b && a > c) {
//     if (b > c) {
//       console.log(a, b, c);
//     } else {
//       console.log(a, b, c);
//     }

//   } else if (b > a && b > c) {
//     if (a > c) {
//       console.log(b, a, c);
//     } else {
//       console.log(b, c, a);
//     }

//   } else {
//     if (a > b) {
//       console.log(c, a, b);
//     } else {
//       console.log(c, b, a);
//     }
//   }
// };
// console.log(sortNumber1(7, 3, 33));
// console.log(sortNumber1(783, 3, 337));
// console.log(sortNumber1(777, 3544, 33));
// console.log(sortNumber1(7, 3, 3398977));

// let sortNumber = (a, b, c) => {
//   if (a >= b && a >= c) {
//     if (b >= c) {
//       console.log(a, b, c);
//     } else {
//       console.log(a, c, b);
//     }
//   }

//   if (b >= a && b >= c) {
//     if (a >= c) {
//       console.log(b, a, c);
//     } else {
//       console.log(b, c, a);
//     }
//   }

//   if (c >= a && c >= b) {
//     if (a >= b) {
//       console.log(c, a, b);
//     } else {
//       console.log(c, b, a);
//     }
//   }
// };

// console.log(sortNumber(509, 117, 509));

let maxOfFive = (a, b, c, d, e) => {
  let max = a;
  if (b > a) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  if (max < d) {
    max = d;
  }
  if (max < e) {
    max = e;
  }
  return max;
};

console.log(maxOfFive(1, 2, 90, 4, 5));
