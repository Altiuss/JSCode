import React, { useContext } from "react";
import s from "./index.module.css";
import { Context } from "../../context";

export default function AddTeamForm() {
  const { addTeam } = useContext(Context);

  const submit_form = (event) => {
    event.preventDefault();
    const { team } = event.target;
    addTeam(team.value);
    team.value = "";
  };

  return (
    <form action="#" className={s.add_team_form} onSubmit={submit_form}>
      <p>Add team</p>
      <input type="text" name="team" placeholder="Team`s title" />
      <button>Add team</button>
    </form>
  );
}
