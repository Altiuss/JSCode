const defaultState = [];

const ADD_TO_CART = "ADD_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const DELETE_CART = 'DELETE_CART'

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const clearCart = (payload) => ({ type: CLEAR_CART, payload });
export const deleteCart = (payload) => ({ type:DELETE_CART , payload });

const checkProduct = (state, payload) => {
  const target_product = state.find((el) => el.id === payload.id);
  if (target_product) {
    target_product.count++;
    return [...state];
  } else {
    return [
      ...state,
      {
        ...payload,
        count: 1,
      },
    ];
  }
};

export const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_CART) {
    return checkProduct(state, action.payload);
  } else if (action.type === CLEAR_CART) {
    return defaultState;
  } else if(action.type === DELETE_CART) {
    return state.filter(el => el.id !== action.payload)
  
   
  }else {
    return state;
  }
};
