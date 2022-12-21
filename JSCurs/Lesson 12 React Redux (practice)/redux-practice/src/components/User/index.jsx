import React from "react";
import s from "./index.module.css";

export default function User({ id, name, age, country, delete_user }) {
  return (
    <div className={s.users_style}>
      <button className={s.cross} onClick={() => delete_user(id)}>
        &times;
      </button>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
    </div>
  );
}
