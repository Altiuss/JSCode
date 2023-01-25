import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../CartCard";
import { clearCart } from "../../store/reducers/cartReducer";


export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const clear_cart = () => dispatch(clearCart())





 
  return (
    <div>
      <p>Cart:</p>
      <div>
        {cart.map((el) => (
          <CartCard key={el.id} {...el} />
        ))}
      </div>
      <div>
        <p>Total:</p>
        <button onClick={clear_cart}>Clear cart</button>
      </div>
    </div>
  );
}
