import React from 'react'

export default function Product(props) {
  return (
    <>
      <h2>Product: {props.product.name}</h2>
      <p>Price: {props.product.price}</p>
    </>
  )
}