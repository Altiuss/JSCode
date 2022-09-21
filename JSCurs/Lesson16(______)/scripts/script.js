//Создайте форму сбора данных работников с
//  тремя полями: Имя, Фамилия, Возраст.
//   Поля ввода должны включать "текст-подсказку".
//    Форма должна собирать полученные данные,
//     а затем формировать карточки работников с
//     полученной информацией.

const root = document.querySelector(".root");
const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const div = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const cityElem = document.createElement("p");
  const foto = document.createElement("img");

  div.classList.add("card");
  foto.classList.add("img");

  const { name, age, city, photo } = event.target;

  nameElem.innerText = `Name: ${name.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  cityElem.innerText = `City: ${city.value}`;
  foto.setAttribute("src", photo.value);

  div.append(nameElem, ageElem, cityElem, foto);
  root.append(div);

  name.value = "";
  age.value = "";
  age.value = "";
  photo.value = "";
});
