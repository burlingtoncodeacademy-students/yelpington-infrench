import { useState, useEffect } from "react";
import Map from "./Map";
import { Link } from "react-router-dom";
// restaurant function receives restId prop
const Restaurant = ({ restId }) => {
  // sets new state variable "restaurant" with default value of null
  const [restaurant, setRestaurant] = useState("");
  // useEffect fetches individual restaurant json file
  useEffect(() => {
    // if restaurant is null
    if (!restaurant) {
      // fetch the the restaurant's json file by attaching the restaurants id to the url
      fetch("/restaurants/" + restId)
        .then((res) => res.json())
        .then((obj) => {
          // sets restaurant to the result
          setRestaurant(obj);
        });
    }
  }, [restaurant, restId]);

  return (
    // div containing all contents
    <div>
      {/* links to home page */}
      <Link to="/">Home</Link>
      {/* if restaurants is true */}
      {restaurant ? (
        // create div containing restaurant information and map
        <div className="container">
          {/* create div containing h2 with restaurant name and div with rest of restaurant info */}
          <div className="restaurants">
            {/* display restaurant name. restaurant is an array with one item so have to target index 0 */}
            <h2>{restaurant[0].name}</h2>
            {/* contains restaurant info. */}
            <div className="restaurant-content">
              <p>{restaurant[0].address}</p>
              <p>{restaurant[0].number}</p>
              <p>{restaurant[0].hours}</p>
              <p>"{restaurant[0].notes}"</p>
            </div>
          </div>
          {/* contains map component */}
          <div className="map-container">
            <Map
              // restaurant coordinates passed as prop to be center value
              center={restaurant[0].coords}
              // restaurant object passed as restInfo prop
              restInfo={restaurant}
              // zoom in slightly more for individual restaurants
              zoom={15}
            />
          </div>
        </div>
      ) : (
        // else (if restaurant is false) display loading
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Restaurant;
