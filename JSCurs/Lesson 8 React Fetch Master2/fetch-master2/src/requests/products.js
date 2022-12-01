export const getProducts = (collback) => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((resp) => resp.json())
    .then((json) => collback(json));
};

// https://api.escuelajs.co/api/v1/users
