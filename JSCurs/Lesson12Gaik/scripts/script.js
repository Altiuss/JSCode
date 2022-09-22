const form = document.querySelector("#add_product_form");
const card = document.querySelector("#products");

function getCard(title, price) {
  const container = document.createElement("div");
  const title_p = document.createElement("p");
  const price_p = document.createElement("p");

  title_p.innerText = title;
  price_p.innerText = price;

  container.append(title_p, price_p);

  return container;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const title = event.target.title;
  // const price = event.target.price;

  const { title, price } = event.target;
  const card = getCard(title.value, price.value);
  products.append(card);
});

// создать функцию getCard, которая в качестве вргументов получает title и price
// и возвращает div с указанными внутри title и price
