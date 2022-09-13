// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара (div),
//  которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const root = document.querySelector(".root");

const div = document.createElement("div");
const title = document.createElement("h1");
const art = document.createElement("p");
const price = document.createElement("p");

art.innerText = "567844";
title.innerText = "Salami";
price.innerText = "32,48 Eur/kg";
div.append(title, art, price);
root.append(div);

title.style.margin = "20px 60px";
title.style.fontSize = "70px";
art.style.margin = " 100px 0 10px 0";
price.style.color = "red";
price.style.fontSize = " 30px";

div.style.width = "400px";
div.style.height = "300px";
div.style.backgroundColor = "gray";
div.style.border = "3px solid black";
div.style.borderRadius = "20px";
div.style.display = "Flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.margin = "50px";
div.style.padding = "10px";
