const root = document.querySelector("#root");

let products = [
  {
    id: 1,
    title: "велосипед",
    price: 45000,
  },
  {
    id: 2,
    title: "ролики",
    price: 15000,
  },
  {
    id: 3,
    title: "самокат",
    price: 12000,
  },
  {
    id: 4,
    title: "лыжи",
    price: 23000,
  },
  {
    id: 5,
    title: "сноуборд",
    price: 20000,
  },
];
const productContainer = document.createElement("div");
productContainer.classList.add("productContainer");
root.append(productContainer);

function makeCard(title, price) {
  const container = document.createElement("div");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");
  container.classList.add("productItem");
  titleElem.innerText = title;
  priceElem.innerText = price;

  container.append(titleElem, priceElem);
  return container;
}

function render() {
  productContainer.innerText = "";
  products.forEach((product) => {
    const productElement = makeCard(product.title, product.price);
    productContainer.append(productElement);
  });
}

function deleteId(id) {
  products = products.filter((product) => product.id !== id);
  render();
}
deleteId();
render();
