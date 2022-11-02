// const lst = [-12, -4, -32, -45, -43, -23];

// lst.forEach((el) => console.log(el));

// function forEach(lst, callback) {
//   for (let i = 0; i < lst.length; i++) {

//     // callback(lst[i], i, lst);
//   }
// }

// forEach(lst, (el) => console.log(el));

// lst.forEach((el) => {
//   if (el % 2 == 0) {
//     console.log(el);
//   }
// });

// let a = lst[0];

// lst.forEach((el) => {
//   if (el > a) {
//     a = el;
//   }
// });
// console.log(a);

// const result = lst.map((el) => el ** 2);
// console.log(result);

// function map(lst, callback) {
//   const new_array = [];
//   for (let i = 0; i < lst.length; i++) {
//     const new_elem = callback(lst[i], i, lst);
//     new_array.push(new_elem);
//   }
//   return new_array;
// }

// console.log(map(lst, (el) => el ** 2));

// const rez = lst.map((el) => {
//   if (el < 0) {
//     el = el * 1;
//   }
// });
// console.log(rez);

// function plus(value) {
//   if (value < 0) {
//     value *= -1;
//   }
//   return value;
// }

// const rez = lst.map(plus);
// console.log(rez);

// const rez1 = lst.map((el) => {
//   if (value < 0) value *= -1;
// });

// console.log(rez1);

// const rez = lst.map((el) => (el % 2 === 0 ? el : el + 1));
// console.log(rez);

// const rez = plus(value) {
//   if (value % 2 !== 0) {
//     value += 1;
//   }
//   return value;
// }
// console.log(rez);

// const rez1 = lst.map((el) => (el < 0 ? -el : el));

// console.log(rez1);

// const lst = [-12, 4, -32, 45, 43, -23];

// console.log(lst.filter((el) => el > 0));

let words = ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра"];

// console.log(words.filter((el) => el.length <= 6));

const add = (word) => (words = [...words, word]);

const del = (word) => (words = words.filter((el) => el !== word));

const read = () => words.forEach((el) => console.log("slowo:" + el));

const search = (substr) => words.filter((word) => word.startsWith(substr));

add("stul");
del("самокат");
del("люстра");

console.log(search("с"));
read();

// console.log(words);
