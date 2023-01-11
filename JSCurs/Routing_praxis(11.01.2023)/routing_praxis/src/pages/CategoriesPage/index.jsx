import React, { useEffect, useState } from "react";
import { getCategories } from "../../requests/categories";
import CategoryCard from "../../components/CategoryCard";
export default function CategoriesPage() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);
  console.log(categories)

  return <div>
     {
        categories.map((el, id) => (<CategoryCard key={id} category={el} />))
      }
  </div>;
}
