let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// let newArray = array.filter((el) => el < 100);

// console.log(newArray);

let users = ["Ivan", "Viktoria", "Olga", "Elena", "Anton"];

let arr = ["hello", "bye", "good morning", "good evening", "good night"];

// let newStrArr = arr.filter((el) => el.length >= 10);
// console.log(newStrArr);

// let newUsers = users.filter((el) => el.length >= 5);
// console.log(users);
// console.log(newUsers);

// let newArrayF2 = array.filter((el) => el % 2 === 0 && el !== 0);

// console.log(newArrayF2);

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).

// let newArrayF3 = array.filter((el) => el % 10 === 5);
// console.log(newArrayF3);

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100',
//  а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).

let newArrayM3 = array.map((el) => (el >= 100 ? ">100" : "<100"));
console.log(newArrayM3);

// let returnArray = array.map((el) => el * 2);
// console.log(returnArray);

// let newArrayM = array.map((el) => el * 2);

// console.log(newArrayM);
// console.log(array);
// console.log();

let age = [23, 15, 18, 56, 43, 28];

// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100

let newAge = age.filter((el) => el >= 18).map((el) => (el = 100));
// let newAgeF = newAge.map((el) => (el = 100));

// let newAgeF1 = age.map((el) => {
//   if (el >= 18) {
//     el = 100;
//   }
// });
// console.log(newAgeF1);
// console.log(newAgeF);
// console.log(newAge);

// let newAgeSort = age.map((el) => (el < 18 ? "child" : "adult"));

// console.log(newAgeSort);

let newAgeM3 = age.map((el) => el % 10);
console.log(newAgeM3);
