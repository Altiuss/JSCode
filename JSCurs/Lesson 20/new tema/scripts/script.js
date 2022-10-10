// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json_data) => console.log(json_data));

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => response.json())
//   .then((json_data) => console.log(json_data));

// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => response.json())
//   .then((json_data) => {
//     console.log(json_data),
//       console.log(json_data.data),
//       console.log(json_data.data[1]),
//       console.log(json_data.data[1].email);
//   });

const cards_container = document.querySelector(".cards_container");
console.log(cards_container);
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((json) => render(json));

const render = (json) => {
  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const usernameElem = document.createElement("p");
  const phoneElem = document.createElement("p");

  nameElem.innerText = `Name: ${json.name}`;
  usernameElem.innerText = `Name: ${json.username}`;
  phoneElem.innerText = `Name: ${json.phone}`;

  card.append(nameElem, usernameElem, phoneElem);
  cards_container.append(card);
};
