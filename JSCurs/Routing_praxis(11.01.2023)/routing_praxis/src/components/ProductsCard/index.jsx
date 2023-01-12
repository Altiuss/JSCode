import React from "react";

export default function ProductsCard({ title, description, price, images }) {
  return (
    <div>
      <img src={images[3]} alt={title} />
      <div>
        <h3> {title} </h3>
        <p>Description: {description} </p>
        <p>Price: {price} </p>
      </div>
    </div>
  );
}
