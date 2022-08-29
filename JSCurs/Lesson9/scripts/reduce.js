// let numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// let sum1 = numbers.reduce((total, el) => total + el, 0);

// console.log(sum1);

//Найти среднеарифмитическое всех элементов массиов

let nums = [3, 6, 7, 1];

let numsF1 = nums.reduce((total, el) => total + el) / nums.length;

console.log(numsF1);
