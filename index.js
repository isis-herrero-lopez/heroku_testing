const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log("listening to port");
});

//routes
const locations = require("./routes/locations.js");

//middleware
app.use("/locations", locations);

locations.get("/", (req, res) => {
  res.send("hello");
});

locations.get("/1", (req, res) => {
  res.send({"id": 1, "latitude": 60, "longitude": 60});
});
