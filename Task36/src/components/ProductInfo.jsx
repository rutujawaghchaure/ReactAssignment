import React from 'react';

export default function ProductInfo() {
  const products = [
    { name: "Challenger", price: "$120,000", availability: true },
    { name: "Charger", price: "$100,000", availability: true },
    { name: "AMG", price: "$150,000", availability: false }
  ];

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.availability ? "Available" : "Not Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}