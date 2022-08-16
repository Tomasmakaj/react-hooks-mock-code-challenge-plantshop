import React, {useState} from "react";

function PlantCard({plant}) {
  const [clicked, setClicked] = useState(true)

  function handleClick() {
    setClicked(clicked => !clicked)
  }
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {clicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;