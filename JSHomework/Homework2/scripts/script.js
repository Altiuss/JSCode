// First level: 1. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov    '.
//  Выведите переменную user в консоль, но без лишних пробелов по краям.

let user = "  Ivan Ivanov   ";
console.log(user.trim());

// Напишите программу, которая выводит в консоль рандомное/случайное число от 0 до 1
// и округляет его до третьего знака после точки. Воспользуйтесь методом toFixed().

let number = Math.random();
console.log(number.toFixed(3));

// Second level: 3. Выведите на экран первую и последнюю буквы предложения,
//  записанного в константу text (текст строки произвольный), в следующем формате:
// First: <первая буква строки>
// Last: <последняя буква строки></последняя>

let string = "Выведите на экран первую и последнюю буквы предложения";
console.log("First:" + string.charAt(0));
console.log(`First: ${string.charAt(0)}`);
console.log(`Last: ${string.charAt(string.length - 1)}`);
console.log("Last:" + string.charAt(string.length - 1));
