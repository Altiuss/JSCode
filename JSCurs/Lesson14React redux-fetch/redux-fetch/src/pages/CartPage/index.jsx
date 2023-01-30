import React from "react";
import CartCard from "../../components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/reducers/cartReducer";
import s from "./index.module.css";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const clear_cart = () => dispatch(clearCart());

  const total = (cart.reduce((prev, {price, count}) => prev + price * count, 0)).toFixed(2);

  console.log(cart);

  return (
    <div className={s.root}>
      <div className={s.carts_container_style}>
        {cart.length === 0
         ? <p>The cart is empty ...</p>
         :<div>{ cart.map((el) => (<CartCard key={el.id} {...el} />))}</div>
        }
      </div>
      <div className={s.total_container}>
        <h2>Итого:{total}</h2>
        <button onClick={clear_cart}>Очистить корзину</button>
      </div>
    </div>
  );
}
