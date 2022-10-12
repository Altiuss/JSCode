const cards_container = document.querySelector(".cards_container");
const [first_btn, second_btn] = document.querySelectorAll(".triggers button");

const render = (json_data) => {
  cards_container.innerText = "";
  const cards = json_data.map(({ first_name, avatar }) => {
    const card = document.createElement("div");
    const avatarElem = document.createElement("img");
    const nameElem = document.createElement("p");

    avatarElem.src = avatar;
    avatarElem.alt = "foto";
    nameElem.innerText = first_name;

    card.append(avatarElem, nameElem);
    return card;
  });
  cards_container.append(...cards);
};

const request = (num) => {
  fetch(`https://reqres.in/api/users?page=${num}`)
    .then((resp) => resp.json())
    .then((json) => render(json.data));
};

// request(1);

first_btn.addEventListener("click", () => request(1));
second_btn.addEventListener("click", () => request(2));

// const array = [1, true, "hello", 56];

// console.log(array);
// console.log(...array);

const triggers = document.querySelectorAll(".triggers button");

// triggers.forEach((e, i) => {
//   e.addEventListener("click", (event) => {
//     request(i + 1);
//   });
// });
