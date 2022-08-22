let age = [40, 45, 53, 23, 12, 7];

// let newAge = [];
// for (let i = 0; i < age.length; i++) {
//   if (age[i] >= 18) {
//     console.log(age[i]);
//   }
// }

age.forEach((el) => {
  if (el >= 18) {
    console.log(el);
  }
});

age.forEach((el) => console.log(el * 2));
