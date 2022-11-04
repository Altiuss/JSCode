import React from "react";
import "./card.css";

export default function Card({ id, eng, rus, lang, change_lang }) {
  const style = {
    color: lang === "eng" ? "white" : "blue",
    backgroundColor: lang === "eng" ? "blue" : "white",
  };

  return (
    <div onClick={() => change_lang(id)} style={style} className="card">
      {lang === "eng" ? eng : rus}
    </div>
  );
}
