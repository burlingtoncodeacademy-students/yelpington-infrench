import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Link } from "react-router-dom";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = ({ center, restInfo, zoom }) => {
  console.log(restInfo);
  return (
    <div id="mapContainer">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "80vh", width: "40vw" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {restInfo ? (
          restInfo.map((restInfo, index) => (
            <Marker key={index} position={restInfo.coords} icon={DefaultIcon}>
              <Tooltip sticky>{restInfo.name}</Tooltip>
              <Popup>
                <Link to={"/restaurant/" + restInfo.id}>{restInfo.name}</Link>{" "}
                <br />
                {restInfo.address} <br />
                {restInfo.hours}
              </Popup>
            </Marker>
          ))
        ) : (
          <p>loading...</p>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
