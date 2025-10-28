import React from "react";

const Ul = ({ todos }) => {
  return (
    <ul>
      {todos.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
};

export default Ul;
