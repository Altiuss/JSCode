const cards_container = document.querySelector(".cards_container");

fetch("https://reqres.in/api/users") //Aizsutam pieprasijumu
  .then((resp) => resp.json()) // Sanemam atbildi un parveidojam json
  .then((json) => render(json.data)); //Nemam json un daram ko gribam ar to

const render = (data_array) => {
  data_array.forEach(({ first_name, email, avatar }) => {
    const card = document.createElement("div");
    const avatarElem = document.createElement("img");
    const firstnameElem = document.createElement("p");
    const emailElem = document.createElement("a");

    emailElem.classList.add("email_elem");
    card.classList.add("card");

    firstnameElem.innerText = first_name;

    emailElem.innerText = email;
    emailElem.href = `mailto:${email}`;

    avatarElem.src = avatar;
    avatarElem.alt = "foto";

    card.append(avatarElem, emailElem, firstnameElem);
    cards_container.append(card);
  });
};
