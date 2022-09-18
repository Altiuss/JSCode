//Задан массив объектов workers.
//  Выведите на экран карточки со следующей информацией по всем работникам:
//   ID, Имя, Фамилия, Возраст, Зарплата, фото.
//   Зарплата рассчитывается через умножение ставки на количество дней.
//    Карточки должны включать отображение фотографии.
//  Примените стили к карточкам: width, padding, border, background-color.

const workers = [
  {
    id: 1,
    first_name: "Olga",
    last_name: "Petrova",
    age: 18,
    rate: 100,
    days: 15,
    photo: "../media/12-image.jpg",
    progress: 50,
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Ivanov",
    age: 46,
    rate: 70,
    days: 22,
    photo: "../media/4-image.jpg",
    progress: 10,
  },
  {
    id: 3,
    first_name: "Oleg",
    last_name: "Orlov",
    age: 32,
    rate: 34,
    days: 10,
    photo: "https://reqres.in/img/faces/10-image.jpg",
    progress: 75,
  },
  {
    id: 4,
    first_name: "Irina",
    last_name: "Medvedeva",
    age: 22,
    rate: 85,
    days: 17,
    photo: "https://reqres.in/img/faces/2-image.jpg",
    progress: 30,
  },
];

const root = document.querySelector(".root");

workers.forEach((el) => {
  const card = document.createElement("div");
  const id_elem = document.createElement("p");
  const name_elem = document.createElement("p");
  const last_name_elem = document.createElement("p");
  const age_elem = document.createElement("p");
  const selary_elem = document.createElement("p");
  const foto = document.createElement("img");

  const progr_text = document.createElement("p");
  const progr = document.createElement("div");
  const progr_progr = document.createElement("div");

  id_elem.innerText = "ID:" + el.id;
  name_elem.innerText = " First_name: " + el.first_name;
  last_name_elem.innerText = "Last_name: " + el.last_name;
  age_elem.innerText = "Age: " + el.age;
  selary_elem.innerText = "Selary: " + el.rate * el.days;
  progr_text.innerText = el.progress + "%";
  foto.src = el.photo;

  progr_text.classList.add("prog_bar");
  card.classList.add("karte");
  progr.classList.add("root_progr");
  progr_progr.classList.add("progr_green");
  progr_progr.style.width = `${el.progress}%`;

  progr.append(progr_progr, progr_text);
  card.append(
    id_elem,
    name_elem,
    last_name_elem,
    age_elem,
    selary_elem,
    foto,
    progr
  );
  root.append(card);
});
