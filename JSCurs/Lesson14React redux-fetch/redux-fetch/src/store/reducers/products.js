const defaultState = [];
let initialState = [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER_PRODUCTS = "FILTER_PRODUCTS";


export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });
export const sortProducts = (payload) => ({ type: SORT_PRODUCTS, payload });
export const filterProducts = (payload) => ({ type: FILTER_PRODUCTS, payload });

export const productsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS) {
    initialState = action.payload;
    return action.payload;
  } else if (action.type === SORT_PRODUCTS) {
    if (action.payload === "default") {
      return initialState;
    } else if (action.payload === "title") {
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    } else if (action.payload === "price") {
      return [...state].sort((a, b) => a.price - b.price);
    }
} else if (action.type === FILTER_PRODUCTS) {
       
        const { min_value, max_value } = action.payload;
        console.log(min_value, max_value);
        return initialState.map((el) => {
            if (el.price >= min_value && el.price <= max_value) {
            return { ...el, hide: false };
            } else {
            return { ...el, hide: true };
            }
        });
        } else {
    return state;
  }
};
