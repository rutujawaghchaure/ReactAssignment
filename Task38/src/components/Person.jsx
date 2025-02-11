import React from "react";

export default function Person(props) {
  return (
    <>
      <h2>Hello, {props.person.name}</h2>
      <p>Age: {props.person.age}</p>
    </>
  );
}