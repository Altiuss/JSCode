import Fruits from "../Fruits";
import Vegetables from "../Vegetables";
import { vegetables } from "../../data/products.js";
import { fruits } from "../../data/products";
import "../../style.css";
import Nav from "../Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  vegetables.sort((a, b) => b.price - a.price);

  fruits.sort((a, b) => b.price - a.price);

  return (
    <div>
      <Nav />
      <div className="main">
        <Routes>
          <Route
            path="/fruits"
            element={fruits.map((el) => (
              <Fruits {...el} key={el.id} />
            ))}
          />
          <Route
            path="/vegetables"
            element={vegetables.map((el) => (
              <Vegetables {...el} key={el.id} />
            ))}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
