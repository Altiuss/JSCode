import React from "react";
import s from "./index.module.css";

export default function ServiceCard({ title, img }) {
  const card_style = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className={s.service_card} style={card_style}>
      {title}
    </div>
  );
}
