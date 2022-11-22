import Nav from "../Nav";
import ConfigurationsPages from "../pages/CofigurationsPages";
import TeamsPages from "../pages/TeamsPages";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Context } from "../../context";

function App() {
  const [teams, setTeams] = useState([]);
  const addTeam = (team) => {
    setTeams([...teams, { value: team, label: team }]);
  };

  return (
    <Context.Provider value={{ teams, addTeam }}>
      <Nav />
      <Routes>
        <Route path="/configurations_page" element={<ConfigurationsPages />} />
        <Route path="/teams_page" element={<TeamsPages />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
