import React from "react";
import s from "./index.module.css";

export default function Product({ title, price, description }) {
  return (
    <div className={s.product_card}>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}
