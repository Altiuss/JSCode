// First level: 1. Напишите функцию, которая принимает в качестве аргумента имя (строку),
//  а возвращает сообщение в формате:
// Dear ИМЯ, welcome. Выведите результат в консоль.
//  Запишите функцию в двух форматах (function declaration и arrow function).

function returnString(name) {
  return `Dear ${name}, welcome`;
}

const str = (name) => `Dear ${name}, welcome`;

console.log(returnString("Aigars"));
console.log(str("Aigars"));

// 2.Напишите функцию, которая принимает в качестве аргументов два значения:
//  имя и возраст. Если переданный возраст меньше 18,
//   то функция возвращает сообщение в формате: Dear ИМЯ, you are younger than 18.
//    Если возраст больше или равен 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are adult.
// Запишите функцию в двух форматах (function declaration и arrow function).

function returnString1(name, age) {
  let message;
  if (age < 18) {
    message = `Dear ${name}, you are younger than 18. `;
    return message;
  } else {
    message = `Dear ${name}, you are adult. `;
    return message;
  }
}
console.log(returnString1("Aigars", 18));
const mess = (name, age) =>
  age < 18
    ? `Dear ${name}, you are younger than 18. `
    : `Dear ${name}, you are adult. `;

console.log(mess("Olga", 17));

// Second level: 3. Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения.
//  Значение второго аргумента должно быть указано по умолчанию 2.
//  Запишите функцию в двух форматах (function declaration и arrow function).

function returnRezult(num, num1 = 2) {
  return num * num1;
}
console.log(returnRezult(17));

const mult = (num, num1 = 3) => num * num1;

console.log(mult(17));

// 4.Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее значение.
//  Выведите результат в консоль. Предложите два варианта решения.
//  Запишите функцию в двух форматах (function declaration и arrow function).

function returnMin(num, num1) {
  if (num < num1) {
    return num;
  } else {
    return num1;
  }
}

console.log(returnMin(56, 23));

const min = (num, num1) => Math.min(num, num1);

console.log(min(98, 13));
