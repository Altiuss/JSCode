import React, { useEffect, useState } from "react";
import { getCategories } from "../../requests/categories";
import CategoryCard from "../../components/CategoryCard";
import s from "./index.module.css";
import image from './media/com.jpg'

export default function CategoriesPage({ category }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <div className={s.categories_page}>
      <div className={s.categories_div}>
        {categories.map((el, id) => (
          <CategoryCard key={id} category={el} />
        ))}
      </div>
      <div className={s.cat_page_img}>
        <img
          src={image}
          alt="foto"
        />
      </div>
    </div>
  );
}
