const userForm = document.querySelector(".userForm");
const usersContainer = document.querySelector(".users_container");

const request = (idNum) => {
  fetch(`https://dummyjson.com/users/${idNum}`)
    .then((resp) => resp.json())
    .then((json) => render(json));
};

const render = ({ firstName, lastName, age, gender }) => {
  usersContainer.innerText = "";
  const div = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const genderElem = document.createElement("p");

  nameElem.innerText = `Name: ${firstName} ${lastName}`;
  ageElem.innerText = `Age: ${age}`;
  genderElem.innerText = `Gender: ${gender}`;

  const cardBackground = gender === "male" ? "lightgreen" : "lightpink";
  div.style.backgroundColor = cardBackground;
  div.classList.add("card");

  div.append(nameElem, ageElem, genderElem);
  userForm.append(div);
};

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.idNumger.value;

  request(id);
  event.target.idNumger.value = "";
});
