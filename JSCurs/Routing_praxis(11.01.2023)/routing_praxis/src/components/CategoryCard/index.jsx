import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";
import { getCategoriesImgs } from "../../requests/categories_img";

export default function CategoryCard({ category }) {
  // const [images, setImages] = useState([])

  // useEffect(() => {
  //   getCategoriesImgs(setImages, category);
  // }, []);

  const Enter = event =>{
    console.log('Enter')
  }
  const handlerMouseLeave = event =>{
    console.log('Leave')
  }

  return (
    <div
      className={s.category_card_style}
      onMouseEnter={Enter}
      onMouseLeave={handlerMouseLeave}
    >
      <Link to={category}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
        {/* <img src={images[0]} alt="card" /> */}
      </Link>
    </div>
  );
}
