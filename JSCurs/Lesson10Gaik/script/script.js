const data = [
  {
    id: 1,
    name: "Anatolijs",
    email: "galtiuss@gmail.com",
    avatar: "../media/face.jpeg",
  },

  {
    id: 2,
    name: "Vanja",
    email: "vanja@gmail.com",
    avatar: "../media/face.jpeg",
  },

  {
    id: 3,
    name: "Katrina",
    email: "katrina@gmail.com",
    avatar: "../media/face.jpeg",
  },

  {
    id: 4,
    name: "Boris",
    email: "boris@gmail.com",
    avatar: "../media/face.jpeg",
  },
];

const root = document.querySelector("#root");

function getCard(name, email, avatar) {
  const card = document.createElement("div");
  const avatar_elem = document.createElement("img");
  const name_elem = document.createElement("p");
  const email_elem = document.createElement("a");

  card.classList.add("card");
  avatar_elem.classList.add("foto");

  avatar_elem.src = avatar;
  name_elem.innerText = name;
  email_elem.innerText = email;
  email_elem.href = "mailto:" + email;

  card.append(avatar_elem, name_elem, email_elem);
  return card;
}

data.forEach((user) => {
  const card = getCard(user.name, user.email, user.avatar);
  root.append(card);
});
