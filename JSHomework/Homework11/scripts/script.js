//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного класса
// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language {
  constructor(name, alphabet, country) {
    this.name = name;
    this.alphabet = alphabet;
    this.country = country;
  }
  get_info() {
    console.log(
      `Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке ${this.country}`
    );
  }
}

let lang = new Language("latvian", "latin", "Latvia");

// console.log(lang);
// lang.get_info();

//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    console.log(`${this.name} Salary: ${this.rate * this.days}`);
  }

  add_days(amount) {
    this.days += amount;
  }
  delete_days(amount) {
    this.days -= amount;
  }
}

let vanja = new Worker("Ivan", "Prokofjev", 5.2, 7);
let andrjuha = new Worker("Andrei", "Zolotnikov", 3.6, 16);

console.log(vanja);
console.log(andrjuha);

vanja.getSalary();
andrjuha.getSalary();

vanja.add_days(7);
andrjuha.delete_days(10);

console.log(vanja);
console.log(andrjuha);
