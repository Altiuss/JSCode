import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard";
import { getProducts } from "../../requests/products";
import s from './index.module.css'

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getProducts(category, setProducts);
  }, []);

  return (
    <div className={s.products}>
      {products.map((el) => (
        <ProductsCard key={el.id} {...el} />
      ))}
    </div>
  );
}
