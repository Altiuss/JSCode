import CardsContainer from "../CardsContainer";
import { words } from "./../data/words";

function App() {
  return (
    <div>
      <CardsContainer words_array={words} />
    </div>
  );
}

export default App;
