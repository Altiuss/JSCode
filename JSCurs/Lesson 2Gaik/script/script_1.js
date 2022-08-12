function pow(value, p) {
  const result = value ** p;
  return result;
}

// const cat_sum = pow(3, 2) + pow(4,2);
// const hip = pow(cat_sum, 0.5);

// const hip = pow(pow(3, 2) + pow(4, 2), 0.5);
// console.log(hip);

// const result_1 = pow(12, 2);
// const result_2 = pow(12, 3);
// const result_3 = pow(12, 4);
// const result_4 = pow(12, 5);

// console.log(result_1);
// console.log(result_2);
// console.log(result_3);
// console.log(result_4);

// function returnMaxNumber(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }
// console.log(returnMaxNumber(9, 8));

// function returnBoolean(num) {
//   return num >= 0;
// }
// console.log(returnBoolean(0));

// function makeTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// console.log(makeTriangle(2, 3, 6));

function returnRandomNumber() {
  return 1 + Math.round(Math.random() * 5);
}

console.log(returnRandomNumber());
