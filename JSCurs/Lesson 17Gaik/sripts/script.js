// fetch("https://jsonplaceholder.typicode.com/users/5")
//   .then((resp) => resp.json())
//   .then((json) => console.log(json));

// написать функцию, которая в качестве аргумента получает id пользователя
// и выводит данные о нем в консоль

// написать функцию, которая получает в качестве аргумента объект с данными пользователя
// и добавляет карточку с именем и фамилией в #root

/* добавить для карточек пользователя email (в виде ссылки ) */

function findUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((resp) => resp.json())
    .then((json) => callback(json));
}

const divRoot = document.querySelector(".root");
const form = document.querySelector(".adForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id.value;
  findUser(id, addUser);

  event.target.id = "";
});

function addUser(user) {
  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const emailElem = document.createElement("a");
  const userNameElem = document.createElement("p");

  card.classList.add("card");

  nameElem.innerText = user.name;
  userNameElem.innerText = user.username;
  emailElem.innerText = user.email;
  emailElem.href = `mailto:${user.email}`;

  card.append(nameElem, userNameElem, emailElem);
  divRoot.append(card);
}
