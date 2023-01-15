import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../requests/product";
import s from "./index.module.css";

export default function ProductDescrPage() {

  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getProduct(setProduct, id);
  }, []);
  console.log(id);
 

  const { title, description, price, images } = product;

  return (
    <div className={s.product_descr}>
    <h1>ProductDescrPage</h1>
      {images && <img src={images[1]} alt="photo" />}
      <div className={s.info_block}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{description}</p>
        <span className={s.price}>{price}$</span>
      </div>
    </div>
  );
}
