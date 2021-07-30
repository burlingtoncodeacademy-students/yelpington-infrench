// importing all leaflet dependencies
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// importing link from react router
import { Link } from "react-router-dom";
// set up new icon for map marker
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  // icon size and anchor make the marker actually stay in the correct and exact location. without these the marker moves when you zoom in and out and is not precise.
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = ({ center, restInfo, zoom }) => {
  return (
    <div id="mapContainer">
      <MapContainer
        // coordinates that the map is centered on.
        center={center}
        // level of zoom
        zoom={zoom}
        // size of map
        style={{ height: "80vh", width: "40vw" }}
      >
        {/* makes the map look like a map, rather than a mess of tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* if restinfo (received as prop) is true */}
        {restInfo ? (
          // map each restaurant's info
          restInfo.map((restInfo, index) => (
            // create a marker on each restaurant's coordinates
            <Marker key={index} position={restInfo.coords} icon={DefaultIcon}>
              {/* when the marker is hovered over, display that restaurant's name. sticky keeps the tooltip 'stuck' to the mouse */}
              <Tooltip sticky>{restInfo.name}</Tooltip>
              {/* when the marker is clicked... */}
              <Popup>
                {/* display the restaurant's name as a link to the restaurants page */}
                <Link to={"/restaurant/" + restInfo.id}>{restInfo.name}</Link>{" "}
                <br />
                {/* and it's address and hours */}
                {restInfo.address} <br />
                {restInfo.hours}
              </Popup>
            </Marker>
          ))
        ) : (
          // else display loading
          <p>loading...</p>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
