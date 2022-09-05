class Car {
  constructor(name, model, country, volume, color, year) {
    this.name = name;
    this.model = model;
    this.country = country;
    this.volume = volume;
    this.color = color;
    this.year = year;
  }

  getInfo() {
    console.log(`Auto: ${this.name}(${this.model})`);
  }
}

const car_1_1 = {
  name: "Toyota",
  model: "RAV$",
  country: "Japan",
  volume: 2.4,
  color: "red",
  year: 2020,
};

const car_1_2 = {
  name: "BMW",
  model: "X3",
  country: "Germany",
  volume: 2.0,
  color: "black",
  year: 2019,
};

// const car_1 = new Car("Toyota", "RAV$", "Japan", 2.4, "red", 2020);
// const car_2 = new Car("BMW", "X3", "Germany", 2.0, "black", 2019);
// console.log(car_1.color);
// console.log(car_2);
// console.log(car_1_1.color);
// console.log(car_1_2);

// name, model, country, volume, color,year
// car_1.getInfo();

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'

class Country {
  constructor(name, capital, population, climat) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.climat = climat;
  }

  get_capital() {
    console.log(`The capital of ${this.name} is ${this.capital}`);
  }
}

let country_1 = new Country("Latvia", "Riga", 2000000, "kalt");
let country_2 = new Country("Estonia", "Tallin", 1700000, "kalt");
let country_3 = new Country("Iran", "Texeran", 79966230, "warm");

console.log(country_1.name);
console.log(country_2.capital);
console.log(country_2.climat);

country_1.get_capital();
