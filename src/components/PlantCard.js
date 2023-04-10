import React, { useState } from "react";

function PlantCard({ plant }) {
  const [buttonTrue, setButton] = useState(true)

  function handleClick() {
    setButton(!buttonTrue)
  }


  const buttonHandling = buttonTrue ? (
    <button className="primary" onClick={handleClick}>In Stock</button>
  ) : (
    <button onClick={handleClick}>Out of Stock</button>
  )
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {buttonHandling}
    </li>
  );
}

export default PlantCard;
