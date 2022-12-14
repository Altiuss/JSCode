import React from "react";
import s from "./index.module.css";
export default function Products({ title, description, price }) {
  return (
    <div className={s.product_card}>
      <p>{title}</p>
      <p>description{description}</p>
      <p>price{price}</p>
    </div>
  );
}
