import { useState, useEffect } from "react";

const RestDisplay = ({ modal }) => {
  // set a new state variable "restaurant" with a default value of null
  const [restaurant, setRestaurant] = useState("");
  // use effect to fetch individual restaurant file
  useEffect(() => {
    // if restaurant is fault
    if (!restaurant) {
      // modal is the restaurant id
      fetch("/restaurants/" + modal)
        .then((res) => res.json())
        .then((obj) => {
          // set restaurant to be an object of containing the restaurant's id, name, address, number, and hours. obj is an array so these values are taken from index 0.
          setRestaurant({
            id: obj[0].id,
            name: obj[0].name,
            address: obj[0].address,
            number: obj[0].number,
            hours: obj[0].hours,
          });
        });
    }
  }, [restaurant, modal]);

  return (
    // contains the restaurant info
    <div className="rest-display">
      {/* if restaurant is true (has been set)*/}
      {restaurant ? (
        // display restaurant info
        <div className="inner-rest-display">
          <h2>{restaurant.name}</h2>
          <ul>
            <li>{restaurant.address}</li>
            <li>{restaurant.number}</li>
            <li>{restaurant.hours}</li>
          </ul>
        </div>
      ) : (
        // else display loading...
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestDisplay;
