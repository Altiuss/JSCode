import React from "react";
import s from "./index.module.css";

export default function Vegetables({ ...vegetables }) {
  return (
    <div className={s.vegetables}>
      <p>Id: {vegetables.id}</p>
      <p>Title: {vegetables.title}</p>
      <p>Price: {vegetables.price}</p>
      <p>Country: {vegetables.country}</p>
    </div>
  );
}
