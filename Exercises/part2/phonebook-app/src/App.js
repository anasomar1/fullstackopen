import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [search, setSearch] = useState("");
  const addPerson = (event) => {
    event.preventDefault();
    const personData = {
      name: newName,
      number,
      id: Math.random(),
    };
    persons.find((person) => person.name === personData.name)
      ? alert(` ${personData.name} is already added to the phonebook`)
      : setPersons(persons.concat(personData));
    setNewName("");
    setNumber("");
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setFilteredPersons(response.data);
    });
  }, []);

  const handleInputNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleInputNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const foundPersons = persons.filter((person) =>
      person.name.includes(search)
    );
    setFilteredPersons(foundPersons);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInputNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleInputNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <Persons persons={filteredPersons} />
      </ul>
    </div>
  );
};

export default App;
