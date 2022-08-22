// const multThree = () => {
//   return 3 * 2;
// };

// const multFour = () => {
//   return 4 * 2;
// };

let nums = [1, 2, 3, 4, 5];

// const diveideNums = (arr) => {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i] / 2);
//   }
//   return array;
// };

// const multNums = (arr) => {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     array.push(arr[i] * 2);
//   }
//   return array;
// };

const changeNums = (arr, instrukcion) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(instrukcion(arr[i]));
  }
  return array;
};
const divide = (num) => num / 2;
const mult = (num) => num * 2;
const plus = (num) => num + 2;

console.log(changeNums(nums, divide));
console.log(changeNums(nums, mult));
console.log(changeNums(nums, plus));

// console.log(multNums(nums));
// console.log(diveideNums(nums));
