import React from "react";
import s from "./index.module.css";

export default function Users({ avatar, name, role }) {
  return (
    <div className={s.user_style}>
      <img src={avatar} alt="photo" />
      <p>Role: {role}</p>
      <p>Name: {name}</p>
    </div>
  );
}
