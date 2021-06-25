import React, { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div className="buttons" style={{ display: "flex" }}>
        <Button text="good" increaseCount={() => setGood(good + 1)} />
        <Button text="neutral" increaseCount={() => setNeutral(neutral + 1)} />
        <Button text="bad" increaseCount={() => setBad(bad + 1)} />
      </div>
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
