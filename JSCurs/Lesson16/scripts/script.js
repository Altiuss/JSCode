const form_elem = document.querySelector("form");
const cards_container = document.querySelector(".cards_container");

form_elem.addEventListener("submit", (event) => {
  event.preventDefault();

  const card = document.createElement("div");
  const name_elem = document.createElement("p");
  const age_elem = document.createElement("p");
  const city_elem = document.createElement("p");

  const { name, age, city } = event.target;

  //   const name = event.target.name;
  //   const age = event.target.age;
  //   const city = event.target.city;

  card.classList.add("card");

  name_elem.innerText = `Name: ${name.value}`;
  age_elem.innerText = `Age: ${age.value}`;
  city_elem.innerText = `City: ${city.value}`;

  card.append(name_elem, age_elem, city_elem);
  cards_container.append(card);

  name.value = "";
  age.value = "";
  city.value = "";
});
