import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../components/ProductsCard";
import { getProducts } from "../../requests/products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getProducts(category, setProducts);
  }, []);

  return (
    <div>
      {products.map((el) => (
        <ProductsCard key={el.id} {...el} />
      ))}
    </div>
  );
}
