let form = document.querySelector(".form1");

form.onsubmit = (event) => {
  event.preventDefault();

  let formData = new FormData(event.target);

  //   let { email, password } = Object.fromEntries(formData);
  console.log(email, password);

  console.log(Object.fromEntries(formData));

  email.value = "";
  password.value = "";
};
