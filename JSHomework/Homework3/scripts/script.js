// First level: 1. Напишите функцию, которая принимает в качестве аргумента строку,
//  а возвращает ее длину. Выведите результат в консоль.

function returnStringLength(string) {
  return string.length;
}
console.log(returnStringLength("Hello!"));

// --------------------------------------------------------------------------------

// 2.Напишите функцию, которая принимает два аргумента (основание степени и саму степень)
//  и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

function returnNumberPower(a, b = 2) {
  return Math.pow(a, b);
}
console.log(returnNumberPower(10));

// --------------------------------------------------------------------------------

// Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение.
//  Выведите результат в консоль.
//  Предложите два варианта решения (через условный оператор и Math.max()).

function returnMathMax(a, b) {
  return Math.max(a, b);
}

console.log(returnMathMax(9, 7));

function returnMathMax1(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(returnMathMax1(7, 7));

// ----------------------------------------------------------------------------

// Second level: 4. Напишите функцию, принимающую в качестве аргументов три числа
//  и выводящую в консоль отсортированные числа по убыванию.
//  Используйте условный оператор.

let sortNumber = (a, b, c) => {
  if (a > b && a > c) {
    if (b > c) {
      console.log(a, b, c);
    } else {
      console.log(a, c, b);
    }
  }

  if (b > a && b > c) {
    if (a > c) {
      console.log(b, a, c);
    } else {
      console.log(b, c, a);
    }
  }

  if (c > a && c > b) {
    if (a > b) {
      console.log(c, a, b);
    } else {
      console.log(c, b, a);
    }
  }
};

console.log(sortNumber(509, 117, 99));

// ----------------------------------------------------------------------------

// Напишите функцию, принимающую в качестве аргументов пять чисел
//  и выводящую в консоль наибольшее из них. Используйте условный оператор

function sortNumber1(a, b, c, d, e) {
  if (a > b && a > c && a > d && a > e) {
    return a;
  } else if (b > a && b > c && b > d && b > e) {
    return b;
  } else if (c > a && c > b && c > d && c > e) {
    return c;
  } else if (d > a && d > b && d > c && d > e) {
    return d;
  } else {
    return e;
  }
}

console.log(sortNumber1(3, 4, 5, 6, 7));
