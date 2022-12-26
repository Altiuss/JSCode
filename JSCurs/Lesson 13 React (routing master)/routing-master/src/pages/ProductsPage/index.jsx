import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Productcard";
import { getProducts } from "../../requests/products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getProducts(category, setProducts);
  }, []);

  console.log(products);

  return (
    <div>
      {products.length === 0 ? (
        <p>{category} are loading...</p>
      ) : (
        <div>
          {products.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
        </div>
      )}
    </div>
  );
}
