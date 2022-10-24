import React from "react";

export default function Btn() {
  const btn_style = {
    backgroundColor: "green",
    border: "2px solid black",
    borderRadius: "4px",
  };

  return (
    <div>
      <button style={btn_style}>Push</button>
    </div>
  );
}
