// let user = {
//   name: "Anatolijs",
//   lastname: "Usanovs",
//   age: 29,
//   salary: 130000,
// };

// document.write(user.lastname);
// console.log(user["lastname"]);

// user.lastname = "Kulikovs";
// user.id = 1;

// document.write();

// console.log(user);

// создать объект product со свойствами id, title и price

// увеличить стоимость на 20 процентов
// добавить свойство description с каким-то описанием
// вывести объект

// let product = {
//   id: 1,
//   title: "Mause",
//   price: 36,
// };

// product.price *= 1.2;
// product.description = "desovaja miska";

// console.log(product);

// document.write(product);

// const products = [
//   {
//     id: 1,
//     title: "Mause",
//     price: 36,
//   },

//   {
//     id: 2,
//     title: "Keybord",
//     price: 67,
//   },
//   {
//     id: 3,
//     title: "Pen",
//     price: 2,
//   },
// ];
// console.log(products);

// используя forEach вывести каждый объект отдельно

// products.forEach((el) => console.log(el));

// вывести при помощи forEach только названия продуктов

// products.forEach((el) => console.log(el.title));

// let prodCeep = products.filter((el) => el.price < 50).map((el) => el.title);

// const prodCeep = products.reduce((total, el) => total + el.price, 0);

// console.log(prodCeep);

// реализомать новый массив, в котором будут поля
// id, name, order_total

const customers = [
  {
    id: 1,
    name: "Максим",
    orders: [10000, 23000, 19000],
  },
  {
    id: 2,
    name: "Олег",
    orders: [12000, 43000, 9000],
  },
  {
    id: 3,
    name: "Ольга",
    orders: [22000, 44000, 6000],
  },
  {
    id: 4,
    name: "Семен",
    orders: [32000, 65000, 11000],
  },
];

// реализомать новый массив, в котором будут поля
// id, name, order_total

const newCustumers = customers.map((val) => {
  return {
    id: val.id,
    name: val.name,
    order_total: val.orders.reduce((prev, val) => prev + val)
  };
});

console.log(newCustumers);
