export const getProduct = (id, callback) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((resp) => resp.json())
    .then((json) => callback(json));
};
