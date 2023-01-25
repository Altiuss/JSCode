import React from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../store/reducers/cartReducer";

export default function CartCard({ id, title, price, count }) {
  const dispach = useDispatch();

  const delete_cart = () => dispach(deleteCart(id));

  return (
    <div className={s.cart_card}>
      <p>{title}</p>
      <p>{price * count}</p>
      <p>{count}</p>
      <div className={s.triggers}>
        <button>+</button>
        <button>-</button>
      </div>
      <button onClick={ delete_cart}>x</button>
    </div>
  );
}
