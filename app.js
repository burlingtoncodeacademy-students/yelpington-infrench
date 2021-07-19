const express = require("express");
const port = process.env.PORT || 5000;
const path = require("path");

const app = express();
const restaurantsDir = path.resolve("./restaurants");
const publicDir = path.resolve("./client/public");

app.use(express.static("/client/public"));

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/restaurants/restaurants.json");
});

app.get("/restaurants/all", (req, res) => {
  res.sendFile(__dirname + "/restaurants/all-restaurants.json");
});

// app.get('/restaurant/:restaurantId', (req, res) => {
//     res.sendFile("./client/components/Restaurant.js")
// })

app.get("/restaurants/:restaurantId", (req, res) => {
  res.sendFile(path.join(restaurantsDir, req.params.restaurantId + ".json"));
});

app.listen(port, () => {
  console.log(`yelp server listening on port ${port}!`);
});
