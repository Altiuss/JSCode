import React from "react";
import s from './index.module.css'
import { AiOutlinePlusSquare, AiOutlineMinusSquare} from "react-icons/ai";

export default function CartCard() {
  return <div className={s.cart_card_container}>
    <div className={s.img}></div>
    <p>Title</p>
    <p>sum</p>
    <div className={s.pluss_minus}>

    <AiOutlinePlusSquare id={s.one}/>
    <AiOutlineMinusSquare id={s.two}/>
    </div>
  </div>;
}
