export const getUsers = (collback) => {
  fetch("https://api.escuelajs.co/api/v1/users")
    .then((resp) => resp.json())
    .then((json) => collback(json));
};
