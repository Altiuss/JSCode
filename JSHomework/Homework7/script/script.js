// ЗАДАЧА 1
// Дан массив с числами.
let arr1 = [1, -6, 4, 0, 9, -5, 16];
// Создайте новый массив, состоящий только из отрицательных чисел.
// Создайте новый массив, состоящий только из четных чисел.
// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.

// let arrK1 = arr1.filter((el) => el < 0);
// console.log(arrK1);

// let arrK2 = arr1.filter((el) => el % 2 === 0 && el !== 0);
// console.log(arrK2);

// let negatiNumber = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] < 1) {
//     negatiNumber += 1;
//   }
// }
// console.log(`In array ${negatiNumber} negativ numbers`);

// --------------------------------------------------------------------------------------------------------------------------

// ЗАДАЧА 2
// Дан массив с числами.
let arr2 = [1, -6, 4, 0, 9, -5, 16];

// Оставьте в нем только положительные числа. Затем  извлеките квадратный корень из этих чисел.

// let newArray1 = arr2.filter((el) => el > 0);

// let newArray = newArray1.map((el) => Math.sqrt(el));

// console.log(newArray);

// ------------------------------------------------------------------------------------------------------------------------------------

// ЗАДАЧА 3
// Дан массив из разных типов данных.
let arr3 = [8, "hello", true, false, "bye", 122, undefined, 15];
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)

// const arrayOfNummbers = arr3.map((el) => (typeof el !== "number" ? -1 : el));
// console.log(arrayOfNummbers);

// -------------------------------------------------------------------------------------------------------------------------------

// ЗАДАЧА 4
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
let array = [
  ["Максим", "Грибов", true],
  ["Антон", "Куликов", true],
  ["Светлана", "Иванова", false],
  ["Ольга", "Петрова", true],
  ["Сидр", "Сидоров", false],
];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

let trueArray = array.filter((el) => {
  for (let i = 0; i < el.length; i++) {
    if (el[i] === true) {
      return true;
    }
  }
});

let finishArray = trueArray.map((el) => {
  for (let i = 0; i < trueArray.lengt; i++) {
    if (el[i] === true) {
      return "true";
    } else {
      return el[i];
    }
  }
});

for (let i = 0; i < finishArray.length; i++) {
  console.log(finishArray[i]);
}
console.log(finishArray.toString());

// console.log(array.toString([], []));

// let arrTrue = array.filter((el) => {
//   for (let i = 0; i < el.length; i++) {
//     console.log(array[i]);
// for (let j = 0; j < [i].length - 1; j++) {
//   console.log(j);
//   if (j === true) {
//     return true;
//   }
// }
//   }
// });
// console.log(arrTrue.toString());

// for (let i = 0; i < arrTrue.length; i++) {
//   console.log(i);
// }
