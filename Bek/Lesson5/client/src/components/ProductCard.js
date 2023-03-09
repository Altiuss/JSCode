import React from 'react'

export default function ProductCard({name,price,color, quantity}) {
  return (
    <div>
      <p>Title: {name}</p>
      <p>Price: {price}</p>
      <p>Color: {color}</p>
      <p>Quantity: {quantity}</p>
      
    </div>
  )
}
