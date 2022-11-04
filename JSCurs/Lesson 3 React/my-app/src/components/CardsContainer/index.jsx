import React from "react";
import Card from "../Card";
import "./cardsContainer.css";

export default function CardsContainer({ words_array, change_lang }) {
  return (
    <div className="cards_container">
      {words_array.map((el) => (
        <Card {...el} key={el.id} change_lang={change_lang} />
      ))}
    </div>
  );
}
