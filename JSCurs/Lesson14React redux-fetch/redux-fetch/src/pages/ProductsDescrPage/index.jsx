import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_product } from "../../requests/product_req";
import { addToCart } from "../../store/reducers/cartReducer";
import s from "./index.module.css";

export default function ProductsDescrPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(load_product(id));


  });
  const { title, description, price, image } = product;
 
  const add_to_cart = () => (dispatch(addToCart({id:+id, title,image, price})))

  return (
    <div className={s.product_descr}>
      {image && <img src={image} alt={title} />}
      <div className={s.info_block}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{description}</p>
        <p className={s.price}>
          <span>Price:</span> {price}$
          <button onClick={add_to_cart} className={s.button}>Добавить в корзину</button>
        </p>
      </div>
    </div>
  );
}
