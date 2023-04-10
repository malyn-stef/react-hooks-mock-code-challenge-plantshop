import React from "react";
import PlantCard from "./PlantCard";
import { v4 as uuidv4 } from 'uuid'
function PlantList({ plants }) {



  const renderPlants = plants !== 'Loading...' ? plants.map((plant) => <PlantCard key={uuidv4()} plant={plant} />) : <p>{plants}</p>

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
