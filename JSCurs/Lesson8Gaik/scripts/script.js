// создать класс User со свойствами name и age
// и методом sayHi который выводит в консоль фразу "привет"
// добавить метод b_day который увеличиввает возраст на единицу
// и выводит поздравления в консоль
// root, admin, manenger, user

// проверить указываемую роль и если она входит в список допустимых указать ее
// пользователю
// в ином случае в свойство role указать undefined

// добавить метод изменения роли, который получает в качестве аргумента новую роль
// и изменяет свойство role в случае, если роль указана верно
// если роль неверна, то в свойство role указать undefined

// [12, 4, 3, 5].includes(13)

class User {
  static roles = ["root", "admin", "manenger", "user"];

  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    if (User.roles.includes(role)) {
      this.role = role;
    } else {
      this.role = undefined;
    }
  }

  change_role(new_role) {
    if (User.roles.includes(new_role)) {
      this.role = new_role;
    } else {
      this.role = undefined;
    }
  }

  sayHi() {
    console.log("привет");
  }
  cheange_name(new_name) {
    this.name = new_name;
  }
  b_day() {
    this.age += 1;
    console.log("pozdravljaju");
  }
}

const user_1 = new User("Ivan", 45, "admin");
const user_2 = new User("Ivan", 45, "admin");

// console.log(user_1.sayHi);
user_1.cheange_name("vasja");
console.log(user_1);
// user_1.sayHi();

// user_1.b_day();
user_1.change_role("user");
console.log(user_1);

// user_1.change_role("root");
