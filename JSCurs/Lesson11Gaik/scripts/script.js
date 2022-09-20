// 1) создать параграф
// 2) записать в него текст
// 3) добавить его в root

const root = document.querySelector("#root");

// const par = document.createElement("p");

// par.innerText = "Hello!";

// root.append(par);

// создать массив из текстов (минимум 3 элемента)
// для каждого элемента создать параграф и записать в него текст
// параграфы необходимо добавить в root элемент

// преобразовать процесс таким образом, чтобы по нажатию на
// p_elem active добавлялся, если его нет и удалялся, если он есть

const array = ["auto", "lodka", "poezd", "Velosiped", "haos"];

array.forEach((el) => {
  const div = document.createElement("div");
  const par1 = document.createElement("p");

  div.classList.add("card");
  div.addEventListener("click", (event) => {
    console.log(event);
    event.target.classList.add("active");
    div.classList.toggle("active");
    // div.style.backgroundColor = "red";
    console.log("word");
  });

  par1.innerText = el;

  div.append(par1);
  root.append(div);
});
