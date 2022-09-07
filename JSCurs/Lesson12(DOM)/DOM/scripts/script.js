const header = document.querySelector(".header");
const paragraph = document.querySelector("#par");
const container = document.querySelector(".container");

console.log(header);
console.log(paragraph);

header.style.color = "red";
paragraph.style.backgroundColor = "green";

// header.classList.add("class_add");
// header.classList.remove("class_deleted");

const text = document.createElement("p");
text.innerText = "Kaut kads teksts";

const divElem = document.createElement("div");

divElem.innerText = "Jauns texts";

container.append(text, divElem);
