import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState('Loading...')
  const [allPlants, setAllPlants] = useState(null)

  function setSearchBar(search) {
    const newSearch = allPlants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
    setPlants(newSearch)
  }
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then((data) => {
        setAllPlants(data)
        setPlants(data)
      })

  }, [])

  function handleSubmit(newObj) {
    setPlants([...plants, newObj])
  }

  return (
    <main>
      <NewPlantForm onFormSubmit={handleSubmit} />
      <Search searchBar={setSearchBar} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
