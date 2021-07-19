import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RestDisplay = ({ modal, handleModalClose }) => {
  const [restaurant, setRestaurant] = useState("");
  console.log(restaurant);
  console.log("in restdisplay");
  console.log(modal);
  useEffect(() => {
    if (!restaurant) {
      fetch("/restaurants/" + modal)
        .then((res) => res.json())
        .then((obj) => {
          console.log(obj);
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
    <div className="rest-display">
      {restaurant ? (
        <div className="inner-rest-display">
          <h2>{restaurant.name}</h2>
          <ul>
            <li>{restaurant.address}</li>
            <li>{restaurant.number}</li>
            <li>{restaurant.hours}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RestDisplay;
