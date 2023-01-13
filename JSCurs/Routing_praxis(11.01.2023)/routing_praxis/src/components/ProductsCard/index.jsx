import React from "react";
import s from "./index.module.css";

export default function ProductsCard({ title, price, images }) {
  return (
    <div className={s.product_card}>
      <img src={images[0]} alt="foto" />
      <div>
        <h3> {title} </h3>
        <p>Price: {price} </p>
      </div>
    </div>
  );
}
