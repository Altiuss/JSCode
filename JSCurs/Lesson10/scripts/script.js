let d = "hello"; //string
let b = 7; //number
let c = true; //boolean
//undefined, null

let object = {
  firstname: "Aigars",
  lastname: "Alutis",
  age: 47,
  active: true,
};
let a = "Aigars";

// console.log(object.firstname);
// console.log(object["first name"]); // 1.Kad ir probels  2. Atslega ir peremenaja.
// console.log(object[a]); //2. Atslega ir peremenaja.

const users = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500,
  },

  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 12,
    salary: 250,
  },

  {
    first_name: "irina",
    last_name: "Alexandrova",
    age: 46,
    salary: 1500,
  },

  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 30,
    salary: 760,
  },
];
// console.log(`Hello ${users[2].first_name}`);

// users.forEach((el) => console.log(el));

//2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта

// users.forEach((el) => console.log(el.first_name));

//3. Добавить в конец массива объект со следующими значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

users.push({
  first_name: "Anton",
  last_name: "Gribov",
  age: 36,
  salary: 1760,
});

// users.forEach((el) => console.log(el));

// 4. Сформируйте массив из совершеннолетних пользователей

// let arr = users.filter((el) => el.age >= 18);

// arr.forEach((el) => console.log(el));

// 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']

// let arrNew = users.map((el) => el.last_name);

// console.log(arrNew);

// 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']

// let arrNew1 = users.map((el) => el.last_name + " " + el.first_name);

// console.log(arrNew1);

// 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()

// let filter = users.filter((e) => e.first_name === "Olga")[0];

// const newArr = users.find((el) => el.first_name === "Olga"); // atgriez elementu
// const newArr3 = users.filter((el) => el.first_name === "Olga"); // atgriez masivu

// console.log(newArr);
// console.log(newArr3);

// 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i

// const newArr4 = users.filter(
//   (el) => el.first_name[0] === "I" || el.first_name[0] === "i"
// );
// console.log(newArr4);

// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];

const newArr5 = users
  .filter((el) => el.age >= 18)
  .map((el) => `${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`);

console.log(newArr5);
