// Дан массив
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
// Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).

// const redoArray = (array) => {
//   let newArray1 = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 100) {
//       newArray1.push(array[i]);
//     }
//   }
//   return newArray1;
// };
// console.log(redoArray(array));

// let newArray = [];
// array.forEach((el) => {
//   if (el < 100) {
//     newArray.push(el);
//   }
//   return newArray;
// });
// console.log(newArray);

// Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и метод .forEach).

// const makeArray = (array) => {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// };
// console.log(makeArray(array));

// let newArray1 = [];
// array.forEach((el) => {
//   if (el % 2 === 0) {
//     newArray1.push(el);
//   }
//   return newArray1;
// });
// console.log(newArray1);

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).

// const makeArray = (array) => {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 5 === 0 && array[i] % 10 !== 0) newArray.push(array[i]);
//   }
//   return newArray;
// };
// console.log(makeArray(array));

// let newArray1 = [];
// array.forEach((el) => {
//   if (el % 5 === 0 && el % 10 !== 0) {
//     newArray1.push(el);
//   }
// });
// console.log(newArray1);
