import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    search &&
      axios
        .get(`https://restcountries.eu/rest/v2/name/${search}`)
        .then((response) => setCountries(response.data));
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {search === "" ? (
          <p>Search for a country</p>
        ) : countries.length >= 10 ? (
          <p>There are too many results </p>
        ) : (
          countries.map((country) => (
            <li key={country.capital}>{country.name}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
