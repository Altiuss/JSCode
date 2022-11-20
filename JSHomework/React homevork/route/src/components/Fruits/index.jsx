import React from "react";
import s from "./index.module.css";

export default function Fruits({ ...fruits }) {
  return (
    <div className={s.fruits}>
      <p>Id: {fruits.id}</p>
      <p>Title: {fruits.title}</p>
      <p>Price: {fruits.price}</p>
      <p>Country: {fruits.country}</p>
    </div>
  );
}
