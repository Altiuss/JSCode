import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_products } from "../../requests/products_req";
import ProductCard from "../../components/ProductCard";
import s from "./index.module.css";
import { sortProducts } from "../../store/reducers/products";
import { filterProducts } from "../../store/reducers/products";

export default function ProductsPage() {
  const { category } = useParams();

  const category_up = category.charAt(0).toUpperCase() + category.slice(1);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(load_products(category));
  }, []);

  const sort = (e) => dispatch(sortProducts(e.target.value));

  const search = event => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(filterProducts({ min_value, max_value}))
  

    // min.value = "";
    // max.value = "";
  };

  return (
    <div>
      <p>{category_up}</p>
      <div className={s.sorting}>
        <div>
          <span>Price:</span>
          <form className={s.search_form} onSubmit={search}>
            <input type="number" name="min" placeholder="from" />
            <input type="number" name="max" placeholder="to" />
            <button >Search</button>
          </form>
        </div>

        <div>
          <span>Sort by:</span>
          <select className={s.sort_lelect} onInput={sort}>
            <option value="default">default</option>
            <option value="title">title</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>

      <div className={s.products}>
        {products
          .filter((el) => !el.hide)
          .map((el) => (
            <ProductCard key={el.id} {...el} />
          ))}
      </div>
    </div>
  );
}
