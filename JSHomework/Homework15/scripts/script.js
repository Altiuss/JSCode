// First level: 1. Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей

const incr_btn = document.querySelector(".incr_btn");

let btn_params = 30;

const incr_btn_render = (size) => {
  incr_btn.style.width = size + "px";
  incr_btn.style.height = size + "px";
};
incr_btn_render(btn_params);

incr_btn.addEventListener("click", () => {
  btn_params += 10;
  incr_btn_render(btn_params);
});

// Second level: 2. Создать слайдер картинок с кнопками
const foto = [
  "media/2-image.jpg",
  "media/4-image.jpg",
  "media/10-image.jpg",
  "media/12-image.jpg",
];
const imgslider = document.querySelector(".imgSlider");
const [leftBtn, rightBtn] = document.querySelectorAll(".triggers button");

let photoIndex = 0;

leftBtn.addEventListener(
  "click",
  () => (imgslider.src = foto[++photoIndex % foto.length])
);

rightBtn.addEventListener("click", () => {
  if (photoIndex === 0) {
    photoIndex = foto.length;
  }
  imgslider.src = foto[--photoIndex % foto.length];
});
