import CardsContainer from "../CardsContainer";
import { words } from "./../data/words";
import { useState } from "react";
import Triggers from "../Triggers";

function App() {
  const [cards, setCards] = useState(words);

  const change_to_eng = () => {
    setCards(
      cards.map((el) => {
        el.lang = "eng";
        return el;
      })
    );
  };

  const change_to_rus = () => {
    setCards(
      cards.map((el) => {
        el.lang = "rus";
        return el;
      })
    );
  };

  const change_lang = (id) => {
    setCards(
      cards.map((el) => {
        if (el.id === id) {
          el.lang = el.lang === "rus" ? "eng" : "rus";
        }
        return el;
      })
    );
  };

  // const change_lang = (id) => {
  //   cards[id - 1].lang = cards[id - 1].lang === "rus" ? "eng" : "rus";
  //   setCards([...cards]);
  // };

  return (
    <div>
      <CardsContainer words_array={cards} change_lang={change_lang} />
      <Triggers change_to_eng={change_to_eng} change_to_rus={change_to_rus} />
    </div>
  );
}

export default App;
