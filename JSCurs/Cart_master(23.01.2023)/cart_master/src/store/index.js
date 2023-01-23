import { createStore, combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart:  cartReducer
});

export const store = createStore(rootReducer);
