// Задан массив:
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.
// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.
// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.

arr.unshift(67);
console.log(arr);
arr.push(56);
console.log(arr);
let minArr = arr.filter((el) => el < 100);
console.log(minArr);
let minArr2 = arr.filter((el) => el % 10 === 7);
console.log(minArr2);

// 4. Найдите сумму чисел, которые меньше 100.
// 5. Найдите сумму чисел, которые заканчиваются на 7.

let minArr3 = arr.filter((el) => el < 100).reduce((total, el) => total + el);

console.log(minArr3);

let minArr4 = arr
  .filter((el) => el % 10 === 7)
  .reduce((total, el) => total + el);

console.log(minArr4);
