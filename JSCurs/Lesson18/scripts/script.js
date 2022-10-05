const btn = document.querySelector(".text_btn");
const input = document.querySelector(".show_input");

btn.addEventListener("click", () => (input.value = "!!!"));

//Поменять текст в инпуте с ??? на !!!

//Поменять цвет фона на черный
// const black = document.querySelector(".black_btn");

// black.addEventListener(
//   "click",
//   () => (document.body.style.backgroundColor = "black")
// );

const blackWheite = document.querySelector(".blackWhite");

// blackWheite.addEventListener("click", () =>
//   document.body.classList.toggle("black_mode")
// );

// blackWheite.addEventListener("click", () => {
//   const backgroundColor =
//     document.body.style.backgroundColor === "black" ? "white" : "black";
//   document.body.style.backgroundColor = backgroundColor;
// });

const randomColor = document.querySelector(".randomColor");
const getRandomNum = () => Math.round(Math.random() * 255);

randomColor.addEventListener(
  "click",
  (event) =>
    (event.target.style.backgroundColor = `rgb(${getRandomNum()},${getRandomNum()},${getRandomNum()})`)
);

const randomBackColor = document.querySelector(".randomBackgroundColor");

randomBackColor.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${getRandomNum()},${getRandomNum()},${getRandomNum()})`;
});

//Менять содержимое инпута на значение из массива

const chsngeBtn = document.querySelector(".chengePdn");
const changeInput = document.querySelector(".change_input");
const symbols = ["...", "!!!", "***"];
let symbols_index = 0;

chsngeBtn.addEventListener(
  "click",
  () => (changeInput.value = symbols[symbols_index++ % symbols.length])
);

const foto = [
  "/media/2-image.jpg",
  "media/4-image.jpg",
  "media/10-image.jpg",
  "media/12-image.jpg",
];

const img_slider = document.querySelector(".img_slider");
let fotos_index = 0;

img_slider.addEventListener("click", (event) => {
  event.target.src = foto[fotos_index++ % foto.length];
});
//Создать генератор бросаемых костей

const gameBtn = document.querySelector(".gameBtn");
const gameRezult = document.querySelector(".gameRezult");

const getNum = () => Math.round(Math.random() * 5 + 1);
gameBtn.addEventListener(
  "click",
  () => (gameRezult.innerText = `${getNum()} X ${getNum()}`)
);

// Создать описанный в форме элемент

const formColor = document.querySelector(".formColor");
const addForm = document.querySelector(".addForm");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { type, content, color } = event.target;

  const elem = document.createElement(type.value);
  elem.innerText = content.value;
  // elem.style.color = color.value;
  elem.style.backgroundColor = color.value;

  formColor.append(elem);
});
