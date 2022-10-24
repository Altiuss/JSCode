import React from "react";
import Btn from "./Btn";
export default function User({ id, firstname, lastname, age }) {
  const user_style = {
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    backgroundColor: "pink",
    width: "200px",
  };

  return (
    <div style={user_style}>
      <p>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Age: {age}</p>

      <Btn />
    </div>
  );
}
