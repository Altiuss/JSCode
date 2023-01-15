import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import ProductDescrPage from "../../pages/ProductDescrPage";

export default function ProductsCard({id,  title, price, images }) {


  return (
    <Link to={`/products/${id}`}>
      <div className={s.product_card} >
        <img src={images[1]} alt="foto" />
        <div>
          <h3> {title} </h3>
          <p>Price: {price} </p>
        </div>
      </div>
    </Link>
  );
}
