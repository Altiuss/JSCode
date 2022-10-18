// написать функцию, которая делать fetch запрос и выводит весь список продуктов
// в консоль
const root = document.querySelector(".root");

function renderProductCards(productList) {
  productList.forEach((products) => {
    const productCard = makeCard(products);
    root.append(productCard);
  });
}

function getFetch() {
  fetch(`https://fakestoreapi.com/products`)
    .then((resp) => resp.json())
    .then((json) => renderProductCards(json));
}

getFetch();

// реализовать функцию, которая получает на вход данные продукта и
// возвращает div элемент с отображением продукта

function makeCard(cardData) {
  const { image, title, price } = cardData;

  const card = document.createElement("div");
  const imgElem = document.createElement("img");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");

  imgElem.src = image;
  imgElem.alt = "foto";
  titleElem.innerText = title;
  priceElem.innerText = price;

  card.classList.add("item");

  card.append(imgElem, titleElem, priceElem);

  return card;
}

function renderProductCards(pproductList) {
  pproductList.forEach((products) => {
    const productCard = makeCard(products);
    root.append(productCard);
  });
}

// yнапишите функцию, которая используя getProductCard
// проходится по всем объектам массива с продуктами
// и для каждого формирует карточку в интерфейсе

// создать функцию, которая делает запрос на сервер и получает
// все категории
// их необходимо вывести в консоль

function getFet() {
  fetch(`https://fakestoreapi.com/products/categories`)
    .then((resp) => resp.json())
    .then((json) => console.log(json));
}

getFet();
