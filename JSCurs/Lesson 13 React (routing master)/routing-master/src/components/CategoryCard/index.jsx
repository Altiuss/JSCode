import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <div className={s.category_card} to={category}>
      <Link to={category}>{category}</Link>
    </div>
  );
}
