import React from "react";
import s from "./index.module.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <div className={s.category_card_style}>
      <Link  to={category}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
      </Link>
    </div>
  );
}

