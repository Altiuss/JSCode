import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "../../requests/product_req";
import s from "./index.module.css";

export default function ProductsDescrPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(load_product(id));
  });
  const { title, description, price, image } = product;
  // console.log(product);

  return (
    <div className={s.product_descr}>
      {image && <img src={image} alt={title} />}
      <div className={s.info_block}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{description}</p>
        <p className={s.price}>
          <span>Price:</span> {price}$
          <button className={s.button}>Добавить в корзину</button>
        </p>
      </div>
    </div>
  );
}
