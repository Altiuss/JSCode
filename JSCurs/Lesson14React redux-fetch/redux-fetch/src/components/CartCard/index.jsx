import React from "react";
import s from "./index.module.css";
import { useDispatch } from 'react-redux'
import { incrementCount, decrementCount } from '../../store/reducers/cartReducer'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

export default function CartCard({id, image, title, price, count}) {

  const dispatch = useDispatch();

  const increment_count = () => dispatch(incrementCount(id));
  const decrement_count = () => dispatch(decrementCount(id));
  return (
    <div className={s.cart_card_container}>
     
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{price}$ x {count} = {price * count}$ </p>
      <div className={s.pluss_minus}>
        <AiOutlinePlusSquare id={s.one} onClick={increment_count}/>
        <AiOutlineMinusSquare id={s.two} onClick={decrement_count}/>
      </div>
    </div>
  );
}
