const rootElem = document.querySelector(".root");

const card = document.createElement("div");
const first_name = document.createElement("p");
const last_name = document.createElement("p");
const image = document.createElement("img");
const email = document.createElement("a");
const id = document.createElement("p");
const age = document.createElement("p");
const salary = document.createElement("p");
const emailText = document.createElement("span");

image.setAttribute("src", "https://reqres.in/img/faces/12-image.jpg");
// image.setAttribute("alt", "photo");
image.alt = "photo";
id.innerText = "ID: 1";
age.innerText = "Age: 18";
salary.innerText = "Salary: 1500";
first_name.innerText = "First name: Olga ";
last_name.innerText = "Last name:  Petrova";
email.innerText = "galtiuss@gmail.com";
emailText.innerText = "Email: ";
image.classList.add("foto");

// email.setAttribute("href", "mailto: galtiuss@gmail.com ");
email.href = "mailto: galtiuss@gmail.com";

card.classList.add("card");

card.append(id, first_name, last_name, age, salary, image, emailText, email);
rootElem.append(card);
// https://reqres.in/img/faces/12-image.jpg
