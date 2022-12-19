import React from "react";

export default function LanguageCard({ id, eng, rus, lang, change_card, delete_card }) {
  const text = lang === "rus" ? rus : eng;

  return <div onClick={() => change_card(id)} onDoubleClick={() => delete_card(id) }>{text}</div>;
}
