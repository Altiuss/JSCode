import Header from "./components/Header";
import "./App.css";
import Banner1 from "./components/Banner1";
import Products from "./components/Products";
import Banner2 from "./components/Banner2";
import Plans from "./components/Plans";

function App() {
  return (
    <div>
      <Header />
      <Banner1 />
      <Products />
      <Banner2 />
      <Plans/>
    </div>
  );
}

export default App;
