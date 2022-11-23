import React from "react";

export default function Post({ id, title, text, like }) {
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
      <p>{like}</p>
    </div>
  );
}
