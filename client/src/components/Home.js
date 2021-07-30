// import react
import React from "react";
// import useState and useEffect
import { useState } from "react";
import { useEffect } from "react";
// import Link
import { Link } from "react-router-dom";
// import Map component
import Map from "./Map";
// import RestDisplay component
import RestDisplay from "./RestDisplay";

function Home() {
  // set a new state variable "restaurant" with a default value of null
  const [restaurant, setRestaurant] = useState("");
  // set a new state variable "modal" with a default value of null
  const [modal, setModal] = useState("");
  // function to handle when the modal opens. recieves the restaurant id as argument.
  const handleModalOpen = (id) => {
    // sets modal to the id
    setModal(id);
  };
  // sets modal to null when called
  const handleModalClose = () => {
    setModal("");
  };
  // use effect to fetch json file containing all restaurants
  useEffect(() => {
    // if restaurant is null
    if (!restaurant) {
      // fetch from this path
      fetch("/restaurants/all")
        .then((res) => res.json())
        .then((obj) => {
          // set restaurant to the result
          setRestaurant(obj);
        });
    }
  });

  return (
    <div>
      {/* contains all contents */}
      <div className="container">
        {/* contains restaurant header, list of restaurants, and restaurant modal */}
        <div className="restaurants">
          <h2 id="restaurants-head">Restaurants:</h2>
          {/* contains list of restaurants */}
          <ul className="restaurants-ul">
            {/* if restaurant is true (containing all restaurants) */}
            {restaurant ? (
              // map over restaurant, taking the individual restaurant and its index
              restaurant.map((restaurant, index) => (
                <Link
                  // link to the path /restaurant/ + the individual restaurant's id
                  to={"/restaurant/" + restaurant.id}
                  className="rest-list-item"
                >
                  {/* create a div containing the list item */}
                  <div
                    // with a unique key of the restaurant's index
                    key={index}
                    className="rest-list-item-div"
                    // when the user's mouse goes over this div, call handleModalOpen function passing through the restaurant's id
                    onMouseEnter={() => handleModalOpen(restaurant.id)}
                    // when the user's mouse leaves the div, call the handleModalClose function
                    onMouseLeave={() => handleModalClose()}
                  >
                    {/* create a li element displaying the restaurant's name */}
                    <li>{restaurant.name}</li>
                  </div>
                </Link>
              ))
              // else display "Loading"
            ) : (
              <p>Loading...</p>
            )}
          </ul>
          {/* if modal is true, this div contains the RestDisplay component passing modal as a prop */}
          <div id="modal-div">{modal && <RestDisplay modal={modal} />}</div>
        </div>
        {/* div containing the map */}
        <div className="map-container">
          {/* map component passing center, restInfo, and zoom props */}
          <Map
            // center is a hardcoded value, centered in burlington where each restaurant is in view
            center={[44.4807499, -73.2089591]}
            // restInfo is the restaurant object containing all restaurants
            restInfo={restaurant}
            // zoom is a hardcoded value
            zoom={13.5}
          />
        </div>
      </div>
    </div>
  );
}
// export Home
export default Home;
