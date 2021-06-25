import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / 2;
  const positivePercent = `${(good / total) * 100}%`;

  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="total" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positivePercent" value={positivePercent} />
    </div>
  );
};

export default Statistics;
