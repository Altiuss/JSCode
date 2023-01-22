import { loadProducts } from "../store/reducers/products"

export const load_products = category => {
    return dispatch => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(resp => resp.json())
    .then(json => dispatch(loadProducts(json)))
}}