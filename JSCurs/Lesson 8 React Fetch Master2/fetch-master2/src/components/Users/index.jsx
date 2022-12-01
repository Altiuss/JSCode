import React from "react";
import s from "./index.module.css";

export default function Users({ avatar, name }) {
  return (
    <div className={s.user_style}>
      <img src={avatar} alt="" />
      <p>{name}</p>
    </div>
  );
}
