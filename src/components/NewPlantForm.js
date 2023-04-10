import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const [newPlantName, setNewPlant] = useState('')
  const [newPlantImage, SetNewImage] = useState('')
  const [newPlantPrice, setNewPrice] = useState('')

  const plantObj = {
    'name': newPlantName,
    'image': newPlantImage,
    'price': newPlantPrice
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(plantObj)
    })
      .then(res => res.json())
      .then(() => onFormSubmit(plantObj))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" name="name" placeholder="Plant name" onChange={e => setNewPlant(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={e => SetNewImage(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={e => setNewPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
