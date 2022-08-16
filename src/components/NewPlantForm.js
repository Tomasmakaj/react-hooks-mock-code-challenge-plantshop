import React, {useState} from "react";

function NewPlantForm({setClicked}) {

  const initialObject = {name:"", image:"", price:""}
  const [newPlant, setNewPlant] = useState (initialObject)

  function handleChange(e) {
    setNewPlant({...newPlant,[e.target.name] : e.target.value })
  }
  
  function handleSubmit(e){
    e.preventDefault()

    
    // console.log(newObj)
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(data => {
      setClicked(prev => !prev)
      setNewPlant(initialObject)
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newPlant.name} name="name" placeholder="Plant name" />
        <input type="text" onChange={handleChange} value={newPlant.image} name="image" placeholder="Image URL" />
        <input type="number" onChange={handleChange} value={newPlant.price} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;