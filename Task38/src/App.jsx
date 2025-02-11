import React from "react";
import Person from "./Components/Person";
import Product from "./Components/Product";

export default function App() {
  const person = { name: "bhavin", age: 21 };
  const product = { name: "Chalanger", price: "$120000" };
  return (
    <>
      <Person person={person} />
      <Product product={product} />
    </>
  );
}