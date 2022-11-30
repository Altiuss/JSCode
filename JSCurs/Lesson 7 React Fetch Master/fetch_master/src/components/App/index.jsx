import { getUsers } from "../../request/users";
import { useState, useEffect } from "react";
import { Context } from "../../context";
import UserContainer from "../UserContainer";
import {Routes, Route} from "react-router-dom"

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <div>
      <Context.Provider value={{ users }}>
      <Routes>
<Route path={} element={}/>
<Route path={} element={}/>
<Route path={} element={}/>

      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
