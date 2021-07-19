import { useState, useEffect } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";

const Restaurant = ({ restId, handleModalClose }) => {
  const [restaurant, setRestaurant] = useState("");
  console.log(restaurant);
  console.log("in restaurant");
  console.log(restId);
  useEffect(() => {
    if (!restaurant) {
      fetch("/restaurants/" + restId)
        .then((res) => res.json())
        .then((obj) => {
          console.log(obj);
          setRestaurant(obj);
        });
    }
  }, [restaurant, restId]);

  console.log(restaurant);

  return (
    <div>
      <Link to="/">Home</Link>
      {restaurant ? (
        <div className="container">
          <div className="restaurants">
            <h2>{restaurant[0].name}</h2>
            <div className="restaurant-content">
              <p>{restaurant[0].address}</p>
              <p>{restaurant[0].number}</p>
              <p>{restaurant[0].hours}</p>
              <p>"{restaurant[0].notes}"</p>
            </div>
          </div>
          <div className="map-container">
            <Map
              center={restaurant[0].coords}
              restInfo={restaurant}
              zoom={15}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Restaurant;
