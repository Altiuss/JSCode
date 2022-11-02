import React from "react";
import Card from "../Card";
import "./cardsContainer.css";

export default function CardsContainer({ words_array }) {
  return (
    <div className="cards_container">
      {words_array.map((el) => (
        <Card {...el} key={el.id} />
      ))}
    </div>
  );
}
