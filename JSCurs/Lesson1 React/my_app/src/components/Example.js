import React from "react";

export default function Example({ firstName, lastName }) {
  return (
    <div>
      <p>Vards: {firstName}</p>
      <p>Uzvards: {lastName}</p>
    </div>
  );
}
