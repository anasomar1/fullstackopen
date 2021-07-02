import React from "react";

const Persons = ({ persons }) => {
  return (
    <>
      <li>
        {persons.map((person, i) => (
          <li key={i}>
            {person.name} {person.number}
          </li>
        ))}
      </li>
    </>
  );
};

export default Persons;
