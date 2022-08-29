// ЗАДАЧА 4
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
// Результат: ['Максим Грибов', 'Антон Куликов', 'Ольга Петрова']

// let array = [
//   ["Максим", "Грибов", true],
//   ["Антон", "Куликов", true],
//   ["Светлана", "Иванова", false],
//   ["Ольга", "Петрова", true],
//   ["Сидр", "Сидоров", false],
// ];

// let trueArray = array.filter((el) => {
//   for (let i = 0; i < el.length; i++) {
//     if (el[i] === true) {
//       return true;
//     }
//   }
// });

// let finishArray = trueArray.map((el) => `${el[0]} ${el[1]}`);

// console.log(finishArray);

// let array = [1, -6, 4, 0, 9, -5, 16];

//ИМПЕРАТИВНОЕ ПРОГРАММИРОВАНИЕ
// sakam ka veikt uzdevumu

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     newArray.push(array[i]);
//   }
// }

//ДЕКЛАРАТИВНОЕ ПРОГРАММИРОВАНИЕ
//Sakam kas jadara

// let newArray2 = array.filter((el) => el < 0);

// console.log(newArray);
// console.log(newArray2);

// Создайте функцию, принимающую массив и возвращающую массив с отрицательными числами

let arr = [1, 34, -10, 8, -5, -3];

// let newArr = [];
// const negativNums = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(negativNums(arr));

let newArr2 = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    newArr2.push(arr[i]);
  }
}

console.log(i);
