// function pow(value, p) {
//     const result = value ** p;
//     return result;
//   }

// const pow = (value, p) => value ** p;

// console.log(pow(3, 2));
// console.log(pow(4, 2));

// const returnBoolean = (num) => num > 0;

// console.log(returnBoolean(1));

// const returnLeapYear = (year) =>
//   year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);

// // console.log(returnLeapYear(2020));
// // console.log(returnLeapYear(2021));
// console.log("2022" + returnLeapYear(2022));
// console.log(returnLeapYear(2023));
// console.log(returnLeapYear(2024));
// console.log(returnLeapYear(2025));
// console.log(returnLeapYear(2026));
// console.log(returnLeapYear(2027));
// console.log(returnLeapYear(2028));
// console.log(returnLeapYear(1900));
// console.log(returnLeapYear(2100));
// console.log(returnLeapYear(2000));
// console.log("1600" + returnLeapYear(1600));

// const checkNum = (num) => num % 2 === 0;

// console.log(checkNum(5));

// const a = checkNum;

// console.log(a(13));
// console.log(checkNum(13));

const compare = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const run_with_input_data = (func) => {
  const value_1 = +prompt("Naradiet skaitli: ");
  const value_2 = +prompt("Naradiet skaitli: ");
  return func(value_1, value_2);
};
const result = run_with_input_data(compare);
console.log(result);
