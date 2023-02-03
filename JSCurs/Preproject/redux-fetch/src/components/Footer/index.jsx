import React from "react";
import s from "./index.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="wrapper">
        <p> Мой первый сайт ©</p>
        <p>2022</p>
      </div>
    </footer>
  );
}
