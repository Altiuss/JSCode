// const lst = [12, 4, 32, 3, 45, 43];

// используя метод forEach выведите квадраты этих чисел в консоль

// lst.forEach((el) => console.log(Math.pow(el, 2)));

// --------------------------------------------------------------------------------------------------------

// используя forEach выведите в консоль только четные числа

// lst.forEach((el) => {
//   if (el % 2 === 0) console.log(el);
// });

// --------------------------------------------------------------------------------------------------------------

// пользуясь методом map реализуйте новый массив, в котором все отрицательные значения были преобразованы в положительные

// let num1 = lst.map((el) => (el < 0 ? -el : el));

// let num = lst.map((el) => {
//   if (el < 0) {
//     el = el * -1;
//     return el;
//   } else {
//     return el;
//   }
// });

// console.log(num);
// console.log(num1);

// --------------------------------------------------------------------------------------------------------------
// с использование метода map реализуйте процесс, который формирует новый массив
// состоящий из булевых значений
// если число в изначальном массиве четное, то в результирующий добавляется true, в ином случае false

const lst = [2, 3, 8, 10];

// let newArr1 = lst.map((el) => el % 2 === 0);

// let newArr = lst.map((el) => {
//   if (el % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(newArr);
// console.log(newArr1);

// -----------------------------------------------------------------------------------------------------------------------

// используя метод filter сформировать массив, который состоит только их чисел, меньше 10

// let smalArray = lst.filter((el) => el < 10);
// console.log(smalArray);

let rez = lst.reduce((pr, val) => pr + val, 1000);

console.log(rez);

// ------------------------------------------------------------------------------------------------------------------------

// используя метод reduce найдите произведение всех чисел массива

let rez1 = lst.reduce((pr, val) => pr * val);
console.log(rez1);

// -----------------------------------------------------------------------------------------------------------------------

// используя метод reduce найдите максимальное значение в массиве

let rez2 = lst.reduce((pr, val) => (pr > val ? pr : val));

console.log(rez2);

// -------------------------------------------------------------------------------------------------------------------------

// доработать процесс reduce, чтобы он выводил сумму четных чисел

let rez3 = lst.reduce((pr, val) => (val % 2 === 0 ? pr + val : pr + 0));

console.log(rez3);