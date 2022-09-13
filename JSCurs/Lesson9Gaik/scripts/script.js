const root = document.querySelector("#root");

// const div_elem = document.createElement("div");
// const img_elem = document.createElement("img");
// const text_elem = document.createElement("p");
// img_elem.src =
//   "https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg";

// text_elem.innerText = "Apraksts";

// div_elem.append(img_elem, text_elem);

// div_elem.classList.add("card");

// root.append(div_elem);

// добавить div и 4 параграфа внутри него с каким-либо текстом
// созданный div должен быть помещен в #root

// const container = document.createElement("div");
// const texts = ["Текст 1", "Текст 2", "Текст 3", "Текст 4"];

// texts.forEach((text) => {
//   const p_elem = document.createElement("p");
//   p_elem.innerText = text;
//   container.append(p_elem);
// });
// root.append(container);

const container = document.createElement("div");
const texts = ["Текст 1", "Текст 2", "Текст 3", "Текст 4"];

const p_list = texts.map((text) => {
  const p_elem = document.createElement("p");
  p_elem.innerText = text;
  return p_elem;
});

container.append(...p_list);
root.append(container);

const div1 = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
p1.innerText = "Hello";
p2.innerText = "Morale";
p3.innerText = "Provokacija";
p4.innerText = "Beduin";

div1.append(p1, p2, p3, p4);
root.append(div1);
