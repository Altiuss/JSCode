let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];

// Добавьте в начало массива число 53. Затем удалите из конца массива последние 2 числа.
//  Далее решайте задачи с обновленным массивом.

arr.unshift(53);
arr.pop();
arr.pop();
console.log(arr);

// ------------------------------------------------------------------------------------------------

// Сформируйте массив из положительных чисел меньше 50.
// Найдите сумму всех положительных чисел меньше 50.

let newArr = arr
  .filter((el) => el > 0 && el < 50)
  .reduce((total, el) => total + el);

console.log(newArr);

// ----------------------------------------------------------------------------------------------

// Second level: 3. Сформируйте массив, состоящий только из положительных чисел,
//  кончающихся на 3. Найдите сумму всех положительных чисел, кончающихся на 3.

let newArr1 = arr
  .filter((el) => el > 0 && el % 10 === 3)
  .reduce((pr, val) => pr + val);
console.log(newArr1);

// ---------------------------------------------------------------------------------------------------

// Сформируйте массив, в котором положительные числа на строку '+',
//  а отрицательные числа - на '-'

let lastArr = arr.map((el) => (el >= 0 ? "+" : "-"));
console.log(lastArr);
