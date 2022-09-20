// First level: ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с
// текстом зеленого цвета (текст взять произвольный)

const root = document.querySelector(".root");
const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   let par = document.createElement("p");
//   par.innerText = "Hello!";
//   par.style.color = "green";
//   root.append(par);
// });

// Second level: ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px.
//  К контейнеру применить свойство grid.

btn.addEventListener("click", () => {
  let div = document.createElement("div");
  div.classList.add("yelow_qvadrat");

  root.append(div);
});
