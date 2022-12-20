import React from "react";
import { useSelector } from "react-redux";
import User from "../User";
import s from "./index.module.css";

export default function UsersContainer() {
  const state = useSelector((state) => state.users);

  return (
    <div className={s.users_container_style}>
      {state.map((el) => (
        <User key={el.id} {...el} />
      ))}
    </div>
  );
}
