import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState ([])
  const [filteredPlants, setFilteredPlants] = useState ([])
  const [clicked, setClicked] = useState (false)
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => {
      setPlants(data)
      setFilteredPlants(data)
    })
  }, [clicked])

  return (
    <main>
      <NewPlantForm setClicked={setClicked}/>
      <Search plants={plants} setFilteredPlants={setFilteredPlants}/>
      <PlantList plants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;