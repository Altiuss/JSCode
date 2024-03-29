import React, { useContext } from "react";
import s from "./index.module.css";
import { Context } from "../../context";

export default function User({ id, name, team }) {
  return (
    <div className={s.user_card}>
      <p>{name}</p>
      <p>{team}</p>
    </div>
  );
}
