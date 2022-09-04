// Дан массив с данными
const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    city: "Moscow",
    country: "Russia",
    active: true,
  },
  {
    first_name: "dmitry",
    last_name: "Petrov",
    age: 7,
    city: "Berlin",
    country: "Germany",
    active: true,
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    city: "Paris",
    country: "France",
    active: false,
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 10,
    city: "Rome",
    country: "Italy",
    active: false,
  },
];
//1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате:
//    "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]

// const newArray = people.map(el => `${el.first_name} ${el.last_name} (${el.city} ${el.country}), ${el.age}, active:${el.active}`);
//    console.log(newArray);

// 2. Сформируйте массив из активных людей

// const newActivePeople = people.filter(el => el.active === true);
// console.log(newActivePeople);

//3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)

// const newDNamePeople = people.filter(
//   (el) => el.first_name.startsWith("d") || el.first_name.startsWith("D")
// );
// console.log(newDNamePeople);

//4. Получите из массива объект, где страной проживания человека является 'Germany'

// const peopleFromGermany = people.filter((el) => el.country == "Germany");
// console.log(peopleFromGermany);

// 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

// const adultPeople = people
//   .filter((el) => el.age >= 18)
//   .map(
//     (el) =>
//       `${el.first_name} ${el.last_name} (${el.age}), ${el.country} (${el.city}) ${el.active}`
//   );

// console.log(adultPeople);

// 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

people[0].first_name = "petr";
people[0].age = 99;

console.log(people);
