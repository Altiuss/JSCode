// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 65; i >= 15; i -= 5) {
//   console.log(i);
// }

// В программе заданы две переменные n и m с числовым значением каждая.
//  Число n больше числа m. Напишите цикл,
//  который выводит в консоль все четные числа от m до n.

// const getNums = (n, m) => {
//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) console.log(i);
//   }
// };

// getNums(40, 60);

// В программе заданы две переменные n и m с числовым значением каждая.
// Напишите цикл, который выводит в консоль числа от большего числа до меньшего.

// function getNums1(num1, num2) {
//   if (num1 === num2) {
//     console.log("erorror");
//     return;
//   }
//   for (let i = Math.max(num1, num2); i >= Math.min(num1, num2); i--) {
//     console.log(i);
//   }
// }
// getNums1(0, 0);

// Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.

const getsum = () => {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) sum += i;
  }
  return sum;
};
console.log(getsum());
