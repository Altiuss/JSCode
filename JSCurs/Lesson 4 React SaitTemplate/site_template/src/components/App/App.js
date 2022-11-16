import "../../style.css";
import Nav from "../Nav";
import Services from "../Services";
import AbautUs from "../AboutUs";
import Contacts from "../Contacts";
import Footer from "../Footer";
import { useState } from "react";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div>
      <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
      <Services />
      <AbautUs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
