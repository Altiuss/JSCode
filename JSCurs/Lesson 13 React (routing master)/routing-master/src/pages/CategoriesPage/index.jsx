import React , {useEffect, useState}from "react";
import { getCategories } from "../../requests/categories";


export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, [])
  
  console.log(categories)


  return <div>CategoriesPage</div>;
}
