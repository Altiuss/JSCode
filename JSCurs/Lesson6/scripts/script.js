// const getsum = (name) => {
//   for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
//   }
// };
// getsum("hello");

// ---------------------------------------------------------------------------------------------------------------------------------------
// str = "hello worrld";
// let array = ["hello", 5, true, false, 23.5, "next", undefined, str];

// let lastSimbol = array[array.length - 1];
// console.log(array[array.length - 1]);
// console.log(lastSimbol[lastSimbol.length - 1]);

// ------------------------------------------------------------------------------------------------------------------------------------------
/*

Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропишите аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/

let ret = (array) => {
  if (array.length === 0) {
    return null;
  }
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
};
console.log(ret([]));
console.log(ret(["one", "two", "three"]));
