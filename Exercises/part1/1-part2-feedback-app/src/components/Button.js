import React from "react";

const Button = ({ increaseCount, text }) => (
  <button style={{ margin: "0 0.5rem" }} onClick={increaseCount}>
    {text}
  </button>
);

export default Button;
