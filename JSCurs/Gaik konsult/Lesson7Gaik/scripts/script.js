class Panda {
  constructor(name, age, energy, selary) {
    this.name = name;
    this.age = age;
    this.energy = 100;
    this.selary = "100$";
  }

  eat() {
    if (this.energy === 100) {
      console.log("dostatocno!");
    } else {
      this.energy += 20;
      console.log("nam-nam", `energu ${this.energy}`);

      console.log("nam-nam");
    }
  }
  fall() {
    if (this.energy === 0) {
      console.log("Dostatocno!");
    } else {
      this.energy -= 20;
      console.log("Puf!", `energu ${this.energy}`);
    }
  }
}

const karl = new Panda("karl", 18);
const tom = new Panda("tom", 15);
const bobik = new Panda("bobik", 20);

console.log(karl);
console.log(tom);
console.log(bobik);
