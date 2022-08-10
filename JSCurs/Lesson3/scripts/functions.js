// function sum(num1 = 666, num2 = 777) {
//   let a = num1 + num2;
//   return a; //funkcion deklaration
// }

// console.log(sum(5, 9));
// console.log(sum(90, 9));
// console.log(sum(354, 9));
// console.log(sum());

// function greeting(firstName = "Anton") {
//   return `Hello, ${firstName}`;
// }

// console.log(greeting("Aigars"));
// console.log(greeting("Olga"));
// console.log(greeting("Peteris"));
// console.log(greeting());

// function multiplicateNumber(num1, num2, num3 = 1) {
//   return num1 * num2 * num3;
// }
// console.log(multiplicateNumber(3, 5));

// function returnString(firstName = "Elena", age = 18) {
//   return `Hello, ${firstName}. Your age is ${age}`;
// }

// console.log(returnString(undefined, 145));

console.log(greeting_declaration("Olga", "Petrova"));

function greeting_declaration(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
}

// Funkcioalie izteicieni

let greeting = function getHello(firstName, lastName) {
  return `Hello ${firstName} ${lastName}`;
};

console.log(greeting("Olga", "Petrova"));

// Strelocnie funkciji

let greeting_arrow = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}`;
};

console.log(greeting_arrow("Olga", "Petrova"));
