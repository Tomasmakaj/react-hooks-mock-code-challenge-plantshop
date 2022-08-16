import React from "react";

function Search({plants, setFilteredPlants}) {
  function handleChange(e) {
    let newArray = plants.filter((el, i) => {
      return el.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setFilteredPlants(newArray)
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;