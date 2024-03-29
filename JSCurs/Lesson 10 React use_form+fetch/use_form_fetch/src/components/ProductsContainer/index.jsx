import React, { useContext } from "react";
import Products from "../Products";
import { Context } from "../../context";
import s from "./index.module.css";

export default function ProductsContainer() {
  const { products } = useContext(Context);

  return (
    <div className={s.products_container}>
      {products.map((el) => (
        <Products key={el.id} {...el} />
      ))}
    </div>
  );
}
