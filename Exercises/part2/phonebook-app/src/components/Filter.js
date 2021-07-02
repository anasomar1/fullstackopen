import React from "react";

const Filter = ({ handleSearch, search }) => {
  return (
    <div>
      search : <input value={search} onChange={handleSearch} />
    </div>
  );
};

export default Filter;
