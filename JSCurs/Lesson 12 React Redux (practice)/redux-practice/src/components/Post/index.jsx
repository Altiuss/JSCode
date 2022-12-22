import React from "react";
import s from "./index.module.css";
import { FcCheckmark } from "react-icons/fc";

export default function Post({ id, title, description, delete_posts }) {
  return (
    <div className={s.post_card}>
      <FcCheckmark className={s.galka} onClick={() => delete_posts(id)} />
      <h3>Title: {title}</h3>
      <p>DESC: {description}</p>
    </div>
  );
}
