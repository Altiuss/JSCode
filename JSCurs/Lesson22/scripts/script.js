let idNum = 1;
const request = (num) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then((resp) => resp.json())
    .then((json) => render(json));
};

request(idNum);

const root = document.querySelector(".root");

const render = ({ title, completed }) => {
  root.innerText = "";
  const card = document.createElement("div");
  const titleElem = document.createElement("p");
  const completedElem = document.createElement("p");

  card.classList.add("card");

  titleElem.innerText = title;
  completedElem.innerText = `Status: ${completed}`;
  if (completed === false) {
    completedElem.innerText = `Status: not done`;
    card.style.backgroundColor = "grey";
  } else {
    completedElem.innerText = `Status: done`;
    card.style.backgroundColor = "green";
  }

  card.append(titleElem, completedElem);
  root.append(card);
};

const [leftBtn, rightBtn] = document.querySelectorAll(".form button");

leftBtn.addEventListener("click", () => {
  if (idNum === 1) {
    idNum = 201;
  }
  request(--idNum);
});
rightBtn.addEventListener("click", () => {
  if (idNum === 200) {
    idNum = 0;
  }
  request(++idNum);
});
