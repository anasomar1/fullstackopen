import React from "react";
import Part from "./Part";

export const Course = ({ course }) => {
  const sum = course.parts.reduce((acc, current) => acc + current.exercises, 0);

  return (
    <>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <Part part={part} key={part.id} />
        ))}
      </ul>
      <p>total of {sum} exercises</p>
    </>
  );
};
