// Реализуйте класс Group (групп), который будет иметь следующие свойства:
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
  constructor(name, major, number = 15) {
    this.name = name;
    this.major = major;
    this.number = number;
  }

  add_student() {
    this.number += 1;
  }

  delete_studen() {
    this.number -= 1;
  }
}

const exeml_1 = new Group("Frontend", "JS");

// console.log(exeml_1);
// exeml_1.add_student();
// exeml_1.add_student();
// exeml_1.add_student();
// exeml_1.add_student();
// exeml_1.add_student();
// console.log(exeml_1);

let all_groups = [];

const create_group = (name, major, number) =>
  all_groups.push(new Group(name, major, number));

create_group("backend", "java");
create_group("backend", "java");
create_group("frontend", "PHP", 34);

console.log(all_groups);
