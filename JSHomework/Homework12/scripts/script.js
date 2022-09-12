// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара (div),
//  которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const root = document.querySelector(".root");

const product_1 = document.querySelector(".product_1");

console.log(root);

const product = document.createElement("div");

product.innerText = "Bear";
product.style.backgroundColor = "green";
product.style.width = "300px";
product.style.height = "200px";
product.style.border = "black solid 2px";
product.style.borderRadius = "20px";
product.style.alignItems = "center";
product.style.root.append(product);
