// Напишите функцию, которая принимает два числовых аргумента a и b (a > b),
// и выводит в консоль числа от a до b кратные 3.
// Пример 10, 3 => 9, 6, 3

// const returnNumber = (num1, num2) => {
//   let num3;
//   for (let i = num1; i > num2; i--) {
//     if (i % 3 === 0) console.log(i);
//   }
// };
// console.log(returnNumber(40, 20));

// Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 или 5. Выведите сумму в консоль.

// const returnNumber1 = (num1, num2) => {
//   let sum = 0;
//   for (let i = num1; i <= num2; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// };
// console.log(returnNumber1(0, 100));

//Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// const makeArray = (num1 = 0, num2 = 50) => {
//   const arr = [];
//   let index = 0;
//   for (let i = num1; i <= num2; i++) {
//     if (i % 5 === 0 && i !== 0) {
//       // arr[index] = i;
//       arr.push(i); //index++;
//     }
//   }
//   return arr;
// };
// console.log(makeArray());

// const makeArray1 = (num1, num2) => {
//   const arr = [];
//   let index = 0;
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 === 0 && i !== 0) {
//       arr[index] = i;
//       index++;
//     }
//   }
//   return arr;
// };

// console.log(makeArray1(0, 100));
const reverse = (arr) => {
  let reverse_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse_arr.push(arr[i]);
  }
  return reverse_arr;
};
console.log(reverse(["h", "e", "l", "l", "o"]));
