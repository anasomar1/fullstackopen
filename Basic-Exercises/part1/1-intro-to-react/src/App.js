import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const History = ({ clicks }) => {
  if (clicks.length === 0) {
    return <div>You should click the buttons above</div>;
  }
  return <div>Clicked buttons history: {clicks}</div>;
};
const App = () => {
  const [counter, setCounter] = useState(0);
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  const [clicks, setClicks] = useState([]);
  const total = parts.reduce((sum, curr) => sum + curr.exercises, 0);
  const increaseCounter = () => {
    setClicks(clicks.concat("+"));
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setClicks(clicks.concat("-"));
    setCounter(counter - 1);
  };
  return (
    <div>
      <p>The count is {counter}</p>
      <button onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
      <Header course={course} />
      {parts.map((part) => {
        return (
          <Content
            name={part.name}
            key={part.name}
            exercises={part.exercises}
          />
        );
      })}
      <History clicks={clicks} />
      <Total total={total} />
    </div>
  );
};

export default App;
