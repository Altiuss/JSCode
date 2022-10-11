// написать функцию, которая получает в качестве аргумента объект с данными пользователя
// и возвращает div с картинкой, именем и почтой пользователя

const div = document.querySelector(".root");

function addUser(user) {
  const container = document.createElement("div");

  const img = document.createElement("img");
  img.src = user.data.avatar;

  const a = document.createElement("a");
  a.innerText = user.data.email;
  a.href = `mailto:${user.data.email}`;

  const p = document.createElement("p");
  p.innerText = user.data.first_name;

  container.append(img, a, p);
  div.append(container);
}

fetch("https://reqres.in/api/users/5")
  .then(
    (resp) => resp.json(),
    (err) => console.log(err)
  )
  .then(
    (resp) => addUser(resp),
    (err) => console.log(err)
  );

// fetch("https://reqres.in/api/users/2")
//   .then((resp) => resp.json())
//   .then((user) => addUser(user));
//   .then((json) => addUser(json));

function getUser(user_id) {
  fetch(`https://reqres.in/api/users/${user_id}`)
    .then((resp) => resp.json())
    .then((user) => addUser(user));
}
