import React from "react";
import CartCard from "../../components/CartCard";
import s from './index.module.css'

export default function CartPage() {
  return (
<div className={s.root}>
<div className={s.carts_container_style}>
  <CartCard/>
</div>
  <div className={s.total_container}>
    <h2>Итого:</h2>
    <button>Очистить корзину</button>
  </div>
 </div>
  );
}
