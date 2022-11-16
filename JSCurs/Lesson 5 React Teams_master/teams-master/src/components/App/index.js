import Nav from "../Nav";
import ConfigurationsPages from "../pages/CofigurationsPages";
import TeamsPages from "../pages/TeamsPages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/configurations_page" element={<ConfigurationsPages />} />
        <Route path="/teams_page" element={<TeamsPages />} />
      </Routes>
    </div>
  );
}

export default App;
