import React from "react";
import s from "./index.module.css";

export default function AbautUsCard({ value, title, link_title, link_url }) {
  return (
    <div className={s.abaut_us_card}>
      <p>{value}</p>
      <p>{title}</p>
      <a href={link_url}> {link_title}</a>
    </div>
  );
}
{
  /* <a href="https://www.facebook.com/">Все кейсы</a>; */
}
