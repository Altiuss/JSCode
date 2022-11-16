import React from "react";
import s from "./index.module.css";

export default function AddTeamForm() {
  const submit_form = (event) => {
    event.preventDefault();
    const { team } = event.target;
    console.log(team.value);
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
