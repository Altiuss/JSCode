// console.log(document);
// const main_p = document.querySelector(".main");
// const p_list = document.querySelectorAll("p");
// console.log(main_p);
// console.log(p_list);

// const main_p = document.getElementsByClassName("main");
// console.log(main_p);

// const prod_p = document
//   .getElementsByClassName("products")[0]
//   .getElementsByTagName("p")[0];

// const prod_p = document.querySelector(".products  p");
// console.log(prod_p);
// // prod_p.innerText = "Preces";

// console.log(prod_p);

// prod_p.addEventListener("click", () => {
//   prod_p.innerText = "Preces";
// });

// 1) найти параграф с тектом "Важный текст"
//  и заменить его на "Не такой уж и важный текст"

// const text = document.querySelector(".main p");

// text.addEventListener("click", () => {
//   text.innerText = "Не такой уж и важный текст";
// });

// text.addEventListener("click", () => {
//   text.innerText = "Важный текст";
// });

// заменить fb на facebook

// const face = document.querySelector(".media .fb a");

// face.addEventListener("click", () => {
//   face.innerText = "facebook";
// });

// face.innerText = "facebook";

// const point_1 = document.querySelector(".menu .point_1");
// const point_2 = document.querySelector(".menu .point_2");
// const point_3 = document.querySelector(".menu .point_3");

// point_1.addEventListener("click", () => (point_1.innerText = "point 1"));

// point_2.addEventListener("click", () => {
//   point_2.innerText = "point 2";
// });

// point_3.addEventListener("click", () => {
//   point_3.innerText = "point 3";
// });

// main_elem.addEventListener("click", () => {
//   main_elem.style.color = "red";
//   main_elem.style.backgroundColor = "black";
//   main_elem.style.width = " 100px";
// });

// реализовать функцию random_color, которая возвращает случайный цвет в формате rgb

// let num = () => Math.round(Math.random() * 256);

// console.log(num);
const main_elem = document.querySelector(".main");

// const random_color = () => {
//   const r = Math.round(Math.random() * 256);
//   const g = Math.round(Math.random() * 256);
//   const b = Math.round(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// };

// main_elem.addEventListener("click", () => {
//   main_elem.style.color = random_color();
//   main_elem.style.backgroundColor = random_color();
//   main_elem.style.width = "100px";
//   main_elem.style.height = "100px";

// });

// const text = main_elem.innerText;
// const value = main_elem.innerText;
// console.log(+text + 1);

main_elem.addEventListener("click", () => {
  const value = main_elem.innerText;
  main_elem.innerText = +value + 1;
});
