import { loadProducts } from "../store/reducers/products";

export const load_products = (category) => {
  return (dispatch) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((resp) => resp.json())
      .then((json) => {
        const payload = json.map((el) => {
            return {
                id: el.id,
                title: el.title,
                price: el.price,
                description: el.description,
                category: el.category,
                image: el.image,
                hide: false,
            };
        });

        dispatch(loadProducts(payload));
      });
  };
};
