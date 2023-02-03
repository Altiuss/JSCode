import { createStore, combineReducers, applyMiddleware } from "redux";
import { categoriesReducer } from "./reducers/categories";
import {productsReducer}from "./reducers/products";
import {productReducer}from "./reducers/product";
import thunk from 'redux-thunk'
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
