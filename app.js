// import express
const express = require("express");
// sets port to 5000
const port = process.env.PORT || 5000;
const path = require("path");
const app = express();
// set up a path to restaurants folder
const restaurantsDir = path.resolve("./restaurants");
// set up static server to front end
app.use(express.static("/client/public"));
// when user goes to localhost:5000/api, show list of restaurant id's
app.get("/api", (req, res) => {
  // from the json file containing restaurant id's
  res.sendFile(__dirname + "/restaurants/restaurants.json");
});
// used to fetch file containing all restaurant objects
app.get("/restaurants/all", (req, res) => {
  res.sendFile(__dirname + "/restaurants/all-restaurants.json");
});
// used to fetch a specific restaurant based on their id
app.get("/restaurants/:restaurantId", (req, res) => {
  // req.params.restaurantId pulls the restaurants id from the url
  res.sendFile(path.join(restaurantsDir, req.params.restaurantId + ".json"));
});
// listens on port 5000 as assigned above
app.listen(port, () => {
  console.log(`yelp server listening on port ${port}!`);
});
