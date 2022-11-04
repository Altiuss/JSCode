import React from "react";
import "./triggers.css";

export default function Triggers({ change_to_eng, change_to_rus }) {
  return (
    <div className="triggers">
      <button onClick={change_to_eng}>Eng</button>
      <button onClick={change_to_rus}>Rus</button>
    </div>
  );
}
