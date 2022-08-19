const arr = [12, 3, 32, 33, 5, 32, 34];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(arr[i]);
//   }
// }
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr[i] = arr[i] * -1;
//   }
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     arr[i] += 1;
//     // console.log(arr);
//   }
//   //   console.log(arr);
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] * arr[i] < 1000) {
//     console.log(arr[i]);
//   }
// }

// let sum = 0 ;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sumEven += arr[i];
//   } else {
//     sumOdd += arr[i];
//   }
// }
// console.log("sumEven:", sumEven);
// console.log("sumOdd:", sumOdd);

// let sumPos = 0;
// let sumNeg = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     sumPos += arr[i];
//   } else {
//     sumNeg = sumNeg + arr[i] * -1; // Math.abs(arr[i]
//   }
// }
// console.log("sumPos", sumPos);
// console.log("sumNeg", sumNeg);

// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }
// console.log(maxNum);

// написать цикл, который находит индекс максимального числа
// если максим альных чисел несколько, то в мы сохраняем индекс
// первого максимального числа

// let maxRezult = arr[0];
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxRezult) {
//     maxRezult = arr[i];
//     maxIndex = i;
//   }
// }

// console.log(maxIndex);

let maxRezult = arr[0];
let predmaxRezult = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxRezult) {
    predmaxRezult = maxRezult;
    maxRezult = arr[i];
  } else if (arr[i] > predmaxRezult) {
    predmaxRezult = arr[i];
  }
}

console.log(predmaxRezult);
