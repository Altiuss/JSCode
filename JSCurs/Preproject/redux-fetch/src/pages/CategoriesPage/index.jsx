import React, { useEffect } from "react";
import { load_categories } from "../../requests/categories_req";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/CategoryCard";
import s from "./index.module.css";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, []);

  return (
    <div className={s.categories_page}>
      <h2>The best store of the best things</h2>
      <div className={s.cards_container}>
        {" "}
        {categories.map((el, id) => (
          <CategoryCard key={id} category={el} />
        ))}
      </div>
    </div>
  );
}
