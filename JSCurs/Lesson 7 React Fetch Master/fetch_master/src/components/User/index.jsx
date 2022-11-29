import React from "react";

export default function User({ firstName, lastName, age }) {
  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{age}</p>
    </div>
  );
}
