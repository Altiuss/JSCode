const data = [
  {
    id: 1,
    title: "Велосипед",
    price: 100,
  },

  {
    id: 2,
    title: "Самокат",
    price: 500,
  },

  {
    id: 3,
    title: "Скейт",
    price: 200,
  },
];
const root = document.querySelector(".root");

data.forEach(({ id, title, price }) => {
  //ilidata.forEach((elem)
  const card = document.createElement("div");
  const idElem = document.createElement("p");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");

  idElem.innerText = `ID: ${id} `; // ili elem.id
  titleElem.innerText = `Title: ${title}`; //     elem.title
  priceElem.innerText = `Price: ${price}`; //    elem.price

  card.classList.add("card");

  card.append(idElem, titleElem, priceElem);
  root.append(card);
});

// const card = document.createElement("div");
// const id = document.createElement("p");
// const title = document.createElement("p");
// const price = document.createElement("p");

// id.innerText = "ID";
// title.innerText = "Title";
// price.innerText = "Price";

// card.classList.add("card");

// card.append(id, title, price);
// root.append(card);
