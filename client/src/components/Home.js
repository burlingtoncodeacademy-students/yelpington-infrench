import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import RestDisplay from "./RestDisplay";

function Home() {
  const [restaurant, setRestaurant] = useState("");
  const [modal, setModal] = useState("");

  const handleModalOpen = (id) => {
    setModal(id);
    console.log(modal);
  };

  const handleModalClose = () => {
    setModal("");
    console.log(modal);
  };

  useEffect(() => {
    if (!restaurant) {
      fetch("/restaurants/all")
        .then((res) => res.json())
        .then((obj) => {
          setRestaurant(obj);
        });
    }
  });

  return (
    <div>
      <div className="container">
        <div className="restaurants">
          <h2 id="restaurants-head">Restaurants:</h2>
          <ul className="restaurants-ul">
            {restaurant ? (
              restaurant.map((restaurant, index) => (
                <Link
                  to={"/restaurant/" + restaurant.id}
                  className="rest-list-item"
                >
                  <div
                    key={index}
                    className="rest-list-item-div"
                    onMouseEnter={() => handleModalOpen(restaurant.id)}
                    onMouseLeave={() => handleModalClose()}
                  >
                    <li>{restaurant.name}</li>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
          <div id="modal-div">{modal && <RestDisplay modal={modal} />}</div>
        </div>
        <div className="map-container">
          <Map
            center={[44.4807499, -73.2089591]}
            restInfo={restaurant}
            zoom={13.5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
