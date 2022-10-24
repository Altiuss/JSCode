import React from "react";

export default function Products({ id, title, price }) {
  return (
    <div>
      <p> id: {id}</p>
      <p> Title: {title}</p>
      <p> Price: {price}</p>
    </div>
  );
}
