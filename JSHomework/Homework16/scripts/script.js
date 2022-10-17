fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((json) => render(json));

const root = document.querySelector(".root");

const render = (json) => {
  json.forEach(({ title, completed }) => {
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
  });
};
